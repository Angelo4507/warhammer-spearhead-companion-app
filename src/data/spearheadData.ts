import { SpearheadFaction, TwistCard, BattleTacticCard } from '../types/spearhead';
import { ORDER_FACTIONS } from './factions/orderFactions';
import { CHAOS_FACTIONS } from './factions/chaosFactions';
import { DEATH_FACTIONS } from './factions/deathFactions';
import { DESTRUCTION_FACTIONS } from './factions/destructionFactions';

export const BATTLE_TACTICS_DECK: BattleTacticCard[] = [
  {
    id: 'tactic-1',
    cardNumber: 1,
    tacticName: 'Take the Flanks',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if you control 2 or more objective markers that are wholly outside your territory at the end of your turn.',
    tacticVP: 1,
    commandName: 'Inspiring Presence',
    commandPhase: 'Hero Phase',
    commandType: 'Command Ability',
    commandEffect: 'Pick 1 friendly unit. Until the start of your next turn, that unit adds +2 to its Control characteristic while contesting objectives.'
  },
  {
    id: 'tactic-2',
    cardNumber: 2,
    tacticName: 'Seize the Center',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if you control the central battlefield objective marker and have at least 1 friendly unit wholly within 3" of it.',
    tacticVP: 1,
    commandName: 'Forward to Victory',
    commandPhase: 'Charge Phase',
    commandType: 'Reaction',
    commandEffect: 'You can reroll the charge roll for 1 friendly unit that declared a charge this phase.'
  },
  {
    id: 'tactic-3',
    cardNumber: 3,
    tacticName: 'Slay the Warlord',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if the enemy General was slain during this battle round, or if your General is in combat with the enemy General.',
    tacticVP: 2,
    commandName: 'All-out Attack',
    commandPhase: 'Combat Phase',
    commandType: 'Command Ability',
    commandEffect: 'Add 1 to hit rolls for attacks made by 1 friendly unit until the end of that phase.'
  },
  {
    id: 'tactic-4',
    cardNumber: 4,
    tacticName: 'Strike at the Heart',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if at least 1 enemy unit was destroyed in combat by a friendly HERO or CAVALRY unit this turn.',
    tacticVP: 1,
    commandName: 'All-out Defence',
    commandPhase: 'Combat Phase',
    commandType: 'Command Ability',
    commandEffect: 'Add 1 to save rolls for 1 friendly unit targeted by enemy attacks until the end of that phase.'
  },
  {
    id: 'tactic-5',
    cardNumber: 5,
    tacticName: 'Surround Them',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if 3 or more friendly units are wholly within enemy territory at the end of your turn.',
    tacticVP: 1,
    commandName: 'Redeploy',
    commandPhase: 'Movement Phase',
    commandType: 'Reaction',
    commandEffect: 'When an enemy unit ends a normal move within 9" of a friendly unit, that friendly unit can make a D6" normal move, but cannot finish within 3" of enemy models.'
  },
  {
    id: 'tactic-6',
    cardNumber: 6,
    tacticName: 'Hold the Line',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if you control all objectives wholly within your own territory and no enemy units are contesting them.',
    tacticVP: 1,
    commandName: 'Rally the Host',
    commandPhase: 'Hero Phase',
    commandType: 'Command Ability',
    commandEffect: 'Pick 1 friendly damaged unit. Roll 6 dice: for each 5+, return 1 slain model with 1 or 2 health, or heal 1 wound allocated to that unit.'
  },
  {
    id: 'tactic-7',
    cardNumber: 7,
    tacticName: 'Shatter Their Ranks',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if 2 or more enemy units were destroyed during your turn (by shooting, magic, or combat).',
    tacticVP: 2,
    commandName: 'Fierce Retaliation',
    commandPhase: 'Combat Phase',
    commandType: 'Reaction',
    commandEffect: 'After an enemy unit finishes fighting, pick 1 eligible friendly unit that has not fought yet; that unit strikes next before standard alternation.'
  },
  {
    id: 'tactic-8',
    cardNumber: 8,
    tacticName: 'Swift Advance',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if at least 2 friendly units made a Run move or successful Charge move and both ended within 6" of an objective marker.',
    tacticVP: 1,
    commandName: 'At the Double',
    commandPhase: 'Movement Phase',
    commandType: 'Command Ability',
    commandEffect: 'When a friendly unit runs, do not roll a dice: add a flat 6" to its Move characteristic instead.'
  },
  {
    id: 'tactic-9',
    cardNumber: 9,
    tacticName: 'Overwhelming Force',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if you control an objective marker that was controlled by your opponent at the start of your turn.',
    tacticVP: 1,
    commandName: 'Unyielding Resolve',
    commandPhase: 'End of Turn',
    commandType: 'Reaction',
    commandEffect: 'Pick 1 friendly unit contesting an objective. It cannot be forced to retreat or lose control of that objective until the next hero phase.'
  },
  {
    id: 'tactic-10',
    cardNumber: 10,
    tacticName: 'Desecrate / Consecrate',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if your HERO is contesting an objective in the enemy half and no enemy HERO is within 6" of that objective.',
    tacticVP: 1,
    commandName: 'Magical Ward',
    commandPhase: 'Hero Phase',
    commandType: 'Command Ability',
    commandEffect: 'Friendly units within 6" of your General gain a 5+ Ward save against mortal wounds and spells until your next turn.'
  },
  {
    id: 'tactic-11',
    cardNumber: 11,
    tacticName: 'Draw Their Blood',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if at least 1 enemy unit with 3 or more original health models suffered 4 or more wounds this turn.',
    tacticVP: 1,
    commandName: 'Unleash Hell',
    commandPhase: 'Charge Phase',
    commandType: 'Reaction',
    commandEffect: 'When an enemy unit completes a charge within 9" of a friendly missile unit, that unit can immediately shoot at the charging unit with -1 to hit.'
  },
  {
    id: 'tactic-12',
    cardNumber: 12,
    tacticName: 'Lead From the Front',
    tacticTiming: 'End of Your Turn',
    tacticCondition: 'You complete this tactic if your General is within 3" of an enemy unit at the end of the turn and is not slain.',
    tacticVP: 1,
    commandName: 'Heroic Challenge',
    commandPhase: 'Combat Phase',
    commandType: 'Command Ability',
    commandEffect: 'Your General adds +1 to their Attacks characteristic and can reroll wound rolls of 1 when targeting enemy HERO or MONSTER models.'
  }
];

export const TWIST_CARDS: TwistCard[] = [
  // --- AQSHY (REALM OF FIRE) ---
  {
    id: 'twist-aqshy-1',
    name: 'Bloodmarked',
    realm: 'Aqshy',
    title: 'Marked for Slaughter',
    fluff: 'A crimson brand of vengeance flares above rival champions, drawing blade and fury toward their doom.',
    ruleTitle: 'Bloodmark',
    ruleEffect: 'The underdog (or active player if tied) marks 1 unit in each army; destroying an enemy’s marked unit grants 1 extra victory point at the end of the round.'
  },
  {
    id: 'twist-aqshy-2',
    name: 'Let the Blood Flow',
    realm: 'Aqshy',
    title: 'Frenzied Carnage',
    fluff: 'The violent pulse of the Realm of Fire surges through warriors’ veins, rewarding relentless slaughter.',
    ruleTitle: 'Frenzied Slaughter',
    ruleEffect: 'Rewards extra victory points for destroying enemy units, while granting the underdog’s chosen friendly unit a frenzied state (+1 to hit rolls).'
  },
  {
    id: 'twist-aqshy-3',
    name: 'Mount the Attack',
    realm: 'Aqshy',
    title: 'Relentless Assault',
    fluff: 'War horns resound across cracked brimstone as battlelines crash headlong into enemy redoubts.',
    ruleTitle: 'Charge of the Underdog',
    ruleEffect: 'Grants bonus victory points for capturing opponent-controlled objectives, plus a Charge bonus (+1 Damage to melee weapons) for a unit chosen by the underdog.'
  },
  {
    id: 'twist-aqshy-4',
    name: 'Reclaim Aqshy',
    realm: 'Aqshy',
    title: 'Territorial Conquest',
    fluff: 'Strategic strongpoints must be secured from rival encroachers to solidify dominion over the Great Parch.',
    ruleTitle: 'Designated Ground',
    ruleEffect: 'The underdog (or both players if no underdog) designates specific objectives to yield extra victory points when held.'
  },
  {
    id: 'twist-aqshy-5',
    name: 'Ring of Fire',
    realm: 'Aqshy',
    title: 'Blazing Conflagration',
    fluff: 'Geysers of liquid flame erupt violently along tectonic rifts, turning the battlefield into a death trap.',
    ruleTitle: 'Hazardous Inferno',
    ruleEffect: 'Introduces hazardous fiery effects or mortal damage mechanics across the battlefield determined by roll-offs.'
  },
  {
    id: 'twist-aqshy-6',
    name: 'Wreathed in Smoke',
    realm: 'Aqshy',
    title: 'Choking Ash Cloud',
    fluff: 'Dense volcanic ash and sulfuric smoke billow across the field, obscuring warriors in blinding haze.',
    ruleTitle: 'Obscuring Smog',
    ruleEffect: 'Obscures a designated objective chosen by the underdog, making successful hits against units contesting it require an unmodified roll of 6.'
  },

  // --- GHYRAN (REALM OF LIFE) ---
  {
    id: 'twist-ghyran-1',
    name: 'Lifespring',
    realm: 'Ghyran',
    title: 'Wellspring of Vitality',
    fluff: 'Rejuvenating water infused with raw life-magic bubbles up from deep beneath the mossy soil.',
    ruleTitle: 'Waters of Life',
    ruleEffect: 'The underdog (or a roll-off winner if tied) picks one objective on the battlefield to become a lifespring for the battle round.'
  },
  {
    id: 'twist-ghyran-2',
    name: 'Take the Land',
    realm: 'Ghyran',
    title: 'Wild Dominance',
    fluff: 'Ancient, primal earth resists the presence of intruders; total control demands holding contested terrain.',
    ruleTitle: 'Contested Wilds',
    ruleEffect: 'Each player scores 1 extra victory point at the end of their turn if they have more models contesting the large terrain feature in enemy territory than the opponent. The underdog also adds +1 to wound rolls for attacks targeting units contesting that large terrain feature.'
  },
  {
    id: 'twist-ghyran-3',
    name: 'Grasping Vines',
    realm: 'Ghyran',
    title: 'Entangling Flora',
    fluff: 'Sentient roots and thorny tendrils lash out from the soil, coiling tightly around charging boots and mounts.',
    ruleTitle: 'Ensnared',
    ruleEffect: 'The underdog (or roll-off winner) picks an enemy unit on the battlefield to be ensnared, halving that unit’s movement characteristic for the round.'
  },
  {
    id: 'twist-ghyran-4',
    name: 'Grandfather’s Blessing',
    realm: 'Ghyran',
    title: 'Blighted Verdance',
    fluff: 'Reflecting Nurgle’s corrupting influence in Ghyran, festering miasma saps the vitality and armor of victims.',
    ruleTitle: 'Rot or Miasma',
    ruleEffect: 'Reflecting Nurgle’s influence in Ghyran, you pick an enemy unit and choose one of two effects for the round: either Nurgle’s Rot (subtract 1 from save rolls) or Eroding Miasma (ward rolls cannot be made for that unit).'
  },
  {
    id: 'twist-ghyran-5',
    name: 'Alarielle’s Blessing (Shield of Thorns / Rain of Jade)',
    realm: 'Ghyran',
    title: 'Grace of the Everqueen',
    fluff: 'The mother of Ghyran bestows protective briars and soothing rains upon those fighting in her name.',
    ruleTitle: 'Shield of Thorns / Rain of Jade',
    ruleEffect: 'Grants healing and protection from nature’s bounty. You can pick up to 3 different friendly units on the battlefield to Heal (D3) each, or invoke protective thorns.'
  },
  {
    id: 'twist-ghyran-6',
    name: 'Reclaim Ghyran',
    realm: 'Ghyran',
    title: 'Restoration of the Jade Land',
    fluff: 'Sacred groves and overgrown ruins must be reclaimed to allow the life cycle to flourish anew.',
    ruleTitle: 'Life-Rich Terrain',
    ruleEffect: 'Focuses on controlling the life-rich terrain, granting extra control/scoring advantages around objectives or key areas on the board.'
  }
];

export const SPEARHEAD_FACTIONS: SpearheadFaction[] = [
  ...ORDER_FACTIONS,
  ...CHAOS_FACTIONS,
  ...DEATH_FACTIONS,
  ...DESTRUCTION_FACTIONS
];

