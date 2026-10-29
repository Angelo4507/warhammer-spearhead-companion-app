import { SpearheadFaction } from '../../types/spearhead';

export const ORDER_FACTIONS: SpearheadFaction[] = [
  // 1. STORMCAST ETERNALS - Vigilant Brotherhood
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

  // 1b. STORMCAST ETERNALS - Yndrasta's Spearhead
  {
    id: 'stormcast-yndrasta',
    name: 'Stormcast Eternals',
    subTitle: "Yndrasta's Spearhead",
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-500 to-yellow-300',
    flavorQuote: 'The Prime Hunter swoops from the heavens to skewer the monstrous beasts of the Mortal Realms.',
    battleTraits: [
      {
        name: 'Prime Hunter',
        description: 'Yndrasta adds 1 to wound rolls and +1 Damage characteristic against enemy MONSTERS and HEROES.'
      },
      {
        name: 'Azyrite Meteoric Impact',
        description: 'When Annihilators complete a charge move, roll a D6 for each model; on a 3+, target suffers D3 mortal damage.'
      }
    ],
    heroTraits: [
      {
        id: 'ynd-ht-1',
        name: 'Apex Slayer',
        type: 'Hero Trait',
        effect: 'Your General rerolls hit rolls of 1 against enemy models with 5 or more Health.'
      },
      {
        id: 'ynd-ht-2',
        name: 'Celestial Deliverer',
        type: 'Hero Trait',
        effect: 'Friendly units wholly within 12" of your General add 1 to their Bravery/Control.'
      }
    ],
    artefacts: [
      {
        id: 'ynd-art-1',
        name: 'Thengavar, Spear of the Heavens',
        type: 'Artefact of Power',
        effect: 'Add 1 to Rend on the bearer’s missile and melee spear attacks.'
      },
      {
        id: 'ynd-art-2',
        name: 'Apotheosis Standard',
        type: 'Artefact of Power',
        effect: 'At the start of your Hero phase, heal D3 wounds allocated to a friendly unit within 6".'
      }
    ],
    units: [
      {
        id: 'ynd-hero',
        name: 'Yndrasta, the Celestial Spear',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60mm',
        move: '12"',
        health: 8,
        save: '3+',
        control: 4,
        weapons: [
          {
            name: 'Thengavar (Thrown)',
            type: 'Ranged',
            range: '12"',
            attacks: 1,
            toHit: '2+',
            toWound: '2+',
            rend: '-2',
            damage: '3',
            ability: 'Monster Hunter'
          },
          {
            name: 'Thengavar (Melee)',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '2+',
            toWound: '3+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Dazzling Radiance',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Enemy units in combat with Yndrasta suffer -1 to hit rolls.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'HERO', 'MONSTER', 'FLY', 'YNDRASTA']
      },
      {
        id: 'ynd-annihilators',
        name: 'Annihilators with Meteoric Grandhammers',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '4"',
        health: 9,
        save: '2+',
        control: 3,
        weapons: [
          {
            name: 'Meteoric Grandhammer',
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
            name: 'Bludgeoning Impact',
            phase: 'Charge',
            type: 'Active',
            effect: 'Enemy units charged by Annihilators roll 1 fewer attack dice in the following combat.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'INFANTRY', 'ANNIHILATORS']
      },
      {
        id: 'ynd-vanquishers',
        name: 'Vanquishers',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '40mm',
        move: '5"',
        health: 10,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Celestial Greatswords',
            type: 'Melee',
            range: '1"',
            attacks: 11,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (2 Hits)'
          }
        ],
        abilities: [
          {
            name: 'Storm Strike',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to hit rolls if targeting an enemy unit with 5 or more models.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'INFANTRY', 'VANQUISHERS']
      }
    ]
  },

  // 2. CITIES OF SIGMAR - Castelite Company
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
  },

  // 2b. CITIES OF SIGMAR - Fusil Platoon
  {
    id: 'cities-fusil',
    name: 'Cities of Sigmar',
    subTitle: 'Fusil Platoon',
    grandAlliance: 'ORDER',
    accentColor: 'from-blue-800 to-amber-700',
    flavorQuote: 'Keep your powder dry and reload on cadence. When the volley fires, nothing stands.',
    battleTraits: [
      {
        name: 'Rolling Fire',
        description: 'If a friendly shooting unit does not move during your Movement phase, its ranged weapons gain Crit (Auto-wound).'
      },
      {
        name: 'Fortified Pavises',
        description: 'Friendly Fusiliers add 1 to their Save characteristic against ranged attacks.'
      }
    ],
    heroTraits: [
      {
        id: 'fusil-ht-1',
        name: 'Eagle-eyed Spotter',
        type: 'Hero Trait',
        effect: 'Add 3" to the Range characteristic of missile weapons for friendly units wholly within 9" of your General.'
      },
      {
        id: 'fusil-ht-2',
        name: 'Steady Gunner',
        type: 'Hero Trait',
        effect: 'Your General rerolls hit rolls of 1 with ranged weapons.'
      }
    ],
    artefacts: [
      {
        id: 'fusil-art-1',
        name: 'Muzzle-loaded Alchemical Shot',
        type: 'Artefact of Power',
        effect: 'Once per battle, double the Damage characteristic of the bearer’s shooting attack.'
      },
      {
        id: 'fusil-art-2',
        name: 'Grand Artillery Chronometer',
        type: 'Artefact of Power',
        effect: 'Friendly artillery within 6" can reroll the number of attacks dice.'
      }
    ],
    units: [
      {
        id: 'fusil-major',
        name: 'Fusil-Major on Ogor Warhulk',
        role: 'Hero',
        modelCount: 1,
        baseSize: '50mm',
        move: '5"',
        health: 7,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Longfusil',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          },
          {
            name: 'Heavy Mace & Shield',
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
            name: 'Take Aim',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Pick 1 friendly Fusilier unit within 12"; add 1 to their shooting hit rolls.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'FUSIL-MAJOR']
      },
      {
        id: 'fusil-fusiliers',
        name: 'Freeguild Fusiliers',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '28mm',
        move: '4"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Fusil-cannon',
            type: 'Ranged',
            range: '15"',
            attacks: 10,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Bayonets',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '5+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Fusillade',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Once per battle, if this unit did not move, its ranged weapons attack characteristic is doubled.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'FUSILIERS']
      },
      {
        id: 'fusil-cannon',
        name: 'Ironweld Great Cannon',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '3"',
        health: 7,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Cannon Shell',
            type: 'Ranged',
            range: '24"',
            attacks: 'D3',
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          },
          {
            name: 'Crew Rammers',
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
            name: 'Shrapnel Blast',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Can fire grape shot instead: Range 12", 2D6 attacks, rend 0, 1 damage.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'WARMACHINE', 'IRONWELD']
      }
    ]
  },

  // 2c. CITIES OF SIGMAR - Sentinels of Embergard
  {
    id: 'cities-embergard',
    name: 'Cities of Sigmar',
    subTitle: 'Sentinels of Embergard',
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-700 to-stone-800',
    flavorQuote: 'From the molten ash of the fiery realm, the stalwart garrison of Embergard holds the line.',
    battleTraits: [
      {
        name: 'Ashland Fortitude',
        description: 'Friendly units contesting objectives wholly within your territory ignore the first point of Rend on incoming attacks.'
      },
      {
        name: 'Retaliatory Volley',
        description: 'Once per round, when an enemy unit declares a charge against a friendly unit, another eligible unit within 6" can unleash shooting attacks.'
      }
    ],
    heroTraits: [
      {
        id: 'emb-ht-1',
        name: 'Castellan of Embergard',
        type: 'Hero Trait',
        effect: 'Friendly units within 6" of your General add +2 to Control when holding an objective marker.'
      },
      {
        id: 'emb-ht-2',
        name: 'Fiery Retribution',
        type: 'Hero Trait',
        effect: 'When your General is targeted by melee attacks, the attacker suffers D3 mortal wounds on an unmodified save roll of 6.'
      }
    ],
    artefacts: [
      {
        id: 'emb-art-1',
        name: 'Embergards Hearthstone',
        type: 'Artefact of Power',
        effect: 'The bearer and friendly units within 3" gain a 6+ Ward save.'
      },
      {
        id: 'emb-art-2',
        name: 'Banner of the Ashen Gate',
        type: 'Artefact of Power',
        effect: 'Add 1 to hit rolls for friendly units within 8" of the bearer.'
      }
    ],
    units: [
      {
        id: 'emb-marshal',
        name: 'Freeguild Cavalier-Marshal',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60x35mm',
        move: '10"',
        health: 6,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Masterwork Sabre',
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
            name: 'Lead the Charge',
            phase: 'Charge',
            type: 'Active',
            effect: 'Friendly cavalry units within 12" can reroll charge rolls.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'CAVALRY', 'CAVALIER-MARSHAL']
      },
      {
        id: 'emb-cavaliers',
        name: 'Embergard Cavaliers',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '60x35mm',
        move: '10"',
        health: 9,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Forged Lances',
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
            name: 'Momentum',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to damage characteristic on the turn this unit completes a charge.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'CAVALRY', 'EMBERGARD']
      },
      {
        id: 'emb-corps',
        name: 'Freeguild Command Corps',
        role: 'Infantry',
        modelCount: 6,
        baseSize: '32mm',
        move: '5"',
        health: 12,
        save: '4+',
        control: 4,
        weapons: [
          {
            name: 'Assorted Blades & Pistols',
            type: 'Melee',
            range: '1"',
            attacks: 8,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Miasmic Tinctures',
            phase: 'Hero',
            type: 'Active',
            effect: 'Heal D3 wounds allocated to a friendly unit within 6".'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'COMMAND CORPS']
      }
    ]
  },

  // 2d. CITIES OF SIGMAR - Zenestra’s Zealots
  {
    id: 'cities-zenestra',
    name: 'Cities of Sigmar',
    subTitle: 'Zenestra’s Zealots',
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-600 to-red-800',
    flavorQuote: 'The Matriarch of the Great Wheel preaches cleansing fire to every heretic and unbeliever.',
    battleTraits: [
      {
        name: 'Fervent Devotion',
        description: 'Friendly units gain a 5+ Ward save against mortal wounds and spells.'
      },
      {
        name: 'Zealous Advance',
        description: 'Friendly Flagellants and Wildercorps can charge even if they made a Run move in the same turn.'
      }
    ],
    heroTraits: [
      {
        id: 'zen-ht-1',
        name: 'Voice of the Great Wheel',
        type: 'Hero Trait',
        effect: 'Add 1 to chant and prayer rolls for your General.'
      },
      {
        id: 'zen-ht-2',
        name: 'Martyr’s Inspiration',
        type: 'Hero Trait',
        effect: 'When a friendly unit within 6" of your General is destroyed, all nearby friendly units add +1 to hit for the round.'
      }
    ],
    artefacts: [
      {
        id: 'zen-art-1',
        name: 'Reliquary of the Wheel',
        type: 'Artefact of Power',
        effect: 'Bearer adds 2 to Health and gains 5+ Ward.'
      },
      {
        id: 'zen-art-2',
        name: 'Censer of Purifying Flame',
        type: 'Artefact of Power',
        effect: 'Enemy units in combat with bearer cannot make Ward saves.'
      }
    ],
    units: [
      {
        id: 'zen-pontifex',
        name: 'Pontifex Zenestra, Matriarch of the Great Wheel',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60mm',
        move: '4"',
        health: 7,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Palanquin Carriers’ Flails',
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
            name: 'Voice of Sigmar',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6. On a 3+, friendly units wholly within 12" gain 5+ Ward until your next hero phase.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'PRIEST', 'ZENESTRA']
      },
      {
        id: 'zen-flagellants',
        name: 'Flagellants',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 10,
        save: '6+',
        control: 5,
        weapons: [
          {
            name: 'Flails & Clubs',
            type: 'Melee',
            range: '1"',
            attacks: 15,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Fanatical Frenzy',
            phase: 'Combat',
            type: 'Passive',
            effect: 'When this unit is destroyed in combat, roll a D6 for each slain model: on a 4+, the attacking unit suffers 1 mortal wound.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'FLAGELLANTS']
      },
      {
        id: 'zen-wildercorps',
        name: 'Wildercorps Hunters',
        role: 'Infantry',
        modelCount: 8,
        baseSize: '28mm',
        move: '6"',
        health: 9,
        save: '5+',
        control: 4,
        weapons: [
          {
            name: 'Hunting Crossbows',
            type: 'Ranged',
            range: '12"',
            attacks: 7,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Hunting Hounds & Hatchets',
            type: 'Melee',
            range: '1"',
            attacks: 8,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Hidden Trail',
            phase: 'Movement',
            type: 'Active',
            effect: 'Cannot be targeted by ranged attacks while in cover or more than 12" away.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'WILDERCORPS']
      }
    ]
  },

  // 7. DAUGHTERS OF KHAINE - Heartflayer Troupe
  {
    id: 'dok-heartflayer',
    name: 'Daughters of Khaine',
    subTitle: 'Heartflayer Troupe',
    grandAlliance: 'ORDER',
    accentColor: 'from-rose-800 to-red-600',
    flavorQuote: 'In the spray of crimson blood, the daughters dance their sacred murder-rite for Khaine.',
    battleTraits: [
      {
        name: 'Blood Rites',
        description: 'Units gain escalating benefits each round: Round 1 (+1 Run), Round 2 (+1 Charge), Round 3 (+1 Hit), Round 4 (+1 Wound & 6+ Ward).'
      },
      {
        name: 'Fanatical Zeal',
        description: 'Friendly units can fight immediately when slain in the combat phase before models are removed.'
      }
    ],
    heroTraits: [
      {
        id: 'dok-hf-ht1',
        name: 'Mistress of the Slither',
        type: 'Hero Trait',
        effect: 'Your General adds 2" to their Move characteristic and can retreat and charge in the same turn.'
      },
      {
        id: 'dok-hf-ht2',
        name: 'Venomous Strike',
        type: 'Hero Trait',
        effect: 'Unmodified hit rolls of 6 for your General inflict 1 mortal wound in addition to normal damage.'
      }
    ],
    artefacts: [
      {
        id: 'dok-hf-art1',
        name: 'Heartseeker Bow',
        type: 'Artefact of Power',
        effect: 'Bearer’s missile attacks ignore cover and score critical hits on 5+.'
      },
      {
        id: 'dok-hf-art2',
        name: 'Iron Cirque of Blood',
        type: 'Artefact of Power',
        effect: 'Bearer gains a 5+ Ward save.'
      }
    ],
    units: [
      {
        id: 'dok-melusai-ironscale',
        name: 'Melusai Ironscale',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '8"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Keldrek Staff & Tail',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Wrath of the Scáthborn',
            phase: 'Combat',
            type: 'Active',
            effect: 'Pick 1 friendly Melusai unit within 12"; add 1 to their attack characteristic this phase.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'HERO', 'MELUSAI']
      },
      {
        id: 'dok-blood-stalkers',
        name: 'Blood Stalkers',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '40mm',
        move: '8"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Heartseeker Bow',
            type: 'Ranged',
            range: '18"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Crit (Mortal)'
          },
          {
            name: 'Scáthborn Scythe',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Heartseekers',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Unmodified 6s to hit with Heartseeker Bows inflict mortal wounds directly and end the attack sequence.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'INFANTRY', 'BLOOD STALKERS']
      },
      {
        id: 'dok-blood-sisters',
        name: 'Blood Sisters',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '40mm',
        move: '8"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Crystal Heart Glaive',
            type: 'Melee',
            range: '2"',
            attacks: 10,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Turned to Crystal',
            phase: 'Combat',
            type: 'Active',
            effect: 'After this unit attacks, pick 1 enemy unit within 1"; roll a D6 for each model in this unit. On a 5+, that enemy unit suffers 1 mortal wound.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'INFANTRY', 'BLOOD SISTERS']
      }
    ]
  },

  // 7b. DAUGHTERS OF KHAINE - Khainite Shadow Coven
  {
    id: 'dok-shadowcoven',
    name: 'Daughters of Khaine',
    subTitle: 'Khainite Shadow Coven',
    grandAlliance: 'ORDER',
    accentColor: 'from-pink-800 to-rose-700',
    flavorQuote: 'A whirling vortex of paired blades and frantic devotional frenzy dedicated to Morathi-Khaine.',
    battleTraits: [
      {
        name: 'Worship Through Murder',
        description: 'Whenever a friendly unit destroys an enemy unit, all friendly Witch Aelves within 12" gain +1 Attack for the remainder of the round.'
      },
      {
        name: 'Shadow Flight',
        description: 'Khinerai can be set up in ambush in the skies and drop down 9" from enemies in any movement phase.'
      }
    ],
    heroTraits: [
      {
        id: 'dok-sc-ht1',
        name: 'Zealous Slaughterer',
        type: 'Hero Trait',
        effect: 'Add 1 to the Damage characteristic of the General’s melee weapons on turns they charge.'
      },
      {
        id: 'dok-sc-ht2',
        name: 'Gorgon’s Gaze',
        type: 'Hero Trait',
        effect: 'Enemy units in combat with the General suffer -1 to their Save rolls.'
      }
    ],
    artefacts: [
      {
        id: 'dok-sc-art1',
        name: 'Shadow Blade',
        type: 'Artefact of Power',
        effect: 'Bearer’s weapons have Rend -2.'
      },
      {
        id: 'dok-sc-art2',
        name: 'Amulet of the Blood God',
        type: 'Artefact of Power',
        effect: 'Bearer gains a 4+ Ward save against spells and mortal wounds.'
      }
    ],
    units: [
      {
        id: 'dok-slaughter-queen',
        name: 'Slaughter Queen',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Blade of Khaine',
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
            name: 'Praise Through Bloodshed',
            phase: 'Hero',
            type: 'Active',
            effect: 'Pick 1 friendly Witch Aelf unit within 12"; add 1 to their wound rolls in combat.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'HERO', 'PRIEST', 'SLAUGHTER QUEEN']
      },
      {
        id: 'dok-witch-aelves',
        name: 'Witch Aelves with Paired Sciansá',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 10,
        save: '6+',
        control: 5,
        weapons: [
          {
            name: 'Paired Sciansá Blades',
            type: 'Melee',
            range: '1"',
            attacks: 20,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Frenzied Fervour'
          }
        ],
        abilities: [
          {
            name: 'Bucklers or Blades',
            phase: 'Combat',
            type: 'Passive',
            effect: 'This unit has a 6+ Ward save that improves to 5+ if wholly within 12" of any friendly HERO.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'INFANTRY', 'WITCH AELVES']
      },
      {
        id: 'dok-khinerai',
        name: 'Khinerai Heartrenders',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '32mm',
        move: '12"',
        health: 5,
        save: '5+',
        control: 3,
        weapons: [
          {
            name: 'Heartpiercer Javelins',
            type: 'Ranged',
            range: '12"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '1'
          },
          {
            name: 'Talons',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Fire and Flight',
            phase: 'Shooting',
            type: 'Active',
            effect: 'After shooting, this unit can make a normal move of 6" as a reaction.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'FLY', 'KHINERAI']
      }
    ]
  },

  // 10. FYRESLAYERS - Saga Axeband
  {
    id: 'fyreslayers-axeband',
    name: 'Fyreslayers',
    subTitle: 'Saga Axeband',
    grandAlliance: 'ORDER',
    accentColor: 'from-orange-600 to-amber-700',
    flavorQuote: 'By Grimnir’s fiery beard! Ur-gold burns within our flesh, and no oath shall go unfulfilled.',
    battleTraits: [
      {
        name: 'Ur-Gold Runes',
        description: 'At the start of each battle round, activate 1 of 4 runes: Rune of Fury (+1 Attack), Rune of Searing Heat (unmodified 6s to wound inflict mortal damage), Rune of Awakened Steel (+1 Rend), or Rune of Relentless Zeal (+2" Move).'
      },
      {
        name: 'Grimnir’s Vow',
        description: 'All friendly models have a 6+ Ward save, improving to 5+ while contesting contested objectives.'
      }
    ],
    heroTraits: [
      {
        id: 'fs-ht-1',
        name: 'Keeper of the Lodges',
        type: 'Hero Trait',
        effect: 'Friendly Fyreslayers wholly within 12" of your General ignore negative modifiers to their Control characteristics.'
      },
      {
        id: 'fs-ht-2',
        name: 'Avatar of Grimnir',
        type: 'Hero Trait',
        effect: 'Your General adds 2 to their Health and can reroll failed charge rolls.'
      }
    ],
    artefacts: [
      {
        id: 'fs-art-1',
        name: 'Master-forged Magma-pike',
        type: 'Artefact of Power',
        effect: 'Ranged attacks made by the bearer score critical hits on 5+.'
      },
      {
        id: 'fs-art-2',
        name: 'Draught of Magmalt Ale',
        type: 'Artefact of Power',
        effect: 'Once per battle, heal all wounds allocated to the bearer and add +2 to their melee attacks until end of turn.'
      }
    ],
    units: [
      {
        id: 'fs-battlesmith',
        name: 'Battlesmith',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '4"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Ancestral Battleaxe',
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
            name: 'Icon of Grimnir',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Friendly Fyreslayer units wholly within 12" gain a 6+ Ward save and cannot fail battleshock.'
          }
        ],
        keywords: ['ORDER', 'FYRESLAYERS', 'HERO', 'BATTLESMITH', 'DUARDIN']
      },
      {
        id: 'fs-vulkite',
        name: 'Vulkite Berzerkers with Fyresteel Handaxes',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '4"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Fyresteel Handaxes',
            type: 'Melee',
            range: '1"',
            attacks: 20,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Berserk Fury',
            phase: 'Combat',
            type: 'Passive',
            effect: 'If this unit charged this turn, add 1 to the attacks characteristic of its weapons.'
          }
        ],
        keywords: ['ORDER', 'FYRESLAYERS', 'INFANTRY', 'VULKITE BERZERKERS']
      },
      {
        id: 'fs-hearthguard',
        name: 'Hearthguard Berzerkers with Poleaxes',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Flamestrike Poleaxe',
            type: 'Melee',
            range: '2"',
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
            name: 'Duty Unto Death',
            phase: 'Combat',
            type: 'Passive',
            effect: 'While wholly within 6" of a friendly HERO, this unit has a 4+ Ward save.'
          }
        ],
        keywords: ['ORDER', 'FYRESLAYERS', 'INFANTRY', 'HEARTHGUARD']
      }
    ]
  },

  // 14. IDONETH DEEPKIN - Akhelian Tide Guard
  {
    id: 'idoneth-tideguard',
    name: 'Idoneth Deepkin',
    subTitle: 'Akhelian Tide Guard',
    grandAlliance: 'ORDER',
    accentColor: 'from-cyan-700 to-blue-900',
    flavorQuote: 'From the crushing abyss they surge upon an ethersea tide, harvesting mortal souls for survival.',
    battleTraits: [
      {
        name: 'Tides of Death',
        description: 'Tidal effects: Round 1 Low Tide (Cover everywhere), Round 2 Flood Tide (+1 Run & Charge), Round 3 High Tide (Strike-First on all units), Round 4 Ebb Tide (Retreat and Shoot/Charge).'
      },
      {
        name: 'Ethersea Gloom',
        description: 'Enemy missile weapons can only target the closest visible Idoneth Deepkin unit.'
      }
    ],
    heroTraits: [
      {
        id: 'id-tg-ht1',
        name: 'Born from the Trench',
        type: 'Hero Trait',
        effect: 'Your General adds 1 to save rolls and heals 1 wound at the start of your Hero phase.'
      },
      {
        id: 'id-tg-ht2',
        name: 'Soul-harvester',
        type: 'Hero Trait',
        effect: 'When your General destroys an enemy model, heal 1 model in a nearby friendly Namarti unit.'
      }
    ],
    artefacts: [
      {
        id: 'id-tg-art1',
        name: 'Bio-shock Pearl',
        type: 'Artefact of Power',
        effect: 'Once per battle, enemy units in combat suffer -1 to hit and cannot use commands.'
      },
      {
        id: 'id-tg-art2',
        name: 'Armour of the Cythai',
        type: 'Artefact of Power',
        effect: 'Bearer cannot be wounded on rolls of 1-3 regardless of attacker modifiers.'
      }
    ],
    units: [
      {
        id: 'id-soulrender',
        name: 'Isharann Soulrender',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Talúnhook & Rope',
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
            name: 'Lurelight Call',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'Return D3 slain Namarti models to a friendly unit within 12".'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'HERO', 'ISHARANN', 'SOULRENDER']
      },
      {
        id: 'id-thralls',
        name: 'Namarti Thralls',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '6"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Lanmari Greatsword',
            type: 'Melee',
            range: '1"',
            attacks: 15,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Sweeping Blows',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Choose weapon stance: +1 Attack against hordes, or +1 Damage against multi-wound targets.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'INFANTRY', 'NAMARTI THRALLS']
      },
      {
        id: 'id-ishlaen',
        name: 'Akhelian Ishlaen Guard',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '14"',
        health: 9,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Helsabre & Fangmora Fins',
            type: 'Melee',
            range: '1"',
            attacks: 9,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Bio-electric Barrier',
            phase: 'Combat',
            type: 'Passive',
            effect: 'On turns this unit made a charge, its Save characteristic becomes 3+ unmodifiable by Rend.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'FLY', 'CAVALRY', 'ISHLAEN GUARD']
      }
    ]
  },

  // 14b. IDONETH DEEPKIN - Soulraid Hunt
  {
    id: 'idoneth-soulraid',
    name: 'Idoneth Deepkin',
    subTitle: 'Soulraid Hunt',
    grandAlliance: 'ORDER',
    accentColor: 'from-teal-600 to-sky-800',
    flavorQuote: 'Akhelian nobles ride swift deep-sea apex predators to run down quarry across the battlefield.',
    battleTraits: [
      {
        name: 'Predatory Prowl',
        description: 'Friendly cavalry and monster units add 2" to their Movement characteristic when moving toward the closest enemy unit.'
      },
      {
        name: 'Wave of Blood',
        description: 'When an enemy unit is wounded, friendly Akhelian units gain +1 to hit against it.'
      }
    ],
    heroTraits: [
      {
        id: 'id-sr-ht1',
        name: 'Lord of the Depths',
        type: 'Hero Trait',
        effect: 'Your General can fight first in combat if within 3" of an enemy Monster or Hero.'
      },
      {
        id: 'id-sr-ht2',
        name: 'Apex Cavalier',
        type: 'Hero Trait',
        effect: 'Add 1 to the Attacks characteristic of your General’s mount weapons.'
      }
    ],
    artefacts: [
      {
        id: 'id-sr-art1',
        name: 'Steed-caller Conch',
        type: 'Artefact of Power',
        effect: 'Once per battle, allow 1 friendly cavalry unit to redeploy up to 9".'
      },
      {
        id: 'id-sr-art2',
        name: 'Deep-reef Glaive',
        type: 'Artefact of Power',
        effect: 'Bearer’s attacks inflict 2 damage instead of 1.'
      }
    ],
    units: [
      {
        id: 'id-king',
        name: 'Akhelian King',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60mm',
        move: '14"',
        health: 7,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Greatsword & Deepmare Horns',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Lord of the Tides',
            phase: 'Hero',
            type: 'Active',
            effect: 'Choose 1 friendly Akhelian unit within 12"; add 1 to their hit rolls this turn.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'HERO', 'CAVALRY', 'AKHELIAN KING']
      },
      {
        id: 'id-morrsarr',
        name: 'Akhelian Morrsarr Guard',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '14"',
        health: 9,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Volt-spear',
            type: 'Melee',
            range: '2"',
            attacks: 6,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Biovoltaic Blast',
            phase: 'Combat',
            type: 'Active',
            effect: 'Once per battle on a charge, roll 3 dice for each model: on 5+, the target suffers 1 mortal wound.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'FLY', 'CAVALRY', 'MORRSARR GUARD']
      },
      {
        id: 'id-reavers',
        name: 'Namarti Reavers',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '6"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Whisperbow',
            type: 'Ranged',
            range: '18"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Keening Daggers',
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
            name: 'Fluid Fire',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Can shoot in the same turn this unit retreats.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'INFANTRY', 'NAMARTI REAVERS']
      }
    ]
  },

  // 15. KHARADRON OVERLORDS - Grundstok Trailblazers
  {
    id: 'kharadron-trailblazers',
    name: 'Kharadron Overlords',
    subTitle: 'Grundstok Trailblazers',
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-600 to-slate-700',
    flavorQuote: 'Calculate profit, check the barometric ether-pressure, and let the firepower do the talking.',
    battleTraits: [
      {
        name: 'Sky-vessel Embarkation',
        description: 'Infantry units can embark within the Grundstok Gunhauler to shoot from its deck and move across the battlefield with it.'
      },
      {
        name: 'Aether-gold Shares',
        description: 'Once per battle, spend 1 Aether-gold share to allow 1 unit to reroll all failed hit rolls or failed save rolls.'
      }
    ],
    heroTraits: [
      {
        id: 'ko-tb-ht1',
        name: 'Canny Negotiator',
        type: 'Hero Trait',
        effect: 'Gain 1 additional Command Point at the start of your first turn.'
      },
      {
        id: 'ko-tb-ht2',
        name: 'Veteran Admiral',
        type: 'Hero Trait',
        effect: 'Friendly missile units within 9" of the Admiral add 1 to their shooting wound rolls.'
      }
    ],
    artefacts: [
      {
        id: 'ko-tb-art1',
        name: 'Masterwrought Volley Pistol',
        type: 'Artefact of Power',
        effect: 'Bearer’s pistol has 6 attacks instead of 3, with Rend -1.'
      },
      {
        id: 'ko-tb-art2',
        name: 'Gilded Aether-compass',
        type: 'Artefact of Power',
        effect: 'Friendly units can run and shoot in the same turn.'
      }
    ],
    units: [
      {
        id: 'ko-admiral',
        name: 'Arkanaut Admiral',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '4"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Volley Pistol',
            type: 'Ranged',
            range: '12"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Skalfhammer',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Master of the Skies',
            phase: 'Hero',
            type: 'Active',
            effect: 'Pick 1 friendly sky-vessel within 12"; it can heal D3 wounds or add 1 to its hit rolls.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'HERO', 'DUARDIN', 'ADMIRAL']
      },
      {
        id: 'ko-thunderers',
        name: 'Grundstok Thunderers',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 5,
        save: '4+',
        control: 4,
        weapons: [
          {
            name: 'Aethershot Rifle',
            type: 'Ranged',
            range: '18"',
            attacks: 10,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Gun Butts',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Pin them Down!',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'If an enemy unit suffers damage from this unit, halve its Move characteristic until end of turn.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'INFANTRY', 'THUNDERERS']
      },
      {
        id: 'ko-gunhauler',
        name: 'Grundstok Gunhauler',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '105x70mm',
        move: '12"',
        health: 10,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Drill Cannon',
            type: 'Ranged',
            range: '24"',
            attacks: 2,
            toHit: '3+',
            toWound: '2+',
            rend: '-3',
            damage: '3'
          },
          {
            name: 'Aethershot Carbines',
            type: 'Ranged',
            range: '12"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Fly High',
            phase: 'Movement',
            type: 'Active',
            effect: 'Instead of making a normal move, this vessel can redeploy to anywhere more than 9" from enemy units.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'FLY', 'WARMACHINE', 'GUNHAULER']
      }
    ]
  },

  // 15b. KHARADRON OVERLORDS - Skyhammer Task Force
  {
    id: 'kharadron-skyhammer',
    name: 'Kharadron Overlords',
    subTitle: 'Skyhammer Task Force',
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-700 to-sky-700',
    flavorQuote: 'Airborne aeronauts propelled by ether-turbines strike from above to dismantle the enemy’s fortifications.',
    battleTraits: [
      {
        name: 'Aetheric Airborne Assault',
        description: 'All friendly Endrinriggers and Skywardens can shoot even after falling back or running.'
      },
      {
        name: 'High-Altitude Maintenance',
        description: 'At the start of your Hero phase, friendly Endrinmasters heal D3 wounds on a nearby sky-vessel or construct.'
      }
    ],
    heroTraits: [
      {
        id: 'ko-sh-ht1',
        name: 'Aeronautical Genius',
        type: 'Hero Trait',
        effect: 'Add 2" to the Move characteristic of friendly airborne units within 12".'
      },
      {
        id: 'ko-sh-ht2',
        name: 'Explosive Charge',
        type: 'Hero Trait',
        effect: 'When charging, the General deals D3 mortal wounds on a 3+ to the charged target.'
      }
    ],
    artefacts: [
      {
        id: 'ko-sh-art1',
        name: 'Supercharged Dirigible Suit',
        type: 'Artefact of Power',
        effect: 'Bearer gains a 5+ Ward save and adds 1 to melee attacks.'
      },
      {
        id: 'ko-sh-art2',
        name: 'Phosphor Targeter',
        type: 'Artefact of Power',
        effect: 'Designate 1 enemy unit: all friendly ranged attacks against it ignore cover and gain +1 to hit.'
      }
    ],
    units: [
      {
        id: 'ko-endrinmaster',
        name: 'Endrinmaster with Dirigible Suit',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '12"',
        health: 7,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Aetherhammer',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '2'
          },
          {
            name: 'Aetherflame Pistol',
            type: 'Ranged',
            range: '9"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Endrin Repairs',
            phase: 'Hero',
            type: 'Active',
            effect: 'Heal 3 wounds on any friendly mechanical unit within 3".'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'HERO', 'FLY', 'ENDRINMASTER']
      },
      {
        id: 'ko-skywardens',
        name: 'Skywardens with Vulcaniser Pistols',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '32mm',
        move: '12"',
        health: 6,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Vulcaniser Pistol',
            type: 'Ranged',
            range: '9"',
            attacks: 6,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Skypike',
            type: 'Melee',
            range: '2"',
            attacks: 6,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Timed Mines',
            phase: 'Movement',
            type: 'Active',
            effect: 'When retreating, roll a D6 for each enemy unit within 3": on 4+, that unit suffers D3 mortal wounds.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'FLY', 'SKYWARDENS']
      },
      {
        id: 'ko-endrinriggers',
        name: 'Endrinriggers',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '32mm',
        move: '12"',
        health: 6,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Rapid-fire Rivet Gun',
            type: 'Ranged',
            range: '12"',
            attacks: 6,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Aethermatic Saw',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Aerial Riggers',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'Heal 1 wound on each friendly flying model within 3".'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'FLY', 'ENDRINRIGGERS']
      }
    ]
  },

  // 16. LUMINETH REALM-LORDS - Glittering Phalanx
  {
    id: 'lumineth-phalanx',
    name: 'Lumineth Realm-Lords',
    subTitle: 'Glittering Phalanx',
    grandAlliance: 'ORDER',
    accentColor: 'from-cyan-500 to-indigo-700',
    flavorQuote: 'Supreme discipline, sunmetal radiance, and flawless elemental harmony will purge the taint of Chaos.',
    battleTraits: [
      {
        name: 'Lightning Reflexes',
        description: 'In the combat phase, you alternate picking two eligible units to fight consecutively instead of one.'
      },
      {
        name: 'Sunmetal Weapons',
        description: 'Unmodified hit rolls of 6 with Sunmetal weapons inflict 1 mortal wound in addition to standard damage.'
      }
    ],
    heroTraits: [
      {
        id: 'lr-gp-ht1',
        name: 'Uncanny Calm',
        type: 'Hero Trait',
        effect: 'Friendly Lumineth units within 12" ignore negative modifiers to Hit rolls and Save rolls.'
      },
      {
        id: 'lr-gp-ht2',
        name: 'Cathallar’s Clarity',
        type: 'Hero Trait',
        effect: 'Once per round, force an enemy unit within 12" to roll 1 fewer dice on their attacks.'
      }
    ],
    artefacts: [
      {
        id: 'lr-gp-art1',
        name: 'Sunmetal Diadem',
        type: 'Artefact of Power',
        effect: 'Unmodified 5+ hit rolls for the bearer score critical mortal hits.'
      },
      {
        id: 'lr-gp-art2',
        name: 'Silver Wand of Hysh',
        type: 'Artefact of Power',
        effect: 'Bearer knows 1 additional spell and can unbind 1 additional enemy ability.'
      }
    ],
    units: [
      {
        id: 'lr-cathallar',
        name: 'Scinari Cathallar',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Sunmetal Staff',
            type: 'Melee',
            range: '2"',
            attacks: 3,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Emotional Transference',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6. On a 3+, an enemy unit within 12" suffers -1 to hit and -1 to save until next round.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'HERO', 'WIZARD', 'SCINARI CATHALLAR']
      },
      {
        id: 'lr-wardens',
        name: 'Vanari Auralan Wardens',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Warden Pike',
            type: 'Melee',
            range: '3"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Wall of Pikes',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Enemy units charging this unit suffer Strike-Last unless their charge roll was 9+.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'INFANTRY', 'WARDENS']
      },
      {
        id: 'lr-sentinels',
        name: 'Vanari Auralan Sentinels',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Auralan Bow',
            type: 'Ranged',
            range: '24"',
            attacks: 10,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Lofting Fire'
          },
          {
            name: 'Scianlar Dagger',
            type: 'Melee',
            range: '1"',
            attacks: 10,
            toHit: '5+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Sunmetal Arrows',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Unmodified 6s to hit with bows deal 1 mortal wound in addition to normal damage.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'INFANTRY', 'SENTINELS']
      }
    ]
  },

  // 16b. LUMINETH REALM-LORDS - Hurakan Vanguard
  {
    id: 'lumineth-hurakan',
    name: 'Lumineth Realm-Lords',
    subTitle: 'Hurakan Vanguard',
    grandAlliance: 'ORDER',
    accentColor: 'from-emerald-400 to-sky-600',
    flavorQuote: 'As swift as the mountain gale, the Hurakan strike and disperse before the enemy can react.',
    battleTraits: [
      {
        name: 'Move Like the Wind',
        description: 'Friendly Hurakan units can run and shoot, and can retreat and shoot in the same turn.'
      },
      {
        name: 'Gale-force Agility',
        description: 'Enemy units within 3" of Hurakan units subtract 1 from their melee hit rolls.'
      }
    ],
    heroTraits: [
      {
        id: 'lr-hv-ht1',
        name: 'Eye of the Hurricane',
        type: 'Hero Trait',
        effect: 'Your General cannot be targeted by enemy missile weapons while within 3" of any friendly unit.'
      },
      {
        id: 'lr-hv-ht2',
        name: 'Zephyr Stride',
        type: 'Hero Trait',
        effect: 'Add 3" to the Move characteristic of your General.'
      }
    ],
    artefacts: [
      {
        id: 'lr-hv-art1',
        name: 'Windstone Fan',
        type: 'Artefact of Power',
        effect: 'Once per battle, push an enemy unit within 6" away by 6" and deal D3 mortal wounds.'
      },
      {
        id: 'lr-hv-art2',
        name: 'Quiver of the Gale',
        type: 'Artefact of Power',
        effect: 'Ranged attacks made by the bearer have Rend -1 and +1 Damage.'
      }
    ],
    units: [
      {
        id: 'lr-windmage',
        name: 'Hurakan Windmage',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60x35mm',
        move: '12"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Staff of the Wind',
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
            name: 'Windcaller Spells',
            phase: 'Hero',
            type: 'Active',
            effect: 'Grant 1 friendly unit flying and +3" move until your next hero phase.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'HERO', 'WIZARD', 'FLY', 'WINDMAGE']
      },
      {
        id: 'lr-windchargers',
        name: 'Hurakan Windchargers',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '14"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Windcharger Bow',
            type: 'Ranged',
            range: '18"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Treerunner Claws',
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
            name: 'Arrows of the Wind',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Missile weapons ignore line of sight and cover bonuses.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'CAVALRY', 'WINDCHARGERS']
      },
      {
        id: 'lr-bladelords',
        name: 'Vanari Bladelords',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '6"',
        health: 10,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Sunmetal Greatsword',
            type: 'Melee',
            range: '1"',
            attacks: 15,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Swordmasters',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Choose each combat: +1 Attack characteristic, or all hits automatically wound.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'INFANTRY', 'BLADELORDS']
      }
    ]
  },

  // 20. SERAPHON - Starscale Warhost
  {
    id: 'seraphon-starscale',
    name: 'Seraphon',
    subTitle: 'Starscale Warhost',
    grandAlliance: 'ORDER',
    accentColor: 'from-blue-600 to-teal-500',
    flavorQuote: 'The Great Plan shall be fulfilled through cold-blooded savagery and celestial celestial fury.',
    battleTraits: [
      {
        name: 'Coalesced Predation',
        description: 'Friendly Saurus and Kroxigor units subtract 1 from the Damage characteristic of attacks targeting them (to a minimum of 1).'
      },
      {
        name: 'Cold-blooded Will',
        description: 'Friendly units ignore negative modifiers to their Control and Bravery characteristics.'
      }
    ],
    heroTraits: [
      {
        id: 'ser-sw-ht1',
        name: 'Prime Warleader',
        type: 'Hero Trait',
        effect: 'Friendly Seraphon units wholly within 12" of your General can reroll charge rolls.'
      },
      {
        id: 'ser-sw-ht2',
        name: 'Thickly Scaled Hide',
        type: 'Hero Trait',
        effect: 'Your General adds 2 to their Health characteristic.'
      }
    ],
    artefacts: [
      {
        id: 'ser-sw-art1',
        name: 'Blade of Realities',
        type: 'Artefact of Power',
        effect: 'Improve the Rend of the bearer’s melee weapons by 1 (to -2).'
      },
      {
        id: 'ser-sw-art2',
        name: 'Cloak of Feathers',
        type: 'Artefact of Power',
        effect: 'The bearer gains Fly and adds +2" to their Move characteristic.'
      }
    ],
    units: [
      {
        id: 'ser-oldblood',
        name: 'Saurus Oldblood',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '5"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Suntooth Maul',
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
            name: 'Predatory Roar',
            phase: 'Combat',
            type: 'Active',
            effect: 'Pick 1 friendly Saurus unit within 12"; add 1 to their melee attack characteristic.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'HERO', 'SAURUS', 'OLDBLOOD']
      },
      {
        id: 'ser-warriors',
        name: 'Saurus Warriors with Celestite Clubs',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '5"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Celestite Clubs & Jaws',
            type: 'Melee',
            range: '1"',
            attacks: 20,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Ordered Cohort',
            phase: 'Combat',
            type: 'Passive',
            effect: 'While this unit has 5 or more models and is contesting an objective, add 1 to its Save rolls.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'INFANTRY', 'SAURUS WARRIORS']
      },
      {
        id: 'ser-kroxigor',
        name: 'Kroxigor',
        role: 'Monster',
        modelCount: 3,
        baseSize: '50mm',
        move: '5"',
        health: 12,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Drakebite Maul',
            type: 'Melee',
            range: '2"',
            attacks: 9,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Sweeping Jaws',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to attack characteristics when fighting enemy units with 10 or more models.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'MONSTER', 'KROXIGOR']
      }
    ]
  },

  // 20b. SERAPHON - Sunblooded Prowlers
  {
    id: 'seraphon-sunblooded',
    name: 'Seraphon',
    subTitle: 'Sunblooded Prowlers',
    grandAlliance: 'ORDER',
    accentColor: 'from-emerald-600 to-amber-500',
    flavorQuote: 'Swift reptilian hunters stalk through dense foliage before launching thunderous cavalry strikes.',
    battleTraits: [
      {
        name: 'Starborne Agility',
        description: 'Friendly cavalry units can run and charge in the same turn.'
      },
      {
        name: 'Cosmic Conduit',
        description: 'Friendly wizards add 1 to casting and unbinding rolls.'
      }
    ],
    heroTraits: [
      {
        id: 'ser-sb-ht1',
        name: 'Priest of Chotec',
        type: 'Hero Trait',
        effect: 'Your General can chant a prayer to grant +1 Rend to a friendly unit within 12".'
      },
      {
        id: 'ser-sb-ht2',
        name: 'Sunburst Shroud',
        type: 'Hero Trait',
        effect: 'Enemy units targeting your General with missile attacks suffer -1 to hit.'
      }
    ],
    artefacts: [
      {
        id: 'ser-sb-art1',
        name: 'Star-stone Pendant',
        type: 'Artefact of Power',
        effect: 'Bearer gains a 5+ Ward save and adds 1 to spell unbinding.'
      },
      {
        id: 'ser-sb-art2',
        name: 'Fangs of the Sun God',
        type: 'Artefact of Power',
        effect: 'Add 1 to the bearer’s attacks and wound rolls in combat.'
      }
    ],
    units: [
      {
        id: 'ser-starpriest',
        name: 'Skink Starpriest',
        role: 'Hero',
        modelCount: 1,
        baseSize: '25mm',
        move: '8"',
        health: 5,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Star-stone Staff',
            type: 'Melee',
            range: '2"',
            attacks: 3,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Serpent’s Staff',
            phase: 'Hero',
            type: 'Active',
            effect: 'Pick 1 friendly unit within 12"; unmodified wound rolls of 6 for that unit inflict 1 mortal wound.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'HERO', 'WIZARD', 'SKINK']
      },
      {
        id: 'ser-aggradon',
        name: 'Aggradon Lancers',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '9"',
        health: 12,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Celestite Spear & Aggradon Jaws',
            type: 'Melee',
            range: '2"',
            attacks: 12,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Primal Rage',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Gain +1 Attack and +1 Damage each consecutive battle round this unit remains in combat.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'CAVALRY', 'AGGRADON LANCERS']
      },
      {
        id: 'ser-raptadon',
        name: 'Raptadon Hunters',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '12"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Celestite Dartpipe',
            type: 'Ranged',
            range: '12"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Claws and Fangs',
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
            name: 'Savage Synergy',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Add 1 to hit rolls when shooting at enemy units within 3" of another friendly Seraphon unit.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'CAVALRY', 'RAPTADONS']
      }
    ]
  },

  // 24. SYLVANETH - Bitterbark Copse
  {
    id: 'sylvaneth-bitterbark',
    name: 'Sylvaneth',
    subTitle: 'Bitterbark Copse',
    grandAlliance: 'ORDER',
    accentColor: 'from-emerald-700 to-amber-900',
    flavorQuote: 'Nature’s vengeance takes root. The song of the forest cries out for mortal intruders to be trampled and crushed.',
    battleTraits: [
      {
        name: 'Walk the Spirit Paths',
        description: 'Once per turn, 1 friendly Sylvaneth unit can teleport from one terrain piece to more than 9" from enemy units.'
      },
      {
        name: 'Awakened Wyldwood Guardians',
        description: 'Friendly units wholly within 6" of wildwoods or terrain features gain a 6+ Ward save.'
      }
    ],
    heroTraits: [
      {
        id: 'syl-bb-ht1',
        name: 'Warsinger',
        type: 'Hero Trait',
        effect: 'Add 2" to the Move characteristic of friendly Sylvaneth units within 12" of your General.'
      },
      {
        id: 'syl-bb-ht2',
        name: 'Oak-hard Bark',
        type: 'Hero Trait',
        effect: 'Add 1 to the Save characteristic of your General.'
      }
    ],
    artefacts: [
      {
        id: 'syl-bb-art1',
        name: 'Acorn of the Ages',
        type: 'Artefact of Power',
        effect: 'Once per battle, set up an overgrown terrain zone that grants cover to friendly units.'
      },
      {
        id: 'syl-bb-art2',
        name: 'Spite-sheen Blade',
        type: 'Artefact of Power',
        effect: 'Bearer’s melee attacks gain Crit (Mortal).'
      }
    ],
    units: [
      {
        id: 'syl-branchwych',
        name: 'Branchwych',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Greenwood Scythe',
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
            name: 'Unleash Spites',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6 for each enemy unit within 9": on a 3+, that unit suffers D3 mortal wounds.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'HERO', 'WIZARD', 'BRANCHWYCH']
      },
      {
        id: 'syl-tree-revs',
        name: 'Tree-Revenants',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Enchanted Blade',
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
            name: 'Waypipes',
            phase: 'Movement',
            type: 'Active',
            effect: 'Can teleport to anywhere on the battlefield more than 9" from all enemies instead of moving.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'INFANTRY', 'TREE-REVENANTS']
      },
      {
        id: 'syl-kurnoth-bows',
        name: 'Kurnoth Hunters with Greatbows',
        role: 'Monster',
        modelCount: 3,
        baseSize: '50mm',
        move: '5"',
        health: 15,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Kurnoth Greatbow',
            type: 'Ranged',
            range: '30"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: 'D3+1'
          },
          {
            name: 'Vicious Roots',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Envoys of the Everqueen',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Can reroll save rolls of 1 while contesting an objective marker.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'INFANTRY', 'KURNOTH HUNTERS']
      }
    ]
  },

  // 24b. SYLVANETH - Spitewing Flight
  {
    id: 'sylvaneth-spitewing',
    name: 'Sylvaneth',
    subTitle: 'Spitewing Flight',
    grandAlliance: 'ORDER',
    accentColor: 'from-lime-600 to-teal-800',
    flavorQuote: 'Airborne gossamid archers and winged revs buzz through the canopy, piercing foes with venomous thorn-spites.',
    battleTraits: [
      {
        name: 'Airborne Spite Flight',
        description: 'Friendly Gossamid Archers and Arch-Revenant gain Fly and add 2" to their Movement characteristic.'
      },
      {
        name: 'Thorn Volley Reaction',
        description: 'When an enemy unit finishes a charge within 3" of Gossamid Archers, the archers can immediately unleash a defensive volley.'
      }
    ],
    heroTraits: [
      {
        id: 'syl-sf-ht1',
        name: 'Zephyr Wing',
        type: 'Hero Trait',
        effect: 'Your General can retreat and still shoot or charge in the same turn.'
      },
      {
        id: 'syl-sf-ht2',
        name: 'Spite Swarm Commander',
        type: 'Hero Trait',
        effect: 'Friendly flying units within 9" add 1 to their missile hit rolls.'
      }
    ],
    artefacts: [
      {
        id: 'syl-sf-art1',
        name: 'Crown of Spite-thorns',
        type: 'Artefact of Power',
        effect: 'Enemy units in combat with bearer suffer 1 mortal wound on unmodified save rolls of 1.'
      },
      {
        id: 'syl-sf-art2',
        name: 'Glaive of the Seasons',
        type: 'Artefact of Power',
        effect: 'Bearer’s melee attacks have Rend -2 and Damage 2.'
      }
    ],
    units: [
      {
        id: 'syl-arch-rev',
        name: 'Arch-Revenant',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '12"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Revenant Crescent Spear',
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
            name: 'Call to the Hunt',
            phase: 'Combat',
            type: 'Active',
            effect: 'Pick 1 friendly Kurnoth or Gossamid unit within 12"; add 1 to their attack characteristic this phase.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'HERO', 'FLY', 'ARCH-REVENANT']
      },
      {
        id: 'syl-gossamid',
        name: 'Gossamid Archers',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '12"',
        health: 5,
        save: '5+',
        control: 3,
        weapons: [
          {
            name: 'Spite-dart Bow',
            type: 'Ranged',
            range: '12"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Crit (Mortal)'
          },
          {
            name: 'Gossamid Talons',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Zephyr Flight',
            phase: 'Charge',
            type: 'Reaction',
            effect: 'When charged, roll a D6. On a 3+, this unit can retreat up to 6" before the enemy completes the charge.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'FLY', 'INFANTRY', 'GOSSAMID ARCHERS']
      },
      {
        id: 'syl-kurnoth-swords',
        name: 'Kurnoth Hunters with Greatswords',
        role: 'Monster',
        modelCount: 3,
        baseSize: '50mm',
        move: '5"',
        health: 15,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Kurnoth Greatsword',
            type: 'Melee',
            range: '1"',
            attacks: 12,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Tanglethorn Thicket',
            phase: 'Combat',
            type: 'Active',
            effect: 'Unit can root itself: halves Move characteristic, but improves save to 2+.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'INFANTRY', 'KURNOTH HUNTERS']
      }
    ]
  }
];
