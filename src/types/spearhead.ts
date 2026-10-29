export type GrandAlliance = 'ORDER' | 'CHAOS' | 'DEATH' | 'DESTRUCTION';

export interface WeaponProfile {
  name: string;
  type: 'Melee' | 'Ranged';
  range: string;
  attacks: string | number;
  toHit: string;
  toWound: string;
  rend: string;
  damage: string;
  ability?: string;
}

export interface UnitAbility {
  name: string;
  phase: 'Hero' | 'Movement' | 'Shooting' | 'Charge' | 'Combat' | 'End of Turn' | 'Passive' | 'Reaction';
  type: 'Passive' | 'Active' | 'Reaction';
  effect: string;
}

export interface SpearheadUnit {
  id: string;
  name: string;
  role: 'Hero' | 'Infantry' | 'Cavalry' | 'Monster' | 'Warmachine';
  modelCount: number;
  baseSize: string;
  move: string;
  health: number;
  save: string;
  control: number;
  isReinforcement?: boolean;
  reinforcementNote?: string;
  weapons: WeaponProfile[];
  abilities: UnitAbility[];
  keywords: string[];
}

export interface FactionEnhancement {
  id: string;
  name: string;
  type: 'Hero Trait' | 'Artefact of Power';
  effect: string;
}

export interface SpearheadFaction {
  id: string;
  name: string;
  subTitle: string;
  grandAlliance: GrandAlliance;
  accentColor: string; // Tailwind color class or hex
  flavorQuote: string;
  battleTraits: {
    name: string;
    description: string;
  }[];
  regimentAbilities?: {
    name: string;
    description: string;
  }[];
  heroTraits: FactionEnhancement[];
  artefacts: FactionEnhancement[];
  units: SpearheadUnit[];
}

export interface TwistCard {
  id: string;
  name: string;
  realm: 'Aqshy' | 'Ghyran';
  roundRequirement?: number; // e.g. 1-4
  title: string;
  fluff: string;
  ruleTitle: string;
  ruleEffect: string;
}

export interface BattleTacticCard {
  id: string;
  cardNumber: number;
  tacticName: string;
  tacticCondition: string;
  tacticTiming: 'Start of Your Turn' | 'During Your Turn' | 'End of Your Turn';
  tacticVP: number;
  commandName: string;
  commandPhase: 'Hero Phase' | 'Movement Phase' | 'Shooting Phase' | 'Charge Phase' | 'Combat Phase' | 'End of Turn';
  commandType: 'Command Ability' | 'Reaction';
  commandEffect: string;
}

export interface PlayerState {
  name: string;
  factionId: string;
  selectedHeroTraitId: string;
  selectedArtefactId: string;
  score: number;
  commandPoints: number;
  hand: BattleTacticCard[];
  completedTactics: BattleTacticCard[];
  usedCommands: BattleTacticCard[];
  unitHealth: Record<string, { currentHealth: number; maxHealth: number; isSlain: boolean; inReserve: boolean; isReinforced: boolean }>;
}

export type ObjectiveState = 'P1' | 'P2' | 'CONTESTED' | 'NONE';

export interface MatchState {
  id: string;
  date: string;
  realm: 'Aqshy' | 'Ghyran';
  round: number; // 1 to 4
  currentTurn: 'P1' | 'P2';
  roundInitiativeWinner: 'P1' | 'P2';
  activeTwist: TwistCard | null;
  deck: BattleTacticCard[];
  discardPile: BattleTacticCard[];
  objectives: {
    A: ObjectiveState;
    B: ObjectiveState;
    C: ObjectiveState;
    D: ObjectiveState;
  };
  p1: PlayerState;
  p2: PlayerState;
  roundLogs: {
    round: number;
    text: string;
    timestamp: string;
  }[];
  isFinished: boolean;
}
