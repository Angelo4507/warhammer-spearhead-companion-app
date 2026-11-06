import { SpearheadFaction, PlayerState, TurnPhase, BattleTacticCard, SpearheadUnit } from '../types/spearhead';

export interface PhaseMetadata {
  id: TurnPhase;
  label: string;
  order: number;
  shortDesc: string;
  tagline: string;
  badgeColor: string;
  iconName: string;
}

export const TURN_PHASES: PhaseMetadata[] = [
  {
    id: 'Hero',
    label: 'Hero Phase',
    order: 1,
    shortDesc: 'Commands, Prayers, Spells & Hero Abilities',
    tagline: 'Rally troops, cast spells, and unleash heroic auras',
    badgeColor: 'border-purple-500/60 bg-purple-950/40 text-purple-300',
    iconName: 'Sparkles'
  },
  {
    id: 'Movement',
    label: 'Movement Phase',
    order: 2,
    shortDesc: 'Normal Move, Run, Retreat & Reserves',
    tagline: 'Reposition units, advance across the battlefield, and bring in reserves',
    badgeColor: 'border-blue-500/60 bg-blue-950/40 text-blue-300',
    iconName: 'Footprints'
  },
  {
    id: 'Shooting',
    label: 'Shooting Phase',
    order: 3,
    shortDesc: 'Missile Attacks & Ranged Tactics',
    tagline: 'Unleash arrows, bullets, and hurled rocks before the clash',
    badgeColor: 'border-emerald-500/60 bg-emerald-950/40 text-emerald-300',
    iconName: 'Crosshair'
  },
  {
    id: 'Charge',
    label: 'Charge Phase',
    order: 4,
    shortDesc: 'Charge Moves (Within 12") & Impact Abilities',
    tagline: 'Slam into enemy ranks and trigger impact mortals',
    badgeColor: 'border-amber-500/60 bg-amber-950/40 text-amber-300',
    iconName: 'Zap'
  },
  {
    id: 'Combat',
    label: 'Combat Phase',
    order: 5,
    shortDesc: 'Alternating Fights: Pile-in 3" & Melee Attacks',
    tagline: 'Strike first, pile in, and bloody the opposing lines',
    badgeColor: 'border-rose-500/60 bg-rose-950/40 text-rose-300',
    iconName: 'Swords'
  },
  {
    id: 'End of Turn',
    label: 'End of Turn',
    order: 6,
    shortDesc: 'Score Primaries, Battle Tactics & Clean Up',
    tagline: 'Check objectives, complete secondary tactics, and call reinforcements',
    badgeColor: 'border-yellow-500/60 bg-yellow-950/40 text-yellow-300',
    iconName: 'Flag'
  }
];

export interface PhaseAbilityItem {
  id: string;
  sourceType: 'Unit' | 'Regiment' | 'BattleTrait' | 'HeroTrait' | 'Artefact';
  sourceName: string;
  abilityName: string;
  phase: TurnPhase;
  declaredTiming?: string;
  effect: string;
  type: 'Active' | 'Passive' | 'Reaction';
  unitId?: string;
  unitModelCount?: number;
  isSlain?: boolean;
}

export function abilityMatchesPhase(
  text: string,
  abilityPhase: string | undefined,
  targetPhase: TurnPhase
): boolean {
  const normPhase = (abilityPhase || '').trim().toLowerCase();
  const t = `${text} ${normPhase}`.toLowerCase();

  switch (targetPhase) {
    case 'Hero':
      return normPhase === 'hero' || t.includes('hero phase') || t.includes('your hero phase') || t.includes('any hero phase');

    case 'Movement':
      return (
        normPhase === 'movement' ||
        t.includes('movement phase') ||
        t.includes('your movement phase') ||
        t.includes('any movement phase') ||
        t.includes('enemy movement phase') ||
        t.includes('deployment phase') ||
        t.includes('starts in reserve') ||
        t.includes('set up during the deployment phase') ||
        t.includes('from the second battle round') ||
        t.includes('from the third battle round')
      );

    case 'Shooting':
      return (
        normPhase === 'shooting' ||
        t.includes('shooting phase') ||
        t.includes('your shooting phase') ||
        t.includes('shoot in combat') ||
        t.includes('missile weapons') ||
        t.includes('throwin’ rocks') ||
        t.includes('hurlin’ rocks')
      );

    case 'Charge':
      return (
        normPhase === 'charge' ||
        t.includes('charge phase') ||
        t.includes('your charge phase') ||
        t.includes('any charge phase') ||
        t.includes('charge roll') ||
        t.includes('earth-shaking charge') ||
        t.includes('opponent declared a charge') ||
        t.includes('declared a charge')
      );

    case 'Combat':
      return (
        normPhase === 'combat' ||
        t.includes('combat phase') ||
        t.includes('your combat phase') ||
        t.includes('any combat phase') ||
        t.includes('fight ability') ||
        t.includes('strike-first') ||
        t.includes('strike-last')
      );

    case 'End of Turn':
      return (
        normPhase === 'end of turn' ||
        t.includes('end of turn') ||
        t.includes('end of your turn') ||
        t.includes('end of any turn') ||
        t.includes('end of the turn')
      );

    default:
      return false;
  }
}

export function commandMatchesPhase(commandPhase: string, targetPhase: TurnPhase): boolean {
  const cp = (commandPhase || '').toLowerCase();
  switch (targetPhase) {
    case 'Hero':
      return cp.includes('hero');
    case 'Movement':
      return cp.includes('movement');
    case 'Shooting':
      return cp.includes('shooting');
    case 'Charge':
      return cp.includes('charge');
    case 'Combat':
      return cp.includes('combat');
    case 'End of Turn':
      return cp.includes('end of turn');
    default:
      return false;
  }
}

export function extractTiming(text: string): string | undefined {
  const firstLine = text.split('\n')[0].trim();
  if (
    firstLine.includes('Phase') ||
    firstLine.includes('Turn') ||
    firstLine.includes('Passive') ||
    firstLine.includes('Reaction:') ||
    firstLine.includes('Once Per')
  ) {
    return firstLine;
  }
  return undefined;
}

export interface PhaseAbilitiesResult {
  activeAbilities: PhaseAbilityItem[];
  commandReactions: BattleTacticCard[];
  battleTactics: BattleTacticCard[];
  passiveAbilities: PhaseAbilityItem[];
}

export function getPhaseAbilities(
  phase: TurnPhase,
  faction: SpearheadFaction,
  playerState: PlayerState
): PhaseAbilitiesResult {
  const activeAbilities: PhaseAbilityItem[] = [];
  const passiveAbilities: PhaseAbilityItem[] = [];

  // 1. Living unit abilities
  faction.units.forEach((unit: SpearheadUnit) => {
    const healthData = playerState.unitHealth[unit.id];
    const isSlain = healthData?.isSlain ?? false;

    // Slain units cannot activate normal phase abilities (unless it specifically triggers when slain, e.g. Timber!)
    unit.abilities.forEach(ability => {
      const isTimberOrSlainTrigger = ability.effect.toLowerCase().includes('is slain');
      if (isSlain && !isTimberOrSlainTrigger) return;

      const matches = abilityMatchesPhase(
        `${ability.name} ${ability.effect}`,
        ability.phase,
        phase
      );

      if (matches) {
        const item: PhaseAbilityItem = {
          id: `unit-${unit.id}-${ability.name}`,
          sourceType: 'Unit',
          sourceName: unit.name,
          abilityName: ability.name,
          phase,
          declaredTiming: extractTiming(ability.effect) || ability.phase,
          effect: ability.effect,
          type: ability.type,
          unitId: unit.id,
          unitModelCount: unit.modelCount,
          isSlain
        };

        if (ability.type === 'Passive') {
          passiveAbilities.push(item);
        } else {
          activeAbilities.push(item);
        }
      }
    });
  });

  // 2. Battle Traits
  faction.battleTraits.forEach(trait => {
    if (abilityMatchesPhase(`${trait.name} ${trait.description}`, '', phase)) {
      activeAbilities.push({
        id: `trait-${trait.name}`,
        sourceType: 'BattleTrait',
        sourceName: `${faction.subTitle} Trait`,
        abilityName: trait.name,
        phase,
        declaredTiming: extractTiming(trait.description),
        effect: trait.description,
        type: trait.description.toLowerCase().includes('passive') ? 'Passive' : 'Active'
      });
    }
  });

  // 3. Regiment Abilities (filter by selected regiment ability if present, else show both)
  const regAbilities = faction.regimentAbilities || [];
  regAbilities.forEach(ra => {
    // If player has a selected regiment ability, prioritize or match it
    const isSelected = !playerState.selectedRegimentAbilityName || playerState.selectedRegimentAbilityName === ra.name;
    if (isSelected && abilityMatchesPhase(`${ra.name} ${ra.description}`, '', phase)) {
      activeAbilities.push({
        id: `regiment-${ra.name}`,
        sourceType: 'Regiment',
        sourceName: 'Regiment Ability',
        abilityName: ra.name,
        phase,
        declaredTiming: extractTiming(ra.description),
        effect: ra.description,
        type: ra.description.toLowerCase().includes('passive') ? 'Passive' : 'Active'
      });
    }
  });

  // 4. Hero Trait (Enhancement)
  const selectedHT = faction.heroTraits.find(ht => ht.id === playerState.selectedHeroTraitId);
  if (selectedHT && abilityMatchesPhase(`${selectedHT.name} ${selectedHT.effect}`, '', phase)) {
    activeAbilities.push({
      id: `ht-${selectedHT.id}`,
      sourceType: 'HeroTrait',
      sourceName: 'Hero Trait',
      abilityName: selectedHT.name,
      phase,
      declaredTiming: extractTiming(selectedHT.effect),
      effect: selectedHT.effect,
      type: selectedHT.effect.toLowerCase().includes('passive') ? 'Passive' : 'Active'
    });
  }

  // 5. Artefact of Power (Enhancement)
  const selectedArt = faction.artefacts.find(art => art.id === playerState.selectedArtefactId);
  if (selectedArt && abilityMatchesPhase(`${selectedArt.name} ${selectedArt.effect}`, '', phase)) {
    activeAbilities.push({
      id: `art-${selectedArt.id}`,
      sourceType: 'Artefact',
      sourceName: 'Artefact of Power',
      abilityName: selectedArt.name,
      phase,
      declaredTiming: extractTiming(selectedArt.effect),
      effect: selectedArt.effect,
      type: selectedArt.effect.toLowerCase().includes('passive') ? 'Passive' : 'Active'
    });
  }

  // 6. Command Reactions in hand
  const commandReactions = playerState.hand.filter(card =>
    commandMatchesPhase(card.commandPhase, phase)
  );

  // 7. Battle Tactics in hand
  // In End of Turn: all cards in hand can be reviewed for completion!
  // In other phases: cards with conditions relevant to this phase
  let battleTactics: BattleTacticCard[] = [];
  if (phase === 'End of Turn') {
    battleTactics = playerState.hand;
  } else {
    battleTactics = playerState.hand.filter(card => {
      const cond = card.tacticCondition.toLowerCase();
      if (phase === 'Combat' && (cond.includes('destroyed in combat') || cond.includes('combat') || cond.includes('slain'))) {
        return true;
      }
      if (phase === 'Charge' && cond.includes('charge')) {
        return true;
      }
      if (phase === 'Shooting' && (cond.includes('shooting') || cond.includes('missile'))) {
        return true;
      }
      return false;
    });
  }

  return {
    activeAbilities,
    commandReactions,
    battleTactics,
    passiveAbilities
  };
}

export function getNextPhase(current: TurnPhase): { nextPhase: TurnPhase; isTurnComplete: boolean } {
  const currentIndex = TURN_PHASES.findIndex(p => p.id === current);
  if (currentIndex === -1 || currentIndex === TURN_PHASES.length - 1) {
    return { nextPhase: 'Hero', isTurnComplete: true };
  }
  return { nextPhase: TURN_PHASES[currentIndex + 1].id, isTurnComplete: false };
}

export function getPreviousPhase(current: TurnPhase): TurnPhase {
  const currentIndex = TURN_PHASES.findIndex(p => p.id === current);
  if (currentIndex <= 0) return 'Hero';
  return TURN_PHASES[currentIndex - 1].id;
}
