import React, { useState } from 'react';
import { MatchState, BattleTacticCard, SpearheadUnit } from '../types/spearhead';
import { SPEARHEAD_FACTIONS, BATTLE_TACTICS_DECK, TWIST_CARDS } from '../data/spearheadData';
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
  Trophy,
  Target,
  RotateCcw
} from 'lucide-react';

interface MatchTrackerProps {
  match: MatchState;
  setMatch: React.Dispatch<React.SetStateAction<MatchState>>;
  onFinishMatch: () => void;
  onCancelMatch: () => void;
}

export const MatchTracker: React.FC<MatchTrackerProps> = ({
  match,
  setMatch,
  onFinishMatch,
  onCancelMatch,
}) => {
  const [selectedUnitForModal, setSelectedUnitForModal] = useState<SpearheadUnit | null>(null);
  const [selectedUnitHealth, setSelectedUnitHealth] = useState<number | undefined>(undefined);
  const [activePlayerTab, setActivePlayerTab] = useState<'P1' | 'P2'>('P1');
  const [viewingCard, setViewingCard] = useState<BattleTacticCard | null>(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState<boolean>(false);

  // Track primary objective scoring per round (Max 3 VP per round)
  const [roundObjectives, setRoundObjectives] = useState<{
    P1: { hold1: boolean; hold2: boolean; holdMore: boolean };
    P2: { hold1: boolean; hold2: boolean; holdMore: boolean };
  }>({
    P1: { hold1: false, hold2: false, holdMore: false },
    P2: { hold1: false, hold2: false, holdMore: false }
  });

  // Track secondary objective (Battle Tactics) VP per round (Max 3 VP per round)
  const [roundSecondaryVP, setRoundSecondaryVP] = useState<{
    P1: number;
    P2: number;
  }>({
    P1: 0,
    P2: 0
  });

  const p1Faction = SPEARHEAD_FACTIONS.find(f => f.id === match.p1.factionId) || SPEARHEAD_FACTIONS[0];
  const p2Faction = SPEARHEAD_FACTIONS.find(f => f.id === match.p2.factionId) || SPEARHEAD_FACTIONS[1];

  const p1IsUnderdog = match.p1.score < match.p2.score;
  const p2IsUnderdog = match.p2.score < match.p1.score;

  const getPrimaryScore = (player: 'P1' | 'P2') => {
    return (
      (roundObjectives[player].hold1 ? 1 : 0) +
      (roundObjectives[player].hold2 ? 1 : 0) +
      (roundObjectives[player].holdMore ? 1 : 0)
    );
  };

  const toggleObjective = (player: 'P1' | 'P2', type: 'hold1' | 'hold2' | 'holdMore') => {
    const isCurrentlyScored = roundObjectives[player][type];
    const targetKey = player === 'P1' ? 'p1' : 'p2';
    const currentPrimary = getPrimaryScore(player);

    // If trying to score, but already at max 3 VP cap
    if (!isCurrentlyScored && currentPrimary >= 3) {
      return;
    }

    const delta = isCurrentlyScored ? -1 : 1;
    const label = type === 'hold1' ? 'Hold 1' : type === 'hold2' ? 'Hold 2+' : 'Hold More';
    const newPrimary = currentPrimary + delta;

    setRoundObjectives(prev => ({
      ...prev,
      [player]: {
        ...prev[player],
        [type]: !isCurrentlyScored
      }
    }));

    setMatch(prev => ({
      ...prev,
      [targetKey]: {
        ...prev[targetKey],
        score: Math.max(0, prev[targetKey].score + delta)
      },
      roundLogs: [
        ...prev.roundLogs,
        {
          round: prev.round,
          text: !isCurrentlyScored
            ? `${prev[targetKey].name} scored ${label} (+1 VP) [Round ${prev.round} Primary: ${newPrimary}/3 VP]`
            : `Undid ${label} for ${prev[targetKey].name} (-1 VP) [Round ${prev.round} Primary: ${newPrimary}/3 VP]`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]
    }));
  };

  const resetRoundPrimary = (player: 'P1' | 'P2') => {
    const currentPrimary = getPrimaryScore(player);
    if (currentPrimary === 0) return;
    const targetKey = player === 'P1' ? 'p1' : 'p2';

    setRoundObjectives(prev => ({
      ...prev,
      [player]: { hold1: false, hold2: false, holdMore: false }
    }));

    setMatch(prev => ({
      ...prev,
      [targetKey]: {
        ...prev[targetKey],
        score: Math.max(0, prev[targetKey].score - currentPrimary)
      },
      roundLogs: [
        ...prev.roundLogs,
        {
          round: prev.round,
          text: `Reset Round ${prev.round} primary objectives for ${prev[targetKey].name} (-${currentPrimary} VP)`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]
    }));
  };

  const modifyRoundSecondaryVP = (player: 'P1' | 'P2', delta: number) => {
    const currentSecVP = roundSecondaryVP[player];
    const newSecVP = Math.max(0, Math.min(3, currentSecVP + delta));
    const actualDelta = newSecVP - currentSecVP;
    if (actualDelta === 0) return;

    const targetKey = player === 'P1' ? 'p1' : 'p2';

    setRoundSecondaryVP(prev => ({
      ...prev,
      [player]: newSecVP
    }));

    setMatch(prev => ({
      ...prev,
      [targetKey]: {
        ...prev[targetKey],
        score: Math.max(0, prev[targetKey].score + actualDelta)
      },
      roundLogs: [
        ...prev.roundLogs,
        {
          round: prev.round,
          text: `${prev[targetKey].name} secondary VP adjusted by ${actualDelta > 0 ? `+${actualDelta}` : actualDelta} VP [Round ${prev.round} Secondary: ${newSecVP}/3 VP]`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]
    }));
  };

  // Modify score
  const modifyScore = (player: 'P1' | 'P2', delta: number) => {
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
    setMatch(prev => ({
      ...prev,
      [player === 'P1' ? 'p1' : 'p2']: {
        ...prev[player === 'P1' ? 'p1' : 'p2'],
        commandPoints: Math.max(0, prev[player === 'P1' ? 'p1' : 'p2'].commandPoints + delta)
      }
    }));
  };

  // Draw a card for player
  const drawCard = (player: 'P1' | 'P2') => {
    if (match.deck.length === 0) {
      return;
    }

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

  // Score Battle Tactic card (Capped at max 3 VP per round)
  const scoreTacticCard = (player: 'P1' | 'P2', card: BattleTacticCard) => {
    const currentSecVP = roundSecondaryVP[player];
    if (currentSecVP >= 3) {
      return;
    }

    const available = 3 - currentSecVP;
    const awardedVP = Math.min(card.tacticVP, available);
    const newSecVP = currentSecVP + awardedVP;
    const targetKey = player === 'P1' ? 'p1' : 'p2';

    setRoundSecondaryVP(prev => ({
      ...prev,
      [player]: newSecVP
    }));

    setMatch(prev => ({
      ...prev,
      discardPile: [...prev.discardPile, card],
      [targetKey]: {
        ...prev[targetKey],
        score: prev[targetKey].score + awardedVP,
        completedTactics: [...prev[targetKey].completedTactics, card],
        hand: prev[targetKey].hand.filter(c => c.id !== card.id)
      },
      roundLogs: [
        ...prev.roundLogs,
        {
          round: prev.round,
          text: `${prev[targetKey].name} scored Battle Tactic "${card.tacticName}" (+${awardedVP} VP) [Round ${prev.round} Secondary: ${newSecVP}/3 VP]`,
          timestamp: new Date().toLocaleTimeString()
        }
      ]
    }));
  };

  // Play Command reaction
  const playCommandReaction = (player: 'P1' | 'P2', card: BattleTacticCard) => {
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

  // Switch Turn or Advance Round
  const advanceTurnOrRound = () => {
    if (match.currentTurn === 'P1') {
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
        setMatch(prev => ({ ...prev, isFinished: true }));
        onFinishMatch();
      } else {
        const nextRound = match.round + 1;
        // Reset round primary objective checklist for the new round (max 3 VP / round)
        setRoundObjectives({
          P1: { hold1: false, hold2: false, holdMore: false },
          P2: { hold1: false, hold2: false, holdMore: false }
        });

        // Reset round secondary objectives VP for the new round (max 3 VP / round)
        setRoundSecondaryVP({
          P1: 0,
          P2: 0
        });

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

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-lg border border-zinc-800 font-mono text-xs">
                <span className="text-zinc-500 px-1">Realm:</span>
                <span className={`px-2 py-0.5 rounded font-bold ${
                  match.realm === 'Aqshy' ? 'bg-orange-950/80 text-orange-400' : 'bg-emerald-950/80 text-emerald-400'
                }`}>
                  {match.realm}
                </span>
              </div>
              <button
                onClick={() => setShowCancelConfirm(true)}
                title="Cancel and abandon this match"
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-rose-900/50 bg-rose-950/30 text-rose-400 hover:bg-rose-900/50 hover:border-rose-700 text-xs font-semibold transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Cancel</span>
              </button>
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

          {/* Round Objective VP Caps Breakdown */}
          <div className="mt-2.5 flex items-center justify-between px-2.5 py-1 rounded bg-zinc-950/50 border border-zinc-800/80 text-[10px] font-mono">
            <span className="text-zinc-500 font-semibold uppercase">Round {match.round} Caps:</span>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">
                Prim {getPrimaryScore('P1')}/3
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-emerald-400 font-bold">
                Sec {roundSecondaryVP.P1}/3
              </span>
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

          {/* Round Objective VP Caps Breakdown */}
          <div className="mt-2.5 flex items-center justify-between px-2.5 py-1 rounded bg-zinc-950/50 border border-zinc-800/80 text-[10px] font-mono">
            <span className="text-zinc-500 font-semibold uppercase">Round {match.round} Caps:</span>
            <div className="flex items-center gap-1.5">
              <span className="text-amber-400 font-bold">
                Prim {getPrimaryScore('P2')}/3
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-emerald-400 font-bold">
                Sec {roundSecondaryVP.P2}/3
              </span>
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

      {/* Streamlined End-of-Turn Primary Objectives Scoring Console (Max 3 VP per round) */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-4 shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Target className="h-4 w-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-sm font-bold text-zinc-100 tracking-wide">
                  Round {match.round} Primary Objectives
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Max 3 VP / Round
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Score up to 3 Victory Points per round at end of turn based on physical tabletop objective control
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {(getPrimaryScore('P1') > 0 || getPrimaryScore('P2') > 0) && (
              <button
                onClick={() => {
                  resetRoundPrimary('P1');
                  resetRoundPrimary('P2');
                }}
                title="Reset primary objectives for current round and roll back scored points"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] text-zinc-400 hover:text-zinc-200 border border-zinc-800 hover:border-zinc-700 bg-zinc-950 transition-colors"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset Round Primary</span>
              </button>
            )}
          </div>
        </div>

        {/* Dual Player Objective Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Player 1 Objective Console */}
          {(() => {
            const p1Prim = getPrimaryScore('P1');
            return (
              <div className={`rounded-xl border p-3.5 transition-all ${
                match.currentTurn === 'P1'
                  ? 'border-blue-500/60 bg-blue-950/20 shadow-sm'
                  : 'border-zinc-800/80 bg-zinc-950/50'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="font-cinzel text-xs font-bold text-zinc-200 truncate">
                      {match.p1.name}
                    </span>
                    {match.currentTurn === 'P1' && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/40">
                        Active Turn
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-mono font-bold text-amber-400">
                        Primary: {p1Prim} / 3 VP
                      </span>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[1, 2, 3].map(step => (
                          <div
                            key={step}
                            className={`h-1.5 w-3.5 rounded-full transition-all ${
                              p1Prim >= step
                                ? 'bg-blue-400 shadow-sm shadow-blue-500/50'
                                : 'bg-zinc-800'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    {p1Prim > 0 && (
                      <button
                        onClick={() => resetRoundPrimary('P1')}
                        title="Reset P1 round primary points"
                        className="text-[10px] text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-zinc-800/50"
                      >
                        <RotateCcw className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {/* Hold 1 Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleObjective('P1', 'hold1')}
                    disabled={!roundObjectives.P1.hold1 && p1Prim >= 3}
                    className={`flex flex-col items-start p-2.5 rounded-lg border text-left transition-all ${
                      roundObjectives.P1.hold1
                        ? 'border-blue-500 bg-blue-600/20 text-blue-100 shadow-sm'
                        : p1Prim >= 3
                        ? 'border-zinc-800/60 bg-zinc-950/40 text-zinc-600 opacity-60 cursor-not-allowed'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-bold text-xs">Hold 1</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        roundObjectives.P1.hold1
                          ? 'bg-blue-500 text-zinc-950'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        +1 VP
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 leading-tight">
                      Controls ≥ 1 marker
                    </span>
                    <div className="mt-2 flex items-center gap-1 text-[10px] font-medium">
                      {roundObjectives.P1.hold1 ? (
                        <>
                          <CheckCircle2 className="h-3 w-3 text-blue-400" />
                          <span className="text-blue-300 font-semibold">Scored</span>
                        </>
                      ) : p1Prim >= 3 ? (
                        <span className="text-zinc-500">Max 3 VP reached</span>
                      ) : (
                        <span className="text-zinc-500">Tap to score</span>
                      )}
                    </div>
                  </button>

                  {/* Hold 2+ Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleObjective('P1', 'hold2')}
                    disabled={!roundObjectives.P1.hold2 && p1Prim >= 3}
                    className={`flex flex-col items-start p-2.5 rounded-lg border text-left transition-all ${
                      roundObjectives.P1.hold2
                        ? 'border-blue-500 bg-blue-600/20 text-blue-100 shadow-sm'
                        : p1Prim >= 3
                        ? 'border-zinc-800/60 bg-zinc-950/40 text-zinc-600 opacity-60 cursor-not-allowed'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-bold text-xs">Hold 2+</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        roundObjectives.P1.hold2
                          ? 'bg-blue-500 text-zinc-950'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        +1 VP
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 leading-tight">
                      Controls ≥ 2 markers
                    </span>
                    <div className="mt-2 flex items-center gap-1 text-[10px] font-medium">
                      {roundObjectives.P1.hold2 ? (
                        <>
                          <CheckCircle2 className="h-3 w-3 text-blue-400" />
                          <span className="text-blue-300 font-semibold">Scored</span>
                        </>
                      ) : p1Prim >= 3 ? (
                        <span className="text-zinc-500">Max 3 VP reached</span>
                      ) : (
                        <span className="text-zinc-500">Tap to score</span>
                      )}
                    </div>
                  </button>

                  {/* Hold More Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleObjective('P1', 'holdMore')}
                    disabled={!roundObjectives.P1.holdMore && p1Prim >= 3}
                    className={`flex flex-col items-start p-2.5 rounded-lg border text-left transition-all ${
                      roundObjectives.P1.holdMore
                        ? 'border-blue-500 bg-blue-600/20 text-blue-100 shadow-sm'
                        : p1Prim >= 3
                        ? 'border-zinc-800/60 bg-zinc-950/40 text-zinc-600 opacity-60 cursor-not-allowed'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-bold text-xs">Hold More</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        roundObjectives.P1.holdMore
                          ? 'bg-blue-500 text-zinc-950'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        +1 VP
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 leading-tight">
                      Controls &gt; opponent
                    </span>
                    <div className="mt-2 flex items-center gap-1 text-[10px] font-medium">
                      {roundObjectives.P1.holdMore ? (
                        <>
                          <CheckCircle2 className="h-3 w-3 text-blue-400" />
                          <span className="text-blue-300 font-semibold">Scored</span>
                        </>
                      ) : p1Prim >= 3 ? (
                        <span className="text-zinc-500">Max 3 VP reached</span>
                      ) : (
                        <span className="text-zinc-500">Tap to score</span>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            );
          })()}

          {/* Player 2 Objective Console */}
          {(() => {
            const p2Prim = getPrimaryScore('P2');
            return (
              <div className={`rounded-xl border p-3.5 transition-all ${
                match.currentTurn === 'P2'
                  ? 'border-rose-500/60 bg-rose-950/20 shadow-sm'
                  : 'border-zinc-800/80 bg-zinc-950/50'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    <span className="font-cinzel text-xs font-bold text-zinc-200 truncate">
                      {match.p2.name}
                    </span>
                    {match.currentTurn === 'P2' && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
                        Active Turn
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-mono font-bold text-amber-400">
                        Primary: {p2Prim} / 3 VP
                      </span>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[1, 2, 3].map(step => (
                          <div
                            key={step}
                            className={`h-1.5 w-3.5 rounded-full transition-all ${
                              p2Prim >= step
                                ? 'bg-rose-400 shadow-sm shadow-rose-500/50'
                                : 'bg-zinc-800'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    {p2Prim > 0 && (
                      <button
                        onClick={() => resetRoundPrimary('P2')}
                        title="Reset P2 round primary points"
                        className="text-[10px] text-zinc-500 hover:text-zinc-300 p-1 rounded hover:bg-zinc-800/50"
                      >
                        <RotateCcw className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {/* Hold 1 Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleObjective('P2', 'hold1')}
                    disabled={!roundObjectives.P2.hold1 && p2Prim >= 3}
                    className={`flex flex-col items-start p-2.5 rounded-lg border text-left transition-all ${
                      roundObjectives.P2.hold1
                        ? 'border-rose-500 bg-rose-600/20 text-rose-100 shadow-sm'
                        : p2Prim >= 3
                        ? 'border-zinc-800/60 bg-zinc-950/40 text-zinc-600 opacity-60 cursor-not-allowed'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-bold text-xs">Hold 1</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        roundObjectives.P2.hold1
                          ? 'bg-rose-500 text-zinc-950'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        +1 VP
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 leading-tight">
                      Controls ≥ 1 marker
                    </span>
                    <div className="mt-2 flex items-center gap-1 text-[10px] font-medium">
                      {roundObjectives.P2.hold1 ? (
                        <>
                          <CheckCircle2 className="h-3 w-3 text-rose-400" />
                          <span className="text-rose-300 font-semibold">Scored</span>
                        </>
                      ) : p2Prim >= 3 ? (
                        <span className="text-zinc-500">Max 3 VP reached</span>
                      ) : (
                        <span className="text-zinc-500">Tap to score</span>
                      )}
                    </div>
                  </button>

                  {/* Hold 2+ Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleObjective('P2', 'hold2')}
                    disabled={!roundObjectives.P2.hold2 && p2Prim >= 3}
                    className={`flex flex-col items-start p-2.5 rounded-lg border text-left transition-all ${
                      roundObjectives.P2.hold2
                        ? 'border-rose-500 bg-rose-600/20 text-rose-100 shadow-sm'
                        : p2Prim >= 3
                        ? 'border-zinc-800/60 bg-zinc-950/40 text-zinc-600 opacity-60 cursor-not-allowed'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-bold text-xs">Hold 2+</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        roundObjectives.P2.hold2
                          ? 'bg-rose-500 text-zinc-950'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        +1 VP
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 leading-tight">
                      Controls ≥ 2 markers
                    </span>
                    <div className="mt-2 flex items-center gap-1 text-[10px] font-medium">
                      {roundObjectives.P2.hold2 ? (
                        <>
                          <CheckCircle2 className="h-3 w-3 text-rose-400" />
                          <span className="text-rose-300 font-semibold">Scored</span>
                        </>
                      ) : p2Prim >= 3 ? (
                        <span className="text-zinc-500">Max 3 VP reached</span>
                      ) : (
                        <span className="text-zinc-500">Tap to score</span>
                      )}
                    </div>
                  </button>

                  {/* Hold More Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleObjective('P2', 'holdMore')}
                    disabled={!roundObjectives.P2.holdMore && p2Prim >= 3}
                    className={`flex flex-col items-start p-2.5 rounded-lg border text-left transition-all ${
                      roundObjectives.P2.holdMore
                        ? 'border-rose-500 bg-rose-600/20 text-rose-100 shadow-sm'
                        : p2Prim >= 3
                        ? 'border-zinc-800/60 bg-zinc-950/40 text-zinc-600 opacity-60 cursor-not-allowed'
                        : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className="font-bold text-xs">Hold More</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        roundObjectives.P2.holdMore
                          ? 'bg-rose-500 text-zinc-950'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        +1 VP
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-400 leading-tight">
                      Controls &gt; opponent
                    </span>
                    <div className="mt-2 flex items-center gap-1 text-[10px] font-medium">
                      {roundObjectives.P2.holdMore ? (
                        <>
                          <CheckCircle2 className="h-3 w-3 text-rose-400" />
                          <span className="text-rose-300 font-semibold">Scored</span>
                        </>
                      ) : p2Prim >= 3 ? (
                        <span className="text-zinc-500">Max 3 VP reached</span>
                      ) : (
                        <span className="text-zinc-500">Tap to score</span>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Tabletop Tip */}
        <div className="flex items-center justify-between rounded-lg border border-zinc-800/80 bg-zinc-950/70 px-3 py-2 text-[11px] text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-300">Tabletop Tip:</span>
            <span>Objectives are controlled if your unit model count / control characteristic exceeds your opponent's within 3" of the marker. Primary objectives max 3 VP per round.</span>
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

          {/* Secondary Objectives (Battle Tactics) Round Tracker */}
          <div className="rounded-lg border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-zinc-950/70 to-zinc-950/50 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xs font-bold text-amber-300">
                  Round {match.round} Secondary Objectives (Battle Tactics)
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Max 3 VP / Round
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Complete Battle Tactics from hand or adjust secondary VP. Maximum 3 Victory Points per round for {currentPlayer.name}.
              </p>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center">
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-400">
                  <span>Secondary: {roundSecondaryVP[activePlayerTab]} / 3 VP</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3].map(step => (
                    <div
                      key={step}
                      className={`h-1.5 w-4 rounded-full transition-all ${
                        roundSecondaryVP[activePlayerTab] >= step
                          ? 'bg-amber-400 shadow-sm shadow-amber-500/50'
                          : 'bg-zinc-800'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => modifyRoundSecondaryVP(activePlayerTab, -1)}
                  disabled={roundSecondaryVP[activePlayerTab] <= 0}
                  title="Decrease round secondary VP (-1 VP)"
                  className="h-6 w-6 rounded bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 text-zinc-300 flex items-center justify-center font-bold text-xs transition-colors"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => modifyRoundSecondaryVP(activePlayerTab, 1)}
                  disabled={roundSecondaryVP[activePlayerTab] >= 3}
                  title="Increase round secondary VP (+1 VP, max 3)"
                  className="h-6 w-6 rounded bg-amber-500 hover:bg-amber-400 disabled:opacity-30 text-zinc-950 flex items-center justify-center font-bold text-xs transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Hand Cards Grid */}
          {currentPlayer.hand.length === 0 ? (
            <div className="text-center py-8 rounded-lg border border-dashed border-zinc-800 text-zinc-500 text-xs">
              No cards in hand. Click "Draw Card" to draw your battle tactic order.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentPlayer.hand.map(card => {
                const currentSecVP = roundSecondaryVP[activePlayerTab];
                const isCapped = currentSecVP >= 3;
                const availableVP = Math.max(0, 3 - currentSecVP);
                const awardableVP = Math.min(card.tacticVP, availableVP);

                return (
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

                      {isCapped ? (
                        <button
                          disabled
                          className="w-full py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-500 font-semibold text-[11px] cursor-not-allowed opacity-60"
                        >
                          Round Cap Reached (3/3 VP)
                        </button>
                      ) : awardableVP < card.tacticVP ? (
                        <button
                          onClick={() => scoreTacticCard(activePlayerTab, card)}
                          className="w-full py-1.5 rounded bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-[11px] transition-colors"
                        >
                          Score Tactic (+{awardableVP} VP, capped at 3/round)
                        </button>
                      ) : (
                        <button
                          onClick={() => scoreTacticCard(activePlayerTab, card)}
                          className="w-full py-1.5 rounded bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-[11px] transition-colors"
                        >
                          Score Tactic (+{card.tacticVP} VP)
                        </button>
                      )}
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
                );
              })}
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

      {/* Cancel Match Confirmation Modal */}
      {showCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl border border-rose-500/40 bg-zinc-900 p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-zinc-100">Cancel & Delete Match?</h3>
                <p className="text-xs text-zinc-400">This action cannot be undone.</p>
              </div>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Are you sure you want to cancel and delete this ongoing battle between <span className="text-zinc-100 font-bold">{match.p1.name}</span> and <span className="text-zinc-100 font-bold">{match.p2.name}</span>? Current scores, round logs, and tactic progress will be discarded.
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowCancelConfirm(false)}
                className="px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-300 text-xs font-semibold hover:bg-zinc-700 transition-colors"
              >
                Keep Playing
              </button>
              <button
                onClick={() => {
                  setShowCancelConfirm(false);
                  onCancelMatch();
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors shadow-lg shadow-rose-950"
              >
                <Trash2 className="h-4 w-4" />
                <span>Cancel & Delete Match</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
