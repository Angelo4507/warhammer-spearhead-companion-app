import React, { useState } from 'react';
import { MatchState, BattleTacticCard, SpearheadUnit, ObjectiveState } from '../types/spearhead';
import { SPEARHEAD_FACTIONS, BATTLE_TACTICS_DECK, TWIST_CARDS } from '../data/spearheadData';
import { BoardMap } from './BoardMap';
import { UnitWarscrollModal } from './UnitWarscrollModal';
import {
  Swords,
  Shield,
  Flag,
  Flame,
  Leaf,
  Sparkles,
  Plus,
  Minus,
  RefreshCw,
  Eye,
  CheckCircle2,
  Trash2,
  AlertTriangle,
  Heart,
  ChevronRight,
  ArrowRight,
  Trophy
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

interface MatchTrackerProps {
  match: MatchState;
  setMatch: React.Dispatch<React.SetStateAction<MatchState>>;
  soundEnabled: boolean;
  onFinishMatch: () => void;
}

export const MatchTracker: React.FC<MatchTrackerProps> = ({
  match,
  setMatch,
  soundEnabled,
  onFinishMatch
}) => {
  const [selectedUnitForModal, setSelectedUnitForModal] = useState<SpearheadUnit | null>(null);
  const [selectedUnitHealth, setSelectedUnitHealth] = useState<number | undefined>(undefined);
  const [showBoardMap, setShowBoardMap] = useState<boolean>(true);
  const [activePlayerTab, setActivePlayerTab] = useState<'P1' | 'P2'>('P1');
  const [viewingCard, setViewingCard] = useState<BattleTacticCard | null>(null);

  const p1Faction = SPEARHEAD_FACTIONS.find(f => f.id === match.p1.factionId) || SPEARHEAD_FACTIONS[0];
  const p2Faction = SPEARHEAD_FACTIONS.find(f => f.id === match.p2.factionId) || SPEARHEAD_FACTIONS[1];

  const p1IsUnderdog = match.p1.score < match.p2.score;
  const p2IsUnderdog = match.p2.score < match.p1.score;

  // Objective counts
  const p1ObjCount = Object.values(match.objectives).filter(s => s === 'P1').length;
  const p2ObjCount = Object.values(match.objectives).filter(s => s === 'P2').length;

  // Modify score
  const modifyScore = (player: 'P1' | 'P2', delta: number) => {
    if (soundEnabled) playSound(delta > 0 ? 'score' : 'click');
    setMatch(prev => ({
      ...prev,
      [player.toLowerCase()]: {
        ...prev[player === 'P1' ? 'p1' : 'p2'],
        score: Math.max(0, prev[player === 'P1' ? 'p1' : 'p2'].score + delta)
      }
    }));
  };

  // Modify CP
  const modifyCP = (player: 'P1' | 'P2', delta: number) => {
    if (soundEnabled) playSound('click');
    setMatch(prev => ({
      ...prev,
      [player === 'P1' ? 'p1' : 'p2']: {
        ...prev[player === 'P1' ? 'p1' : 'p2'],
        commandPoints: Math.max(0, prev[player === 'P1' ? 'p1' : 'p2'].commandPoints + delta)
      }
    }));
  };

  // Objective state change
  const handleObjectiveChange = (obj: 'A' | 'B' | 'C' | 'D', nextState: ObjectiveState) => {
    if (soundEnabled) playSound('click');
    setMatch(prev => ({
      ...prev,
      objectives: {
        ...prev.objectives,
        [obj]: nextState
      }
    }));
  };

  // Draw a card for player
  const drawCard = (player: 'P1' | 'P2') => {
    if (match.deck.length === 0) {
      if (soundEnabled) playSound('warning');
      return;
    }
    if (soundEnabled) playSound('cardDraw');

    setMatch(prev => {
      const drawn = prev.deck[0];
      const newDeck = prev.deck.slice(1);
      const targetPlayer = player === 'P1' ? 'p1' : 'p2';

      return {
        ...prev,
        deck: newDeck,
        [targetPlayer]: {
          ...prev[targetPlayer],
          hand: [...prev[targetPlayer].hand, drawn]
        }
      };
    });
  };

  // Discard card
  const discardCard = (player: 'P1' | 'P2', cardId: string) => {
    if (soundEnabled) playSound('click');
    setMatch(prev => {
      const targetPlayer = player === 'P1' ? 'p1' : 'p2';
      const card = prev[targetPlayer].hand.find(c => c.id === cardId);
      if (!card) return prev;

      return {
        ...prev,
        discardPile: [...prev.discardPile, card],
        [targetPlayer]: {
          ...prev[targetPlayer],
          hand: prev[targetPlayer].hand.filter(c => c.id !== cardId)
        }
      };
    });
  };

  // Score Battle Tactic card
  const scoreTacticCard = (player: 'P1' | 'P2', card: BattleTacticCard) => {
    if (soundEnabled) playSound('score');
    setMatch(prev => {
      const targetPlayer = player === 'P1' ? 'p1' : 'p2';
      return {
        ...prev,
        discardPile: [...prev.discardPile, card],
        [targetPlayer]: {
          ...prev[targetPlayer],
          score: prev[targetPlayer].score + card.tacticVP,
          completedTactics: [...prev[targetPlayer].completedTactics, card],
          hand: prev[targetPlayer].hand.filter(c => c.id !== card.id)
        },
        roundLogs: [
          ...prev.roundLogs,
          {
            round: prev.round,
            text: `${prev[targetPlayer].name} scored Battle Tactic "${card.tacticName}" (+${card.tacticVP} VP)`,
            timestamp: new Date().toLocaleTimeString()
          }
        ]
      };
    });
  };

  // Play Command reaction
  const playCommandReaction = (player: 'P1' | 'P2', card: BattleTacticCard) => {
    if (soundEnabled) playSound('click');
    setMatch(prev => {
      const targetPlayer = player === 'P1' ? 'p1' : 'p2';
      return {
        ...prev,
        discardPile: [...prev.discardPile, card],
        [targetPlayer]: {
          ...prev[targetPlayer],
          usedCommands: [...prev[targetPlayer].usedCommands, card],
          hand: prev[targetPlayer].hand.filter(c => c.id !== card.id)
        },
        roundLogs: [
          ...prev.roundLogs,
          {
            round: prev.round,
            text: `${prev[targetPlayer].name} issued Command "${card.commandName}" (${card.commandPhase})`,
            timestamp: new Date().toLocaleTimeString()
          }
        ]
      };
    });
  };

  // Re-draw Twist Card
  const redrawTwist = () => {
    if (soundEnabled) playSound('cardDraw');
    const realmTwists = TWIST_CARDS.filter(t => t.realm === match.realm);
    const available = realmTwists.filter(t => t.id !== match.activeTwist?.id);
    const chosen = available[Math.floor(Math.random() * available.length)] || realmTwists[0];

    setMatch(prev => ({
      ...prev,
      activeTwist: chosen,
      roundLogs: [
        ...prev.roundLogs,
        {
          round: prev.round,
          text: `Twist card drawn: ${chosen.name} (${chosen.ruleTitle})`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]
    }));
  };

  // Score End of Turn Objectives
  const scoreTurnObjectives = (player: 'P1' | 'P2') => {
    const isP1 = player === 'P1';
    const myCount = isP1 ? p1ObjCount : p2ObjCount;
    const oppCount = isP1 ? p2ObjCount : p1ObjCount;

    let pts = 0;
    if (myCount >= 1) pts += 1; // Hold 1
    if (myCount > oppCount && myCount > 0) pts += 1; // Hold More

    if (pts > 0) {
      if (soundEnabled) playSound('score');
      setMatch(prev => {
        const targetPlayer = isP1 ? 'p1' : 'p2';
        return {
          ...prev,
          [targetPlayer]: {
            ...prev[targetPlayer],
            score: prev[targetPlayer].score + pts
          },
          roundLogs: [
            ...prev.roundLogs,
            {
              round: prev.round,
              text: `${prev[targetPlayer].name} scored ${pts} Objective VP (${myCount >= 1 ? 'Hold 1' : ''}${myCount > oppCount ? ' + Hold More' : ''})`,
              timestamp: new Date().toLocaleTimeString()
            }
          ]
        };
      });
    }
  };

  // Switch Turn or Advance Round
  const advanceTurnOrRound = () => {
    if (match.currentTurn === 'P1') {
      if (soundEnabled) playSound('click');
      setMatch(prev => ({
        ...prev,
        currentTurn: 'P2',
        roundLogs: [
          ...prev.roundLogs,
          {
            round: prev.round,
            text: `Turn passed to ${prev.p2.name}`,
            timestamp: new Date().toLocaleTimeString()
          }
        ]
      }));
    } else {
      // End of round! Advance to next round or finish
      if (match.round >= 4) {
        if (soundEnabled) playSound('roundAdvance');
        setMatch(prev => ({ ...prev, isFinished: true }));
        onFinishMatch();
      } else {
        if (soundEnabled) playSound('roundAdvance');
        const nextRound = match.round + 1;
        // Draw new twist for next round
        const realmTwists = TWIST_CARDS.filter(t => t.realm === match.realm);
        const nextTwist = realmTwists[Math.floor(Math.random() * realmTwists.length)] || realmTwists[0];

        setMatch(prev => ({
          ...prev,
          round: nextRound,
          currentTurn: 'P1',
          activeTwist: nextTwist,
          p1: {
            ...prev.p1,
            commandPoints: prev.p1.commandPoints + 1 + (prev.p1.score < prev.p2.score ? 1 : 0)
          },
          p2: {
            ...prev.p2,
            commandPoints: prev.p2.commandPoints + 1 + (prev.p2.score < prev.p1.score ? 1 : 0)
          },
          roundLogs: [
            ...prev.roundLogs,
            {
              round: nextRound,
              text: `Round ${nextRound} began! Twist: ${nextTwist.name}`,
              timestamp: new Date().toLocaleTimeString()
            }
          ]
        }));
      }
    }
  };

  // Unit wound modifier
  const updateUnitWounds = (player: 'P1' | 'P2', unitId: string, delta: number) => {
    if (soundEnabled) playSound('click');
    setMatch(prev => {
      const targetPlayer = player === 'P1' ? 'p1' : 'p2';
      const currentUnitData = prev[targetPlayer].unitHealth[unitId];
      if (!currentUnitData) return prev;

      const newHealth = Math.max(0, Math.min(currentUnitData.maxHealth, currentUnitData.currentHealth + delta));
      const isSlain = newHealth === 0;

      return {
        ...prev,
        [targetPlayer]: {
          ...prev[targetPlayer],
          unitHealth: {
            ...prev[targetPlayer].unitHealth,
            [unitId]: {
              ...currentUnitData,
              currentHealth: newHealth,
              isSlain
            }
          }
        }
      };
    });
  };

  const currentPlayer = activePlayerTab === 'P1' ? match.p1 : match.p2;
  const currentFaction = activePlayerTab === 'P1' ? p1Faction : p2Faction;

  return (
    <div className="space-y-6">
      {/* Top Match HUD: Rounds, Initiative, VP Scoreboard */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Round & Turn Status Widget */}
        <div className="md:col-span-4 rounded-xl border border-zinc-800 bg-zinc-900/90 p-4 flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div>
              <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                Spearhead Battle Round
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-cinzel text-3xl font-black text-zinc-100">
                  ROUND {match.round}
                </span>
                <span className="text-xs font-mono text-zinc-500">/ 4</span>
              </div>
            </div>

            <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800 font-mono text-xs">
              <span className="text-zinc-500 px-1">Realm:</span>
              <span className={`px-2 py-0.5 rounded font-bold ${
                match.realm === 'Aqshy' ? 'bg-orange-950/80 text-orange-400' : 'bg-emerald-950/80 text-emerald-400'
              }`}>
                {match.realm}
              </span>
            </div>
          </div>

          {/* Active Turn indicator & Pass Turn Button */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">Active Turn:</span>
              <span className={`px-2.5 py-1 text-xs font-bold rounded border ${
                match.currentTurn === 'P1'
                  ? 'border-blue-500 bg-blue-950/60 text-blue-300'
                  : 'border-rose-500 bg-rose-950/60 text-rose-300'
              }`}>
                {match.currentTurn === 'P1' ? match.p1.name : match.p2.name}
              </span>
            </div>

            <button
              onClick={advanceTurnOrRound}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs tracking-wide transition-colors"
            >
              <span>{match.currentTurn === 'P1' ? 'Pass Turn' : match.round === 4 ? 'Finish Match' : 'Next Round'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Player 1 Score HUD */}
        <div className={`md:col-span-4 rounded-xl border p-4 shadow-md transition-all ${
          match.currentTurn === 'P1'
            ? 'border-blue-500/80 bg-blue-950/20 ring-1 ring-blue-500/30'
            : 'border-zinc-800 bg-zinc-900/80'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[10px] font-mono text-blue-400 uppercase font-bold">Player 1</span>
              <h3 className="font-cinzel text-base font-bold text-zinc-100 truncate max-w-[160px]">
                {match.p1.name}
              </h3>
              <span className="text-[11px] text-zinc-400">{p1Faction.name}</span>
            </div>
            {p1IsUnderdog && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Underdog (+1 CP)
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3">
            {/* Victory Points */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block">VP</span>
                <span className="font-mono text-2xl font-black text-amber-400">{match.p1.score}</span>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => modifyScore('P1', 1)}
                  className="h-6 w-6 rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold text-xs"
                >
                  +
                </button>
                <button
                  onClick={() => modifyScore('P1', -1)}
                  className="h-6 w-6 rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold text-xs"
                >
                  -
                </button>
              </div>
            </div>

            {/* Command Points */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block">CP</span>
                <span className="font-mono text-2xl font-black text-sky-400">{match.p1.commandPoints}</span>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => modifyCP('P1', 1)}
                  className="h-6 w-6 rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold text-xs"
                >
                  +
                </button>
                <button
                  onClick={() => modifyCP('P1', -1)}
                  className="h-6 w-6 rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold text-xs"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Player 2 Score HUD */}
        <div className={`md:col-span-4 rounded-xl border p-4 shadow-md transition-all ${
          match.currentTurn === 'P2'
            ? 'border-rose-500/80 bg-rose-950/20 ring-1 ring-rose-500/30'
            : 'border-zinc-800 bg-zinc-900/80'
        }`}>
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-[10px] font-mono text-rose-400 uppercase font-bold">Player 2</span>
              <h3 className="font-cinzel text-base font-bold text-zinc-100 truncate max-w-[160px]">
                {match.p2.name}
              </h3>
              <span className="text-[11px] text-zinc-400">{p2Faction.name}</span>
            </div>
            {p2IsUnderdog && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                Underdog (+1 CP)
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 mt-3">
            {/* Victory Points */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block">VP</span>
                <span className="font-mono text-2xl font-black text-amber-400">{match.p2.score}</span>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => modifyScore('P2', 1)}
                  className="h-6 w-6 rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold text-xs"
                >
                  +
                </button>
                <button
                  onClick={() => modifyScore('P2', -1)}
                  className="h-6 w-6 rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold text-xs"
                >
                  -
                </button>
              </div>
            </div>

            {/* Command Points */}
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-semibold text-zinc-500 block">CP</span>
                <span className="font-mono text-2xl font-black text-sky-400">{match.p2.commandPoints}</span>
              </div>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => modifyCP('P2', 1)}
                  className="h-6 w-6 rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold text-xs"
                >
                  +
                </button>
                <button
                  onClick={() => modifyCP('P2', -1)}
                  className="h-6 w-6 rounded bg-zinc-800 text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold text-xs"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Twist Card Banner */}
      {match.activeTwist && (
        <div className={`rounded-xl border p-4 shadow-md ${
          match.realm === 'Aqshy'
            ? 'border-orange-900/60 bg-gradient-to-r from-orange-950/40 via-zinc-900 to-zinc-900'
            : 'border-emerald-900/60 bg-gradient-to-r from-emerald-950/40 via-zinc-900 to-zinc-900'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800 text-amber-400 mt-0.5">
                {match.realm === 'Aqshy' ? <Flame className="h-5 w-5 text-orange-400" /> : <Leaf className="h-5 w-5 text-emerald-400" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                    Round {match.round} Active Twist
                  </span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-xs font-bold text-zinc-200">{match.activeTwist.name}</span>
                </div>
                <div className="mt-1 text-xs">
                  <span className="font-bold text-amber-400">{match.activeTwist.ruleTitle}: </span>
                  <span className="text-zinc-300">{match.activeTwist.ruleEffect}</span>
                </div>
              </div>
            </div>

            <button
              onClick={redrawTwist}
              className="self-end sm:self-center flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800/80 text-xs text-zinc-300 hover:text-white transition-colors whitespace-nowrap"
            >
              <RefreshCw className="h-3.5 w-3.5 text-zinc-400" />
              <span>Redraw Twist</span>
            </button>
          </div>
        </div>
      )}

      {/* Interactive Board & Objective Control Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flag className="h-4 w-4 text-amber-400" />
            <h3 className="font-cinzel text-sm font-bold text-zinc-200">
              Battlefield Objective Zones
            </h3>
          </div>
          <button
            onClick={() => setShowBoardMap(!showBoardMap)}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300"
          >
            {showBoardMap ? 'Hide Visual Map' : 'Show Visual Map'}
          </button>
        </div>

        {showBoardMap && (
          <BoardMap
            objectives={match.objectives}
            onObjectiveChange={handleObjectiveChange}
            p1Name={match.p1.name}
            p2Name={match.p2.name}
            realm={match.realm}
          />
        )}

        {/* Quick scoring helper */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-zinc-800 bg-zinc-950/60 p-3 text-xs">
          <span className="text-zinc-400">
            End of Turn Quick Scoring:
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scoreTurnObjectives('P1')}
              className="px-3 py-1.5 rounded-md border border-blue-500/50 bg-blue-950/40 text-blue-300 font-semibold hover:bg-blue-900/60 transition-colors"
            >
              Score {match.p1.name} Objectives
            </button>
            <button
              onClick={() => scoreTurnObjectives('P2')}
              className="px-3 py-1.5 rounded-md border border-rose-500/50 bg-rose-950/40 text-rose-300 font-semibold hover:bg-rose-900/60 transition-colors"
            >
              Score {match.p2.name} Objectives
            </button>
          </div>
        </div>
      </div>

      {/* Player Battle Deck & Unit Health Switcher */}
      <div className="space-y-4">
        {/* Player Selector Tabs */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActivePlayerTab('P1')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                activePlayerTab === 'P1'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {match.p1.name} Console ({p1Faction.name})
            </button>
            <button
              onClick={() => setActivePlayerTab('P2')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-colors ${
                activePlayerTab === 'P2'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {match.p2.name} Console ({p2Faction.name})
            </button>
          </div>

          <div className="text-xs font-mono text-zinc-400">
            Deck Remaining: <span className="text-amber-400 font-bold">{match.deck.length}</span> cards
          </div>
        </div>

        {/* Hand Manager */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-mono text-zinc-500 uppercase">
                Tactics & Reaction Deck
              </span>
              <h3 className="font-cinzel text-sm font-bold text-zinc-200">
                {currentPlayer.name}'s Hand ({currentPlayer.hand.length} / 3 Cards)
              </h3>
            </div>

            <button
              onClick={() => drawCard(activePlayerTab)}
              disabled={currentPlayer.hand.length >= 3 || match.deck.length === 0}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs disabled:opacity-40 transition-colors flex items-center gap-1.5"
            >
              <Plus className="h-4 w-4" />
              <span>Draw Card</span>
            </button>
          </div>

          {/* Hand Cards Grid */}
          {currentPlayer.hand.length === 0 ? (
            <div className="text-center py-8 rounded-lg border border-dashed border-zinc-800 text-zinc-500 text-xs">
              No cards in hand. Click "Draw Card" to draw your battle tactic order.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentPlayer.hand.map(card => (
                <div
                  key={card.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-950 flex flex-col justify-between overflow-hidden shadow-lg hover:border-amber-500/40 transition-all"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between bg-zinc-900/80 px-3.5 py-2 border-b border-zinc-800">
                    <span className="font-mono text-xs font-bold text-amber-400">#{card.cardNumber}</span>
                    <button
                      onClick={() => discardCard(activePlayerTab, card.id)}
                      title="Discard Card"
                      className="text-zinc-500 hover:text-rose-400 p-0.5 rounded transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Battle Tactic Half */}
                  <div className="p-3.5 border-b border-dashed border-zinc-800/80 bg-amber-950/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-cinzel text-xs font-bold text-zinc-100">{card.tacticName}</span>
                      <span className="font-mono text-[11px] font-bold text-amber-300">+{card.tacticVP} VP</span>
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-snug">{card.tacticCondition}</p>
                    <button
                      onClick={() => scoreTacticCard(activePlayerTab, card)}
                      className="w-full py-1.5 rounded bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-[11px] transition-colors"
                    >
                      Score Tactic (+{card.tacticVP} VP)
                    </button>
                  </div>

                  {/* Command Ability Half */}
                  <div className="p-3.5 bg-zinc-950/60 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-cinzel text-xs font-bold text-sky-300">{card.commandName}</span>
                      <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400">
                        {card.commandPhase}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-snug">{card.commandEffect}</p>
                    <button
                      onClick={() => playCommandReaction(activePlayerTab, card)}
                      className="w-full py-1.5 rounded bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 font-bold text-[11px] transition-colors"
                    >
                      Use Command Reaction
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Live Army Units & Health Tracker */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-rose-500" />
              <h3 className="font-cinzel text-sm font-bold text-zinc-200">
                {currentPlayer.name}'s Regiment Status ({currentFaction.units.length} Units)
              </h3>
            </div>
            <span className="text-xs text-zinc-500">Tap unit name for full warscroll</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentFaction.units.map(unit => {
              const uHealth = currentPlayer.unitHealth[unit.id] || {
                currentHealth: unit.health,
                maxHealth: unit.health,
                isSlain: false
              };
              const healthPercent = Math.round((uHealth.currentHealth / uHealth.maxHealth) * 100);

              return (
                <div
                  key={unit.id}
                  className={`rounded-xl border p-4 transition-all ${
                    uHealth.isSlain
                      ? 'border-zinc-800/60 bg-zinc-950/40 opacity-50'
                      : 'border-zinc-800 bg-zinc-950/80 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <button
                      onClick={() => {
                        setSelectedUnitForModal(unit);
                        setSelectedUnitHealth(uHealth.currentHealth);
                      }}
                      className="text-left font-cinzel text-xs font-bold text-zinc-100 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>{unit.name}</span>
                      <Eye className="h-3.5 w-3.5 text-zinc-500" />
                    </button>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">
                      {unit.role}
                    </span>
                  </div>

                  {/* Health gauge bar */}
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-zinc-400">Health:</span>
                      <span className={uHealth.isSlain ? 'text-rose-500 font-bold' : 'text-emerald-400 font-bold'}>
                        {uHealth.isSlain ? 'SLAIN' : `${uHealth.currentHealth} / ${uHealth.maxHealth} HP`}
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          healthPercent > 50
                            ? 'bg-emerald-500'
                            : healthPercent > 20
                            ? 'bg-amber-500'
                            : 'bg-rose-500'
                        }`}
                        style={{ width: `${healthPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Wound Allocation Buttons */}
                  <div className="flex items-center justify-between pt-1 border-t border-zinc-800/80">
                    <span className="text-[10px] text-zinc-500">Allocate Wounds:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateUnitWounds(activePlayerTab, unit.id, -1)}
                        disabled={uHealth.currentHealth <= 0}
                        className="h-7 w-7 rounded bg-zinc-800 hover:bg-zinc-700 text-rose-400 font-bold flex items-center justify-center text-xs disabled:opacity-40"
                      >
                        -1
                      </button>
                      <button
                        onClick={() => updateUnitWounds(activePlayerTab, unit.id, 1)}
                        disabled={uHealth.currentHealth >= uHealth.maxHealth}
                        className="h-7 w-7 rounded bg-zinc-800 hover:bg-zinc-700 text-emerald-400 font-bold flex items-center justify-center text-xs disabled:opacity-40"
                      >
                        +1
                      </button>
                    </div>
                  </div>

                  {unit.isReinforcement && (
                    <div className="mt-2 text-[10px] text-amber-400 font-medium">
                      ✦ {unit.reinforcementNote || 'Reinforcement'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Round Logs */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 space-y-2">
          <span className="block text-[10px] uppercase font-mono font-bold text-zinc-500">
            Battle Log (Round {match.round})
          </span>
          <div className="max-h-32 overflow-y-auto space-y-1 pr-1 text-xs font-mono">
            {match.roundLogs.slice(-6).map((log, idx) => (
              <div key={idx} className="text-zinc-400 flex items-center gap-2">
                <span className="text-zinc-600 text-[10px]">{log.timestamp}</span>
                <span>·</span>
                <span className="text-zinc-300">{log.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Unit Warscroll Modal */}
      <UnitWarscrollModal
        unit={selectedUnitForModal}
        currentHealth={selectedUnitHealth}
        onClose={() => setSelectedUnitForModal(null)}
        onModifyHealth={delta => {
          if (selectedUnitForModal) {
            updateUnitWounds(activePlayerTab, selectedUnitForModal.id, delta);
            setSelectedUnitHealth(h => (h !== undefined ? Math.max(0, h + delta) : undefined));
          }
        }}
      />
    </div>
  );
};
