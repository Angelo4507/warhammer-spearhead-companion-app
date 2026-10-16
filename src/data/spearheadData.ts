import { SpearheadFaction, TwistCard, BattleTacticCard } from '../types/spearhead';

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
  {
    id: 'twist-aqshy-1',
    name: 'Searing Heat',
    realm: 'Aqshy',
    title: 'The Blistering Desolation',
    fluff: 'Choking fumes and radiant heat emanate from cracked obsidian fissures, boiling blood inside iron armor.',
    ruleTitle: 'Molten Wind',
    ruleEffect: 'All units add 1" to Run rolls. In addition, subtract 1 from Save rolls for units that are not wholly within terrain.'
  },
  {
    id: 'twist-aqshy-2',
    name: 'Blazing Winds',
    realm: 'Aqshy',
    title: 'Ash Storm of the Great Parch',
    fluff: 'Violent squalls of incandescent cinders blind scouts and snuff out ranged trajectories.',
    ruleTitle: 'Cinder Gale',
    ruleEffect: 'Missile weapons cannot target enemy units that are more than 12" away. Charging units gain +1 to their Charge rolls.'
  },
  {
    id: 'twist-aqshy-3',
    name: 'Crackling Realmstone',
    realm: 'Aqshy',
    title: 'Volcanic Fissures Ignite',
    fluff: 'Raw Aqshian firestone bleeds through the crust, detonating under heavy boots.',
    ruleTitle: 'Unstable Crust',
    ruleEffect: 'Each time a unit finishes a Run or Charge move, roll a D6. On a 1, that unit suffers D3 mortal wounds.'
  },
  {
    id: 'twist-aqshy-4',
    name: 'Wrath of Aqshy',
    realm: 'Aqshy',
    title: 'Furious Bloodshed',
    fluff: 'The very air smells of brimstone and slaughter, driving combatants into frenzy.',
    ruleTitle: 'Scorching Fury',
    ruleEffect: 'In the combat phase, unmodified wound rolls of 6 for melee weapons inflict 1 mortal wound in addition to any normal damage.'
  },
  {
    id: 'twist-ghyran-1',
    name: 'Lifeburst',
    realm: 'Ghyran',
    title: 'The Wellspring of Life',
    fluff: 'Vibrant verdant pollen sweeps the battlefield, sealing severed sinews and knitting torn flesh.',
    ruleTitle: 'Vigour of the Everqueen',
    ruleEffect: 'At the start of each hero phase, each player can heal D3 wounds allocated to 1 friendly unit, or return 1 slain model with 1 health.'
  },
  {
    id: 'twist-ghyran-2',
    name: 'Grasping Tendrils',
    realm: 'Ghyran',
    title: 'Hungry Roots & Briars',
    fluff: 'Vines lash out from the soil, coiling around greaves and choking horses and war machines.',
    ruleTitle: 'Entangling Flora',
    ruleEffect: 'Subtract 2" from Run rolls and Charge rolls for all units (minimum 1").'
  },
  {
    id: 'twist-ghyran-3',
    name: 'Verdant Bloom',
    realm: 'Ghyran',
    title: 'Aura of Sanctuary',
    fluff: 'Ancient ironoak groves radiate protective life-magic across contested stones.',
    ruleTitle: 'Sanctuary of the Wild',
    ruleEffect: 'All units contesting an objective marker gain a 6+ Ward save (or improve their existing Ward save by 1, to a maximum of 4+).'
  },
  {
    id: 'twist-ghyran-4',
    name: 'Poisonous Spores',
    realm: 'Ghyran',
    title: 'Choking Mycelium Burst',
    fluff: 'Pungent fungal pods detonate beneath trampling feet, spewing corrosive neurotoxins.',
    ruleTitle: 'Toxic Cloud',
    ruleEffect: 'When an enemy unit is destroyed within 3" of an objective, all units within 3" of that objective suffer 1 mortal wound on a D6 roll of 4+.'
  }
];

export const SPEARHEAD_FACTIONS: SpearheadFaction[] = [
  // --- ORDER ---
  {
    id: 'stormcast-vigilant',
    name: 'Stormcast Eternals',
    subTitle: 'Vigilant Brotherhood',
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-600 to-yellow-500',
    flavorQuote: 'By Sigmar’s lightning, the Ruinous Powers shall find no foothold in this realm.',
    battleTraits: [
      {
        name: 'Scions of the Storm',
        description: 'During deployment, you can set up Prosecutors in the celestial realm. At the end of your movement phase in Round 1 or 2, set them up anywhere on the battlefield more than 9" from enemy units.'
      },
      {
        name: 'Blaze of Sigmarite',
        description: 'When a friendly unit is destroyed in combat, roll a D6. On a 5+, the attacking unit suffers D3 mortal wounds.'
      }
    ],
    heroTraits: [
      {
        id: 'st-ht-1',
        name: 'Shield of the Celestial Realm',
        type: 'Hero Trait',
        effect: 'Add 1 to save rolls for your General while contesting an objective marker.'
      },
      {
        id: 'st-ht-2',
        name: 'Righteous Zealot',
        type: 'Hero Trait',
        effect: 'Your General can reroll charge rolls and adds +1 to melee attack rolls when charging.'
      }
    ],
    artefacts: [
      {
        id: 'st-art-1',
        name: 'Sigmarite War-hammer',
        type: 'Artefact of Power',
        effect: 'Improve the Rend characteristic of the bearer’s melee weapons by 1.'
      },
      {
        id: 'st-art-2',
        name: 'Radiant Lantern of Azyr',
        type: 'Artefact of Power',
        effect: 'Once per battle in the Hero phase, enemy units within 6" suffer -1 to hit until the next hero phase.'
      }
    ],
    units: [
      {
        id: 'st-lord-veritant',
        name: 'Lord-Veritant with Gryph-crow',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '5"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Judgement Blade',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Mortal)'
          },
          {
            name: 'Gryph-crow Claws',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Banish Corruption',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6. On a 3+, pick 1 enemy unit within 12"; it suffers D3 mortal wounds and cannot receive Commands this turn.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'HERO', 'PRIEST', 'LORD-VERITANT']
      },
      {
        id: 'st-liberators',
        name: 'Liberators',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '40mm',
        move: '5"',
        health: 10,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Sigmarite Warhammers',
            type: 'Melee',
            range: '1"',
            attacks: 11,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Lay Low the Tyrants',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to save rolls for this unit while contesting an objective marker.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'INFANTRY', 'LIBERATORS']
      },
      {
        id: 'st-prosecutors',
        name: 'Prosecutors with Stormcall Javelins',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '40mm',
        move: '10"',
        health: 9,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Stormcall Javelin',
            type: 'Ranged',
            range: '12"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          },
          {
            name: 'Sigmarite Blade',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Herald of the Storm',
            phase: 'Charge',
            type: 'Active',
            effect: 'Roll 3D6 for charge moves and discard the lowest result.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'FLY', 'PROSECUTORS']
      }
    ]
  },
  {
    id: 'skaven-gnawfeast',
    name: 'Skaven',
    subTitle: 'Gnawfeast Clawpack',
    grandAlliance: 'CHAOS',
    accentColor: 'from-emerald-700 to-lime-600',
    flavorQuote: 'Kill-slay the surface dwellers! Gnaw their bones, praise the Great Horned Rat!',
    battleTraits: [
      {
        name: 'The Endless Swarm',
        description: 'When a Clanrats unit is completely destroyed, it enters Reserve as a REINFORCEMENT. At the end of your next movement phase, set up a new unit of 10 Clanrats wholly within 6" of any battlefield edge.'
      },
      {
        name: 'Scurry Away',
        description: 'In the combat phase, after an enemy unit attacks a Skaven HERO, that Hero can immediately retreat up to D6" if not already in combat with another unit.'
      }
    ],
    heroTraits: [
      {
        id: 'sk-ht-1',
        name: 'Skitter-quick Leader',
        type: 'Hero Trait',
        effect: 'Add 2" to your General’s Move characteristic and +1 to retreat rolls.'
      },
      {
        id: 'sk-ht-2',
        name: 'Vicious Cutpurse',
        type: 'Hero Trait',
        effect: 'In combat, unmodified hit rolls of 6 score 2 hits instead of 1.'
      }
    ],
    artefacts: [
      {
        id: 'sk-art-1',
        name: 'Warpstone Talisman',
        type: 'Artefact of Power',
        effect: 'The bearer gains a 5+ Ward save against all attacks.'
      },
      {
        id: 'sk-art-2',
        name: 'Foul Pendant of Pestilence',
        type: 'Artefact of Power',
        effect: 'Enemy units within 3" of the bearer suffer -1 to their wound rolls in combat.'
      }
    ],
    units: [
      {
        id: 'sk-clawlord',
        name: 'Clawlord on Gnaw-beast',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60mm',
        move: '8"',
        health: 7,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'War-halberd',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Gnaw-beast Fangs',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Cornered Fury',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to attacks for each 2 wounds allocated to this model.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'HERO', 'CLAWLORD', 'CAVALRY']
      },
      {
        id: 'sk-clanrats',
        name: 'Clanrats (Swarm Unit)',
        role: 'Infantry',
        modelCount: 20,
        baseSize: '25mm',
        move: '6"',
        health: 20,
        save: '5+',
        control: 10,
        isReinforcement: true,
        reinforcementNote: 'Returns on destruction (Endless Swarm)',
        weapons: [
          {
            name: 'Rusty Blades & Spears',
            type: 'Melee',
            range: '1"',
            attacks: 20,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Strength in Numbers',
            phase: 'End of Turn',
            type: 'Passive',
            effect: 'While this unit has 10 or more models, it counts as having a Control characteristic of 15.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'INFANTRY', 'CLANRATS']
      },
      {
        id: 'sk-jezzails',
        name: 'Warplock Jezzails',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '60x35mm',
        move: '5"',
        health: 6,
        save: '5+',
        control: 3,
        weapons: [
          {
            name: 'Warplock Jezzail',
            type: 'Ranged',
            range: '24"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2',
            ability: 'Sniper (Crit: Mortal)'
          },
          {
            name: 'Pavise Dagger',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '5+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Shield-Pavise',
            phase: 'Passive',
            type: 'Passive',
            effect: 'If this unit did not move this turn, its save characteristic becomes 4+ and ranged attacks have +1 to hit.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'INFANTRY', 'WARPLOCK JEZZAILS']
      }
    ]
  },
  // --- DEATH ---
  {
    id: 'nighthaunt-slasher',
    name: 'Nighthaunt',
    subTitle: 'Slasher Host',
    grandAlliance: 'DEATH',
    accentColor: 'from-cyan-700 to-teal-500',
    flavorQuote: 'The grave yields no peace. Only bitter torment and eternal servitude to the Great Necromancer.',
    battleTraits: [
      {
        name: 'Ethereal Form',
        description: 'Ignore all modifiers to save rolls (both positive and negative) for friendly Nighthaunt units. In addition, all friendly units have a 6+ Ward save.'
      },
      {
        name: 'Wave of Terror',
        description: 'When a friendly unit completes an unmodified charge roll of 8+, the charged enemy unit suffers Strike-Last in the subsequent combat phase.'
      }
    ],
    heroTraits: [
      {
        id: 'nh-ht-1',
        name: 'Ruler of the Spectral Host',
        type: 'Hero Trait',
        effect: 'Once per battle in your hero phase, return D3 slain models to a friendly unit within 12".'
      },
      {
        id: 'nh-ht-2',
        name: 'Hatred of the Living',
        type: 'Hero Trait',
        effect: 'Your General rerolls hit rolls of 1 against non-DEATH units.'
      }
    ],
    artefacts: [
      {
        id: 'nh-art-1',
        name: 'Pendant of the Fell Wind',
        type: 'Artefact of Power',
        effect: 'Add 2" to the Move characteristic of friendly units wholly within 9" of the bearer.'
      },
      {
        id: 'nh-art-2',
        name: 'Soulfire Ring',
        type: 'Artefact of Power',
        effect: 'At the start of your hero phase, heal 1 wound allocated to the bearer.'
      }
    ],
    units: [
      {
        id: 'nh-knight-shrouds',
        name: 'Knight of Shrouds',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '8"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Sword of Stolen Hours',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Lord of Gheists',
            phase: 'Combat',
            type: 'Active',
            effect: 'Pick 1 friendly Nighthaunt unit within 12"; add 1 to attack characteristics of that unit’s melee weapons.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'HERO', 'FLY', 'ETHEREAL', 'KNIGHT OF SHROUDS']
      },
      {
        id: 'nh-chainrasps',
        name: 'Chainrasps',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Malignant Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Chilling Horde',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Reroll hit rolls of 1 for attacks made by this unit while it has 6 or more models.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'INFANTRY', 'ETHEREAL', 'CHAINRASPS']
      },
      {
        id: 'nh-grimghast',
        name: 'Grimghast Reapers',
        role: 'Infantry',
        modelCount: 4,
        baseSize: '32mm',
        move: '8"',
        health: 8,
        save: '4+',
        control: 4,
        weapons: [
          {
            name: 'Slasher Scythe',
            type: 'Melee',
            range: '2"',
            attacks: 8,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Reaped Like Corn',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Reroll hit rolls for attacks made by this unit if the target has 5 or more models.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'INFANTRY', 'ETHEREAL', 'GRIMGHAST REAPERS']
      }
    ]
  },
  // --- DESTRUCTION ---
  {
    id: 'ironjawz-brutes',
    name: 'Ironjawz',
    subTitle: 'Hulking Brutes',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-orange-700 to-amber-600',
    flavorQuote: 'WAAAGH! Smash \'em into paste, bash their skulls, take their shiny gubbins!',
    battleTraits: [
      {
        name: 'Smashing and Bashing',
        description: 'In the combat phase, if a friendly unit destroys an enemy unit, pick another friendly Ironjawz unit within 3" of an enemy to fight immediately.'
      },
      {
        name: 'Mighty Destroyers',
        description: 'In your hero phase, pick 1 friendly Ironjawz unit more than 3" from enemies. Roll a D6: on a 3+, it can make a normal move.'
      }
    ],
    heroTraits: [
      {
        id: 'ij-ht-1',
        name: 'Mega-boss Bravado',
        type: 'Hero Trait',
        effect: 'Your General adds 2 to their Health characteristic.'
      },
      {
        id: 'ij-ht-2',
        name: 'Ironclad Brawler',
        type: 'Hero Trait',
        effect: 'Add 1 to wound rolls for your General’s melee weapons in combat.'
      }
    ],
    artefacts: [
      {
        id: 'ij-art-1',
        name: 'Destroyer Choppa',
        type: 'Artefact of Power',
        effect: 'Once per battle in combat, add 2 to the Damage characteristic of the bearer’s melee weapons.'
      },
      {
        id: 'ij-art-2',
        name: 'Armour of Gork',
        type: 'Artefact of Power',
        effect: 'The bearer gains a 5+ Ward save against melee attacks.'
      }
    ],
    units: [
      {
        id: 'ij-megaboss',
        name: 'Ironjawz Megaboss',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60mm',
        move: '4"',
        health: 8,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Boss Choppa & Rip-toof Fist',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Go on Ladz, Get Stuck In!',
            phase: 'Combat',
            type: 'Active',
            effect: 'Friendly Ironjawz units wholly within 12" add 1 to their melee hit rolls.'
          }
        ],
        keywords: ['DESTRUCTION', 'IRONJAWZ', 'ORRUK', 'HERO', 'MEGABOSS']
      },
      {
        id: 'ij-ardboyz',
        name: 'Ardboyz',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 10,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Ardboy Choppas & Stikkas',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Shield Bash',
            phase: 'Charge',
            type: 'Active',
            effect: 'After completing a charge, roll a D6. On a 4+, the enemy unit suffers D3 mortal wounds.'
          }
        ],
        keywords: ['DESTRUCTION', 'IRONJAWZ', 'INFANTRY', 'ARDBOYZ']
      },
      {
        id: 'ij-gore-gruntas',
        name: 'Gore-gruntas',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '90x52mm',
        move: '8"',
        health: 15,
        save: '4+',
        control: 6,
        weapons: [
          {
            name: 'Pig-iron Choppa',
            type: 'Melee',
            range: '1"',
            attacks: 9,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Grunta Hooves & Tusks',
            type: 'Melee',
            range: '1"',
            attacks: 12,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Gore-grunta Charge',
            phase: 'Charge',
            type: 'Passive',
            effect: 'On turns this unit charged, add 1 to the Damage characteristic of its Tusks and Choppas.'
          }
        ],
        keywords: ['DESTRUCTION', 'IRONJAWZ', 'CAVALRY', 'GORE-GRUNTAS']
      }
    ]
  },
  // --- CITIES OF SIGMAR ---
  {
    id: 'cities-castelite',
    name: 'Cities of Sigmar',
    subTitle: 'Castelite Company',
    grandAlliance: 'ORDER',
    accentColor: 'from-blue-700 to-indigo-600',
    flavorQuote: 'Castelite formation! Shieldwalls interlock, cannons range true, for the God-King!',
    battleTraits: [
      {
        name: 'Castelite Shieldwall',
        description: 'Friendly Steelhelms contesting an objective marker cannot have their save characteristic reduced below 3+ by Rend modifiers.'
      },
      {
        name: 'Orders from Command',
        description: 'At the start of your movement phase, pick 1 Order: "Advance at All Costs" (+2" Move) or "Hold the Ground" (re-roll saves of 1).'
      }
    ],
    heroTraits: [
      {
        id: 'cos-ht-1',
        name: 'Master Tactician',
        type: 'Hero Trait',
        effect: 'At the start of Round 1 and Round 3, you gain 1 additional Command Point.'
      },
      {
        id: 'cos-ht-2',
        name: 'Veteran Commander',
        type: 'Hero Trait',
        effect: 'Your General gives friendly units within 6" a +1 bonus to Control characteristics.'
      }
    ],
    artefacts: [
      {
        id: 'cos-art-1',
        name: 'Sigmarite Breastplate',
        type: 'Artefact of Power',
        effect: 'Add 1 to the bearer’s Save characteristic and health.'
      },
      {
        id: 'cos-art-2',
        name: 'Pennant of the Twin-Tailed Comet',
        type: 'Artefact of Power',
        effect: 'Friendly units within 12" do not take battleshock and can reroll charge rolls of 1.'
      }
    ],
    units: [
      {
        id: 'cos-marshal',
        name: 'Freeguild Marshal & Relic Envoy',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '5"',
        health: 5,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Masterwork Longsword',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Strategic Direction',
            phase: 'Hero',
            type: 'Active',
            effect: 'Once per turn, one command issued by this model costs 0 Command Points.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'HUMAN', 'FREEGUILD MARSHAL']
      },
      {
        id: 'cos-steelhelms',
        name: 'Freeguild Steelhelms',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '5"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Castelite Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Consecrated Ground',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'If this unit controls an objective marker, that marker is consecrated: friendly units contesting it gain 6+ Ward.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'STEELHELMS']
      },
      {
        id: 'cos-cavaliers',
        name: 'Freeguild Cavaliers',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '60x35mm',
        move: '10"',
        health: 9,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Cavalier War-lance',
            type: 'Melee',
            range: '1"',
            attacks: 9,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Warhorse Hooves',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Devastating Charge',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Add 1 to Rend and +1 to Damage for lance attacks on the turn this unit makes a charge.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'CAVALRY', 'CAVALIERS']
      }
    ]
  }
];
