import React from 'react';
import { Dices, Plus, History } from 'lucide-react';

interface HeaderProps {
  activeTab: 'landing' | 'tracker' | 'factions' | 'cards' | 'rules';
  setActiveTab: (tab: 'landing' | 'tracker' | 'factions' | 'cards' | 'rules') => void;
  onNewMatch: () => void;
  onOpenDiceRoller: () => void;
  onOpenHistory: () => void;
  hasActiveMatch?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onNewMatch,
  onOpenDiceRoller,
  onOpenHistory,
  hasActiveMatch = true,
}) => {
  const handleTabClick = (tab: 'landing' | 'tracker' | 'factions' | 'cards' | 'rules') => {
    setActiveTab(tab);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Zone 1: Brand Title - Single text wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleTabClick('landing')}
            className="group text-left focus:outline-none"
            title="Return to Home Landing"
          >
            <span className="font-cinzel text-xl sm:text-2xl font-black tracking-wider text-amber-400 transition-colors group-hover:text-amber-300">
              SPEARHEAD COMMAND
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <button
            onClick={() => handleTabClick('landing')}
            className={`text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'landing'
                ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleTabClick('tracker')}
            className={`text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'tracker'
                ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {hasActiveMatch ? 'Battle Console' : 'Play / Setup'}
          </button>
          <button
            onClick={() => handleTabClick('factions')}
            className={`text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'factions'
                ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Factions
          </button>
          <button
            onClick={() => handleTabClick('cards')}
            className={`text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'cards'
                ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Tactics & Twists
          </button>
          <button
            onClick={() => handleTabClick('rules')}
            className={`text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === 'rules'
                ? 'text-amber-400 border-b-2 border-amber-400 pb-0.5 font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Core Rules
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenHistory}
            title="Battle Records"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200"
          >
            <History className="h-4 w-4" />
          </button>

          <button
            onClick={() => {
              onOpenDiceRoller();
            }}
            className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/90 px-3 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:border-amber-500/50 hover:bg-zinc-800 hover:text-amber-300 whitespace-nowrap"
          >
            <Dices className="h-4 w-4 text-amber-400" />
            <span className="hidden sm:inline">Dice Roller</span>
          </button>

          <button
            onClick={() => {
              onNewMatch();
            }}
            className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-2 text-xs font-bold text-zinc-950 transition-colors hover:bg-amber-400 whitespace-nowrap shadow-sm shadow-amber-500/20"
          >
            <Plus className="h-4 w-4" />
            <span>{hasActiveMatch ? 'Switch Army' : 'Create Game'}</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation tab bar */}
      <div className="flex md:hidden border-t border-zinc-800/60 bg-zinc-950/95 px-2 py-2 overflow-x-auto gap-2">
        <button
          onClick={() => handleTabClick('landing')}
          className={`flex-1 py-1.5 px-2 text-xs font-semibold text-center rounded whitespace-nowrap transition-colors ${
            activeTab === 'landing' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => handleTabClick('tracker')}
          className={`flex-1 py-1.5 px-2 text-xs font-semibold text-center rounded whitespace-nowrap transition-colors ${
            activeTab === 'tracker' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          {hasActiveMatch ? 'Console' : 'Play'}
        </button>
        <button
          onClick={() => handleTabClick('factions')}
          className={`flex-1 py-1.5 px-2 text-xs font-semibold text-center rounded whitespace-nowrap transition-colors ${
            activeTab === 'factions' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Factions
        </button>
        <button
          onClick={() => handleTabClick('cards')}
          className={`flex-1 py-1.5 px-2 text-xs font-semibold text-center rounded whitespace-nowrap transition-colors ${
            activeTab === 'cards' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Cards
        </button>
        <button
          onClick={() => handleTabClick('rules')}
          className={`flex-1 py-1.5 px-2 text-xs font-semibold text-center rounded whitespace-nowrap transition-colors ${
            activeTab === 'rules' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Rules
        </button>
      </div>
    </header>
  );
};
