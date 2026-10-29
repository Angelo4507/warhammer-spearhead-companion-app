import { SpearheadFaction } from '../../types/spearhead';

export const DESTRUCTION_FACTIONS: SpearheadFaction[] = [
  // 4. ORRUK WARCLANS - Ironjawz Bigmob
  {
    id: 'orruk-ironjawz-bigmob',
    name: 'Orruk Warclans',
    subTitle: 'Ironjawz Bigmob',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-amber-600 to-yellow-600',
    flavorQuote: 'WAAAGH! Smash \'em into paste, bash their skulls, take their shiny gubbins!',
    battleTraits: [
      {
        name: 'Smashing and Bashing',
        description: 'In the combat phase, if a friendly Ironjawz unit destroys an enemy unit, pick another friendly Ironjawz unit within 3" of an enemy to fight immediately.'
      },
      {
        name: 'Mighty Destroyers',
        description: 'In your hero phase, pick 1 friendly Ironjawz unit more than 3" from enemies. Roll a D6: on a 3+, it can make a normal move or charge.'
      }
    ],
    heroTraits: [
      {
        id: 'or-bm-ht1',
        name: 'Mega-boss Bravado',
        type: 'Hero Trait',
        effect: 'Your General adds 2 to their Health characteristic.'
      },
      {
        id: 'or-bm-ht2',
        name: 'Ironclad Brawler',
        type: 'Hero Trait',
        effect: 'Add 1 to wound rolls for your General’s melee weapons in combat.'
      }
    ],
    artefacts: [
      {
        id: 'or-bm-art1',
        name: 'Destroyer Choppa',
        type: 'Artefact of Power',
        effect: 'Once per battle in combat, add 2 to the Damage characteristic of the bearer’s melee weapons.'
      },
      {
        id: 'or-bm-art2',
        name: 'Armour of Gork',
        type: 'Artefact of Power',
        effect: 'The bearer gains a 5+ Ward save against melee attacks.'
      }
    ],
    units: [
      {
        id: 'or-megaboss',
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
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'IRONJAWZ', 'HERO', 'MEGABOSS']
      },
      {
        id: 'or-ardboyz',
        name: 'Ardboyz with Choppas',
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
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'IRONJAWZ', 'INFANTRY', 'ARDBOYZ']
      },
      {
        id: 'or-gore-gruntas',
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
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'IRONJAWZ', 'CAVALRY', 'GORE-GRUNTAS']
      }
    ]
  },

  // 4b. ORRUK WARCLANS - Swampskulka Gang
  {
    id: 'orruk-swampskulka',
    name: 'Orruk Warclans',
    subTitle: 'Swampskulka Gang',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-emerald-800 to-lime-900',
    flavorQuote: 'Cunning, swamp-dwelling Kruleboyz coat their poisoned blades and shoot bolts through foggy miasmas.',
    battleTraits: [
      {
        name: 'Venom-encrusted Weapons',
        description: 'Unmodified hit rolls of 6 for friendly Kruleboyz weapons inflict mortal damage directly and end the attack sequence.'
      },
      {
        name: 'Disappearin’ Act',
        description: 'Friendly Kruleboyz units cannot be targeted by missile weapons while wholly within cover or more than 12" away.'
      }
    ],
    heroTraits: [
      {
        id: 'or-sk-ht1',
        name: 'Swamp Boss Cunning',
        type: 'Hero Trait',
        effect: 'Add 1 to the Wound rolls for your General and their Stab-grot.'
      },
      {
        id: 'or-sk-ht2',
        name: 'Bog-mist Shroud',
        type: 'Hero Trait',
        effect: 'Enemy units targeting your General with missile attacks suffer -1 to hit.'
      }
    ],
    artefacts: [
      {
        id: 'or-sk-art1',
        name: 'Swampcalla Brew',
        type: 'Artefact of Power',
        effect: 'Pick 1 friendly Kruleboyz unit within 12"; it deals mortal wounds on unmodified hit rolls of 5+.'
      },
      {
        id: 'or-sk-art2',
        name: 'Supa-sneaky Cloak',
        type: 'Artefact of Power',
        effect: 'Deploy the bearer anywhere on the battlefield more than 9" from enemy units.'
      }
    ],
    units: [
      {
        id: 'or-killaboss',
        name: 'Killaboss with Stab-grot',
        role: 'Hero',
        modelCount: 2,
        baseSize: '40mm',
        move: '5"',
        health: 6,
        save: '3+',
        control: 2,
        weapons: [
          {
            name: 'Boss-hacka & Rust-shield',
            type: 'Melee',
            range: '1"',
            attacks: 4,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Stab-grot Shiv',
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
            name: 'You Hold ‘Em, I’ll Stick ‘Em!',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Stab-grot can absorb 1 wound allocated to the Killaboss and dies in his place.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'KRULEBOYZ', 'HERO', 'KILLABOSS']
      },
      {
        id: 'or-gutrippaz',
        name: 'Gutrippaz with Wicked Stikkas',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '32mm',
        move: '5"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Wicked Stikkas & Scare-shields',
            type: 'Melee',
            range: '2"',
            attacks: 10,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1',
            ability: 'Crit (Mortal)'
          }
        ],
        abilities: [
          {
            name: 'Scare Tactic Shields',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Enemy units in combat with this unit subtract 1 from their hit rolls.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'KRULEBOYZ', 'INFANTRY', 'GUTRIPPAZ']
      },
      {
        id: 'or-boltboyz',
        name: 'Man-skewer Boltboyz',
        role: 'Infantry',
        modelCount: 3,
        baseSize: '32mm',
        move: '5"',
        health: 6,
        save: '5+',
        control: 3,
        weapons: [
          {
            name: 'Man-skewer Crossbow',
            type: 'Ranged',
            range: '18"',
            attacks: 3,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2',
            ability: 'Crit (Mortal 2)'
          },
          {
            name: 'Gut-skewer Dagger',
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
            name: 'Hasty Shots',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Can fire twice if within 12" of target at -1 to Hit.'
          }
        ],
        keywords: ['DESTRUCTION', 'ORRUK WARCLANS', 'KRULEBOYZ', 'INFANTRY', 'BOLTBOYZ']
      }
    ]
  },

  // 11. GLOOMSPITE GITZ - Bad Moon Madmob
  {
    id: 'gitz-badmoon',
    name: 'Gloomspite Gitz',
    subTitle: 'Bad Moon Madmob',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-amber-400 to-emerald-950',
    flavorQuote: 'Under the leering face of Da Bad Moon, the squig-riders bounce hysterically into the fray!',
    battleTraits: [
      {
        name: 'The Clammy Hand of the Bad Moon',
        description: 'Under the Bad Moon’s light, friendly Moonclan units add 1 to save rolls and Moonclan weapons inflict mortal wounds on unmodified hit rolls of 6.'
      },
      {
        name: 'Boing! Boing! Boing!',
        description: 'Squig Hoppers and Boingrot Bounderz roll 3D6 for their move characteristic.'
      }
    ],
    heroTraits: [
      {
        id: 'gz-bm-ht1',
        name: 'Moon-cursed Madcap',
        type: 'Hero Trait',
        effect: 'Loonboss can grant +1 mortal wound on wound rolls of 6 to a nearby friendly unit.'
      },
      {
        id: 'gz-bm-ht2',
        name: 'Fight Another Day',
        type: 'Hero Trait',
        effect: 'General can retreat and charge in the same turn.'
      }
    ],
    artefacts: [
      {
        id: 'gz-bm-art1',
        name: 'The Clammy Cowl',
        type: 'Artefact of Power',
        effect: 'Subtract 1 from hit rolls for attacks that target the bearer.'
      },
      {
        id: 'gz-bm-art2',
        name: 'Moonface Mommet',
        type: 'Artefact of Power',
        effect: 'Pick 1 enemy unit within 12": subtract 1 from its Save rolls.'
      }
    ],
    units: [
      {
        id: 'gz-loonboss',
        name: 'Loonboss on Giant Cave Squig',
        role: 'Hero',
        modelCount: 1,
        baseSize: '40mm',
        move: '8"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Moon-slicer & Huge Fang-filled Maw',
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
            name: 'I’m Da Boss, Now Stab ‘Em!',
            phase: 'Combat',
            type: 'Active',
            effect: 'Friendly Gitz units wholly within 12" inflict 1 mortal wound in addition to normal damage on unmodified wound rolls of 6.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'HERO', 'CAVALRY', 'LOONBOSS', 'SQUIG']
      },
      {
        id: 'gz-boingrot',
        name: 'Boingrot Bounderz',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '32mm',
        move: '2D6"',
        health: 10,
        save: '4+',
        control: 5,
        weapons: [
          {
            name: 'Pokin’ Lance & Squig Jaws',
            type: 'Melee',
            range: '2"',
            attacks: 10,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Boing! Smash!',
            phase: 'Charge',
            type: 'Active',
            effect: 'Roll a D6 for each model on charge: for each 4+, target unit takes 1 mortal wound.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'CAVALRY', 'SQUIG', 'BOINGROT BOUNDERZ']
      },
      {
        id: 'gz-stabbas',
        name: 'Moonclan Stabbas',
        role: 'Infantry',
        modelCount: 10,
        baseSize: '25mm',
        move: '5"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Stabbas & Moon Shields',
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
            name: 'Bad Moon Shroud',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Save characteristic improves to 4+ while holding an objective marker.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'INFANTRY', 'STABBAS']
      }
    ]
  },

  // 11b. GLOOMSPITE GITZ - Snarlpack Huntaz
  {
    id: 'gitz-snarlpack',
    name: 'Gloomspite Gitz',
    subTitle: 'Snarlpack Huntaz',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-amber-600 to-stone-800',
    flavorQuote: 'Wolf-riding gitmob raiders sweep across plains, releasing howling packs of snarling beasts.',
    battleTraits: [
      {
        name: 'Gitmob Hit-and-Run',
        description: 'Snarlfang units can retreat and shoot, or retreat and charge in the same turn.'
      },
      {
        name: 'Snarlfang Jaws',
        description: 'Unmodified hit rolls of 6 for wolf mount attacks inflict D3 damage.'
      }
    ],
    heroTraits: [
      {
        id: 'gz-sp-ht1',
        name: 'Pack Leader of the Steppes',
        type: 'Hero Trait',
        effect: 'Friendly Snarlfang units within 12" add 2" to their Movement.'
      },
      {
        id: 'gz-sp-ht2',
        name: 'Gitmob Cunning',
        type: 'Hero Trait',
        effect: 'General adds 1 to hit rolls with ranged and melee attacks.'
      }
    ],
    artefacts: [
      {
        id: 'gz-sp-art1',
        name: 'Snarlfang Fang Necklace',
        type: 'Artefact of Power',
        effect: 'Bearer’s mount attacks have Rend -2 and Damage 2.'
      },
      {
        id: 'gz-sp-art2',
        name: 'Dustcloud Cloak',
        type: 'Artefact of Power',
        effect: 'Bearer cannot be targeted by missile weapons beyond 12".'
      }
    ],
    units: [
      {
        id: 'gz-snarlfang-boss',
        name: 'Gitmob Boss on Snarlfang',
        role: 'Hero',
        modelCount: 1,
        baseSize: '60x35mm',
        move: '12"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Boss Bow',
            type: 'Ranged',
            range: '18"',
            attacks: 3,
            toHit: '3+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Slashing Spear & Wolf Jaws',
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
            name: 'Hunt as a Pack',
            phase: 'Combat',
            type: 'Active',
            effect: 'Pick 1 friendly Snarlfang unit within 12"; add 1 to its wound rolls this turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'GITMOB', 'HERO', 'CAVALRY']
      },
      {
        id: 'gz-snarlfang-riders',
        name: 'Snarlfang Riders',
        role: 'Cavalry',
        modelCount: 5,
        baseSize: '60x35mm',
        move: '12"',
        health: 10,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Gitmob Bow',
            type: 'Ranged',
            range: '15"',
            attacks: 5,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Wolf Spear & Snarlfang Jaws',
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
            name: 'Harassing Fire',
            phase: 'Shooting',
            type: 'Passive',
            effect: 'Can shoot even if this unit made a Run or Retreat move this turn.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'GITMOB', 'CAVALRY', 'SNARLFANG']
      },
      {
        id: 'gz-snarlfang-chariot',
        name: 'Snarlfang Chariot',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '12"',
        health: 8,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Chariot Bows',
            type: 'Ranged',
            range: '18"',
            attacks: 4,
            toHit: '4+',
            toWound: '4+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Scythe Wheels & Wolves',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Scything Charge',
            phase: 'Charge',
            type: 'Active',
            effect: 'Roll 6 dice on charge: for each 4+, target takes 1 mortal wound.'
          }
        ],
        keywords: ['DESTRUCTION', 'GLOOMSPITE GITZ', 'GITMOB', 'WARMACHINE', 'CHARIOT']
      }
    ]
  },

  // 18. OGOR MAWTRIBES - Mawseeker Mob
  {
    id: 'ogor-mawseeker',
    name: 'Ogor Mawtribes',
    subTitle: 'Mawseeker Mob',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-amber-700 to-stone-900',
    flavorQuote: 'Gorging upon the meat of foes to satisfy the insatiable hunger of the Gulping God!',
    battleTraits: [
      {
        name: 'Trampling Charge',
        description: 'When an Ogor unit completes a charge, roll 1 dice for each model: on a 3+, that enemy unit suffers D3 mortal wounds.'
      },
      {
        name: 'Might Makes Right',
        description: 'Each Ogor model counts as 2 models for the purposes of contesting objectives.'
      }
    ],
    heroTraits: [
      {
        id: 'og-ms-ht1',
        name: 'Brawler of the Gutbuster Tribe',
        type: 'Hero Trait',
        effect: 'Add 1 to the Attacks characteristic of your General’s melee weapons.'
      },
      {
        id: 'og-ms-ht2',
        name: 'Bellower of the Maw',
        type: 'Hero Trait',
        effect: 'Enemy units in combat with your General subtract 1 from their melee hit rolls.'
      }
    ],
    artefacts: [
      {
        id: 'og-ms-art1',
        name: 'Gruesome Trophy Rack',
        type: 'Artefact of Power',
        effect: 'Friendly Ogor units within 12" add 1 to their hit rolls against enemy Heroes and Monsters.'
      },
      {
        id: 'og-ms-art2',
        name: 'Splatter-cleaver',
        type: 'Artefact of Power',
        effect: 'Heal 2 wounds on friendly Ogor models whenever the bearer destroys an enemy model.'
      }
    ],
    units: [
      {
        id: 'og-tyrant',
        name: 'Ogor Tyrant',
        role: 'Hero',
        modelCount: 1,
        baseSize: '50mm',
        move: '6"',
        health: 8,
        save: '3+',
        control: 4,
        weapons: [
          {
            name: 'Beastskewer Glaive & Iron Fist',
            type: 'Melee',
            range: '2"',
            attacks: 6,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Bully of the Gutbusters',
            phase: 'Hero',
            type: 'Active',
            effect: 'Pick 1 friendly Ogor unit within 12"; it ignores battleshock and gains +2" move.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'GUTBUSTERS', 'HERO', 'TYRANT']
      },
      {
        id: 'og-gluttons',
        name: 'Ogor Gluttons with Paired Clubs',
        role: 'Infantry',
        modelCount: 4,
        baseSize: '40mm',
        move: '6"',
        health: 16,
        save: '5+',
        control: 8,
        weapons: [
          {
            name: 'Paired Ogor Clubs & Iron Fists',
            type: 'Melee',
            range: '1"',
            attacks: 16,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Feast on Flesh',
            phase: 'End of Turn',
            type: 'Active',
            effect: 'If this unit destroyed an enemy model this turn, heal 2 wounds allocated to it.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'GUTBUSTERS', 'INFANTRY', 'GLUTTONS']
      },
      {
        id: 'og-ironguts',
        name: 'Ironguts',
        role: 'Infantry',
        modelCount: 4,
        baseSize: '40mm',
        move: '6"',
        health: 16,
        save: '4+',
        control: 8,
        weapons: [
          {
            name: 'Mighty Ogor Great-weapons',
            type: 'Melee',
            range: '2"',
            attacks: 12,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Down to the Ironguts',
            phase: 'Combat',
            type: 'Active',
            effect: 'Once per battle, this unit can fight a second time at the end of the combat phase.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'GUTBUSTERS', 'INFANTRY', 'IRONGUTS']
      }
    ]
  },

  // 18b. OGOR MAWTRIBES - Scrapglutt
  {
    id: 'ogor-scrapglutt',
    name: 'Ogor Mawtribes',
    subTitle: 'Scrapglutt',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-stone-700 to-amber-800',
    flavorQuote: 'A butcher presides over cauldrons of simmering entrails flanked by swarms of sharp-stick gnoblars.',
    battleTraits: [
      {
        name: 'Bloodgruel Cauldron',
        description: 'Friendly Butchers can boil bloodgruel in the hero phase to heal friendly units D3 wounds or deal D3 mortal damage to enemies.'
      },
      {
        name: 'Swarming Trappers',
        description: 'Enemy units charged by Gnoblars or charging Gnoblars suffer -1 to hit and roll D6 on a 1 take D3 mortal wounds from traps.'
      }
    ],
    heroTraits: [
      {
        id: 'og-sg-ht1',
        name: 'Gastromancer',
        type: 'Hero Trait',
        effect: 'Add 1 to casting rolls for friendly Butcher spells.'
      },
      {
        id: 'og-sg-ht2',
        name: 'Meat-hoarder',
        type: 'Hero Trait',
        effect: 'Heal 2 wounds on friendly units within 6" at start of hero phase.'
      }
    ],
    artefacts: [
      {
        id: 'og-sg-art1',
        name: 'Cleaver of the Great Maw',
        type: 'Artefact of Power',
        effect: 'Bearer’s melee attacks gain Crit (Mortal 2).'
      },
      {
        id: 'og-sg-art2',
        name: 'Greedy Fists Amulet',
        type: 'Artefact of Power',
        effect: 'Bearer gains a 5+ Ward save.'
      }
    ],
    units: [
      {
        id: 'og-butcher',
        name: 'Butcher with Cleaver',
        role: 'Hero',
        modelCount: 1,
        baseSize: '50mm',
        move: '6"',
        health: 7,
        save: '4+',
        control: 3,
        weapons: [
          {
            name: 'Cleaver & Meat Hooks',
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
            name: 'Voracious Maw',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6. On a 3+, enemy unit within 18" suffers D3 mortal wounds.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'HERO', 'WIZARD', 'BUTCHER']
      },
      {
        id: 'og-gnoblars',
        name: 'Gnoblars Mob',
        role: 'Infantry',
        modelCount: 20,
        baseSize: '25mm',
        move: '5"',
        health: 20,
        save: '6+',
        control: 10,
        weapons: [
          {
            name: 'Sharp Gubbins',
            type: 'Ranged',
            range: '8"',
            attacks: 20,
            toHit: '5+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          },
          {
            name: 'Bottles & Shivs',
            type: 'Melee',
            range: '1"',
            attacks: 20,
            toHit: '5+',
            toWound: '5+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Gnoblar Trappers',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Enemy units charging this unit suffer D3 mortal wounds on a 4+.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'GNOBLARS']
      },
      {
        id: 'og-ironblaster',
        name: 'Ironblaster Cannon',
        role: 'Warmachine',
        modelCount: 1,
        baseSize: '120x92mm',
        move: '8"',
        health: 12,
        save: '4+',
        control: 4,
        weapons: [
          {
            name: 'Cannonball Blast',
            type: 'Ranged',
            range: '24"',
            attacks: 1,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: 'D6+2'
          },
          {
            name: 'Rhinox Horns & Ogor Club',
            type: 'Melee',
            range: '1"',
            attacks: 6,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Leadbelcher Shrapnel',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Can fire Hail Shot instead: range 12", 2D6 attacks, rend -1, 1 damage.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'WARMACHINE', 'IRONBLASTER']
      }
    ]
  },

  // 18c. OGOR MAWTRIBES - Tyrant’s Bellow
  {
    id: 'ogor-tyrantsbellow',
    name: 'Ogor Mawtribes',
    subTitle: 'Tyrant’s Bellow',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-amber-800 to-zinc-900',
    flavorQuote: 'Mounted on heavy-horned Mournfangs, the vanguard thunderbolts through enemy battlelines.',
    battleTraits: [
      {
        name: 'Line-breaker Charge',
        description: 'Mournfangs add +1 Damage to their weapons on turns they completed a charge move.'
      },
      {
        name: 'Mighty Bellow',
        description: 'Enemy units in combat with your Tyrant cannot receive commands.'
      }
    ],
    heroTraits: [
      {
        id: 'og-tb-ht1',
        name: 'Fierce Steppes Hunter',
        type: 'Hero Trait',
        effect: 'Friendly Mournfang units within 12" can reroll charge rolls.'
      },
      {
        id: 'og-tb-ht2',
        name: 'Ironhide Endurance',
        type: 'Hero Trait',
        effect: 'Your General adds 2 to Health and gains 5+ Ward.'
      }
    ],
    artefacts: [
      {
        id: 'og-tb-art1',
        name: 'Frost-iron Greatcleaver',
        type: 'Artefact of Power',
        effect: 'Bearer’s weapons have Rend -2 and Damage 3.'
      },
      {
        id: 'og-tb-art2',
        name: 'Horn of the Great Maw',
        type: 'Artefact of Power',
        effect: 'Once per battle, all friendly units within 12" add +1 Attack for the round.'
      }
    ],
    units: [
      {
        id: 'og-mournfangs',
        name: 'Mournfang Pack with Iron Fists',
        role: 'Cavalry',
        modelCount: 2,
        baseSize: '90x52mm',
        move: '8"',
        health: 12,
        save: '4+',
        control: 6,
        weapons: [
          {
            name: 'Culling Clubs & Mournfang Tusk',
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
            name: 'Ironfist Deflection',
            phase: 'Combat',
            type: 'Passive',
            effect: 'Unmodified save rolls of 6 inflict 1 mortal wound back on the attacker.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'BEASTCLAW RAIDERS', 'CAVALRY', 'MOURNFANG']
      },
      {
        id: 'og-frost-sabres',
        name: 'Frost Sabres',
        role: 'Infantry',
        modelCount: 2,
        baseSize: '60x35mm',
        move: '9"',
        health: 6,
        save: '5+',
        control: 2,
        weapons: [
          {
            name: 'Icy Fangs and Claws',
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
            name: 'Ambush Hunters',
            phase: 'Movement',
            type: 'Active',
            effect: 'Can deploy out of ambush within 9" of any board edge.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'BEASTCLAW RAIDERS', 'FROST SABRES']
      },
      {
        id: 'og-tyrant-bellow',
        name: 'Tyrant of the Bellow',
        role: 'Hero',
        modelCount: 1,
        baseSize: '50mm',
        move: '6"',
        health: 8,
        save: '3+',
        control: 4,
        weapons: [
          {
            name: 'Sledgehammer of the Maw',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Deafening Roar',
            phase: 'Hero',
            type: 'Active',
            effect: 'Roll a D6: on 3+, enemy unit within 12" suffers Strike-Last.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'HERO', 'TYRANT']
      }
    ]
  },

  // 18d. OGOR MAWTRIBES - Warglutt Marauders
  {
    id: 'ogor-warglutt',
    name: 'Ogor Mawtribes',
    subTitle: 'Warglutt Marauders',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-amber-900 to-slate-800',
    flavorQuote: 'Cannoneers load scrap iron and bolts into smoking barrels to pulverize advancing foes.',
    battleTraits: [
      {
        name: 'Scrap-iron Salvo',
        description: 'Leadbelchers can shoot even after making a normal move.'
      },
      {
        name: 'The Big Eat',
        description: 'Friendly Ogors heal 1 wound at the end of every combat phase.'
      }
    ],
    heroTraits: [
      {
        id: 'og-wm-ht1',
        name: 'Master Gunner of the Warglutt',
        type: 'Hero Trait',
        effect: 'Friendly Leadbelchers within 9" add +1 to their missile hit rolls.'
      },
      {
        id: 'og-wm-ht2',
        name: 'Snow-blind Stalker',
        type: 'Hero Trait',
        effect: 'General cannot be targeted by missile weapons beyond 12".'
      }
    ],
    artefacts: [
      {
        id: 'og-wm-art1',
        name: 'Frost-infused Shot',
        type: 'Artefact of Power',
        effect: 'Missile weapons fired by bearer worsen enemy save characteristic by 1.'
      },
      {
        id: 'og-wm-art2',
        name: 'Pelts of the Great White Beast',
        type: 'Artefact of Power',
        effect: 'Bearer gains a 5+ Ward save and +2 Health.'
      }
    ],
    units: [
      {
        id: 'og-hunter',
        name: 'Icebrow Hunter',
        role: 'Hero',
        modelCount: 1,
        baseSize: '50mm',
        move: '6"',
        health: 6,
        save: '4+',
        control: 2,
        weapons: [
          {
            name: 'Great Hunter Crossbow',
            type: 'Ranged',
            range: '18"',
            attacks: 2,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          },
          {
            name: 'Hunter’s Culling Axe',
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
            name: 'Unseen Stalker',
            phase: 'Movement',
            type: 'Active',
            effect: 'Deploy in reserve and emerge anywhere more than 9" from enemies.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'BEASTCLAW RAIDERS', 'HERO', 'HUNTER']
      },
      {
        id: 'og-leadbelchers',
        name: 'Leadbelchers',
        role: 'Infantry',
        modelCount: 4,
        baseSize: '40mm',
        move: '6"',
        health: 16,
        save: '5+',
        control: 8,
        weapons: [
          {
            name: 'Leadbelcher Cannon',
            type: 'Ranged',
            range: '12"',
            attacks: 8,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: '1'
          },
          {
            name: 'Iron Bludgeons',
            type: 'Melee',
            range: '1"',
            attacks: 12,
            toHit: '4+',
            toWound: '3+',
            rend: '0',
            damage: '1'
          }
        ],
        abilities: [
          {
            name: 'Fire at Will',
            phase: 'Shooting',
            type: 'Active',
            effect: 'Roll D6: on a 3+, attacks characteristic increases by 4 if this unit did not move.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'LEADBELCHERS']
      },
      {
        id: 'og-warglutt-gluttons',
        name: 'Warglutt Gluttons',
        role: 'Infantry',
        modelCount: 4,
        baseSize: '40mm',
        move: '6"',
        health: 16,
        save: '5+',
        control: 8,
        weapons: [
          {
            name: 'Glutton Cleavers',
            type: 'Melee',
            range: '1"',
            attacks: 16,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: '2'
          }
        ],
        abilities: [
          {
            name: 'Belly-charge',
            phase: 'Charge',
            type: 'Passive',
            effect: 'Deals D3 mortal damage on successful charge rolls of 8+.'
          }
        ],
        keywords: ['DESTRUCTION', 'OGOR MAWTRIBES', 'INFANTRY', 'GLUTTONS']
      }
    ]
  },

  // 22. SONS OF BEHEMAT - Stone Lobbas
  {
    id: 'sob-stonelobbas',
    name: 'Sons of Behemat',
    subTitle: 'Stone Lobbas',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-amber-700 to-yellow-800',
    flavorQuote: 'Big boulders, bigger stomps! If it don’t break when ya hit it, pick up a rock and throw it!',
    battleTraits: [
      {
        name: 'Massive Brutes',
        description: 'Each Mancrusher Gargant counts as 5 models for the purposes of controlling objectives.'
      },
      {
        name: 'Keep on Chucking',
        description: 'Mancrusher Gargants can hurl boulders up to 18" with Rend -1 and Damage D3+1.'
      }
    ],
    heroTraits: [
      {
        id: 'sob-sl-ht1',
        name: 'Rock-chucker Champion',
        type: 'Hero Trait',
        effect: 'General adds 1 to hit rolls with hurled boulders.'
      },
      {
        id: 'sob-sl-ht2',
        name: 'Tough as Old Boots',
        type: 'Hero Trait',
        effect: 'General adds 3 to Health and has a 5+ Ward save.'
      }
    ],
    artefacts: [
      {
        id: 'sob-sl-art1',
        name: 'Gargant-flail',
        type: 'Artefact of Power',
        effect: 'Melee attacks have Rend -2 and Damage 3.'
      },
      {
        id: 'sob-sl-art2',
        name: 'Bag of Shiny Gubbins',
        type: 'Artefact of Power',
        effect: 'Bearer can heal D3 wounds each Hero phase.'
      }
    ],
    units: [
      {
        id: 'sob-mancrusher-boss',
        name: 'Mancrusher Gargant Boss',
        role: 'Monster',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '8"',
        health: 12,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Hurled Boulder',
            type: 'Ranged',
            range: '18"',
            attacks: 1,
            toHit: '3+',
            toWound: '2+',
            rend: '-1',
            damage: 'D3+1'
          },
          {
            name: 'Massive Club & Crushing Feet',
            type: 'Melee',
            range: '2"',
            attacks: 6,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3+2'
          }
        ],
        abilities: [
          {
            name: 'Timber!',
            phase: 'Passive',
            type: 'Passive',
            effect: 'When slain, falls on an enemy unit: roll a D6, on 3+ that unit suffers D3 mortal wounds.'
          }
        ],
        keywords: ['DESTRUCTION', 'SONS OF BEHEMAT', 'HERO', 'MONSTER', 'MANCRUSHER']
      },
      {
        id: 'sob-mancrusher-1',
        name: 'Mancrusher Gargant Alpha',
        role: 'Monster',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '8"',
        health: 12,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Hurled Boulder',
            type: 'Ranged',
            range: '18"',
            attacks: 1,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          },
          {
            name: 'Tree Trunk Club',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3+1'
          }
        ],
        abilities: [
          {
            name: 'Stomp ‘Em Good',
            phase: 'Combat',
            type: 'Active',
            effect: 'Roll a D6: on 3+, target unit suffers D3 mortal wounds from stomping feet.'
          }
        ],
        keywords: ['DESTRUCTION', 'SONS OF BEHEMAT', 'MONSTER', 'MANCRUSHER']
      },
      {
        id: 'sob-mancrusher-2',
        name: 'Mancrusher Gargant Beta',
        role: 'Monster',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '8"',
        health: 12,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Hurled Boulder',
            type: 'Ranged',
            range: '18"',
            attacks: 1,
            toHit: '4+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3'
          },
          {
            name: 'Spiked Club',
            type: 'Melee',
            range: '2"',
            attacks: 5,
            toHit: '3+',
            toWound: '3+',
            rend: '-1',
            damage: 'D3+1'
          }
        ],
        abilities: [
          {
            name: 'Grab ‘Em and Stuff ‘Em in Me Bag',
            phase: 'Combat',
            type: 'Active',
            effect: 'Roll a D6 targeting an enemy model: on a 6, that model is instantly slain and devoured.'
          }
        ],
        keywords: ['DESTRUCTION', 'SONS OF BEHEMAT', 'MONSTER', 'MANCRUSHER']
      }
    ]
  },

  // 22b. SONS OF BEHEMAT - Wallsmasher Stomp
  {
    id: 'sob-wallsmasher',
    name: 'Sons of Behemat',
    subTitle: 'Wallsmasher Stomp',
    grandAlliance: 'DESTRUCTION',
    accentColor: 'from-amber-800 to-red-950',
    flavorQuote: 'Battering rams and massive cudgels tear down fortresses and pulverize whole regiments.',
    battleTraits: [
      {
        name: 'Wall Smasher Impact',
        description: 'Mancrushers add +2 to their charge rolls when charging enemy units on terrain or objectives.'
      },
      {
        name: 'Gargant Bellow',
        description: 'Enemy units in combat with a Gargant suffer -1 to their melee attack rolls.'
      }
    ],
    heroTraits: [
      {
        id: 'sob-ws-ht1',
        name: 'Siegebreaker Boss',
        type: 'Hero Trait',
        effect: 'Bearer deals double damage against fortified units and buildings.'
      },
      {
        id: 'sob-ws-ht2',
        name: 'Ironhide Belly',
        type: 'Hero Trait',
        effect: 'Save characteristic improves to 4+.'
      }
    ],
    artefacts: [
      {
        id: 'sob-ws-art1',
        name: 'Fortress-breaker Hammer',
        type: 'Artefact of Power',
        effect: 'Bearer’s weapon deals flat 4 damage with Rend -2.'
      },
      {
        id: 'sob-ws-art2',
        name: 'Keg of Stolen Brew',
        type: 'Artefact of Power',
        effect: 'Bearer heals 3 wounds and gains +1 Attack.'
      }
    ],
    units: [
      {
        id: 'sob-ws-boss',
        name: 'Wallsmasher Mancrusher Boss',
        role: 'Monster',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '8"',
        health: 14,
        save: '4+',
        control: 6,
        weapons: [
          {
            name: 'Wall-shattering Club',
            type: 'Melee',
            range: '2"',
            attacks: 6,
            toHit: '3+',
            toWound: '2+',
            rend: '-2',
            damage: '3'
          }
        ],
        abilities: [
          {
            name: 'Shatter Fortifications',
            phase: 'Combat',
            type: 'Active',
            effect: 'Enemy units defending cover or objectives lose cover benefits and suffer 1 mortal wound on 4+.'
          }
        ],
        keywords: ['DESTRUCTION', 'SONS OF BEHEMAT', 'HERO', 'MONSTER', 'MANCRUSHER']
      },
      {
        id: 'sob-ws-gargant-1',
        name: 'Wallsmasher Gargant Crusher',
        role: 'Monster',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '8"',
        health: 12,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Heavy Club & Stomp',
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
            name: 'Deadly Stomp',
            phase: 'Combat',
            type: 'Active',
            effect: 'Deals D3 mortal wounds on a roll of 3+ after fighting.'
          }
        ],
        keywords: ['DESTRUCTION', 'SONS OF BEHEMAT', 'MONSTER', 'MANCRUSHER']
      },
      {
        id: 'sob-ws-gargant-2',
        name: 'Wallsmasher Gargant Brawler',
        role: 'Monster',
        modelCount: 1,
        baseSize: '90x52mm',
        move: '8"',
        health: 12,
        save: '5+',
        control: 5,
        weapons: [
          {
            name: 'Iron-banded Trunk',
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
            name: 'Kick ‘Em Away',
            phase: 'Combat',
            type: 'Active',
            effect: 'Can push an enemy model back 3" and deal 1 mortal wound.'
          }
        ],
        keywords: ['DESTRUCTION', 'SONS OF BEHEMAT', 'MONSTER', 'MANCRUSHER']
      }
    ]
  }
];
