import React, { useState } from 'react';
import { SPEARHEAD_FACTIONS } from '../data/spearheadData';
import { GrandAlliance, SpearheadFaction } from '../types/spearhead';
import { Swords, Shield, Flame, Leaf, Check, Sparkles, User, ChevronRight, Crown } from 'lucide-react';
import battleBannerImage from '../assets/images/spearhead_battle_banner_1791480631970.jpg';

interface ArmySelectionScreenProps {
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
  isInitialSetup?: boolean;
  onCancel?: () => void;
}

export const ArmySelectionScreen: React.FC<ArmySelectionScreenProps> = ({
  onStartMatch,
  isInitialSetup = true,
  onCancel,
}) => {
  const [selectedAlliance, setSelectedAlliance] = useState<GrandAlliance | 'ALL'>('ALL');
  const [realm, setRealm] = useState<'Aqshy' | 'Ghyran'>('Aqshy');

  // Player 1 (User's Army)
  const [p1FactionId, setP1FactionId] = useState<string>(SPEARHEAD_FACTIONS[0].id);
  const [p1Name, setP1Name] = useState<string>('Lord-Commander');
  const [p1HeroTraitId, setP1HeroTraitId] = useState<string>(SPEARHEAD_FACTIONS[0].heroTraits[0]?.id || '');
  const [p1ArtefactId, setP1ArtefactId] = useState<string>(SPEARHEAD_FACTIONS[0].artefacts[0]?.id || '');

  // Player 2 (Opponent's Army)
  const [p2FactionId, setP2FactionId] = useState<string>(SPEARHEAD_FACTIONS[1]?.id || SPEARHEAD_FACTIONS[0].id);
  const [p2Name, setP2Name] = useState<string>('Enemy Warlord');
  const [p2HeroTraitId, setP2HeroTraitId] = useState<string>(SPEARHEAD_FACTIONS[1]?.heroTraits[0]?.id || '');
  const [p2ArtefactId, setP2ArtefactId] = useState<string>(SPEARHEAD_FACTIONS[1]?.artefacts[0]?.id || '');

  // Active step: 'p1' (Your Army) -> 'p2' (Opponent & Realm)
  const [activeStep, setActiveStep] = useState<'p1' | 'p2'>('p1');

  const p1Faction = SPEARHEAD_FACTIONS.find(f => f.id === p1FactionId) || SPEARHEAD_FACTIONS[0];
  const p2Faction = SPEARHEAD_FACTIONS.find(f => f.id === p2FactionId) || SPEARHEAD_FACTIONS[1];

  const filteredFactions = SPEARHEAD_FACTIONS.filter(
    f => selectedAlliance === 'ALL' || f.grandAlliance === selectedAlliance
  );

  const handleSelectP1Faction = (faction: SpearheadFaction) => {
    setP1FactionId(faction.id);
    setP1HeroTraitId(faction.heroTraits[0]?.id || '');
    setP1ArtefactId(faction.artefacts[0]?.id || '');
  };

  const handleSelectP2Faction = (faction: SpearheadFaction) => {
    setP2FactionId(faction.id);
    setP2HeroTraitId(faction.heroTraits[0]?.id || '');
    setP2ArtefactId(faction.artefacts[0]?.id || '');
  };

  const handleDeploy = () => {
    onStartMatch({
      realm,
      p1Name: p1Name.trim() || 'Lord-Commander',
      p1FactionId,
      p1HeroTraitId: p1HeroTraitId || p1Faction.heroTraits[0]?.id || '',
      p1ArtefactId: p1ArtefactId || p1Faction.artefacts[0]?.id || '',
      p2Name: p2Name.trim() || 'Enemy Warlord',
      p2FactionId,
      p2HeroTraitId: p2HeroTraitId || p2Faction.heroTraits[0]?.id || '',
      p2ArtefactId: p2ArtefactId || p2Faction.artefacts[0]?.id || '',
    });
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Cinematic Banner */}
      <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
        <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-zinc-950">
          <img
            src={battleBannerImage}
            alt="Muster Spearhead"
            className="h-full w-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Crown className="h-4 w-4 text-amber-400" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-amber-400">
                  {isInitialSetup ? 'Welcome to Spearhead Command' : 'Match Deployment'}
                </span>
              </div>
              <h1 className="font-cinzel text-2xl sm:text-3xl font-black text-zinc-100">
                Choose Your Spearhead Army
              </h1>
              <p className="text-xs text-zinc-400 mt-1 max-w-xl">
                Select your army from the Mortal Realms, configure your General's enhancements, and prepare your deck for battle.
              </p>
            </div>

            {/* Stepper indicator */}
            <div className="flex items-center gap-2 bg-zinc-950/80 p-1.5 rounded-xl border border-zinc-800 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveStep('p1')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeStep === 'p1'
                    ? 'bg-amber-500 text-zinc-950 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                1. Your Army
              </button>
              <button
                type="button"
                onClick={() => setActiveStep('p2')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeStep === 'p2'
                    ? 'bg-amber-500 text-zinc-950 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                2. Opponent & Realm
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeStep === 'p1' ? (
        /* STEP 1: CHOOSE YOUR ARMY */
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <h2 className="font-cinzel text-lg font-bold text-zinc-100 flex items-center gap-2">
                <Swords className="h-5 w-5 text-amber-400" />
                <span>Step 1: Select Your Spearhead Force</span>
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Pick the army you will be commanding in this battle.
              </p>
            </div>

            {/* Grand Alliance filter tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
              {(['ALL', 'ORDER', 'CHAOS', 'DEATH', 'DESTRUCTION'] as const).map(alliance => (
                <button
                  key={alliance}
                  type="button"
                  onClick={() => setSelectedAlliance(alliance)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                    selectedAlliance === alliance
                      ? 'bg-amber-500 text-zinc-950 font-bold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {alliance}
                </button>
              ))}
            </div>
          </div>

          {/* Factions Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFactions.map(faction => {
              const isSelected = faction.id === p1FactionId;
              return (
                <div
                  key={faction.id}
                  onClick={() => handleSelectP1Faction(faction)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all relative flex flex-col justify-between ${
                    isSelected
                      ? 'border-amber-500 bg-amber-950/20 shadow-[0_0_20px_rgba(251,191,36,0.15)] ring-1 ring-amber-500'
                      : 'border-zinc-800 bg-zinc-900/70 hover:border-zinc-700 hover:bg-zinc-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                        {faction.grandAlliance}
                      </span>
                      {isSelected && (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/40">
                          <Check className="h-3 w-3" /> Selected
                        </span>
                      )}
                    </div>

                    <h3 className="font-cinzel text-base font-bold text-zinc-100">{faction.name}</h3>
                    <p className="text-xs text-zinc-400 font-medium mb-3">{faction.subTitle}</p>

                    <p className="text-[11px] italic text-zinc-500 border-l-2 border-zinc-700 pl-2.5 mb-3 line-clamp-2">
                      "{faction.flavorQuote}"
                    </p>

                    {/* Regiment preview */}
                    <div className="space-y-1 mb-3">
                      <span className="text-[10px] font-semibold uppercase text-zinc-500 block">
                        Included Warscrolls:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {faction.units.map(u => (
                          <span
                            key={u.id}
                            className="text-[10px] bg-zinc-800/80 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700/60 font-mono"
                          >
                            {u.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
                    <span>{faction.units.length} Units</span>
                    <span className="text-amber-400/90 font-medium">
                      {isSelected ? 'Ready to Configure →' : 'Click to Select'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Configuration Panel for Selected Army */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-6 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase font-bold">
                  Customizing Your Force
                </span>
                <h3 className="font-cinzel text-lg font-bold text-zinc-100">
                  {p1Faction.name} ({p1Faction.subTitle})
                </h3>
              </div>
              <span className="text-xs text-zinc-400 font-mono">Grand Alliance: {p1Faction.grandAlliance}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Commander Name */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Commander Name
                </label>
                <input
                  type="text"
                  value={p1Name}
                  onChange={e => setP1Name(e.target.value)}
                  placeholder="e.g. Lord-Commander"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 focus:border-amber-500 focus:outline-none"
                />
                <p className="text-[11px] text-zinc-500 mt-1">This will identify you on the battle console scoreboard.</p>
              </div>

              {/* General's Hero Trait */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  General Hero Trait (Pick 1)
                </label>
                <div className="space-y-2">
                  {p1Faction.heroTraits.map(ht => {
                    const isPicked = p1HeroTraitId === ht.id;
                    return (
                      <button
                        key={ht.id}
                        type="button"
                        onClick={() => setP1HeroTraitId(ht.id)}
                        className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                          isPicked
                            ? 'border-amber-500 bg-amber-500/10 text-zinc-100'
                            : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{ht.name}</span>
                          {isPicked && <Check className="h-3.5 w-3.5 text-amber-400" />}
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-1">{ht.effect}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Artefact of Power */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Artefact of Power (Pick 1)
                </label>
                <div className="space-y-2">
                  {p1Faction.artefacts.map(art => {
                    const isPicked = p1ArtefactId === art.id;
                    return (
                      <button
                        key={art.id}
                        type="button"
                        onClick={() => setP1ArtefactId(art.id)}
                        className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                          isPicked
                            ? 'border-amber-500 bg-amber-500/10 text-zinc-100'
                            : 'border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{art.name}</span>
                          {isPicked && <Check className="h-3.5 w-3.5 text-amber-400" />}
                        </div>
                        <p className="text-[11px] text-zinc-400 mt-1">{art.effect}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
              <span className="text-xs text-zinc-400">
                Selected: <strong className="text-amber-400">{p1Faction.name}</strong>
              </span>

              <button
                type="button"
                onClick={() => {
                  setActiveStep('p2');
                }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs tracking-wide transition-all shadow-md"
              >
                <span>Continue to Opponent & Realm</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* STEP 2: OPPONENT & REALM */
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <h2 className="font-cinzel text-lg font-bold text-zinc-100 flex items-center gap-2">
                <Shield className="h-5 w-5 text-rose-400" />
                <span>Step 2: Choose Opponent Army & Battlefield Realm</span>
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Set up your adversary and select which Mortal Realm to contest.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveStep('p1')}
              className="text-xs text-zinc-400 hover:text-amber-400 transition-colors"
            >
              ← Back to Your Army
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Opponent Selection Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                  Opposing Spearhead (Player 2)
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">
                  ALLIANCE: {p2Faction.grandAlliance}
                </span>
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Opponent Name</label>
                <input
                  type="text"
                  value={p2Name}
                  onChange={e => setP2Name(e.target.value)}
                  placeholder="e.g. Enemy Warlord"
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 focus:border-rose-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Opposing Army</label>
                <select
                  value={p2FactionId}
                  onChange={e => {
                    const f = SPEARHEAD_FACTIONS.find(x => x.id === e.target.value);
                    if (f) handleSelectP2Faction(f);
                  }}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 focus:border-rose-500 focus:outline-none"
                >
                  {SPEARHEAD_FACTIONS.map(f => (
                    <option key={f.id} value={f.id}>
                      {f.name} ({f.subTitle}) · {f.grandAlliance}
                    </option>
                  ))}
                </select>
              </div>

              {/* Opponent Hero Trait */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Opponent Hero Trait</label>
                <select
                  value={p2HeroTraitId}
                  onChange={e => setP2HeroTraitId(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-100 focus:border-rose-500 focus:outline-none"
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

              {/* Opponent Artefact */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Opponent Artefact</label>
                <select
                  value={p2ArtefactId}
                  onChange={e => setP2ArtefactId(e.target.value)}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-xs text-zinc-100 focus:border-rose-500 focus:outline-none"
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

            {/* Battlefield Realm Selection */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-5 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block border-b border-zinc-800 pb-2">
                Battlefield Realm (Board & Twists)
              </span>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setRealm('Aqshy')}
                  className={`w-full p-4 rounded-xl border text-left transition-all ${
                    realm === 'Aqshy'
                      ? 'border-orange-500 bg-orange-950/30 shadow-[0_0_15px_rgba(249,115,22,0.15)] ring-1 ring-orange-500/50'
                      : 'border-zinc-800 bg-zinc-950/40 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Flame className="h-5 w-5 text-orange-400" />
                      <span className="font-cinzel font-bold text-zinc-100">Aqshy · Realm of Fire</span>
                    </div>
                    {realm === 'Aqshy' && <Check className="h-4 w-4 text-orange-400" />}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Volcanic fissures, blistering winds, and scorched earth. Melee critical hits deal extra mortal wounds and aggressive charges are rewarded.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setRealm('Ghyran')}
                  className={`w-full p-4 rounded-xl border text-left transition-all ${
                    realm === 'Ghyran'
                      ? 'border-emerald-500 bg-emerald-950/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/50'
                      : 'border-zinc-800 bg-zinc-950/40 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-emerald-400" />
                      <span className="font-cinzel font-bold text-zinc-100">Ghyran · Realm of Life</span>
                    </div>
                    {realm === 'Ghyran' && <Check className="h-4 w-4 text-emerald-400" />}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Verdant sanctuaries, ironoak groves, and regenerative lifebursts. Units heal or return models, and contesting objectives provides protective wards.
                  </p>
                </button>
              </div>

              {/* Matchup Summary */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3 text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{p1Name}:</span>
                  <span className="text-zinc-200">{p1Faction.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-rose-400 font-semibold">{p2Name}:</span>
                  <span className="text-zinc-200">{p2Faction.name}</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-zinc-800 text-zinc-400">
                  <span>Battle Realm:</span>
                  <span className="font-bold text-amber-400">{realm === 'Aqshy' ? 'Fire (Aqshy)' : 'Life (Ghyran)'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deploy Action Button */}
          <div className="flex items-center justify-between pt-4">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 text-xs text-zinc-400 hover:text-zinc-200"
              >
                Cancel
              </button>
            )}

            <button
              type="button"
              onClick={handleDeploy}
              className="ml-auto py-3.5 px-8 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-xl flex items-center gap-2.5"
            >
              <Swords className="h-5 w-5" />
              <span>COMMENCE BATTLE & ENTER CONSOLE</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
