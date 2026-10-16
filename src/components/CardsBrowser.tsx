import React, { useState } from 'react';
import { BATTLE_TACTICS_DECK, TWIST_CARDS } from '../data/spearheadData';
import { BattleTacticCard, TwistCard } from '../types/spearhead';
import { Search, Flame, Leaf, Shield, Swords, Sparkles } from 'lucide-react';
import tacticsCardBg from '../assets/images/spearhead_tactics_card_1791480655060.jpg';

export const CardsBrowser: React.FC = () => {
  const [filterType, setFilterType] = useState<'tactics' | 'twists'>('tactics');
  const [realmFilter, setRealmFilter] = useState<'all' | 'Aqshy' | 'Ghyran'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCard, setSelectedCard] = useState<BattleTacticCard | TwistCard | null>(null);

  const filteredTactics = BATTLE_TACTICS_DECK.filter(c =>
    c.tacticName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.commandName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.commandPhase.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTwists = TWIST_CARDS.filter(t => {
    const matchesRealm = realmFilter === 'all' || t.realm === realmFilter;
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.ruleEffect.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRealm && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-lg w-full sm:w-auto">
          <button
            onClick={() => setFilterType('tactics')}
            className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              filterType === 'tactics'
                ? 'bg-amber-500 text-zinc-950 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Battle Tactics & Commands (12 Cards)
          </button>
          <button
            onClick={() => setFilterType('twists')}
            className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold rounded-md transition-colors ${
              filterType === 'twists'
                ? 'bg-amber-500 text-zinc-950 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Twist Deck (Aqshy & Ghyran)
          </button>
        </div>

        {/* Search input & realm filter */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {filterType === 'twists' && (
            <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-1 text-xs">
              <button
                onClick={() => setRealmFilter('all')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  realmFilter === 'all' ? 'bg-zinc-800 text-amber-400' : 'text-zinc-400'
                }`}
              >
                All Realms
              </button>
              <button
                onClick={() => setRealmFilter('Aqshy')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  realmFilter === 'Aqshy' ? 'bg-orange-950/80 text-orange-400 border border-orange-800/40' : 'text-zinc-400'
                }`}
              >
                Aqshy
              </button>
              <button
                onClick={() => setRealmFilter('Ghyran')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  realmFilter === 'Ghyran' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/40' : 'text-zinc-400'
                }`}
              >
                Ghyran
              </button>
            </div>
          )}

          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search cards, phases, keywords..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 pl-9 pr-3 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      {filterType === 'tactics' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTactics.map(card => (
            <div
              key={card.id}
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/90 shadow-md overflow-hidden hover:border-amber-500/40 transition-colors"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-950/80 px-4 py-3">
                <span className="font-mono text-xs font-bold text-amber-400">CARD #{card.cardNumber}</span>
                <span className="text-[11px] font-semibold text-zinc-400">{card.tacticTiming}</span>
              </div>

              {/* Top Half: Battle Tactic */}
              <div className="p-4 border-b border-dashed border-zinc-800 bg-amber-950/10 flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Swords className="h-4 w-4 text-amber-400" />
                    <h3 className="font-cinzel text-sm font-bold text-zinc-100">{card.tacticName}</h3>
                  </div>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    +{card.tacticVP} VP
                  </span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">{card.tacticCondition}</p>
              </div>

              {/* Bottom Half: Command Ability */}
              <div className="p-4 bg-zinc-950/50 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-sky-400" />
                    <h4 className="font-cinzel text-xs font-bold text-sky-200">{card.commandName}</h4>
                  </div>
                  <span className="font-mono text-[10px] uppercase text-zinc-400">
                    {card.commandPhase}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{card.commandEffect}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTwists.map(twist => {
            const isAqshy = twist.realm === 'Aqshy';
            return (
              <div
                key={twist.id}
                className={`flex flex-col rounded-xl border overflow-hidden shadow-md ${
                  isAqshy
                    ? 'border-orange-900/60 bg-zinc-900/90'
                    : 'border-emerald-900/60 bg-zinc-900/90'
                }`}
              >
                {/* Header */}
                <div
                  className={`flex items-center justify-between px-4 py-3 border-b ${
                    isAqshy ? 'bg-orange-950/40 border-orange-900/40' : 'bg-emerald-950/40 border-emerald-900/40'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isAqshy ? (
                      <Flame className="h-4 w-4 text-orange-400" />
                    ) : (
                      <Leaf className="h-4 w-4 text-emerald-400" />
                    )}
                    <span className="font-mono text-xs font-bold text-zinc-200">{twist.realm} Twist</span>
                  </div>
                  <span className="text-[11px] text-zinc-400">Rounds 1–4</span>
                </div>

                {/* Body */}
                <div className="p-5 space-y-3 flex-1">
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-zinc-100">{twist.name}</h3>
                    <p className="text-xs italic text-zinc-400 mt-0.5">{twist.fluff}</p>
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3">
                    <span className="block text-[11px] font-bold text-amber-400 mb-1">
                      {twist.ruleTitle}
                    </span>
                    <p className="text-xs text-zinc-300 leading-relaxed">{twist.ruleEffect}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
