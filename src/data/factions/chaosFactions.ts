import { SpearheadFaction } from '../../types/spearhead';

export const CHAOS_FACTIONS: SpearheadFaction[] = [
  // 2. SKAVEN - Gnawfeast Clawpack
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

  // 2b. SKAVEN - Warpspark Clawpack
  {
    id: 'skaven-warpspark',
    name: 'Skaven',
    subTitle: 'Warpspark Clawpack',
    grandAlliance: 'CHAOS',
    accentColor: 'from-lime-600 to-green-800',
    flavorQuote: 'Harness the emerald lightning of pure Warpstone! Fire the cannons, fry the man-things!',
    battleTraits: [
      {
        name: 'Warpstone Overload',
        description: 'Before shooting with the Warp Lightning Cannon or Stormfiends, you can overload weapons: add +2 Attacks, but roll a D6 on a 1 take D3 mortal wounds.'
      },
      {
        name: 'More-more Warp Lightning!',
        description: 'Friendly Grey Seers add 1 to casting rolls for offensive spells.'
      }
    ],
    heroTraits: [
      {
        id: 'sk-ws-ht1',
        name: 'Master of the Arcane Bell',
        type: 'Hero Trait',
        effect: 'Your General can unbind 1 additional enemy spell and knows Warp Lightning.'
      },
      {
        id: 'sk-ws-ht2',
        name: 'Scheming Craven',
        type: 'Hero Trait',
        effect: 'While within 3" of a friendly Clanrats unit, pass wounds on 3+ to that unit instead.'
      }
    ],
    artefacts: [
      {
        id: 'sk-ws-art1',
        name: 'Skitterleap Amulet',
        type: 'Artefact of Power',
        effect: 'Once per battle, teleport the bearer to any battlefield edge more than 9" from enemies.'
      },
      {
        id: 'sk-ws-art2',
        name: 'Warp-condenser Orb',
        type: 'Artefact of Power',
        effect: 'Increase the damage of friendly warmachines within 6" by +1.'
      }
    ],
    units: [
      {
        id: 'sk-greyseer',
        name: 'Grey Seer',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Warpstone Staff',
            type: 'Melee',
            range: '2"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Warp Lightning',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll 6 dice: for each 4+, target enemy unit within 18" suffers 1 mortal wound.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'HERO', 'WIZARD', 'GREY SEER']
      },
      {
        id: 'sk-cannon',
        name: 'Warp Lightning Cannon',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '4"',
        health: 8,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Warp Lightning Blast',
            type: 'Ranged',
            range: '24"',
            attacks: 6,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          },
          {
            name: 'Crew Claws',
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
            name: 'Overcharged Blast',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Roll a D6 before firing. On a 1, cannon suffers 2 mortal wounds. On 2-6, attacks inflict Crit (Mortal).'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'WARMACHINE', 'WARP LIGHTNING CANNON']
      },
      {
        id: 'sk-stormfiends',
        name: 'Stormfiends with Shock Gauntlets',
        role: 'Monster',
        modelCount: 3,
        baseSize: '60mm',
        move: '6"',
        health: 18,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Ratling Cannons',
            type: 'Ranged',
            range: '12"',
            attacks: 9,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Shock Gauntlets',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '4+',
            toWound: '3+',
            rend: '-2',
            damage: '2',
            ability: 'Crit (Mortal D3)'
          }
        ],
        abilities: [
          {
            name: 'Brutal Hull',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Ward save 5+ against missile weapons.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'MONSTER', 'STORMFIENDS']
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
    flavorQuote: 'From the shadows they leap with weeping blades coated in deadly virulent venom.',
    battleTraits: [
      {
        name: 'Death from the Shadows',
        description: 'Eshin units can be set up hidden in reserve and emerge anywhere more than 6" from enemy units outside enemy territory.'
      },
      {
        name: 'Weeping Blades',
        description: 'Unmodified hit rolls of 6 inflict double damage.'
      }
    ],
    heroTraits: [
      {
        id: 'sk-cr-ht1',
        name: 'Master Assassin',
        type: 'Hero Trait',
        effect: 'General deals +2 Damage against enemy HERO units in combat.'
      },
      {
        id: 'sk-cr-ht2',
        name: 'Vanish in Smoke',
        type: 'Hero Trait',
        effect: 'When targeted by enemy attacks, roll a D6. On a 4+, attacker suffers -1 to hit.'
      }
    ],
    artefacts: [
      {
        id: 'sk-cr-art1',
        name: 'Fellblade Shard',
        type: 'Artefact of Power',
        effect: 'Bearer’s attacks have Rend -3 and Damage 3.'
      },
      {
        id: 'sk-cr-art2',
        name: 'Shadow Cloak',
        type: 'Artefact of Power',
        effect: 'Cannot be selected as a target for enemy ranged attacks beyond 12".'
      }
    ],
    units: [
      {
        id: 'sk-crixxit',
        name: 'Deathmaster Crixxit',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '8"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Weeping Blades & Throwing Stars',
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
            name: 'Hidden Killer',
            phase: 'Movement',
            type: 'Active',
            effect: 'Can hide inside a friendly Gutter Runner unit and reveal during any combat phase to strike first.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'HERO', 'ESHIN', 'DEATHMASTER']
      },
      {
        id: 'sk-gutter-runners',
        name: 'Gutter Runners',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '8"',
        health: 5,
        save: '5+',
        control: 4,
        weapons: [
          {
            name: 'Throwing Stars',
            type: 'Ranged',
            range: '12"',
            attacks: 10,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Punch Daggers',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Sneaky Infiltrators',
            phase: 'Movement',
            type: 'Active',
            effect: 'Can run and shoot in the same turn.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'INFANTRY', 'ESHIN', 'GUTTER RUNNERS']
      },
      {
        id: 'sk-rat-ogors',
        name: 'Rat Ogors',
        role: 'Monster',
        modelCount: 2,
        baseSize: '50mm',
        move: '6"',
        health: 12,
        save: '5+',
        control: 3,
        weapons: [
          {
            name: 'Warpfire Gun',
            type: 'Ranged',
            range: '8"',
            attacks: 6,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Crushing Fists & Jaws',
            type: 'Melee',
            range: '1"',
            attacks: 8,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Rabid Savagery',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to attack characteristics on turns they made a charge move.'
          }
        ],
        keywords: ['CHAOS', 'SKAVEN', 'MONSTER', 'MOULDER', 'RAT OGORS']
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
    flavorQuote: 'BLOOD FOR THE BLOOD GOD! SKULLS FOR THE SKULL THRONE! Khorne cares not from whence the blood flows!',
    battleTraits: [
      {
        name: 'Blood Tithe',
        description: 'Every time a unit is completely destroyed, gain 1 Blood Tithe point. Spend Tithe points to grant friendly units 5+ Ward or extra attacks.'
      },
      {
        name: 'Locus of Rage',
        description: 'Friendly Khorne units wholly within 12" of the Bloodsecrator add 1 to their melee attack characteristic.'
      }
    ],
    heroTraits: [
      {
        id: 'kh-gp-ht1',
        name: 'High Priest of Slaughter',
        type: 'Hero Trait',
        effect: 'Add 1 to chanting rolls for your Slaughterpriest prayers.'
      },
      {
        id: 'kh-gp-ht2',
        name: 'Brazen Frenzy',
        type: 'Hero Trait',
        effect: 'Your General fights first in combat if they completed a charge this turn.'
      }
    ],
    artefacts: [
      {
        id: 'kh-gp-art1',
        name: 'Blood-forged Collar',
        type: 'Artefact of Power',
        effect: 'The bearer unbinds spells on a 2+ and deals D3 mortal wounds to the caster.'
      },
      {
        id: 'kh-gp-art2',
        name: 'Trophy of Skulls',
        type: 'Artefact of Power',
        effect: 'Improve the bearer’s Rend by 1 and Damage by 1.'
      }
    ],
    units: [
      {
        id: 'kh-slaughterpriest',
        name: 'Slaughterpriest with Hackblade',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '5"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Hackblade & Wrath-hammer',
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
            name: 'Blood Boil',
            phase: 'Hero',
            type: 'Active',
            effect: 'Chant prayer on 3+: pick 1 enemy unit within 16"; it suffers D3 mortal wounds.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'HERO', 'PRIEST', 'SLAUGHTERPRIEST']
      },
      {
        id: 'kh-bloodsecrator',
        name: 'Bloodsecrator',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Meatripper Axe',
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
            name: 'Rage of Khorne Icon',
            phase: 'Hero',
            type: 'Active',
            effect: 'Plant the icon: friendly units within 12" cannot be battleshocked and add 1 to Attacks.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'HERO', 'BLOODSECRATOR']
      },
      {
        id: 'kh-blood-warriors',
        name: 'Blood Warriors',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '5"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Goreaxes',
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
            name: 'No Respite Without Bloodshed',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Models slain in combat can still make melee attacks before being removed.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'INFANTRY', 'BLOOD WARRIORS']
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
    flavorQuote: 'Daemons forged of pure murderous wrath materialize to reap skulls in an unstoppable stampede.',
    battleTraits: [
      {
        name: 'Hellforged Charge',
        description: 'Bloodcrushers and Flesh Hounds add +1 to wound rolls on the turn they complete a charge.'
      },
      {
        name: 'Daemonic Murderers',
        description: 'Unmodified hit rolls of 6 with Hellblades inflict 1 mortal wound in addition to normal damage.'
      }
    ],
    heroTraits: [
      {
        id: 'kh-bg-ht1',
        name: 'Herald of Slaughter',
        type: 'Hero Trait',
        effect: 'Friendly daemons within 8" add 1 to their charge rolls.'
      },
      {
        id: 'kh-bg-ht2',
        name: 'Brass-clad Fury',
        type: 'Hero Trait',
        effect: 'Bearer gains a 5+ Ward save and adds 1 to Health.'
      }
    ],
    artefacts: [
      {
        id: 'kh-bg-art1',
        name: 'Blade of the Blood Throne',
        type: 'Artefact of Power',
        effect: 'Bearer’s weapon deals 3 damage instead of 2.'
      },
      {
        id: 'kh-bg-art2',
        name: 'Collar of Khorne',
        type: 'Artefact of Power',
        effect: 'Bearer can unbind 2 spells per turn with a +1 bonus.'
      }
    ],
    units: [
      {
        id: 'kh-bloodmaster',
        name: 'Bloodmaster, Herald of Khorne',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Blade of Blood',
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
            name: 'Blood-glory',
            phase: 'Combat',
            type: 'Active',
            effect: 'Pick 1 friendly Bloodletter unit within 12"; their attacks inflict Crit (Mortal).'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'HERO', 'DAEMON', 'BLOODMASTER']
      },
      {
        id: 'kh-bloodletters',
        name: 'Bloodletters of Khorne',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '6"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Hellblades',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Decapitating Blow'
          }
        ],
        abilities: [
          {
            name: 'Murderous Stride',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Unmodified 6s to hit inflict mortal wounds.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'INFANTRY', 'DAEMON', 'BLOODLETTERS']
      },
      {
        id: 'kh-bloodcrushers',
        name: 'Bloodcrushers',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '90x52mm',
        move: '8"',
        health: 12,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Hellblade & Juggernaut Horns',
            type: 'Melee',
            range: '1"',
            attacks: 9,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Devastating Impact',
            phase: 'Charge',
            type: 'Active',
            effect: 'Roll a D6 for each model on charge: on 3+, target takes D3 mortal wounds.'
          }
        ],
        keywords: ['CHAOS', 'BLADES OF KHORNE', 'CAVALRY', 'DAEMON', 'BLOODCRUSHERS']
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
    flavorQuote: 'All is part of the Great Conspirator’s kaleidoscopic, shifting design. Change is the only constant.',
    battleTraits: [
      {
        name: 'Destiny Dice',
        description: 'At the start of the battle, roll 9 D6s and place them in your Destiny pool. You can replace any hit, wound, save, run, or charge roll with a Destiny die.'
      },
      {
        name: 'Locus of Mutagenic Energy',
        description: 'When an enemy unit is destroyed by a spell, roll a D6: on 4+, summon a Chaos Spawn or deal D3 mortal wounds.'
      }
    ],
    heroTraits: [
      {
        id: 'tz-fc-ht1',
        name: 'Cult Master of Change',
        type: 'Hero Trait',
        effect: 'Gain 1 additional Destiny Die each battle round.'
      },
      {
        id: 'tz-fc-ht2',
        name: 'Sorcerous Nexus',
        type: 'Hero Trait',
        effect: 'Add 1 to casting, dispelling, and unbinding rolls for your General.'
      }
    ],
    artefacts: [
      {
        id: 'tz-fc-art1',
        name: 'Warpfire Blade',
        type: 'Artefact of Power',
        effect: 'Bearer’s melee attacks gain Rend -2 and mortal wound on 6s.'
      },
      {
        id: 'tz-fc-art2',
        name: 'Amulet of Fate',
        type: 'Artefact of Power',
        effect: 'Bearer gains a 5+ Ward save.'
      }
    ],
    units: [
      {
        id: 'tz-magister',
        name: 'Magister on Disc of Tzeentch',
        role: 'Hero',
        modelCount: 1,
        baseSize: '50mm',
        move: '12"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Warpsteel Sword & Disc Blades',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Bolt of Change',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6. On a 3+, target unit within 18" suffers D3 mortal wounds and turns into Spawn if slain.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'HERO', 'WIZARD', 'FLY', 'MAGISTER']
      },
      {
        id: 'tz-pink-horrors',
        name: 'Pink Horrors of Tzeentch',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '5"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Magical Flames',
            type: 'Ranged',
            range: '12"',
            attacks: 10,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Grasping Hands',
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
            name: 'Split Again and Again',
            phase: 'Passive',
            type: 'Passive',
            effect: 'When a model is slain, roll a D6: on 4+, ignore the wound as it splits into Blue Horrors.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'INFANTRY', 'DAEMON', 'HORRORS']
      },
      {
        id: 'tz-screamers',
        name: 'Screamers of Tzeentch',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '32mm',
        move: '14"',
        health: 9,
        save: '5+',
        control: 3,
        weapons: [
          {
            name: 'Lamprey Biting Jaws',
            type: 'Melee',
            range: '1"',
            attacks: 9,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Slashing Fins',
            phase: 'Movement',
            type: 'Active',
            effect: 'Fly over an enemy unit: roll a D6 for each Screamer, on 4+ that unit suffers 1 mortal wound.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'FLY', 'CAVALRY', 'SCREAMERS']
      }
    ]
  },

  // 8b. DISCIPLES OF TZEENTCH - Tzaangor Warflock
  {
    id: 'tzeentch-tzaangor',
    name: 'Disciples of Tzeentch',
    subTitle: 'Tzaangor Warflock',
    grandAlliance: 'CHAOS',
    accentColor: 'from-blue-700 to-amber-600',
    flavorQuote: 'Beastmen anointed with avian feathers and sorcerous blades hunt under skies charged with change.',
    battleTraits: [
      {
        name: 'Avian Ferocity',
        description: 'Tzaangor units add 1 to their hit rolls in combat if they made a charge move.'
      },
      {
        name: 'Arcane Savagery',
        description: 'While near a friendly wizard, Tzaangors add +1 to their melee wound rolls.'
      }
    ],
    heroTraits: [
      {
        id: 'tz-tw-ht1',
        name: 'Mutant Prophet',
        type: 'Hero Trait',
        effect: 'Add 2" to the Move characteristic of friendly Tzaangor units within 12".'
      },
      {
        id: 'tz-tw-ht2',
        name: 'Gilded Feathered Shroud',
        type: 'Hero Trait',
        effect: 'General gains a 5+ Ward save.'
      }
    ],
    artefacts: [
      {
        id: 'tz-tw-art1',
        name: 'Balehead Bow',
        type: 'Artefact of Power',
        effect: 'Bearer’s ranged weapons have Rend -2 and mortal wounds on 5+.'
      },
      {
        id: 'tz-tw-art2',
        name: 'Disc of Shifting Silver',
        type: 'Artefact of Power',
        effect: 'Add 2 to the General’s Health and +2 to Control.'
      }
    ],
    units: [
      {
        id: 'tz-shaman',
        name: 'Tzaangor Shaman on Disc',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '12"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Staff of Change & Dagger',
            type: 'Melee',
            range: '2"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Boon of Mutation',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6. On a 3+, pick 1 enemy unit within 12"; it suffers D3 mortal wounds.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'HERO', 'WIZARD', 'FLY', 'TZAANGOR SHAMAN']
      },
      {
        id: 'tz-tzaangors',
        name: 'Tzaangors with Savage Blades',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '6"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Savage Blades & Beaks',
            type: 'Melee',
            range: '1"',
            attacks: 20,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Savage Mauling',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to attack characteristics if this unit has 6 or more models.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'INFANTRY', 'TZAANGORS']
      },
      {
        id: 'tz-skyfires',
        name: 'Tzaangor Skyfires',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '40mm',
        move: '12"',
        health: 9,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Greatbow',
            type: 'Ranged',
            range: '24"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2',
            ability: 'Crit (Mortal)'
          },
          {
            name: 'Disc Teeth',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Judgement of Fate',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Unmodified 6s to hit with Greatbows inflict 2 mortal wounds and end the attack sequence.'
          }
        ],
        keywords: ['CHAOS', 'DISCIPLES OF TZEENTCH', 'FLY', 'CAVALRY', 'SKYFIRES']
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
    flavorQuote: 'Excess in all sensations! The sweetest agony and the sharpest perfection for the Dark Prince.',
    battleTraits: [
      {
        name: 'Euphoric Euphoria',
        description: 'Generating Temptation dice: offer enemy players re-rolls. If they accept or decline, earn points to trigger Strike-First and +1 Attacks.'
      },
      {
        name: 'Lurid Perfection',
        description: 'Unmodified 6s to hit generate 1 additional hit roll.'
      }
    ],
    heroTraits: [
      {
        id: 'sl-ld-ht1',
        name: 'Artist of Agony',
        type: 'Hero Trait',
        effect: 'Add 1 to the Damage characteristic of the General’s melee weapons.'
      },
      {
        id: 'sl-ld-ht2',
        name: 'Soporific Allure',
        type: 'Hero Trait',
        effect: 'Enemy units in combat with your General subtract 1 from their melee hit rolls.'
      }
    ],
    artefacts: [
      {
        id: 'sl-ld-art1',
        name: 'Rod of Torment',
        type: 'Artefact of Power',
        effect: 'Bearer inflicts D3 mortal wounds when an enemy fails a battleshock test.'
      },
      {
        id: 'sl-ld-art2',
        name: 'Silken Shroud',
        type: 'Artefact of Power',
        effect: 'Bearer gains a 5+ Ward save.'
      }
    ],
    units: [
      {
        id: 'sl-lord-pain',
        name: 'Lord of Pain',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '6"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Soulpiercer Mace',
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
            name: 'Share the Agony',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Each time a wound is allocated to this model, roll a D6. On 5+, the attacking unit suffers 1 mortal wound.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'HERO', 'LORD OF PAIN']
      },
      {
        id: 'sl-myrmidesh',
        name: 'Myrmidesh Painbringers',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '6"',
        health: 10,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Painbringer Blade',
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
            name: 'Dance of the Decadent',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Reroll hit rolls of 1 while fighting an enemy unit with higher model count.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'INFANTRY', 'MYRMIDESH']
      },
      {
        id: 'sl-blissbarb',
        name: 'Blissbarb Archers',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '28mm',
        move: '6"',
        health: 10,
        save: '6+',
        control: 5,
        weapons: [
          {
            name: 'Blissbarb Bow',
            type: 'Ranged',
            range: '18"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Slickblade Dagger',
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
            name: 'Poisoned Needles',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Can run and shoot in the same turn.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'INFANTRY', 'BLISSBARB']
      }
    ]
  },

  // 12b. HEDONITES OF SLAANESH - Epicurean Revellers
  {
    id: 'slaanesh-epicurean',
    name: 'Hedonites of Slaanesh',
    subTitle: 'Epicurean Revellers',
    grandAlliance: 'CHAOS',
    accentColor: 'from-fuchsia-800 to-indigo-900',
    flavorQuote: 'Mounted upon darting Seekers, this court of revelry indulges in lightning strikes and intoxicating magic.',
    battleTraits: [
      {
        name: 'Blinding Excess',
        description: 'Enemy units targeting friendly Seeker cavalry suffer -1 to hit.'
      },
      {
        name: 'Song of Seduction',
        description: 'Friendly Shardspeakers can reduce enemy units’ Control to 0 for a battle round.'
      }
    ],
    heroTraits: [
      {
        id: 'sl-er-ht1',
        name: 'Mistress of Whispers',
        type: 'Hero Trait',
        effect: 'Add 1 to casting rolls for friendly spells.'
      },
      {
        id: 'sl-er-ht2',
        name: 'Swift-tongued Temptress',
        type: 'Hero Trait',
        effect: 'Generates 1 bonus Temptation Die each round.'
      }
    ],
    artefacts: [
      {
        id: 'sl-er-art1',
        name: 'Mirror of Vanity',
        type: 'Artefact of Power',
        effect: 'Reflects 1 mortal wound to attacker on save roll of 6.'
      },
      {
        id: 'sl-er-art2',
        name: 'Scent of Excess',
        type: 'Artefact of Power',
        effect: 'Friendly cavalry within 6" add +2" to Charge rolls.'
      }
    ],
    units: [
      {
        id: 'sl-shardspeaker',
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
            name: 'Silver Claw & Mist',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Shadows of Distortion',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6. On 3+, enemy unit within 12" suffers -1 to Save rolls.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'HERO', 'WIZARD', 'SHARDSPEAKER']
      },
      {
        id: 'sl-slickblade',
        name: 'Slickblade Seekers',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '14"',
        health: 9,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Slickblade Glaive & Tongues',
            type: 'Melee',
            range: '2"',
            attacks: 9,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Uncanny Rapidity',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Can retreat and charge in the same turn.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'CAVALRY', 'SLICKBLADES']
      },
      {
        id: 'sl-daemonettes',
        name: 'Daemonettes of Slaanesh',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '7"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Piercing Claws',
            type: 'Melee',
            range: '1"',
            attacks: 20,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (2 Hits)'
          }
        ],
        abilities: [
          {
            name: 'Litany of Excess',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to attack characteristics when fighting damaged units.'
          }
        ],
        keywords: ['CHAOS', 'HEDONITES OF SLAANESH', 'INFANTRY', 'DAEMON', 'DAEMONETTES']
      }
    ]
  },

  // 13. HELSMITHS OF HASHUT - Helforge Host
  {
    id: 'hashut-helforge',
    name: 'Helsmiths of Hashut',
    subTitle: 'Helforge Host',
    grandAlliance: 'CHAOS',
    accentColor: 'from-amber-800 to-stone-900',
    flavorQuote: 'The Father of Darkness demands sacrifice in magma and steam! Slaves to the furnace!',
    battleTraits: [
      {
        name: 'Demonic Engine Overheat',
        description: 'Daemon engines can stoke hellish fires: add +1 Damage to weapons, taking 1 mortal wound on an unmodified hit roll of 1.'
      },
      {
        name: 'Hashut’s Branding',
        description: 'Friendly units contesting objectives ignore the first point of Rend from incoming attacks.'
      }
    ],
    heroTraits: [
      {
        id: 'ha-hf-ht1',
        name: 'Forgemaster of Zharr',
        type: 'Hero Trait',
        effect: 'Heals 2 wounds on a friendly war engine at the start of your Hero phase.'
      },
      {
        id: 'ha-hf-ht2',
        name: 'Tyrant of the Smelting Pits',
        type: 'Hero Trait',
        effect: 'Friendly infantry within 9" of General add +1 to their melee attack characteristic.'
      }
    ],
    artefacts: [
      {
        id: 'ha-hf-art1',
        name: 'Furnace Maul',
        type: 'Artefact of Power',
        effect: 'Bearer’s attacks inflict Crit (Mortal 2).'
      },
      {
        id: 'ha-hf-art2',
        name: 'Obsidian Plate of Hashut',
        type: 'Artefact of Power',
        effect: 'Bearer gains a 3+ save and 5+ Ward.'
      }
    ],
    units: [
      {
        id: 'ha-warpriest',
        name: 'Hashut Daemonsmith Warpriest',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '4"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Hellforged Sceptre & Hammer',
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
            name: 'Blood-fire Rite',
            phase: 'Hero',
            type: 'Active',
            effect: 'Pick 1 friendly warmachine within 12"; it adds 1 to hit and 1 to wound.'
          }
        ],
        keywords: ['CHAOS', 'HELSMITHS OF HASHUT', 'HERO', 'PRIEST', 'DAEMONSMITH']
      },
      {
        id: 'ha-infernal-guard',
        name: 'Infernal Guard with Fireglaives',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '28mm',
        move: '4"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Fireglaive (Shooting)',
            type: 'Ranged',
            range: '12"',
            attacks: 10,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Fireglaive (Melee)',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Shieldwall of Ash',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Save characteristic improves to 3+ while this unit did not make a charge or run move.'
          }
        ],
        keywords: ['CHAOS', 'HELSMITHS OF HASHUT', 'INFANTRY', 'INFERNAL GUARD']
      },
      {
        id: 'ha-bull-centaurs',
        name: 'Bull Centaur Renders',
        role: 'Monster',
        modelCount: 3,
        baseSize: '90x52mm',
        move: '8"',
        health: 15,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Spite-axes & Hooves',
            type: 'Melee',
            range: '1"',
            attacks: 12,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Trample and Gore',
            phase: 'Charge',
            type: 'Active',
            effect: 'Roll 3 dice on charge: for each 4+, target unit suffers D3 mortal wounds.'
          }
        ],
        keywords: ['CHAOS', 'HELSMITHS OF HASHUT', 'MONSTER', 'BULL CENTAURS']
      }
    ]
  },

  // 17. MAGGOTKIN OF NURGLE - Bleak Host
  {
    id: 'nurgle-bleakhost',
    name: 'Maggotkin of Nurgle',
    subTitle: 'Bleak Host',
    grandAlliance: 'CHAOS',
    accentColor: 'from-emerald-800 to-lime-800',
    flavorQuote: 'Rejoice in Grandfather’s generous gifts! Rotting boils, blessed flies, and bountiful decay.',
    battleTraits: [
      {
        name: 'Disgustingly Resilient',
        description: 'All friendly Maggotkin models have a 5+ Ward save against all damage.'
      },
      {
        name: 'Diseased Vectors',
        description: 'At the end of each turn, roll a D6 for each enemy unit within 3" of friendly units: on 4+, that unit suffers D3 mortal wounds from pestilence.'
      }
    ],
    heroTraits: [
      {
        id: 'nu-bh-ht1',
        name: 'Grandfather’s Favourite',
        type: 'Hero Trait',
        effect: 'At the start of your Hero phase, heal D3 wounds on your General.'
      },
      {
        id: 'nu-bh-ht2',
        name: 'Pestilent Scrivener',
        type: 'Hero Trait',
        effect: 'Friendly Plaguebearers within 12" add +1 to their melee wound rolls.'
      }
    ],
    artefacts: [
      {
        id: 'nu-bh-art1',
        name: 'Rustfang',
        type: 'Artefact of Power',
        effect: 'Pick 1 enemy unit in combat: permanently worsen its Save characteristic by 1.'
      },
      {
        id: 'nu-bh-art2',
        name: 'Tome of Thousand Poxes',
        type: 'Artefact of Power',
        effect: 'Bearer knows 1 additional Lore of Malignance spell.'
      }
    ],
    units: [
      {
        id: 'nu-scrivener',
        name: 'Spoilpox Scrivener',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '4"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Plutos Quill & Maw',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Keep Counting, Worms!',
            phase: 'Combat',
            type: 'Active',
            effect: 'Pick 1 friendly Plaguebearer unit within 12"; add 1 to their attack characteristics.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'HERO', 'DAEMON', 'SPOILPOX SCRIVENER']
      },
      {
        id: 'nu-plaguebearers',
        name: 'Plaguebearers of Nurgle',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '4"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Plagueswords',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1',
            ability: 'Diseased'
          }
        ],
        abilities: [
          {
            name: 'Cloud of Flies',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Enemy units targeting this unit with missile weapons suffer -1 to hit.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'INFANTRY', 'DAEMON', 'PLAGUEBEARERS']
      },
      {
        id: 'nu-plague-drones',
        name: 'Plague Drones',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '60mm',
        move: '8"',
        health: 15,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Rotwood Stinger & Proboscis',
            type: 'Melee',
            range: '1"',
            attacks: 12,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Foul Buzzing',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to attack characteristics while within 6" of any Nurgle HERO.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'FLY', 'CAVALRY', 'DAEMON', 'PLAGUE DRONES']
      }
    ]
  },

  // 17b. MAGGOTKIN OF NURGLE - Bubonic Cell
  {
    id: 'nurgle-bubonic',
    name: 'Maggotkin of Nurgle',
    subTitle: 'Bubonic Cell',
    grandAlliance: 'CHAOS',
    accentColor: 'from-green-800 to-amber-900',
    flavorQuote: 'The mortal champions of Nurgle stride forth, swollen with pustules and clad in rust-caked iron plate.',
    battleTraits: [
      {
        name: 'Unstoppable Virulence',
        description: 'Friendly Blightkings heal 1 wound at the end of each player turn.'
      },
      {
        name: 'Cycle of Corruption',
        description: 'Each round, one of Nurgle’s cyclic blessings is active, bolstering mortal saves and granting bonus mortal wounds.'
      }
    ],
    heroTraits: [
      {
        id: 'nu-bc-ht1',
        name: 'Lord of the Rotflies',
        type: 'Hero Trait',
        effect: 'Pusgoyle Blightlords within 9" of General add 2" to their Movement.'
      },
      {
        id: 'nu-bc-ht2',
        name: 'Fleshy Citadel',
        type: 'Hero Trait',
        effect: 'Your General adds 3 to their Health characteristic.'
      }
    ],
    artefacts: [
      {
        id: 'nu-bc-art1',
        name: 'The Splithorn Bell',
        type: 'Artefact of Power',
        effect: 'Enemy units in combat cannot use command abilities.'
      },
      {
        id: 'nu-bc-art2',
        name: 'Filthbringer Flail',
        type: 'Artefact of Power',
        effect: 'Bearer’s weapons have Rend -2 and Damage 2.'
      }
    ],
    units: [
      {
        id: 'nu-lord-blights',
        name: 'Lord of Blights',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '4"',
        health: 7,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Bubotic Blade & Munificent Shield',
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
            name: 'Throwing Heads',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Target unit within 9" suffers D3 mortal wounds on a 3+.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'HERO', 'MORTAL', 'LORD OF BLIGHTS']
      },
      {
        id: 'nu-blightkings',
        name: 'Putrid Blightkings',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '40mm',
        move: '4"',
        health: 15,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Blighted Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 15,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Virulent Discharge',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'Roll a D6 for each enemy unit within 3": on 4+, that unit suffers D3 mortal wounds.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'INFANTRY', 'MORTAL', 'BLIGHTKINGS']
      },
      {
        id: 'nu-pusgoyle',
        name: 'Pusgoyle Blightlords',
        role: 'Monster',
        modelCount: 2,
        baseSize: '60mm',
        move: '8"',
        health: 14,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Blighted Flail & Rotfly Stinger',
            type: 'Melee',
            range: '2"',
            attacks: 8,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Corrosive Slime',
            phase: 'Charge',
            type: 'Active',
            effect: 'On turns this unit completes a charge, attacks gain +1 Damage.'
          }
        ],
        keywords: ['CHAOS', 'MAGGOTKIN OF NURGLE', 'FLY', 'MONSTER', 'PUSGOYLE']
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
    flavorQuote: 'Steel and sorcery in the name of the Everchosen! We shall drown the realms in blood and iron.',
    battleTraits: [
      {
        name: 'Eye of the Gods',
        description: 'When your Hero slays an enemy Hero or Monster, roll on the Eye of the Gods table for permanent buffs (Daemonhood, +1 Save, +1 Attack, Ward).'
      },
      {
        name: 'Marks of Chaos',
        description: 'Units bear the Mark of Khorne (+1 Attack on charge) or Nurgle (-1 to be wounded).'
      }
    ],
    heroTraits: [
      {
        id: 'std-bw-ht1',
        name: 'Idolater Warlord',
        type: 'Hero Trait',
        effect: 'Friendly Chaos Warriors within 12" can reroll failed charge rolls.'
      },
      {
        id: 'std-bw-ht2',
        name: 'Favoured of the Pantheon',
        type: 'Hero Trait',
        effect: 'Add 1 to rolls on the Eye of the Gods table for your General.'
      }
    ],
    artefacts: [
      {
        id: 'std-bw-art1',
        name: 'Hellflame Sword',
        type: 'Artefact of Power',
        effect: 'Bearer’s attacks inflict mortal wounds on unmodified hit rolls of 5+.'
      },
      {
        id: 'std-bw-art2',
        name: 'Crown of the Conqueror',
        type: 'Artefact of Power',
        effect: 'Bearer adds 2 to Health and gains 5+ Ward.'
      }
    ],
    units: [
      {
        id: 'std-lord',
        name: 'Chaos Lord on Foot',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '5"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Reaperblade & Daemonbound Steel',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'The Will of the Gods',
            phase: 'Combat',
            type: 'Active',
            effect: 'In the combat phase, pick 1 friendly Chaos Warriors unit: it fights immediately after this model.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'HERO', 'CHAOS LORD']
      },
      {
        id: 'std-warriors',
        name: 'Chaos Warriors with Runeshields',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '5"',
        health: 10,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Chaos Runeblades',
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
            name: 'Legion of the Damned Runeshields',
            phase: 'Combat',
            type: 'Passive',
            effect: '5+ Ward save against mortal wounds and spells.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'INFANTRY', 'CHAOS WARRIORS']
      },
      {
        id: 'std-knights',
        name: 'Chaos Knights with Cursed Lances',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '75x42mm',
        move: '10"',
        health: 15,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Cursed Lance & Steed Hooves',
            type: 'Melee',
            range: '1"',
            attacks: 15,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Doom Knight Charge',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Lances have Damage 3 on the turn this unit makes a charge move.'
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
    accentColor: 'from-amber-900 to-stone-800',
    flavorQuote: 'By blood and oath we swear to tear down civilization and burn the false gods’ monuments!',
    battleTraits: [
      {
        name: 'Darkoath Vows',
        description: 'At the start of each round, swear 1 vow (e.g., slay a champion, control an enemy objective). If completed, all Darkoath units gain +1 Attack and 5+ Ward for the rest of the game.'
      },
      {
        name: 'Feral Ambush',
        description: 'Darkoath units can run and charge in the same turn.'
      }
    ],
    heroTraits: [
      {
        id: 'std-do-ht1',
        name: 'Wilder-marked Chieftain',
        type: 'Hero Trait',
        effect: 'Your General adds 2 to Health and gains 6+ Ward.'
      },
      {
        id: 'std-do-ht2',
        name: 'Oathsworn Leader',
        type: 'Hero Trait',
        effect: 'Completing vows gives +2 Command Points.'
      }
    ],
    artefacts: [
      {
        id: 'std-do-art1',
        name: 'Totem of the First Beast',
        type: 'Artefact of Power',
        effect: 'Friendly Darkoath units within 9" add 1 to their melee wound rolls.'
      },
      {
        id: 'std-do-art2',
        name: 'Chieftain’s Broadaxe',
        type: 'Artefact of Power',
        effect: 'Bearer’s weapon has Rend -2 and Damage 3.'
      }
    ],
    units: [
      {
        id: 'std-chieftain',
        name: 'Darkoath Chieftain on Warsteed',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60x35mm',
        move: '10"',
        health: 7,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Chieftain’s Broadsword',
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
            name: 'Deathblow',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Each enemy model slain by this model allows friendly Darkoath within 6" to fight immediately.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'HERO', 'CAVALRY', 'DARKOATH']
      },
      {
        id: 'std-marauders',
        name: 'Darkoath Marauders',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '28mm',
        move: '6"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Darkoath Axes & Broadswords',
            type: 'Melee',
            range: '1"',
            attacks: 20,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Sworn Warriors',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to hit rolls while wholly within 12" of your General.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'INFANTRY', 'DARKOATH']
      },
      {
        id: 'std-fellriders',
        name: 'Darkoath Fellriders',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '12"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Javelins & Broadswords',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Outflank',
            phase: 'Movement',
            type: 'Active',
            effect: 'Can enter the battlefield from any edge at the end of round 1 or 2 movement phase.'
          }
        ],
        keywords: ['CHAOS', 'SLAVES TO DARKNESS', 'CAVALRY', 'DARKOATH FELLRIDERS']
      }
    ]
  }
];
