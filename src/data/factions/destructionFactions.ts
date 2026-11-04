import { SpearheadFaction } from '../../types/spearhead';

export const DESTRUCTION_FACTIONS: SpearheadFaction[] = [
  // 4. ORRUK WARCLANS - Ironjawz Bigmob
  {
    id: 'orruk-ironjawz-bigmob',
    name: 'Orruk Warclans',
    subTitle: 'Ironjawz Bigmob',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-amber-600 via-yellow-600 to-stone-900',
    flavorQuote: '‘Right then, ladz. Here’s da plan. Da gargants are hangin’ out over da hill. We’z gonna go bash ’em until they stop movin’. Any questions?’ — Zorkazug, Megaboss of the Ironsunz',
    battleTraits: [
      {
        name: 'Mighty Destroyers',
        description: 'Once Per Turn (Army), Any Hero Phase\nDeclare: Pick a friendly unit that was not set up this turn to be the target.\nEffect: The target can move up to 3". It can move into combat. If it was in combat at the start of the move, it must end that move in combat.'
      },
      {
        name: '’Ere We Go!',
        description: 'Your Movement Phase\nEffect: Your Brutes are not set up during the deployment phase. Instead, from the third battle round onwards, set up this unit anywhere on the battlefield more than 6" from all enemy units.\nKeywords: Core'
      }
    ],
    regimentAbilities: [
      {
        name: 'Natural Disaster',
        description: 'Passive\nEffect: If you make an unmodified charge roll of 8+ for a friendly unit, add 1 to the Attacks characteristic of that unit’s melee weapons for the rest of the turn.'
      },
      {
        name: 'A Proper Ruckus',
        description: 'Once Per Battle, Reaction: You declared the ‘Mighty Destroyers’ ability\nEffect: All friendly units on the battlefield that were not set up this turn are the targets of that ability instead.'
      }
    ],
    heroTraits: [
      {
        id: 'or-bm-ht1',
        name: 'Trophy Skulls',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general’s Control characteristic is 5.'
      },
      {
        id: 'or-bm-ht2',
        name: 'Mega Bossy',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: If this unit charged this turn, for the rest of the turn, add 1 to charge rolls for friendly units while they are wholly within 12" of this unit.'
      }
    ],
    artefacts: [
      {
        id: 'or-bm-art1',
        name: 'Amberbone Whetstone',
        type: 'Artefact of Power',
        effect: 'Passive\nEffect: The Rend characteristic of your general’s melee weapons is 2.'
      },
      {
        id: 'or-bm-art2',
        name: 'Armour of Gork',
        type: 'Artefact of Power',
        effect: 'Passive\nEffect: Your general has Ward (6+).'
      }
    ],
    units: [
      {
        id: 'or-bm-megaboss',
        name: 'Megaboss',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60mm',
        move: '4"',
        health: 8,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Boss-choppa',
            type: 'Melee',
            range: '1"',
            attacks: 8,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Get Stuck In, Ladz!',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick this unit or a friendly Brute unit wholly within 12" of this unit to be the target.\nEffect: Roll a dice. On a 2+, add 1 to the Attacks characteristic of the target’s melee weapons until the start of your next turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'IRONJAWZ', 'HERO', 'INFANTRY', 'MEGABOSS']
      },
      {
        id: 'or-bm-ardboyz',
        name: 'Ardboyz',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 2,
        save: '3+',
        control: 1,
        reinforcementNote: 'The army list consists of 2 units of 5 Ardboyz.',
        weapons: [
          {
            name: 'Choppa or Stikka',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Anti-charge (+1 Rend)'
          }
        ],
        abilities: [
          {
            name: 'Shield Bash',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nDeclare: Pick an enemy unit within 1" of this unit to be the target.\nEffect: Make a shield bash roll of D6 for each model in this unit that is within 3" of the target. For each 6, inflict 1 mortal damage on the target.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'IRONJAWZ', 'INFANTRY', 'ARDBOYZ']
      },
      {
        id: 'or-bm-bruteragerz',
        name: 'Brute Ragerz',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '4"',
        health: 3,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcements unit (3 models)',
        weapons: [
          {
            name: 'Rager Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Unleashed Rage',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: This unit has Strike-first if it charged in the same turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'IRONJAWZ', 'INFANTRY', 'BRUTE', 'REINFORCEMENTS']
      },
      {
        id: 'or-bm-brutes',
        name: 'Brutes',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '40mm',
        move: '4"',
        health: 3,
        save: '3+',
        control: 1,
        reinforcementNote: 'Starts in reserve; arrives from battle round 3 onwards via ’Ere We Go!.',
        weapons: [
          {
            name: 'Brute Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'You Messin’?',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Enemy units with a Health characteristic of 1 or 2 cannot contest objectives while they are in combat with this unit.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'IRONJAWZ', 'INFANTRY', 'BRUTE']
      }
    ]
  },

  // 4b. ORRUK WARCLANS - Swampskulka Gang
  {
    id: 'orruk-swampskulka',
    name: 'Orruk Warclans',
    subTitle: 'Swampskulka Gang',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-emerald-900 via-stone-900 to-amber-950',
    flavorQuote: '‘Unlucky, long-ears. Bet you wish you’d snuffed it along with yer mates, don’t ya?’ — Murknob Grikstab da Peeler',
    battleTraits: [
      {
        name: 'Kruleboyz Waaagh!',
        description: 'Once Per Battle, Any Combat Phase\nDeclare: Pick your general to use this ability, then pick another friendly unit wholly within 12" of them to be the target.\nEffect: Your general and the target have Strike-first this phase.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Noisy Racket',
        description: 'Passive\nEffect: Subtract 1 from wound rolls for attacks made by enemy units in the first battle round.'
      },
      {
        name: 'Covered in Mud',
        description: 'Once Per Turn (Army), Start of First Battle Round\nDeclare: Pick a friendly unit to use this ability.\nEffect: In this battle, that unit is not visible to enemy models that are more than 12" away from it.'
      }
    ],
    heroTraits: [
      {
        id: 'or-sk-ht1',
        name: 'Egomaniak',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: If any other friendly units are within your general’s combat range, before you allocate a damage point to your general, roll a dice. On a 4+, you must allocate that damage point to one of those units instead.'
      },
      {
        id: 'or-sk-ht2',
        name: 'Kunnin’ Plan',
        type: 'Hero Trait',
        effect: 'Once Per Turn, Your Hero Phase\nDeclare: Pick a friendly unit wholly within 12" of your general.\nEffect: If that unit uses a Retreat ability this turn, no mortal damage is inflicted on it and it can still use Shoot and/or Charge abilities later in the turn.'
      }
    ],
    artefacts: [
      {
        id: 'or-sk-art1',
        name: 'Mork’s Eye Pebble',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Enemy Movement Phase\nEffect: In the next shooting phase, friendly units have Ward (5+) while they are wholly within 12" of your general.'
      },
      {
        id: 'or-sk-art2',
        name: 'Eye-biter Ash',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase\nDeclare: Pick an enemy unit in combat with your general and roll a dice.\nEffect: On a 1-4, subtract 1 from hit rolls for attacks made by that unit for the rest of the phase. On a 5+, subtract 1 from hit rolls for attacks made by that unit for the rest of the battle.'
      }
    ],
    units: [
      {
        id: 'or-sk-killaboss',
        name: 'Killaboss on Great Gnashtoof',
        role: 'Hero',
        modelCount: 1,
        baseSize: '105x70mm',
        move: '10"',
        health: 10,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Jagged Boss-stikka',
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
            name: 'Gnashtoof’s Bone-crushing Fangs',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'All Part of Da Plan',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly unit wholly within 9" of this unit to be the target. You cannot pick this unit.\nEffect: Add 3 to the target’s control score until the start of your next turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'KRULEBOYZ', 'HERO', 'CAVALRY', 'KILLABOSS']
      },
      {
        id: 'or-sk-murknob',
        name: 'Murknob with Belcha-banna',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '5"',
        health: 6,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Murknob Cleaver',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Breath of the Mire-drakes',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nDeclare: Roll a dice for each enemy unit in combat with this unit.\nEffect: On a 1, nothing happens. On a 2-5, inflict 1 mortal damage on that enemy unit. On a 6, inflict D3 mortal damage on that unit.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'KRULEBOYZ', 'HERO', 'INFANTRY', 'MURKNOB']
      },
      {
        id: 'or-sk-gutrippaz',
        name: 'Gutrippaz',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '5"',
        health: 2,
        save: '5+',
        control: 1,
        reinforcementNote: 'The army list consists of 2 units of 5 Gutrippaz.',
        weapons: [
          {
            name: 'Wicked Hacka',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Scare Taktikz',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nEffect: Roll a dice. On a 3+, subtract 1 from hit rolls for attacks that target this unit this phase. This ability has no effect on attacks made by Heroes.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'KRULEBOYZ', 'INFANTRY', 'GUTRIPPAZ']
      },
      {
        id: 'or-sk-boltboyz',
        name: 'Man-skewer Boltboyz',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '32mm',
        move: '5"',
        health: 2,
        save: '5+',
        control: 1,
        weapons: [
          {
            name: 'Man-skewer Crossbow',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Auto-wound)'
          },
          {
            name: 'Jaggedy Blade',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Pick ’Em Off',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to hit rolls for this unit’s shooting attacks if has not used a Move ability this turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'KRULEBOYZ', 'INFANTRY', 'MAN-SKEWER BOLTBOYZ']
      },
      {
        id: 'or-sk-killbow',
        name: 'Beast-skewer Killbow',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '5"',
        health: 5,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Beast-skewer Bolts',
            type: 'Ranged',
            range: '24"',
            attacks: 2,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: 'D6',
            ability: 'Crit (Auto-wound)'
          },
          {
            name: 'Jaggedy Blades',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Skewered',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: The Damage characteristic of this unit’s Beast-skewer Bolts is 6 instead of D6 if the target is a Monster.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'KRULEBOYZ', 'WAR MACHINE', 'BEAST-SKEWER KILLBOW']
      }
    ]
  },

  // 11. GLOOMSPITE GITZ - Bad Moon Madmob
  {
    id: 'gitz-badmoon',
    name: 'Gloomspite Gitz',
    subTitle: 'Bad Moon Madmob',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-yellow-500 via-emerald-950 to-stone-900',
    flavorQuote: '‘Stab ’em faster, you slimy lot, or da troggs will be havin’ ya for dinner!’ — Loonboss Puddlerot',
    battleTraits: [
      {
        name: 'Under the Light of the Bad Moon',
        description: 'Once Per Battle, Start of the First Battle Round\nDeclare: Pick a territory (either friendly territory or enemy territory) to be under the Light of the Bad Moon. If both players can use this ability, the players roll off and the winner picks a territory to be under the Light of the Bad Moon.\nThe territory picked remains under the Light of the Bad Moon in the first and second battle rounds. In the third and fourth battle rounds, the other territory is under the Light of the Bad Moon.\nEffect: While a friendly unit is wholly within the territory that is under the Light of the Bad Moon, the appropriate effect below applies to it:\n• Frothing Zealots: If the unit is a Moonclan Stabbas unit, add 3 to its control score.\n• Lunar Squigs: If the unit is a Squig Hoppers unit, no mortal damage is inflicted on it when it uses Retreat abilities.\n• Moonlit Hide: If the unit is a Rockgut Troggoths unit, add 1 to save rolls for it.'
      },
      {
        name: 'Squigalanche',
        description: 'Passive\nEffect: One of your units of Squig Hoppers is not set up during the deployment phase. Instead, from the third battle round onwards, they can use the ‘Squigalanche Arrival’ ability.\n\nYour Movement Phase (Squigalanche Arrival):\nEffect: Set up this unit wholly within your territory, wholly within 3" of a battlefield edge and more than 6" from all enemy units.'
      }
    ],
    regimentAbilities: [
      {
        name: 'The Lunatic Hordes',
        description: 'Your Hero Phase\nDeclare: Pick a friendly Moonclan Stabbas unit to use this ability.\nEffect: You can return up to D3 slain models to that unit.'
      },
      {
        name: 'The Hand of Gork',
        description: 'Once Per Battle (Army), Your Movement Phase\nDeclare: Pick a friendly unit that is not in combat to use this ability.\nEffect: Remove that unit from the battlefield and set it up again more than 9" from all enemy units.\nKeywords: Core'
      }
    ],
    heroTraits: [
      {
        id: 'gz-bm-ht1',
        name: 'Fight Another Day',
        type: 'Hero Trait',
        effect: 'End of Any Turn\nDeclare: Pick your general to use this ability if they used a Fight ability this turn.\nEffect: Your general can make a 2D6" move but cannot end that move in combat.'
      },
      {
        id: 'gz-bm-ht2',
        name: 'The Clammy Cowl',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Subtract 1 from hit rolls for attacks that target your general.'
      }
    ],
    artefacts: [
      {
        id: 'gz-bm-art1',
        name: 'Hallucinogenic Fungus Brew',
        type: 'Artefact of Power',
        effect: 'Passive\nEffect: Your general has Ward (4+) in the first battle round, Ward (5+) in the second battle round, and Ward (6+) in the third and fourth battle rounds.'
      },
      {
        id: 'gz-bm-art2',
        name: 'Nightshade Mushroom',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Enemy Movement Phase\nDeclare: Pick a friendly unit within your general’s combat range.\nEffect: That unit cannot be targeted by shooting attacks in the next shooting phase.'
      }
    ],
    units: [
      {
        id: 'gz-bm-loonboss',
        name: 'Loonboss',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '5"',
        health: 5,
        save: '4+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Moon-slicer',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'I’m Da Boss',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly Moonclan Stabbas unit wholly within 12" of this unit to be the target.\nEffect: Pick 1:\n• Beckon the Loonatic Hordes: If the target unit is not in combat, you can return D6 slain models to it.\n• Stab ’Em Good!: Add 1 to hit rolls for attacks made by the target unit until the start of your next turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'HERO', 'INFANTRY', 'WARD (6+)', 'LOONBOSS']
      },
      {
        id: 'gz-bm-squig-hoppers',
        name: 'Squig Hoppers',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '32mm',
        move: 'D6+8"',
        health: 2,
        save: '6+',
        control: 1,
        reinforcementNote: 'The army list consists of 2 units of 5 Squig Hoppers (1 unit starts in reserve).',
        weapons: [
          {
            name: 'Slitta',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Squig’s Fang-filled Gob',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Boing! Boing! Boing!',
            phase: 'Movement',
            type: 'Active',
            effect: 'Any Movement Phase\nDeclare: Pick an enemy unit that any models in this unit passed across this phase to be the target, then roll a dice for each model in this unit that did so.\nEffect: For each 4+, inflict 1 mortal damage on the target.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'CAVALRY', 'FLY', 'SQUIG HOPPERS']
      },
      {
        id: 'gz-bm-rockgut-troggoths',
        name: 'Rockgut Troggoths',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '50mm',
        move: '6"',
        health: 5,
        save: '4+',
        ward: '5+',
        control: 2,
        weapons: [
          {
            name: 'Throwin’ Boulders',
            type: 'Ranged',
            range: '10"',
            attacks: 1,
            toHit: '5+',
            toWound: '2+',
            rend: '-2',
            damage: 'D3'
          },
          {
            name: 'Massive Stone Maul',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Regeneration',
            phase: 'Hero',
            type: 'Active',
            effect: 'Start of Any Turn\nEffect: Heal (D3) this unit.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'INFANTRY', 'WARD (5+)', 'ROCKGUT TROGGOTHS']
      },
      {
        id: 'gz-bm-moonclan-stabbas',
        name: 'Moonclan Stabbas',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '5"',
        health: 1,
        save: '5+',
        control: 1,
        reinforcementNote: 'The army list consists of 2 units of 10 Moonclan Stabbas.',
        weapons: [
          {
            name: 'Stabba',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Netters',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nDeclare: Pick an enemy Infantry unit in combat with this unit to be the target.\nEffect: Roll a dice. On a 2+, subtract 1 from hit rolls for attacks made by the target unit this phase.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'INFANTRY', 'MOONCLAN STABBAS']
      }
    ]
  },

  // 11b. GLOOMSPITE GITZ - Snarlpack Huntaz
  {
    id: 'gitz-snarlpack',
    name: 'Gloomspite Gitz',
    subTitle: 'Snarlpack Huntaz',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-yellow-600 via-amber-800 to-stone-900',
    flavorQuote: '‘Light da torches, boyz. Dese humies won’t know what hit ’em.’ — Snarlboss Sleeg Snapmaw',
    battleTraits: [
      {
        name: 'Fast as Frazzlegit',
        description: 'Passive\nEffect: Friendly units can use Charge abilities even if they used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on friendly units by Retreat abilities.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Flankin’ Force',
        description: 'Once Per Battle, Start of First Battle Round\nEffect: Pick up to 2 friendly units. Remove them from the battlefield and set them up again anywhere on the battlefield more than 6" from all enemy units.'
      },
      {
        name: 'Frazzleboom',
        description: 'Passive\nEffect: Each time a friendly War Machine is destroyed, before removing it from play, pick an enemy unit within 3" of that War Machine and roll a D3. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.'
      }
    ],
    heroTraits: [
      {
        id: 'gz-sp-ht1',
        name: 'Kunnin’ as a Snarlfang',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Any Combat Phase\nEffect: For the rest of the turn, add 1 to the Rend characteristic of melee weapons used by friendly units while they are wholly within 12" of the bearer.'
      },
      {
        id: 'gz-sp-ht2',
        name: 'Devious Backstabba',
        type: 'Hero Trait',
        effect: 'End of Any Turn\nDeclare: Pick an enemy Hero in combat with this unit to be the target.\nEffect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.'
      }
    ],
    artefacts: [
      {
        id: 'gz-sp-art1',
        name: 'Glare of Frazzlegit',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase\nDeclare: Pick an enemy unit in combat with your general to be the target.\nEffect: Subtract 1 from hit rolls for attacks made by the target for the rest of the turn.'
      },
      {
        id: 'gz-sp-art2',
        name: 'Sunsteala Shard',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Enemy Shooting Phase\nEffect: For the rest of the turn, friendly units cannot be targeted by shooting attacks while they are wholly within 6" of this unit, unless the attacking unit is in combat with the target unit.'
      }
    ],
    units: [
      {
        id: 'gz-sp-snarlboss',
        name: 'Snarlboss',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60x35mm',
        move: '12"',
        health: 5,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Boss Loppa',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Snarlfang’s Slavering Jaws',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '2',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Great Snarlin’ Howl',
            phase: 'Hero',
            type: 'Active',
            effect: 'Once Per Turn (Army), Your Hero Phase\nDeclare: Pick this unit and another friendly unit within this unit’s combat range to be the targets.\nEffect: Roll a dice. On a 3+, add 1 to the Rend characteristic and the Attacks characteristic of the targets’ Companion melee weapons for the rest of the turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'HERO', 'CAVALRY', 'SNARLBOSS']
      },
      {
        id: 'gz-sp-wolfgit-retinue',
        name: 'Wolfgit Retinue',
        role: 'Cavalry',
        modelCount: 2,
        baseSize: '60x35mm',
        move: '12"',
        health: 2,
        save: '5+',
        control: 1,
        reinforcementNote: '1 model is armed with a Grot Bow and Snarlfang’s Slavering Jaws, and 1 model is armed with a Stabbin’ Stikka and Snarlfang’s Slavering Jaws.',
        weapons: [
          {
            name: 'Grot Bow',
            type: 'Ranged',
            range: '15"',
            attacks: 2,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Stabbin’ Stikka',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Snarlfang’s Slavering Jaws',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '2',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'I Got Dis, Boss',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: While a friendly Snarlboss is within this unit’s combat range, both this unit and that Snarlboss have Ward (5+).'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'CAVALRY', 'WOLFGIT RETINUE']
      },
      {
        id: 'gz-sp-snarlpack-cavalry',
        name: 'Snarlpack Cavalry',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '12"',
        health: 3,
        save: '4+',
        control: 1,
        reinforcementNote: 'The army list consists of 2 units of 3 Snarlpack Cavalry.',
        weapons: [
          {
            name: 'Pointy Skewas',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1',
            ability: 'Charge (+1 Damage)'
          },
          {
            name: 'Giant Snarlfang’s Jaws',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '2',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Frazzleburned Scrap',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: This unit has Strike-first if it charged in the same turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'CAVALRY', 'SNARLPACK CAVALRY']
      },
      {
        id: 'gz-sp-sunsteala-wheelas',
        name: 'Sunsteala Wheelas',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '105x70mm',
        move: '12"',
        health: 6,
        save: '4+',
        control: 2,
        reinforcementNote: 'The army list consists of 2 units of 1 Sunsteala Wheela.',
        weapons: [
          {
            name: 'Grot Bow',
            type: 'Ranged',
            range: '15"',
            attacks: 2,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Wheela Slicers and Stabbin’ Stikka',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Snarlfangs’ Slavering Jaws',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '2',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Careening Destruction',
            phase: 'Movement',
            type: 'Active',
            effect: 'Your Movement Phase\nEffect: This unit can move a distance up to its Move characteristic. It can pass through other models and the combat ranges of enemy units, but it cannot end that move in combat. Then, pick up to 1 enemy Infantry unit that this unit passed across during that move to be the target. Inflict D3 mortal damage on the target.\nDesigner’s Note: This unit can use this ability even if it is in combat.\nKeywords: Core, Move'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'WAR MACHINE', 'SUNSTEALA WHEELAS']
      }
    ]
  },

  // 18. OGOR MAWTRIBES - Tyrant’s Bellow
  {
    id: 'ogor-tyrantsbellow',
    name: 'Ogor Mawtribes',
    subTitle: 'Tyrant’s Bellow',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-stone-900 via-amber-950 to-red-950',
    flavorQuote: '‘Hear that roar? That’s the sound of me Ironblasters, callin’ us to the feast tables.’ — Tyrant Badgrulp Bearmuncher of the Meatfist',
    battleTraits: [
      {
        name: 'On the Mawpath',
        description: 'Passive\nEffect: Your Ironblaster, Mournfang Pack and 1 unit of Ogor Gluttons are not set up during the deployment phase. Instead, from the third battle round onwards, they can use the ‘Bellowing Arrival’ ability.'
      },
      {
        name: 'Bellowing Arrival',
        description: 'Your Movement Phase\nEffect: Set up this unit anywhere on the battlefield, within 1" of a battlefield edge and more than 6" from all enemy units.\nKeywords: Core'
      }
    ],
    regimentAbilities: [
      {
        name: 'Pulverising Girth',
        description: 'Once Per Phase, Any Charge Phase\nDeclare: Pick any number of friendly units that charged this phase.\nEffect: For each of those units, pick an enemy unit in combat with it and roll a dice. On a 4+, inflict 1 mortal damage on that enemy unit.'
      },
      {
        name: 'Bred for Toughness',
        description: 'Passive\nEffect: Add 1 to the Health characteristic of your Ironblaster and your Mournfang Pack unit.'
      }
    ],
    heroTraits: [
      {
        id: 'og-tb-ht1',
        name: 'Longstrider',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general has a Move characteristic of 8" instead of 6".'
      },
      {
        id: 'og-tb-ht2',
        name: 'Booming Roar',
        type: 'Hero Trait',
        effect: 'Any Combat Phase\nEffect: Roll a dice. On a 4+, subtract 1 from hit rolls for attacks made by enemy units this phase while they are within 9" of your general.'
      }
    ],
    artefacts: [
      {
        id: 'og-tb-art1',
        name: 'Flask of Stonehorn Blood',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Reaction: Opponent declared an Attack ability and targeted your general\nEffect: Your general has Ward (3+) this phase.'
      },
      {
        id: 'og-tb-art2',
        name: 'Blubbergrub',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Movement Phase\nDeclare: Pick either your Ironblaster or your Mournfang Pack unit if it is within your general’s combat range.\nEffect: Heal (D6) that unit.'
      }
    ],
    units: [
      {
        id: 'og-tb-tyrant',
        name: 'Tyrant',
        role: 'Hero',
        modelCount: 1,
        baseSize: '50mm',
        move: '6"',
        health: 8,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Ogor Pistols',
            type: 'Ranged',
            range: '10"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Thundermace',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          },
          {
            name: 'Beastskewer Glaive',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2',
            ability: 'Anti-Monster (+1 Rend)'
          }
        ],
        abilities: [
          {
            name: 'Bully of the First Degree',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly unit wholly within 12" of this unit to be the target. You cannot pick this unit.\nEffect: Add 3 to the control score of the target until the start of your next turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'HERO', 'INFANTRY', 'TYRANT']
      },
      {
        id: 'og-tb-ironblaster',
        name: 'Ironblaster',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '9"',
        health: 9,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Ironblaster Cannon',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: 'D3+3'
          },
          {
            name: 'Clubber',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '2+',
            rend: '0',
            damage: '2'
          },
          {
            name: 'Rhinox’s Sharp Horns',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Rhinox Charge',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: The Damage characteristic of this unit’s Rhinox’s Sharp Horns is 3 if it charged in the same turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'WAR MACHINE', 'IRONBLASTER']
      },
      {
        id: 'og-tb-leadbelchers',
        name: 'Leadbelchers',
        role: 'Infantry',
        modelCount: 4,
        baseSize: '40mm',
        move: '6"',
        health: 4,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Leadbelcher Gun',
            type: 'Ranged',
            range: '15"',
            attacks: 'D3',
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Bludgeoning Blow',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '2+',
            rend: '0',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Firing from the Belly',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to hit rolls for this unit’s shooting attacks if it has not used a Move ability this turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'LEADBELCHERS']
      },
      {
        id: 'og-tb-gluttons',
        name: 'Ogor Gluttons',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '6"',
        health: 4,
        save: '5+',
        control: 2,
        reinforcementNote: 'The army list consists of 2 units of 3 Ogor Gluttons.',
        weapons: [
          {
            name: 'Ogor Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Driven by Hunger',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to charge rolls for this unit.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'OGOR GLUTTONS']
      },
      {
        id: 'og-tb-mournfang',
        name: 'Mournfang Pack',
        role: 'Cavalry',
        modelCount: 2,
        baseSize: '90x52mm',
        move: '9"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Culling Clubs and Hackers',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Mournfang’s Tusks',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Linebreakers',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Subtract 1 from wound rolls for shooting attacks that target this unit.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'CAVALRY', 'MOURNFANG PACK']
      }
    ]
  },

  // 18b. OGOR MAWTRIBES - Warglutt Marauders
  {
    id: 'ogor-warglutt',
    name: 'Ogor Mawtribes',
    subTitle: 'Warglutt Marauders',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-amber-900 via-stone-800 to-yellow-950',
    flavorQuote: '‘No tribute? NO TRIBUTE?! Right, you lot, fetch yer clubs. Time to show the whelps what happens when they get uppity.’ — Huurg, Tyrant of the Golden Guts',
    battleTraits: [
      {
        name: 'Nomadic Warriors',
        description: 'Passive\nEffect: Your unit of Gluttons with 3 models and 1 of your Maulbeast Cavalry units are not set up during the deployment phase. Instead, from the third battle round onwards, they can use the ‘More Ogors, My Lord!’ ability.'
      },
      {
        name: 'More Ogors, My Lord!',
        description: 'Your Movement Phase\nEffect: Set up this unit anywhere on the battlefield so that every model is within 1" of a battlefield edge and more than 6" from all enemy units.'
      },
      {
        name: 'Scoff Down Fresh Flesh',
        description: 'End of Any Turn\nDeclare: If an enemy unit was destroyed this turn, pick a friendly unit that used a Fight ability this turn to use this ability.\nEffect: Pick 1 of the following effects to apply to that friendly unit for the rest of the battle:\n• Raw and Bloody Flesh: Add 1 to hit rolls for that unit’s combat attacks if it charged in the same turn.\n• Exotic Giblets: Subtract 1 from ward rolls for damage points inflicted by that unit’s combat attacks.\n• Steaming Brains: Add 3 to that unit’s control score.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Brutish Barging',
        description: 'Once Per Battle, End of Your Turn\nDeclare: Pick a friendly unit that charged this turn to be the target.\nEffect: The target can move up to 2D6". It can move through the combat ranges of enemy units that it was in combat with at the start of that move but cannot end that move in combat.'
      },
      {
        name: 'Blinding Dust Clouds',
        description: 'Passive\nEffect: Subtract 1 from hit rolls for attacks that target friendly units that were set up in the same turn.'
      }
    ],
    heroTraits: [
      {
        id: 'og-wm-ht1',
        name: 'Wallwrecker',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general can pass across terrain features as if they had Fly.'
      },
      {
        id: 'og-wm-ht2',
        name: 'Lungburster',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: When making run rolls for friendly units wholly within 9" of your general, if you roll a 1-3, you can use a value of 4 instead.'
      }
    ],
    artefacts: [
      {
        id: 'og-wm-art1',
        name: 'Deathcheater',
        type: 'Artefact of Power',
        effect: 'Passive\nEffect: Your general has Ward (6+) while they are more than 3" from all other friendly units.'
      },
      {
        id: 'og-wm-art2',
        name: 'Gristlegobbler',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, End of Any Turn\nDeclare: Pick each enemy unit in combat with your general to be the targets.\nEffect: Inflict D3 mortal damage on each target. Then, Heal (3) your general.'
      }
    ],
    units: [
      {
        id: 'og-wm-tyrant',
        name: 'Tyrant',
        role: 'Hero',
        modelCount: 1,
        baseSize: '50mm',
        move: '6"',
        health: 8,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Tyrant’s Meatcleavers',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Roaring Warlord',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a visible friendly unit within 12" of this unit to be the target.\nEffect: Roll a dice. On a 3+, for the rest of the turn, add 1 to charge rolls for the target.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'HERO', 'INFANTRY', 'TYRANT']
      },
      {
        id: 'og-wm-gluttons',
        name: 'Gluttons',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '6"',
        health: 4,
        save: '5+',
        control: 2,
        reinforcementNote: 'The army list consists of 1 unit of 2 Gluttons and 1 unit of 3 Gluttons (starts in reserve).',
        weapons: [
          {
            name: 'Glutton Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Wall of Meat',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to save rolls for this unit if it has not charged in the same turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'GLUTTONS']
      },
      {
        id: 'og-wm-ironguts',
        name: 'Ironguts',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '6"',
        health: 4,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Irongut Weapon',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Stomping Marauders',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 2 to this unit’s control score if it charged in the same turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'IRONGUTS']
      },
      {
        id: 'og-wm-maulbeast',
        name: 'Maulbeast Cavalry',
        role: 'Cavalry',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '10"',
        health: 7,
        save: '3+',
        control: 3,
        reinforcementNote: 'The army list consists of 2 units of 1 Maulbeast Cavalry (1 unit starts in reserve).',
        weapons: [
          {
            name: 'Gutbiter Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          },
          {
            name: 'Maulbeast’s Horns and Fangs',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Shock and Gore',
            phase: 'Combat',
            type: 'Active',
            effect: 'Once Per Turn (Army), Your Combat Phase\nDeclare: If this unit charged this turn, pick an enemy unit in combat with it to be the target.\nEffect: Roll a dice. On a 3+, for the rest of the turn, subtract 1 from wound rolls for the target’s attacks.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'CAVALRY', 'MAULBEAST CAVALRY']
      }
    ]
  },

  // 18c. OGOR MAWTRIBES - Mawseeker Mob
  {
    id: 'ogor-mawseeker',
    name: 'Ogor Mawtribes',
    subTitle: 'Mawseeker Mob',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-red-950 via-stone-900 to-amber-900',
    flavorQuote: '‘Them thinling lot camped over yonder – I needs their hearts. Needs ’em, says I, if I’m to honour the god with this feast…’ — Stinking Vitla, student of Redd the Maw',
    battleTraits: [
      {
        name: 'From Out the Caverns',
        description: 'Passive\nEffect: Your Gorger Mawpack is not set up during the deployment phase. Instead, from the second battle round onwards, they can use the ‘Frenzied Hunters’ ability.'
      },
      {
        name: 'Frenzied Hunters',
        description: 'Once Per Battle, Start of Battle Round\nEffect: Set up this unit within 1" of a battlefield edge and more than 6" from all enemy units.'
      },
      {
        name: 'Wot? No Meat!? & Chuck ’Em in the Pot',
        description: 'Passive / End of Any Turn\nEffect: Your general’s Butcher’s Cauldron starts the battle empty.\n\nEnd of Any Turn (Chuck ’Em in the Pot):\nDeclare: You must use this ability if an enemy unit was destroyed this turn.\nEffect: Your general’s Butcher’s Cauldron becomes full.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Dish Testers',
        description: 'Any Combat Phase\nDeclare: If your general’s Butcher’s Cauldron is full, pick a visible friendly unit wholly within 12" of them to be the target.\nEffect: Add 1 to hit rolls for the target’s combat attacks for the rest of the turn. Then, your general’s Butcher’s Cauldron becomes empty.'
      },
      {
        name: 'Eager Procurers',
        description: 'Passive\nEffect: While your general’s Butcher’s Cauldron is empty, add 2" to the Move characteristic of friendly units while they are wholly within 12" of your general.'
      }
    ],
    heroTraits: [
      {
        id: 'og-ms-ht1',
        name: 'Well-stocked Larder',
        type: 'Hero Trait',
        effect: 'Start of First Battle Round\nEffect: Your general’s Butcher’s Cauldron becomes full.'
      },
      {
        id: 'og-ms-ht2',
        name: 'Generous Portions',
        type: 'Hero Trait',
        effect: 'End of Any Turn\nEffect: If your general’s Butcher’s Cauldron is full, Heal (1) each visible friendly unit wholly within 9" of your general.'
      }
    ],
    artefacts: [
      {
        id: 'og-ms-art1',
        name: 'Disgusting Eater',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Reaction: Opponent declared a Charge ability for a visible enemy unit within 12" of this unit\nEffect: Subtract D3 from the charge roll. If your general’s Butcher’s Cauldron is full, you can subtract 3 from the charge roll instead, but if you do so, their Butcher’s Cauldron becomes empty after that Charge ability has been resolved.'
      },
      {
        id: 'og-ms-art2',
        name: 'Hunger Pangs',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Enemy Movement Phase\nEffect: Each friendly unit that is not in combat can move up to D3". Friendly units that are not in combat and are wholly within 9" of your general while their Butcher’s Cauldron is empty can move up to D6" instead. They cannot end those moves in combat.'
      }
    ],
    units: [
      {
        id: 'og-ms-butcher',
        name: 'Butcher',
        role: 'Hero',
        modelCount: 1,
        baseSize: '50mm',
        move: '6"',
        health: 8,
        save: '5+',
        ward: '6+',
        control: 3,
        weapons: [
          {
            name: 'Butcher’s Tools',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Rust-maw',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a visible enemy unit within 12" of this unit to be the target. Then, make a casting roll of 2D6.\nEffect: On a 6+, until the start of your next turn, subtract 1 from the Rend characteristic of the target’s melee weapons.'
          },
          {
            name: 'Butcher’s Cauldron',
            phase: 'Reaction',
            type: 'Reaction',
            effect: 'Reaction: You declared the ‘Rust-maw’ ability\nEffect: If this unit’s Butcher’s Cauldron is full, roll a D3. On a 1, this unit’s Butcher’s Cauldron becomes empty. On a 2+, you can add 2 to the casting roll.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'HERO', 'WIZARD', 'INFANTRY', 'WARD (6+)', 'BUTCHER']
      },
      {
        id: 'og-ms-cleavers',
        name: 'Cleavers',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '6"',
        health: 4,
        save: '5+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Cleaver’s Tools',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'A Taste for the Arcane',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: This unit’s melee weapons have Crit (2 Hits) while it is in combat with an enemy Wizard or Priest.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'WARD (6+)', 'CLEAVERS']
      },
      {
        id: 'og-ms-gutseers',
        name: 'Gutseers',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '6"',
        health: 4,
        save: '5+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Gutseers’ Tools',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Conduits of Gut Magic',
            phase: 'Hero',
            type: 'Active',
            effect: 'Once Per Turn (Army), Any Hero Phase\nEffect: The next time the ‘Rust-maw’ ability is used by your general, measure the range and visibility of that ability from this unit instead of your general.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'WARD (6+)', 'GUTSEERS']
      },
      {
        id: 'og-ms-gorgers',
        name: 'Gorger Mawpack',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '50mm',
        move: '6"',
        health: 5,
        save: '6+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Clubs, Claws and Jaws',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Bestial Hunger',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: In your charge phase, if this unit is not in combat and there are any enemy units within 12" of it, this unit must use the ‘Charge’ ability, and if the charge roll would allow it to end the move within ½" of a visible enemy unit, it must do so.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'WARD (6+)', 'GORGER MAWPACK']
      }
    ]
  },

  // 18d. OGOR MAWTRIBES - Scrapglutt
  {
    id: 'ogor-scrapglutt',
    name: 'Ogor Mawtribes',
    subTitle: 'Scrapglutt',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-stone-700 via-stone-800 to-amber-900',
    flavorQuote: '‘Come ’ere, little gnoblar. Look at this shiny bauble I got… Yeh, that’s it, just a bit closer. My belly’s rumbling something fierce…’ — Hrothgorn, Icebrow Hunter',
    battleTraits: [
      {
        name: 'Better Late than Never',
        description: 'Passive\nEffect: A unit of Ironguts with 4 models is not set up during the deployment phase. Instead, in the third battle round, that unit can use the ‘Let’s Get Stuck In’ ability.'
      },
      {
        name: 'Let’s Get Stuck In',
        description: 'Your Movement Phase\nEffect: Set up this unit wholly within friendly territory, wholly within 6" of the battlefield edge, and not in combat.'
      }
    ],
    regimentAbilities: [
      {
        name: 'It’s a Hard Life',
        description: 'Any Hero Phase\nDeclare: Pick a friendly Gnoblars unit within your general’s combat range to be the target.\nEffect: Roll a D3. On a 2+:\n• Heal (X) your general where X is an amount equal to the roll.\n• 1 model in that Gnoblars unit is slain.'
      },
      {
        name: 'Frenzied Artillery',
        description: 'Passive\nEffect: If the unmodified charge roll for a friendly Gnoblar Scraplauncher is 6+, add 3 to the Attacks characteristic of the target’s Companion weapons for the rest of the turn.'
      }
    ],
    heroTraits: [
      {
        id: 'og-sg-ht1',
        name: 'Massive Bulk',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Add 2 to the Health characteristic of your general.'
      },
      {
        id: 'og-sg-ht2',
        name: 'Savage Instincts',
        type: 'Hero Trait',
        effect: 'Reaction: You declared a Fight ability for your general\nEffect: Pick a friendly unit that has not used a Fight ability this turn and is within your general’s combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by your general has been resolved.'
      }
    ],
    artefacts: [
      {
        id: 'og-sg-art1',
        name: 'Nasty Trap',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Your Movement Phase\nDeclare: Pick an enemy unit within 12" of your general to be the target.\nEffect: Give the target your general’s Trap token. While the target has a Trap token, each time the target is picked to use a Move or Charge ability, roll a dice. On a 4+, that Move or Charge ability has no effect and the target’s Trap token is removed.'
      },
      {
        id: 'og-sg-art2',
        name: 'Veteran Hunter',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Hero Phase\nDeclare: Pick an enemy unit within 12" of your general to be the target.\nEffect: For the rest of the turn, add 1 to the Rend characteristic of your general’s combat attacks that target that unit.'
      }
    ],
    units: [
      {
        id: 'og-sg-mantrappers',
        name: 'Mantrappers',
        role: 'Hero',
        modelCount: 1,
        baseSize: '50mm',
        move: '6"',
        health: 7,
        save: '5+',
        control: 5,
        reinforcementNote: 'Starts the battle with 3 Gnoblar tokens, 1 Frost Sabre token and 1 Trap token.',
        weapons: [
          {
            name: 'Mantrapper Crossbow',
            type: 'Ranged',
            range: '12"',
            attacks: 2,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: 'D3'
          },
          {
            name: 'Frost Sabre’s Fangs',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Companion'
          },
          {
            name: 'Culling Knife',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Staying Useful',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: While any of this unit’s Gnoblar or Frost Sabre tokens are on the battlefield, this unit has Ward (5+). Each time you make a successful ward roll for this unit, remove 1 of this unit’s tokens from the battlefield. If this unit’s Frost Sabre token has been removed, it can no longer attack with its Frost Sabre’s Fangs.'
          },
          {
            name: 'No Slacking!',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly Infantry unit wholly within 12" of this unit.\nEffect: Roll a dice. On a 3+, add the result to the target’s control score until the start of your next turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'HERO', 'INFANTRY', 'MANTRAPPERS']
      },
      {
        id: 'og-sg-scraplauncher',
        name: 'Gnoblar Scraplauncher',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '9"',
        health: 9,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Piles of Old Scrap',
            type: 'Ranged',
            range: '24"',
            attacks: '3D6',
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          },
          {
            name: 'Scrappers’ Stabbers',
            type: 'Melee',
            range: '1"',
            attacks: 7,
            toHit: '5+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Rhinox’s Sharp Horns',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Rain of Scrap',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Your Shooting Phase\nDeclare: Pick an enemy unit that had any models slain this turn by this unit’s shooting attacks to be the target.\nEffect: Subtract 1 from hit rolls for the target’s attacks for the rest of the turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'WAR MACHINE', 'GNOBLAR SCRAPLAUNCHER']
      },
      {
        id: 'og-sg-gnoblars',
        name: 'Gnoblars',
        role: 'Infantry',
        modelCount: 12,
        baseSize: '25mm',
        move: '5"',
        health: 1,
        save: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (12 models)',
        weapons: [
          {
            name: 'Sharp Stuff',
            type: 'Ranged',
            range: '8"',
            attacks: 1,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Motley Assortment of Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '5+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'No Shortage of Volunteers',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn\nEffect: You can return D3 models to this unit.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'REINFORCEMENTS', 'GNOBLARS']
      },
      {
        id: 'og-sg-ironguts',
        name: 'Ironguts',
        role: 'Infantry',
        modelCount: 2,
        baseSize: '40mm',
        move: '6"',
        health: 4,
        save: '5+',
        control: 2,
        reinforcementNote: 'The army list consists of 2 units of 2 Ironguts and 1 unit of 4 Ironguts (starts in reserve).',
        weapons: [
          {
            name: 'Irongut Weapon',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Down to the Ironguts',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Ignore negative modifiers to this unit’s control score.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'IRONGUTS']
      }
    ]
  },

  // 22. SONS OF BEHEMAT - Stone Lobbas
  {
    id: 'sob-stonelobbas',
    name: 'Sons of Behemat',
    subTitle: 'Stone Lobbas',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-stone-600 via-stone-800 to-amber-900',
    flavorQuote: '‘Right then, boys – whoever smashes that big old lizard’s head in gets first bite of it later.’ — Bog Boulder-breaker',
    battleTraits: [
      {
        name: 'Boulder Basher',
        description: 'Passive\nMobs of Stone Lobbas are led by demanding, and uncannily accurate, gargants known as Boulder Bashers.\nEffect: Add the Hero keyword to your general’s warscroll and remove the Reinforcements keyword.'
      },
      {
        name: 'Bowled Over',
        description: 'Your Shooting Phase\nDeclare: Pick an enemy unit that was allocated any damage points by a friendly unit’s shooting attacks this turn to be the target.\nEffect: Roll a dice. On a 3+, until the start of your next turn, each time your opponent makes a charge roll for the target, they must change the highest D6 to match the lowest D6.'
      },
      {
        name: 'Close One Eye!',
        description: 'Your Hero Phase\nDeclare: Pick your general to use this ability, then pick another friendly unit wholly within 12" of them to be the target.\nEffect: Add 1 to hit rolls for the target’s shooting attacks for the rest of the turn.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Surly Sorts',
        description: 'Once Per Battle, Any Combat Phase\nDeclare: Pick a friendly unit in combat to be the target.\nEffect: Add 1 to the Attacks characteristic of the target’s melee weapons for the rest of the turn.'
      },
      {
        name: 'Greedy and Grabby',
        description: 'Passive\nEffect: Add 5 to the control scores of friendly units.'
      }
    ],
    heroTraits: [
      {
        id: 'sob-sl-ht1',
        name: 'Humongous Strides',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Add 1 to charge rolls for your general.'
      },
      {
        id: 'sob-sl-ht2',
        name: '’Ard ’Ead',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Any Combat Phase\nEffect: Add 1 to hit rolls for combat attacks made with your general’s ’Eadbutt for the rest of the turn.'
      }
    ],
    artefacts: [
      {
        id: 'sob-sl-art1',
        name: 'Lucky Rock',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Your Shooting Phase\nEffect: Add 1 to the Attacks characteristic of your general’s Hurlin’ Rocks for the rest of the turn.'
      },
      {
        id: 'sob-sl-art2',
        name: 'Hungry Gobbler',
        type: 'Artefact of Power',
        effect: 'End of Any Turn\nEffect: If any enemy models were slain by your general’s combat attacks this turn, Heal (D3) your general.'
      }
    ],
    units: [
      {
        id: 'sob-sl-general',
        name: 'Rock-hurler (General)',
        role: 'Hero',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '8"',
        health: 12,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Hurlin’ Rocks',
            type: 'Ranged',
            range: '12"',
            attacks: 3,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: 'D3'
          },
          {
            name: 'Massive Club and Rocks',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          },
          {
            name: '’Eadbutt',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Drop, Toss or Roll',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Your Shooting Phase\nEffect: Pick 1 of the following effects to apply to this unit for the rest of the turn. You cannot pick the same effect to apply to any other friendly units this turn.\n• Drop: This unit’s ranged weapons have Shoot in Combat.\n• Toss: Add 6" to the Range characteristic of this unit’s ranged weapons.\n• Roll: Add 1 to hit rolls for this unit’s shooting attacks.'
          }
        ],
        keywords: ['DESTRUCTION', 'SONS OF BEHEMAT', 'HERO', 'MONSTER', 'ROCK-HURLER']
      },
      {
        id: 'sob-sl-rockhurler',
        name: 'Rock-hurler',
        role: 'Monster',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '8"',
        health: 12,
        save: '5+',
        control: 5,
        isReinforcement: true,
        reinforcementNote: 'The army list consists of 2 Rock-hurler units with the Reinforcements keyword.',
        weapons: [
          {
            name: 'Hurlin’ Rocks',
            type: 'Ranged',
            range: '12"',
            attacks: 3,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: 'D3'
          },
          {
            name: 'Massive Club and Rocks',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          },
          {
            name: '’Eadbutt',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Drop, Toss or Roll',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Your Shooting Phase\nEffect: Pick 1 of the following effects to apply to this unit for the rest of the turn. You cannot pick the same effect to apply to any other friendly units this turn.\n• Drop: This unit’s ranged weapons have Shoot in Combat.\n• Toss: Add 6" to the Range characteristic of this unit’s ranged weapons.\n• Roll: Add 1 to hit rolls for this unit’s shooting attacks.'
          }
        ],
        keywords: ['DESTRUCTION', 'SONS OF BEHEMAT', 'MONSTER', 'REINFORCEMENTS', 'ROCK-HURLER']
      }
    ]
  },

  // 22b. SONS OF BEHEMAT - Wallsmasher Stomp
  {
    id: 'sob-wallsmasher',
    name: 'Sons of Behemat',
    subTitle: 'Wallsmasher Stomp',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-stone-800 via-amber-950 to-stone-900',
    flavorQuote: '‘Love crushin’ pipsqueaks. ’Specially saving the bits between me toes for later.’ — Vorsh the Fist',
    battleTraits: [
      {
        name: 'Bullstomper',
        description: 'Passive\nMancrusher Mobs are led by fearsome gargants known as Bullstompers.\nEffect: Your general has the Hero keyword (in addition to the Monster keyword) but does not have the Reinforcements keyword or icon.'
      },
      {
        name: 'Bellowing Roar',
        description: 'Any Combat Phase\nDeclare: Pick a friendly unit to use this ability, pick an enemy unit in combat with it to be the target, then roll a dice.\nEffect: On a 2+, subtract 1 from hit rolls for attacks made by the target unit this phase.'
      },
      {
        name: '‘Grab Those Rocks and Chuck ’Em!’',
        description: 'Your Hero Phase\nDeclare: Pick your general to use this ability, then pick another friendly unit wholly within 12" of them.\nEffect: Add 1 to the Attacks characteristic of that unit’s Throwin’ Rocks this turn.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Foe-chompers',
        description: 'Passive\nEffect: Each time an enemy model is slain by a friendly unit’s ‘Stuff ’Em In Me Bag’ ability, Heal (D3) that unit.'
      },
      {
        name: 'Earth-shaking Charge',
        description: 'Once Per Phase (Army), Any Charge Phase\nDeclare: Pick a friendly unit that charged this phase to use this ability, then roll a dice for each enemy unit in combat with it.\nEffect: On a 3+, that enemy unit has Strike-last this turn.'
      }
    ],
    heroTraits: [
      {
        id: 'sob-ws-ht1',
        name: 'Monstrously Tough',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general has a Health characteristic of 15 instead of 12.'
      },
      {
        id: 'sob-ws-ht2',
        name: 'Lanky Git',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: When you make a charge roll for your general, roll 3D6 instead of 2D6.'
      }
    ],
    artefacts: [
      {
        id: 'sob-ws-art1',
        name: 'Extra-big Bag',
        type: 'Artefact of Power',
        effect: 'Passive\nEffect: When your general uses their ‘Stuff ’Em In Me Bag’ ability, you can pick 2 enemy units instead of 1 (roll for each).'
      },
      {
        id: 'sob-ws-art2',
        name: 'Furiously Territorial',
        type: 'Artefact of Power',
        effect: 'Passive\nEffect: Add 1 to hit rolls for attacks made by your general that target an enemy unit that is contesting an objective you do not control.'
      }
    ],
    units: [
      {
        id: 'sob-ws-general',
        name: 'Mancrusher Gargant (General)',
        role: 'Hero',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '8"',
        health: 12,
        save: '5+',
        control: 10,
        weapons: [
          {
            name: 'Throwin’ Rocks',
            type: 'Ranged',
            range: '12"',
            attacks: 1,
            toHit: '5+',
            toWound: '2+',
            rend: '-2',
            damage: 'D3'
          },
          {
            name: 'Massive Club',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          },
          {
            name: '’Eadbutt',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '4'
          },
          {
            name: 'Mighty Kick',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Stuff ’Em In Me Bag',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nDeclare: Pick an enemy unit in combat with this unit to be the target, then roll a dice.\nEffect: If the roll is at least double the target unit’s Health characteristic, 1 model in that unit is slain.'
          },
          {
            name: 'Timber!',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: If this model is slain, before removing it from the battlefield, the players must roll off. The winner picks a point on the battlefield up to 3" from this model. Inflict D3 mortal damage on each enemy unit within 2" of that point. This model is then removed from the battlefield.'
          }
        ],
        keywords: ['DESTRUCTION', 'SONS OF BEHEMAT', 'HERO', 'MONSTER', 'MANCRUSHER GARGANT']
      },
      {
        id: 'sob-ws-mancrusher',
        name: 'Mancrusher Gargant',
        role: 'Monster',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '8"',
        health: 12,
        save: '5+',
        control: 10,
        isReinforcement: true,
        reinforcementNote: 'The army list consists of 2 Mancrusher Gargants with the Reinforcements keyword.',
        weapons: [
          {
            name: 'Throwin’ Rocks',
            type: 'Ranged',
            range: '12"',
            attacks: 1,
            toHit: '5+',
            toWound: '2+',
            rend: '-2',
            damage: 'D3'
          },
          {
            name: 'Massive Club',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          },
          {
            name: '’Eadbutt',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '4'
          },
          {
            name: 'Mighty Kick',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Stuff ’Em In Me Bag',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nDeclare: Pick an enemy unit in combat with this unit to be the target, then roll a dice.\nEffect: If the roll is at least double the target unit’s Health characteristic, 1 model in that unit is slain.'
          },
          {
            name: 'Timber!',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: If this model is slain, before removing it from the battlefield, the players must roll off. The winner picks a point on the battlefield up to 3" from this model. Inflict D3 mortal damage on each enemy unit within 2" of that point. This model is then removed from the battlefield.'
          }
        ],
        keywords: ['DESTRUCTION', 'SONS OF BEHEMAT', 'MONSTER', 'REINFORCEMENTS', 'MANCRUSHER GARGANT']
      }
    ]
  }
];
