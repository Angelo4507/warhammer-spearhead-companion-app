# Spearhead Command ⚔️
### The Ultimate Tabletop Companion App for Warhammer Age of Sigmar: Spearhead

"Spearhead Command is an unofficial, fan-made companion app and is in no way endorsed, sponsored, or affiliated with Games Workshop Limited. Warhammer, Warhammer Age of Sigmar, Spearhead, and all associated logos, names, races, and miniatures are trademarks or registered trademarks of Games Workshop Limited."

---

## ⚡ Key Features

- **Interactive Battle Console (Match HUD)**
  - **4-Round Battle Tracker**: Tracks battle rounds, active turn indicators, and round initiative roll-offs.
  - **Real-Time Scoreboard**: Victory Point (VP) counters, Command Point (CP) tracking, and automatic **Underdog** advantage detection (+1 CP and priority privilege when trailing).
  - **Tactical Hand Manager**: Manages the dual-nature Spearhead card system. Draw up to 3 cards into hand with instant actions to **Score Battle Tactic** (+1/+2 VP) or execute **Command Reaction Abilities** during specific phases (Hero, Movement, Shooting, Charge, Combat, End of Turn).
  - **Interactive Objective Map**: Visual 30" × 22.4" battlefield board with clickable objective nodes (1 to 4). Calculates **Hold 1** (+1 VP) and **Hold More** (+1 VP) with 1-click end-of-turn scoring.
  - **Unit Health & Wound Allocator**: Live regiment tracking with `+` / `-` wound buttons, visual health bars, status indicators (Healthy, Wounded, In Reserve, Slain, Reinforced), and quick warscroll inspection.
  - **Active Realm Twist Card**: Drawn at the start of each battle round for Aqshy (Realm of Fire) or Ghyran (Realm of Life), displaying realm rules and instant re-draw options.

- **Warscroll Codex & Army Rosters**
  - Full Spearhead forces spanning **Order**, **Chaos**, **Death**, and **Destruction**:
    - **Stormcast Eternals**: Vigilant Brotherhood & Yndrasta's Spearhead
    - **Skaven**: Gnawfeast Clawpack
    - **Nighthaunt**: Slasher Host
    - **Ironjawz**: Hulking Brutes
    - **Cities of Sigmar**: Castelite Company
  - Detailed warscroll cards with Move, Health, Save, Control characteristics, melee and ranged weapons tables, special abilities, and enhancement selections (Hero Traits & Artefacts of Power).

- **Tactics & Twist Card Library**
  - Complete 12-card Spearhead Battle Tactics deck with dual views for secondary objectives and reaction commands.
  - Full Aqshy and Ghyran Twist deck with filterable search by phase and realm.

- **Tabletop Utilities**
  - **Tactical Dice Roller**: Roll 1 to 30 D6 dice simultaneously with target filters (2+ to 6+), natural 6 crit counters, natural 1 fumble trackers, reroll 1s, and reroll misses.
  - **Synthesized Audio Cues**: Tabletop sound effects for dice rolling, card drawing, and scoring using the Web Audio API.
  - **Core Rules & Phase Guide**: Quick-reference guide covering turn sequences, universal commands, and the AoS 4th attack sequence (Hit → Wound → Save → Ward).
  - **Battle Records**: Match history persistence in `localStorage`.

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4**
- **Lucide Icons**
- **Web Audio API**

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Angelo4507/warhammer-spearhead-companion-app.git
   cd warhammer-spearhead-companion-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```
