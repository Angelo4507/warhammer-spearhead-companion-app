import { SpearheadFaction } from '../../types/spearhead';

export const DEATH_FACTIONS: SpearheadFaction[] = [
  // 3. NIGHTHAUNT - Slasher Host
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

  // 3b. NIGHTHAUNT - Cursed Shacklehord
  {
    id: 'nighthaunt-cursed',
    name: 'Nighthaunt',
    subTitle: 'Cursed Shacklehord',
    grandAlliance: 'DEATH',
    accentColor: 'from-teal-800 to-cyan-600',
    flavorQuote: 'Iron padlocks rattle and phantom chains drag across cobblestones as tormented souls seek to drag others to the grave.',
    battleTraits: [
      {
        name: 'Soul-cage Torment',
        description: 'Friendly Spirit Torments and Chainghasts allow friendly Nighthaunt units within 12" to reroll hit rolls of 1.'
      },
      {
        name: 'Shackled to the Netherworld',
        description: 'At the start of your hero phase, return D3 slain Chainrasp models to a friendly unit within 12".'
      }
    ],
    heroTraits: [
      {
        id: 'nh-cs-ht1',
        name: 'Master of Shackles',
        type: 'Hero Trait',
        effect: 'Add 1 to the Save characteristic of friendly units wholly within 9" of your General.'
      },
      {
        id: 'nh-cs-ht2',
        name: 'Tormentor’s Gaze',
        type: 'Hero Trait',
        effect: 'Enemy units in combat with your General subtract 1 from their Bravery/Control.'
      }
    ],
    artefacts: [
      {
        id: 'nh-cs-art1',
        name: 'Spectral Lock',
        type: 'Artefact of Power',
        effect: 'Bearer locks 1 enemy unit within 6": that unit cannot make a retreat move.'
      },
      {
        id: 'nh-cs-art2',
        name: 'Midnight Tome',
        type: 'Artefact of Power',
        effect: 'Bearer knows 1 additional Lore of the Underworlds spell.'
      }
    ],
    units: [
      {
        id: 'nh-spirit-torment',
        name: 'Spirit Torment',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '6"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Shackles of Nagash',
            type: 'Melee',
            range: '2"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Captured Soul Energy',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'If 3 or more models were slain this turn, heal 3 wounds on a friendly Nighthaunt unit or return slain models.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'HERO', 'FLY', 'ETHEREAL', 'SPIRIT TORMENT']
      },
      {
        id: 'nh-chainghasts',
        name: 'Chainghasts',
        role: 'Infantry',
        modelCount: 2,
        baseSize: '32mm',
        move: '6"',
        health: 4,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Ghastflail',
            type: 'Melee',
            range: '2"',
            attacks: 6,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Belligerent Spirits',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Friendly Nighthaunt units wholly within 12" reroll hit rolls of 1.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'FLY', 'ETHEREAL', 'CHAINGHASTS']
      },
      {
        id: 'nh-harridans',
        name: 'Dreadscythe Harridans',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '8"',
        health: 5,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Scythed Limbs',
            type: 'Melee',
            range: '1"',
            attacks: 15,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Murderous Bloodlust',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to hit rolls and wound rolls when fighting damaged enemy units.'
          }
        ],
        keywords: ['DEATH', 'NIGHTHAUNT', 'INFANTRY', 'FLY', 'ETHEREAL', 'HARRIDANS']
      }
    ]
  },

  // 9. FLESH-EATER COURTS - Carrion Retainers
  {
    id: 'fec-carrion',
    name: 'Flesh-eater Courts',
    subTitle: 'Carrion Retainers',
    grandAlliance: 'DEATH',
    accentColor: 'from-rose-950 to-stone-800',
    flavorQuote: 'In their twisted delusion, they are noble knights and valiant courtiers attending an opulent banquet.',
    battleTraits: [
      {
        name: 'Noble Deeds',
        description: 'Earn Noble Deeds points when your Heroes inflict damage or slay enemies. Spend points to resurrect slain Crypt Guard or trigger Feeding Frenzy.'
      },
      {
        name: 'Delusion of Grandeur',
        description: 'Friendly units add +1 to Run and Charge rolls when moving toward contested objectives.'
      }
    ],
    heroTraits: [
      {
        id: 'fec-cr-ht1',
        name: 'Cruel Taskmaster',
        type: 'Hero Trait',
        effect: 'Earn +1 Noble Deeds point whenever your General inflicts unsaved damage.'
      },
      {
        id: 'fec-cr-ht2',
        name: 'Gargoyles of the Realm',
        type: 'Hero Trait',
        effect: 'Your General and friendly Morbheg Knights add 2" to their Movement.'
      }
    ],
    artefacts: [
      {
        id: 'fec-cr-art1',
        name: 'The Grim Garland',
        type: 'Artefact of Power',
        effect: 'Enemy units within 6" of bearer subtract 2 from their Bravery/Control.'
      },
      {
        id: 'fec-cr-art2',
        name: 'Flayed Skin Cloak',
        type: 'Artefact of Power',
        effect: 'Bearer gains a 5+ Ward save.'
      }
    ],
    units: [
      {
        id: 'fec-gorewarden',
        name: 'Abhorrant Gorewarden',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '12"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Royal Claws & Fangs',
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
            name: 'Winds of Shyish',
            phase: 'Movement',
            type: 'Active',
            effect: 'Can fly into reserve with 1 friendly flying unit and arrive anywhere more than 9" from enemies.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'HERO', 'WIZARD', 'FLY', 'GOREWARDEN']
      },
      {
        id: 'fec-morbheg',
        name: 'Crypt Morbheg Knights',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '12"',
        health: 12,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Bone Lance & Nightshrieker Jaws',
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
            name: 'Predatory Pounce',
            phase: 'Charge',
            type: 'Active',
            effect: 'On turns they charged, attacks gain +1 Damage and target unit suffers Strike-Last on a 4+.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'FLY', 'CAVALRY', 'MORBHEG KNIGHTS']
      },
      {
        id: 'fec-crypt-guard',
        name: 'Crypt Guard',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Rancid Swords & Halberds',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Royal Bodyguard',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Friendly Abhorrant heroes within 3" gain a 4+ Ward save.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'INFANTRY', 'CRYPT GUARD']
      }
    ]
  },

  // 9b. FLESH-EATER COURTS - Charnel Watch
  {
    id: 'fec-charnel',
    name: 'Flesh-eater Courts',
    subTitle: 'Charnel Watch',
    grandAlliance: 'DEATH',
    accentColor: 'from-stone-900 to-red-900',
    flavorQuote: 'A bestial court of winged horrors and towering hulks feast upon the marrow of the vanquished.',
    battleTraits: [
      {
        name: 'Feeding Frenzy',
        description: 'Once per round, spend 3 Noble Deeds points to pick 1 friendly unit that has fought to fight a second time.'
      },
      {
        name: 'Charnel Feast',
        description: 'Friendly units heal 1 wound or return 1 slain model whenever they destroy an enemy model.'
      }
    ],
    heroTraits: [
      {
        id: 'fec-cw-ht1',
        name: 'Majestic Beastmaster',
        type: 'Hero Trait',
        effect: 'Friendly Crypt Horrors and Flayers within 12" add +1 to their melee wound rolls.'
      },
      {
        id: 'fec-cw-ht2',
        name: 'Dark Acolyte',
        type: 'Hero Trait',
        effect: 'General knows 2 spells and can cast 2 spells each Hero phase.'
      }
    ],
    artefacts: [
      {
        id: 'fec-cw-art1',
        name: 'Marrowscroll Chalice',
        type: 'Artefact of Power',
        effect: 'Heal all wounds allocated to bearer once per battle.'
      },
      {
        id: 'fec-cw-art2',
        name: 'Splintered Jawbone',
        type: 'Artefact of Power',
        effect: 'Bearer’s melee attacks gain Crit (Mortal).'
      }
    ],
    units: [
      {
        id: 'fec-archregent',
        name: 'Abhorrant Archregent',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 6,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Royal Talons & Fangs',
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
            name: 'Imperial Summon',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6. On a 3+, set up 3 Crypt Horrors or 10 Crypt Ghouls within 6" of battlefield edge.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'HERO', 'WIZARD', 'ARCHREGENT']
      },
      {
        id: 'fec-crypt-horrors',
        name: 'Crypt Horrors',
        role: 'Monster',
        modelCount: 3,
        baseSize: '50mm',
        move: '7"',
        health: 12,
        save: '5+',
        control: 3,
        weapons: [
          {
            name: 'Club-like Talons',
            type: 'Melee',
            range: '1"',
            attacks: 9,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Noble Defenders',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Unmodified hit rolls of 6 score 2 hits instead of 1.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'MONSTER', 'CRYPT HORRORS']
      },
      {
        id: 'fec-crypt-ghouls',
        name: 'Crypt Ghouls',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 10,
        save: '6+',
        control: 5,
        weapons: [
          {
            name: 'Sharp Claws and Teeth',
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
            name: 'Boundless Ferocity',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Reroll hit rolls of 1 while wholly within 12" of any friendly Abhorrant Hero.'
          }
        ],
        keywords: ['DEATH', 'FLESH-EATER COURTS', 'INFANTRY', 'CRYPT GHOULS']
      }
    ]
  },

  // 19. OSSIARCH BONEREAPERS - Kavalos Vanguard
  {
    id: 'obr-kavalos',
    name: 'Ossiarch Bonereapers',
    subTitle: 'Kavalos Vanguard',
    grandAlliance: 'DEATH',
    accentColor: 'from-amber-700 to-stone-700',
    flavorQuote: 'The bone-tithe must be harvested. Every skull, every femur, perfectly shaped for Nagash’s endless legion.',
    battleTraits: [
      {
        name: 'Relentless Discipline',
        description: 'Ossiarch Bonereapers do not use standard Command Points; instead, they generate Relentless Discipline points each turn to issue specialized commands.'
      },
      {
        name: 'Nadirite Weapons',
        description: 'Unmodified hit rolls of 6 score 2 hits instead of 1.'
      }
    ],
    heroTraits: [
      {
        id: 'obr-kv-ht1',
        name: 'Master of the Cavalry Charge',
        type: 'Hero Trait',
        effect: 'Friendly Kavalos Deathriders within 12" add +1 to wound rolls on the turn they charge.'
      },
      {
        id: 'obr-kv-ht2',
        name: 'Architect of the Tithe',
        type: 'Hero Trait',
        effect: 'Gain 1 bonus Relentless Discipline point each battle round.'
      }
    ],
    artefacts: [
      {
        id: 'obr-kv-art1',
        name: 'Helm of the Steedmaster',
        type: 'Artefact of Power',
        effect: 'Add 2" to the Move characteristic of friendly Deathriders within 9".'
      },
      {
        id: 'obr-kv-art2',
        name: 'Lode of Nadirite',
        type: 'Artefact of Power',
        effect: 'Bearer’s weapons score critical hits on 5+.'
      }
    ],
    units: [
      {
        id: 'obr-liege-kavalos',
        name: 'Liege-Kavalos',
        role: 'Hero',
        modelCount: 1,
        baseSize: '80mm',
        move: '10"',
        health: 7,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Bone-tithe Lance & Steed Hooves',
            type: 'Melee',
            range: '2"',
            attacks: 6,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Endless Duty',
            phase: 'Combat',
            type: 'Active',
            effect: 'Pick 1 friendly Kavalos unit within 12"; add 1 to its melee attack characteristic.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'HERO', 'CAVALRY', 'LIEGE-KAVALOS']
      },
      {
        id: 'obr-deathriders',
        name: 'Kavalos Deathriders',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '10"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Nadirite Blade & Steed Hooves',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (2 Hits)'
          }
        ],
        abilities: [
          {
            name: 'Deathrider Wedge',
            phase: 'Charge',
            type: 'Active',
            effect: 'Roll 5 dice on charge: for each 4+, target unit takes 1 mortal wound.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'CAVALRY', 'DEATHRIDERS']
      },
      {
        id: 'obr-mortek-guard',
        name: 'Mortek Guard with Nadirite Blades',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '4"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Nadirite Blade',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (2 Hits)'
          }
        ],
        abilities: [
          {
            name: 'Shieldwall',
            phase: 'Combat',
            type: 'Active',
            effect: 'Re-roll failed save rolls for attacks that target this unit while holding ground.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'INFANTRY', 'MORTEK GUARD']
      }
    ]
  },

  // 19b. OSSIARCH BONEREAPERS - Mortisan Elite
  {
    id: 'obr-mortisan',
    name: 'Ossiarch Bonereapers',
    subTitle: 'Mortisan Elite',
    grandAlliance: 'DEATH',
    accentColor: 'from-amber-800 to-zinc-800',
    flavorQuote: 'Master bone-shapers sculpt invincible construct bodyguards from ossified bone and dark sorcery.',
    battleTraits: [
      {
        name: 'Bone-crafting Reconstruction',
        description: 'At the start of your hero phase, heal 3 wounds allocated to a construct unit or return 1 slain Immortis Guard.'
      },
      {
        name: 'Aspects of the Stalker',
        description: 'Necropolis Stalkers can shift stances each combat: Blade-strike (+1 Hit/Wound), Precision (+1 Rend), or Shield-block (reroll saves).'
      }
    ],
    heroTraits: [
      {
        id: 'obr-me-ht1',
        name: 'Artisan of Death',
        type: 'Hero Trait',
        effect: 'Heal an additional 2 wounds on nearby friendly constructs.'
      },
      {
        id: 'obr-me-ht2',
        name: 'Aura of Nullstone',
        type: 'Hero Trait',
        effect: 'Enemy wizards within 18" suffer -1 to casting rolls.'
      }
    ],
    artefacts: [
      {
        id: 'obr-me-art1',
        name: 'Gothizzar Shard',
        type: 'Artefact of Power',
        effect: 'Bearer gains a 4+ Ward save.'
      },
      {
        id: 'obr-me-art2',
        name: 'Ossified Chisel',
        type: 'Artefact of Power',
        effect: 'Bearer’s attacks inflict mortal wounds on 5+.'
      }
    ],
    units: [
      {
        id: 'obr-boneshaper',
        name: 'Mortisan Boneshaper',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Ossified Claws',
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
            name: 'Boneshaper Craft',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6. On a 2+, return 1 slain Immortis Guard or heal 3 wounds on a construct.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'HERO', 'WIZARD', 'BONESHAPER']
      },
      {
        id: 'obr-immortis',
        name: 'Immortis Guard',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '50mm',
        move: '4"',
        health: 12,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Dread Halberds',
            type: 'Melee',
            range: '2"',
            attacks: 9,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Soulbound Protectors',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Wounds allocated to nearby friendly Mortisan heroes can be transferred to this unit on a 2+.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'INFANTRY', 'IMMORTIS GUARD']
      },
      {
        id: 'obr-stalkers',
        name: 'Necropolis Stalkers',
        role: 'Monster',
        modelCount: 3,
        baseSize: '50mm',
        move: '6"',
        health: 12,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Spirit Blades & Falchions',
            type: 'Melee',
            range: '1"',
            attacks: 12,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Quadrilateral Aspects',
            phase: 'Combat',
            type: 'Active',
            effect: 'Choose 1 aspect each combat: add +1 Rend, or add +1 to Hit and Wound rolls.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'MONSTER', 'STALKERS']
      }
    ]
  },

  // 19c. OSSIARCH BONEREAPERS - Tithe-reaper Echelon
  {
    id: 'obr-tithe',
    name: 'Ossiarch Bonereapers',
    subTitle: 'Tithe-reaper Echelon',
    grandAlliance: 'DEATH',
    accentColor: 'from-amber-900 to-stone-900',
    flavorQuote: 'Long-range bone-catapults bombard enemy battlements while soulreapers reap the harvest.',
    battleTraits: [
      {
        name: 'Catapult Barrage',
        description: 'The Mortek Crawler can fire necrotic boulders up to 30" away with Rend -2 and Damage 3.'
      },
      {
        name: 'Soul-reaping Scythes',
        description: 'Whenever an enemy model is slain by a friendly Soulreaper, regain 1 Relentless Discipline point.'
      }
    ],
    heroTraits: [
      {
        id: 'obr-tr-ht1',
        name: 'Master of Siegecraft',
        type: 'Hero Trait',
        effect: 'Mortek Crawler rerolls hit rolls of 1.'
      },
      {
        id: 'obr-tr-ht2',
        name: 'Dread Harvester',
        type: 'Hero Trait',
        effect: 'General adds 1 to attacks and +1 to damage in combat.'
      }
    ],
    artefacts: [
      {
        id: 'obr-tr-art1',
        name: 'Soul-reaper Glaive',
        type: 'Artefact of Power',
        effect: 'Bearer’s attacks inflict Crit (Mortal).'
      },
      {
        id: 'obr-tr-art2',
        name: 'Necrotic Shell',
        type: 'Artefact of Power',
        effect: 'Friendly warmachine within 6" gains 5+ Ward.'
      }
    ],
    units: [
      {
        id: 'obr-soulreaper',
        name: 'Mortisan Soulreaper',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Soulreaper Scythe',
            type: 'Melee',
            range: '2"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Soul-blast',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6. On a 3+, target unit within 12" suffers D3 mortal wounds.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'HERO', 'WIZARD', 'SOULREAPER']
      },
      {
        id: 'obr-crawler',
        name: 'Mortek Crawler',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '170x105mm',
        move: '4"',
        health: 12,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Necrotic Skulls',
            type: 'Ranged',
            range: '30"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '3'
          },
          {
            name: 'Bone Blades',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Cursed Stele',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Can fire a cursed stele instead: on 3+, target unit cannot move or run next turn.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'WARMACHINE', 'CRAWLER']
      },
      {
        id: 'obr-mortek-tithe',
        name: 'Mortek Guard Cohort',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '4"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Nadirite Spear',
            type: 'Melee',
            range: '2"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (2 Hits)'
          }
        ],
        abilities: [
          {
            name: 'Endless Phalanx',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Can fight in 2 ranks while holding objectives.'
          }
        ],
        keywords: ['DEATH', 'OSSIARCH BONEREAPERS', 'INFANTRY', 'MORTEK GUARD']
      }
    ]
  },

  // 23. SOULBLIGHT GRAVELORDS - Bloodcrave Hunt
  {
    id: 'sbl-bloodcrave',
    name: 'Soulblight Gravelords',
    subTitle: 'Bloodcrave Hunt',
    grandAlliance: 'DEATH',
    accentColor: 'from-rose-900 to-red-950',
    flavorQuote: 'Blood is life! Armoured vampire knights ride down prey under the crimson gloom of the midnight moon.',
    battleTraits: [
      {
        name: 'The Hunger',
        description: 'Vampire units heal wounds at the end of any combat phase in which they destroyed an enemy model.'
      },
      {
        name: 'Martial Pride of the Kastelai',
        description: 'Blood Knights gain permanent buffs when they destroy enemy units (+1 Attack, +1 Damage, +1 Save).'
      }
    ],
    heroTraits: [
      {
        id: 'sbl-bc-ht1',
        name: 'Sanguine Apex Predator',
        type: 'Hero Trait',
        effect: 'Your General adds 1 to hit rolls and wound rolls in combat.'
      },
      {
        id: 'sbl-bc-ht2',
        name: 'Red Mist',
        type: 'Hero Trait',
        effect: 'Blood Knights within 12" can reroll charge rolls.'
      }
    ],
    artefacts: [
      {
        id: 'sbl-bc-art1',
        name: 'Crimson Plate',
        type: 'Artefact of Power',
        effect: 'Bearer has a 3+ Save and 5+ Ward.'
      },
      {
        id: 'sbl-bc-art2',
        name: 'Blood Drinker Blade',
        type: 'Artefact of Power',
        effect: 'Bearer heals 2 wounds each time they slay an enemy Hero.'
      }
    ],
    units: [
      {
        id: 'sbl-vampire-lord',
        name: 'Vampire Lord',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '6"',
        health: 5,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Spirit-damned Blade',
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
            name: 'Crimson Feast',
            phase: 'Combat',
            type: 'Active',
            effect: 'Pick 1 friendly Soulblight unit within 12"; add 1 to its attacks characteristic.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'HERO', 'WIZARD', 'VAMPIRE']
      },
      {
        id: 'sbl-blood-knights',
        name: 'Blood Knights',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '10"',
        health: 9,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Templar Lance & Nightmare Hooves',
            type: 'Melee',
            range: '1"',
            attacks: 9,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Riders of Ruin',
            phase: 'Movement',
            type: 'Active',
            effect: 'Can move across enemy models as if they have Fly, dealing mortal wounds on a 3+ as they trample.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'CAVALRY', 'VAMPIRE', 'BLOOD KNIGHTS']
      },
      {
        id: 'sbl-vargheists',
        name: 'Vargheists',
        role: 'Monster',
        modelCount: 3,
        baseSize: '50mm',
        move: '12"',
        health: 12,
        save: '5+',
        control: 3,
        weapons: [
          {
            name: 'Murderous Fangs & Talons',
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
            name: 'Blood-maddened Frenzy',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Unmodified hit rolls of 6 score 2 hits instead of 1.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'FLY', 'MONSTER', 'VARGHEISTS']
      }
    ]
  },

  // 23b. SOULBLIGHT GRAVELORDS - Deathrattle Tomb Host
  {
    id: 'sbl-deathrattle',
    name: 'Soulblight Gravelords',
    subTitle: 'Deathrattle Tomb Host',
    grandAlliance: 'DEATH',
    accentColor: 'from-stone-800 to-indigo-950',
    flavorQuote: 'Centuries in royal tombs have not dulled their martial skill. Ancient skeletal kings lead disciplined phalanxes.',
    battleTraits: [
      {
        name: 'Endless Legions of Death',
        description: 'Slain Deathrattle Skeletons return to the battlefield on a 4+ at the end of the combat phase.'
      },
      {
        name: 'Deathless Minions',
        description: 'Friendly Deathrattle units wholly within 12" of your Wight King have a 6+ Ward save.'
      }
    ],
    heroTraits: [
      {
        id: 'sbl-dt-ht1',
        name: 'Ancient Tactician',
        type: 'Hero Trait',
        effect: 'Friendly Black Knights and Grave Guard within 12" add +1 to their charge rolls.'
      },
      {
        id: 'sbl-dt-ht2',
        name: 'Tomb King Resilience',
        type: 'Hero Trait',
        effect: 'Your General adds 2 to Health and gains 5+ Ward.'
      }
    ],
    artefacts: [
      {
        id: 'sbl-dt-art1',
        name: 'Tomb Blade of Krell',
        type: 'Artefact of Power',
        effect: 'Bearer’s weapon deals mortal wounds on 5+.'
      },
      {
        id: 'sbl-dt-art2',
        name: 'Standard of the Crimson Keep',
        type: 'Artefact of Power',
        effect: 'Friendly units within 12" cannot be battleshocked and gain +1 to hit.'
      }
    ],
    units: [
      {
        id: 'sbl-wight-king',
        name: 'Wight King on Skeletal Steed',
        role: 'Hero',
        modelCount: 1,
        baseSize: '75x42mm',
        move: '10"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Tomb Blade',
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
            name: 'Lord of Bones',
            phase: 'Combat',
            type: 'Active',
            effect: 'Pick 1 friendly Deathrattle unit within 12"; add 1 to its attacks characteristic.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'HERO', 'CAVALRY', 'WIGHT KING']
      },
      {
        id: 'sbl-black-knights',
        name: 'Black Knights',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '10"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Barrow Lance & Skeletal Hooves',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Crypt Charge',
            phase: 'Charge',
            type: 'Active',
            effect: 'Roll 5 dice on charge: for each 4+, target unit takes 1 mortal wound; lances gain +1 Damage on charge.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'CAVALRY', 'DEATHRATTLE', 'BLACK KNIGHTS']
      },
      {
        id: 'sbl-grave-guard',
        name: 'Grave Guard with Great Wight Blades',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '4"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Great Wight Blade',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Cursed Blades',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Unmodified wound rolls of 6 inflict mortal wounds in addition to normal damage.'
          }
        ],
        keywords: ['DEATH', 'SOULBLIGHT GRAVELORDS', 'INFANTRY', 'DEATHRATTLE', 'GRAVE GUARD']
      }
    ]
  }
];
