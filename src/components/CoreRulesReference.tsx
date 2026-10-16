import React from 'react';
import { BookOpen, Shield, Sword, Flag, Zap, Crosshair, RefreshCw } from 'lucide-react';

export const CoreRulesReference: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header banner */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-6">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="h-6 w-6 text-amber-400" />
          <h2 className="font-cinzel text-xl font-bold text-zinc-100">Spearhead Rules Reference</h2>
        </div>
        <p className="text-xs text-zinc-400 max-w-3xl leading-relaxed">
          Spearhead is the fast-paced, box-contained game mode for Warhammer Age of Sigmar. Games take
          place across 4 battle rounds on a compact 30" x 22.4" battlefield with fixed objective stones,
          a dual-purpose Battle Tactics deck, and realm Twist cards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Battle Round & Scoring */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-cinzel text-sm font-bold">
            <Flag className="h-4 w-4" />
            <span>Game Rounds & Victory Points</span>
          </div>

          <div className="space-y-3 text-xs text-zinc-300">
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-3">
              <span className="block font-bold text-zinc-100 mb-1">4 Battle Rounds</span>
              <p className="text-zinc-400">
                Each round starts with a Twist card draw, followed by an initiative roll-off. Player with initiative chooses who takes the first turn.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-3">
              <span className="block font-bold text-zinc-100 mb-1">Scoring Each Turn</span>
              <ul className="list-disc list-inside space-y-1 text-zinc-400">
                <li><strong className="text-zinc-200">Hold 1:</strong> Score +1 VP if you control at least 1 objective marker at the end of your turn.</li>
                <li><strong className="text-zinc-200">Hold More:</strong> Score +1 VP if you control more objective markers than your opponent at the end of your turn.</li>
                <li><strong className="text-zinc-200">Battle Tactic:</strong> Score the listed VP (+1 or +2 VP) on your active chosen Battle Tactic card if completed by end of turn.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950/40 p-3">
              <span className="block font-bold text-zinc-100 mb-1">Underdog Advantage</span>
              <p className="text-zinc-400">
                At the start of each battle round, if a player is trailing in Victory Points, they become the <span className="text-amber-400 font-semibold">Underdog</span>. The Underdog immediately receives an extra Command Point and can choose to go first or second regardless of initiative.
              </p>
            </div>
          </div>
        </div>

        {/* Attack & Combat Sequence */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-cinzel text-sm font-bold">
            <Sword className="h-4 w-4" />
            <span>Combat & Attack Sequence</span>
          </div>

          <div className="space-y-2 text-xs text-zinc-300 font-mono">
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5">
              <span className="text-amber-400 font-bold">1. HIT ROLL: </span>
              <span className="text-zinc-400 font-sans">Roll D6 per Attack. Equal or exceed weapon’s "To Hit" characteristic. Unmodified 6 is a Critical Hit.</span>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5">
              <span className="text-amber-400 font-bold">2. WOUND ROLL: </span>
              <span className="text-zinc-400 font-sans">Roll D6 for each successful hit. Equal or exceed weapon’s "To Wound" characteristic.</span>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5">
              <span className="text-amber-400 font-bold">3. SAVE ROLL: </span>
              <span className="text-zinc-400 font-sans">Defender rolls D6 per wound. Modify roll by attacking weapon’s Rend (e.g. Save 3+ against Rend -1 requires a 4+).</span>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5">
              <span className="text-amber-400 font-bold">4. WARD ROLL: </span>
              <span className="text-zinc-400 font-sans">If the target has a Ward (e.g. 5+ or 6+), roll D6 per allocated point of damage. On success, negate the damage point.</span>
            </div>
          </div>
        </div>

        {/* Turn Phase Order */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-cinzel text-sm font-bold">
            <RefreshCw className="h-4 w-4" />
            <span>Turn Phase Sequence</span>
          </div>

          <div className="space-y-2 text-xs text-zinc-400">
            <div className="flex items-center justify-between border-b border-zinc-800/80 py-1.5">
              <span className="font-semibold text-zinc-200">1. Hero Phase</span>
              <span>Cast spells, chant prayers, issue Rally / Inspiring commands</span>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-800/80 py-1.5">
              <span className="font-semibold text-zinc-200">2. Movement Phase</span>
              <span>Normal moves, Runs (+D6" or flat 6"), Retreats, Redeploy reaction</span>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-800/80 py-1.5">
              <span className="font-semibold text-zinc-200">3. Shooting Phase</span>
              <span>Missile attacks in range. Unleash Hell reaction on charges</span>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-800/80 py-1.5">
              <span className="font-semibold text-zinc-200">4. Charge Phase</span>
              <span>Declare charges within 12" (2D6 roll). Must finish within 0.5"</span>
            </div>
            <div className="flex items-center justify-between border-b border-zinc-800/80 py-1.5">
              <span className="font-semibold text-zinc-200">5. Combat Phase</span>
              <span>Alternate unit activations. Pile-in 3", fight with melee weapons</span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="font-semibold text-zinc-200">6. End of Turn</span>
              <span>Score Hold 1, Hold More, check Battle Tactic completion, discard</span>
            </div>
          </div>
        </div>

        {/* Universal Commands */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-cinzel text-sm font-bold">
            <Zap className="h-4 w-4" />
            <span>Universal Spearhead Commands</span>
          </div>

          <div className="space-y-2 text-xs text-zinc-400">
            <div className="rounded border border-zinc-800/80 bg-zinc-950/40 p-2">
              <span className="font-bold text-zinc-200">All-out Attack (1 CP):</span>
              <p className="mt-0.5">Combat phase. Pick 1 friendly unit to receive +1 to hit rolls until end of phase.</p>
            </div>
            <div className="rounded border border-zinc-800/80 bg-zinc-950/40 p-2">
              <span className="font-bold text-zinc-200">All-out Defence (1 CP):</span>
              <p className="mt-0.5">Combat/Shooting phase. Pick 1 targeted friendly unit to receive +1 to save rolls.</p>
            </div>
            <div className="rounded border border-zinc-800/80 bg-zinc-950/40 p-2">
              <span className="font-bold text-zinc-200">Redeploy (1 CP):</span>
              <p className="mt-0.5">Enemy Movement phase. When enemy moves within 9", move D6" (cannot end within 3").</p>
            </div>
            <div className="rounded border border-zinc-800/80 bg-zinc-950/40 p-2">
              <span className="font-bold text-zinc-200">Rally (1 CP):</span>
              <p className="mt-0.5">Hero phase. Pick friendly unit more than 3" from enemies. Roll 6 dice: 5+ heals or returns 1 model.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
