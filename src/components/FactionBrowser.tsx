import React, { useState } from 'react';
import { SPEARHEAD_FACTIONS } from '../data/spearheadData';
import { GrandAlliance, SpearheadFaction, SpearheadUnit } from '../types/spearhead';
import { UnitWarscrollModal } from './UnitWarscrollModal';
import { Shield, Sword, Heart, Zap, Sparkles, ChevronRight, User, Search } from 'lucide-react';
import battleBannerImage from '../assets/images/spearhead_battle_banner_1791480631970.jpg';

export const FactionBrowser: React.FC = () => {
  const [selectedAlliance, setSelectedAlliance] = useState<GrandAlliance | 'ALL'>('ALL');
  const [activeFactionId, setActiveFactionId] = useState<string>(SPEARHEAD_FACTIONS[0].id);
  const [inspectingUnit, setInspectingUnit] = useState<SpearheadUnit | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const factions = SPEARHEAD_FACTIONS.filter(f => {
    const matchesAlliance = selectedAlliance === 'ALL' || f.grandAlliance === selectedAlliance;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesAlliance;
    const matchesQuery =
      f.name.toLowerCase().includes(q) ||
      f.subTitle.toLowerCase().includes(q) ||
      f.units.some(u => u.name.toLowerCase().includes(q));
    return matchesAlliance && matchesQuery;
  });

  const activeFaction =
    SPEARHEAD_FACTIONS.find(f => f.id === activeFactionId) || factions[0] || SPEARHEAD_FACTIONS[0];

  return (
    <div className="space-y-6">
      {/* Alliance filter tabs & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
          {(['ALL', 'ORDER', 'CHAOS', 'DEATH', 'DESTRUCTION'] as const).map(alliance => (
            <button
              key={alliance}
              onClick={() => {
                setSelectedAlliance(alliance);
                const firstInAlliance = SPEARHEAD_FACTIONS.find(
                  f => alliance === 'ALL' || f.grandAlliance === alliance
                );
                if (firstInAlliance) setActiveFactionId(firstInAlliance.id);
              }}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                selectedAlliance === alliance
                  ? 'bg-amber-500 text-zinc-950 font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {alliance}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search army or warscroll..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Faction list selector */}
        <div className="lg:col-span-4 space-y-2">
          <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
            Spearhead Forces ({factions.length})
          </span>
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {factions.map(faction => {
              const isSelected = faction.id === activeFaction.id;
              return (
                <button
                  key={faction.id}
                  onClick={() => setActiveFactionId(faction.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'border-amber-500 bg-zinc-900 shadow-md ring-1 ring-amber-500/50'
                      : 'border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700 hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        {faction.grandAlliance}
                      </span>
                      <h4 className="font-cinzel text-sm font-bold text-zinc-100">{faction.name}</h4>
                      <p className="text-xs text-zinc-400">{faction.subTitle}</p>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 ${isSelected ? 'text-amber-400' : 'text-zinc-600'}`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Faction Dossier */}
        <div className="lg:col-span-8 space-y-6">
          {/* Faction Header Card */}
          <div className="relative rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-lg">
            <div className="relative h-36 w-full overflow-hidden bg-zinc-950">
              <img
                src={battleBannerImage}
                alt={activeFaction.name}
                className="h-full w-full object-cover opacity-35"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  {activeFaction.grandAlliance} · SPEARHEAD WARSCROLL
                </span>
                <h2 className="font-cinzel text-2xl font-black text-zinc-100">{activeFaction.name}</h2>
                <p className="text-xs text-zinc-300 font-medium">{activeFaction.subTitle}</p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Flavor Quote */}
              <p className="text-xs italic text-zinc-400 border-l-2 border-amber-500/80 pl-3 py-0.5">
                "{activeFaction.flavorQuote}"
              </p>

              {/* Battle Traits */}
              <div>
                <h4 className="font-cinzel text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Battle Traits (Spearhead Army Rules)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeFaction.battleTraits.map((trait, idx) => (
                    <div key={idx} className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3">
                      <span className="block text-xs font-bold text-zinc-200 mb-1">{trait.name}</span>
                      <p className="text-xs text-zinc-400 leading-relaxed">{trait.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhancements (Hero Traits & Artefacts) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Hero Traits (Choose 1)
                  </h4>
                  <div className="space-y-2">
                    {activeFaction.heroTraits.map(ht => (
                      <div key={ht.id} className="rounded-lg border border-zinc-800/80 bg-zinc-950/40 p-2.5">
                        <span className="block text-xs font-semibold text-zinc-200">{ht.name}</span>
                        <p className="text-xs text-zinc-400 mt-0.5">{ht.effect}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-cinzel text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                    Artefacts of Power (Choose 1)
                  </h4>
                  <div className="space-y-2">
                    {activeFaction.artefacts.map(art => (
                      <div key={art.id} className="rounded-lg border border-zinc-800/80 bg-zinc-950/40 p-2.5">
                        <span className="block text-xs font-semibold text-zinc-200">{art.name}</span>
                        <p className="text-xs text-zinc-400 mt-0.5">{art.effect}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Regiment Units */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-cinzel text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Units in this Spearhead ({activeFaction.units.length})
                  </h4>
                  <span className="text-[11px] text-zinc-500">Click any unit for full warscroll</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeFaction.units.map(unit => (
                    <button
                      key={unit.id}
                      onClick={() => setInspectingUnit(unit)}
                      className="text-left rounded-lg border border-zinc-800 bg-zinc-950/60 p-3 hover:border-amber-500/50 hover:bg-zinc-800/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-cinzel text-xs font-bold text-zinc-100">{unit.name}</span>
                        <span className="font-mono text-[10px] uppercase px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                          {unit.role}
                        </span>
                      </div>

                      <div className="grid grid-cols-4 gap-1 text-center font-mono text-xs">
                        <div className="bg-zinc-900 rounded p-1">
                          <span className="block text-[9px] text-zinc-500 font-sans">M</span>
                          <span className="text-amber-400">{unit.move}</span>
                        </div>
                        <div className="bg-zinc-900 rounded p-1">
                          <span className="block text-[9px] text-zinc-500 font-sans">HP</span>
                          <span className="text-emerald-400">{unit.health}</span>
                        </div>
                        <div className="bg-zinc-900 rounded p-1">
                          <span className="block text-[9px] text-zinc-500 font-sans">Sv</span>
                          <span className="text-sky-400">{unit.save}</span>
                        </div>
                        <div className="bg-zinc-900 rounded p-1">
                          <span className="block text-[9px] text-zinc-500 font-sans">Ctrl</span>
                          <span className="text-indigo-400">{unit.control}</span>
                        </div>
                      </div>

                      {unit.isReinforcement && (
                        <div className="mt-2 text-[10px] text-amber-400 font-medium">
                          ✦ Reinforcement: {unit.reinforcementNote || 'Arrives Round 3 or on return'}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unit Warscroll Modal */}
      <UnitWarscrollModal unit={inspectingUnit} onClose={() => setInspectingUnit(null)} />
    </div>
  );
};
