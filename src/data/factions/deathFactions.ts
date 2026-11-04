import { SpearheadFaction } from '../../types/spearhead';

export const DEATH_FACTIONS: SpearheadFaction[] = [
  // 3. NIGHTHAUNT - Slasher Host
  {
    id: 'nighthaunt-slasher',
    name: 'Nighthaunt',
    subTitle: 'Slasher Host',
    grandAlliance: 'DEATH',
    accentColor: 'from-cyan-900 via-teal-900 to-emerald-950',
    flavorQuote: '‘Come hither, mortal. An eternity of suffering awaits thee.’ — Galembrecht, Knight of Shrouds',
    battleTraits: [
      {
        name: 'Ethereal',
        description: 'Passive\nEffect: Ignore all modifiers to save rolls for friendly units (positive and negative).'
      },
      {
        name: 'Wave of Terror',
        description: 'Any Charge Phase\nDeclare: Pick a friendly unit to use this ability if it charged this phase and the charge roll was 10+. Then, pick an enemy unit within 1" of it to be the target.\nEffect: The target has Strike-last this turn.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Death Stalkers',
        description: 'Once Per Turn (Army), Start of First Battle Round\nDeclare: Pick an enemy unit on the battlefield.\nEffect: Add 1 to the Rend characteristic of melee weapons used for attacks that target that unit.'
      },
      {
        name: 'Chorus of Terror',
        description: 'Passive\nEffect: Subtract 1 from hit rolls for combat attacks that target a friendly unit that charged in the same turn.'
      }
    ],
    heroTraits: [
      {
        id: 'nh-sh-ht1',
        name: 'Cloaked in Shadow',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: No more than 1 enemy unit can target your general with attacks (shooting or combat) per phase.'
      },
      {
        id: 'nh-sh-ht2',
        name: 'Shadow’s Edge',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general’s Sword of Stolen Hours has Crit (Mortal).'
      }
    ],
    artefacts: [
      {
        id: 'nh-sh-art1',
        name: 'Soulfire Ring',
        type: 'Artefact of Power',
        effect: 'End of Any Turn\nEffect: If any models were slain by your general this turn, Heal (D6) your general.'
      },
      {
        id: 'nh-sh-art2',
        name: 'Beacon of Nagashizzar',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Your Hero Phase\nEffect: Return 1 slain model to each friendly unit on the battlefield.'
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
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Sword of Stolen Hours',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Discorporate',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly unit wholly within 9" of this unit to be the target.\nEffect: Until the start of your next turn, the target has Ward (5+).'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'HERO', 'INFANTRY', 'FLY', 'WARD (6+)', 'KNIGHT OF SHROUDS']
      },
      {
        id: 'nh-spirit-hosts',
        name: 'Spirit Hosts',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '50mm',
        move: '8"',
        health: 3,
        save: '4+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Spectral Claws and Daggers',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Drawn to War',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Your general has Ward (4+) while they are within 1" of this unit.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'INFANTRY', 'FLY', 'WARD (6+)', 'SPIRIT HOSTS']
      },
      {
        id: 'nh-grimghast-reapers',
        name: 'Grimghast Reapers',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '8"',
        health: 1,
        save: '4+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Slasher Scythe',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Reaped Like Corn',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Combat attacks made by this unit score critical hits on unmodified hit rolls of 5+ if the target unit has 5 or more models.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'INFANTRY', 'FLY', 'WARD (6+)', 'GRIMGHAST REAPERS']
      },
      {
        id: 'nh-chainrasps',
        name: 'Chainrasps',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '8"',
        health: 1,
        save: '5+',
        ward: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (10 models). Note: The army list consists of 2 units of 10 Chainrasps.',
        weapons: [
          {
            name: 'Malignant Weapon',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Chilling Horde',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to wound rolls for combat attacks made by this unit if it charged in the same turn.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'INFANTRY', 'FLY', 'REINFORCEMENTS', 'WARD (6+)', 'CHAINRASPS']
      }
    ]
  },

  // 3b. NIGHTHAUNT - Cursed Shacklehorde
  {
    id: 'nighthaunt-cursed',
    name: 'Nighthaunt',
    subTitle: 'Cursed Shacklehorde',
    grandAlliance: 'DEATH',
    accentColor: 'from-emerald-950 via-teal-900 to-cyan-950',
    flavorQuote: '‘Do you hear it? The call of the grave? Heed the rattle of chains, the scrape of cold iron, and know it presages your demise.’ — Rathek Lasp, the Grimshackle Ghast',
    battleTraits: [
      {
        name: 'Spectral Procession',
        description: 'Passive\nEffect: 1 of your Bladegheist Revenants units and 1 of your Dreadscythe Harridans units start the battle in reserve. From the second battle round onwards, you can use the ‘Cackling Arrival’ ability.'
      },
      {
        name: 'Cackling Arrival',
        description: 'Once Per Turn (Army), Your Movement Phase\nDeclare: Pick 1 of your units in reserve.\nEffect: Set up that unit anywhere on the battlefield more than 6" from all enemy units.'
      },
      {
        name: 'Ethereal',
        description: 'Passive\nEffect: Ignore negative modifiers to save rolls for friendly units.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Discorporate',
        description: 'Once Per Turn (Army), Any Hero Phase\nDeclare: Pick a friendly unit to be the target.\nEffect: Roll a dice. On a 3+, add 1 to save rolls for the target for the rest of the turn.'
      },
      {
        name: 'Mounting Dread',
        description: 'Once Per Turn (Army), End of Any Turn\nDeclare: Pick a friendly unit to be the target.\nEffect: Roll a dice. On a 2+, subtract the current battle round number from the control scores of enemy units while they are in combat with the target.'
      }
    ],
    heroTraits: [
      {
        id: 'nh-csh-ht1',
        name: 'Unholy Visage',
        type: 'Hero Trait',
        effect: 'Your Hero Phase\nDeclare: Pick a visible enemy unit within 6" of your general to be the target.\nEffect: Roll a dice. On a 3+, the target must immediately use a Retreat ability as if it were the enemy movement phase.'
      },
      {
        id: 'nh-csh-ht2',
        name: 'Tales of Horror',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Any Combat Phase\nDeclare: Pick an enemy Infantry or Cavalry unit within 6" of your general to be the target.\nEffect: For the rest of the battle, if the target is replaced using the ‘Call for Reinforcements’ ability, halve the number of models in the replacement unit, rounding up.'
      }
    ],
    artefacts: [
      {
        id: 'nh-csh-art1',
        name: 'Deathly Possessor',
        type: 'Artefact of Power',
        effect: 'Any Combat Phase\nDeclare: Pick an enemy Hero within 12" of your general to be the target, then pick another enemy unit within the target’s combat range to be the victim.\nEffect: Roll a D3. On a 2+, pick one:\n• Inflict mortal damage on the target equal to the roll.\n• Inflict mortal damage on the victim equal to the roll.'
      },
      {
        id: 'nh-csh-art2',
        name: 'Spectral Howl',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Hero Phase\nDeclare: Pick an enemy unit within 12" of your general to be the target.\nEffect: For the rest of the turn, subtract 1 from the number of dice rolled when making charge rolls for the target, to a minimum of 1.'
      }
    ],
    units: [
      {
        id: 'nh-csh-spirit-torment',
        name: 'Spirit Torment',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '8"',
        health: 5,
        save: '5+',
        ward: '5+',
        control: 2,
        weapons: [
          {
            name: 'Shacklegheist Chains',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Captured Soul Energy',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly unit wholly within 12" of this unit to be the target.\nEffect: Roll a dice. On a 3+, add 1 to wound rolls for the target’s combat attacks for the rest of the turn.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'HERO', 'INFANTRY', 'FLY', 'WARD (5+)', 'SPIRIT TORMENT']
      },
      {
        id: 'nh-csh-chainghasts',
        name: 'Chainghasts',
        role: 'Infantry',
        modelCount: 2,
        baseSize: '32mm',
        move: '8"',
        health: 3,
        save: '6+',
        ward: '5+',
        control: 2,
        weapons: [
          {
            name: 'Ghastflails (Ranged)',
            type: 'Ranged',
            range: '12"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-2',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          },
          {
            name: 'Ghastflails (Melee)',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-2',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Another Link in the Chain',
            phase: 'Combat',
            type: 'Active',
            effect: 'Your Combat Phase\nEffect: Roll a dice. Add 1 to the roll if this unit is wholly within 12" of any friendly Spirit Torments. On a 3+, for the rest of the turn, add 1 to hit rolls for combat attacks made by friendly units while they are wholly within 12" of this unit.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'INFANTRY', 'FLY', 'WARD (5+)', 'CHAINGHASTS']
      },
      {
        id: 'nh-csh-bladegheists',
        name: 'Bladegheist Revenants',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '8"',
        health: 2,
        save: '6+',
        ward: '5+',
        control: 1,
        weapons: [
          {
            name: 'Tomb Greatblade',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Thrashing Desperation',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: While this unit contests an objective you control, enemy units cannot end a charge move within ½" of this unit unless the unmodified charge roll was 5 or more.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'INFANTRY', 'FLY', 'WARD (5+)', 'BLADEGHEIST REVENANTS']
      },
      {
        id: 'nh-csh-harridans',
        name: 'Dreadscythe Harridans',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '8"',
        health: 2,
        save: '6+',
        ward: '5+',
        control: 1,
        weapons: [
          {
            name: 'Scythed Limbs',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Harrowing Shrieks',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Enemy units cannot be healed or have slain models returned to them while they are in combat with this unit.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'INFANTRY', 'FLY', 'WARD (5+)', 'DREADSCYTHE HARRIDANS']
      },
      {
        id: 'nh-csh-dreadblade',
        name: 'Dreadblade Harrows',
        role: 'Cavalry',
        modelCount: 2,
        baseSize: '60x35mm',
        move: '12"',
        health: 3,
        save: '6+',
        ward: '5+',
        control: 1,
        weapons: [
          {
            name: 'Dreadblade',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Auto-wound)'
          },
          {
            name: 'Ethereal Steed’s Ghostly Hooves and Teeth',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '5+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Auto-wound), Companion'
          }
        ],
        abilities: [
          {
            name: 'Phantasmal Discorporation',
            phase: 'Movement',
            type: 'Active',
            effect: 'Once Per Battle, Your Movement Phase\nEffect: Remove this unit from the battlefield and set it up again on the battlefield more than 6" from all enemy units.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'CAVALRY', 'FLY', 'WARD (5+)', 'DREADBLADE HARROWS']
      }
    ]
  },

  // 9. FLESH-EATER COURTS - Carrion Retainers
  {
    id: 'fec-carrion',
    name: 'Flesh-eater Courts',
    subTitle: 'Carrion Retainers',
    grandAlliance: 'DEATH',
    accentColor: 'from-red-950 via-stone-900 to-rose-950',
    flavorQuote: '‘Come to me, my subjects, for bandits profane our lands. Let us ride out to meet them and give them a taste of knightly steel!’ — Archregent Redcraw',
    battleTraits: [
      {
        name: 'Noble Deeds',
        description: 'Passive\nEffect: Each time a friendly Hero uses a Fight ability, after its attacks have been resolved, give that Hero a number of noble deeds points equal to the number of damage points allocated by that ability. Each Hero can have a maximum of 6 noble deeds points at any time.'
      },
      {
        name: 'Feeding Frenzy',
        description: 'Passive\nEffect: Add 1 to the Attacks characteristic of melee weapons used by friendly units while they are wholly within 12" of any friendly Heroes that have 6 noble deeds points.'
      },
      {
        name: 'Summon Loyal Subjects',
        description: 'Your Movement Phase\nDeclare: Pick a friendly Hero with any noble deeds points to use this ability.\nEffect: Spend any number of that Hero’s noble deeds points as follows:\n• Pick a friendly Cryptguard unit within 9" of this unit and spend 1 noble deeds point to return 1 model to that unit.\n• Pick a friendly Morbheg Knights unit within 9" of this unit and spend 2 noble deeds points to return 1 model to that unit.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Crusading Army',
        description: 'Passive\nEffect: Add 1 to run rolls and charge rolls for friendly units.'
      },
      {
        name: 'Defenders of the Realm',
        description: 'Passive\nEffect: Add 1 to save rolls for friendly units that are contesting an objective you control.'
      }
    ],
    heroTraits: [
      {
        id: 'fec-cr-ht1',
        name: 'Ulguan Cloak',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general is not visible to enemy models that are more than 12" away from them.'
      },
      {
        id: 'fec-cr-ht2',
        name: 'Blood-River Chalice',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Your Hero Phase\nEffect: Heal (2D3) your general.'
      }
    ],
    artefacts: [
      {
        id: 'fec-cr-art1',
        name: 'Rousing Oration',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase\nEffect: Roll a dice for each friendly unit wholly within 12" of your general. Do not roll a dice for your general. For each 5+, give 1 noble deeds point to your general.'
      },
      {
        id: 'fec-cr-art2',
        name: 'Crimson Victuals',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase\nDeclare: Pick a visible enemy unit within 18" of your general to be the target, then make a casting roll of 2D6.\nEffect: On a 6+, inflict D3 mortal damage on the target. Then, if your Cryptguard unit is within 6" of the target, you can return 1 slain model to your Cryptguard unit for each damage point allocated by this ability.'
      }
    ],
    units: [
      {
        id: 'fec-cr-archregent',
        name: 'Abhorrant Archregent',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 6,
        save: '5+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Gory Talons and Fangs',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Deranged Transformation',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a visible friendly unit wholly within 18" of this unit to be the target, then make a casting roll of 2D6.\nEffect: On a 6+, until the start of your next turn, add 2" to the target’s Move characteristic and add 1 to wound rolls for its attacks.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'HERO', 'WIZARD', 'INFANTRY', 'WARD (6+)', 'ABHORRANT ARCHREGENT']
      },
      {
        id: 'fec-cr-cryptguard',
        name: 'Cryptguard',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 1,
        save: '6+',
        ward: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (10 models)',
        weapons: [
          {
            name: 'Cursed Weapon',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Royal Bodyguard',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to ward rolls for friendly Heroes that are wholly within this unit’s combat range.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'INFANTRY', 'REINFORCEMENTS', 'WARD (5+)', 'CRYPTGUARD']
      },
      {
        id: 'fec-cr-morbheg',
        name: 'Morbheg Knights',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '12"',
        health: 4,
        save: '4+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Grisly Lance',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Charge (+1 Damage)'
          },
          {
            name: 'Nightshrieker’s Claws and Teeth',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Predator’s Pounce',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit when it uses Retreat abilities.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'CAVALRY', 'FLY', 'WARD (6+)', 'MORBHEG KNIGHTS']
      },
      {
        id: 'fec-cr-varghulf',
        name: 'Varghulf Courtier',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60mm',
        move: '10"',
        health: 8,
        save: '5+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Immense Claws',
            type: 'Melee',
            range: '1"',
            attacks: 7,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Dagger-like Fangs',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Victory Feast',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn\nEffect: If any models were slain by this unit this turn, Heal (D6) this unit, and this unit can immediately use the ‘Retreat’ ability without any mortal damage being inflicted on it.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'HERO', 'INFANTRY', 'WARD (6+)', 'VARGHULF COURTIER']
      }
    ]
  },

  // 9b. FLESH-EATER COURTS - Charnel Watch
  {
    id: 'fec-charnel',
    name: 'Flesh-eater Courts',
    subTitle: 'Charnel Watch',
    grandAlliance: 'DEATH',
    accentColor: 'from-rose-950 via-red-950 to-stone-900',
    flavorQuote: '‘Grant these knaves neither pity nor respite. There is only one penalty for those who defile our lord’s domains, and that is death. Now, who among you shall be first to bring me a worthy trophy?’ — Marquis Thorofir',
    battleTraits: [
      {
        name: 'Delusions and Madness',
        description: 'Once Per Battle Round (Army), Start of Battle Round\nDeclare: You must use this ability at the start of each battle round. If it is the first battle round, pick a Delusion. Otherwise, make a delusion roll by rolling a D6.\nEffect: On a 1-3, you must pick a different Delusion to the one you picked last time. On a 4+, you must pick the same Delusion as last time. For the rest of the battle round, you believe the Delusion you picked.'
      },
      {
        name: 'Delusion of the Great Feast',
        description: 'Once Per Turn (Army), End of Any Turn\nDeclare: If you believe this Delusion, pick each friendly unit on the battlefield to be the targets.\nEffect: Heal (1) each target. If the target is a Serfs unit, return D3 slain models to it instead.\nKeywords: Delusion'
      },
      {
        name: 'Delusion of the Knightly Host',
        description: 'Passive\nEffect: While you believe this Delusion, if the unmodified charge roll for a friendly Hero or Knights unit is 8+, add 1 to hit rolls for that unit’s combat attacks for the rest of the turn.\nKeywords: Delusion'
      }
    ],
    regimentAbilities: [
      {
        name: 'Delusion of the Sentinel',
        description: 'Passive\nEffect: While you believe this Delusion, add 1 to ward rolls for friendly units while each model in the unit is contesting an objective.\nKeywords: Delusion'
      },
      {
        name: 'Delusion of the Hunter',
        description: 'Passive\nEffect: While you believe this Delusion, add 1 to wound rolls for combat attacks made by friendly units while no models in the unit are contesting an objective.\nKeywords: Delusion'
      }
    ],
    heroTraits: [
      {
        id: 'fec-cw-ht1',
        name: 'Almost Lucid',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Reaction: You declared the ‘Delusions and Madness’ ability\nEffect: You can re-roll the delusion roll.'
      },
      {
        id: 'fec-cw-ht2',
        name: 'Companion of the Hunt',
        type: 'Hero Trait',
        effect: 'End of Any Turn\nEffect: If your general is not in combat, they can move 3". They cannot move into combat during any part of that move.'
      }
    ],
    artefacts: [
      {
        id: 'fec-cw-art1',
        name: 'A Worthy Challenge',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase\nDeclare: Pick an enemy unit that started the battle with 3 or fewer models and is in combat with your general to be the target.\nEffect: Your opponent must decide whether the target will accept or refuse your general’s challenge. If they accept, for the rest of the phase, when your general and the target are picked to use a Fight ability, all of their attacks must target each other. If they refuse, the target has Strike-last for the rest of the phase.'
      },
      {
        id: 'fec-cw-art2',
        name: 'Choirmaster',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Your Shooting Phase\nDeclare: Pick a visible enemy unit within 6" of your general to be the target.\nEffect: For the rest of the turn, add 1 to the Damage characteristic of friendly units’ ranged weapons for attacks that target that enemy unit.'
      }
    ],
    units: [
      {
        id: 'fec-cw-gorewarden',
        name: 'Abhorrant Gorewarden',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '12"',
        health: 7,
        save: '5+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Gory Talons and Fangs',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Sound the Pursuit!',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly unit wholly within 12" of this unit to be the target, then make a casting roll of 2D6.\nEffect: On a 6+, until the start of your next turn, when making charge rolls for the target, add 1 to the number of dice rolled, to a maximum of 3, then remove 1 dice of your choice and use the remaining dice as the charge roll.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'HERO', 'WIZARD', 'INFANTRY', 'FLY', 'WARD (6+)', 'ABHORRANT GOREWARDEN']
      },
      {
        id: 'fec-cw-beastflayers',
        name: 'Royal Beastflayers',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '28.5mm',
        move: '6"',
        health: 1,
        save: '6+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Beastflayer Weapons',
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
            name: 'Lie of the Land',
            phase: 'Movement',
            type: 'Active',
            effect: 'Your Movement Phase\nEffect: If this unit is not in combat and is wholly within 6" of a battlefield edge, remove this unit from the battlefield and set it up again wholly within 6" of a battlefield edge and more than 6" from all enemy units.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'INFANTRY', 'SERFS', 'WARD (6+)', 'ROYAL BEASTFLAYERS']
      },
      {
        id: 'fec-cw-crypt-horrors',
        name: 'Crypt Horrors',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '50mm',
        move: '7"',
        health: 4,
        save: '5+',
        ward: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (3 models)',
        weapons: [
          {
            name: 'Club and Septic Talons',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Holy Blades of Bone',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nDeclare: Pick an enemy unit in combat with this unit and that charged this turn to be the target.\nEffect: Roll a dice for each model in the target unit. For each 5+, inflict 1 mortal damage on the target unit.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'INFANTRY', 'KNIGHTS', 'REINFORCEMENTS', 'WARD (6+)', 'CRYPT HORRORS']
      },
      {
        id: 'fec-cw-crypt-flayers',
        name: 'Crypt Flayers',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '50mm',
        move: '12"',
        health: 4,
        save: '5+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Death Scream',
            type: 'Ranged',
            range: '10"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '-2',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Piercing Talons',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Unholy Chorus',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Your Shooting Phase\nDeclare: Pick a visible enemy unit within 10" of this unit to be the target.\nEffect: For the rest of the turn, subtract an amount from the target’s control score equal to the number of damage points allocated to the target this phase by this unit’s shooting attacks.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'INFANTRY', 'KNIGHTS', 'FLY', 'WARD (6+)', 'CRYPT FLAYERS']
      }
    ]
  },

  // 19. OSSIARCH BONEREAPERS - Kavalos Vanguard
  {
    id: 'obr-kavalos',
    name: 'Ossiarch Bonereapers',
    subTitle: 'Kavalos Vanguard',
    grandAlliance: 'DEATH',
    accentColor: 'from-amber-800 via-stone-900 to-amber-950',
    flavorQuote: '‘Led by an imperious Liege-Kavalos and accompanied by their misshapen hunting beasts, the elite Deathriders of the Kavalos Vanguard sow terror and death across the realms.’',
    battleTraits: [
      {
        name: 'Calculated Feint',
        description: 'Passive\nEffect: No mortal damage is inflicted on friendly Cavalry units by Retreat abilities.'
      },
      {
        name: 'Kavalos Lance',
        description: 'Once Per Turn (Army), Your Hero Phase\nDeclare: Pick a friendly unit to be the target.\nEffect: For the rest of the turn, the target can pass across enemy models as if it had Fly.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Feigned Retreat',
        description: 'Once Per Battle, Your Movement Phase\nEffect: For the rest of the turn, friendly units can use Charge abilities even if they used a Retreat ability in the same turn.'
      },
      {
        name: 'Reinforced Constructs',
        description: 'Once Per Battle, Any Combat Phase\nDeclare: Pick a friendly unit to be the target.\nEffect: The target has Ward (5+) for the rest of the turn.'
      }
    ],
    heroTraits: [
      {
        id: 'obr-kv-ht1',
        name: 'Mighty Archaeossian',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general has Ward (5+).'
      },
      {
        id: 'obr-kv-ht2',
        name: 'Murderous Blade',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general’s Commander’s Blade has Crit (2 Hits).'
      }
    ],
    artefacts: [
      {
        id: 'obr-kv-art1',
        name: 'Imperious Commander',
        type: 'Artefact of Power',
        effect: 'Your Movement Phase\nDeclare: Pick a visible friendly unit wholly within 12" of your general to be the target.\nEffect: Roll a dice. On a 3+, add 2" to the target’s Move characteristic for the rest of the turn.'
      },
      {
        id: 'obr-kv-art2',
        name: 'Cold Savagery',
        type: 'Artefact of Power',
        effect: 'Any Combat Phase\nDeclare: If your general has not charged this turn and is in combat, pick a visible friendly unit wholly within 12" of them to be the target.\nEffect: Roll a dice. On a 3+, add 1 to the Rend characteristic of the target’s melee weapons, including Companion weapons, for the rest of the turn.'
      }
    ],
    units: [
      {
        id: 'obr-kv-liege-kavalos',
        name: 'Liege-Kavalos',
        role: 'Hero',
        modelCount: 1,
        baseSize: '80mm',
        move: '10"',
        health: 7,
        save: '3+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Commander’s Blade',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '2',
            ability: 'Charge (+1 Damage)'
          },
          {
            name: 'Kavalos Steed’s Hooves, Teeth and Barbed Tails',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '5+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Signal the Advance',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a visible friendly unit wholly within 12" of this unit to be the target.\nEffect: Roll a dice. On a 3+, add 1 to charge rolls for the target for the rest of the turn.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'HERO', 'CAVALRY', 'WARD (6+)', 'LIEGE-KAVALOS']
      },
      {
        id: 'obr-kv-teratic-cohort',
        name: 'Teratic Cohort',
        role: 'Infantry',
        modelCount: 8,
        baseSize: '28.5mm - 60x35mm',
        move: '7"',
        health: 1,
        save: '5+',
        ward: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (8 models)',
        weapons: [
          {
            name: 'Cohort Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Bone-deep Savagery',
            phase: 'Movement',
            type: 'Active',
            effect: 'Any Movement Phase\nEffect: This unit can move 3". If it can move into combat, it must. If it was in combat at the start of the move, it must end that move in combat.\nKeywords: Core, Move'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'BEAST', 'WARD (6+)', 'REINFORCEMENTS', 'TERATIC COHORT']
      },
      {
        id: 'obr-kv-deathriders',
        name: 'Kavalos Deathriders',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '10"',
        health: 3,
        save: '4+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Kavalos Blade',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Kavalos Steed’s Hooves and Teeth',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '5+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Wheel About',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nEffect: If this unit charged this turn, roll a dice. On a 3+, this unit can move a distance up to its Move characteristic. It can move through the combat ranges of enemy units but cannot end that move in combat.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'CAVALRY', 'WARD (6+)', 'KAVALOS DEATHRIDERS']
      }
    ]
  },

  // 19b. OSSIARCH BONEREAPERS - Mortisan Elite
  {
    id: 'obr-mortisan',
    name: 'Ossiarch Bonereapers',
    subTitle: 'Mortisan Elite',
    grandAlliance: 'DEATH',
    accentColor: 'from-amber-900 via-stone-900 to-teal-950',
    flavorQuote: '‘This creation requires a measure of alteration. Still, its lethality was impressive, as evidenced by the remains of the foe’s cavalry.’ — Ossifector Zaramokk of the Mortis Praetorians',
    battleTraits: [
      {
        name: 'Heralds of Nagash',
        description: 'Passive\nEffect: Your unit of Morghast Archai is not set up during the deployment phase. Instead, from the second battle round onwards, it can use the ‘Dread Descent’ ability.'
      },
      {
        name: 'Dread Descent',
        description: 'Once Per Turn (Army), Your Movement Phase\nEffect: Set up this unit anywhere on the battlefield more than 6" from all enemy units.'
      },
      {
        name: 'Relentless Discipline',
        description: 'Once Per Phase (Army)\nDeclare: Pick a friendly unit to be the target.\nEffect: Make a discipline roll of D6. Add 1 to the roll if the target is wholly within 12" of your general. On a 4+, pick 1 of the effects below:\n• Your Movement Phase: Add 2" to the target’s Move characteristic for the rest of the phase.\n• Your Charge Phase: Add 1 to charge rolls for the target for the rest of the phase.\n• Any Combat Phase: Add 1 to wound rolls for combat attacks made by the target for the rest of the phase.\n• Any Combat Phase: The target has Ward (5+) for the rest of the phase.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Peerless Cohesion',
        description: 'Once Per Turn (Army), Reaction: You declared the ‘Relentless Discipline’ ability\nEffect: You can use the ‘Relentless Discipline’ ability for a second time this phase but you must pick a different target to the one you picked the first time.'
      },
      {
        name: 'Immaculate Generalship',
        description: 'Passive\nEffect: Add 1 to discipline rolls you make.'
      }
    ],
    heroTraits: [
      {
        id: 'obr-me-ht1',
        name: 'Lode of Saturation',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Subtract 1 from the Rend characteristic of melee weapons used for combat attacks that target this general.'
      },
      {
        id: 'obr-me-ht2',
        name: 'Helm of Tyranny',
        type: 'Hero Trait',
        effect: 'Once Per Battle, End of Your Turn\nDeclare: Pick an enemy unit within 12" of your general to be the target and roll a dice.\nEffect: On a 3+, subtract 3 from the control score of the target for the rest of the turn.'
      }
    ],
    artefacts: [
      {
        id: 'obr-me-art1',
        name: 'Shard Storm',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase\nDeclare: Pick a visible enemy unit within 12" of your general to be the target, then make a casting roll of 2D6.\nEffect: On a 7+, roll a number of dice equal to the number of models in the target unit. For each 5+, inflict 1 mortal damage on the target.'
      },
      {
        id: 'obr-me-art2',
        name: 'Mend Constructs',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase\nDeclare: Pick a visible friendly unit wholly within 12" of your general to be the target, then make a casting roll of 2D6.\nEffect: On a 6+, Heal (D3) the target.'
      }
    ],
    units: [
      {
        id: 'obr-me-ossifector',
        name: 'Mortisan Ossifector',
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
            name: 'Ossified Talons',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Refined Creations',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a visible friendly unit wholly within 12" of this unit to be the target, then make a casting roll of 2D6.\nEffect: On a 5+, the target’s melee weapons have Crit (2 Hits) until the start of your next turn.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'HERO', 'WIZARD', 'INFANTRY', 'WARD (6+)', 'MORTISAN OSSIFECTOR']
      },
      {
        id: 'obr-me-immortis',
        name: 'Immortis Guard',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '50mm',
        move: '5"',
        health: 4,
        save: '3+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Dread Halberd',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Soulbound Protectors',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Your general has Ward (5+) while they are within this unit’s combat range.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'INFANTRY', 'WARD (6+)', 'IMMORTIS GUARD']
      },
      {
        id: 'obr-me-stalkers',
        name: 'Necropolis Stalkers',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '50mm',
        move: '6"',
        health: 4,
        save: '4+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Stalker Blades',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Switch Aspects',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nEffect: Pick 1 of the following effects to apply for the rest of the turn:\n• Blade-parry Aspect: Subtract 1 from hit rolls for combat attacks that target this unit.\n• Destroyer Aspect: Ward rolls cannot be made for damage points inflicted by this unit’s combat attacks.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'INFANTRY', 'WARD (6+)', 'NECROPOLIS STALKERS']
      },
      {
        id: 'obr-me-morghast',
        name: 'Morghast Archai',
        role: 'Infantry',
        modelCount: 2,
        baseSize: '60mm',
        move: '10"',
        health: 6,
        save: '3+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Spirit Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Heralds of Nagash',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to discipline rolls for this unit while it is not wholly within 12" of your general.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'INFANTRY', 'FLY', 'WARD (6+)', 'MORGHAST ARCHAI']
      }
    ]
  },

  // 19c. OSSIARCH BONEREAPERS - Tithe-Reaper Echelon
  {
    id: 'obr-tithe',
    name: 'Ossiarch Bonereapers',
    subTitle: 'Tithe-Reaper Echelon',
    grandAlliance: 'DEATH',
    accentColor: 'from-emerald-950 via-stone-900 to-amber-950',
    flavorQuote: '‘Let us be done with this, and swiftly. Lord Xornas requires seven new legions for the campaign. These ingrates will provide a beginning.’ — Thakaros, Mortisan Soulreaper',
    battleTraits: [
      {
        name: 'Reserve Contingent',
        description: 'Passive\nEffect: One of your Mortek Guard units is not set up during the deployment phase. Instead, from the third battle round onwards, it can use the ‘Contingent Arrival’ ability.'
      },
      {
        name: 'Contingent Arrival',
        description: 'Your Movement Phase\nEffect: Set up this unit anywhere on the battlefield wholly within 3" of a battlefield edge and more than 6" from all enemy units.\nKeywords: Core'
      },
      {
        name: 'Ossiarch Commands',
        description: 'Passive\nEffect: Ossiarch Commands are abilities that can only be used by spending Ossiarch command points.\nAt the start of the battle round, you receive 2 Ossiarch command points. Each Ossiarch Command costs 1 Ossiarch command point to use.\nThe same unit cannot use more than one Ossiarch Command in the same phase. At the end of the battle round, all remaining Ossiarch command points are lost.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Impenetrable Ranks',
        description: 'Once Per Battle, Any Combat Phase\nDeclare: Pick a friendly unit to use this ability.\nEffect: Until the end of the phase, add 1 to ward rolls for that unit.\nKeywords: Ossiarch Command'
      },
      {
        name: 'Re-form Ranks',
        description: 'Once Per Battle, Your Movement Phase\nDeclare: Pick a friendly Mortek Guard unit in combat to use this ability.\nEffect: That unit can use a Retreat ability this phase without any mortal damage being inflicted on it.\nKeywords: Ossiarch Command'
      }
    ],
    heroTraits: [
      {
        id: 'obr-tr-ht1',
        name: 'Murderous Drive',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general’s Soulreaper Scythe has Crit (2 Hits).'
      },
      {
        id: 'obr-tr-ht2',
        name: 'Marrowpact',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Each time your general uses a Fight ability, after all of their attacks have been resolved, Heal (X) your general where X is the number of damage points allocated by those attacks.'
      }
    ],
    artefacts: [
      {
        id: 'obr-tr-art1',
        name: 'Empower Nadirite Weapons',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase\nDeclare: Pick a visible friendly Mortek Guard unit wholly within 12" of your general, then make a casting roll of 2D6.\nEffect: On a 5+, until the start of your next turn, add 1 to the Rend characteristic of that unit’s melee weapons.'
      },
      {
        id: 'obr-tr-art2',
        name: 'Unstoppable Commander',
        type: 'Artefact of Power',
        effect: 'Your Movement Phase\nDeclare: Pick a friendly Mortek Guard unit wholly within 12" of your general, then roll a dice.\nEffect: On a 2+, add 3" to that unit’s Move characteristic this phase.'
      }
    ],
    units: [
      {
        id: 'obr-tr-soulreaper',
        name: 'Mortisan Soulreaper',
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
            name: 'Soulreaper Scythe',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Drain Vitality',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6.\nEffect: On a 6+, subtract 1 from hit rolls for attacks made by the target unit until the start of your next turn.'
          },
          {
            name: 'Reknit Construct',
            phase: 'Movement',
            type: 'Active',
            effect: 'Your Movement Phase\nDeclare: Pick a friendly unit wholly within 12" of this unit and that is not in combat to be the target.\nEffect: Heal (D3) the target. If the target unit is not damaged, you can instead return a number of slain models to it that have a combined Health characteristic of D3 or less.\nKeywords: Ossiarch Command'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'HERO', 'WIZARD', 'INFANTRY', 'WARD (6+)', 'MORTISAN SOULREAPER']
      },
      {
        id: 'obr-tr-mortek-guard',
        name: 'Mortek Guard',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '4"',
        health: 1,
        save: '4+',
        ward: '6+',
        control: 1,
        reinforcementNote: 'The army list consists of 2 units of 10 Mortek Guard.',
        weapons: [
          {
            name: 'Nadirite Spear',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Anti-charge (+1 Rend)'
          }
        ],
        abilities: [
          {
            name: 'Nadirite Assault',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nEffect: Until the end of the phase, this unit’s melee weapons have Crit (2 Hits).\nKeywords: Ossiarch Command'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'INFANTRY', 'WARD (6+)', 'MORTEK GUARD']
      },
      {
        id: 'obr-tr-deathriders',
        name: 'Kavalos Deathriders',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '10"',
        health: 3,
        save: '4+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Nadirite Spear',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Charge (+1 Damage)'
          },
          {
            name: 'Kavalos Steed’s Hooves and Teeth',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '5+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Deathrider Wedge',
            phase: 'Charge',
            type: 'Active',
            effect: 'Your Charge Phase\nEffect: Models in this unit can pass across enemy Infantry models as if this unit had Fly. After this unit has charged, you can pick an enemy unit that it passed across and roll a dice. On a 2+, inflict D3 mortal damage on that enemy unit.\nKeywords: Ossiarch Command'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'CAVALRY', 'WARD (6+)', 'KAVALOS DEATHRIDERS']
      },
      {
        id: 'obr-tr-harvester',
        name: 'Gothizzar Harvester',
        role: 'Monster',
        modelCount: 1,
        baseSize: '105x70mm',
        move: '6"',
        health: 10,
        save: '4+',
        ward: '6+',
        control: 5,
        weapons: [
          {
            name: 'Death’s Head Maw',
            type: 'Ranged',
            range: '12"',
            attacks: 4,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Soulcrusher Bludgeons',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '2'
          },
          {
            name: 'Ossified Hooves and Tail',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Bone Harvest',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Each time an enemy model in combat with this unit is slain, this unit gains 1 bone-tithe point. It can never have more than 6 bone-tithe points.'
          },
          {
            name: 'Repair Construct',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn\nDeclare: Pick a friendly Mortek Guard unit within 6" of this unit to be the target. Then, roll a dice for each bone-tithe point this unit has.\nEffect: For each 4+, you can return 1 slain model to the target unit. Then, reset this unit’s bone-tithe points to 0.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'MONSTER', 'WARD (6+)', 'GOTHIZZAR HARVESTER']
      }
    ]
  },

  // 23. SOULBLIGHT GRAVELORDS - Bloodcrave Hunt
  {
    id: 'sbl-bloodcrave',
    name: 'Soulblight Gravelords',
    subTitle: 'Bloodcrave Hunt',
    grandAlliance: 'DEATH',
    accentColor: 'from-red-950 via-rose-950 to-stone-900',
    flavorQuote: '‘Though the great vampiric bloodlines maintain wildly different traditions of war, there is one thing they all have in common: the love of the hunt.’',
    battleTraits: [
      {
        name: 'Death’s Descent',
        description: 'Passive\nEffect: Your Vargheists unit is not set up during the deployment phase. Instead, from the third battle round onwards, it can use the ‘Swoop Down’ ability.'
      },
      {
        name: 'Swoop Down',
        description: 'Your Movement Phase\nEffect: Set up this unit anywhere on the battlefield more than 6" from all enemy units.\nKeywords: Core'
      },
      {
        name: 'The Hunger',
        description: 'Passive\nEffect: Each time a friendly Vampire unit uses a Fight ability, after all of its attacks have been resolved, Heal (X) that Vampire unit where X is the number of damage points allocated by those attacks.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Endless Legions',
        description: 'Once Per Battle, Your Movement Phase\nDeclare: Pick a friendly Deathrattle Skeletons unit that has been destroyed.\nEffect: You can set up a replacement unit with D6 models in friendly territory more than 6" from enemy units.\nKeywords: Core'
      },
      {
        name: 'Ruinous Chargers',
        description: 'Any Charge Phase\nDeclare: Pick your Blood Knights unit to use this ability if it charged this turn.\nEffect: Inflict D3 mortal damage on each enemy unit it passed across during that Charge ability.'
      }
    ],
    heroTraits: [
      {
        id: 'sbl-bc-ht1',
        name: 'Aura of Night',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Ignore negative modifiers to save rolls for shooting attacks that target your general.'
      },
      {
        id: 'sbl-bc-ht2',
        name: 'Cloud of Bats',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Your Movement Phase\nEffect: Remove your general from the battlefield and set them up again anywhere on the battlefield more than 6" from all enemy units.\nKeywords: Core'
      }
    ],
    artefacts: [
      {
        id: 'sbl-bc-art1',
        name: 'Grave-sand Shard',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Reaction: You declared the ‘Skeleton Legion’ ability for a unit within 9" of your general\nEffect: Add 1 to each legion roll made for that unit.'
      },
      {
        id: 'sbl-bc-art2',
        name: 'Spirit Gale',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase\nDeclare: Make a casting roll of 2D6.\nEffect: On a 7+, inflict 1 mortal damage on each enemy unit on the battlefield.'
      }
    ],
    units: [
      {
        id: 'sbl-bc-vampire-lord',
        name: 'Vampire Lord',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '6"',
        health: 5,
        save: '3+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Dynastic War-relic',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Vile Transference',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a visible enemy unit within 6" of this unit to be the target, then make a casting roll of 2D6.\nEffect: On a 6+, roll a number of dice equal to the target’s Health characteristic. For each 5+, inflict 1 mortal damage on the target and Heal (1) this unit.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'HERO', 'WIZARD', 'INFANTRY', 'VAMPIRE', 'WARD (6+)', 'VAMPIRE LORD']
      },
      {
        id: 'sbl-bc-blood-knights',
        name: 'Blood Knights',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '75x42mm',
        move: '10"',
        health: 3,
        save: '3+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Templar Lance or Templar Blade',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Charge (+1 Damage)'
          },
          {
            name: 'Nightmare’s Hooves and Teeth',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '5+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Riders of Ruin',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Models in this unit can pass across enemy Infantry models as if this unit had Fly.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'CAVALRY', 'VAMPIRE', 'WARD (6+)', 'BLOOD KNIGHTS']
      },
      {
        id: 'sbl-bc-vargheists',
        name: 'Vargheists',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '50mm',
        move: '12"',
        health: 4,
        save: '5+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Murderous Fangs and Talons',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (2 Hits)'
          }
        ],
        abilities: [
          {
            name: 'The Scent of Gore',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to wound rolls for attacks made by this unit that target a damaged unit.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'INFANTRY', 'VAMPIRE', 'FLY', 'WARD (6+)', 'VARGHEISTS']
      },
      {
        id: 'sbl-bc-deathrattle',
        name: 'Deathrattle Skeletons',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '4"',
        health: 1,
        save: '5+',
        ward: '6+',
        control: 1,
        reinforcementNote: 'The army list consists of 2 units of 10 Deathrattle Skeletons.',
        weapons: [
          {
            name: 'Ancient Weapon',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Skeleton Legion',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nEffect: For each slain model from this unit, make a legion roll of D6. For each 5+, return 1 slain model to this unit.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'INFANTRY', 'WARD (6+)', 'DEATHRATTLE SKELETONS']
      }
    ]
  },

  // 23b. SOULBLIGHT GRAVELORDS - Deathrattle Tomb Host
  {
    id: 'sbl-deathrattle',
    name: 'Soulblight Gravelords',
    subTitle: 'Deathrattle Tomb Host',
    grandAlliance: 'DEATH',
    accentColor: 'from-stone-900 via-indigo-950 to-slate-900',
    flavorQuote: '‘All that I see is mine. All who oppose me shall be annihilated. Let the living tremble at the sight of my banner, for the ruler of the Flooded Kingdom has come.’ — Wight King Crannoch',
    battleTraits: [
      {
        name: 'The Unquiet Dead',
        description: 'Passive\nEffect: One of your Deathrattle Skeletons units is not set up during the deployment phase. Instead, from the third battle round onwards, it can use the ‘The Rising Dead’ ability.'
      },
      {
        name: 'The Rising Dead',
        description: 'Once Per Battle (Army), Your Movement Phase\nEffect: Set up this unit anywhere on the battlefield wholly within 3" of a battlefield edge and more than 6" from all enemy units.'
      },
      {
        name: 'Aura of Antiquity',
        description: 'Once Per Turn (Army), Your Combat Phase\nDeclare: Pick an enemy unit in combat with any friendly units to be the target.\nEffect: Roll a dice. On a 3+, subtract 1 from the Rend characteristic of the target’s melee weapons until the start of your next turn.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Overwhelming Hordes',
        description: 'Passive\nEffect: Add 1 to wound rolls for combat attacks made by friendly non-Hero units that target a unit that has fewer models than the attacking unit.'
      },
      {
        name: 'Deathmarch',
        description: 'Once Per Turn (Army), Your Hero Phase\nDeclare: Pick a friendly non-Hero unit that is not in combat to be the target.\nEffect: For the rest of the turn, add 1" to the target’s Move characteristic and add 3 to its control score.'
      }
    ],
    heroTraits: [
      {
        id: 'sbl-dt-ht1',
        name: 'Shyishan Blade',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: The Rend characteristic of your general’s Baleful Tomb Blade is 2.'
      },
      {
        id: 'sbl-dt-ht2',
        name: 'Stolen Animus',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Each time your general scores a critical hit, Heal (2) your general after the Attack ability has been resolved.'
      }
    ],
    artefacts: [
      {
        id: 'sbl-dt-art1',
        name: 'Propelled by Hate',
        type: 'Artefact of Power',
        effect: 'Your Charge Phase\nDeclare: Pick another friendly unit wholly within 12" of your general to be the target.\nEffect: You can re-roll charge rolls for the target for the rest of the turn.'
      },
      {
        id: 'sbl-dt-art2',
        name: 'Soul-drain Pendant',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase\nDeclare: Pick an enemy unit in combat with your general to be the target.\nEffect: Roll a dice. On a 2+, the target has Strike-last for the rest of the turn.'
      }
    ],
    units: [
      {
        id: 'sbl-dt-wight-king',
        name: 'Wight King',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '4"',
        health: 5,
        save: '3+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Baleful Tomb Blade',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'King of Shambling Bones',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly Deathrattle unit wholly within 12" of this unit to be the target.\nEffect: Roll a dice. On a 2+, add 1 to hit rolls for combat attacks made by the target for the rest of the turn.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'HERO', 'INFANTRY', 'WARD (6+)', 'WIGHT KING']
      },
      {
        id: 'sbl-dt-barrow-guard',
        name: 'Barrow Guard',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '4"',
        health: 1,
        save: '4+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Wight Blade',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Guardians of the King',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: While your general is within this unit’s combat range, both this unit and your general have Ward (5+).'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'INFANTRY', 'WARD (6+)', 'BARROW GUARD']
      },
      {
        id: 'sbl-dt-barrow-knights',
        name: 'Barrow Knights',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '10"',
        health: 3,
        save: '4+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Barrow Lance',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Mortal), Charge (+1 Damage)'
          },
          {
            name: 'Skeletal Steed’s Hooves and Teeth',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '5+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Cursed to Rise Once More',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Your Turn\nEffect: You can return 1 slain model to this unit.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'CAVALRY', 'WARD (6+)', 'BARROW KNIGHTS']
      },
      {
        id: 'sbl-dt-deathrattle',
        name: 'Deathrattle Skeletons',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '4"',
        health: 1,
        save: '5+',
        ward: '6+',
        control: 1,
        reinforcementNote: 'The army list consists of 2 units of 10 Deathrattle Skeletons.',
        weapons: [
          {
            name: 'Ancient Weapon',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Skeleton Legion',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn\nEffect: You can return D3 slain models to this unit.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'INFANTRY', 'WARD (6+)', 'DEATHRATTLE SKELETONS']
      }
    ]
  }
];
