import React, { useState } from 'react';
import { SPEARHEAD_FACTIONS } from '../data/spearheadData';
import { SpearheadFaction } from '../types/spearhead';
import { X, Flame, Leaf, Swords, Shield, Sparkles } from 'lucide-react';

interface SetupMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartMatch: (config: {
    realm: 'Aqshy' | 'Ghyran';
    p1Name: string;
    p1FactionId: string;
    p1HeroTraitId: string;
    p1ArtefactId: string;
    p2Name: string;
    p2FactionId: string;
    p2HeroTraitId: string;
    p2ArtefactId: string;
  }) => void;
}

export const SetupMatchModal: React.FC<SetupMatchModalProps> = ({
  isOpen,
  onClose,
  onStartMatch,
}) => {
  const [realm, setRealm] = useState<'Aqshy' | 'Ghyran'>('Aqshy');
  const [p1Name, setP1Name] = useState<string>('Commander 1');
  const [p1FactionId, setP1FactionId] = useState<string>(SPEARHEAD_FACTIONS[0].id);
  const [p1HeroTraitId, setP1HeroTraitId] = useState<string>(SPEARHEAD_FACTIONS[0].heroTraits[0]?.id || '');
  const [p1ArtefactId, setP1ArtefactId] = useState<string>(SPEARHEAD_FACTIONS[0].artefacts[0]?.id || '');

  const [p2Name, setP2Name] = useState<string>('Commander 2');
  const [p2FactionId, setP2FactionId] = useState<string>(SPEARHEAD_FACTIONS[1]?.id || SPEARHEAD_FACTIONS[0].id);
  const [p2HeroTraitId, setP2HeroTraitId] = useState<string>(SPEARHEAD_FACTIONS[1]?.heroTraits[0]?.id || '');
  const [p2ArtefactId, setP2ArtefactId] = useState<string>(SPEARHEAD_FACTIONS[1]?.artefacts[0]?.id || '');

  if (!isOpen) return null;

  const p1Faction = SPEARHEAD_FACTIONS.find(f => f.id === p1FactionId) || SPEARHEAD_FACTIONS[0];
  const p2Faction = SPEARHEAD_FACTIONS.find(f => f.id === p2FactionId) || SPEARHEAD_FACTIONS[1];

  const handleP1FactionChange = (id: string) => {
    setP1FactionId(id);
    const f = SPEARHEAD_FACTIONS.find(x => x.id === id);
    if (f) {
      setP1HeroTraitId(f.heroTraits[0]?.id || '');
      setP1ArtefactId(f.artefacts[0]?.id || '');
    }
  };

  const handleP2FactionChange = (id: string) => {
    setP2FactionId(id);
    const f = SPEARHEAD_FACTIONS.find(x => x.id === id);
    if (f) {
      setP2HeroTraitId(f.heroTraits[0]?.id || '');
      setP2ArtefactId(f.artefacts[0]?.id || '');
    }
  };

  const handleBegin = () => {
    onStartMatch({
      realm,
      p1Name,
      p1FactionId,
      p1HeroTraitId,
      p1ArtefactId,
      p2Name,
      p2FactionId,
      p2HeroTraitId,
      p2ArtefactId
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-6 py-4">
          <div className="flex items-center gap-2">
            <Swords className="h-5 w-5 text-amber-400" />
            <h2 className="font-cinzel text-lg font-bold text-zinc-100">Setup Spearhead Match</h2>
          </div>
          <button onClick={onClose} className="rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Realm Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
              Select Battlefield Realm
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRealm('Aqshy')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  realm === 'Aqshy'
                    ? 'border-orange-500 bg-orange-950/30 shadow-[0_0_15px_rgba(249,115,22,0.15)]'
                    : 'border-zinc-800 bg-zinc-950/40 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Flame className="h-5 w-5 text-orange-400" />
                  <span className="font-cinzel font-bold text-zinc-100">Aqshy · Realm of Fire</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Volcanic ash plains, blistering heat, lethal crits, and high aggression.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setRealm('Ghyran')}
                className={`p-4 rounded-xl border text-left transition-all ${
                  realm === 'Ghyran'
                    ? 'border-emerald-500 bg-emerald-950/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                    : 'border-zinc-800 bg-zinc-950/40 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Leaf className="h-5 w-5 text-emerald-400" />
                  <span className="font-cinzel font-bold text-zinc-100">Ghyran · Realm of Life</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Overgrown ironoaks, regenerative lifebursts, entangling briars, and sanctuary wards.
                </p>
              </button>
            </div>
          </div>

          {/* Player Configurations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Player 1 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Player 1 (Host)</span>
                <span className="text-[10px] text-zinc-500 font-mono">ALLIANCE: {p1Faction.grandAlliance}</span>
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Commander Name</label>
                <input
                  type="text"
                  value={p1Name}
                  onChange={e => setP1Name(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Spearhead Force</label>
                <select
                  value={p1FactionId}
                  onChange={e => handleP1FactionChange(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-blue-500 focus:outline-none"
                >
                  {SPEARHEAD_FACTIONS.map(f => (
                    <option key={f.id} value={f.id}>
                      {f.name} ({f.subTitle})
                    </option>
                  ))}
                </select>
              </div>

              {/* Hero Trait */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">General Hero Trait</label>
                <select
                  value={p1HeroTraitId}
                  onChange={e => setP1HeroTraitId(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-blue-500 focus:outline-none"
                >
                  {p1Faction.heroTraits.map(ht => (
                    <option key={ht.id} value={ht.id}>
                      {ht.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-[11px] text-zinc-400">
                  {p1Faction.heroTraits.find(h => h.id === p1HeroTraitId)?.effect}
                </p>
              </div>

              {/* Artefact */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Artefact of Power</label>
                <select
                  value={p1ArtefactId}
                  onChange={e => setP1ArtefactId(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-blue-500 focus:outline-none"
                >
                  {p1Faction.artefacts.map(art => (
                    <option key={art.id} value={art.id}>
                      {art.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-[11px] text-zinc-400">
                  {p1Faction.artefacts.find(a => a.id === p1ArtefactId)?.effect}
                </p>
              </div>
            </div>

            {/* Player 2 */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Player 2 (Opponent)</span>
                <span className="text-[10px] text-zinc-500 font-mono">ALLIANCE: {p2Faction.grandAlliance}</span>
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Commander Name</label>
                <input
                  type="text"
                  value={p2Name}
                  onChange={e => setP2Name(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-rose-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Spearhead Force</label>
                <select
                  value={p2FactionId}
                  onChange={e => handleP2FactionChange(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 focus:border-rose-500 focus:outline-none"
                >
                  {SPEARHEAD_FACTIONS.map(f => (
                    <option key={f.id} value={f.id}>
                      {f.name} ({f.subTitle})
                    </option>
                  ))}
                </select>
              </div>

              {/* Hero Trait */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">General Hero Trait</label>
                <select
                  value={p2HeroTraitId}
                  onChange={e => setP2HeroTraitId(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-rose-500 focus:outline-none"
                >
                  {p2Faction.heroTraits.map(ht => (
                    <option key={ht.id} value={ht.id}>
                      {ht.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-[11px] text-zinc-400">
                  {p2Faction.heroTraits.find(h => h.id === p2HeroTraitId)?.effect}
                </p>
              </div>

              {/* Artefact */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Artefact of Power</label>
                <select
                  value={p2ArtefactId}
                  onChange={e => setP2ArtefactId(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-zinc-100 focus:border-rose-500 focus:outline-none"
                >
                  {p2Faction.artefacts.map(art => (
                    <option key={art.id} value={art.id}>
                      {art.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-[11px] text-zinc-400">
                  {p2Faction.artefacts.find(a => a.id === p2ArtefactId)?.effect}
                </p>
              </div>
            </div>
          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={handleBegin}
            className="w-full py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <Swords className="h-5 w-5" />
            <span>DEPLOY FORCES & COMMENCE BATTLE ROUND 1</span>
          </button>
        </div>
      </div>
    </div>
  );
};
