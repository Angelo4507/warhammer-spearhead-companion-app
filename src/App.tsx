/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MatchState, BattleTacticCard } from './types/spearhead';
import { SPEARHEAD_FACTIONS, BATTLE_TACTICS_DECK, TWIST_CARDS } from './data/spearheadData';
import { Header } from './components/Header';
import { MatchTracker } from './components/MatchTracker';
import { FactionBrowser } from './components/FactionBrowser';
import { CardsBrowser } from './components/CardsBrowser';
import { CoreRulesReference } from './components/CoreRulesReference';
import { SetupMatchModal } from './components/SetupMatchModal';
import { DiceRollerModal } from './components/DiceRollerModal';
import { MatchHistoryModal } from './components/MatchHistoryModal';
import { playSound } from './utils/soundEffects';

function shuffleDeck(deck: BattleTacticCard[]): BattleTacticCard[] {
  const copy = [...deck];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createInitialMatch(
  realm: 'Aqshy' | 'Ghyran' = 'Aqshy',
  p1Name = 'Lord-Commander',
  p1FactionId = 'stormcast-vigilant',
  p1HeroTraitId = 'st-ht-1',
  p1ArtefactId = 'st-art-1',
  p2Name = 'Clawlord Vrik',
  p2FactionId = 'skaven-gnawfeast',
  p2HeroTraitId = 'sk-ht-1',
  p2ArtefactId = 'sk-art-1'
): MatchState {
  const shuffled = shuffleDeck(BATTLE_TACTICS_DECK);
  const p1Hand = shuffled.slice(0, 3);
  const p2Hand = shuffled.slice(3, 6);
  const remainingDeck = shuffled.slice(6);

  const p1Faction = SPEARHEAD_FACTIONS.find(f => f.id === p1FactionId) || SPEARHEAD_FACTIONS[0];
  const p2Faction = SPEARHEAD_FACTIONS.find(f => f.id === p2FactionId) || SPEARHEAD_FACTIONS[1];

  const p1Health: MatchState['p1']['unitHealth'] = {};
  p1Faction.units.forEach(u => {
    p1Health[u.id] = {
      currentHealth: u.health,
      maxHealth: u.health,
      isSlain: false,
      inReserve: false,
      isReinforced: false
    };
  });

  const p2Health: MatchState['p2']['unitHealth'] = {};
  p2Faction.units.forEach(u => {
    p2Health[u.id] = {
      currentHealth: u.health,
      maxHealth: u.health,
      isSlain: false,
      inReserve: false,
      isReinforced: false
    };
  });

  const realmTwists = TWIST_CARDS.filter(t => t.realm === realm);
  const activeTwist = realmTwists[Math.floor(Math.random() * realmTwists.length)] || realmTwists[0];

  return {
    id: `spearhead-${Date.now()}`,
    date: new Date().toISOString(),
    realm,
    round: 1,
    currentTurn: 'P1',
    roundInitiativeWinner: 'P1',
    activeTwist,
    deck: remainingDeck,
    discardPile: [],
    objectives: {
      A: 'P1',
      B: 'NONE',
      C: 'NONE',
      D: 'P2'
    },
    p1: {
      name: p1Name,
      factionId: p1FactionId,
      selectedHeroTraitId: p1HeroTraitId,
      selectedArtefactId: p1ArtefactId,
      score: 0,
      commandPoints: 1,
      hand: p1Hand,
      completedTactics: [],
      usedCommands: [],
      unitHealth: p1Health
    },
    p2: {
      name: p2Name,
      factionId: p2FactionId,
      selectedHeroTraitId: p2HeroTraitId,
      selectedArtefactId: p2ArtefactId,
      score: 0,
      commandPoints: 1,
      hand: p2Hand,
      completedTactics: [],
      usedCommands: [],
      unitHealth: p2Health
    },
    roundLogs: [
      {
        round: 1,
        text: `Match began! Realm: ${realm}. Twist: ${activeTwist.name}.`,
        timestamp: new Date().toLocaleTimeString()
      }
    ],
    isFinished: false
  };
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'tracker' | 'factions' | 'cards' | 'rules'>('tracker');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Modals
  const [isSetupOpen, setIsSetupOpen] = useState<boolean>(false);
  const [isDiceOpen, setIsDiceOpen] = useState<boolean>(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);

  // Active match
  const [currentMatch, setCurrentMatch] = useState<MatchState>(() => {
    try {
      const saved = localStorage.getItem('spearhead_active_match');
      if (saved) return JSON.parse(saved);
    } catch {}
    return createInitialMatch();
  });

  // Saved match history
  const [matchHistory, setMatchHistory] = useState<MatchState[]>(() => {
    try {
      const saved = localStorage.getItem('spearhead_history');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  // Persist active match
  useEffect(() => {
    try {
      localStorage.setItem('spearhead_active_match', JSON.stringify(currentMatch));
    } catch {}
  }, [currentMatch]);

  // Persist history
  useEffect(() => {
    try {
      localStorage.setItem('spearhead_history', JSON.stringify(matchHistory));
    } catch {}
  }, [matchHistory]);

  const handleStartNewMatch = (config: {
    realm: 'Aqshy' | 'Ghyran';
    p1Name: string;
    p1FactionId: string;
    p1HeroTraitId: string;
    p1ArtefactId: string;
    p2Name: string;
    p2FactionId: string;
    p2HeroTraitId: string;
    p2ArtefactId: string;
  }) => {
    const newMatch = createInitialMatch(
      config.realm,
      config.p1Name,
      config.p1FactionId,
      config.p1HeroTraitId,
      config.p1ArtefactId,
      config.p2Name,
      config.p2FactionId,
      config.p2HeroTraitId,
      config.p2ArtefactId
    );
    setCurrentMatch(newMatch);
    setIsSetupOpen(false);
    setActiveTab('tracker');
  };

  const handleFinishMatch = () => {
    setMatchHistory(prev => [currentMatch, ...prev]);
    setIsHistoryOpen(true);
  };

  const handleClearHistory = () => {
    setMatchHistory([]);
    try {
      localStorage.removeItem('spearhead_history');
    } catch {}
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
      {/* Top Bar following contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNewMatch={() => setIsSetupOpen(true)}
        onOpenDiceRoller={() => setIsDiceOpen(true)}
        onOpenHistory={() => setIsHistoryOpen(true)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Tabletop Viewport Frame */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 py-6">
        {activeTab === 'tracker' && (
          <MatchTracker
            match={currentMatch}
            setMatch={setCurrentMatch}
            soundEnabled={soundEnabled}
            onFinishMatch={handleFinishMatch}
          />
        )}

        {activeTab === 'factions' && <FactionBrowser />}

        {activeTab === 'cards' && <CardsBrowser />}

        {activeTab === 'rules' && <CoreRulesReference />}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-4 px-6 text-center text-xs text-zinc-500">
        Spearhead Command · Tabletop Companion for Warhammer Age of Sigmar: Spearhead
      </footer>

      {/* Modals */}
      <SetupMatchModal
        isOpen={isSetupOpen}
        onClose={() => setIsSetupOpen(false)}
        onStartMatch={handleStartNewMatch}
        soundEnabled={soundEnabled}
      />

      <DiceRollerModal
        isOpen={isDiceOpen}
        onClose={() => setIsDiceOpen(false)}
        soundEnabled={soundEnabled}
      />

      <MatchHistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        matches={matchHistory}
        onClearHistory={handleClearHistory}
      />
    </div>
  );
}
