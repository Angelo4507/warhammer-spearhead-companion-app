import { SpearheadFaction } from '../../types/spearhead';

export const ORDER_FACTIONS: SpearheadFaction[] = [
  // =========================================================================
  // 1. CITIES OF SIGMAR - Castelite Company
  // =========================================================================
  {
    id: 'cities-castelite',
    name: 'Cities of Sigmar',
    subTitle: 'Castelite Company',
    grandAlliance: 'ORDER',
    accentColor: 'from-blue-700 to-indigo-600',
    flavorQuote: 'Castelite formation! Shieldwalls interlock, cannons range true, for the God-King!',
    battleTraits: [
      {
        name: "The Officer's Order",
        description: 'Once Per Battle Round: Place a battle tactic card face-down separately from your hand. When you use the command on that card, it is not discarded and returns to your hand.'
      },
      {
        name: 'Fortify Position',
        description: 'Subtract 1 from the Rend characteristic of weapons targeting friendly Castelite units that did not use a Move ability in the same turn.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Well Provisioned',
        description: 'Your Shooting Phase: Pick 1 friendly non-HERO unit. Roll a D6: on a 3+, add 1 to its attacks or heal 2 wounds allocated to it.'
      },
      {
        name: 'Respected Leader',
        description: 'Passive: Friendly Castelite units wholly within 12" of your Cavalier-Marshal add 1 to their Control characteristic.'
      }
    ],
    heroTraits: [
      {
        id: 'cos-cc-ht1',
        name: 'Master Tactician',
        type: 'Hero Trait',
        effect: 'At the start of Round 1 and Round 3, you gain 1 additional Command Point.'
      },
      {
        id: 'cos-cc-ht2',
        name: 'Veteran Commander',
        type: 'Hero Trait',
        effect: 'Your General gives friendly units within 6" a +1 bonus to Save rolls while holding objectives.'
      }
    ],
    artefacts: [
      {
        id: 'cos-cc-art1',
        name: 'Sigmarite Breastplate',
        type: 'Artefact of Power',
        effect: 'Add 1 to the bearer’s Save characteristic and add 1 to their Health.'
      },
      {
        id: 'cos-cc-art2',
        name: 'Pennant of the Twin-Tailed Comet',
        type: 'Artefact of Power',
        effect: 'Friendly units within 12" cannot be battleshocked and can reroll charge rolls of 1.'
      }
    ],
    units: [
      {
        id: 'cos-cavalier-marshal',
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
          },
          {
            name: 'Barded Steed Hooves',
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
            name: 'Lead the Cavalier Charge',
            phase: 'Charge',
            type: 'Active',
            effect: 'Friendly Freeguild Cavaliers wholly within 12" can reroll charge rolls.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'CAVALRY', 'CAVALIER-MARSHAL']
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
            effect: 'If this unit controls an objective marker, that marker becomes consecrated: friendly units contesting it gain a 6+ Ward save.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'STEELHELMS']
      },
      {
        id: 'cos-cavaliers',
        name: 'Freeguild Cavaliers',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '10"',
        health: 15,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Cavalier War-lance',
            type: 'Melee',
            range: '1"',
            attacks: 15,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Warhorse Hooves',
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
            name: 'Devastating Charge',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Add 1 to Rend and +1 to Damage for lance attacks on the turn this unit completes a charge.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'CAVALRY', 'CAVALIERS']
      },
      {
        id: 'cos-cannon',
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
            name: 'Grape Shot Shells',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Can fire grape shot instead: Range 12", 2D6 attacks, rend 0, 1 damage.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'WARMACHINE', 'IRONWELD']
      }
    ]
  },

  // =========================================================================
  // 1b. CITIES OF SIGMAR - Fusil Platoon
  // =========================================================================
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
        description: 'Friendly missile units that do not move during your Movement phase gain Crit (Auto-wound) on their ranged weapons.'
      },
      {
        name: 'Fortified Pavises',
        description: 'Friendly Fusiliers add 1 to their Save characteristic against ranged attacks.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Take Aim',
        description: 'Shooting Phase: Pick 1 friendly Fusilier unit within 12" of the Fusil-Major; add 1 to its shooting hit rolls.'
      },
      {
        name: 'Scout Ahead',
        description: 'Movement Phase: Wildercorps Hunters can make a normal move of up to 6" before the first battle round begins.'
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
        effect: 'Friendly missile units within 6" can reroll the number of attacks dice.'
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
            name: 'Heavy Mace & Warhulk Shield',
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
            name: 'Fortified Pavise Stance',
            phase: 'Passive',
            type: 'Passive',
            effect: 'While this model remains stationary, its Save characteristic becomes 2+.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'FUSIL-MAJOR']
      },
      {
        id: 'fusil-warforger',
        name: 'Alchemite Warforger',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Runic Crucible & Tongs',
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
            name: 'Blazing Weapons',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6. On a 3+, friendly human units within 12" score critical mortal hits on unmodified 6s to hit.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'WIZARD', 'ALCHEMITE WARFORGER']
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
        id: 'fusil-wildercorps',
        name: 'Wildercorps Hunters',
        role: 'Infantry',
        modelCount: 11,
        baseSize: '28mm',
        move: '6"',
        health: 11,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Hunting Crossbows',
            type: 'Ranged',
            range: '12"',
            attacks: 8,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Trail Hounds & Hatchets',
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

  // =========================================================================
  // 1c. CITIES OF SIGMAR - Sentinels of Embergard
  // =========================================================================
  {
    id: 'cities-embergard',
    name: 'Cities of Sigmar',
    subTitle: 'Sentinels of Embergard',
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-700 to-stone-800',
    flavorQuote: 'From the molten ash of the ruined city of Embergard, veteran urban survivors hold the line.',
    battleTraits: [
      {
        name: 'Ashland Fortitude',
        description: 'Friendly units contesting objectives wholly within your territory ignore the first point of Rend on incoming attacks.'
      },
      {
        name: 'Urban Street-fight Ambush',
        description: 'Friendly units can make a normal move across terrain features without paying extra movement penalties.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Prowling Ash Panther',
        description: 'Combat Phase: Thexa the ash panther leaps at an enemy unit within 3" of Jorvan Kreel, inflicting D3 mortal wounds on a 3+.'
      },
      {
        name: 'Forgefire Blessings',
        description: 'Hero Phase: The Mallus Forgepriest chants a prayer (3+) to grant +1 Save to a friendly unit within 12".'
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
        name: 'Heir of Anvilgard',
        type: 'Hero Trait',
        effect: 'Your General rerolls hit rolls of 1 and gains Strike-First on the turn they complete a charge.'
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
        id: 'emb-jorvan',
        name: 'Jorvan Kreel, Heir of the Kraken',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 6,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Heirloom Kraken-blade',
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
            name: 'Thexa the Ash Panther',
            phase: 'Combat',
            type: 'Active',
            effect: 'Roll a D6 for Thexa: on a 3+, target unit within 3" suffers D3 mortal wounds.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'JORVAN KREEL']
      },
      {
        id: 'emb-forgepriest',
        name: 'Mallus Forgepriest',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Smelting Hammer',
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
            name: 'Litany of Ash',
            phase: 'Hero',
            type: 'Active',
            effect: 'Chant prayer (3+): pick 1 friendly unit within 12"; it improves its Save characteristic by 1 until your next turn.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'PRIEST', 'FORGEPRIEST']
      },
      {
        id: 'emb-grenadiers',
        name: 'Freeguild Grenadiers',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '28mm',
        move: '5"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Incendiary Grenades',
            type: 'Ranged',
            range: '8"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          },
          {
            name: 'Heavy Bardiches',
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
            name: 'Breach and Clear',
            phase: 'Combat',
            type: 'Active',
            effect: 'Enemy units defending cover or objectives lose their cover bonuses when targeted by this unit.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'GRENADIERS']
      },
      {
        id: 'emb-gallants',
        name: 'Freeguild Gallants',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '10"',
        health: 15,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Honor-bound Greatswords & Lances',
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
            name: 'Gallant Charge',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Lances gain +1 Damage on the turn this unit completes a charge move.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'CAVALRY', 'GALLANTS']
      }
    ]
  },

  // =========================================================================
  // 1d. CITIES OF SIGMAR - Zenestra’s Zealots
  // =========================================================================
  {
    id: 'cities-zenestra',
    name: 'Cities of Sigmar',
    subTitle: 'Zenestra’s Zealots',
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-600 to-red-800',
    flavorQuote: 'The Matriarch of the Great Wheel preaches cleansing fire to every heretic and unbeliever.',
    battleTraits: [
      {
        name: 'Fanatical Devotion',
        description: 'Friendly units gain a 5+ Ward save against mortal wounds and spells.'
      },
      {
        name: 'Zealous Resurgence',
        description: 'When a friendly unit is destroyed in combat, roll a D6: on a 4+, return D3 slain models to another friendly infantry unit.'
      }
    ],
    regimentAbilities: [
      {
        name: "Voice of the Great Wheel",
        description: 'Hero Phase: Roll a D6. On a 3+, friendly human units wholly within 12" gain 5+ Ward until your next hero phase.'
      },
      {
        name: 'Stand Fast for the God-King',
        description: 'Combat Phase: Freeguild Command Corps and Steelhelms in combat cannot have their Bravery reduced.'
      }
    ],
    heroTraits: [
      {
        id: 'zen-ht-1',
        name: 'Voice of the Wheel',
        type: 'Hero Trait',
        effect: 'Add 1 to chant and prayer rolls for your priests.'
      },
      {
        id: 'zen-ht-2',
        name: 'Righteous Fury',
        type: 'Hero Trait',
        effect: 'When a friendly model within 6" of your General is slain, all nearby friendly units add +1 to hit for the round.'
      }
    ],
    artefacts: [
      {
        id: 'zen-art-1',
        name: 'Reliquary of the Wheel',
        type: 'Artefact of Power',
        effect: 'Bearer adds 2 to Health and gains a 5+ Ward save.'
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
            name: 'Vessel of the Great Wheel',
            phase: 'Hero',
            type: 'Active',
            effect: 'Chant prayer (3+): friendly units wholly within 12" gain 5+ Ward until your next hero phase.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'PRIEST', 'ZENESTRA']
      },
      {
        id: 'zen-marshal',
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
        id: 'zen-command-corps',
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
            name: 'Assorted Blades & Daggers',
            type: 'Melee',
            range: '1"',
            attacks: 12,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Sawbones Medical Tinctures',
            phase: 'Hero',
            type: 'Active',
            effect: 'Heal D3 wounds allocated to a friendly human unit within 6".'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'COMMAND CORPS']
      },
      {
        id: 'zen-steelhelms',
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
            effect: 'If this unit controls an objective marker, friendly units contesting it gain a 6+ Ward save.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'STEELHELMS']
      }
    ]
  },

  // =========================================================================
  // 2. DAUGHTERS OF KHAINE - Heartflayer Troupe
  // =========================================================================
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
        description: 'Cumulative round-by-round sacred rites: Round 1 (+1 Run), Round 2 (+1 Charge), Round 3 (+1 Hit in combat), Round 4 (+1 Wound in combat & 6+ Ward).'
      },
      {
        name: 'All-Out Slaughter',
        description: 'Once Per Battle, Combat Phase: Pick 1 friendly Daughters of Khaine Infantry unit in combat; it can use 2 Fight abilities this phase (receives Strike-Last for the rest of turn after the first).'
      }
    ],
    regimentAbilities: [
      {
        name: 'Heartseekers',
        description: 'Passive: Unmodified hit rolls of 6 with Blood Stalker bows inflict 1 mortal wound directly and end the attack sequence.'
      },
      {
        name: 'Doomfire Curse',
        description: 'Hero Phase: Warlocks roll a D6. On a 3+, an enemy unit within 12" suffers D3 mortal wounds and -1 to hit.'
      }
    ],
    heroTraits: [
      {
        id: 'dok-hf-ht1',
        name: 'Mistress of the Slither',
        type: 'Hero Trait',
        effect: 'Your General adds 2" to Move characteristic and can retreat and charge in the same turn.'
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
            effect: 'Pick 1 friendly Melusai or Witch Aelf unit within 12"; add 1 to its attacks characteristic this phase.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'HERO', 'MELUSAI']
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
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Frenzied Fervour',
            phase: 'Combat',
            type: 'Passive',
            effect: 'This unit has a 6+ Ward save that improves to 5+ if wholly within 12" of any friendly HERO.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'INFANTRY', 'WITCH AELVES']
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
        id: 'dok-warlocks',
        name: 'Doomfire Warlocks',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '14"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Doomfire Crossbow',
            type: 'Ranged',
            range: '12"',
            attacks: 10,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Cursed Scimitar & Steed Hooves',
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
            name: 'Doomfire Spells',
            phase: 'Hero',
            type: 'Active',
            effect: 'Can unbind 1 enemy spell per turn and cast Doomfire Bolt.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'CAVALRY', 'WARLOCKS']
      }
    ]
  },

  // =========================================================================
  // 2b. DAUGHTERS OF KHAINE - Khainite Shadow Coven
  // =========================================================================
  {
    id: 'dok-shadowcoven',
    name: 'Daughters of Khaine',
    subTitle: 'Khainite Shadow Coven',
    grandAlliance: 'ORDER',
    accentColor: 'from-pink-800 to-rose-700',
    flavorQuote: 'A towering Cauldron of Blood flanked by shadowy stalkers brings sacrificial murder to the front line.',
    battleTraits: [
      {
        name: 'Blood Rites',
        description: 'Cumulative round-by-round sacred rites: Round 1 (+1 Run), Round 2 (+1 Charge), Round 3 (+1 Hit in combat), Round 4 (+1 Wound in combat & 6+ Ward).'
      },
      {
        name: 'Shadow Realm Step',
        description: 'Khainite Shadowstalkers can disappear into the Umbral Web in the movement phase and appear >9" from enemies.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Bloodwrack Gaze',
        description: 'Shooting Phase: Roll a D6 for each enemy model within 12" of the Bloodwrack Medusa; on a 5+, that model suffers 1 mortal wound.'
      },
      {
        name: 'Worship Through Murder',
        description: 'Combat Phase: When an enemy unit is destroyed, friendly Sisters of Slaughter gain +1 Attack for the remainder of the round.'
      }
    ],
    heroTraits: [
      {
        id: 'dok-sc-ht1',
        name: 'Zealous Slaughterer',
        type: 'Hero Trait',
        effect: 'Add 1 to the Damage characteristic of the General’s melee weapons on turns they complete a charge.'
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
        id: 'dok-cauldron',
        name: 'Slaughter Queen on Cauldron of Blood',
        role: 'Monster',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '6"',
        health: 12,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Blade of Khaine & Iron Spikes',
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
            name: 'Blood Sacrament',
            phase: 'Hero',
            type: 'Active',
            effect: 'Chant prayer on 3+: friendly Daughters of Khaine units wholly within 12" add 1 to their wound rolls in combat.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'HERO', 'PRIEST', 'MONSTER', 'CAULDRON OF BLOOD']
      },
      {
        id: 'dok-medusa',
        name: 'Bloodwrack Medusa',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '8"',
        health: 6,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Bloodwrack Gaze',
            type: 'Ranged',
            range: '12"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          },
          {
            name: 'Whispering Blade & Tail',
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
            name: 'Bloodwrack Spell',
            phase: 'Hero',
            type: 'Active',
            effect: 'Can cast 1 spell and unbind 1 spell per turn.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'HERO', 'WIZARD', 'MEDUSA']
      },
      {
        id: 'dok-shadowstalkers',
        name: 'Khainite Shadowstalkers',
        role: 'Infantry',
        modelCount: 9,
        baseSize: '28mm',
        move: '6"',
        health: 9,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Shadow Darts',
            type: 'Ranged',
            range: '12"',
            attacks: 9,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Umbral Blades',
            type: 'Melee',
            range: '1"',
            attacks: 18,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Shadowleap',
            phase: 'Movement',
            type: 'Active',
            effect: 'Instead of moving normally, teleport to anywhere more than 9" from enemy units.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'INFANTRY', 'SHADOWSTALKERS']
      },
      {
        id: 'dok-sisters-slaughter',
        name: 'Sisters of Slaughter with Barbed Whips',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 10,
        save: '6+',
        control: 5,
        weapons: [
          {
            name: 'Barbed Whips & Sacrificial Knives',
            type: 'Melee',
            range: '2"',
            attacks: 20,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Dance of Death',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Can pile-in up to 6" instead of standard 3" when making combat movements.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'INFANTRY', 'SISTERS OF SLAUGHTER']
      }
    ]
  },

  // =========================================================================
  // 3. FYRESLAYERS - Saga Axeband
  // =========================================================================
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
        name: 'Magmic Tunnels',
        description: 'Once Per Battle, Start of Battle Round 1: Pick up to 2 friendly units; remove them from the battlefield and set them up anywhere >6" from all enemy units.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Fyresteel Throwing Axes',
        description: 'Shooting Phase: Friendly units within 10" of an enemy not in combat can hurl axes; on a 4+, inflict D3 mortal damage.'
      },
      {
        name: 'Horn of Grimnir',
        description: 'Hero Phase: Sound the ur-gold horn: roll a D6 for each friendly unit with slain models; on a 3+, return 1 slain model.'
      }
    ],
    heroTraits: [
      {
        id: 'fs-ht-1',
        name: 'Too Stubborn to Die',
        type: 'Hero Trait',
        effect: 'Heal D3 wounds allocated to your Battlesmith General each Hero phase.'
      },
      {
        id: 'fs-ht-2',
        name: 'Spirit of Grimnir',
        type: 'Hero Trait',
        effect: 'You can reroll activation rolls made for your Ur-Gold Runes ability.'
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
      },
      {
        id: 'fs-vulkite-1',
        name: 'Vulkite Berzerkers (Band A)',
        role: 'Infantry',
        modelCount: 5,
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
            attacks: 10,
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
        id: 'fs-vulkite-2',
        name: 'Vulkite Berzerkers (Band B)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Fyresteel War-picks & Slingshields',
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
            name: 'Slingshield Charge',
            phase: 'Charge',
            type: 'Active',
            effect: 'Deals 1 mortal damage on 4+ after finishing a charge.'
          }
        ],
        keywords: ['ORDER', 'FYRESLAYERS', 'INFANTRY', 'VULKITE BERZERKERS']
      }
    ]
  },

  // =========================================================================
  // 4. IDONETH DEEPKIN - Akhelian Tide Guard
  // =========================================================================
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
    regimentAbilities: [
      {
        name: 'The Spear of Asphoren',
        description: 'Charge Phase: Pick 1 friendly Morrsarr Guard unit; it adds 1 to its charge rolls and +1 Damage on its volt-spears this turn.'
      },
      {
        name: 'The Shield of Ulchiss',
        description: 'Combat Phase: Friendly Ishlaen Guard unmodifiable save becomes 3+ against all melee attacks.'
      }
    ],
    heroTraits: [
      {
        id: 'id-tg-ht1',
        name: 'Lord of the Tides',
        type: 'Hero Trait',
        effect: 'Your General adds 1 to hit rolls and wound rolls when fighting in Round 2 or Round 3.'
      },
      {
        id: 'id-tg-ht2',
        name: 'Born from the Trench',
        type: 'Hero Trait',
        effect: 'Your General adds 1 to Save rolls and heals 1 wound at the start of your Hero phase.'
      }
    ],
    artefacts: [
      {
        id: 'id-tg-art1',
        name: 'Bio-shock Pearl',
        type: 'Artefact of Power',
        effect: 'Once per battle, enemy units in combat suffer -1 to hit and cannot receive commands.'
      },
      {
        id: 'id-tg-art2',
        name: 'Deep-reef Glaive',
        type: 'Artefact of Power',
        effect: 'Bearer’s melee attacks inflict 2 damage instead of 1.'
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
            name: 'Bladed Polearm',
            type: 'Melee',
            range: '2"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          },
          {
            name: 'Deepmare Horns and Hooves',
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
            name: 'Wave of Blood',
            phase: 'Hero',
            type: 'Active',
            effect: 'Choose 1 friendly Akhelian unit within 12"; add 1 to its hit rolls this turn.'
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
          },
          {
            name: 'Fangmora Fins and Tail',
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
            name: 'Biovoltaic Blast',
            phase: 'Combat',
            type: 'Active',
            effect: 'Once per battle on a charge, roll 3 dice for each model: on 5+, the target suffers 1 mortal wound.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'FLY', 'CAVALRY', 'MORRSARR GUARD']
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
            name: 'Helsabre',
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
            effect: 'On turns this unit completed a charge, its Save characteristic becomes 3+ unmodifiable by Rend.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'FLY', 'CAVALRY', 'ISHLAEN GUARD']
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

  // =========================================================================
  // 4b. IDONETH DEEPKIN - Soulraid Hunt
  // =========================================================================
  {
    id: 'idoneth-soulraid',
    name: 'Idoneth Deepkin',
    subTitle: 'Soulraid Hunt',
    grandAlliance: 'ORDER',
    accentColor: 'from-teal-600 to-sky-800',
    flavorQuote: 'Akhelian nobles ride swift deep-sea apex predators to run down quarry across the battlefield.',
    battleTraits: [
      {
        name: 'Tides of Death',
        description: 'Tidal effects: Round 1 Low Tide (Cover everywhere), Round 2 Flood Tide (+1 Run & Charge), Round 3 High Tide (Strike-First on all units), Round 4 Ebb Tide (Retreat and Shoot/Charge).'
      },
      {
        name: 'Blood in the Water',
        description: 'Friendly units add +1 to hit against enemy units that have suffered wounds.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Soul-call Lantern',
        description: 'End of Turn: Soulscryer rolls a D6: on a 3+, return D3 slain Namarti Thralls to a nearby friendly unit.'
      },
      {
        name: 'Apex Predator Frenzy',
        description: 'Charge Phase: The Allopex adds 2" to its charge roll and gains +1 Attack on its Razorshark jaws.'
      }
    ],
    heroTraits: [
      {
        id: 'id-sr-ht1',
        name: 'Soul-harvester',
        type: 'Hero Trait',
        effect: 'When your General destroys an enemy model, heal 1 model in a nearby friendly Namarti unit.'
      },
      {
        id: 'id-sr-ht2',
        name: 'Deep-sea Navigator',
        type: 'Hero Trait',
        effect: 'Friendly units within 12" ignore movement penalties from terrain.'
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
        name: 'Armour of the Cythai',
        type: 'Artefact of Power',
        effect: 'Bearer cannot be wounded on rolls of 1-3 regardless of attacker modifiers.'
      }
    ],
    units: [
      {
        id: 'id-soulscryer',
        name: 'Isharann Soulscryer',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Scryer Staff',
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
            name: 'Finder of Ways',
            phase: 'Movement',
            type: 'Active',
            effect: 'Deploy in reserve and arrive with 1 friendly unit wholly within 6" of any board edge.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'HERO', 'PRIEST', 'SOULSCRYER']
      },
      {
        id: 'id-allopex',
        name: 'Akhelian Allopex',
        role: 'Monster',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '12"',
        health: 8,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Razorshark Harpoon Launcher',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Razorshark Fangs and Fins',
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
            name: 'Bloodthirsty Predator',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Reroll hit rolls of 1 while fighting an enemy unit with allocated wounds.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'FLY', 'MONSTER', 'ALLOPEX']
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
        id: 'id-morrsarr-sr',
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
            effect: 'Once per battle on charge, roll 3 dice for each model: on 5+, target unit takes 1 mortal wound.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'FLY', 'CAVALRY', 'MORRSARR GUARD']
      }
    ]
  },

  // =========================================================================
  // 5. KHARADRON OVERLORDS - Grundstok Trailblazers
  // =========================================================================
  {
    id: 'kharadron-trailblazers',
    name: 'Kharadron Overlords',
    subTitle: 'Grundstok Trailblazers',
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-600 to-slate-700',
    flavorQuote: 'Calculate profit, check the barometric ether-pressure, and let the firepower do the talking.',
    battleTraits: [
      {
        name: 'Gunhauler Escort',
        description: 'Subtract 1 from hit rolls for attacks that target friendly Kharadron Overlords Infantry units while they are wholly within 6" of a friendly Grundstok Gunhauler.'
      },
      {
        name: 'Aether-gold Shares',
        description: 'Once per battle, spend 1 Aether-gold share to allow 1 unit to reroll all failed hit rolls or failed save rolls.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Pin them Down!',
        description: 'Shooting Phase: If an enemy unit suffers damage from Grundstok Thunderers, halve its Move characteristic until end of turn.'
      },
      {
        name: 'Endrin Repairs',
        description: 'Hero Phase: Endrinmaster heals 3 wounds allocated to any friendly sky-vessel or construct within 3".'
      }
    ],
    heroTraits: [
      {
        id: 'ko-tb-ht1',
        name: 'Aeronautical Genius',
        type: 'Hero Trait',
        effect: 'Add 2" to the Move characteristic of friendly airborne units within 12".'
      },
      {
        id: 'ko-tb-ht2',
        name: 'Veteran Admiral',
        type: 'Hero Trait',
        effect: 'Friendly missile units within 9" of the General add 1 to their shooting wound rolls.'
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

  // =========================================================================
  // 5b. KHARADRON OVERLORDS - Skyhammer Task Force
  // =========================================================================
  {
    id: 'kharadron-skyhammer',
    name: 'Kharadron Overlords',
    subTitle: 'Skyhammer Task Force',
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-700 to-sky-700',
    flavorQuote: 'Airborne naval frigates deploy company ground forces to seize profitable sky-ports.',
    battleTraits: [
      {
        name: 'Ply the Skies',
        description: 'The Arkanaut Frigate can transport friendly Infantry units across the battlefield, embarking and disembarking during movement.'
      },
      {
        name: 'Aether-gold Endowment',
        description: 'Once per battle, allow 1 friendly unit to reroll all failed hit rolls or charge rolls.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Master of the Skies',
        description: 'Hero Phase: Pick 1 friendly sky-vessel within 12" of the Admiral; it heals D3 wounds or adds +1 to its hit rolls.'
      },
      {
        name: 'Skywarden Minefield',
        description: 'Movement Phase: When retreating, Skywardens drop timed mines on a 4+ inflicting D3 mortal wounds on enemies within 3".'
      }
    ],
    heroTraits: [
      {
        id: 'ko-sh-ht1',
        name: 'Canny Negotiator',
        type: 'Hero Trait',
        effect: 'Gain 1 additional Command Point at the start of your first turn.'
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
        id: 'ko-frigate',
        name: 'Arkanaut Frigate',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '12"',
        health: 14,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Heavy Skyhook',
            type: 'Ranged',
            range: '24"',
            attacks: 2,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          },
          {
            name: 'Boarding Weapons',
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
            name: 'Ply the Skies Transport',
            phase: 'Movement',
            type: 'Active',
            effect: 'Can transport up to 10 friendly infantry models. Transported models can shoot from the deck.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'FLY', 'WARMACHINE', 'FRIGATE']
      },
      {
        id: 'ko-company',
        name: 'Arkanaut Company',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '4"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Privateer Pistols & Volley Guns',
            type: 'Ranged',
            range: '12"',
            attacks: 10,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Arkanaut Cutlasses & Skypikes',
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
            name: 'Glory-seekers',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to hit rolls while contesting an objective marker.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'INFANTRY', 'ARKANAUT COMPANY']
      },
      {
        id: 'ko-skywardens',
        name: 'Skywardens',
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
      }
    ]
  },

  // =========================================================================
  // 6. LUMINETH REALM-LORDS - Glittering Phalanx
  // =========================================================================
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
    regimentAbilities: [
      {
        name: 'Aetherquartz Reserve',
        description: 'Hero Phase: Spend an aetherquartz reserve to grant 1 friendly unit +1 to hit, +1 to save, or +2 to Move for the battle round.'
      },
      {
        name: 'Wall of Pikes',
        description: 'Combat Phase: Enemy units charging Vanari Wardens suffer Strike-Last unless their charge roll was 9+.'
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

  // =========================================================================
  // 6b. LUMINETH REALM-LORDS - Hurakan Vanguard
  // =========================================================================
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
        name: 'Storm Brewing',
        description: 'Wind gusts buffet foes: enemy units within 3" of Hurakan units subtract 1 from their melee hit rolls.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Windcaller Spells',
        description: 'Hero Phase: Grant 1 friendly unit Fly and +3" move until your next hero phase.'
      },
      {
        name: 'Arrows of the Gale',
        description: 'Shooting Phase: Windcharger bows ignore line of sight and cover bonuses.'
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
        id: 'lr-spirit-wind',
        name: 'Hurakan Spirit of the Wind',
        role: 'Monster',
        modelCount: 1,
        baseSize: '60mm',
        move: '14"',
        health: 8,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Bow of the Wind',
            type: 'Ranged',
            range: '24"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Wind Blades & Talons',
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
            name: 'Move Like the Wind',
            phase: 'Movement',
            type: 'Active',
            effect: 'Can shoot in the same turn it retreated.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'MONSTER', 'FLY', 'SPIRIT OF THE WIND']
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
        id: 'lr-wardens-hv',
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
      }
    ]
  },

  // =========================================================================
  // 7. SERAPHON - Starscale Warhost
  // =========================================================================
  {
    id: 'seraphon-starscale',
    name: 'Seraphon',
    subTitle: 'Starscale Warhost',
    grandAlliance: 'ORDER',
    accentColor: 'from-blue-600 to-teal-500',
    flavorQuote: 'The Great Plan shall be fulfilled through cold-blooded savagery and celestial fury.',
    battleTraits: [
      {
        name: 'Predatory Fighters',
        description: 'In any combat phase, roll a D6 for each enemy unit in combat with friendly Seraphon units: on a 3+, inflict 1 mortal damage on that enemy unit.'
      },
      {
        name: 'Cold-blooded Will',
        description: 'Friendly units ignore negative modifiers to their Control and Bravery characteristics.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Beast of the Dark Jungles',
        description: 'Combat Phase: Carnosaur delivers a terrifying roar; enemy models in combat roll 1 fewer attack dice (minimum 1).'
      },
      {
        name: 'Sweeping Jaws',
        description: 'Combat Phase: Kroxigor Drakebite Mauls add 1 to their attack characteristics when targeting units with 5 or more models.'
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
        effect: 'Your General adds 2 to their Health characteristic and gains a 6+ Ward save.'
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
        id: 'ser-carnosaur',
        name: 'Saurus Oldblood on Carnosaur',
        role: 'Monster',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '10"',
        health: 12,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Sunbolt Gauntlet',
            type: 'Ranged',
            range: '12"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Sunstone Gauntlet & Spear',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Carnosaur Jaws & Claws',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '4'
          }
        ],
        abilities: [
          {
            name: 'Blood Frenzy',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Each time the Carnosaur destroys an enemy model, it heals 1 wound and adds +1 Attack to its jaws.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'HERO', 'MONSTER', 'SAURUS', 'CARNOSAUR']
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
            effect: 'Add 1 to attack characteristics when fighting enemy units with 5 or more models.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'MONSTER', 'KROXIGOR']
      }
    ]
  },

  // =========================================================================
  // 7b. SERAPHON - Sunblooded Prowlers
  // =========================================================================
  {
    id: 'seraphon-sunblooded',
    name: 'Seraphon',
    subTitle: 'Sunblooded Prowlers',
    grandAlliance: 'ORDER',
    accentColor: 'from-emerald-600 to-amber-500',
    flavorQuote: 'Chameleon skinks and fire-breathing salamanders ambush foes from humid riverbanks.',
    battleTraits: [
      {
        name: 'Hidden Hunters',
        description: 'Hunters of Huanchi and Spawn of Chotec start in reserve; from Round 3 onwards, they can emerge anywhere >6" from all enemy units.'
      },
      {
        name: 'Vengeance of Azyr',
        description: 'Roll a D6 for each enemy unit in combat with friendly Saurus; on a 4+, inflict 1 mortal damage.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Scaled Aegis',
        description: 'Hero Phase: Grant a friendly Saurus unit a 6+ Ward save until the start of your next turn on a roll of 3+.'
      },
      {
        name: 'Chameleon Ambush',
        description: 'Shooting Phase: Hunters of Huanchi emerging from reserve score critical hits on unmodified 5+ on their blowpipes.'
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
        id: 'ser-sunblood-pack',
        name: 'Sunblood Pack with Venomites',
        role: 'Hero',
        modelCount: 3,
        baseSize: '32mm',
        move: '8"',
        health: 7,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Celestite Blowpipe & Darts',
            type: 'Ranged',
            range: '12"',
            attacks: 6,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Venomite Stings & Claws',
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
            name: 'Venomous Swarm',
            phase: 'Combat',
            type: 'Active',
            effect: 'Unmodified wound rolls of 6 inflict mortal wounds directly.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'HERO', 'SKINK', 'SUNBLOOD PACK']
      },
      {
        id: 'ser-spawn-chotec',
        name: 'Spawn of Chotec',
        role: 'Monster',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '6"',
        health: 8,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Flaming Acid Glob',
            type: 'Ranged',
            range: '12"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Claws and Bites',
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
            name: 'Acidic Burn',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Units damaged by flaming glob suffer -1 to Save rolls until end of turn.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'MONSTER', 'SPAWN OF CHOTEC']
      },
      {
        id: 'ser-huanchi',
        name: 'Hunters of Huanchi with Starstone Blowpipes',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '8"',
        health: 10,
        save: '6+',
        control: 5,
        weapons: [
          {
            name: 'Starstone Blowpipe',
            type: 'Ranged',
            range: '12"',
            attacks: 10,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Chameleon Daggers',
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
            name: 'Chameleon Camouflage',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Cannot be selected as a shooting target beyond 12".'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'INFANTRY', 'HUNTERS OF HUANCHI']
      },
      {
        id: 'ser-terrawings',
        name: 'Terrawings',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '32mm',
        move: '12"',
        health: 6,
        save: '5+',
        control: 3,
        weapons: [
          {
            name: 'Razor Beaks and Talons',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Terrifying Screech',
            phase: 'Charge',
            type: 'Active',
            effect: 'Roll a D6 on charge: on 4+, target enemy unit cannot receive command abilities this turn.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'FLY', 'TERRAWINGS']
      }
    ]
  },

  // =========================================================================
  // 8. STORMCAST ETERNALS - Vigilant Brotherhood
  // =========================================================================
  {
    id: 'stormcast-vigilant',
    name: 'Stormcast Eternals',
    subTitle: 'Vigilant Brotherhood',
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-600 to-yellow-500',
    flavorQuote: 'By Sigmar’s lightning, the Ruinous Powers shall find no foothold in this realm.',
    battleTraits: [
      {
        name: 'Shield of Azyr',
        description: 'Once Per Turn, Your Hero Phase: Pick 1 friendly unit; until the start of your next turn, that unit has a Ward (5+).'
      },
      {
        name: 'Storm Charge',
        description: 'Once Per Battle, Your Charge Phase: Pick 1 friendly unit that is not in combat; that unit can charge even if it ran in the same turn.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Strike Where Needed',
        description: 'When the unit using this ability retreats, no mortal damage is inflicted on it by that retreat, and it can still charge later in the same turn.'
      },
      {
        name: 'Staunch Defender',
        description: 'Add 1 to save rolls for friendly Stormcast units while contesting an objective marker.'
      }
    ],
    heroTraits: [
      {
        id: 'st-ht-1',
        name: 'Strike Where Needed',
        type: 'Hero Trait',
        effect: 'Your General can retreat without suffering damage and can charge in the same turn.'
      },
      {
        id: 'st-ht-2',
        name: 'Staunch Defender',
        type: 'Hero Trait',
        effect: 'Add 1 to save rolls for your General while contesting an objective marker.'
      }
    ],
    artefacts: [
      {
        id: 'st-art-1',
        name: 'Hallowed Scrolls',
        type: 'Artefact of Power',
        effect: 'Sacred Sigmarite parchments wrap the bearer in protective blessings, granting a 5+ Ward save.'
      },
      {
        id: 'st-art-2',
        name: "Morrda's Talon",
        type: 'Artefact of Power',
        effect: 'Improve the Rend characteristic of the bearer’s melee weapons by 1 and gain Crit (Mortal).'
      }
    ],
    units: [
      {
        id: 'st-lord-vigilant',
        name: 'Lord-Vigilant on Gryph-stalker',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60mm',
        move: '10"',
        health: 7,
        save: '3+',
        control: 3,
        weapons: [
          {
            name: 'Heavy Sigmarite Battleaxe',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Gryph-stalker Talons & Beak',
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
            name: 'Ruination Chamber Vanguard',
            phase: 'Combat',
            type: 'Active',
            effect: 'On turns this model charges, it gains Strike-First and cannot be battleshocked.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'HERO', 'CAVALRY', 'LORD-VIGILANT']
      },
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
        name: 'Liberators with Warhammers',
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

  // =========================================================================
  // 8b. STORMCAST ETERNALS - Yndrasta's Spearhead
  // =========================================================================
  {
    id: 'stormcast-yndrasta',
    name: 'Stormcast Eternals',
    subTitle: "Yndrasta's Spearhead",
    grandAlliance: 'ORDER',
    accentColor: 'from-amber-500 to-yellow-300',
    flavorQuote: 'The Prime Hunter swoops from the heavens to skewer the monstrous beasts of the Mortal Realms.',
    battleTraits: [
      {
        name: 'Scions of the Storm',
        description: 'Yndrasta and Annihilators are not set up during deployment; they are kept in reserve and descend from the heavens from Round 3 onwards >9" from enemies.'
      },
      {
        name: 'Azyrite Meteoric Impact',
        description: 'When Annihilators complete a charge move, roll a D6 for each model: on a 3+, target suffers D3 mortal damage.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Drive Them Back',
        description: 'Combat Phase: Friendly units contesting objectives and in combat can make a pile-in move; roll a D6 for each unit, on 4+ deal 1 mortal damage to an enemy within 1".'
      },
      {
        name: 'The Prime Huntress',
        description: 'Passive: The Damage characteristic of Thengavar (Yndrasta’s spear) is 2D6 for attacks that target a MONSTER.'
      }
    ],
    heroTraits: [
      {
        id: 'ynd-ht-1',
        name: 'Strike with the Tempest’s Rage',
        type: 'Hero Trait',
        effect: 'Your General has Strike-First on the turn they complete a charge move.'
      },
      {
        id: 'ynd-ht-2',
        name: 'Apex Slayer',
        type: 'Hero Trait',
        effect: 'Your General rerolls hit rolls of 1 against enemy models with 5 or more Health.'
      }
    ],
    artefacts: [
      {
        id: 'ynd-art-1',
        name: 'Hallowed Scrolls',
        type: 'Artefact of Power',
        effect: 'Sacred Sigmarite parchment gives the bearer a 5+ Ward save.'
      },
      {
        id: 'ynd-art-2',
        name: "Morrda's Talon",
        type: 'Artefact of Power',
        effect: 'Bearer’s attacks score critical mortal hits on unmodified 6s.'
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
            damage: '3 (2D6 vs Monster)',
            ability: 'Prime Huntress'
          },
          {
            name: 'Thengavar (Melee)',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '2+',
            toWound: '3+',
            rend: '-2',
            damage: '3 (2D6 vs Monster)'
          }
        ],
        abilities: [
          {
            name: 'Dazzling Radiance',
            phase: 'Movement',
            type: 'Active',
            effect: 'Once per battle in movement phase: return 1 slain model to a friendly unit within 12".'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'HERO', 'MONSTER', 'FLY', 'YNDRASTA']
      },
      {
        id: 'ynd-vexillor',
        name: 'Knight-Vexillor with Banner of Apotheosis',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '5"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'War-flail',
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
            name: 'Banner of Apotheosis',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6 for a friendly damaged unit within 12": on 3+, return 1 slain model or heal 3 wounds.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'HERO', 'KNIGHT-VEXILLOR']
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

  // =========================================================================
  // 9. SYLVANETH - Bitterbark Copse
  // =========================================================================
  {
    id: 'sylvaneth-bitterbark',
    name: 'Sylvaneth',
    subTitle: 'Bitterbark Copse',
    grandAlliance: 'ORDER',
    accentColor: 'from-emerald-700 to-amber-900',
    flavorQuote: 'Nature’s vengeance takes root. The song of the forest cries out for mortal intruders to be trampled and crushed.',
    battleTraits: [
      {
        name: 'Ley Lines',
        description: 'Friendly Sylvaneth units draw vitality from overgrown soil, healing 1 wound at the end of your movement phase if positioned within 3" of terrain.'
      },
      {
        name: 'Strike and Fade',
        description: 'Combat Phase: 1 friendly Sylvaneth unit that fought while near terrain can vanish back into the spirit paths and redeploy to safety on a roll of 3+.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Ground-shaking Stomp',
        description: 'Combat Phase: The Treelord stomps the ground; roll a D6, on a 3+, an enemy unit in combat suffers Strike-Last.'
      },
      {
        name: 'Envoys of the Everqueen',
        description: 'Passive: Kurnoth Hunters reroll save rolls of 1 while contesting an objective marker.'
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
        effect: 'Add 1 to the Save characteristic of your General and gain 5+ Ward.'
      }
    ],
    artefacts: [
      {
        id: 'syl-bb-art1',
        name: 'Acorn of the Ages',
        type: 'Artefact of Power',
        effect: 'Once per battle, set up an overgrown terrain zone that grants cover and healing to friendly units.'
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
        id: 'syl-treelord',
        name: 'Treelord',
        role: 'Monster',
        modelCount: 1,
        baseSize: '105x70mm',
        move: '6"',
        health: 12,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Strangleroots',
            type: 'Ranged',
            range: '12"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Massive Crushing Claws & Sweeping Blows',
            type: 'Melee',
            range: '2"',
            attacks: 6,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: 'D3+1'
          }
        ],
        abilities: [
          {
            name: 'Ground-shaking Stomp',
            phase: 'Combat',
            type: 'Active',
            effect: 'Enemy units in combat with Treelord suffer Strike-Last on a 3+.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'MONSTER', 'TREELORD']
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
      }
    ]
  },

  // =========================================================================
  // 9b. SYLVANETH - Spitewing Flight
  // =========================================================================
  {
    id: 'sylvaneth-spitewing',
    name: 'Sylvaneth',
    subTitle: 'Spitewing Flight',
    grandAlliance: 'ORDER',
    accentColor: 'from-lime-600 to-teal-800',
    flavorQuote: 'Airborne spiterider cavalry and gossamid archers buzz across the canopy with rapid hit-and-run strikes.',
    battleTraits: [
      {
        name: 'Spiterider Speed',
        description: 'All friendly flying units add +2" to their Movement and Charge characteristics.'
      },
      {
        name: 'Spite Swarm Evade',
        description: 'When an enemy unit finishes a charge within 3" of Gossamid Archers, the archers can immediately retreat up to 6" on a 3+.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Thrumming Charge',
        description: 'Charge Phase: Spiterider Lancers gain Strike-First if their charge roll was 8 or higher.'
      },
      {
        name: 'Soul-quarry Harvest',
        description: 'Combat Phase: When Revenant Seekers destroy an enemy model, heal 3 wounds on a friendly Sylvaneth unit or return 1 slain model.'
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
            effect: 'Pick 1 friendly Spiterider or Gossamid unit within 12"; add 1 to its attacks characteristic this phase.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'HERO', 'FLY', 'ARCH-REVENANT']
      },
      {
        id: 'syl-spiteriders',
        name: 'Spiterider Lancers',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '60x35mm',
        move: '12"',
        health: 12,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Spiterider Lances',
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
            name: 'Thrumming Charge',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Gains Strike-First if the charge roll was 8 or higher.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'FLY', 'CAVALRY', 'SPITERIDERS']
      },
      {
        id: 'syl-seekers',
        name: 'Revenant Seekers',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '60x35mm',
        move: '12"',
        health: 12,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Harvest Scythes',
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
            name: 'Soul-quarry Harvest',
            phase: 'Combat',
            type: 'Active',
            effect: 'Each time this unit destroys an enemy model, heal 3 wounds on a friendly Sylvaneth unit or return 1 slain model.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'FLY', 'CAVALRY', 'REVENANT SEEKERS']
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
      }
    ]
  }
];
