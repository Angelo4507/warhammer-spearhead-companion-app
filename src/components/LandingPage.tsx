import React, { useState } from 'react';
import { MatchState } from '../types/spearhead';
import { SPEARHEAD_FACTIONS } from '../data/spearheadData';
import { 
  Swords, 
  Shield, 
  BookOpen, 
  Dices, 
  History, 
  Plus, 
  Play, 
  Sparkles, 
  ChevronRight, 
  Trophy, 
  Layers,
  Trash2,
  AlertTriangle
} from 'lucide-react';
import battleBannerImage from '../assets/images/spearhead_battle_banner_1791480631970.jpg';

interface LandingPageProps {
  currentMatch: MatchState | null;
  onCreateGame: () => void;
  onResumeGame: () => void;
  onCancelMatch: () => void;
  onNavigateTab: (tab: 'tracker' | 'factions' | 'cards' | 'rules') => void;
  onOpenDiceRoller: () => void;
  onOpenHistory: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  currentMatch,
  onCreateGame,
  onResumeGame,
  onCancelMatch,
  onNavigateTab,
  onOpenDiceRoller,
  onOpenHistory,
}) => {
  const [showCancelConfirm, setShowCancelConfirm] = useState<boolean>(false);

  const p1Faction = currentMatch 
    ? SPEARHEAD_FACTIONS.find(f => f.id === currentMatch.p1.factionId) 
    : null;
  const p2Faction = currentMatch 
    ? SPEARHEAD_FACTIONS.find(f => f.id === currentMatch.p2.factionId) 
    : null;

  const hasActiveMatch = currentMatch && !currentMatch.isFinished;

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 shadow-2xl">
        {/* Background Image with Vignette & Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src={battleBannerImage}
            alt="Warhammer Age of Sigmar Spearhead Battle"
            className="h-full w-full object-cover opacity-20 filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-transparent" />
          <div className="absolute inset-0 bg-radial from-transparent via-zinc-950/70 to-zinc-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-10 sm:px-12 sm:py-14 max-w-4xl">
          {/* Realm & Edition Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-amber-300 backdrop-blur-md mb-5">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Warhammer Age of Sigmar · Spearhead Edition</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-100 leading-[1.1] mb-4">
            COMMAND YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
              SPEARHEAD FORCES
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed mb-6">
            The streamlined tabletop companion for tactical play. Manage rounds, 
            score primary and secondary victory points with official 3 VP per round caps, 
            and browse warscrolls and battle tactics for all four Grand Alliances.
          </p>

          {/* Unified Action Cockpit: Either Active Game Banner OR Single New Game CTA */}
          {hasActiveMatch ? (
            <div className="rounded-xl border border-amber-500/30 bg-zinc-900/90 p-4 sm:p-5 backdrop-blur-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                    <Swords className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active Battle In Progress · Round {currentMatch.round}/4 ({currentMatch.realm})
                    </div>
                    <div className="text-sm sm:text-base font-bold text-zinc-100 mt-0.5">
                      {currentMatch.p1.name} ({p1Faction?.name || 'Player 1'}) <span className="text-amber-400 font-mono">{currentMatch.p1.score} VP</span>
                      <span className="text-zinc-500 mx-2">vs</span>
                      {currentMatch.p2.name} ({p2Faction?.name || 'Player 2'}) <span className="text-amber-400 font-mono">{currentMatch.p2.score} VP</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <button
                    onClick={onResumeGame}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-sm font-bold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-emerald-500 hover:scale-[1.02] active:scale-[0.99]"
                  >
                    <Play className="h-4 w-4 fill-zinc-950 text-zinc-950" />
                    <span>RESUME MATCH</span>
                  </button>
                  <button
                    onClick={onCreateGame}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-800/80 px-4 py-3 text-xs font-semibold text-zinc-300 hover:text-zinc-100 hover:border-zinc-600 transition-colors"
                    title="Start a new game session"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>New Game</span>
                  </button>
                  <button
                    onClick={() => setShowCancelConfirm(true)}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-rose-900/60 bg-rose-950/40 px-3.5 py-3 text-xs font-semibold text-rose-400 hover:text-rose-200 hover:bg-rose-900/60 hover:border-rose-700 transition-colors"
                    title="Cancel and delete active match"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Cancel Match</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onCreateGame}
                className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-4 text-base font-bold text-zinc-950 shadow-lg shadow-amber-500/20 transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/35 hover:scale-[1.02] active:scale-[0.99]"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-950/20 text-zinc-950">
                  <Plus className="h-5 w-5 stroke-[3]" />
                </div>
                <span className="font-cinzel tracking-wider">CREATE A GAME</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigateTab('rules')}
                className="flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/80 px-5 py-4 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-zinc-100 hover:bg-zinc-800"
              >
                <BookOpen className="h-4 w-4 text-amber-400" />
                <span>Quick Rules Guide</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Core Reference Libraries (Clean 3-Card Grid - No Duplicate Create Game or Utility Clutter) */}
      <section className="space-y-4">
        <div>
          <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wide text-zinc-100">
            REFERENCE LIBRARIES
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Official rules, warscroll profiles, and battle decks for quick lookup during match play
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Warscrolls */}
          <div 
            onClick={() => onNavigateTab('factions')}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all hover:border-sky-500/50 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-sky-500/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400/80 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                24+ Armies
              </span>
            </div>
            <h3 className="font-cinzel text-lg font-bold text-zinc-100 group-hover:text-sky-300 transition-colors mb-1.5 flex items-center justify-between">
              <span>Warscroll Database</span>
              <ChevronRight className="h-4 w-4 text-zinc-500 group-hover:text-sky-400 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Search and filter warscroll profiles for Order, Chaos, Death, and Destruction. Inspect health, weapons, special battle traits, and reinforcement rules.
            </p>
            <div className="text-xs font-semibold text-sky-400 flex items-center gap-1 group-hover:underline">
              Browse All Factions →
            </div>
          </div>

          {/* Card 2: Tactics & Twists */}
          <div 
            onClick={() => onNavigateTab('cards')}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all hover:border-purple-500/50 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-purple-500/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                <Layers className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400/80 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                Deck Reference
              </span>
            </div>
            <h3 className="font-cinzel text-lg font-bold text-zinc-100 group-hover:text-purple-300 transition-colors mb-1.5 flex items-center justify-between">
              <span>Tactics & Twist Cards</span>
              <ChevronRight className="h-4 w-4 text-zinc-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Inspect the 12 official Battle Tactics cards, Command ability alternates, and realm twists for the Fire Realm of Aqshy and Jade Realm of Ghyran.
            </p>
            <div className="text-xs font-semibold text-purple-400 flex items-center gap-1 group-hover:underline">
              View Battle Tactics Deck →
            </div>
          </div>

          {/* Card 3: Spearhead Rules */}
          <div 
            onClick={() => onNavigateTab('rules')}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all hover:border-emerald-500/50 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-emerald-500/5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Official Rules
              </span>
            </div>
            <h3 className="font-cinzel text-lg font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-1.5 flex items-center justify-between">
              <span>Spearhead Core Rules</span>
              <ChevronRight className="h-4 w-4 text-zinc-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Quick-reference guide detailing the 3 VP per round scoring caps, underdog mechanic, turn sequences, reinforcement waves, and sudden death.
            </p>
            <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:underline">
              Review Rules & Scoring Caps →
            </div>
          </div>
        </div>

        {/* Streamlined Quick Tools Strip (Compact, non-competing) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/30 px-4 py-3">
          <div className="text-xs text-zinc-400 flex items-center gap-2">
            <span className="text-zinc-500 font-semibold uppercase tracking-wider text-[10px]">Tabletop Utilities:</span>
            <span>Quick tools available anytime during battle</span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onOpenDiceRoller}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
            >
              <Dices className="h-3.5 w-3.5 text-amber-400" />
              <span>Dice Roller</span>
            </button>
            <button
              onClick={onOpenHistory}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-rose-300 hover:border-rose-500/40 transition-colors"
            >
              <History className="h-3.5 w-3.5 text-rose-400" />
              <span>Match History</span>
            </button>
          </div>
        </div>
      </section>

      {/* Spearhead Format Essentials (4 Core Pillars) */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="font-cinzel text-xl font-bold tracking-wide text-zinc-100 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-400" />
            <span>HOW SPEARHEAD MATCHES WORK</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Official 4th Edition Age of Sigmar format highlights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-4">
            <div className="text-amber-400 font-cinzel font-bold text-sm mb-1 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-bold">1</span>
              <span>4 Battle Rounds</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every match is locked to exactly 4 battle rounds. Fixed rosters, no army building points required.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-4">
            <div className="text-amber-400 font-cinzel font-bold text-sm mb-1 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-bold">2</span>
              <span>Primary (Max 3 VP)</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Hold 1 (+1 VP), Hold 2+ (+1 VP), Hold More than enemy (+1 VP). Capped at a maximum of 3 VP each round.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-4">
            <div className="text-amber-400 font-cinzel font-bold text-sm mb-1 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-bold">3</span>
              <span>Secondary (Max 3 VP)</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Score Battle Tactics drawn from your hand each turn. Secondary objectives are capped at a maximum of 3 VP per round.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-4">
            <div className="text-amber-400 font-cinzel font-bold text-sm mb-1 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-bold">4</span>
              <span>Twists & Underdog</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              At the start of battle rounds 2, 3, and 4, the player trailing in VP gains an extra command point and strategic advantages.
            </p>
          </div>
        </div>
      </section>

      {/* Cancel Active Match Confirmation Modal */}
      {showCancelConfirm && currentMatch && (
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
              Are you sure you want to cancel the active Spearhead battle between <span className="text-zinc-100 font-bold">{currentMatch.p1.name}</span> and <span className="text-zinc-100 font-bold">{currentMatch.p2.name}</span>? Current scores, round logs, and tactic cards will be deleted.
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
