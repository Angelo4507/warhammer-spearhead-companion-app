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
    flavorQuote: "Steady yourselves, lads. Raise your shields and stir your spirits. I've never lost a battle, and I don't intend to start today. – Cavalier-Marshal Guillam Marcanrothe of Settler's Gain",
    battleTraits: [
      {
        name: "The Officar's Order",
        description: "Once Per Battle Round, Start of Battle Round: Pick a battle tactic card in your hand and place it face-down separately next to your other battle tactic cards. The information on it is still hidden from your opponent but make it clear which card is separate. The card stays separate until you use the command on it or score the battle tactic on it. When you use the command on that card, it is not discarded but returns to your hand. Your opponent can check the information on it before it returns to your hand. The card goes back to being a normal battle tactic card, with the exception that you cannot use the command on it in the same phase it went back into your hand. If you did not use the command on the card you separated, you can still score the battle tactic on it at the end of your turn as normal if you met its conditions. If you do so, discard it as normal. If you neither used the command nor scored the battle tactic on the card, it automatically returns to your hand at the end of your turn."
      }
    ],
    regimentAbilities: [
      {
        name: 'For Sigmar, Charge!',
        description: 'Passive: Friendly Cavalry units have STRIKE-FIRST if they charged in the same turn.'
      },
      {
        name: 'Ironweld Discipline',
        description: "Once Per Turn, Enemy Shooting Phase: Declare: Pick your Ironweld Great Cannon to use this ability. Effect: Roll a dice. On a 3+, it can use the 'Shoot' ability as if it were your shooting phase."
      }
    ],
    heroTraits: [
      {
        id: 'cos-cc-ht1',
        name: 'Flask of Lethisian Darkwater',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Start of Any Turn: Heal (D6) your general.'
      },
      {
        id: 'cos-cc-ht2',
        name: 'Glimmering',
        type: 'Hero Trait',
        effect: 'Passive: Each phase, you can re-roll 1 hit roll, or 1 wound roll, or 1 save roll made for your general.'
      }
    ],
    artefacts: [
      {
        id: 'cos-cc-art1',
        name: 'Heirloom Blade',
        type: 'Artefact of Power',
        effect: "Passive: Add 1 to the Rend characteristic of your general's Master-forged Longsword."
      },
      {
        id: 'cos-cc-art2',
        name: 'Brazier of Holy Flame',
        type: 'Artefact of Power',
        effect: "End of Any Turn: Declare: Pick a friendly Freeguild Steelhelms unit within your general's combat range. Effect: You can return up to D3 slain models to that unit."
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
        health: 7,
        save: '3+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Dragoon Pistol',
            type: 'Ranged',
            range: '10"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Master-forged Longsword',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          },
          {
            name: "Warhorse's Steel-shod Hooves",
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
            name: 'Decisive Commander',
            phase: 'Hero',
            type: 'Active',
            effect: "Your Hero Phase: Declare: Pick a friendly Freeguild Steelhelms unit wholly within 12\" of this unit to be the target and roll a dice. Effect: On a 2+, pick 1: • On Your Feet!: If the target unit is not in combat, you can return D3 slain models to it. • Yield No Quarter!: Add 3 to the target unit's control score until the start of your next turn."
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'CAVALRY', 'FREEGUILD CAVALIER-MARSHAL']
      },
      {
        id: 'cos-steelhelms-1',
        name: 'Freeguild Steelhelms (Squad 1)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Freeguild Weapon',
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
            name: 'Consecrate the Land',
            phase: 'Movement',
            type: 'Active',
            effect: 'Your Movement Phase: Declare: If this unit is contesting an objective you control that is not contested by any enemy models, roll a dice. Effect: On a 3+, that objective is considered by you to be consecrated. Friendly units have Ward (6+) while they are contesting a consecrated objective. If your opponent gains control of a consecrated objective, it is no longer consecrated.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'REINFORCEMENTS', 'FREEGUILD STEELHELMS']
      },
      {
        id: 'cos-steelhelms-2',
        name: 'Freeguild Steelhelms (Squad 2)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Freeguild Weapon',
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
            name: 'Consecrate the Land',
            phase: 'Movement',
            type: 'Active',
            effect: 'Your Movement Phase: Declare: If this unit is contesting an objective you control that is not contested by any enemy models, roll a dice. Effect: On a 3+, that objective is considered by you to be consecrated. Friendly units have Ward (6+) while they are contesting a consecrated objective. If your opponent gains control of a consecrated objective, it is no longer consecrated.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'REINFORCEMENTS', 'FREEGUILD STEELHELMS']
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
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Cavalier Weapon',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Charge (+1 Damage)'
          },
          {
            name: "Warhorse's Steel-shod Hooves",
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
            name: 'Devastating Charge',
            phase: 'Charge',
            type: 'Active',
            effect: 'Any Charge Phase: Declare: If this unit charged this phase, pick an enemy unit in combat with it to be the target and roll a dice. Effect: On a 2+, inflict D3 mortal damage on the target.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'CAVALRY', 'REINFORCEMENTS', 'FREEGUILD CAVALIERS']
      },
      {
        id: 'cos-cannon',
        name: 'Ironweld Great Cannon',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '3"',
        health: 8,
        save: '4+',
        control: 2,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Great Cannon: Cannonball',
            type: 'Ranged',
            range: '24"',
            attacks: 2,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: 'D3+2',
            ability: 'Cannot choose if unit used a Move ability that turn'
          },
          {
            name: 'Great Cannon: Grapeshot',
            type: 'Ranged',
            range: '12"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: "Crew's Tools and Sidearms",
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
            name: 'Shot and Shell',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: Each time this unit uses a Shoot ability, choose either the Cannonball or Grapeshot weapon characteristics for all the attacks it makes with its Great Cannon. The Cannonball can only be chosen if this unit has not used a Move ability that turn.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'WAR MACHINE', 'REINFORCEMENTS', 'IRONWELD GREAT CANNON']
      }
    ]
  },

  // =========================================================================
  // 1b. CITIES OF SIGMAR - Fusil Platoon
  // =========================================================================
  {
    id: 'cities-fusil',
    name: 'Cities of Sigmar',
    subTitle: 'Fusil-Platoon',
    grandAlliance: 'ORDER',
    accentColor: 'from-blue-800 to-amber-700',
    flavorQuote: "Hold! There – I see them, skulking through the trees. Brace and make ready! Light fuses, give them a proper Greywater Welcome! – Fusil-Major Buckram Granveer of Greywater Fastness",
    battleTraits: [
      {
        name: 'Fortify Position',
        description: 'Passive: Subtract 1 from the Rend characteristic of weapons used for attacks that target friendly Castelite units if they did not use a Move ability in the same turn.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Well Provisioned',
        description: 'Once Per Turn (Army), Your Shooting Phase: Declare: Pick a friendly non-Hero unit to be the target. Effect: Roll a dice. On a 3+, add 1 to wound rolls for that unit’s shooting attacks for the rest of the phase.'
      },
      {
        name: 'Respected Leader',
        description: 'Once Per Battle, Deployment Phase: Effect: Friendly Wildercorps Hunters units gain the Reinforcements keyword.'
      }
    ],
    heroTraits: [
      {
        id: 'fusil-ht-1',
        name: 'Adept Tactician',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Your Movement Phase: Declare: Pick 2 friendly Freeguild Fusiliers units that have been destroyed and have not already been replaced. Effect: Set up a single replacement Freeguild Fusiliers unit with 10 models more than 6" from all enemy units.'
      },
      {
        id: 'fusil-ht-2',
        name: 'Shield Bash',
        type: 'Hero Trait',
        effect: 'Once Per Turn, Your Movement Phase: Declare: Pick an enemy Infantry, War Machine or Cavalry unit in combat with your general to be the target. Effect: Roll a dice. On a 3+, the target must immediately use the ‘Retreat’ ability as if it were the enemy movement phase.'
      }
    ],
    artefacts: [
      {
        id: 'fusil-art-1',
        name: 'Brace!',
        type: 'Artefact of Power',
        effect: 'Passive: Your general has Ward (5+).'
      },
      {
        id: 'fusil-art-2',
        name: 'Point-Blank Volley',
        type: 'Artefact of Power',
        effect: 'Once Per Turn, Enemy Combat Phase: Declare: Pick an enemy unit in combat with your general to be the target. Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.'
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
        health: 8,
        save: '3+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Long-Fusil',
            type: 'Ranged',
            range: '24"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Warhulk’s Mace',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Mark Targets',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Your Shooting Phase: Declare: Pick an enemy unit that was targeted by this unit’s shooting attacks this turn to be the target. Effect: Add 1 to hit rolls for shooting attacks made by friendly units that target that unit for the rest of the turn.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'INFANTRY', 'CASTELITE', 'FUSIL-MAJOR']
      },
      {
        id: 'fusil-warforger',
        name: 'Alchemite Warforger',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '5"',
        health: 5,
        save: '5+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Tongstaff',
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
            name: 'Blazing Weapons',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a friendly unit wholly within 12" of this unit to be the target, then make a casting roll of 2D6. Effect: On a 6+, the target’s melee weapons have Crit (Mortal) until the start of your next turn.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'WIZARD', 'INFANTRY', 'ALCHEMITE WARFORGER']
      },
      {
        id: 'fusil-fusiliers-1',
        name: 'Freeguild Fusiliers (with Squire)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '28.5mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Fusil-cannon',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Bayonet',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Blackpowder Squire',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: While this unit has a Blackpowder Squire token, this unit’s ranged weapons have Shoot in Combat.'
          },
          {
            name: 'Can’t Stop!',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Once Per Turn (Army), Your Shooting Phase: Declare: Pick another friendly Freeguild Fusiliers unit to be the target. Effect: Remove this unit’s Blackpowder Squire token from the battlefield, then give it to the target.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'CASTELITE', 'REINFORCEMENTS', 'FREEGUILD FUSILIERS']
      },
      {
        id: 'fusil-fusiliers-2',
        name: 'Freeguild Fusiliers (Squad 2)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '28.5mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Fusil-cannon',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Bayonet',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Blackpowder Squire',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: While this unit has a Blackpowder Squire token, this unit’s ranged weapons have Shoot in Combat.'
          },
          {
            name: 'Can’t Stop!',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Once Per Turn (Army), Your Shooting Phase: Declare: Pick another friendly Freeguild Fusiliers unit to be the target. Effect: Remove this unit’s Blackpowder Squire token from the battlefield, then give it to the target.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'CASTELITE', 'REINFORCEMENTS', 'FREEGUILD FUSILIERS']
      },
      {
        id: 'fusil-wildercorps',
        name: 'Wildercorps Hunters',
        role: 'Infantry',
        modelCount: 11,
        baseSize: '28.5mm',
        move: '5"',
        health: 11,
        save: '5+',
        control: 1,
        isReinforcement: false,
        reinforcementNote: 'Gains Reinforcements keyword if Respected Leader regiment ability is chosen',
        weapons: [
          {
            name: 'Hunting Crossbow',
            type: 'Ranged',
            range: '15"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Hunting Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Trailhound’s Ferocious Bite',
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
            name: 'Expert Trackers',
            phase: 'Movement',
            type: 'Active',
            effect: 'Deployment Phase: This unit can use the ‘Normal Move’ ability as if it were your movement phase.'
          },
          {
            name: 'Pack Composition',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Each model is armed with Hunting Crossbow and Hunting Weapons. The Wildercorps Warden has Trailhound’s Ferocious Bite in addition to other weapons. 4 of the 11 models are Trailhounds armed with Trailhound’s Ferocious Bite instead of other weapons.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'WILDERCORPS HUNTERS']
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
    flavorQuote: "I imagine the vermin believe that they have us trapped. Well, my friends – what say we go and disabuse them of the notion, eh? – Jorvan Kreel, Heir of the Kraken",
    battleTraits: [
      {
        name: 'Ranger Doctrines',
        description: 'Once Per Turn (Army), Reaction: You declared a Fight ability for your general or a friendly non-Hero unit wholly within 12" of your general. Immediately after that Fight ability has been resolved, pick a point on the battlefield within 6" of your general. Remove the unit using this ability from the battlefield and set it up again within 1" of that point and not in combat.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Close-Quarters Drill',
        description: 'Passive: Friendly units’ ranged weapons have Shoot in Combat but you must subtract 1 from hit rolls for their shooting attacks while they are in combat.'
      },
      {
        name: 'Come and Take It, Blaggards!',
        description: 'Passive: Add 5 to the control scores of friendly non-Hero units while they are in combat with any enemy units that have 6 or more models or a Health characteristic of 3 or more.'
      }
    ],
    heroTraits: [
      {
        id: 'emb-ht-1',
        name: 'Hot-Blooded Endurance',
        type: 'Hero Trait',
        effect: 'Passive: Your general can use Charge abilities even if they used a Run or Retreat ability in the same turn and no mortal damage is inflicted on them by Retreat abilities.'
      },
      {
        id: 'emb-ht-2',
        name: 'Trained Ranger',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Your Movement Phase: Declare: Pick a friendly unit wholly within 6" of a battlefield edge to be the target. Effect: Remove the target from the battlefield and set it up again wholly within 3" of a battlefield edge and more than 6" from all enemy units.'
      }
    ],
    artefacts: [
      {
        id: 'emb-art-1',
        name: 'Throwing Knives',
        type: 'Artefact of Power',
        effect: 'Any Shooting Phase: Declare: Pick a visible enemy unit within 10" of your general to be the target. Effect: Roll a dice. On a 3+, inflict 1 mortal damage on the target.'
      },
      {
        id: 'emb-art-2',
        name: 'Blade of the Kraken',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase: Effect: Double the Attacks characteristic of your general’s melee weapons for the rest of the turn.'
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
        health: 5,
        save: '4+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Ranger Blades',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Veteran Skirmishers',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a friendly unit wholly within 12" of this unit to be the target. Effect: Roll a dice. On a 3+, for the rest of the turn, add 2" to the target’s Move characteristic but it cannot use Run abilities.'
          },
          {
            name: 'Prowling Ash Panther',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn: If this unit has the Thexa token, give that token to an enemy unit within 6" of this unit. If an enemy unit has the Thexa token, inflict D3 mortal damage on that enemy unit. Then, give this unit the Thexa token.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'INFANTRY', 'JORVAN KREEL']
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
        isReinforcement: false,
        weapons: [
          {
            name: 'Sigmarite Warhammer',
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
            name: 'Consecrate the Land',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick an objective within 12" of this unit, then make a chanting roll of D6. Effect: On a 3+, for the rest of the turn, friendly units have Ward (5+) while they are contesting that objective.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'PRIEST', 'INFANTRY', 'MALLUS FORGEPRIEST']
      },
      {
        id: 'emb-gallants',
        name: 'Freeguild Gallants',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '28.5mm',
        move: '5"',
        health: 10,
        save: '3+',
        control: 1,
        isReinforcement: false,
        weapons: [
          {
            name: 'Weapons of Gallantry',
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
            name: 'Unbreachable Will',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase: Declare: If this unit has not charged this turn, pick an enemy unit in combat with it to be the target. Effect: For the rest of the turn, subtract 1 from the Rend characteristic of the target’s weapons for attacks that target this unit.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'FREEGUILD GALLANTS']
      },
      {
        id: 'emb-grenadiers-1',
        name: 'Freeguild Grenadiers (Squad 1)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '28.5mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Ruin-sweeper Arsenal',
            type: 'Ranged',
            range: '10"',
            attacks: 1,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '1'
          },
          {
            name: 'Grenadier Bardiche',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Cinder and Ash',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'Once Per Turn (Army), End of Any Turn: Declare: Pick up to 1 terrain feature contested by this unit and up to 1 objective contested by this unit, then pick any enemy units also contesting them to be the targets. Effect: Roll a dice for each target. On a 3+, inflict 1 mortal damage on the target.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'REINFORCEMENTS', 'FREEGUILD GRENADIERS']
      },
      {
        id: 'emb-grenadiers-2',
        name: 'Freeguild Grenadiers (Squad 2)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '28.5mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Ruin-sweeper Arsenal',
            type: 'Ranged',
            range: '10"',
            attacks: 1,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '1'
          },
          {
            name: 'Grenadier Bardiche',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Cinder and Ash',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'Once Per Turn (Army), End of Any Turn: Declare: Pick up to 1 terrain feature contested by this unit and up to 1 objective contested by this unit, then pick any enemy units also contesting them to be the targets. Effect: Roll a dice for each target. On a 3+, inflict 1 mortal damage on the target.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'REINFORCEMENTS', 'FREEGUILD GRENADIERS']
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
    flavorQuote: "The Great Wheel ever turns. Tomorrow it might crush us beneath its holy spokes, but today the enemy shall be ground to nothing! – Pater 'Wildeye' Klarn of the 67th Hammerhalian Regiment of Foot",
    battleTraits: [
      {
        name: 'Shadowy Spymaster',
        description: 'Your Whisperblade is not set up during the deployment phase. Instead, from the second battle round onwards, it can use Sudden Ambush (Your Movement Phase): Set up this unit within 6" of an enemy unit and not in combat.'
      },
      {
        name: 'Lady of the Wheel',
        description: 'Passive: Each time a friendly model is slain by a combat attack, roll a number of dice equal to that model’s Health characteristic. For each 5+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Fervent Rush',
        description: 'Once Per Turn (Army), Your Movement Phase: Declare: Pick a friendly unit to use this ability. Effect: This unit can use Charge abilities this turn even if it used a Run ability in the same turn.'
      },
      {
        name: 'Fierce Zealots',
        description: 'Passive: Add 3 to the control scores of friendly Freeguild Steelhelms units.'
      }
    ],
    heroTraits: [
      {
        id: 'zen-ht-1',
        name: 'Devout Commander',
        type: 'Hero Trait',
        effect: 'Passive: Add 1 to the Attacks characteristic and the Rend characteristic of your general’s Master-forged Weapon.'
      },
      {
        id: 'zen-ht-2',
        name: 'Step to It!',
        type: 'Hero Trait',
        effect: 'Once Per Turn, Reaction: You declared a Run ability for a non-Hero unit wholly within 12" of your general: Do not make a run roll as part of that Run ability. Instead, add 6" to that non-Hero unit’s Move characteristic to determine the distance each model in that unit can move as part of that Run ability.'
      }
    ],
    artefacts: [
      {
        id: 'zen-art-1',
        name: 'Stand Fast, Comrades',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Your Hero Phase: Declare: Pick a visible friendly non-Hero unit wholly within 12" of your general to be the target. Effect: The target has Ward (4+) until the start of the next battle round.'
      },
      {
        id: 'zen-art-2',
        name: 'Ardent Demand',
        type: 'Artefact of Power',
        effect: 'Any Combat Phase: Declare: Pick a visible friendly non-Hero unit wholly within 12" of your general to be the target. Effect: Add 1 to hit rolls for the target’s combat attacks for the rest of the turn.'
      }
    ],
    units: [
      {
        id: 'zen-marshal',
        name: 'Freeguild Marshal and Relic Envoy',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '5"',
        health: 5,
        save: '3+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Duelling Pistols',
            type: 'Ranged',
            range: '10"',
            attacks: 4,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Master-forged Weapon',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Marshal’s Orders',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a visible friendly unit wholly within 12" of this unit to be the target. Effect: Remove this unit’s Relic Envoy token from the battlefield, then give it to the target.'
          },
          {
            name: 'Relic Envoy',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: While a friendly unit other than this unit has the Relic Envoy token, add 1 to wound rolls for that unit’s combat attacks. If this unit is destroyed, remove the Relic Envoy token from the battlefield.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'INFANTRY', 'FREEGUILD MARSHAL']
      },
      {
        id: 'zen-pontifex',
        name: 'Pontifex Zenestra, Matriarch of the Great Wheel',
        role: 'Hero',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '5"',
        health: 9,
        save: '5+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Sceptre of the Wheel',
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
            name: 'Vessel of Sigmar',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick up to 3 visible friendly or enemy units to be the targets. Effect: Roll a D3 for each target. On a 2+: • If friendly, it has Ward (5+) until the start of your next turn. • If enemy, inflict mortal damage equal to the roll.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'HERO', 'PRIEST', 'INFANTRY', 'WARD (4+)', 'PONTIFEX ZENESTRA']
      },
      {
        id: 'zen-whisperblade',
        name: 'Freeguild Command Corps Whisperblade',
        role: 'Infantry',
        modelCount: 1,
        baseSize: '28.5mm',
        move: '5"',
        health: 3,
        save: '6+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Enchanted Rapier',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '4+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Forewarned is Forearmed',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: While it is your turn, this unit has Strike-first.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'WHISPERBLADE']
      },
      {
        id: 'zen-arch-knight',
        name: 'Freeguild Command Corps Arch-Knight & Retinue',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '28.5mm / 32mm',
        move: '5"',
        health: 10,
        save: '4+',
        control: 2,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Command Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Talented Champions',
            phase: 'Reaction',
            type: 'Reaction',
            effect: 'Once Per Turn, Reaction: You used a command: After that command has been resolved, return the card to your hand. (Allows using command twice or scoring the battle tactic).'
          },
          {
            name: 'Retinue Composition',
            phase: 'Passive',
            type: 'Passive',
            effect: 'This unit comprises 1 Arch-Knight, 1 Great Herald, 1 War Surgeon, 1 Soul Shepherd and 1 Mascot Gargoylian.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'REINFORCEMENTS', 'COMMAND CORPS']
      },
      {
        id: 'zen-steelhelms-1',
        name: 'Freeguild Steelhelms (Squad 1)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Freeguild Weapons',
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
            name: 'Fanatical Followers',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase: Effect: Return 1 slain model to this unit.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'REINFORCEMENTS', 'FREEGUILD STEELHELMS']
      },
      {
        id: 'zen-steelhelms-2',
        name: 'Freeguild Steelhelms (Squad 2)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when slain',
        weapons: [
          {
            name: 'Freeguild Weapons',
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
            name: 'Fanatical Followers',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase: Effect: Return 1 slain model to this unit.'
          }
        ],
        keywords: ['ORDER', 'CITIES OF SIGMAR', 'INFANTRY', 'REINFORCEMENTS', 'FREEGUILD STEELHELMS']
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
    flavorQuote: '“Let us gouge out the hearts of these fools and offer them to the Bloody-Handed One!” — Cariadra Hagg-Mawr',
    battleTraits: [
      {
        name: 'Blood Rites',
        description: 'The abilities gained are cumulative and are applied from the start of the battle round indicated:\n• Battle Round 1 (Quickening Blood): Add 1" to run rolls for friendly Heartflayer Troupe units.\n• Battle Round 2 (Eager to Flay): Add 1 to charge rolls for friendly Heartflayer Troupe units.\n• Battle Round 3 (Murderous Joy): Add 1 to hit rolls for friendly Heartflayer Troupe units’ combat attacks.\n• Battle Round 4 (Unbridled Butchery): Add 1 to wound rolls for friendly Heartflayer Troupe units’ combat attacks.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Murderous Epiphany',
        description: 'Once Per Battle, Friendly Hero Phase: Pick 1 friendly Heartflayer Troupe unit wholly within 12" of your General. For the rest of the battle round, treat the battle round number as being 1 higher than it actually is for the purposes of that unit’s Blood Rites ability.'
      },
      {
        name: 'Blessing of Khaine',
        description: 'Once Per Turn, Any Combat Phase: Pick 1 friendly Heartflayer Troupe unit wholly within 12" of your General. Until the end of the turn, add 1 to ward rolls for that unit.'
      }
    ],
    heroTraits: [
      {
        id: 'dok-hf-ht1',
        name: 'Bathed in Blood',
        type: 'Hero Trait',
        effect: 'Passive: Each time an enemy model is slain by an attack made by your General, Heal (1) your General.'
      },
      {
        id: 'dok-hf-ht2',
        name: 'Zealous Orator',
        type: 'Hero Trait',
        effect: 'Friendly Hero Phase: Pick 1 friendly Heartflayer Troupe unit wholly within 9" of your General that is not in combat. Roll a D6 for each slain model from that unit. On a 5+, return 1 slain model to that unit.'
      }
    ],
    artefacts: [
      {
        id: 'dok-hf-art1',
        name: 'Fuelled by Revenge',
        type: 'Artefact of Power',
        effect: 'Passive: Add 1 to the Rend characteristic of melee weapons used by friendly Blood Stalkers units while they are wholly within 12" of the bearer.'
      },
      {
        id: 'dok-hf-art2',
        name: 'Flask of Shademist',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase: The bearer can drink this draught. If they do so, subtract 1 from hit rolls for attacks that target friendly Heartflayer Troupe units while they are wholly within 12" of the bearer until the end of the turn.'
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
        save: '5+',
        ward: '6+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Keldrisaíth (Ranged)',
            type: 'Ranged',
            range: '12"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          },
          {
            name: 'Keldrisaíth (Melee)',
            type: 'Melee',
            range: '2"',
            attacks: 6,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'All-Out Slaughter',
            phase: 'Hero',
            type: 'Active',
            effect: 'Friendly Hero Phase: Pick 1 friendly Heartflayer Troupe unit wholly within 12" of this unit. Add 1 to the Attacks characteristic of that unit’s melee weapons until the start of your next hero phase.'
          },
          {
            name: 'Turned to Crystal',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn: Pick 1 enemy unit within 1" of this unit and roll a D6. On a 2+, inflict 1 mortal damage on that unit.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'SCÁTHBORN', 'HERO', 'INFANTRY', 'MELUSAI IRONSCALE']
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
        ward: '6+',
        control: 5,
        isReinforcement: false,
        weapons: [
          {
            name: 'Heartseeker Bow',
            type: 'Ranged',
            range: '18"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          },
          {
            name: 'Scianlar',
            type: 'Melee',
            range: '1"',
            attacks: 2,
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
            effect: 'Passive: If this unit has not moved this turn, critical hits for its shooting attacks score on an unmodified hit roll of 5+ instead of 6.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'SCÁTHBORN', 'INFANTRY', 'BLOOD STALKERS']
      },
      {
        id: 'dok-warlocks',
        name: 'Doomfire Warlocks',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60 × 35mm',
        move: '14"',
        health: 15,
        save: '5+',
        ward: '6+',
        control: 5,
        isReinforcement: false,
        weapons: [
          {
            name: 'Doomfire Crossbow',
            type: 'Ranged',
            range: '10"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Cursed Scimitar',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Dark Steed’s Flashing Hooves & Poisoned Bite',
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
            name: 'Doomfire',
            phase: 'Hero',
            type: 'Active',
            effect: 'Friendly Hero Phase: Pick 1 visible enemy unit within 12" of this unit and roll 2D6. If the roll is 6+, inflict D3 mortal damage on that enemy unit.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'CAVALRY', 'DOOMFIRE WARLOCKS']
      },
      {
        id: 'dok-witch-aelves-1',
        name: 'Witch Aelves (Unit 1)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '6"',
        health: 5,
        save: '6+',
        ward: '6+',
        control: 5,
        isReinforcement: true,
        reinforcementNote: 'Reinforcements: When destroyed, call a replacement unit of 5 Witch Aelves via Call Reinforcements.',
        weapons: [
          {
            name: 'Paired Sciansá',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Frenzied Fervour',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: Add 1 to the Rend characteristic of this unit’s melee weapons if this unit made a charge move this turn.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'INFANTRY', 'REINFORCEMENTS', 'WITCH AELVES']
      },
      {
        id: 'dok-witch-aelves-2',
        name: 'Witch Aelves (Unit 2)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '6"',
        health: 5,
        save: '6+',
        ward: '6+',
        control: 5,
        isReinforcement: true,
        reinforcementNote: 'Reinforcements: When destroyed, call a replacement unit of 5 Witch Aelves via Call Reinforcements.',
        weapons: [
          {
            name: 'Paired Sciansá',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          }
        ],
        abilities: [
          {
            name: 'Frenzied Fervour',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: Add 1 to the Rend characteristic of this unit’s melee weapons if this unit made a charge move this turn.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'INFANTRY', 'REINFORCEMENTS', 'WITCH AELVES']
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
    flavorQuote: '“We shall enact your will, most glorious mistress. The enemy will not even know their doom until our blades kiss their throats.” — Shroud Queen Lyssith of the Sithis Tral',
    battleTraits: [
      {
        name: 'Shadowmasked',
        description: 'Once Per Turn, Any Charge Phase: Pick 1 friendly Khainite Shadow Coven Infantry unit that is in combat and did not make a charge move this turn. Until the end of the turn, subtract 1 from hit rolls and wound rolls for attacks made by enemy units that target that unit.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Bleed Them Pale',
        description: 'Once Per Battle, Friendly Combat Phase: Pick 1 friendly Khainite Shadow Coven Infantry unit that is in combat. That unit can immediately make a normal move of up to 6" and can move through the combat ranges of enemy units, but must end that move not in combat.'
      },
      {
        name: 'Murderous Strike',
        description: 'Passive, Any Combat Phase: Add 1 to the Rend characteristic of melee weapons used by friendly Khainite Shadow Coven Infantry units that made a charge move this turn.'
      }
    ],
    heroTraits: [
      {
        id: 'dok-sc-ht1',
        name: 'Frenzied Exhortations',
        type: 'Hero Trait',
        effect: 'Friendly Hero Phase: Pick 1 friendly Khainite Shadow Coven unit wholly within 12" of your General and roll a D6. On a 3+, add 1 to ward rolls for that unit until the start of your next hero phase.'
      },
      {
        id: 'dok-sc-ht2',
        name: 'Boiling Blood',
        type: 'Hero Trait',
        effect: 'Friendly Shooting Phase: Pick 1 visible enemy unit within 12" of your General and roll a D6. If the roll equals or exceeds the target’s Save characteristic, until the start of your next turn, halve the Move characteristic of that unit.'
      }
    ],
    artefacts: [
      {
        id: 'dok-sc-art1',
        name: 'Shadow Avatar',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase: The bearer can unleash their shadow avatar. If they do so, add 1 to the Rend characteristic of the bearer’s melee weapons for the rest of the turn.'
      },
      {
        id: 'dok-sc-art2',
        name: 'Bladed Impact',
        type: 'Artefact of Power',
        effect: 'Any Charge Phase: Each time the bearer completes a charge move, pick 1 enemy unit within 1" of the bearer and roll a D6. On a 2+, inflict D3 mortal damage on that enemy unit.'
      }
    ],
    units: [
      {
        id: 'dok-cauldron',
        name: 'Slaughter Queen on Cauldron of Blood',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120 × 92mm',
        move: '6"',
        health: 12,
        save: '4+',
        ward: '6+',
        control: 5,
        isReinforcement: false,
        weapons: [
          {
            name: 'Shrine Guardians’ Blades',
            type: 'Melee',
            range: '2"',
            attacks: 9,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Consecrated Revulsion',
            phase: 'Hero',
            type: 'Active',
            effect: 'Friendly Hero Phase: Roll a D6. On a 3+, add 1 to save rolls for friendly Khainite Shadow Coven Infantry units while they are wholly within 12" of this unit until the start of your next hero phase.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'HERO', 'PRIEST', 'WAR MACHINE', 'SLAUGHTER QUEEN ON CAULDRON OF BLOOD']
      },
      {
        id: 'dok-hag-queen',
        name: 'Hag Queen',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '5+',
        ward: '6+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Blade of Khaine',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Bloody Incitement',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase: Pick 1 friendly Khainite Shadow Coven unit wholly within 12" of this unit. Until the end of the phase, melee weapons used by that unit have Crit (Auto-wound). If this unit is in combat, this ability automatically takes effect; otherwise, roll a D6: on a 3+, it takes effect.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'HERO', 'PRIEST', 'INFANTRY', 'HAG QUEEN']
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
        ward: '6+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Bloodwrack Spear',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Exsanguinating Glare',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Friendly Shooting Phase: Pick 1 visible enemy unit within 12" of this unit and roll a D6. On a 3+, inflict 1 mortal damage on that unit. If any models were slain by this damage, inflict 1 additional mortal damage on that unit.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'SCÁTHBORN', 'HERO', 'WIZARD', 'INFANTRY', 'BLOODWRACK MEDUSA']
      },
      {
        id: 'dok-shadowstalkers',
        name: 'Khainite Shadowstalkers',
        role: 'Infantry',
        modelCount: 9,
        baseSize: '28.5mm',
        move: '6"',
        health: 9,
        save: '5+',
        ward: '6+',
        control: 9,
        isReinforcement: false,
        weapons: [
          {
            name: 'Cursed Bolts',
            type: 'Ranged',
            range: '10"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Blades of Murder',
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
            name: 'Shadow Leap',
            phase: 'Movement',
            type: 'Active',
            effect: 'Once Per Battle, Friendly Movement Phase: Instead of making a normal move with this unit, remove this unit from the battlefield and set it up anywhere on the battlefield more than 6" from all enemy units.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'INFANTRY', 'KHAINITE SHADOWSTALKERS']
      },
      {
        id: 'dok-sisters-slaughter-1',
        name: 'Sisters of Slaughter (Unit 1)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '6"',
        health: 5,
        save: '6+',
        ward: '6+',
        control: 5,
        isReinforcement: true,
        reinforcementNote: 'Reinforcements: When destroyed, call a replacement unit of 5 Sisters of Slaughter via Call Reinforcements.',
        weapons: [
          {
            name: 'Kruiplash',
            type: 'Melee',
            range: '2"',
            attacks: 3,
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
            type: 'Active',
            effect: 'Enemy Combat Phase: If this unit is not in combat, it can move 2D6". It can move through the combat ranges of enemy units, but must end that move in combat.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'INFANTRY', 'REINFORCEMENTS', 'SISTERS OF SLAUGHTER']
      },
      {
        id: 'dok-sisters-slaughter-2',
        name: 'Sisters of Slaughter (Unit 2)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '6"',
        health: 5,
        save: '6+',
        ward: '6+',
        control: 5,
        isReinforcement: true,
        reinforcementNote: 'Reinforcements: When destroyed, call a replacement unit of 5 Sisters of Slaughter via Call Reinforcements.',
        weapons: [
          {
            name: 'Kruiplash',
            type: 'Melee',
            range: '2"',
            attacks: 3,
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
            type: 'Active',
            effect: 'Enemy Combat Phase: If this unit is not in combat, it can move 2D6". It can move through the combat ranges of enemy units, but must end that move in combat.'
          }
        ],
        keywords: ['ORDER', 'DAUGHTERS OF KHAINE', 'INFANTRY', 'REINFORCEMENTS', 'SISTERS OF SLAUGHTER']
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
    flavorQuote: '“Well then, Sons of Grimnir – do you want to live forever?” — Battlesmith Aurgi Cinder-eye of the Vostarg',
    battleTraits: [
      {
        name: 'Awaken the Runes',
        description: 'Once Per Battle Round, Start of Your Turn: Declare: Pick 1 ur-gold rune that has not been awakened yet, then roll a D6. Effect: On 1-5, the standard effect applies until the start of your next turn. On a 6, both the standard and enhanced effects apply until the start of your next turn.\n• Rune of Fury: Standard: +1 to hit rolls for combat attacks by friendly units. Enhanced: In addition, +1 to Attacks of melee weapons used by friendly units.\n• Rune of Searing Heat: Standard: +1 to Rend of melee weapons used by friendly units. Enhanced: In addition, +1 to Damage of melee weapons used by friendly units.\n• Rune of Fiery Determination: Standard: Friendly units have Ward (5+). Enhanced: In addition, +1 to save rolls for friendly units.\n• Rune of Relentless Zeal: Standard: +2" to Move characteristic of friendly units. Enhanced: In addition, +2 to charge rolls for friendly units.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Magmic Tunnels',
        description: 'Once Per Battle, Start of the First Battle Round: Declare: Pick up to 2 friendly units. Effect: Remove those units from the battlefield and set them up again anywhere on the battlefield more than 6" from all enemy units.'
      },
      {
        name: 'Fyresteel Throwing Axes',
        description: 'Once Per Turn (Army), Your Shooting Phase: Declare: Pick any number of friendly units not in combat within 10" of enemies. Effect: For each unit picked, pick an enemy within 10" visible to it and roll a D6. On 4+, inflict D3 mortal damage on that enemy.'
      }
    ],
    heroTraits: [
      {
        id: 'fs-ht-1',
        name: 'Too Stubborn to Die',
        type: 'Hero Trait',
        effect: 'Start of Any Turn: Declare: Pick your general. Effect: Heal (D3) that unit.'
      },
      {
        id: 'fs-ht-2',
        name: 'Spirit of Grimnir',
        type: 'Hero Trait',
        effect: 'Passive: You can re-roll activation rolls made for the "Ur-gold Runes" ability.'
      }
    ],
    artefacts: [
      {
        id: 'fs-art-1',
        name: 'Horn of Grimnir',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase: Declare: Pick your general if they are not in combat. Effect: Roll a dice for each friendly unit on the battlefield that has had models slain from it. On a 3+, return 1 slain model to that unit.'
      },
      {
        id: 'fs-art-2',
        name: 'Powerful Presence',
        type: 'Artefact of Power',
        effect: 'Passive: Add 3 to your general\'s control score.'
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
        save: '5+',
        ward: '6+',
        control: 5,
        weapons: [
          {
            name: 'Ancestral Battle-axe',
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
            name: 'Icon of Grimnir',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Add 1 to save rolls for friendly units while they are wholly within 12" of this unit.'
          },
          {
            name: 'Plant the Icon',
            phase: 'Hero',
            type: 'Active',
            effect: 'Once Per Battle, Any Hero Phase: Declare: Pick this unit. Effect: For the rest of the turn, friendly units have Ward (5+) while they are wholly within 12" of this unit.'
          }
        ],
        keywords: ['ORDER', 'FYRESLAYERS', 'HERO', 'INFANTRY', 'WARD (6+)', 'BATTLESMITH']
      },
      {
        id: 'fs-hearthguard',
        name: 'Hearthguard Berzerkers',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 10,
        save: '6+',
        ward: '6+',
        control: 5,
        weapons: [
          {
            name: 'Flamestrike Poleaxe',
            type: 'Melee',
            range: '2"',
            attacks: 2,
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
            phase: 'Passive',
            type: 'Passive',
            effect: 'While your general is wholly within this unit\'s combat range, both this unit and your general have Ward (5+).'
          }
        ],
        keywords: ['ORDER', 'FYRESLAYERS', 'INFANTRY', 'WARD (6+)', 'HEARTHGUARD BERZERKERS']
      },
      {
        id: 'fs-vulkite-1',
        name: 'Vulkite Berzerkers (Unit 1)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 10,
        save: '6+',
        ward: '6+',
        control: 5,
        weapons: [
          {
            name: 'Fyresteel Handaxes',
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
            name: 'Whirlwind of Destruction',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to the Attacks characteristic of this unit\'s melee weapons if it charged in the same turn.'
          }
        ],
        keywords: ['ORDER', 'FYRESLAYERS', 'INFANTRY', 'WARD (6+)', 'VULKITE BERZERKERS']
      },
      {
        id: 'fs-vulkite-2',
        name: 'Vulkite Berzerkers (Unit 2)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 10,
        save: '6+',
        ward: '6+',
        control: 5,
        weapons: [
          {
            name: 'Fyresteel Handaxes',
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
            name: 'Whirlwind of Destruction',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to the Attacks characteristic of this unit\'s melee weapons if it charged in the same turn.'
          }
        ],
        keywords: ['ORDER', 'FYRESLAYERS', 'INFANTRY', 'WARD (6+)', 'VULKITE BERZERKERS']
      },
      {
        id: 'fs-vulkite-3',
        name: 'Vulkite Berzerkers (Unit 3)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 10,
        save: '6+',
        ward: '6+',
        control: 5,
        weapons: [
          {
            name: 'Fyresteel Handaxes',
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
            name: 'Whirlwind of Destruction',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to the Attacks characteristic of this unit\'s melee weapons if it charged in the same turn.'
          }
        ],
        keywords: ['ORDER', 'FYRESLAYERS', 'INFANTRY', 'WARD (6+)', 'VULKITE BERZERKERS']
      },
      {
        id: 'fs-vulkite-4',
        name: 'Vulkite Berzerkers (Unit 4)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 10,
        save: '6+',
        ward: '6+',
        control: 5,
        weapons: [
          {
            name: 'Fyresteel Handaxes',
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
            name: 'Whirlwind of Destruction',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Add 1 to the Attacks characteristic of this unit\'s melee weapons if it charged in the same turn.'
          }
        ],
        keywords: ['ORDER', 'FYRESLAYERS', 'INFANTRY', 'WARD (6+)', 'VULKITE BERZERKERS']
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
    flavorQuote: '“I care not for glory. What I seek is victory – and through it, the survival of my people.” — Akhelian King Voliss of the Mor’phann',
    battleTraits: [
      {
        name: 'Royal Imperative',
        description: 'Once Per Battle (Army), Any Combat Phase: You can only use this ability in the third battle round. Effect: Pick 1 of the following effects to apply for the rest of the battle round:\n• Into Them!: Friendly units have Strike-first.\n• Strike Sure: Friendly units\' melee weapons have Crit (Mortal).'
      }
    ],
    regimentAbilities: [
      {
        name: 'The Spear of Asphoren',
        description: 'Once Per Turn (Army), Any Charge Phase: Declare: Pick a friendly unit that is not in combat to use this ability. Effect: Add 1 to charge rolls for that unit for the rest of the turn.'
      },
      {
        name: 'The Shield of Ulchiss',
        description: 'Once Per Turn (Army), Your Movement Phase: Declare: Pick a friendly unit in combat to use this ability. Effect: For the rest of the turn, each time that unit uses a Retreat ability, no mortal damage is inflicted on it.'
      }
    ],
    heroTraits: [
      {
        id: 'id-tg-ht1',
        name: 'Voltaic Charge',
        type: 'Hero Trait',
        effect: 'Passive: Your general\'s Akhelian Royal Weapons have Charge (+1 Damage).'
      },
      {
        id: 'id-tg-ht2',
        name: 'Dutiful Souls',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Your Hero Phase: Declare: Pick a friendly unit wholly within 12" of your general to be the target. Effect: You can return 1 slain model to the target unit. If the target is an Infantry unit, you can return D3 slain models to it instead.'
      }
    ],
    artefacts: [
      {
        id: 'id-tg-art1',
        name: 'Shimmering Amulet',
        type: 'Artefact of Power',
        effect: 'Passive: Your general has Ward (5+).'
      },
      {
        id: 'id-tg-art2',
        name: 'Soul Stealer',
        type: 'Artefact of Power',
        effect: 'End of Any Turn: If your general is in combat, Heal (D3) your general.'
      }
    ],
    units: [
      {
        id: 'id-king',
        name: 'Akhelian King',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60mm',
        move: '12"',
        health: 7,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Akhelian Royal Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Deepmare’s Fangs, Talons and Lashing Tails',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Raiders’ Resolve',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick another friendly unit wholly within this unit\'s combat range to be the target. Effect: Roll a dice. On a 3+, add 1 to save rolls for the target until the start of your next turn.'
          },
          {
            name: 'Wave Rider',
            phase: 'Charge',
            type: 'Active',
            effect: 'Any Charge Phase: Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'HERO', 'CAVALRY', 'FLY', 'AKHELIAN KING']
      },
      {
        id: 'id-morrsarr',
        name: 'Akhelian Morrsarr Guard',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '14"',
        health: 12,
        save: '4+',
        control: 1,
        weapons: [
          {
            name: 'Voltspear',
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
            name: 'Fangmora’s Fangs and Lashing Tail',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Biovoltaic Blast',
            phase: 'Charge',
            type: 'Active',
            effect: 'Once Per Battle, Any Charge Phase: Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. Effect: Roll a number of dice equal to the number of models in this unit. Add 1 to each roll if there are more models in the target unit than this unit. For each 3+, inflict 1 mortal damage on the target.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'CAVALRY', 'FLY', 'MORRSARR GUARD']
      },
      {
        id: 'id-ishlaen',
        name: 'Akhelian Ishlaen Guard',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '14"',
        health: 12,
        save: '4+',
        control: 1,
        weapons: [
          {
            name: 'Helsabre',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Fangmora’s Fangs and Lashing Tail',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Biovoltaic Barrier',
            phase: 'Combat',
            type: 'Active',
            effect: 'Once Per Battle, Any Combat Phase: Declare: Pick an enemy unit in combat with this unit to be the target. Effect: Roll a dice. On a 3+, subtract 1 from the Attacks characteristic of the target’s weapons for the rest of the turn.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'CAVALRY', 'FLY', 'ISHLAEN GUARD']
      },
      {
        id: 'id-reavers',
        name: 'Namarti Reavers',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '7"',
        health: 10,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be called again through reinforcements.',
        weapons: [
          {
            name: 'Whisperbow',
            type: 'Ranged',
            range: '12"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Keening Blade',
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
            name: 'Strike on the Move',
            phase: 'Passive',
            type: 'Passive',
            effect: 'This unit can use Shoot abilities even if it used a Run or Retreat ability in the same turn.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'INFANTRY', 'REINFORCEMENTS', 'NAMARTI REAVERS']
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
    flavorQuote: '“The ocean knows all secrets.” — Lagaeous, Isharann Soulscryer',
    battleTraits: [
      {
        name: 'Tides of Death',
        description: 'In each battle round, all friendly units have the Tides of Death passive ability that corresponds to the current battle round number:\n• Round 1 - Low Tide: Subtract 1 from hit rolls for shooting attacks that target this unit.\n• Round 2 - Flood Tide: This unit can use a Run ability and still use Shoot and/or Charge abilities later in the turn.\n• Round 3 - High Tide: This unit has Strike-first.\n• Round 4 - Ebb Tide: This unit can use a Retreat ability and still use Shoot and/or Charge abilities later in the turn.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Way of the Cresting Wave',
        description: 'Passive: Add 1 to the Rend characteristic of melee weapons used by friendly Namarti Thralls units that charged in the same turn.'
      },
      {
        name: 'Ethersea Predators',
        description: 'Once Per Turn (Army), End of Any Turn: Pick a friendly Cavalry unit that used a Fight ability this turn. Heal (D3) that unit.'
      }
    ],
    heroTraits: [
      {
        id: 'id-sr-ht1',
        name: 'Arch-ritualist',
        type: 'Hero Trait',
        effect: 'Passive: Add 1 to rolls for your general\'s "Ritual of the Creeping Mist" ability.'
      },
      {
        id: 'id-sr-ht2',
        name: 'Delicious Morsels',
        type: 'Hero Trait',
        effect: 'Your Hero Phase: Heal (1) each friendly Cavalry unit within your general\'s combat range.'
      }
    ],
    artefacts: [
      {
        id: 'id-sr-art1',
        name: 'Steelshell Armour',
        type: 'Artefact of Power',
        effect: 'Passive: Ignore all modifiers to save rolls for your general (positive and negative).'
      },
      {
        id: 'id-sr-art2',
        name: 'Mind Flare',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase: Declare: Pick an enemy unit in combat with your general. Effect: Until the end of the phase, attacks made by that unit only score hits on unmodified hit rolls of 6.'
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
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Scryfish Shoal',
            type: 'Ranged',
            range: '10"',
            attacks: 8,
            toHit: '5+',
            toWound: '5+',
            rend: '0',
            damage: '1',
            ability: 'Shoot in Combat, Companion'
          },
          {
            name: 'Abyssal Touch',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Ritual of the Creeping Mist',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a visible friendly unit wholly within 12" of this unit to be the target, then roll a dice. Effect: On a 3+, until the start of your next turn, subtract 1 from wound rolls for attacks that target that unit.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'HERO', 'INFANTRY', 'SOULSCRYER']
      },
      {
        id: 'id-morrsarr-sr',
        name: 'Akhelian Morrsarr Guard',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '75x42mm',
        move: '14"',
        health: 12,
        save: '4+',
        control: 1,
        weapons: [
          {
            name: 'Voltspear',
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
            name: 'Fangmora’s Fangs and Lashing Tail',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Biovoltaic Blast',
            phase: 'Charge',
            type: 'Active',
            effect: 'Once Per Battle, Any Charge Phase: Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target, then roll a number of dice equal to the number of models in this unit. Effect: For each 4-5, inflict 1 mortal damage on the target. For each 6+, inflict D3 mortal damage on the target. Add 1 to each roll if there are more models in the target unit than this unit.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'CAVALRY', 'FLY', 'MORRSARR GUARD']
      },
      {
        id: 'id-allopex',
        name: 'Akhelian Allopex',
        role: 'Cavalry',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '12"',
        health: 8,
        save: '4+',
        control: 2,
        isReinforcement: true,
        reinforcementNote: 'Can be called again through reinforcements.',
        weapons: [
          {
            name: 'Razorshell Harpoon Launcher',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '3+',
            toWound: '2+',
            rend: '-1',
            damage: '3',
            ability: 'Anti-Monster (+1 Rend)'
          },
          {
            name: 'Barbed Hooks and Blades',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Allopex’s Ferocious Bite',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '2',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Bloodthirsty Predators',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Add 1 to the Attacks characteristic of this unit’s Allopex’s Ferocious Bite if it is within 6" of any damaged enemy units or if it is within 6" of any enemy units that have had any models slain in the same turn.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'CAVALRY', 'FLY', 'REINFORCEMENTS', 'ALLOPEX']
      },
      {
        id: 'id-thralls-1',
        name: 'Namarti Thralls (Unit 1)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be called again through reinforcements.',
        weapons: [
          {
            name: 'Lanmari',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Anti-Infantry (+1 Rend)'
          }
        ],
        abilities: [
          {
            name: 'Sweeping Blows',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Add 1 to the Damage characteristic of this unit’s Lanmari for attacks that target an enemy Monster.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'INFANTRY', 'REINFORCEMENTS', 'NAMARTI THRALLS']
      },
      {
        id: 'id-thralls-2',
        name: 'Namarti Thralls (Unit 2)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be called again through reinforcements.',
        weapons: [
          {
            name: 'Lanmari',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Anti-Infantry (+1 Rend)'
          }
        ],
        abilities: [
          {
            name: 'Sweeping Blows',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Add 1 to the Damage characteristic of this unit’s Lanmari for attacks that target an enemy Monster.'
          }
        ],
        keywords: ['ORDER', 'IDONETH DEEPKIN', 'INFANTRY', 'REINFORCEMENTS', 'NAMARTI THRALLS']
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
    flavorQuote: 'Don’t matter if you call yerself an emperor, a mage-lord or even a god: you take a Bazz-Grummund armour-shredding sabot round to the bonce and you’re goin’ down for a dirt nap. — Gunnery Sergeant Olbi ‘Squint’ Polgsson of the Grundcorps',
    battleTraits: [
      {
        name: 'Gunhauler Escort',
        description: 'Passive: Subtract 1 from hit rolls for attacks that target friendly Kharadron Overlords Infantry units while they are wholly within 6" of a friendly Grundstok Gunhauler.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Rapid Relocation',
        description: 'Once Per Battle (Army), Your Movement Phase: Declare: Pick a friendly unit with Fly that is not in combat to use this ability. Effect: Remove that unit from the battlefield and set it up again on the battlefield more than 6" from all enemy units. That unit cannot use Charge abilities for the rest of the turn.'
      },
      {
        name: 'Propeller Downdraught',
        description: 'Passive: Subtract 1 from charge rolls for enemy units while they are within 9" of any friendly Grundstok Gunhaulers.'
      }
    ],
    heroTraits: [
      {
        id: 'ko-tb-ht1',
        name: 'Prospector and Pioneer',
        type: 'Hero Trait',
        effect: 'Passive: Add 2 to your general’s control score.'
      },
      {
        id: 'ko-tb-ht2',
        name: 'Extraction Fail-Safes',
        type: 'Hero Trait',
        effect: 'Passive: Subtract 1 from the damage points inflicted on this unit when it uses a Retreat ability.'
      }
    ],
    artefacts: [
      {
        id: 'ko-tb-art1',
        name: 'Emergency Fuel Injection Pods',
        type: 'Artefact of Power',
        effect: 'Once Per Battle (Army), Any Combat Phase: Declare: Pick your general to use this ability if they are in combat. Effect: Your general has Strike-first for the rest of the turn.'
      },
      {
        id: 'ko-tb-art2',
        name: 'Celestium-Burst Bomblets',
        type: 'Artefact of Power',
        effect: 'Any Combat Phase: Declare: Pick your general to use this ability, then pick an enemy unit in combat with them to be the target. Effect: Roll a dice. On a 3+, ward rolls cannot be made for the target for the rest of the turn.'
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
        health: 8,
        save: '3+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Aethercannon',
            type: 'Ranged',
            range: '18"',
            attacks: 1,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '3'
          },
          {
            name: 'Dirigible Suit Weapon Battery',
            type: 'Ranged',
            range: '12"',
            attacks: 6,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Upgraded Aethermatic Saw',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Endrinmaster Extraordinaire',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a friendly unit with Fly wholly within 12" of this unit to be the target. Effect: Roll a D3. On a 2+, Heal (X) the target, where X is the roll.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'HERO', 'INFANTRY', 'FLY', 'ENDRINMASTER']
      },
      {
        id: 'ko-thunderers',
        name: 'Grundstok Thunderers',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '4"',
        health: 10,
        save: '3+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when destroyed',
        weapons: [
          {
            name: 'Aethershot Rifle',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Aetheric Fumigator or Decksweeper',
            type: 'Ranged',
            range: '10"',
            attacks: 5,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Grundstok Mortar or Aethercannon',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Gun Butt',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Bewilderblast Rounds',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Once Per Battle (Army), Any Shooting Phase: Declare: Pick an enemy unit that was allocated any damage points inflicted by this unit’s shooting attacks this phase to be the target. Effect: Subtract D6 from the target’s control score for the rest of the turn.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'INFANTRY', 'REINFORCEMENTS', 'GRUNDSTOK THUNDERERS']
      },
      {
        id: 'ko-gunhauler',
        name: 'Grundstok Gunhauler',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '105x70mm Oval',
        move: '14"',
        health: 10,
        save: '2+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Sky Ordnance',
            type: 'Ranged',
            range: '15"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-2',
            damage: '3'
          },
          {
            name: 'Boarding Weapons',
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
            name: 'Gunhauler Overwatch',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase: Declare: Pick an enemy unit that charged this turn and is in combat with this unit to be the target. Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'WAR MACHINE', 'FLY', 'GRUNDSTOK GUNHAULER']
      },
      {
        id: 'ko-endrinriggers',
        name: 'Endrinriggers',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '32mm',
        move: '12"',
        health: 6,
        save: '3+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when destroyed',
        weapons: [
          {
            name: 'Rapid Fire Rivet Gun',
            type: 'Ranged',
            range: '10"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Aethermatic Volley Gun',
            type: 'Ranged',
            range: '15"',
            attacks: '2D6',
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Crit (2 Hits)'
          },
          {
            name: 'Skyrigger Heavy Weapon',
            type: 'Ranged',
            range: '15"',
            attacks: 1,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Anti-Monster (+1 Rend)'
          },
          {
            name: 'Aethermatic Saw',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Anti-charge (+1 Rend)'
          },
          {
            name: 'Gun Butt',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Cloudweaving Skyfarers',
            phase: 'Movement',
            type: 'Active',
            effect: 'Enemy Movement Phase: Declare: Pick this unit if it is not in combat. Effect: Roll a dice. On a 3+, this unit can use the ‘Normal Move’ ability as if it were your Movement phase.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'INFANTRY', 'FLY', 'REINFORCEMENTS', 'ENDRINRIGGERS']
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
    flavorQuote: '‘Give me a single Arkanaut Frigate and I can bring down a city. Give me a dozen and I can conquer a nation.’ — Admiral Rodran Grumborg of Barak-Nar',
    battleTraits: [
      {
        name: 'Ply the Skies',
        description: 'Reaction: You declared a non-Charge Move ability for an Arkanaut Frigate. Used by: The Arkanaut Frigate using that Move ability. Effect: Pick a friendly Infantry unit that is wholly within the combat range of that Arkanaut Frigate and not in combat to be transported. Remove that Infantry unit from the battlefield. When that Arkanaut Frigate ends its move, set up that Infantry unit wholly within the combat range of that Arkanaut Frigate and not in combat. That Infantry unit cannot use Charge abilities in the same turn that it was transported.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Assault Boat',
        description: 'Once Per Battle, Your Movement Phase: Declare: Pick a friendly unit that was transported this turn to use this ability. Effect: That unit can still use Charge abilities later in the turn.'
      },
      {
        name: 'Disengage',
        description: 'Once Per Battle, Your Movement Phase: Declare: Pick a friendly Arkanaut Frigate to use this ability. Effect: If that Arkanaut Frigate uses a Retreat ability this phase, no mortal damage is inflicted on it and it can still use Shoot abilities later in the turn.'
      }
    ],
    heroTraits: [
      {
        id: 'ko-sh-ht1',
        name: 'There’s No Reward Without Risk',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Reaction: You declared a Charge ability for a unit wholly within 12" of your general. Effect: Re-roll the charge roll.'
      },
      {
        id: 'ko-sh-ht2',
        name: 'Masterwrought Armour',
        type: 'Hero Trait',
        effect: 'Passive: Your general has Ward (6+).'
      }
    ],
    artefacts: [
      {
        id: 'ko-sh-art1',
        name: 'Flask of Vintage Gorogna',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Hero Phase: Declare: Pick your general to use this ability. Effect: Heal (D6) your general.'
      },
      {
        id: 'ko-sh-art2',
        name: 'Leave No Duardin Behind',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Your Hero Phase: Declare: Pick a friendly Arkanaut Company unit wholly within 12" of your general to be the target. Effect: Roll a dice for each slain model from the target unit. For each 4+, return 1 slain model to the target unit.'
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
        isReinforcement: false,
        weapons: [
          {
            name: 'Masterwork Volley Pistol',
            type: 'Ranged',
            range: '10"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Skalfhammer',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '2+',
            rend: '-1',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Always Take What You Are Owed',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a friendly Arkanaut Company unit wholly within 12" of this unit to be the target. Effect: Roll a D6 and add the roll to the target’s control score until the start of your next turn.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'HERO', 'INFANTRY', 'ARKANAUT ADMIRAL']
      },
      {
        id: 'ko-frigate',
        name: 'Arkanaut Frigate',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120x92mm Oval',
        move: '12"',
        health: 15,
        save: '3+',
        control: 5,
        isReinforcement: false,
        weapons: [
          {
            name: 'Heavy Skyhook',
            type: 'Ranged',
            range: '24"',
            attacks: 2,
            toHit: '4+',
            toWound: '3+',
            rend: '-2',
            damage: 'D6'
          },
          {
            name: 'Aethershot Carbines',
            type: 'Ranged',
            range: '12"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Crew’s Boarding Weapons',
            type: 'Melee',
            range: '1"',
            attacks: 8,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Battle Damaged',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: While this unit has 10 or more damage points, the Attacks characteristic of its Heavy Skyhook is 1.'
          },
          {
            name: 'Bomb Racks',
            phase: 'Movement',
            type: 'Active',
            effect: 'Once Per Battle, Your Movement Phase: Declare: Pick an enemy unit that this unit passed across this phase to be the target. Effect: Roll a dice. On a 2+, inflict D3 mortal damage on the target.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'WAR MACHINE', 'FLY', 'ARKANAUT FRIGATE']
      },
      {
        id: 'ko-company-skypike',
        name: 'Arkanaut Company (incl. Skypike)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '4"',
        health: 5,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when destroyed',
        weapons: [
          {
            name: 'Privateer Pistol',
            type: 'Ranged',
            range: '10"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Arkanaut Cutter',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Skypike',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Glory-seekers',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: Add 1 to hit rolls for attacks made by this unit that target an enemy unit that is contesting an objective.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'INFANTRY', 'REINFORCEMENTS', 'ARKANAUT COMPANY']
      },
      {
        id: 'ko-company-skyhook',
        name: 'Arkanaut Company (incl. Light Skyhook & Volley Gun)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '4"',
        health: 5,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when destroyed',
        weapons: [
          {
            name: 'Privateer Pistol',
            type: 'Ranged',
            range: '10"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Aethermatic Volley Gun',
            type: 'Ranged',
            range: '15"',
            attacks: '2D6',
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Light Skyhook',
            type: 'Ranged',
            range: '15"',
            attacks: 1,
            toHit: '4+',
            toWound: '3+',
            rend: '-2',
            damage: 'D3'
          },
          {
            name: 'Arkanaut Cutter',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Gun Butt',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Glory-seekers',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: Add 1 to hit rolls for attacks made by this unit that target an enemy unit that is contesting an objective.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'INFANTRY', 'REINFORCEMENTS', 'ARKANAUT COMPANY']
      },
      {
        id: 'ko-skywardens',
        name: 'Skywardens',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '32mm',
        move: '12"',
        health: 6,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when destroyed',
        weapons: [
          {
            name: 'Vulcaniser Pistol',
            type: 'Ranged',
            range: '10"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Aethermatic Volley Gun',
            type: 'Ranged',
            range: '15"',
            attacks: '2D6',
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Skypike',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Mortal)'
          },
          {
            name: 'Gun Butt',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Timed Charges',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'End of Any Turn: Declare: Pick an enemy unit in combat with this unit to be the target. Effect: Roll a dice. On a 2+, inflict 1 mortal damage on the target and this unit can immediately use a Retreat ability without any mortal damage being inflicted on it.'
          }
        ],
        keywords: ['ORDER', 'KHARADRON OVERLORDS', 'INFANTRY', 'FLY', 'REINFORCEMENTS', 'SKYWARDENS']
      }
    ]
  },

  // =========================================================================
  // 6. LUMINETH REALM-LORDS - Glittering Phalanx
  // =========================================================================
  {
    id: 'lumineth-phalanx',
    name: 'Lumineth Realm-lords',
    subTitle: 'Glittering Phalanx',
    grandAlliance: 'ORDER',
    accentColor: 'from-cyan-500 to-indigo-700',
    flavorQuote: '‘We have already peered into the darkness of the soul. Our duty spurs no fear in us – only resolve.’ — Asa’nai, the Veiled Sage',
    battleTraits: [
      {
        name: 'Facets of War',
        description: 'Once Per Battle Round, Start of Battle Round: You must use this ability at the start of the battle round. Pick 1 Facet of War ability. That Facet of War ability can be used this battle round but the other two cannot.'
      },
      {
        name: 'Lightning Reactions',
        description: 'Passive: When players are alternating picking units to use a Fight ability, when it is your turn to pick a unit, you can pick 2 units instead of 1. Resolve the second Fight ability immediately after the first. (Keywords: Facet of War)'
      },
      {
        name: 'Power of Hysh',
        description: 'Once Per Turn (Army), Your Hero Phase: Declare: Pick a friendly unit. Effect: Roll a dice. On a 2+, until the start of your next turn, attacks made by that unit score critical hits on unmodified hit rolls of 5+. (Keywords: Facet of War)'
      },
      {
        name: 'Shining Company',
        description: 'Once Per Phase (Army), Reaction: Opponent declared an Attack ability. Used By: A friendly unit targeted by that Attack ability and that has not made a pile-in move this turn. Effect: Subtract 1 from hit rolls for the attacks that target that friendly unit. (Keywords: Facet of War)'
      }
    ],
    regimentAbilities: [
      {
        name: 'Arcane Prowess',
        description: 'Passive: Add 1 to casting rolls for your general.'
      },
      {
        name: 'Heightened Reflexes',
        description: 'Passive: Add 1 to save rolls for friendly units that use a Fight ability immediately after another friendly unit because of the ‘Lightning Reactions’ ability, until the end of the phase.'
      }
    ],
    heroTraits: [
      {
        id: 'lr-gp-ht1',
        name: 'Waystone',
        type: 'Hero Trait',
        effect: 'Your Movement Phase: Effect: Remove your general from the battlefield and set them up again anywhere on the battlefield more than 6" from all enemy units. (Keywords: Core)'
      },
      {
        id: 'lr-gp-ht2',
        name: 'Speed of Hysh',
        type: 'Hero Trait',
        effect: 'Your Hero Phase (Spell): Declare: Pick a visible friendly unit wholly within 18" of your general, then make a casting roll of 2D6. Effect: On a 5+, double the Move characteristic of that unit until the start of your next turn.'
      }
    ],
    artefacts: [
      {
        id: 'lr-gp-art1',
        name: 'Overwhelming Heat',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase (Spell): Declare: Pick a visible enemy unit within 24" of your general, then make a casting roll of 2D6. Effect: On a 7+, halve the Move characteristic of that unit until the start of your next turn and roll a dice. If the roll equals or exceeds that unit’s Save characteristic, inflict D3 mortal damage on it.'
      },
      {
        id: 'lr-gp-art2',
        name: 'Protection of Hysh',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase (Spell): Declare: Pick a visible friendly unit wholly within 12" of your general to be the target, then make a casting roll of 2D6. Effect: On a 7+, the target has Ward (5+) until the start of your next turn.'
      }
    ],
    units: [
      {
        id: 'lr-gp-cathallar',
        name: 'Scinari Cathallar',
        role: 'Hero',
        modelCount: 1,
        baseSize: '32mm',
        move: '6"',
        health: 5,
        save: '6+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Despairing Touch',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Darkness of the Soul',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick an enemy unit within 12" of this unit to be the target, then roll a dice. Effect: On a 3+, subtract D6 from the control score of the target unit this turn.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'HERO', 'WIZARD', 'INFANTRY', 'SCINARI CATHALLAR']
      },
      {
        id: 'lr-gp-sentinels-1',
        name: 'Vanari Auralan Sentinels (Alpha)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '6"',
        health: 1,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when destroyed (2x 5-model units in Spearhead)',
        weapons: [
          {
            name: 'Auralan Bow',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          },
          {
            name: 'Vanari Dagger',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '3+',
            toWound: '4+',
            rend: '-',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Lofted Shots',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Your Shooting Phase: Until the end of the phase, add 6" to the Range characteristic of this unit’s Auralan Bows but subtract 1 from hit rolls for this unit’s shooting attacks.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'INFANTRY', 'REINFORCEMENTS', 'VANARI AURALAN SENTINELS']
      },
      {
        id: 'lr-gp-sentinels-2',
        name: 'Vanari Auralan Sentinels (Beta)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '6"',
        health: 1,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when destroyed (2x 5-model units in Spearhead)',
        weapons: [
          {
            name: 'Auralan Bow',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Auto-wound)'
          },
          {
            name: 'Vanari Dagger',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '3+',
            toWound: '4+',
            rend: '-',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Lofted Shots',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Your Shooting Phase: Until the end of the phase, add 6" to the Range characteristic of this unit’s Auralan Bows but subtract 1 from hit rolls for this unit’s shooting attacks.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'INFANTRY', 'REINFORCEMENTS', 'VANARI AURALAN SENTINELS']
      },
      {
        id: 'lr-gp-wardens',
        name: 'Vanari Auralan Wardens',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 1,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when destroyed',
        weapons: [
          {
            name: 'Warden’s Pike',
            type: 'Melee',
            range: '3"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-',
            damage: '1',
            ability: 'Crit (Mortal), Anti-charge (+1 Rend)'
          }
        ],
        abilities: [
          {
            name: 'Moonfire Flask',
            phase: 'Combat',
            type: 'Reaction',
            effect: 'Once Per Battle, Any Combat Phase: Declare: Pick an enemy unit in combat with this unit and that charged this turn to be the target, then roll a dice. Effect: On a 2+, inflict D3 mortal damage on the target.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'INFANTRY', 'REINFORCEMENTS', 'VANARI AURALAN WARDENS']
      },
      {
        id: 'lr-gp-bladelords',
        name: 'Vanari Bladelords',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '6"',
        health: 2,
        save: '4+',
        control: 1,
        isReinforcement: false,
        weapons: [
          {
            name: 'Sunmetal Greatblade: Flurry of Blows',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Mortal), Anti-Infantry (+1 Rend)'
          },
          {
            name: 'Sunmetal Greatblade: Perfect Strike',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: 'Special',
            toWound: '-',
            rend: '-',
            damage: '1 Mortal',
            ability: 'Do not use attack sequence; roll a dice, on 2+ inflicts 1 mortal damage'
          }
        ],
        abilities: [
          {
            name: 'Swordmasters',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: Each time this unit uses a Fight ability, you must pick either the Perfect Strike or Flurry of Blows weapon characteristics for all the attacks it makes with its Sunmetal Greatblade. In addition: Do not use the attack sequence for an attack made with Perfect Strike. Instead, roll a dice. On a 2+, inflict 1 mortal damage on the target unit.'
          },
          {
            name: 'Guardians',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: While your general is wholly within this unit’s combat range, both this unit and your general have Ward (5+).'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'INFANTRY', 'VANARI BLADELORDS']
      }
    ]
  },

  // =========================================================================
  // 6b. LUMINETH REALM-LORDS - Hurakan Vanguard
  // =========================================================================
  {
    id: 'lumineth-hurakan',
    name: 'Lumineth Realm-lords',
    subTitle: 'Hurakan Vanguard',
    grandAlliance: 'ORDER',
    accentColor: 'from-emerald-400 to-sky-600',
    flavorQuote: '‘Fly! On the tumult we ride! Unleash the arrows of wrath and enact the will of the elements!’ — Aethalenil of the Hurakan temple',
    battleTraits: [
      {
        name: 'Storm Brewing',
        description: 'Deployment Phase: Declare: Pick a battlefield edge to be the target. Effect: That battlefield edge is leeward. For the rest of the battle, each time a friendly Ride the Hurricane ability is used, after that ability has been resolved, change the leeward battlefield edge to the next edge clockwise.'
      },
      {
        name: 'Pulled by the Winds',
        description: 'Once Per Turn (Army), Any Movement Phase: Declare: Pick a friendly unit that is not in combat to be the target. Effect: The target can move D6" but must end that move closer to the leeward battlefield edge. It can pass through the combat ranges of enemy units but cannot end that move in combat. (Keywords: Ride the Hurricane)'
      },
      {
        name: 'Gale Force',
        description: 'Once Per Turn (Army), Reaction: You declared an Attack ability. Used By: The unit using that Attack ability. Effect: Add 1 to hit rolls for attacks made as part of that Attack ability if the target of that ability is closer to the leeward battlefield edge than the unit using this ability. (Keywords: Ride the Hurricane)'
      }
    ],
    regimentAbilities: [
      {
        name: 'Lifted Debris',
        description: 'Your Hero Phase: Declare: Pick an enemy unit that is closer to the leeward battlefield edge than the large terrain feature within friendly territory to be the target. Effect: Roll a number of dice equal to the current battle round number. For each 3+, inflict 1 mortal damage on the target. (Keywords: Ride the Hurricane)'
      },
      {
        name: 'Roaring Headwind',
        description: 'Once Per Battle (Army), Enemy Hero Phase: Declare: Pick an enemy unit to be the target. Effect: For the rest of the turn, each time the target uses a Move ability, it must end that move closer to the leeward battlefield edge.'
      }
    ],
    heroTraits: [
      {
        id: 'lr-hv-ht1',
        name: 'Wind Whisperer',
        type: 'Hero Trait',
        effect: 'Once Per Battle (Army), Any Hero Phase: Declare: Pick a battlefield edge to be the target. Effect: Change the leeward battlefield edge to the target battlefield edge.'
      },
      {
        id: 'lr-hv-ht2',
        name: 'Temple Guardians',
        type: 'Hero Trait',
        effect: 'Passive: While any friendly Infantry units are within your general’s combat range, both your general and those Infantry units have Ward (5+).'
      }
    ],
    artefacts: [
      {
        id: 'lr-hv-art1',
        name: 'Scattered to the Winds',
        type: 'Artefact of Power',
        effect: 'Passive: Subtract 1 from the control scores of enemy units within 6" of your general for each friendly Ride the Hurricane ability used this battle round.'
      },
      {
        id: 'lr-hv-art2',
        name: 'Curved Shots',
        type: 'Artefact of Power',
        effect: 'Passive: You can measure the range and visibility of your general’s shooting attacks from any point on the leeward battlefield edge.'
      }
    ],
    units: [
      {
        id: 'lr-hv-windmage',
        name: 'Hurakan Windmage',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60x35mm Oval',
        move: '12"',
        health: 5,
        save: '5+',
        control: 2,
        isReinforcement: false,
        weapons: [
          {
            name: 'Windblast Vortex',
            type: 'Ranged',
            range: '12"',
            attacks: 1,
            toHit: '2+',
            toWound: '3+',
            rend: '-2',
            damage: 'D3'
          },
          {
            name: 'Aspiragillum',
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
            name: 'Guide the Gusts',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a visible friendly unit wholly within 12" of this unit to be the target, then make a casting roll of 2D6. Effect: On a 6+, for the rest of the turn: The target can use Retreat abilities and still use Shoot and/or Charge abilities later in the turn. No mortal damage is inflicted on the target by Retreat abilities.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'HERO', 'WIZARD', 'INFANTRY', 'FLY', 'HURAKAN WINDMAGE']
      },
      {
        id: 'lr-hv-spirit-wind',
        name: 'Hurakan Spirit of the Wind',
        role: 'Monster',
        modelCount: 1,
        baseSize: '60mm',
        move: '18"',
        health: 8,
        save: '4+',
        ward: '5+',
        control: 5,
        isReinforcement: false,
        weapons: [
          {
            name: 'Bow of the Wind’s Vengeance',
            type: 'Ranged',
            range: '15"',
            attacks: 4,
            toHit: '2+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          },
          {
            name: 'Swirling Shards',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '2+',
            toWound: '4+',
            rend: '-',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Eye of the Storm',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: Subtract 1 from hit rolls for attacks that target friendly units while they are wholly within 6" of this unit.'
          },
          {
            name: 'Hurricane Winds',
            phase: 'Shooting',
            type: 'Reaction',
            effect: 'Any Shooting Phase: Declare: Pick an enemy unit that had any damage points allocated to it this turn by this unit’s shooting attacks to be the target. Effect: Roll a dice. On a 3+, the target has Strike-last for the rest of the turn.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'MONSTER', 'FLY', 'WARD (5+)', 'HURAKAN SPIRIT OF THE WIND']
      },
      {
        id: 'lr-hv-windchargers',
        name: 'Hurakan Windchargers',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm Oval',
        move: '14"',
        health: 3,
        save: '4+',
        control: 1,
        isReinforcement: false,
        weapons: [
          {
            name: 'Windcharger Bow',
            type: 'Ranged',
            range: '12"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Windcharger Blade',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '4+',
            rend: '-',
            damage: '1'
          },
          {
            name: 'Treerunner’s Claws',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '5+',
            toWound: '3+',
            rend: '-',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Leap into the Storm',
            phase: 'Movement',
            type: 'Active',
            effect: 'End of Your Turn: Effect: If this unit is not in combat, remove it from the battlefield and set it up again wholly within 3" of the leeward battlefield edge and more than 6" from all enemy units. (Keywords: Ride the Hurricane)'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'CAVALRY', 'HURAKAN WINDCHARGERS']
      },
      {
        id: 'lr-hv-wardens',
        name: 'Vanari Auralan Wardens',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '6"',
        health: 1,
        save: '4+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Can be returned via Reinforcements when destroyed',
        weapons: [
          {
            name: 'Warden Pike and Blade',
            type: 'Melee',
            range: '3"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-',
            damage: '1',
            ability: 'Anti-charge (+1 Rend), Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Wall of Blades',
            phase: 'Combat',
            type: 'Reaction',
            effect: 'Any Combat Phase: Effect: If this unit did not charge this turn and is in combat with an enemy unit that charged this turn, roll a dice. Add 1 to the roll if that enemy unit is Cavalry. On a 3+, this unit has Strike-first for the rest of the turn.'
          }
        ],
        keywords: ['ORDER', 'LUMINETH REALM-LORDS', 'INFANTRY', 'REINFORCEMENTS', 'VANARI AURALAN WARDENS']
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
    accentColor: 'from-cyan-600 to-teal-500',
    flavorQuote: '‘Warmbloods come. Warmbloods die.’ — Oldblood Groq',
    battleTraits: [
      {
        name: 'Beast of the Dark Jungles',
        description: 'Any Combat Phase: Declare: Pick your general if they are in combat.\nEffect: Pick 1 of the following effects:\n• Gargantuan Jaws: Pick an enemy unit in combat with your general and roll a dice. If the roll exceeds that unit’s Health characteristic, 1 model in that unit is slain.\n• Roar: Pick an enemy unit in combat with your general. Subtract D6 from its control score for the rest of the turn.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Predatory Fighters',
        description: 'Once Per Phase, End of Any Turn: Effect: Roll a dice for each enemy unit that is in combat with any friendly units. On a 3+, inflict 1 mortal damage on that unit.'
      },
      {
        name: 'Temple-City Guardians',
        description: 'Passive: Effect: Friendly units have Ward (6+) while they are wholly within friendly territory.'
      }
    ],
    heroTraits: [
      {
        id: 'ser-sw-ht1',
        name: 'Sotek’s Gaze',
        type: 'Hero Trait',
        effect: 'End of Any Turn: Declare: Pick your general. Effect: Roll a dice. Add the roll to your general’s control score for the rest of the turn.'
      },
      {
        id: 'ser-sw-ht2',
        name: 'Ancient Strategist',
        type: 'Hero Trait',
        effect: 'Once Per Battle, Enemy Movement Phase: Declare: Pick a friendly unit wholly within 12" of your general that is not in combat (you cannot pick your general). Effect: That unit can immediately use the ‘Normal Move’ ability as if it were your movement phase.'
      }
    ],
    artefacts: [
      {
        id: 'ser-sw-art1',
        name: 'Blade of Realities',
        type: 'Artefact of Power',
        effect: 'Passive: Add 1 to the Rend characteristic of the bearer’s Relic Celestite Weapon.'
      },
      {
        id: 'ser-sw-art2',
        name: 'The Wrath of Chotec',
        type: 'Artefact of Power',
        effect: 'Passive: The Attacks characteristic of the bearer’s Sunbolt Gauntlet is 6 instead of D6.'
      }
    ],
    units: [
      {
        id: 'ser-carnosaur',
        name: 'Saurus Oldblood on Carnosaur',
        role: 'Hero',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '10"',
        health: 14,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Sunbolt Gauntlet',
            type: 'Ranged',
            range: '12"',
            attacks: 'D6',
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Relic Celestite Weapon',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Carnosaur’s Massive Jaws',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Ancient Warlord',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a friendly unit wholly within 12" of this unit (you cannot pick this unit). Effect: Add 1 to charge rolls for that unit until the start of your next turn.'
          },
          {
            name: 'Battle Damaged',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: While this unit has 10 or more damage points allocated to it, the Attacks characteristic of its Carnosaur’s Massive Jaws is 1.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'HERO', 'MONSTER', 'SAURUS OLDBLOOD ON CARNOSAUR']
      },
      {
        id: 'ser-warriors-alpha',
        name: 'Saurus Warriors (Alpha)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '5"',
        health: 2,
        save: '4+',
        control: 1,
        weapons: [
          {
            name: 'Celestite Club',
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
            name: 'Ordered Cohorts',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: Add 1 to save rolls for this unit while it is contesting an objective you control.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'INFANTRY', 'SAURUS', 'SAURUS WARRIORS']
      },
      {
        id: 'ser-warriors-beta',
        name: 'Saurus Warriors (Beta)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '5"',
        health: 2,
        save: '4+',
        control: 1,
        weapons: [
          {
            name: 'Celestite Club',
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
            name: 'Ordered Cohorts',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: Add 1 to save rolls for this unit while it is contesting an objective you control.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'INFANTRY', 'SAURUS', 'SAURUS WARRIORS']
      },
      {
        id: 'ser-kroxigor',
        name: 'Kroxigor',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '50mm',
        move: '5"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Drakebite Maul',
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
            name: 'Brutal Blows',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: This unit’s melee weapons have Crit (2 Hits) while the target unit has 5 or more models.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'INFANTRY', 'KROXIGOR']
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
    accentColor: 'from-amber-600 to-emerald-600',
    flavorQuote: '‘Warmbloods trespass. Warmbloods will die.’ — Kro-Jax, the Aegis',
    battleTraits: [
      {
        name: 'Hidden Hunters',
        description: 'Deployment Phase: Declare: Pick both Hunters of Huanchi units and the Spawn of Chotec unit.\nEffect: These units are not set up during the deployment phase. From the third battle round onwards, they can use the ‘Chameleon Ambush’ ability.'
      },
      {
        name: 'Chameleon Ambush',
        description: 'Your Movement Phase: Declare: Pick this unit if it has not been set up on the battlefield.\nEffect: Set up this unit anywhere on the battlefield more than 6" from all enemy units.'
      },
      {
        name: 'Vengeance of Azyr',
        description: 'End of Any Turn: Declare: Pick each enemy unit in combat with a friendly Saurus unit.\nEffect: Roll a dice for each unit you picked. On a 4+, inflict 1 mortal damage on that unit.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Scaled Aegis',
        description: 'Once Per Turn (Army), Your Hero Phase: Declare: Pick a friendly Saurus unit.\nEffect: Roll a dice. On a 3+, that unit has Ward (6+) until the start of your next turn.'
      },
      {
        name: 'Followers of Huanchi',
        description: 'Once Per Turn (Army), Your Shooting Phase: Declare: Pick a friendly Skink unit.\nEffect: Roll a dice. On a 3+, for the rest of the turn, ranged weapons used by that unit (including Companion weapons) have Crit (Auto-wound).'
      }
    ],
    heroTraits: [
      {
        id: 'ser-sb-ht1',
        name: 'Instinctive Commander',
        type: 'Hero Trait',
        effect: 'Your Hero Phase: Declare: Pick a visible friendly unit wholly within 12" of your general that is not in combat.\nEffect: Roll a dice. On a 3+, that unit can immediately use the ‘Normal Move’ ability as if it were your movement phase.'
      },
      {
        id: 'ser-sb-ht2',
        name: 'Savage Mauling',
        type: 'Hero Trait',
        effect: 'Any Combat Phase: Declare: Pick an enemy unit in combat with your general.\nEffect: Ward rolls cannot be made for that enemy unit for the rest of the turn.'
      }
    ],
    artefacts: [
      {
        id: 'ser-sb-art1',
        name: 'Venomite Swarm',
        type: 'Artefact of Power',
        effect: 'Any Combat Phase: Declare: Pick an enemy unit in combat with the bearer.\nEffect: If the Venomites token is on the battlefield, roll a D3. On a 1, remove the Venomites token from the battlefield. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.'
      },
      {
        id: 'ser-sb-art2',
        name: 'Blessed by the Old Ones',
        type: 'Artefact of Power',
        effect: 'End of Any Turn: Declare: If the bearer was destroyed this turn, roll a dice.\nEffect: On a 2+, set up a replacement unit with 1 Sunblood model anywhere on the battlefield more than 6" from all enemy units.'
      }
    ],
    units: [
      {
        id: 'ser-sunblood-pack',
        name: 'Sunblood Pack',
        role: 'Hero',
        modelCount: 3,
        baseSize: '32mm',
        move: '5"',
        health: 3,
        save: '4+',
        control: 1,
        weapons: [
          {
            name: 'Celestite Weapons',
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
            name: 'Scaled Protectors',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: While this unit includes a Sunblood, ignore the first damage point that would be allocated to this unit in each phase. In addition, while this unit includes a Sunblood, add 1 to its control score.'
          },
          {
            name: 'Savage Bellow',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a visible friendly unit wholly within 12" of this unit.\nEffect: Roll a dice. On a 3+, for the rest of the turn, weapons used by that unit (including Companion weapons) have Crit (2 Hits).'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'HERO', 'INFANTRY', 'SAURUS', 'SUNBLOOD PACK']
      },
      {
        id: 'ser-spawn-chotec',
        name: 'Spawn of Chotec',
        role: 'Monster',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '5"',
        health: 8,
        save: '5+',
        control: 1,
        weapons: [
          {
            name: 'Glob of Flame Acid',
            type: 'Ranged',
            range: '16"',
            attacks: 1,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: 'D3+3',
            ability: 'Companion'
          },
          {
            name: 'Fiery Maw',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '3',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Sun Acolytes',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: This unit is accompanied by 3 Sun Acolyte tokens. Add 1 to this unit’s control score for each Sun Acolyte token it has. If it has no Sun Acolyte tokens, its control score cannot be more than 1. Each time an unmodified save roll of 1 is made for an attack that targets this unit, remove 1 Sun Acolyte token from the unit after the Attack ability has been resolved.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'BEAST', 'SKINK', 'SPAWN OF CHOTEC']
      },
      {
        id: 'ser-sb-warriors-alpha',
        name: 'Saurus Warriors (Alpha)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '5"',
        health: 2,
        save: '4+',
        control: 1,
        weapons: [
          {
            name: 'Celestite Club',
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
            name: 'Ordered Cohorts',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: Add 1 to save rolls for this unit while it is contesting an objective you control.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'INFANTRY', 'SAURUS', 'SAURUS WARRIORS']
      },
      {
        id: 'ser-sb-warriors-beta',
        name: 'Saurus Warriors (Beta)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '5"',
        health: 2,
        save: '4+',
        control: 1,
        weapons: [
          {
            name: 'Celestite Club',
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
            name: 'Ordered Cohorts',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: Add 1 to save rolls for this unit while it is contesting an objective you control.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'INFANTRY', 'SAURUS', 'SAURUS WARRIORS']
      },
      {
        id: 'ser-huanchi-alpha',
        name: 'Hunters of Huanchi (Alpha)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '8"',
        health: 1,
        save: '6+',
        control: 1,
        weapons: [
          {
            name: 'Dartpipe',
            type: 'Ranged',
            range: '10"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-',
            damage: '1'
          },
          {
            name: 'Feeble Claws',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '5+',
            rend: '-',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Star-Venom',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Any Shooting Phase: Declare: Pick an enemy unit that had damage points allocated to it this turn by attacks made with this unit’s Dartpipes.\nEffect: Roll a dice. On a 2+, subtract 1 from wound rolls for combat attacks made by that enemy unit for the rest of the turn.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'INFANTRY', 'SKINK', 'HUNTERS OF HUANCHI']
      },
      {
        id: 'ser-huanchi-beta',
        name: 'Hunters of Huanchi (Beta)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '25mm',
        move: '8"',
        health: 1,
        save: '6+',
        control: 1,
        weapons: [
          {
            name: 'Dartpipe',
            type: 'Ranged',
            range: '10"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-',
            damage: '1'
          },
          {
            name: 'Feeble Claws',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '4+',
            toWound: '5+',
            rend: '-',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Star-Venom',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Any Shooting Phase: Declare: Pick an enemy unit that had damage points allocated to it this turn by attacks made with this unit’s Dartpipes.\nEffect: Roll a dice. On a 2+, subtract 1 from wound rolls for combat attacks made by that enemy unit for the rest of the turn.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'INFANTRY', 'SKINK', 'HUNTERS OF HUANCHI']
      },
      {
        id: 'ser-terrawings',
        name: 'Terrawings',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '32mm',
        move: '12"',
        health: 2,
        save: '5+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcements: Arrives in Round 3 or later, or when summoned.',
        weapons: [
          {
            name: 'Snapping Beaks',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '4+',
            toWound: '4+',
            rend: '-',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Nerve-Shredding Screeches',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase: Declare: Pick an enemy unit in combat with this unit.\nEffect: Roll a dice. On a 4+, subtract 1 from hit rolls for combat attacks made by that enemy unit for the rest of the turn.'
          }
        ],
        keywords: ['ORDER', 'SERAPHON', 'BEAST', 'FLY', 'REINFORCEMENTS', 'TERRAWINGS']
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
    flavorQuote: 'Only when the hordes of Chaos threaten to choke all life from the realms does the God-King call upon the Vigilant Brotherhoods.',
    battleTraits: [
      {
        name: 'Shield of Azyr',
        description: 'Once Per Turn, Your Hero Phase: Declare: Pick a friendly unit.\nEffect: Until the start of your next turn, that unit has Ward (5+).'
      },
      {
        name: 'Storm Charge',
        description: 'Once Per Battle, Your Charge Phase: Declare: Pick a friendly unit that is not in combat.\nEffect: That unit can use Charge abilities this turn even if it used a Run ability in the same turn.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Strike Where Needed',
        description: 'Once Per Battle, Reaction: You declared a Retreat ability:\nUsed By: The unit using that Retreat ability.\nEffect: No mortal damage is inflicted on that unit by that Retreat ability. In addition, that unit can still use Charge abilities this turn even though it used a Retreat ability.'
      },
      {
        name: 'Blaze of Glory',
        description: 'Once Per Battle, Any Combat Phase: Declare: Pick a friendly unit that is in combat.\nEffect: Until the end of the phase, each time a model in that unit is slain, make a vengeance roll of D6. On a 4+, inflict 1 mortal damage on an enemy unit in combat with that unit.'
      }
    ],
    heroTraits: [
      {
        id: 'st-ht-1',
        name: 'Hallowed Scrolls',
        type: 'Hero Trait',
        effect: 'Passive: Your general has Ward (5+).'
      },
      {
        id: 'st-ht-2',
        name: 'Morrda’s Talon',
        type: 'Hero Trait',
        effect: 'Passive: Your general’s Hallowed Greataxe has Crit (Mortal).'
      }
    ],
    artefacts: [
      {
        id: 'st-art-1',
        name: 'Quicksilver Draught',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase: Effect: Your general has Strike-first this phase.'
      },
      {
        id: 'st-art-2',
        name: 'Null Pendant',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, End of Any Turn: Declare: Roll a dice for each enemy unit contesting the same objective as your general.\nEffect: On a 2+, subtract the roll from the control score of that enemy unit this turn.'
      }
    ],
    units: [
      {
        id: 'st-lord-vigilant',
        name: 'Lord-Vigilant on Gryph-stalker',
        role: 'Hero',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '12"',
        health: 8,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Hallowed Greataxe',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '2'
          },
          {
            name: 'Gryph-stalker’s Beak and Talons',
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
            name: 'Deliver Judgement',
            phase: 'Combat',
            type: 'Active',
            effect: 'Once Per Battle, Any Combat Phase: Declare: Pick a friendly non-Hero unit wholly within 12" of this unit to be the target.\nEffect: The target can use 2 Fight abilities this phase. After the first is used, however, the target has Strike-last for the rest of the phase.'
          },
          {
            name: 'Plan the Attack',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick an objective you do not control.\nEffect: For the rest of the turn, add 1 to hit rolls for combat attacks made by friendly units that target enemy units contesting that objective.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'HERO', 'CAVALRY', 'LORD-VIGILANT']
      },
      {
        id: 'st-lord-veritant',
        name: 'Lord-Veritant',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '5"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Staff of Abjuration',
            type: 'Melee',
            range: '1"',
            attacks: 1,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '3'
          },
          {
            name: 'Judgement Blade',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3',
            ability: 'Anti-Wizard (+1 Rend), Anti-Priest (+1 Rend)'
          }
        ],
        abilities: [
          {
            name: 'Sense Unholy Sorcery',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: This unit’s Gryph-crow is a token. This unit has Ward (5+) while its Gryph-crow is on the battlefield. If you make an unmodified ward roll of 1 for this unit, remove its Gryph-crow from the battlefield.'
          },
          {
            name: 'Cleansing Fires',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a visible enemy unit within 12" of this unit to be the target, then make a chanting roll of D6.\nEffect: On a 3+, roll a dice for each model in the target unit. For each 5+, inflict 1 mortal damage on the target unit.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'HERO', 'PRIEST', 'INFANTRY', 'LORD-VERITANT']
      },
      {
        id: 'st-prosecutors',
        name: 'Prosecutors',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '12"',
        health: 2,
        save: '3+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcements: Arrives in Round 3 or later, or when summoned.',
        weapons: [
          {
            name: 'Stormcall Javelin',
            type: 'Ranged',
            range: '10"',
            attacks: 1,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          },
          {
            name: 'Stormcall Javelin',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Skirmishers',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: This unit has a coherency range of 2".'
          },
          {
            name: 'Heralds of Righteousness',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: When you make a charge roll for this unit, roll 1 additional dice.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'INFANTRY', 'FLY', 'REINFORCEMENTS', 'PROSECUTORS']
      },
      {
        id: 'st-liberators',
        name: 'Liberators',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '40mm',
        move: '5"',
        health: 2,
        save: '3+',
        control: 1,
        isReinforcement: true,
        reinforcementNote: 'Reinforcements: Arrives in Round 3 or later, or when summoned.',
        weapons: [
          {
            name: 'Warhammer',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Mortal)'
          },
          {
            name: 'Grandhammer',
            type: 'Melee',
            range: '1"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Stalwart Defenders',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive: Add 3 to this unit’s control score while it contests an objective wholly within friendly territory. (Note: unit includes 4 models armed with Warhammer and 1 armed with Grandhammer).'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'INFANTRY', 'REINFORCEMENTS', 'LIBERATORS']
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
    flavorQuote: '‘Let the vengeance of the God-King blast these fools from our sight. Attack!’ — Yndrasta, the Celestial Spear',
    battleTraits: [
      {
        name: 'Scions of the Storm',
        description: 'Upon blessed bolts of lightning do the Stormcast Eternals ride to war, the furious rumble of thunder heralding their arrival.\n\nYndrasta and your Annihilators unit are not set up during the deployment phase. Instead, from the third battle round onwards, they can use the following ability:\n\n• Lightning-strike Arrival (Your Movement Phase - Core): Set up this unit anywhere on the battlefield more than 6" from all enemy units.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Drive Them Back',
        description: 'End of Any Turn: Declare: Pick any number of friendly units that are both contesting an objective and in combat.\nEffect: Each of those units can make a pile-in move (Core Rules, 15.3). For each unit that did so, pick an enemy unit within 1" of it and roll a dice. On a 4+, inflict 1 mortal damage on that enemy unit.'
      },
      {
        name: 'Defend to the Last',
        description: 'Passive: Effect: Friendly units have Ward (6+) while they are contesting an objective you control.'
      }
    ],
    heroTraits: [
      {
        id: 'ynd-ht-1',
        name: 'Strike with the Tempest’s Rage',
        type: 'Hero Trait',
        effect: 'Passive: Your general has Strike-first if they charged in the same turn.'
      },
      {
        id: 'ynd-ht-2',
        name: 'The Prime Huntress',
        type: 'Hero Trait',
        effect: 'Passive: The Damage characteristic of Thengavar (Yndrasta’s spear) is 2D6 for attacks that target a Monster.'
      }
    ],
    artefacts: [
      {
        id: 'ynd-art-1',
        name: 'Dazzling Radiance',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Your Movement Phase: Declare: Pick your general to use this ability if they were set up this phase.\nEffect: You can return 1 slain model to each friendly unit wholly within 12" of your general.'
      },
      {
        id: 'ynd-art-2',
        name: 'Hawk of the Celestial Skies',
        type: 'Artefact of Power',
        effect: 'Once Per Battle, Any Combat Phase: Effect: Until the end of the phase, add 1 to hit rolls for attacks made by friendly units while they are wholly within 12" of your general.'
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
        ward: '6+',
        control: 2,
        weapons: [
          {
            name: 'Thengavar',
            type: 'Ranged',
            range: '12"',
            attacks: 1,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '4',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Blade of the High Heavens',
            type: 'Melee',
            range: '1"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Champion of Sigmar',
            phase: 'Combat',
            type: 'Active',
            effect: 'Once Per Battle, Any Combat Phase: Effect: This unit has Ward (5+) this phase.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'HERO', 'INFANTRY', 'FLY', 'WARD (6+)', 'YNDRASTA']
      },
      {
        id: 'ynd-vexillor',
        name: 'Knight-Vexillor',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '5"',
        health: 6,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Sigmarite Warblade',
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
            name: 'Banner of the Reforged',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase: Declare: Pick a friendly unit wholly within 12" of this unit to be the target.\nEffect: Heal (D3) the target. In addition, add 3 to that unit’s control score until the start of your next turn.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'HERO', 'INFANTRY', 'KNIGHT-VEXILLOR']
      },
      {
        id: 'ynd-annihilators',
        name: 'Annihilators',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '40mm',
        move: '4"',
        health: 3,
        save: '2+',
        control: 1,
        weapons: [
          {
            name: 'Meteoric Hammer',
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
            name: 'Force of a Falling Star',
            phase: 'Charge',
            type: 'Active',
            effect: 'Any Charge Phase: Declare: If this unit charged this phase and the unmodified charge roll was 8+, pick an enemy unit within 1" of it to be the target.\nEffect: The target has Strike-last this turn.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'INFANTRY', 'ANNIHILATORS']
      },
      {
        id: 'ynd-vanquishers-alpha',
        name: 'Vanquishers (Alpha)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '40mm',
        move: '5"',
        health: 2,
        save: '3+',
        control: 1,
        weapons: [
          {
            name: 'Celestial Greatsword',
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
            name: 'Lightning Strikes',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: Add 1 to the Damage characteristic of this unit’s Celestial Greatswords for attacks that target an enemy unit that has 5 or more models.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'INFANTRY', 'VANQUISHERS']
      },
      {
        id: 'ynd-vanquishers-beta',
        name: 'Vanquishers (Beta)',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '40mm',
        move: '5"',
        health: 2,
        save: '3+',
        control: 1,
        weapons: [
          {
            name: 'Celestial Greatsword',
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
            name: 'Lightning Strikes',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive: Add 1 to the Damage characteristic of this unit’s Celestial Greatswords for attacks that target an enemy unit that has 5 or more models.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'INFANTRY', 'VANQUISHERS']
      },
      {
        id: 'ynd-chariot',
        name: 'Stormstrike Chariot',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '10"',
        health: 10,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Great Stormbow',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Stormstrike Axe',
            type: 'Melee',
            range: '1"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Gryph-chargers’ Beaks and Claws',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1',
            ability: 'Companion'
          }
        ],
        abilities: [
          {
            name: 'Azyr Unleashed',
            phase: 'Charge',
            type: 'Active',
            effect: 'Any Charge Phase: Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target and roll a dice.\nEffect: On a 2+, inflict D3 mortal damage on the target.'
          }
        ],
        keywords: ['ORDER', 'STORMCAST ETERNALS', 'WAR MACHINE', 'STORMSTRIKE CHARIOT']
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
    flavorQuote: '‘Our enemies’ corpses shall nourish the lands that they sought to destroy.’ — Branchwych Saoirsa',
    battleTraits: [
      {
        name: 'Ley Lines',
        description: 'Once Per Turn, End of Any Turn.\nEffect: Heal (1) each friendly unit that is within 3" of any terrain features.'
      },
      {
        name: 'Strike and Fade',
        description: 'Once Per Turn, End of Any Turn.\nDeclare: Pick a friendly unit that used a Fight ability this turn and is within 3" of any terrain features, then roll a dice.\nEffect: On a 2+, remove that unit from the battlefield and set it up again so that each model in the unit is within 3" of any terrain features and more than 6" from all enemy units.'
      }
    ],
    regimentAbilities: [
      {
        name: 'Vengeful Spirits of the Land',
        description: 'Once Per Turn, End of Any Turn.\nDeclare: Pick an enemy unit that is contesting an objective and roll a dice.\nEffect: On a 4+, inflict D3 mortal damage on that enemy unit.'
      },
      {
        name: 'Walkers of the Hidden Paths',
        description: 'Once Per Turn, Your Movement Phase.\nDeclare: Pick a friendly unit that is within 3" of any terrain features and not in combat.\nEffect: Remove that unit from the battlefield and set it up again more than 6" from all enemy units. That unit cannot use Move abilities for the rest of the phase.'
      }
    ],
    heroTraits: [
      {
        id: 'syl-bb-ht1',
        name: 'Gnarled Warrior',
        type: 'Hero Trait',
        effect: 'Passive.\nEffect: Ignore negative modifiers to save rolls for your general.'
      },
      {
        id: 'syl-bb-ht2',
        name: 'Treesong',
        type: 'Hero Trait',
        effect: 'Your Hero Phase.\nDeclare: Pick a visible friendly unit wholly within 12" of your general to be the target, then make a casting roll of 2D6.\nEffect: On a 7+, add 1 to the Rend characteristic of the target unit’s melee weapons until the start of your next turn.'
      }
    ],
    artefacts: [
      {
        id: 'syl-bb-art1',
        name: 'Regrowth',
        type: 'Artefact of Power',
        effect: 'Your Hero Phase.\nDeclare: Pick a visible friendly unit wholly within 18" of your general to be the target, then make a casting roll of 2D6.\nEffect: On a 5+, Heal (D6) the target.'
      },
      {
        id: 'syl-bb-art2',
        name: 'Seed of Rebirth',
        type: 'Artefact of Power',
        effect: 'Passive.\nEffect: If your general would be destroyed, before removing them from play, roll a dice. On a 3+, your general is not destroyed and any remaining damage points inflicted on them have no effect. Then, Heal (1) your general. This unit cannot use this ability again for the rest of the battle.'
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
            name: 'Greenwood Scythe and Bittergrub',
            type: 'Melee',
            range: '2"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: 'D3'
          }
        ],
        abilities: [
          {
            name: 'Verdurous Harmony',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase.\nDeclare: Pick a visible friendly unit wholly within 18" of this unit to be the target, then make a casting roll of 2D6.\nEffect: On a 7+, return 1 slain model to the target unit. If the target unit is a Tree-Revenants unit, return D3 slain models instead.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'HERO', 'WIZARD', 'INFANTRY', 'BRANCHWYCH']
      },
      {
        id: 'syl-treelord',
        name: 'Treelord',
        role: 'Monster',
        modelCount: 1,
        baseSize: '105x70mm',
        move: '5"',
        health: 14,
        save: '3+',
        control: 5,
        weapons: [
          {
            name: 'Strangleroots',
            type: 'Ranged',
            range: '10"',
            attacks: 3,
            toHit: '3+',
            toWound: '2+',
            rend: '-1',
            damage: '2',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Sweeping Blows',
            type: 'Melee',
            range: '3"',
            attacks: 5,
            toHit: '4+',
            toWound: '2+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Massive Impaling Talons',
            type: 'Melee',
            range: '3"',
            attacks: 2,
            toHit: '4+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Groundshaker',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase.\nDeclare: Pick an enemy unit in combat with this unit and roll a dice.\nEffect: On a 4+, that enemy unit has Strike-last for the rest of the phase.'
          },
          {
            name: 'Battle Damaged',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Passive.\nEffect: While this unit has 10 or more damage points, the Attacks characteristic of its Massive Impaling Talons is 1.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'MONSTER', 'TREELORD']
      },
      {
        id: 'syl-kurnoth-bows',
        name: 'Kurnoth Hunters',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '50mm',
        move: '5"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Kurnoth Greatbow',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Vicious Claws',
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
            name: 'Envoys of the Everqueen',
            phase: 'Passive',
            type: 'Passive',
            effect: 'Passive.\nEffect: While this unit is contesting an objective, friendly units contesting that objective have Ward (6+).'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'INFANTRY', 'KURNOTH HUNTERS']
      },
      {
        id: 'syl-tree-revs',
        name: 'Tree-Revenants',
        role: 'Infantry',
        isReinforcement: true,
        modelCount: 5,
        baseSize: '32mm',
        move: '6"',
        health: 2,
        save: '5+',
        control: 1,
        weapons: [
          {
            name: 'Enchanted Blade',
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
            name: 'Martial Memories',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase.\nDeclare: Pick either Memories of War or Memories of Peace.\nEffect: Depending on your choice, 1 of the following effects applies until the end of the phase:\n• Memories of War: Add 1 to hit rolls for this unit’s attacks.\n• Memories of Peace: Add 1 to save rolls for this unit.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'INFANTRY', 'REINFORCEMENTS', 'TREE-REVENANTS']
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
    flavorQuote: '‘The enemy already fears the shadows of the forest. Let us teach them to dread the open skies as well.’ — Arch-Revenant Gilriss of Athelwyrd',
    battleTraits: [
      {
        name: 'Target of Vengeance',
        description: 'Once Per Battle Round (Army), Start of Battle Round.\nDeclare: If there is no enemy quarry on the battlefield, pick an enemy unit on the battlefield to be the target.\nEffect: The target is the quarry for the rest of the battle.'
      },
      {
        name: 'Song of the Hunt',
        description: 'Passive.\nEffect: You gain 1 chord each time an enemy quarry is destroyed. The following cumulative effects apply to friendly units depending on the number of chords you have:\n• 1 chord (Simple): Add 1 to run rolls and charge rolls for friendly units while they are within 9" of the enemy quarry.\n• 2 chords (Tuneful): Add 1 to hit rolls for friendly units’ attacks while they are within 9" of the enemy quarry.\n• 3+ chords (Melodic): Add 1 to wound rolls for friendly units’ attacks while they are within 9" of the enemy quarry.'
      },
      {
        name: 'Airborne Cohesion',
        description: 'Passive.\nEffect: Friendly units have a coherency range of 2".'
      }
    ],
    regimentAbilities: [
      {
        name: 'Leaves on the Wind',
        description: 'Once Per Battle (Army), End of Any Turn.\nDeclare: Pick a friendly unit that is in combat to be the target.\nEffect: The target can immediately use the ‘Retreat’ ability as if it were your movement phase and no mortal damage is inflicted on it if it does so.'
      },
      {
        name: 'Lifebringers',
        description: 'Once Per Turn (Army), End of Any Turn.\nEffect: Heal (D3) each friendly unit.'
      }
    ],
    heroTraits: [
      {
        id: 'syl-sf-ht1',
        name: 'Head of the Hunt',
        type: 'Hero Trait',
        effect: 'Passive.\nEffect: Add 1 to the Rend characteristic of your general’s melee weapons while the enemy quarry is within 9" of and visible to them.'
      },
      {
        id: 'syl-sf-ht2',
        name: 'Bold Spirit',
        type: 'Hero Trait',
        effect: 'Once Per Battle (Army), Any Hero Phase.\nEffect: For the rest of the turn, add 1 to wound rolls for friendly units’ combat attacks while they are within your general’s combat range.'
      }
    ],
    artefacts: [
      {
        id: 'syl-sf-art1',
        name: 'Zephyrkin',
        type: 'Artefact of Power',
        effect: 'Reaction: You declared a Fight ability for your general.\nEffect: If your general charged this turn, they can move up to 2D6" after that Fight ability has been resolved. They cannot end that move in combat.'
      },
      {
        id: 'syl-sf-art2',
        name: 'Cunning Pursuer',
        type: 'Artefact of Power',
        effect: 'Passive.\nEffect: While your general is in combat, add 1 to charge rolls for friendly units wholly within 12" of them. Add 2 instead while your general is in combat with the quarry.'
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
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Arch-Revenant’s Glaive',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Heartwood Hunting Horn',
            phase: 'Hero',
            type: 'Active',
            effect: 'Your Hero Phase.\nDeclare: Pick a visible friendly unit wholly within 12" of this unit to be the target.\nEffect: Until the start of your next turn, that unit counts as having 1 additional chord for the purposes of the ‘Song of the Hunt’ ability.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'HERO', 'INFANTRY', 'FLY', 'ARCH-REVENANT']
      },
      {
        id: 'syl-gossamid',
        name: 'Gossamid Archers',
        role: 'Infantry',
        modelCount: 5,
        baseSize: '32mm',
        move: '12"',
        health: 2,
        save: '5+',
        control: 1,
        weapons: [
          {
            name: 'Gossamid Bow',
            type: 'Ranged',
            range: '12"',
            attacks: 2,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Shoot in Combat'
          },
          {
            name: 'Cruel Talons',
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
            name: 'Zephyrspites',
            phase: 'Shooting',
            type: 'Reaction',
            effect: 'Reaction: You declared a Shoot ability for this unit.\nEffect: After that Shoot ability has been resolved, this unit can move up to D6". It cannot end that move in combat.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'INFANTRY', 'FLY', 'GOSSAMID ARCHERS']
      },
      {
        id: 'syl-spiteriders',
        name: 'Spiterider Lancers',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '60x35mm',
        move: '12"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Spiterider Lance',
            type: 'Melee',
            range: '2"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Charge (+1 Damage)'
          },
          {
            name: 'Dragonspite’s Mandibles',
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
            name: 'Spiterider Charge',
            phase: 'Charge',
            type: 'Active',
            effect: 'Any Charge Phase.\nDeclare: If this unit charged this turn, pick an enemy unit within 1" of it to be the target.\nEffect: Roll a D3. If the target is the quarry, add 1 to the roll. On a 2+, inflict an amount of mortal damage on the target equal to the roll.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'CAVALRY', 'FLY', 'SPITERIDER LANCERS']
      },
      {
        id: 'syl-seekers',
        name: 'Revenant Seekers',
        role: 'Cavalry',
        modelCount: 3,
        baseSize: '60x35mm',
        move: '12"',
        health: 5,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Seeker’s Sickle',
            type: 'Melee',
            range: '2"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '-1',
            damage: '1',
            ability: 'Crit (Mortal)'
          },
          {
            name: 'Dragonspite’s Mandibles',
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
            name: 'Deafening Drone',
            phase: 'Combat',
            type: 'Active',
            effect: 'Any Combat Phase.\nDeclare: If this unit did not charge this turn, pick an enemy unit in combat with it to be the target, then roll a dice.\nEffect: If the roll exceeds the target’s Control characteristic, subtract 1 from the Attacks characteristic of the target’s melee weapons for the rest of the phase.'
          }
        ],
        keywords: ['ORDER', 'SYLVANETH', 'CAVALRY', 'FLY', 'REVENANT SEEKERS']
      }
    ]
  }
];
