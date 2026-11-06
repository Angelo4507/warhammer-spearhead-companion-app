import React, { useState, useMemo } from 'react';
import {
  MatchState,
  BattleTacticCard,
  SpearheadFaction,
  SpearheadUnit,
  TurnPhase
} from '../types/spearhead';
import {
  TURN_PHASES,
  getPhaseAbilities,
  getNextPhase,
  PhaseAbilityItem
} from '../utils/phaseAbilities';
import {
  Sparkles,
  Footprints,
  Crosshair,
  Zap,
  Swords,
  Flag,
  CheckCircle2,
  Circle,
  AlertTriangle,
  ArrowRight,
  Eye,
  RotateCcw,
  Bell,
  Shield,
  Check,
  ChevronDown,
  ChevronUp,
  X,
  Target
} from 'lucide-react';
import { isUnitReinforceable } from './ReinforcementsBadge';

interface PhaseReminderAssistantProps {
  currentPhase: TurnPhase;
  onSelectPhase: (phase: TurnPhase) => void;
  activePlayer: 'P1' | 'P2';
  match: MatchState;
  p1Faction: SpearheadFaction;
  p2Faction: SpearheadFaction;
  onPlayCommand: (player: 'P1' | 'P2', card: BattleTacticCard) => void;
  onScoreTactic: (player: 'P1' | 'P2', card: BattleTacticCard) => void;
  onCallReinforcements?: (player: 'P1' | 'P2', unitId: string, unitName: string) => void;
  onViewUnit?: (unit: SpearheadUnit) => void;
  onAdvanceTurnOrRound: () => void;
  roundObjectives: {
    P1: { hold1: boolean; hold2: boolean; holdMore: boolean };
    P2: { hold1: boolean; hold2: boolean; holdMore: boolean };
  };
  onToggleObjective: (player: 'P1' | 'P2', type: 'hold1' | 'hold2' | 'holdMore') => void;
  getPrimaryScore: (player: 'P1' | 'P2') => number;
  roundSecondaryVP: { P1: number; P2: number };
}

export const PhaseReminderAssistant: React.FC<PhaseReminderAssistantProps> = ({
  currentPhase,
  onSelectPhase,
  activePlayer,
  match,
  p1Faction,
  p2Faction,
  onPlayCommand,
  onScoreTactic,
  onCallReinforcements,
  onViewUnit,
  onAdvanceTurnOrRound,
  roundObjectives,
  onToggleObjective,
  getPrimaryScore,
  roundSecondaryVP
}) => {
  // Track activated abilities per turn/round: key format: `${round}-${turn}-${phase}-${abilityId}`
  const [activatedAbilities, setActivatedAbilities] = useState<Record<string, boolean>>({});
  const [showPassives, setShowPassives] = useState<boolean>(false);
  const [warningsEnabled, setWarningsEnabled] = useState<boolean>(true);

  // Transition reminder modal state
  const [pendingTargetPhase, setPendingTargetPhase] = useState<TurnPhase | 'PASS_TURN' | null>(null);

  const currentPlayerData = activePlayer === 'P1' ? match.p1 : match.p2;
  const currentFaction = activePlayer === 'P1' ? p1Faction : p2Faction;

  // Compute abilities for the current phase
  const phaseData = useMemo(() => {
    return getPhaseAbilities(currentPhase, currentFaction, currentPlayerData);
  }, [currentPhase, currentFaction, currentPlayerData]);

  // Ability counts across all phases for the badge counters on the stepper
  const phaseItemCounts = useMemo(() => {
    const counts: Record<TurnPhase, number> = {
      Hero: 0,
      Movement: 0,
      Shooting: 0,
      Charge: 0,
      Combat: 0,
      'End of Turn': 0
    };

    TURN_PHASES.forEach(p => {
      const data = getPhaseAbilities(p.id, currentFaction, currentPlayerData);
      counts[p.id] = data.activeAbilities.length + data.commandReactions.length + (p.id === 'End of Turn' ? data.battleTactics.length : 0);
    });

    return counts;
  }, [currentFaction, currentPlayerData]);

  // Check if an ability was activated
  const isAbilityActivated = (id: string) => {
    const key = `${match.round}-${match.currentTurn}-${currentPhase}-${id}`;
    return !!activatedAbilities[key];
  };

  const toggleAbilityActivated = (id: string) => {
    const key = `${match.round}-${match.currentTurn}-${currentPhase}-${id}`;
    setActivatedAbilities(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Check un-activated active abilities in the current phase
  const unactivatedActiveAbilities = useMemo(() => {
    return phaseData.activeAbilities.filter(a => !isAbilityActivated(a.id));
  }, [phaseData.activeAbilities, match.round, match.currentTurn, currentPhase, activatedAbilities]);

  // Reinforcements check for End of Turn
  const slainReinforceables = useMemo(() => {
    return currentFaction.units.filter(u => {
      const uHealth = currentPlayerData.unitHealth[u.id];
      return uHealth?.isSlain && isUnitReinforceable(u);
    });
  }, [currentFaction.units, currentPlayerData.unitHealth]);

  // Transition handler
  const attemptPhaseChange = (target: TurnPhase | 'PASS_TURN') => {
    if (target === currentPhase) return;

    // If warnings enabled and there are un-activated abilities or unplayed command reactions in the current phase
    const hasUnused = unactivatedActiveAbilities.length > 0 || phaseData.commandReactions.length > 0;

    if (warningsEnabled && hasUnused) {
      setPendingTargetPhase(target);
      return;
    }

    if (target === 'PASS_TURN') {
      onAdvanceTurnOrRound();
    } else {
      onSelectPhase(target);
    }
  };

  const confirmPhaseChange = () => {
    if (!pendingTargetPhase) return;
    const target = pendingTargetPhase;
    setPendingTargetPhase(null);

    if (target === 'PASS_TURN') {
      onAdvanceTurnOrRound();
    } else {
      onSelectPhase(target);
    }
  };

  const cancelPhaseChange = () => {
    setPendingTargetPhase(null);
  };

  // Get Phase Icon
  const getPhaseIcon = (phaseId: TurnPhase) => {
    switch (phaseId) {
      case 'Hero':
        return <Sparkles className="h-4 w-4" />;
      case 'Movement':
        return <Footprints className="h-4 w-4" />;
      case 'Shooting':
        return <Crosshair className="h-4 w-4" />;
      case 'Charge':
        return <Zap className="h-4 w-4" />;
      case 'Combat':
        return <Swords className="h-4 w-4" />;
      case 'End of Turn':
        return <Flag className="h-4 w-4" />;
    }
  };

  const nextPhaseInfo = getNextPhase(currentPhase);
  const isPlayer1 = activePlayer === 'P1';

  return (
    <div className="space-y-4">
      {/* Interactive Phase Stepper Bar */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-3 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${isPlayer1 ? 'bg-blue-400' : 'bg-rose-400'} animate-pulse`} />
            <span className="font-cinzel text-xs font-bold text-zinc-200">
              {currentPlayerData.name}'s Turn Phases
            </span>
            <span className="text-zinc-500 text-xs">·</span>
            <span className="text-[11px] font-mono text-amber-400">
              Round {match.round}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <label className="flex items-center gap-1.5 text-[11px] text-zinc-400 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={warningsEnabled}
                onChange={e => setWarningsEnabled(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-zinc-700 bg-zinc-950 text-amber-500 focus:ring-0"
              />
              <Bell className="h-3 w-3 text-zinc-400" />
              <span>Phase Reminders</span>
            </label>
          </div>
        </div>

        {/* Phase Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {TURN_PHASES.map((p, idx) => {
            const isActive = p.id === currentPhase;
            const isPast = TURN_PHASES.findIndex(x => x.id === currentPhase) > idx;
            const count = phaseItemCounts[p.id];

            return (
              <button
                key={p.id}
                type="button"
                onClick={() => attemptPhaseChange(p.id)}
                className={`flex flex-col items-start p-2.5 rounded-xl border text-left transition-all relative ${
                  isActive
                    ? isPlayer1
                      ? 'border-blue-500 bg-blue-950/40 text-blue-100 shadow-md ring-1 ring-blue-500/50'
                      : 'border-rose-500 bg-rose-950/40 text-rose-100 shadow-md ring-1 ring-rose-500/50'
                    : isPast
                    ? 'border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:border-zinc-700'
                    : 'border-zinc-800/80 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <div className={`p-1 rounded ${
                    isActive
                      ? isPlayer1 ? 'bg-blue-500/20 text-blue-400' : 'bg-rose-500/20 text-rose-400'
                      : isPast
                      ? 'bg-zinc-800 text-emerald-400'
                      : 'bg-zinc-800/60 text-zinc-500'
                  }`}>
                    {isPast ? <Check className="h-3.5 w-3.5" /> : getPhaseIcon(p.id)}
                  </div>

                  {count > 0 && (
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? isPlayer1 ? 'bg-blue-500 text-zinc-950' : 'bg-rose-500 text-zinc-950'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {count}
                    </span>
                  )}
                </div>

                <span className="font-cinzel text-xs font-bold leading-tight truncate w-full">
                  {p.label}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono mt-0.5 truncate w-full">
                  Step {idx + 1} of 6
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Phase Command Deck & Ability Reminder Box */}
      <div className={`rounded-xl border p-4 sm:p-5 shadow-lg space-y-4 transition-all ${
        isPlayer1
          ? 'border-blue-900/60 bg-gradient-to-b from-blue-950/30 via-zinc-900/90 to-zinc-900'
          : 'border-rose-900/60 bg-gradient-to-b from-rose-950/30 via-zinc-900/90 to-zinc-900'
      }`}>
        {/* Phase Header with Next Phase Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border shadow-sm ${
              isPlayer1
                ? 'border-blue-500/50 bg-blue-950 text-blue-400'
                : 'border-rose-500/50 bg-rose-950 text-rose-400'
            }`}>
              {getPhaseIcon(currentPhase)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                  Active Turn Phase
                </span>
                <span className="text-zinc-600">·</span>
                <span className="text-xs font-semibold text-zinc-300">
                  {TURN_PHASES.find(p => p.id === currentPhase)?.shortDesc}
                </span>
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-zinc-100 flex items-center gap-2">
                <span>{currentPhase} Phase</span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {nextPhaseInfo.isTurnComplete ? (
              <button
                type="button"
                onClick={() => attemptPhaseChange('PASS_TURN')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                <span>Complete Turn & Pass</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => attemptPhaseChange(nextPhaseInfo.nextPhase)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer ${
                  isPlayer1
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-rose-600 hover:bg-rose-500 text-white'
                }`}
              >
                <span>Next: {nextPhaseInfo.nextPhase}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Phase Reminders Body */}
        <div className="space-y-4">
          {/* Section 1: Active Abilities (Units, Regiment, Battle Traits, Enhancements) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wide text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Unit & Army Abilities ({phaseData.activeAbilities.length})</span>
              </span>
              <span className="text-[10px] text-zinc-500">
                Check off abilities as you declare them
              </span>
            </div>

            {phaseData.activeAbilities.length === 0 ? (
              <div className="rounded-xl border border-dashed border-zinc-800 bg-zinc-950/40 p-4 text-center text-xs text-zinc-500">
                No active army abilities specifically timed to the {currentPhase} phase.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {phaseData.activeAbilities.map((ab: PhaseAbilityItem) => {
                  const isActivated = isAbilityActivated(ab.id);

                  return (
                    <div
                      key={ab.id}
                      className={`rounded-xl border p-3.5 flex flex-col justify-between transition-all ${
                        isActivated
                          ? 'border-emerald-900/60 bg-emerald-950/20 text-zinc-300 opacity-80'
                          : 'border-zinc-800 bg-zinc-950/80 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div>
                            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 mr-1.5">
                              {ab.sourceType === 'Unit' ? ab.sourceName : ab.sourceType}
                            </span>
                            <span className="font-cinzel text-xs font-bold text-zinc-100">
                              {ab.abilityName}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={() => toggleAbilityActivated(ab.id)}
                            className={`flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded transition-all cursor-pointer ${
                              isActivated
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                                : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200'
                            }`}
                          >
                            {isActivated ? (
                              <>
                                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                                <span>Used</span>
                              </>
                            ) : (
                              <>
                                <Circle className="h-3 w-3 text-zinc-500" />
                                <span>Mark Used</span>
                              </>
                            )}
                          </button>
                        </div>

                        {ab.declaredTiming && (
                          <div className="text-[10px] font-mono text-amber-400/90 mb-1">
                            {ab.declaredTiming}
                          </div>
                        )}

                        <p className="text-[11px] text-zinc-300 leading-relaxed whitespace-pre-line mt-1">
                          {ab.effect}
                        </p>
                      </div>

                      {ab.unitId && onViewUnit && (
                        <div className="mt-2.5 pt-2 border-t border-zinc-900 flex justify-end">
                          <button
                            type="button"
                            onClick={() => {
                              const unit = currentFaction.units.find(u => u.id === ab.unitId);
                              if (unit) onViewUnit(unit);
                            }}
                            className="text-[10px] text-zinc-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
                          >
                            <span>Inspect {ab.sourceName}</span>
                            <Eye className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Section 2: Command Reactions in Hand for this Phase */}
          {phaseData.commandReactions.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wide text-sky-400 flex items-center gap-1.5">
                  <Shield className="h-3.5 w-3.5 text-sky-400" />
                  <span>Command Reactions In Hand ({phaseData.commandReactions.length})</span>
                </span>
                <span className="text-[10px] text-zinc-500">
                  Dual-use commands playable in {currentPhase}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {phaseData.commandReactions.map(card => (
                  <div
                    key={card.id}
                    className="rounded-xl border border-sky-900/50 bg-sky-950/20 p-3.5 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-cinzel text-xs font-bold text-sky-200">
                        {card.commandName}
                      </span>
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-sky-900/60 text-sky-300 border border-sky-700/60">
                        {card.commandPhase}
                      </span>
                    </div>

                    <p className="text-[11px] text-zinc-300 leading-snug">
                      {card.commandEffect}
                    </p>

                    <button
                      type="button"
                      onClick={() => onPlayCommand(activePlayer, card)}
                      className="w-full py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 border border-sky-500/40 text-sky-300 font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Zap className="h-3 w-3" />
                      <span>Issue Command ({card.commandName})</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: End of Turn Dedicated Review Panel */}
          {currentPhase === 'End of Turn' && (
            <div className="rounded-xl border border-amber-900/50 bg-amber-950/15 p-4 space-y-4">
              <div className="flex items-center gap-2 border-b border-amber-900/40 pb-2">
                <Flag className="h-4 w-4 text-amber-400" />
                <h4 className="font-cinzel text-xs font-bold text-amber-300 uppercase tracking-wide">
                  End of Turn Scoring & Checklist
                </h4>
              </div>

              {/* Primary Objectives Checklist */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-zinc-300">
                    1. Primary Objective Control (Max 3 VP / Round):
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    Current: {getPrimaryScore(activePlayer)} / 3 VP
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['hold1', 'hold2', 'holdMore'] as const).map(type => {
                    const isScored = roundObjectives[activePlayer][type];
                    const label = type === 'hold1' ? 'Hold 1' : type === 'hold2' ? 'Hold 2+' : 'Hold More';
                    const desc = type === 'hold1' ? '≥ 1 marker' : type === 'hold2' ? '≥ 2 markers' : 'Controls > enemy';

                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => onToggleObjective(activePlayer, type)}
                        className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                          isScored
                            ? isPlayer1
                              ? 'border-blue-500 bg-blue-900/30 text-blue-200'
                              : 'border-rose-500 bg-rose-900/30 text-rose-200'
                            : 'border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-xs">{label} (+1 VP)</div>
                          <div className="text-[10px] text-zinc-400">{desc}</div>
                        </div>
                        {isScored ? (
                          <CheckCircle2 className={`h-4 w-4 ${isPlayer1 ? 'text-blue-400' : 'text-rose-400'}`} />
                        ) : (
                          <Circle className="h-4 w-4 text-zinc-600" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Battle Tactics Review */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-zinc-300">
                    2. Secondary Battle Tactics in Hand (Max 3 VP / Round):
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    Current: {roundSecondaryVP[activePlayer]} / 3 VP
                  </span>
                </div>

                {currentPlayerData.hand.length === 0 ? (
                  <div className="text-xs text-zinc-500 italic p-2 bg-zinc-950/60 rounded border border-zinc-800">
                    No Battle Tactics in hand. Draw at start of round.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {currentPlayerData.hand.map(card => {
                      const currentSecVP = roundSecondaryVP[activePlayer];
                      const isCapped = currentSecVP >= 3;
                      const awardableVP = Math.min(card.tacticVP, 3 - currentSecVP);

                      return (
                        <div
                          key={card.id}
                          className="rounded-lg border border-amber-900/40 bg-zinc-950 p-2.5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-cinzel text-xs font-bold text-zinc-200">
                                {card.tacticName}
                              </span>
                              <span className="text-[10px] font-mono font-bold text-amber-400">
                                +{card.tacticVP} VP
                              </span>
                            </div>
                            <p className="text-[10px] text-zinc-400 line-clamp-2">
                              {card.tacticCondition}
                            </p>
                          </div>

                          <div className="mt-2">
                            {isCapped ? (
                              <button
                                disabled
                                className="w-full py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-500 text-[10px] opacity-60 cursor-not-allowed"
                              >
                                Max Secondary Cap (3/3)
                              </button>
                            ) : (
                              <button
                                type="button"
                                onClick={() => onScoreTactic(activePlayer, card)}
                                className="w-full py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-[10px] font-bold transition-colors cursor-pointer"
                              >
                                Score (+{awardableVP} VP)
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Reinforcements Check */}
              {slainReinforceables.length > 0 && (
                <div className="p-3 rounded-xl border border-rose-800/80 bg-rose-950/40 space-y-2">
                  <div className="flex items-center gap-2 text-rose-300 font-bold text-xs">
                    <RotateCcw className="h-3.5 w-3.5 text-rose-400" />
                    <span>Slain Reinforceables Available to Return:</span>
                  </div>

                  <div className="space-y-1.5">
                    {slainReinforceables.map(u => (
                      <div
                        key={u.id}
                        className="flex items-center justify-between p-2 rounded bg-zinc-950 border border-rose-900/60"
                      >
                        <div className="text-xs">
                          <span className="font-bold text-zinc-200">{u.name}</span>
                          <span className="text-zinc-500 ml-2">({u.modelCount} models)</span>
                        </div>
                        {onCallReinforcements && (
                          <button
                            type="button"
                            onClick={() => onCallReinforcements(activePlayer, u.id, u.name)}
                            className="px-2.5 py-1 rounded bg-rose-600 hover:bg-rose-500 text-white font-bold text-[10px] shadow transition-colors cursor-pointer"
                          >
                            Return Unit to Battlefield
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Section 4: Relevant Passives Accordion */}
          {phaseData.passiveAbilities.length > 0 && (
            <div className="pt-2 border-t border-zinc-800/80">
              <button
                type="button"
                onClick={() => setShowPassives(!showPassives)}
                className="flex items-center justify-between w-full py-1 text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer"
              >
                <span className="flex items-center gap-1.5 font-mono">
                  <Shield className="h-3.5 w-3.5 text-zinc-500" />
                  <span>Always-On Passive Traits for {currentPhase} ({phaseData.passiveAbilities.length})</span>
                </span>
                {showPassives ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
              </button>

              {showPassives && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-2">
                  {phaseData.passiveAbilities.map(item => (
                    <div
                      key={item.id}
                      className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5 text-xs"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[10px] font-mono uppercase px-1 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                          {item.sourceName}
                        </span>
                        <span className="font-cinzel text-xs font-bold text-zinc-300">
                          {item.abilityName}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-snug">
                        {item.effect}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Phase Transition Reminder Modal */}
      {pendingTargetPhase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-lg rounded-2xl border border-amber-600/60 bg-zinc-900 p-6 shadow-2xl space-y-4">
            <div className="flex items-start justify-between border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-base font-bold text-zinc-100">
                    {currentPhase} Phase Reminder
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Review unused abilities before moving to {pendingTargetPhase === 'PASS_TURN' ? 'the next turn' : `${pendingTargetPhase} Phase`}:
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={cancelPhaseChange}
                className="text-zinc-500 hover:text-zinc-300 p-1 rounded"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* List of unactivated items */}
            <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
              {unactivatedActiveAbilities.map(ab => (
                <div
                  key={ab.id}
                  className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 flex items-start justify-between gap-2"
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-mono uppercase px-1 rounded bg-zinc-900 text-zinc-400">
                        {ab.sourceName}
                      </span>
                      <span className="font-cinzel text-xs font-bold text-zinc-200">
                        {ab.abilityName}
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-400 line-clamp-2 mt-0.5">
                      {ab.effect}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleAbilityActivated(ab.id)}
                    className="shrink-0 px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-[10px] font-bold text-zinc-300 transition-colors cursor-pointer"
                  >
                    Mark Done
                  </button>
                </div>
              ))}

              {phaseData.commandReactions.map(card => (
                <div
                  key={card.id}
                  className="rounded-lg border border-sky-900/60 bg-sky-950/30 p-2.5 flex items-center justify-between gap-2"
                >
                  <div>
                    <span className="text-[9px] font-mono uppercase px-1 rounded bg-sky-900/80 text-sky-300">
                      Command in Hand
                    </span>
                    <div className="font-cinzel text-xs font-bold text-sky-200">
                      {card.commandName}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      onPlayCommand(activePlayer, card);
                    }}
                    className="shrink-0 px-2.5 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white text-[10px] font-bold transition-colors cursor-pointer"
                  >
                    Use Command
                  </button>
                </div>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="pt-2 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <label className="flex items-center gap-1.5 text-xs text-zinc-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={!warningsEnabled}
                  onChange={e => setWarningsEnabled(!e.target.checked)}
                  className="h-3.5 w-3.5 rounded border-zinc-700 bg-zinc-950 text-amber-500"
                />
                <span>Don't show reminders again</span>
              </label>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={cancelPhaseChange}
                  className="px-3.5 py-2 rounded-xl border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-200 transition-colors cursor-pointer"
                >
                  Stay in {currentPhase}
                </button>
                <button
                  type="button"
                  onClick={confirmPhaseChange}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold shadow-md transition-colors cursor-pointer"
                >
                  Proceed Anyway →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
