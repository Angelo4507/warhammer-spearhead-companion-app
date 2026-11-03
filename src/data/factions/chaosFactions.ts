import { SpearheadFaction } from '../../types/spearhead';

export const CHAOS_FACTIONS: SpearheadFaction[] = [
  // 2. SKAVEN - Gnawfeast Clawpack
  {
    id: 'skaven-gnawfeast',
    name: 'Skaven',
    subTitle: 'Gnawfeast Clawpack',
    grandAlliance: 'CHAOS',
    accentColor: 'from-emerald-700 to-lime-600',
    flavorQuote: '‘Man-things die. Short-things die. Aelf-things die. All things die. Our time now, yes-yes. Doom comes to gnaw on the surface world.’ — Clawlord Muskritt of Clan Fang',
    battleTraits: [
      {
        name: 'The Lurking Vermintide',
        description: 'Once Per Battle, Deployment Phase\nDeclare: Pick a friendly unit that has not been deployed to be the target.\nEffect: The target unit is set up in reserve in the tunnels below. Units in the tunnels below that have not used the ‘Gnawhole Ambush’ ability by the end of the third battle round are destroyed.\nKeywords: Deploy'
      },
      {
        name: 'Gnawhole Ambush',
        description: 'Your Movement Phase\nDeclare: Pick a friendly unit that is in the tunnels below to use this ability.\nEffect: Set up that unit wholly within 6" of a corner of the battlefield and more than 9" from all enemy units.\nKeywords: Core'
      }
    ],
    regimentAbilities: [
      {
        name: 'Warpstone-Laced Bullets',
        description: 'Once Per Battle, Your Shooting Phase\nDeclare: Pick a ranged weapon a friendly unit is armed with.\nEffect: That weapon has Crit (Mortal) this phase.'
      },
      {
        name: 'Too Quick to Hit-Hit',
        description: 'Passive\nEffect: No mortal damage is inflicted on friendly units when they use Retreat abilities.'
      }
    ],
    heroTraits: [
      {
        id: 'sk-gf-ht1',
        name: 'Lead the Seething Horde',
        type: 'Hero Trait',
        effect: 'Reaction: You declared the ‘Call for Reinforcements’ ability\nEffect: Instead of using the set-up instructions in the ‘Call for Reinforcements’ ability, the replacement unit can be set up wholly within 13" of this unit and not in combat.'
      },
      {
        id: 'sk-gf-ht2',
        name: 'Skryre Connections',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general’s Ratling Pistol has an Attacks characteristic of 2D6 instead of D6.'
      }
    ],
    artefacts: [
      {
        id: 'sk-gf-art1',
        name: 'Warpstone Charm',
        type: 'Artefact of Power',
        effect: 'Passive\nEffect: Subtract 1 from save rolls for enemy units in combat with your general.'
      },
      {
        id: 'sk-gf-art2',
        name: 'Cloak of Stitched Victories',
        type: 'Artefact of Power',
        effect: 'Passive\nEffect: Your general has Ward (5+).'
      }
    ],
    units: [
      {
        id: 'sk-gf-clawlord',
        name: 'Clawlord on Gnaw-beast',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60mm',
        move: '9"',
        health: 7,
        save: '4+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Ratling Pistol',
            type: 'Ranged',
            range: '10"',
            attacks: 'D6',
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Auto-wound), Shoot in Combat'
          },
          {
            name: 'Warpforged Halberd',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Gnaw-beast’s Chisel Fangs',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Cornered Rat',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: While this unit is damaged, add 3 to the Attacks characteristic of its Warpforged Halberd.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'HERO', 'CAVALRY', 'WARD (6+)', 'CLAWLORD ON GNAW-BEAST']
      },
      {
        id: 'sk-gf-grey-seer',
        name: 'Grey Seer',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '6+',
        control: 2,
        weapons: [
          {
            name: 'Warpstone Staff',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Will of the Horned Rat',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly unit wholly within 13" of this unit to be the target, then roll a dice.\nEffect: On a 3+, add the roll to the target’s control score until the start of your next turn.'
          },
          {
            name: 'Wither',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a visible enemy unit within 13" of this unit to be the target, then make a casting roll of 2D6.\nEffect: On a 6+, inflict D3 mortal damage on the target.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'HERO', 'WIZARD', 'INFANTRY', 'GREY SEER']
      },
      {
        id: 'sk-gf-warlock-engineer',
        name: 'Warlock Engineer',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Warplock Musket',
            type: 'Ranged',
            range: '24"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: 'D3',
            ability: 'Crit (Auto-wound)'
          },
          {
            name: 'Warpforged Dagger',
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
            name: 'More-more Warp Energy!',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Reaction: You declared a Shoot ability for this unit and it has not used a Move ability this turn\nEffect: Roll a dice. On a 2+, set the Damage characteristic of its Warplock Musket to 3 this phase. On a 1, inflict D3 mortal damage on this unit.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'HERO', 'INFANTRY', 'WARLOCK ENGINEER']
      },
      {
        id: 'sk-gf-rat-ogors',
        name: 'Rat Ogors',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '50mm',
        move: '6"',
        health: 4,
        save: '5+',
        control: 1,
        reinforcementNote: 'This unit has 2 Rat Ogors armed with Claws, Blades and Fangs, and 1 Rat Ogor armed with a Warpfire Gun and Claws, Blades and Fangs.',
        weapons: [
          {
            name: 'Warpfire Gun',
            type: 'Ranged',
            range: '10"',
            attacks: '2D6',
            toHit: '2+',
            toWound: '4+',
            rend: '-2',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Claws, Blades and Fangs',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Unleashed Warp-fury',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase, Once Per Battle\nEffect: Inflict D3 mortal damage on this unit. Then, add 1 to the Attacks characteristic of its melee weapons this phase.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'INFANTRY', 'RAT OGORS']
      },
      {
        id: 'sk-gf-clanrats-a',
        name: 'Clanrats - Unit A',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 1,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (10 models)',
        weapons: [
          {
            name: 'Rusty Blade',
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
            name: 'Seething Swarm',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn\nEffect: You can return D3 slain models to this unit.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'INFANTRY', 'REINFORCEMENTS', 'CLANRATS']
      },
      {
        id: 'sk-gf-clanrats-b',
        name: 'Clanrats - Unit B',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 1,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (10 models)',
        weapons: [
          {
            name: 'Rusty Blade',
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
            name: 'Seething Swarm',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn\nEffect: You can return D3 slain models to this unit.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'INFANTRY', 'REINFORCEMENTS', 'CLANRATS']
      }
    ]
  },

  // 2b. SKAVEN - Warpspark Clawpack
  {
    id: 'skaven-warpspark',
    name: 'Skaven',
    subTitle: 'Warpspark Clawpack',
    grandAlliance: 'CHAOS',
    accentColor: 'from-lime-600 to-green-800',
    flavorQuote: '‘Remove the limiters! Blast-kill them all, now-now!’ — Grey Seer Snikskreech',
    battleTraits: [
      {
        name: 'Always Three Clawsteps Ahead',
        description: 'Once Per Phase, Enemy Movement Phase\nDeclare: Pick a friendly unit that is not in combat.\nEffect: That unit can use the ‘Normal Move’ ability as if it were your movement phase.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Warpstone-Laced Armour',
        description: 'Once Per Battle, Reaction: Opponent declared an Attack ability and targeted your Stormfiends unit\nUsed By: Your Stormfiends unit.\nEffect: Your Stormfiends unit has Ward (4+) this phase.'
      },
      {
        name: 'Endless Swarm of Rats',
        description: 'Passive\nEffect: When a friendly Clanrats unit uses its ‘Seething Swarm’ ability, you can return D6 slain models to that unit instead of D3.'
      }
    ],
    heroTraits: [
      {
        id: 'sk-ws-ht1',
        name: 'Skilled Manipulator',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general has Ward (4+) while they are within 1" of any friendly Clanrats units.'
      },
      {
        id: 'sk-ws-ht2',
        name: 'Skitterleap',
        type: 'Hero Trait',
        effect: 'Your Hero Phase\nDeclare: Make a casting roll of 2D6.\nEffect: On a 6+, remove your general from the battlefield and set them up again on the battlefield more than 6" from all enemy units. They cannot use Move abilities in the following movement phase.'
      }
    ],
    artefacts: [
      {
        id: 'sk-ws-art1',
        name: 'Cage of Warp Lightning',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase\nDeclare: Pick a visible enemy unit within 6" of your general and roll a dice.\nEffect: On a 2+, the enemy unit has Strike-last this phase. On a 1, inflict 1 mortal damage on your general.'
      },
      {
        id: 'sk-ws-art2',
        name: 'Scurry Away',
        type: 'Artefact of Power',
        effect: 'Any Combat Phase\nEffect: Roll a dice. On a 3+, this unit can immediately use the ‘Retreat’ ability as if it were your movement phase. If it does so, no mortal damage is inflicted on it.'
      }
    ],
    units: [
      {
        id: 'sk-ws-grey-seer',
        name: 'Grey Seer',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '6+',
        control: 2,
        weapons: [
          {
            name: 'Warpstone Staff',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Will of the Horned Rat',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly unit wholly within 13" of this unit to be the target, then roll a dice.\nEffect: On a 3+, add the roll to the target’s control score until the start of your next turn.'
          },
          {
            name: 'Wither',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a visible enemy unit within 13" of this unit to be the target, then make a casting roll of 2D6.\nEffect: On a 6+, inflict D3 mortal damage on the target.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'HERO', 'WIZARD', 'INFANTRY', 'GREY SEER']
      },
      {
        id: 'sk-ws-stormfiends',
        name: 'Stormfiends',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '60mm',
        move: '6"',
        health: 6,
        save: '4+',
        control: 2,
        reinforcementNote: 'This unit has 1 Stormfiend armed with Shock Gauntlets, 1 Stormfiend armed with Windlaunchers and Clubbing Blows, and 1 Stormfiend armed with Ratling Cannons and Clubbing Blows.',
        weapons: [
          {
            name: 'Ratling Cannons',
            type: 'Ranged',
            range: '15"',
            attacks: '3D6',
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Windlaunchers',
            type: 'Ranged',
            range: '15"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-2',
            damage: 'D3'
          },
          {
            name: 'Shock Gauntlets',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Clubbing Blows',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '0',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Shock Gauntlets',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Each time an attack made with this unit’s Shock Gauntlets scores a critical hit, that attack scores D6 hits instead of 1 (make a wound roll for each hit).'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'INFANTRY', 'STORMFIENDS']
      },
      {
        id: 'sk-ws-warp-lightning-cannon',
        name: 'Warp Lightning Cannon',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '3"',
        health: 8,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Warp Lightning Blast',
            type: 'Ranged',
            range: '20"',
            attacks: '2D6',
            toHit: '4+',
            toWound: '-',
            rend: '0',
            damage: '1',
            ability: 'Mortal Damage (See below)'
          },
          {
            name: 'Crew’s Teeth and Knives',
            type: 'Melee',
            range: '1"',
            attacks: 'D6',
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Warp Lightning Blast',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Each attack made with this weapon in a single phase must target the same enemy unit. Each hit inflicts 1 mortal damage on the target and the attack sequence ends.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'WARMACHINE', 'WARP LIGHTNING CANNON']
      },
      {
        id: 'sk-ws-clanrats-a',
        name: 'Clanrats - Unit A',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 1,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (10 models)',
        weapons: [
          {
            name: 'Rusty Blade',
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
            name: 'Seething Swarm',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn\nEffect: You can return D3 slain models to this unit.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'INFANTRY', 'REINFORCEMENTS', 'CLANRATS']
      },
      {
        id: 'sk-ws-clanrats-b',
        name: 'Clanrats - Unit B',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 1,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (10 models)',
        weapons: [
          {
            name: 'Rusty Blade',
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
            name: 'Seething Swarm',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn\nEffect: You can return D3 slain models to this unit.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'INFANTRY', 'REINFORCEMENTS', 'CLANRATS']
      }
    ]
  },

  // 2c. SKAVEN - Crixxit’s Kill-Pack
  {
    id: 'skaven-crixxit',
    name: 'Skaven',
    subTitle: 'Crixxit’s Kill-Pack',
    grandAlliance: 'CHAOS',
    accentColor: 'from-emerald-900 to-zinc-800',
    flavorQuote: "Challenging, this one. Man-things know they are hunted, so they hide-cower. But Crixxit finds them. Now… where is payment? – Deathmaster Crixxit",
    battleTraits: [
      {
        name: 'Cloaked in Shadow',
        description: 'Once Per Turn (Army), Any Combat Phase: Declare: Pick a friendly Hero to use this ability. Then, pick a different friendly unit that has 2 or more models to be the target. Effect: Make a shadow-travel roll of D6. On a 3+, remove the Hero using this ability from the battlefield and set them up again wholly within 6" of the target. They can be set up in combat with any enemy units that are already in combat.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Way of the Skittering Shade',
        description: 'Once Per Battle (Army), Your Movement Phase: Declare: Pick a friendly unit that is wholly within 6" of a battlefield edge to be the target. Effect: Remove the target from the battlefield and set it up again wholly within 3" of a battlefield edge and more than 6" from all enemy units.'
      },
      {
        name: 'Way of the Fiendish Claw',
        description: 'Once Per Battle (Army), Any Combat Phase: Declare: Pick a friendly Hero to be the target. Effect: The target has Strike-first for the rest of the turn.'
      }
    ],
    heroTraits: [
      {
        id: 'sk-cr-ht1',
        name: 'Master of Shadows',
        type: 'Hero Trait',
        effect: 'Passive: When your general uses the ‘Cloaked in Shadow’ ability, add 1 to the shadow-travel roll.'
      },
      {
        id: 'sk-cr-ht2',
        name: 'Murderous Acrobatics',
        type: 'Hero Trait',
        effect: 'Passive: When your general uses the ‘Charge’ ability, they can pass through enemy models.'
      }
    ],
    artefacts: [
      {
        id: 'sk-cr-art1',
        name: 'Just Another Shadow',
        type: 'Artefact of Power',
        effect: 'Passive: While your general is wholly within the combat range of a friendly unit that has 3 or more models, your general has Ward (4+).'
      },
      {
        id: 'sk-cr-art2',
        name: 'Death Screech',
        type: 'Artefact of Power',
        effect: 'Any Combat Phase: Declare: Pick an enemy unit within 6" of your general to be the target. Effect: Roll a dice. On a 3+, for the rest of the turn, subtract 1 from hit rolls for the target’s attacks.'
      }
    ],
    units: [
      {
        id: 'sk-crixxit',
        name: 'Deathmaster Crixxit',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '7"',
        health: 6,
        save: '5+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'The Blades of Thirteen Cuts',
            type: 'Melee',
            range: '1"',
            attacks: 13,
            toHit: '2+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Go-Go, Hunt Them Down',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a visible friendly Gutter Runners unit wholly within 12" of this unit to be the target. Then, roll a dice. Effect: On a 3+, add 1 to charge rolls for the target for the rest of the turn.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'CLANS ESHIN', 'HERO', 'INFANTRY', 'WARD (5+)', 'DEATHMASTER CRIXXIT']
      },
      {
        id: 'sk-deathmaster',
        name: 'Deathmaster',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '7"',
        health: 5,
        save: '5+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Weeping Blade',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: 'D3',
            ability: 'Anti-Hero (+1 Rend), Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Shadowy Killers',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: If the unmodified hit roll for an attack that targets this unit is 1-4, the attack fails and the attack sequence ends.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'CLANS ESHIN', 'HERO', 'INFANTRY', 'WARD (6+)', 'DEATHMASTER']
      },
      {
        id: 'sk-gutter-runners-1',
        name: 'Gutter Runners (Squad 1)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '7"',
        health: 5,
        save: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain. Has 1 Bomb Rat token.',
        weapons: [
          {
            name: 'Eshin Specialist Blades',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Bomb Rats',
            phase: 'Charge',
            type: 'Active',
            effect: 'Once Per Turn (Army), Your Charge Phase: Declare: You can only use this ability if this unit has a Bomb Rat token. Pick an enemy unit within 9" of this unit to be the target. Then, roll a dice. Effect: On a 3+, inflict 1 mortal damage on the target. On a 1-2, remove this unit’s Bomb Rat token from the battlefield.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'CLANS ESHIN', 'INFANTRY', 'REINFORCEMENTS', 'WARD (6+)', 'GUTTER RUNNERS']
      },
      {
        id: 'sk-gutter-runners-2',
        name: 'Gutter Runners (Squad 2)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '7"',
        health: 5,
        save: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain. Has 1 Bomb Rat token.',
        weapons: [
          {
            name: 'Eshin Specialist Blades',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Bomb Rats',
            phase: 'Charge',
            type: 'Active',
            effect: 'Once Per Turn (Army), Your Charge Phase: Declare: You can only use this ability if this unit has a Bomb Rat token. Pick an enemy unit within 9" of this unit to be the target. Then, roll a dice. Effect: On a 3+, inflict 1 mortal damage on the target. On a 1-2, remove this unit’s Bomb Rat token from the battlefield.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'CLANS ESHIN', 'INFANTRY', 'REINFORCEMENTS', 'WARD (6+)', 'GUTTER RUNNERS']
      },
      {
        id: 'sk-night-runners',
        name: 'Night Runners',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '7"',
        health: 10,
        save: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Slings and Poisoned Stars',
            type: 'Ranged',
            range: '10"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Auto-wound), Shoot in Combat'
          },
          {
            name: 'Poisoned Blades',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Smoke Bombs',
            phase: 'Combat',
            type: 'Active',
            effect: 'Once Per Turn (Army), Any Combat Phase: Declare: This unit can only use this ability if it is in combat. Roll a dice. Effect: On a 4+, this unit can immediately use the ‘Retreat’ ability as if it were your movement phase.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'CLANS ESHIN', 'INFANTRY', 'REINFORCEMENTS', 'WARD (6+)', 'NIGHT RUNNERS']
      }
    ]
  },

  // 6. BLADES OF KHORNE - Bloodbound Gore Pilgrims
  {
    id: 'khorne-gorepilgrims',
    name: 'Blades of Khorne',
    subTitle: 'Bloodbound Gore Pilgrims',
    grandAlliance: 'CHAOS',
    accentColor: 'from-red-800 to-rose-900',
    flavorQuote: '‘BLOOD FOR THE BLOOD GOD! SKULLS FOR THE SKULL THRONE!’ — Battle cry loosed from uncounted throats since time immemorial',
    battleTraits: [
      {
        name: 'The Blood Tithe',
        description: 'Passive.\nEffect: Each time a unit is destroyed during the battle, you receive 1 blood tithe point.'
      },
      {
        name: 'Murderlust',
        description: 'Once Per Turn, Any Hero Phase.\nDeclare: Spend 1 blood tithe point and pick up to D3 friendly units.\nEffect: Each of those units can move D6" (roll for each).'
      },
      {
        name: 'Heads Must Roll',
        description: 'Once Per Turn, Any Hero Phase.\nDeclare: Spend 3 blood tithe points and pick up to 3 friendly units.\nEffect: Add 1 to the Rend characteristic of those units’ melee weapons until the start of your next turn.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Favoured of Khorne',
        description: 'Once Per Turn, Start of Your Turn.\nEffect: Roll a dice. On a 2+, you receive 1 blood tithe point.'
      },
      {
        name: 'Blood-Woken Runes',
        description: 'Passive.\nEffect: Friendly units have Ward (5+) if they have used a Fight ability in the same phase.'
      }
    ],
    heroTraits: [
      {
        id: 'kh-gp-ht1',
        name: 'Headhunter',
        type: 'Hero Trait',
        effect: 'Any Combat Phase.\nDeclare: Pick an enemy Hero in combat with your general.\nEffect: Your general has Strike-first this phase, but all attacks made by them this phase must target that enemy Hero.'
      },
      {
        id: 'kh-gp-ht2',
        name: 'Unholy Flames',
        type: 'Hero Trait',
        effect: 'Your Hero Phase.\nDeclare: Pick a visible friendly unit wholly within 16" of your general, then make a chanting roll of D6.\nEffect: On a 4+, add 1 to the Rend characteristic of that unit’s melee weapons until the start of your next turn.'
      }
    ],
    artefacts: [
      {
        id: 'kh-gp-art1',
        name: 'The Crimson Plate',
        type: 'Artefact of Power',
        effect: 'Passive.\nEffect: Your general has Ward (5+).'
      },
      {
        id: 'kh-gp-art2',
        name: 'Resanguination',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase.\nDeclare: Pick a visible friendly unit wholly within 16" of your general, then make a chanting roll of D6.\nEffect: On a 3+, Heal (D3) that unit.'
      }
    ],
    units: [
      {
        id: 'kh-slaughterpriest',
        name: 'Slaughterpriest',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '5"',
        health: 6,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Hackblade and Wrath-hammer',
            type: 'Melee',
            range: '2"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Blood Boil',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase.\nDeclare: Pick a visible enemy unit within 16" of this unit to be the target, then make a chanting roll of D6.\nEffect: On a 4+, inflict D3 mortal damage on the target.'
          },
          {
            name: 'Blood Sacrifice',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase.\nDeclare: Pick a friendly unit within this unit’s combat range to be the target.\nEffect: Roll a dice. On a 2+, inflict D3 mortal damage on the target and you gain 1 blood tithe point.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'HERO', 'PRIEST', 'INFANTRY', 'SLAUGHTERPRIEST']
      },
      {
        id: 'kh-skullcrushers',
        name: 'Mighty Skullcrushers',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '90x52mm',
        move: '8"',
        health: 5,
        save: '2+',
        control: 2,
        weapons: [
          {
            name: 'Bloodglaive',
            type: 'Melee',
            range: '2"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Charge (+1 Damage)'
          },
          {
            name: 'Juggernaut’s Brazen Hooves',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Brass Stampede',
            phase: 'Charge',
            type: 'Active',
            effect: 'Your Charge Phase.\nDeclare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target, then roll a dice.\nEffect: On a 2+, inflict 1 mortal damage on the target.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'CAVALRY', 'MIGHTY SKULLCRUSHERS']
      },
      {
        id: 'kh-blood-warriors-1',
        name: 'Blood Warriors (Unit A)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '5"',
        health: 2,
        save: '3+',
        control: 1,
        weapons: [
          {
            name: 'Goreaxe and Gorefist',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'No Respite',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive.\nEffect: Each time a model in this unit is slain, you can pick an enemy unit in combat with this unit and roll a dice. On a 4+, inflict 1 mortal damage on that enemy unit.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'INFANTRY', 'BLOOD WARRIORS']
      },
      {
        id: 'kh-blood-warriors-2',
        name: 'Blood Warriors (Unit B)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '5"',
        health: 2,
        save: '3+',
        control: 1,
        weapons: [
          {
            name: 'Goreaxe and Gorefist',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'No Respite',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive.\nEffect: Each time a model in this unit is slain, you can pick an enemy unit in combat with this unit and roll a dice. On a 4+, inflict 1 mortal damage on that enemy unit.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'INFANTRY', 'BLOOD WARRIORS']
      },
      {
        id: 'kh-bloodreavers',
        name: 'Bloodreavers',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '5"',
        health: 1,
        save: '6+',
        control: 1,
        isReinforcement: true,
        weapons: [
          {
            name: 'Reaver Blades',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Frenzied Devotion',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn.\nEffect: If this unit is within 8" of your general, you can return D3 slain models to this unit.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'INFANTRY', 'REINFORCEMENTS', 'BLOODREAVERS']
      }
    ]
  },

  // 6b. BLADES OF KHORNE - Fangs of the Blood God
  {
    id: 'khorne-bloodgod',
    name: 'Blades of Khorne',
    subTitle: 'Fangs of the Blood God',
    grandAlliance: 'CHAOS',
    accentColor: 'from-red-900 to-amber-800',
    flavorQuote: '‘He comes. I hear him. The Gnashing One, the Time-Render, the Bane that Howls in the Night. Take up blades. Red work to do.’ — Packlord Kar',
    battleTraits: [
      {
        name: 'The Quarry',
        description: 'Start of Battle Round.\nEffect: If no enemy units are the quarry, pick an enemy unit to be the quarry (you can pick an enemy unit in reserve).'
      },
      {
        name: 'Blood-Drenched',
        description: 'Once Per Turn, End of Any Turn.\nDeclare: Pick a friendly unit that slew any enemy models using a Fight ability this turn to be the target.\nEffect: For the rest of the battle, the target’s melee weapons have Crit (Mortal).'
      }
    ],
    regimentAbilities: [
      {
        name: 'The Scent of Blood',
        description: 'Passive.\nEffect: Add 1 to hit rolls and add 1 to wound rolls for combat attacks that target an enemy unit that had any damage points allocated to it this turn.'
      },
      {
        name: 'Savagery Upon Savagery',
        description: 'Once Per Battle, Any Combat Phase.\nDeclare: Pick a friendly unit in combat to be the target.\nEffect: For the rest of the turn, add 1 to the Attacks characteristic of the target’s melee weapons. If the target is a Hero, add D3 to the Attacks characteristic of its melee weapons instead.'
      }
    ],
    heroTraits: [
      {
        id: 'kh-bg-ht1',
        name: 'Killing Pounce',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Any Charge Phase.\nEffect: For the rest of the turn, when making charge rolls for your general, you can roll an additional dice, to a maximum of 3, but if you do, they must finish that charge in combat with the quarry.'
      },
      {
        id: 'kh-bg-ht2',
        name: 'Evasive Hunter',
        type: 'Hero Trait',
        effect: 'Passive.\nEffect: Subtract 1 from hit rolls and wound rolls for shooting attacks that target your general.'
      }
    ],
    artefacts: [
      {
        id: 'kh-bg-art1',
        name: 'Sustained by Gore',
        type: 'Artefact of Power',
        effect: 'End of Any Turn.\nEffect: Heal (D3) your general.'
      },
      {
        id: 'kh-bg-art2',
        name: 'Furious Bites',
        type: 'Artefact of Power',
        effect: 'End of Any Turn.\nEffect: If your general is in combat with the quarry, inflict D3 mortal damage on the quarry.'
      }
    ],
    units: [
      {
        id: 'kh-karanak',
        name: 'Karanak',
        role: 'Hero',
        modelCount: 1,
        baseSize: '75x42mm',
        move: '8"',
        health: 7,
        save: '5+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Savage Maws and Goreslick Claws',
            type: 'Melee',
            range: '2"',
            attacks: 6,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Anti-Hero (+1 Rend)'
          }
        ],
        abilities: [
          {
            name: 'Stalk the Prey',
            phase: 'Hero',
            type: 'Active',
            effect: 'Any Hero Phase.\nEffect: This unit can move D6". It cannot end that move in combat unless it was in combat at the start of that move and, if there is an enemy quarry on the battlefield, it must end that move closer to the quarry.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'HERO', 'BEAST', 'WARD (6+)', 'KARANAK']
      },
      {
        id: 'kh-flesh-hounds-1',
        name: 'Flesh Hounds (Pack A)',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '8"',
        health: 2,
        save: '6+',
        ward: '6+',
        control: 1,
        isReinforcement: true,
        weapons: [
          {
            name: 'Blood-dark Claws',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Unflagging Hunters',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Passive.\nEffect: Add 1 to charge rolls for this unit.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'BEAST', 'WARD (6+)', 'REINFORCEMENTS', 'FLESH HOUNDS']
      },
      {
        id: 'kh-flesh-hounds-2',
        name: 'Flesh Hounds (Pack B)',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '8"',
        health: 2,
        save: '6+',
        ward: '6+',
        control: 1,
        isReinforcement: true,
        weapons: [
          {
            name: 'Blood-dark Claws',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Unflagging Hunters',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Passive.\nEffect: Add 1 to charge rolls for this unit.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'BEAST', 'WARD (6+)', 'REINFORCEMENTS', 'FLESH HOUNDS']
      },
      {
        id: 'kh-claws-of-karanak',
        name: 'Claws of Karanak',
        role: 'Infantry',
        modelCount: 8,
        baseSize: '28.5mm',
        move: '6"',
        health: 1,
        save: '5+',
        control: 1,
        isReinforcement: true,
        weapons: [
          {
            name: 'Weapons of the Hunt',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Crit (2 Hits)'
          }
        ],
        abilities: [
          {
            name: 'Pack Hunters',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase.\nDeclare: Pick an enemy unit in combat with both this unit and a friendly Flesh Hounds unit to be the target.\nEffect: For the rest of the turn, this unit’s combat attacks that target that enemy unit score critical hits on unmodified hit rolls of 5+.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'INFANTRY', 'REINFORCEMENTS', 'CLAWS OF KARANAK']
      }
    ]
  },

  // 8. DISCIPLES OF TZEENTCH - Fluxblade Coven
  {
    id: 'tzeentch-fluxblade',
    name: 'Disciples of Tzeentch',
    subTitle: 'Fluxblade Coven',
    grandAlliance: 'CHAOS',
    accentColor: 'from-blue-600 to-cyan-500',
    flavorQuote: '‘Fate consumes souls as hungrily as the fiercest inferno.’ — Xavistilix Silverstaff, Magister of Tzeentch',
    battleTraits: [
      {
        name: 'Masters of Destiny',
        description: 'Once Per Battle, Start of First Battle Round.\nEffect: Roll 9 dice. These are your destiny dice. Keep them to one side.\n\nBefore making any of the following rolls for a friendly unit, you can spend 1 or more of your destiny dice to replace that roll:\n• Casting roll (spend 2)\n• Run roll (spend 1)\n• Charge roll (spend 2)\n• Hit roll (spend 1)\n• Wound roll (spend 1)\n• Save roll (spend 1)\n\nThe spent dice are treated as the result of the roll. A save roll substituted in this way cannot be modified by the attacking weapon’s Rend characteristic. If multiple dice are required, you must spend that number of destiny dice, and they replace the roll as a whole.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Transient Forms',
        description: 'Passive\nEffect: Each time a friendly Kairic Acolytes model is slain by a combat attack, roll a dice. On a 4+, return 1 slain model to a friendly Tzaangors unit within 9" of that Kairic Acolytes model.'
      },
      {
        name: 'Eternal Conflagration',
        description: 'Passive\nEffect: Add 1 to the Rend characteristic of ranged weapons used by friendly Flamers of Tzeentch units.'
      }
    ],
    heroTraits: [
      {
        id: 'tz-fc-ht1',
        name: 'Shield of Fate',
        type: 'Hero Trait',
        effect: 'Your Hero Phase.\nDeclare: Pick a friendly unit wholly within 18" of this unit to be the target.\nEffect: Make a casting roll of 2D6. If the roll is 6 or more, until the start of your next turn, the target has Ward (6+). If the target already has Ward (6+), it has Ward (5+) instead.'
      },
      {
        id: 'tz-fc-ht2',
        name: 'Glimpse the Future',
        type: 'Hero Trait',
        effect: 'Your Hero Phase.\nDeclare: You can only use this ability if you have fewer than 6 destiny dice.\nEffect: Make a casting roll of 2D6. If the roll is 7 or more, roll a dice and add it to your destiny dice.'
      }
    ],
    artefacts: [
      {
        id: 'tz-fc-art1',
        name: 'Daemonheart',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase.\nDeclare: Pick an enemy unit within 1" of this unit to be the target.\nEffect: Inflict an amount of mortal damage on the target equal to the current battle round number.'
      },
      {
        id: 'tz-fc-art2',
        name: 'Timeslip Pendant',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase.\nDeclare: Pick an enemy unit within 9" of this unit to be the target.\nEffect: The target has the Strike-last effect for the rest of the phase.'
      }
    ],
    units: [
      {
        id: 'tz-fc-magister',
        name: 'Magister on Disc of Tzeentch',
        role: 'Hero',
        modelCount: 1,
        baseSize: '50mm',
        move: '14"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Tzeentchian Runestaff',
            type: 'Ranged',
            range: '18"',
            attacks: 1,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: 'D3'
          },
          {
            name: 'Warpsteel Sword',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: 'D3'
          },
          {
            name: "Disc's Teeth and Horns",
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Bolt of Change',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase.\nDeclare: Pick a visible enemy unit within 18" of this unit to be the target.\nEffect: Make a casting roll of 2D6. On a 6+, inflict D3 mortal damage on the target. If any models are slain by this ability, you can return 1 slain model to a friendly Tzaangors unit wholly within 18" of this unit.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'HERO', 'WIZARD', 'CAVALRY', 'FLY', 'MAGISTER']
      },
      {
        id: 'tz-fc-flamers',
        name: 'Flamers of Tzeentch',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '32mm',
        move: '9"',
        health: 2,
        save: '5+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Wyrdflame',
            type: 'Ranged',
            range: '12"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: 'D3'
          },
          {
            name: 'Flaming Maws',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Capricious Wyrdflame',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to hit rolls for this unit’s Wyrdflame attacks if the target unit has 5 or more models.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'INFANTRY', 'FLY', 'WARD (6+)', 'FLAMERS OF TZEENTCH']
      },
      {
        id: 'tz-fc-screamers',
        name: 'Screamers of Tzeentch',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '32mm',
        move: '14"',
        health: 3,
        save: '5+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Lamprey Bite',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Slashing Fins',
            phase: 'Movement',
            type: 'Active',
            effect: 'Your Movement Phase.\nDeclare: If this unit made a Normal move or Run move this phase, pick an enemy unit that this unit passed across to be the target.\nEffect: Roll a dice for each model in this unit. For each 4+, inflict 1 mortal damage on the target.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'BEAST', 'FLY', 'WARD (6+)', 'SCREAMERS OF TZEENTCH']
      },
      {
        id: 'tz-fc-tzaangors-a',
        name: 'Tzaangors - Unit A',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '6"',
        health: 2,
        save: '5+',
        control: 1,
        isReinforcement: true,
        weapons: [
          {
            name: 'Savage Blade and Vicious Beak',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Long-Planned Strike',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive\nEffect: While this unit is wholly within enemy territory, its melee weapons have Crit (2 Hits).'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'INFANTRY', 'REINFORCEMENTS', 'TZAANGORS']
      },
      {
        id: 'tz-fc-tzaangors-b',
        name: 'Tzaangors - Unit B',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '6"',
        health: 2,
        save: '5+',
        control: 1,
        isReinforcement: true,
        weapons: [
          {
            name: 'Savage Blade and Vicious Beak',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Long-Planned Strike',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive\nEffect: While this unit is wholly within enemy territory, its melee weapons have Crit (2 Hits).'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'INFANTRY', 'REINFORCEMENTS', 'TZAANGORS']
      },
      {
        id: 'tz-fc-acolytes',
        name: 'Kairic Acolytes',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '5"',
        health: 1,
        save: '5+',
        control: 1,
        isReinforcement: true,
        weapons: [
          {
            name: 'Sorcerous Bolts',
            type: 'Ranged',
            range: '18"',
            attacks: 1,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Cursed Blade',
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
            name: 'Gestalt Sorcery',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Your Shooting Phase.\nEffect: Make a casting roll of 2D6. On a 6+, for the rest of the phase, add 1 to the Rend characteristic of Sorcerous Bolts used by this unit.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'INFANTRY', 'REINFORCEMENTS', 'KAIRIC ACOLYTES']
      }
    ]
  },

  // 8b. DISCIPLES OF TZEENTCH - Tzaangor Warflock
  {
    id: 'tzeentch-warflock',
    name: 'Disciples of Tzeentch',
    subTitle: 'Tzaangor Warflock',
    grandAlliance: 'CHAOS',
    accentColor: 'from-cyan-600 to-indigo-800',
    flavorQuote: '‘A sacred change is coming, city-dwellers. Kawaaaaark! Soon you shall be kin to us, remade to serve the Change God!’ — Shaman Takz’ykan',
    battleTraits: [
      {
        name: 'Fated Arrival',
        description: 'Your Movement Phase.\nDeclare: You can only use this ability from battle round 2 onwards. Pick your Tzaangor Enlightened unit if it has not been set up.\nEffect: Set up that unit wholly within friendly territory, within 1" of the battlefield edge and more than 6" from all enemy units.\n\nReserve Setup: Your Tzaangor Enlightened unit is not set up during deployment.'
      },
      {
        name: 'Predict the Future',
        description: 'Your Hero Phase.\nEffect: Look at up to 3 cards from the top of the battle tactic deck. You can return each of those cards face down to either the top or bottom of the battle tactic deck in any order.'
      },
      {
        name: 'Cheat Destiny',
        description: 'Reaction: You used a command on a battle tactic card.\nEffect: Instead of discarding that battle tactic card, return it face down to the bottom of the battle tactic deck.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Constant Flux',
        description: 'Passive\nEffect: Subtract 1 from the Rend characteristic of weapons that target friendly units while you are the underdog.'
      },
      {
        name: 'Arcane Ritualists',
        description: 'Passive\nEffect: Add 1 to casting rolls for your general while they are wholly within 6" of another friendly unit.'
      }
    ],
    heroTraits: [
      {
        id: 'tz-tw-ht1',
        name: 'Predicted Strike',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Enemy Movement Phase.\nDeclare: Pick a visible friendly unit wholly within 12" of this unit that is not in combat to be the target.\nEffect: Roll a D6. The target can move a distance up to the value of the roll. It cannot move into combat or end that move within enemy combat range.'
      },
      {
        id: 'tz-tw-ht2',
        name: 'Fold Reality',
        type: 'Hero Trait',
        effect: 'Your Hero Phase.\nDeclare: Pick a visible friendly unit wholly within 12" of this unit to be the target.\nEffect: Make a casting roll of 2D6. On a 6+, remove the target from the battlefield and set it up again wholly within 12" of your general and more than 6" from all enemy units.'
      }
    ],
    artefacts: [
      {
        id: 'tz-tw-art1',
        name: 'Infernal Gateway',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase.\nDeclare: Pick a visible enemy unit within 18" of this unit to be the target.\nEffect: Make a casting roll of 2D6. On a 5+, roll 3 dice (or a number of dice equal to the number of discarded battle tactic cards in the battle tactic discard pile, whichever is higher). For each 4+, inflict 1 mortal damage on the target.'
      },
      {
        id: 'tz-tw-art2',
        name: 'Mutagenic Sorcery',
        type: 'Artefact of Power',
        effect: 'End of Any Turn.\nDeclare: Pick a visible enemy unit within 12" of this unit that is in combat with a friendly Tzaangors unit to be the target.\nEffect: Roll a D3. On a 2+:\n• Inflict an amount of mortal damage on the target equal to the roll.\n• Return 1 slain model to that friendly Tzaangors unit.'
      }
    ],
    units: [
      {
        id: 'tz-tw-shaman',
        name: 'Tzaangor Shaman',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '14"',
        health: 6,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Staff of Change and Ritual Dagger',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          },
          {
            name: "Disc's Teeth and Horns",
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Mutative Aura',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase.\nDeclare: Pick a visible enemy unit within 18" of this unit to be the target.\nEffect: Make a casting roll of 2D6. On a 7+, until the start of your next turn, each time an unmodified hit roll of 1 is made for a combat attack by the target, inflict 1 mortal damage on the target after the attack sequence is resolved.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'HERO', 'WIZARD', 'CAVALRY', 'FLY', 'TZAANGOR SHAMAN']
      },
      {
        id: 'tz-tw-enlightened',
        name: 'Tzaangor Enlightened',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '40mm',
        move: '14"',
        health: 4,
        save: '4+',
        control: 1,
        weapons: [
          {
            name: 'Tzeentchian Spear and Vicious Beak',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: "Disc's Teeth and Horns",
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Deliver on Fate',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to charge rolls for this unit while you are the underdog.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'CAVALRY', 'FLY', 'TZAANGOR ENLIGHTENED']
      },
      {
        id: 'tz-tw-skyfires',
        name: 'Tzaangor Skyfires',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '40mm',
        move: '14"',
        health: 4,
        save: '4+',
        control: 1,
        weapons: [
          {
            name: 'Arrow of Fate',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Bow Stave and Vicious Beak',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          },
          {
            name: "Disc's Teeth and Horns",
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Destined Quarry',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Your Shooting Phase.\nDeclare: Pick an enemy unit that was damaged by attacks made by this unit this phase to be the target.\nEffect: For the rest of the turn, add 1 to hit rolls for combat attacks made by friendly units that target the target unit.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'CAVALRY', 'FLY', 'TZAANGOR SKYFIRES']
      },
      {
        id: 'tz-tw-tzaangors',
        name: 'Tzaangors',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '6"',
        health: 2,
        save: '5+',
        control: 1,
        weapons: [
          {
            name: 'Savage Blades and Vicious Beak',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Eldritch Raiders',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to wound rolls for this unit’s melee attacks while it is wholly within enemy territory.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'INFANTRY', 'TZAANGORS']
      }
    ]
  },

  // 12. HEDONITES OF SLAANESH - Blades of the Lurid Dream
  {
    id: 'slaanesh-lurid',
    name: 'Hedonites of Slaanesh',
    subTitle: 'Blades of the Lurid Dream',
    grandAlliance: 'CHAOS',
    accentColor: 'from-purple-800 to-pink-600',
    flavorQuote: '‘Swiftly, my paramours! The Dark Prince spies unfortunates stooped beneath the weight of reality. We must save them from their sanity!’ — Hiraxith of the Six Slicing Shards',
    battleTraits: [
      {
        name: 'Temptations of Slaanesh',
        description: 'Passive\nEffect: At the start of each battle round, you receive 6 temptation dice. Each time your opponent makes a failed hit roll, a failed wound roll or a failed save roll, you can offer them a temptation dice. If they accept your offer, that roll is replaced with a 6. Rolls replaced in this way cannot be re-rolled or modified.\n\nEach time your opponent accepts your offer of a temptation dice, you gain D6 depravity points. Each time your opponent rejects your offer of a temptation dice, inflict D3 mortal damage on the unit for which the roll was made.\n\nYou cannot offer your opponent a temptation dice for the same enemy unit more than once per phase. At the end of the battle round, all remaining temptation dice are lost.'
      },
      {
        name: 'Depravity Table',
        description: 'Passive\nEffect: All friendly units gain passive abilities from the table below based on the number of depravity points you have. These abilities are cumulative:\n• 12+ DP - Tantalising Torment: This unit can use a Run ability and still use Charge abilities later in the turn.\n• 18+ DP - Sadistic Spite: This unit’s melee weapons have Crit (Mortal).\n• 24+ DP - Oblivious Indulgence: This unit has Ward (5+).'
      }
    ],
    regimentAbilities: [
      {
        name: 'Unparalleled Speed',
        description: 'Once Per Battle, Any Combat Phase\nDeclare: Pick a friendly unit to use this ability.\nEffect: That unit has Strike-first this phase.'
      },
      {
        name: 'Locus of Diversion',
        description: 'Your Movement Phase\nDeclare: Pick a friendly unit to use this ability.\nEffect: For the rest of the turn, that unit can use Retreat ability and still use Shoot and/or Charge abilities later in the turn.'
      }
    ],
    heroTraits: [
      {
        id: 'sl-ld-ht1',
        name: 'Sceptre of Domination',
        type: 'Hero Trait',
        effect: 'Any Combat Phase\nDeclare: Roll a dice for each enemy unit in combat with your general.\nEffect: On a 5+, the unit being rolled for has Strike-last this phase.'
      },
      {
        id: 'sl-ld-ht2',
        name: 'Cacophonic Choir',
        type: 'Hero Trait',
        effect: 'Your Hero Phase\nDeclare: Make a casting roll of 2D6.\nEffect: On a 6+, make a cacophony roll of D6. Inflict D3 mortal damage on each enemy unit (roll for each) within 6" of your general that has a Control characteristic less than the cacophony roll.'
      }
    ],
    artefacts: [
      {
        id: 'sl-ld-art1',
        name: 'Twisted Mirror',
        type: 'Artefact of Power',
        effect: 'Once Per Turn, Your Shooting Phase\nDeclare: Pick an enemy unit within 9" of your general and roll a dice.\nEffect: On a 4+, subtract 1 from save rolls for that unit until the start of your next turn.'
      },
      {
        id: 'sl-ld-art2',
        name: 'Pendant of Slaanesh',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase\nEffect: Heal (D3) your general.'
      }
    ],
    units: [
      {
        id: 'sl-ld-shardspeaker',
        name: 'Shardspeaker of Slaanesh',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Haze Staff',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Vision of Damnation',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Make a casting roll of 2D6.\nEffect: On a 6+, roll 6 dice. For each 4+, you receive 1 depravity point.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'HERO', 'WIZARD', 'INFANTRY', 'SHARDSPEAKER OF SLAANESH']
      },
      {
        id: 'sl-ld-slickblade-seekers',
        name: 'Slickblade Seekers',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '75x42mm',
        move: '12"',
        health: 4,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (5 models)',
        weapons: [
          {
            name: 'Slickblade Glaive',
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
            name: 'Exalted Steed’s Poisoned Tongue',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Unrivalled Velocity',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Passive\nEffect: You can re-roll charge rolls for this unit.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'CAVALRY', 'REINFORCEMENTS', 'SLICKBLADE SEEKERS']
      },
      {
        id: 'sl-ld-slaangor-fiendbloods',
        name: 'Slaangor Fiendbloods',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '6"',
        health: 3,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (2 models with Razor-sharp Claws, 1 model with Razor-sharp Claw and Gilded Weapon)',
        weapons: [
          {
            name: 'Razor-sharp Claws',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Razor-sharp Claw and Gilded Weapon',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Slaughter at Any Cost',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Enemy Shooting Phase\nDeclare: This unit can use this ability if any damage points were allocated to it this turn.\nEffect: This unit can use the "Normal Move" ability as if it were your movement phase.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'INFANTRY', 'REINFORCEMENTS', 'SLAANGOR FIENDBLOODS']
      },
      {
        id: 'sl-ld-blissbarb-archers-a',
        name: 'Blissbarb Archers - Unit A',
        role: 'Infantry',
        modelCount: 6,
        baseSize: '28.5mm',
        move: '6"',
        health: 1,
        save: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit: 5 Blissbarb Archers and 1 Blissbrew Homonculus',
        weapons: [
          {
            name: 'Blissbarb Bow',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Sybarite Blade',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Light-Footed Killers',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Passive\nEffect: This unit can use Shoot abilities even if it used a Run ability in the same turn.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'INFANTRY', 'REINFORCEMENTS', 'BLISSBARB ARCHERS']
      },
      {
        id: 'sl-ld-blissbarb-archers-b',
        name: 'Blissbarb Archers - Unit B',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '28.5mm',
        move: '6"',
        health: 1,
        save: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit: 5 Blissbarb Archers',
        weapons: [
          {
            name: 'Blissbarb Bow',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Sybarite Blade',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Light-Footed Killers',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Passive\nEffect: This unit can use Shoot abilities even if it used a Run ability in the same turn.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'INFANTRY', 'REINFORCEMENTS', 'BLISSBARB ARCHERS']
      }
    ]
  },

  // 12b. HEDONITES OF SLAANESH - Epicurean Revellers
  {
    id: 'slaanesh-epicurean',
    name: 'Hedonites of Slaanesh',
    subTitle: 'Epicurean Revellers',
    grandAlliance: 'CHAOS',
    accentColor: 'from-fuchsia-900 via-pink-700 to-indigo-900',
    flavorQuote: '‘The taste of a sweet peach. A bite torn from a still-beating heart. Both are desires. The question is merely one of degrees.’ — Sae’Tiss, Who Tends The Galleries Of Ten Thousand Screams',
    battleTraits: [
      {
        name: 'Favour Most Fickle',
        description: 'Passive\nEffect: The following effects apply based on the number of friendly units on the battlefield. These effects are not cumulative:\n• 5 or more units: Add 2 to the Control characteristic of friendly units.\n• 4 units: Add 1 to hit rolls and wound rolls for friendly units’ combat attacks, including attacks made with Companion weapons.\n• 3 units: Add 1 to run rolls and charge rolls for friendly units.\n• 2 units: Friendly units have Ward (5+).\n• 1 unit: Add 2 to the Attacks characteristic of friendly units’ melee weapons, including Companion weapons.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Bringers of Degradation',
        description: 'Passive\nEffect: When players are alternating picking units to use a Fight ability, when it is your turn to pick a unit, you can pick 2 friendly Daemonettes units instead of 1 unit. Resolve the second Fight ability immediately after the first.'
      },
      {
        name: 'Daemonic Onslaught',
        description: 'Once Per Battle, Deployment Phase\nDeclare: Pick a friendly Seekers or Fiends unit wholly within 12" of your general to be the target.\nEffect: The target can use the "Normal Move" ability as if it were your movement phase.'
      }
    ],
    heroTraits: [
      {
        id: 'sl-er-ht1',
        name: 'Twisted Grace',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: When your general makes a pile-in move, if they charged in the same turn, add D6" to the distance they can move.'
      },
      {
        id: 'sl-er-ht2',
        name: 'High Courtiers',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: While your general is wholly within the combat range of a friendly Daemonettes unit, both units have Ward (5+).'
      }
    ],
    artefacts: [
      {
        id: 'sl-er-art1',
        name: 'Excess of Violence',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase\nDeclare: Pick a visible friendly unit wholly within 12" of your general to be the target.\nEffect: The target’s melee weapons, including Companion weapons, have Crit (2 Hits) until the start of your next turn.'
      },
      {
        id: 'sl-er-art2',
        name: 'Irresistible Soul-Musk',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Your Movement Phase\nDeclare: Pick a visible friendly Seekers or Fiends unit wholly within 12" of your general to be the target.\nEffect: Remove the target from the battlefield and set it up again on the battlefield more than 6" from all enemy units.'
      }
    ],
    units: [
      {
        id: 'sl-er-thricefold-discord',
        name: 'Thricefold Discord',
        role: 'Hero',
        modelCount: 3,
        baseSize: '25mm',
        move: '6"',
        health: 3,
        save: '5+',
        ward: '5+',
        control: 2,
        weapons: [
          {
            name: 'Thricefold Arsenal',
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
            name: 'Thricefold Court',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Each model in this unit is treated as an individual unit when determining the effect of the "Favour Most Fickle" battle trait.'
          },
          {
            name: 'Dispensers of Favour',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick up to X different friendly units wholly within 12" of this unit to be the targets, where X is the number of models in this unit. Then, make a casting roll of 2D6.\nEffect: On a 6+, apply the relevant effect to each target:\n• Daemonettes: The target’s weapons have Anti-charge (+1 Rend) until the start of your next turn.\n• Seekers: Add 2" to the target’s Move characteristic until the start of your next turn.\n• Fiends: Add 1 to hit rolls for the target’s combat attacks until the start of your next turn.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'HERO', 'WIZARD', 'INFANTRY', 'WARD (5+)', 'THRICEFOLD DISCORD']
      },
      {
        id: 'sl-er-fiends',
        name: 'Fiends',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '10"',
        health: 4,
        save: '5+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Deadly Pincers and Barbed Stinger',
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
            name: 'Soporific Musk',
            phase: 'Charge',
            type: 'Active',
            effect: 'Once Per Turn (Army), Any Charge Phase\nDeclare: If this unit is not in combat, pick a visible enemy unit within 9" of it to be the target. If this unit is in combat, pick an enemy unit in combat with it to be the target.\nEffect: Roll a dice. On a 4+, the target has Strike-last for the rest of the turn.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'BEAST', 'WARD (6+)', 'FIENDS']
      },
      {
        id: 'sl-er-daemonettes-a',
        name: 'Daemonettes - Unit A',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 1,
        save: '6+',
        ward: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (10 models)',
        weapons: [
          {
            name: 'Piercing Claws',
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
            name: 'Lithe and Swift',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to the Attacks characteristic of this unit’s Piercing Claws if it charged in the same turn.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'INFANTRY', 'REINFORCEMENTS', 'WARD (6+)', 'DAEMONETTES']
      },
      {
        id: 'sl-er-daemonettes-b',
        name: 'Daemonettes - Unit B',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 1,
        save: '6+',
        ward: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (10 models)',
        weapons: [
          {
            name: 'Piercing Claws',
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
            name: 'Lithe and Swift',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to the Attacks characteristic of this unit’s Piercing Claws if it charged in the same turn.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'INFANTRY', 'REINFORCEMENTS', 'WARD (6+)', 'DAEMONETTES']
      },
      {
        id: 'sl-er-seekers',
        name: 'Seekers',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '14"',
        health: 3,
        save: '6+',
        ward: '6+',
        control: 1,
        weapons: [
          {
            name: 'Agonising Claws',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Anti-Cavalry (+1 Rend)'
          },
          {
            name: 'Steed’s Poisoned Tongue',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Quicksilver Speed',
            phase: 'Movement',
            type: 'Passive',
            effect: 'Passive\nEffect: When making run rolls for this unit, if you roll a 1-3, you can use a value of 4 instead.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'CAVALRY', 'WARD (6+)', 'SEEKERS']
      }
    ]
  },

  // 13. HELSMITHS OF HASHUT - Helforge Host
  {
    id: 'hashut-helforge',
    name: 'Helmsmiths of Hashut',
    subTitle: 'Helforge Host',
    grandAlliance: 'CHAOS',
    accentColor: 'from-amber-900 via-red-950 to-stone-900',
    flavorQuote: '‘Lord Borlok desires seventeen caches of emberstone. He desires the tomb-ash of this land’s old princes and queens. Most fervently, he desires the thuggish brutes squatting here be chastised. See it done.’ — Vurgen, Second Son of Clan Gutar',
    battleTraits: [
      {
        name: 'Harness Daemonic Power',
        description: 'Once Per Turn (Army), Your Hero Phase\nEffect: Remove all daemonic power points (DPP) from each friendly unit. Then, you gain an amount of DPP equal to the current battle round number + 1. Allocate those DPP to friendly units (to a maximum of 3 DPP per unit). All unallocated DPP are lost.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Grinding Advance',
        description: 'Once Per Battle, Deployment Phase\nDeclare: Pick up to 2 friendly Infernal Cohort units to be the targets.\nEffect: Each target can immediately move up to 3", but cannot use Charge abilities in the first battle round.'
      },
      {
        name: 'Suppressive Bombardment',
        description: 'Once Per Turn, Your Shooting Phase\nDeclare: Pick an enemy Infantry unit that had any damage points allocated to it this turn from shooting attacks made by a friendly Tormentor Bombard to be the target.\nEffect: Until the start of your next turn, subtract 1 from the charge roll for each charge ability used by the target (to a minimum of 1).'
      }
    ],
    heroTraits: [
      {
        id: 'ha-hf-ht1',
        name: 'Amulet of Burning Hate',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Any Combat Phase\nEffect: For the rest of the turn, the general’s weapons have Crit (Mortal) on an unmodified hit roll of 5+, rather than only on an unmodified hit roll of 6.'
      },
      {
        id: 'ha-hf-ht2',
        name: 'Chalice of Darkness',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Your Shooting Phase\nDeclare: Pick a visible enemy unit within 12" of the general to be the target.\nEffect: Inflict D3 mortal damage on the target.'
      }
    ],
    artefacts: [
      {
        id: 'ha-hf-art1',
        name: 'Talisman of Obsidian',
        type: 'Artefact of Power',
        effect: 'Passive\nEffect: Ignore the first damage point allocated to your general in each phase.'
      },
      {
        id: 'ha-hf-art2',
        name: 'Scroll of Petrification',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Hero Phase\nEffect: For the rest of the turn, the general has Ward (2+), but cannot use abilities and cannot be picked as the target of friendly abilities.'
      }
    ],
    units: [
      {
        id: 'ha-hf-war-despot',
        name: 'War Despot',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '4"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Daemonflame Glaive',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Black-hearted Conqueror',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: While this unit has any DPP, friendly units with 0 DPP count as having 1 DPP while they are wholly within 6" of this unit and visible to it. For each DPP this unit has, add 3" to the range of this ability.'
          }
        ],
        keywords: ['CHAOS', 'HELSMITHS OF HASHUT', 'HERO', 'INFANTRY', 'WAR DESPOT']
      },
      {
        id: 'ha-hf-dominator-engine',
        name: 'Dominator Engine with Immolation Cannons',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '105x70mm',
        move: '6"',
        health: 10,
        save: '2+',
        control: 2,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit: Arrives in Battle Round 3',
        weapons: [
          {
            name: 'Immolation Cannons',
            type: 'Ranged',
            range: '8"',
            attacks: 5,
            toHit: '2+',
            toWound: '4+',
            rend: '-1',
            damage: 'D3',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Horns and Pummelling Strikes',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Daemonic Strength',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: For each DPP this unit has:\n• Add 1" to this unit’s Move characteristic.\n• Add 1 to the Attacks characteristic of this unit’s weapons.'
          }
        ],
        keywords: ['CHAOS', 'HELSMITHS OF HASHUT', 'WAR MACHINE', 'REINFORCEMENTS', 'DOMINATOR ENGINE']
      },
      {
        id: 'ha-hf-tormentor-bombard',
        name: 'Tormentor Bombard',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '100mm',
        move: '4"',
        health: 8,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Torrent of Ruinous Energy',
            type: 'Ranged',
            range: '30"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Anti-Cavalry (+1 Rend), Anti-Infantry (+1 Rend)'
          },
          {
            name: 'Artillerist Weapons',
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
            name: 'Calculated Trajectory',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to hit rolls for shooting attacks made by this unit that target an enemy unit that has 5 or more models and is more than 12" from this unit.'
          },
          {
            name: 'Ruinous Bombardment',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Once Per Turn (Army), Your Shooting Phase\nDeclare: If this unit used a Shoot ability this phase, pick the enemy unit that was targeted by all of this unit’s shooting attacks to be the target. Then, you can pick a number of other visible enemy units within 6" of the target up to this unit’s DPP to also be targets.\nEffect: Roll a dice for each target. On a 3+, subtract 3 from that target’s control score for the rest of the turn.'
          }
        ],
        keywords: ['CHAOS', 'HELSMITHS OF HASHUT', 'WAR MACHINE', 'TORMENTOR BOMBARD']
      },
      {
        id: 'ha-hf-infernal-cohort-a',
        name: 'Infernal Cohort with Hashutite Spears - Unit A',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '28.5mm',
        move: '4"',
        health: 1,
        save: '3+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (5 models + Gong Carrier token)',
        weapons: [
          {
            name: 'Hashutite Spear',
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
            name: 'Strike the Gongs',
            phase: 'Hero',
            type: 'Active',
            effect: 'Once Per Battle, Any Hero Phase\nDeclare: This unit has a Gong Carrier token. You can use this ability if this unit has a Gong Carrier.\nEffect: Remove this unit’s Gong Carrier from the battlefield. Return D3 slain models to this unit.'
          },
          {
            name: 'Daemonic Resilience',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive\nEffect: While this unit has DPP, it has the following abilities based on the number of DPP it has:\n• 1 DPP: This unit has Ward (6+).\n• 2 DPP: This unit has Ward (5+).\n• 3 DPP: This unit has Ward (5+). In addition, ignore the first damage point allocated to this unit in each phase.'
          }
        ],
        keywords: ['CHAOS', 'HELSMITHS OF HASHUT', 'INFANTRY', 'REINFORCEMENTS', 'INFERNAL COHORT']
      },
      {
        id: 'ha-hf-infernal-cohort-b',
        name: 'Infernal Cohort with Hashutite Spears - Unit B',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '28.5mm',
        move: '4"',
        health: 1,
        save: '3+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (5 models)',
        weapons: [
          {
            name: 'Hashutite Spear',
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
            name: 'Daemonic Resilience',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive\nEffect: While this unit has DPP, it has the following abilities based on the number of DPP it has:\n• 1 DPP: This unit has Ward (6+).\n• 2 DPP: This unit has Ward (5+).\n• 3 DPP: This unit has Ward (5+). In addition, ignore the first damage point allocated to this unit in each phase.'
          }
        ],
        keywords: ['CHAOS', 'HELSMITHS OF HASHUT', 'INFANTRY', 'REINFORCEMENTS', 'INFERNAL COHORT']
      }
    ]
  },

  // 17. MAGGOTKIN OF NURGLE - Bleak Host
  {
    id: 'nurgle-bleakhost',
    name: 'Maggotkin of Nurgle',
    subTitle: 'Bleak Host',
    grandAlliance: 'CHAOS',
    accentColor: 'from-emerald-900 via-lime-950 to-stone-900',
    flavorQuote: '‘Seven strikes for seven foes. Bless them with disease and woes.’ — Spoilpox Scrivener Bloscus the Bloodless',
    battleTraits: [
      {
        name: 'The Infectious Hosts',
        description: 'Passive\nEffect: One of your Pusgoyle Blightlords and one of your Plaguebearers units are not set up during the deployment phase. Instead, from the third battle round onwards, they can use the following ability:\n\nDAEMONIC SUMMONING: Your Movement Phase\nEffect: Set up this unit anywhere on the battlefield more than 6" from all enemy units.\nKeywords: Core'
      },
      {
        name: 'Diseased',
        description: 'Passive\nEffect: Each time an attack made by a friendly model scores a critical hit, you receive 1 disease point, to a maximum of 7.'
      },
      {
        name: 'Nurgle’s Embrace',
        description: 'End of Any Turn\nEffect: Spend any number of your disease points. For each disease point you spend, pick an enemy unit that is in combat with any of your units and roll a dice. On a 4+, inflict 1 mortal damage on that unit (you can pick the same enemy unit more than once).'
      }
    ],
    regimentAbilities: [
      {
        name: 'Locus of Fecundity',
        description: 'Once Per Phase, Your Hero Phase\nDeclare: Pick a friendly unit.\nEffect: Heal (D3) that unit.'
      },
      {
        name: 'Infested with Wonders',
        description: 'Passive\nEffect: Each time a friendly model is slain, before it is removed from play, you can pick an enemy unit within 1" of it and roll a dice. On a 4+, inflict 1 mortal damage on that unit.'
      }
    ],
    heroTraits: [
      {
        id: 'nu-bh-ht1',
        name: 'Summoner of Plaguebearers',
        type: 'Hero Trait',
        effect: 'End of Any Turn\nDeclare: Pick a friendly Plaguebearers unit wholly within 14" of your general.\nEffect: Return 1 slain model to that unit.'
      },
      {
        id: 'nu-bh-ht2',
        name: 'Gardener of Nurgle',
        type: 'Hero Trait',
        effect: 'Your Movement Phase\nDeclare: If your general is contesting an objective not contested by any enemy models, roll a dice.\nEffect: On a 3+, that objective is considered by you to be desecrated. Friendly units have Ward (4+) while they are contesting a desecrated objective. If your opponent gains control of a desecrated objective, it is no longer desecrated.'
      }
    ],
    artefacts: [
      {
        id: 'nu-bh-art1',
        name: 'Pestilent Breath',
        type: 'Artefact of Power',
        effect: 'Your Shooting Phase\nDeclare: Pick an enemy unit within 7" of your general and roll a dice for each model in that unit.\nEffect: For each 5+, inflict 1 mortal damage on that unit.'
      },
      {
        id: 'nu-bh-art2',
        name: 'Gift of Febrile Frenzy',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase\nEffect: Until the end of the phase, add 1 to the Attacks characteristic of melee weapons used by friendly units while they are wholly within 7" of your general.'
      }
    ],
    units: [
      {
        id: 'nu-bh-spoilpox-scrivener',
        name: 'Spoilpox Scrivener',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '4"',
        health: 5,
        save: '5+',
        ward: '5+',
        control: 2,
        weapons: [
          {
            name: 'Disgusting Sneezes',
            type: 'Ranged',
            range: '7"',
            attacks: 'D6',
            toHit: '2+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Distended Maw',
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
            name: 'Keep Counting, I’m Watching You',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly Plaguebearers unit wholly within 14" of this unit to be the target.\nEffect: Pick 1 of the following. The effect lasts until the start of your next turn:\n• Tally of Blows: Add 1 to the Attacks characteristic of the target unit’s melee weapons.\n• Recorded Stamina: Add 1 to save rolls for the target unit.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'HERO', 'INFANTRY', 'WARD (5+)', 'SPOILPOX SCRIVENER']
      },
      {
        id: 'nu-bh-pusgoyle-a',
        name: 'Pusgoyle Blightlord - Unit A',
        role: 'Cavalry',
        modelCount: 1,
        baseSize: '60mm',
        move: '8"',
        health: 8,
        save: '4+',
        ward: '5+',
        control: 2,
        weapons: [
          {
            name: 'Blighted Scythe',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '1'
          },
          {
            name: 'Rot Fly’s Mouthparts and Sting',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '4+',
            toWound: '2+',
            rend: '0',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Wrack and Ruin',
            phase: 'Charge',
            type: 'Active',
            effect: 'Any Charge Phase\nDeclare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target and roll a dice.\nEffect: On a 2+, inflict D3 mortal damage on the target.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'CAVALRY', 'FLY', 'WARD (5+)', 'PUSGOYLE BLIGHTLORD']
      },
      {
        id: 'nu-bh-pusgoyle-b',
        name: 'Pusgoyle Blightlord - Unit B',
        role: 'Cavalry',
        modelCount: 1,
        baseSize: '60mm',
        move: '8"',
        health: 8,
        save: '4+',
        ward: '5+',
        control: 2,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit: Arrives from the third battle round onwards via Daemonic Summoning',
        weapons: [
          {
            name: 'Blighted Scythe',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '1'
          },
          {
            name: 'Rot Fly’s Mouthparts and Sting',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '4+',
            toWound: '2+',
            rend: '0',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Wrack and Ruin',
            phase: 'Charge',
            type: 'Active',
            effect: 'Any Charge Phase\nDeclare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target and roll a dice.\nEffect: On a 2+, inflict D3 mortal damage on the target.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'CAVALRY', 'FLY', 'WARD (5+)', 'REINFORCEMENTS', 'PUSGOYLE BLIGHTLORD']
      },
      {
        id: 'nu-bh-putrid-blightkings',
        name: 'Putrid Blightkings',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '40mm',
        move: '4"',
        health: 3,
        save: '3+',
        ward: '5+',
        control: 1,
        weapons: [
          {
            name: 'Blighted Weapon',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Relentless Attackers',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn\nDeclare: Pick an enemy Infantry unit in combat with this unit to be the target and roll a dice for each model in this unit that is within the target unit’s combat range.\nEffect: For each roll that exceeds the target’s Health characteristic, inflict 1 mortal damage on it.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'INFANTRY', 'WARD (5+)', 'PUTRID BLIGHTKINGS']
      },
      {
        id: 'nu-bh-plaguebearers-a',
        name: 'Plaguebearers - Unit A',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 2,
        save: '6+',
        ward: '5+',
        control: 1,
        weapons: [
          {
            name: 'Plaguesword',
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
            name: 'Cloud of Flies',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Subtract 1 from hit rolls for shooting attacks that target this unit.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'INFANTRY', 'WARD (5+)', 'PLAGUEBEARERS']
      },
      {
        id: 'nu-bh-plaguebearers-b',
        name: 'Plaguebearers - Unit B',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 2,
        save: '6+',
        ward: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit: Arrives from the third battle round onwards via Daemonic Summoning',
        weapons: [
          {
            name: 'Plaguesword',
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
            name: 'Cloud of Flies',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Subtract 1 from hit rolls for shooting attacks that target this unit.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'INFANTRY', 'WARD (5+)', 'REINFORCEMENTS', 'PLAGUEBEARERS']
      }
    ]
  },

  // 17b. MAGGOTKIN OF NURGLE - Bubonic Cell
  {
    id: 'nurgle-bubonic',
    name: 'Maggotkin of Nurgle',
    subTitle: 'Bubonic Cell',
    grandAlliance: 'CHAOS',
    accentColor: 'from-lime-900 via-yellow-950 to-stone-900',
    flavorQuote: '‘Ah, my creatures. I see a fresh vista beckoning us – lands that have yet to be touched by the Grandfather. Let us not be frugal with his gifts. Roam forth and let earth, air and water feel his caress.’ — Glor’ak, Sorcerer of the Tripartite Wound',
    battleTraits: [
      {
        name: 'Cycle of Corruption',
        description: 'Passive\nEffect: If it is the first battle round, roll a dice to determine which Cycle ability can be used this battle round. If you roll a 5 or 6, roll again. If it is not the first battle round, the next Cycle ability in the sequence is used this battle round instead of any previous Cycle abilities:\n\n1. Numberless Pests (Passive): Subtract 1 from hit rolls for attacks that target friendly units.\n2. Plague of Misery (Passive): While enemy units are within 6" of any friendly units, they cannot use abilities that heal or return slain models to a unit.\n3. Burgeoning Filth (Passive): Subtract 3 from the control scores of enemy units while they are in combat with any friendly units.\n4. Nauseous Revulsion (Passive): Subtract 1 from charge rolls for enemy units.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Corruption of the Land',
        description: 'Once Per Turn (Army), End of Your Turn\nDeclare: Pick a terrain feature, then roll a dice for each enemy unit within 3" of that terrain feature.\nEffect: On a 4+, inflict D3 mortal damage on that enemy unit.'
      },
      {
        name: 'Putrefied Ground',
        description: 'Once Per Battle, Enemy Hero Phase\nEffect: For the rest of the turn:\n• Subtract 1 from the Move characteristic of enemy units.\n• Subtract 1 from run rolls for enemy units.'
      }
    ],
    heroTraits: [
      {
        id: 'nu-bc-ht1',
        name: 'Unnatural Vitality',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general has Ward (4+).'
      },
      {
        id: 'nu-bc-ht2',
        name: 'Subcutaneous Suppuration',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Subtract 1 from wound rolls for attacks that target your general.'
      }
    ],
    artefacts: [
      {
        id: 'nu-bc-art1',
        name: 'Gaseous Emanation',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase\nDeclare: Pick an enemy unit within your general’s combat range to be the target.\nEffect: The target has Strike-last for the rest of the turn.'
      },
      {
        id: 'nu-bc-art2',
        name: 'Overripe Death’s Heads',
        type: 'Artefact of Power',
        effect: 'Your Shooting Phase\nDeclare: If your general is not in combat, pick a visible enemy unit within 7" of them to be the target.\nEffect: Roll a dice. On a 4+, inflict 1 mortal damage on the target.'
      }
    ],
    units: [
      {
        id: 'nu-bc-rotbringer-sorcerer',
        name: 'Rotbringer Sorcerer',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '4"',
        health: 6,
        save: '5+',
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Rotwood Staff',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Fleshy Abundance',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly unit wholly within 12" of this unit to be the target, then make a casting roll of 2D6.\nEffect: On a 6+, subtract 1 from wound rolls for attacks that target that friendly unit until the start of your next turn.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'HERO', 'WIZARD', 'INFANTRY', 'WARD (6+)', 'ROTBRINGER SORCERER']
      },
      {
        id: 'nu-bc-nurglings-a',
        name: 'Nurglings - Unit A',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '4"',
        health: 4,
        save: '6+',
        ward: '5+',
        control: 1,
        weapons: [
          {
            name: 'Tiny Razor-Sharp Teeth',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '5+',
            toWound: '5+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Endless Swarm',
            phase: 'End of Turn',
            type: 'Passive',
            effect: 'End of Any Turn\nPassive\nEffect: Heal (D3) this unit.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'BEAST', 'WARD (5+)', 'NURGLINGS']
      },
      {
        id: 'nu-bc-nurglings-b',
        name: 'Nurglings - Unit B',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '4"',
        health: 4,
        save: '6+',
        ward: '5+',
        control: 1,
        weapons: [
          {
            name: 'Tiny Razor-Sharp Teeth',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '5+',
            toWound: '5+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Endless Swarm',
            phase: 'End of Turn',
            type: 'Passive',
            effect: 'End of Any Turn\nPassive\nEffect: Heal (D3) this unit.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'BEAST', 'WARD (5+)', 'NURGLINGS']
      },
      {
        id: 'nu-bc-beast-of-nurgle',
        name: 'Beast of Nurgle',
        role: 'Monster',
        modelCount: 1,
        baseSize: '60mm',
        move: '7"',
        health: 8,
        save: '5+',
        ward: '5+',
        control: 1,
        weapons: [
          {
            name: 'Filthy Claws and Slobbering Maw',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Attention Seekers',
            phase: 'Charge',
            type: 'Active',
            effect: 'Any Charge Phase\nDeclare: If this unit charged this phase, pick an enemy unit in combat with it to be the target.\nEffect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'BEAST', 'WARD (5+)', 'BEAST OF NURGLE']
      },
      {
        id: 'nu-bc-rotmire-creed',
        name: 'Rotmire Creed',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '28.5mm',
        move: '5"',
        health: 1,
        save: '6+',
        ward: '6+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (10 models)',
        weapons: [
          {
            name: 'Contagion Blowpipes',
            type: 'Ranged',
            range: '12"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          },
          {
            name: 'Bilewood Weapons',
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
            name: 'Bilewood Stilts',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: No mortal damage is inflicted on this unit when it uses Retreat abilities.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'INFANTRY', 'WARD (6+)', 'REINFORCEMENTS', 'ROTMIRE CREED']
      }
    ]
  },

  // 21. SLAVES TO DARKNESS - Bloodwind Legion
  {
    id: 'std-bloodwind',
    name: 'Slaves to Darkness',
    subTitle: 'Bloodwind Legion',
    grandAlliance: 'CHAOS',
    accentColor: 'from-zinc-900 to-red-950',
    flavorQuote: '‘They will see me. Even if I have to damn a million souls, they will see me.’ — Chaos Lord Eris Bloodwrath',
    battleTraits: [
      {
        name: 'Eye of the Gods',
        description: 'Once Per Turn, End of Any Turn\nDeclare: Pick one of the following friendly units to use this ability:\n• A unit that is contesting an objective not controlled by your opponent and is not in combat.\n• A unit that destroyed an enemy unit this turn.\nEffect: Roll once on the Eye of the Gods table for that unit. That unit gains the Eye of the Gods passive ability that corresponds to the roll (the unit keeps all Eye of the Gods abilities gained in previous turns). If the same unit gains the same ability more than once in the battle, the effects are not cumulative.\n\n1: Snubbed by the Gods: No effect.\n2: Ward of Tzeentch: This unit has Ward (6+).\n3: Grace of Slaanesh: Add 1 to run rolls for this unit.\n4: Blessing of Nurgle: Subtract 1 from wound rolls for attacks that target this unit.\n5: Fury of Khorne: Add 1 to the Rend characteristic of this unit’s melee weapons.\n6: Champion of Chaos: Pick any ability from the table.'
      }
    ],
    regimentAbilities: [
      {
        name: 'The Dread Banner',
        description: 'Once Per Battle, Start of the First Battle Round\nDeclare: Pick a friendly Chaos Warriors or Chaos Knights unit.\nEffect: You can immediately roll on the Eye of the Gods table for that unit.'
      },
      {
        name: 'Fierce Conquerors',
        description: 'Passive\nEffect: Add 3 to the control scores of friendly Chaos Warriors units.'
      }
    ],
    heroTraits: [
      {
        id: 'std-bw-ht1',
        name: 'Mark of Khorne',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Add 1 to the Rend characteristic of your general’s melee weapons if they charged in the same turn.'
      },
      {
        id: 'std-bw-ht2',
        name: 'Mark of Slaanesh',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general has Strike-first.'
      }
    ],
    artefacts: [
      {
        id: 'std-bw-art1',
        name: 'Mark of Tzeentch',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Your Movement Phase\nDeclare: Pick a friendly unit on the battlefield. You cannot pick your general.\nEffect: Remove that unit from the battlefield and set it up again wholly within 6" of your general and more than 6" from all enemy units. It cannot use Move abilities for the rest of the phase.'
      },
      {
        id: 'std-bw-art2',
        name: 'Mark of Nurgle',
        type: 'Artefact of Power',
        effect: 'Passive\nEffect: Subtract 1 from wound rolls for combat attacks that target your general.'
      }
    ],
    units: [
      {
        id: 'std-bw-chaos-lord',
        name: 'Chaos Lord',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '5"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Reaperblade',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Favoured of the Pantheon',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nEffect: Roll a dice. On a 4+, you can roll on the Eye of the Gods table for this unit.'
          },
          {
            name: 'Iron-willed Champion',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase\nDeclare: Pick a friendly unit wholly within 12" of this unit to be the target and roll a dice. You cannot pick this unit.\nEffect: On a 2+, add 1 to hit rolls for attacks made by the target unit this phase.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'HERO', 'INFANTRY', 'CHAOS LORD']
      },
      {
        id: 'std-bw-chaos-chariot',
        name: 'Chaos Chariot',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '10"',
        health: 7,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Chaos War-flail',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '3+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Driver’s Lashing Whip',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Warhorses’ Trampling Hooves',
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
            name: 'Swift Death',
            phase: 'Charge',
            type: 'Active',
            effect: 'Your Charge Phase\nDeclare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target and roll a dice.\nEffect: On a 2+, inflict D3 mortal damage on the target.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'WARMACHINE', 'CHAOS CHARIOT']
      },
      {
        id: 'std-bw-chaos-warriors-a',
        name: 'Chaos Warriors - Unit A',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '5"',
        health: 2,
        save: '3+',
        control: 1,
        weapons: [
          {
            name: 'Rune-etched Halberd',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Bringers of Desolation',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to wound rolls for combat attacks made by this unit that target an enemy unit that is contesting an objective you do not control.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'INFANTRY', 'CHAOS WARRIORS']
      },
      {
        id: 'std-bw-chaos-warriors-b',
        name: 'Chaos Warriors - Unit B',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '5"',
        health: 2,
        save: '3+',
        control: 1,
        weapons: [
          {
            name: 'Rune-etched Halberd',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Bringers of Desolation',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to wound rolls for combat attacks made by this unit that target an enemy unit that is contesting an objective you do not control.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'INFANTRY', 'CHAOS WARRIORS']
      },
      {
        id: 'std-bw-chaos-knights',
        name: 'Chaos Knights',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '75x42mm',
        move: '10"',
        health: 4,
        save: '3+',
        control: 1,
        weapons: [
          {
            name: 'Cursed Lance',
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
            name: 'Chaos Steed’s Trampling Hooves',
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
            name: 'Impaling Charge',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Add 1 to the Rend characteristic of this unit’s Cursed Lances if it charged in the same turn.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'CAVALRY', 'CHAOS KNIGHTS']
      }
    ]
  },

  // 21b. SLAVES TO DARKNESS - Darkoath Raiders
  {
    id: 'std-darkoath',
    name: 'Slaves to Darkness',
    subTitle: 'Darkoath Raiders',
    grandAlliance: 'CHAOS',
    accentColor: 'from-amber-950 via-stone-900 to-red-950',
    flavorQuote: '‘The Darkoath Raiders charge into the fray screaming oaths to the dark powers, their borrowed strength awesome and terrifying to behold. Their arrival heralds ruin, for they are but the vanguard of an approaching Chaos horde.’',
    battleTraits: [
      {
        name: 'Oaths of Darkness',
        description: 'Once Per Turn (Army), Your Hero Phase\nEffect: You can reveal 1 battle tactic card in your hand to your opponent. If you do so, that battle tactic card becomes your oath for the rest of the turn.\n\nWhile this battle tactic card is your oath, you can still use the command on it, or attempt to score the battle tactic on it, as normal.\n\nIf you score the battle tactic on your oath this turn, your oath is fulfilled. Instead of discarding the card, it is placed to one side but you can still use the command on it. Once you do so, the card is discarded as normal. Fulfilled oaths placed to one side in this way do not count towards the 3 battle tactic cards you can have in your hand.\n\nIf you use the command on your oath before it is scored, it is discarded as normal. At the end of the turn, if the oath is still in your hand and that oath has not been fulfilled, it ceases to be your oath.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Rage of Arkhar',
        description: 'Once Per Turn (Army), Any Combat Phase\nDeclare: Pick a friendly unit in combat to be the target.\nEffect: For the rest of the turn, add 1 to the Attacks and Rend characteristics of the target’s melee weapons.\n\nDesigner’s Note: This does not affect Companion weapons.'
      },
      {
        name: 'Fearless Invaders',
        description: 'Once Per Turn (Army), Your Movement Phase\nDeclare: Pick a friendly unit in combat to be the target.\nEffect: If the target uses a Retreat ability this turn, no mortal damage is inflicted on it and it can still use Charge abilities later in the turn.'
      }
    ],
    heroTraits: [
      {
        id: 'std-do-ht1',
        name: 'Bloodthirsty Blade',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: The Rend characteristic of your general’s Rune-etched Axe is 2.'
      },
      {
        id: 'std-do-ht2',
        name: 'Godshadow Talisman',
        type: 'Hero Trait',
        effect: 'Passive\nEffect: Your general has Ward (4+).'
      }
    ],
    artefacts: [
      {
        id: 'std-do-art1',
        name: 'Champion of Raids',
        type: 'Artefact of Power',
        effect: 'Your Charge Phase\nDeclare: Pick another friendly unit wholly within 12" of your general to be the target.\nEffect: The target can re-roll charge rolls for the rest of the turn.'
      },
      {
        id: 'std-do-art2',
        name: 'Fell Ritualist',
        type: 'Artefact of Power',
        effect: 'Passive\nEffect: Each time you draw battle tactic cards, if your general is on the battlefield, you can choose to draw 1 additional battle tactic card, then put 1 of your battle tactic cards in your hand back at the bottom of your battle tactic deck.'
      }
    ],
    units: [
      {
        id: 'std-do-darkoath-warqueen',
        name: 'Darkoath Warqueen',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '5"',
        health: 5,
        save: '5+',
        ward: '5+',
        control: 2,
        weapons: [
          {
            name: 'Rune-etched Axe',
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
            name: 'Oath of Supremacy',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nDeclare: Pick a friendly unit wholly within 12" of your general to be the target.\nEffect: Until the start of your next turn, add 1 to hit rolls for attacks made by the target.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'HERO', 'INFANTRY', 'WARD (5+)', 'DARKOATH WARQUEEN']
      },
      {
        id: 'std-do-darkoath-savagers',
        name: 'Darkoath Savagers',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '28.5mm',
        move: '5"',
        health: 1,
        save: '5+',
        control: 1,
        reinforcementNote: '1 model in this unit is a Godspeaker.',
        weapons: [
          {
            name: 'Darkoath Weapons',
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
            name: 'Visions of Glory',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase\nEffect: If this unit includes a Godspeaker, roll 8 dice. For each 4+, until the start of your next turn, you can re-roll 1 hit roll, 1 wound roll, 1 run roll or 1 save roll for this unit.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'INFANTRY', 'DARKOATH SAVAGERS']
      },
      {
        id: 'std-do-darkoath-fellriders',
        name: 'Darkoath Fellriders',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '12"',
        health: 3,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (5 models)',
        weapons: [
          {
            name: 'Fellrider Blades',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Charge (+1 Damage)'
          },
          {
            name: 'Warsteed’s Hooves',
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
            name: 'Swift Attackers',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Subtract 1 from hit rolls for shooting attacks that target this unit.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'CAVALRY', 'REINFORCEMENTS', 'DARKOATH FELLRIDERS']
      },
      {
        id: 'std-do-darkoath-marauders',
        name: 'Darkoath Marauders',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '28.5mm',
        move: '5"',
        health: 1,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcement unit (10 models)',
        weapons: [
          {
            name: 'Raider Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Glorious Death',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive\nEffect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'INFANTRY', 'REINFORCEMENTS', 'DARKOATH MARAUDERS']
      }
    ]
  }
];
