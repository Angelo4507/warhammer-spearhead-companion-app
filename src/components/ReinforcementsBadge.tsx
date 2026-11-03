import React from 'react';
import { RotateCcw } from 'lucide-react';
import { SpearheadUnit } from '../types/spearhead';

export function isUnitReinforceable(unit: SpearheadUnit | null | undefined): boolean {
  if (!unit) return false;
  return Boolean(
    unit.isReinforcement ||
    unit.reinforcementNote ||
    unit.keywords?.some(k => k.toUpperCase().includes('REINFORCE'))
  );
}

interface ReinforcementsBadgeProps {
  unit?: SpearheadUnit;
  variant?: 'badge' | 'icon' | 'banner' | 'pill';
  className?: string;
  showTooltip?: boolean;
}

export const ReinforcementsBadge: React.FC<ReinforcementsBadgeProps> = ({
  unit,
  variant = 'badge',
  className = '',
  showTooltip = true
}) => {
  const tooltipText = "Reinforcements: When destroyed, this unit can be called back to the battlefield.";

  if (variant === 'icon') {
    return (
      <span
        title={showTooltip ? tooltipText : undefined}
        className={`inline-flex items-center justify-center h-5 w-5 rounded-full bg-rose-950/90 border border-rose-500/80 text-rose-300 shadow-sm shrink-0 ${className}`}
      >
        <RotateCcw className="h-2.5 w-2.5 text-rose-300 stroke-[2.5]" />
      </span>
    );
  }

  if (variant === 'pill') {
    return (
      <span
        title={showTooltip ? tooltipText : undefined}
        className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-rose-950/80 border border-rose-600/70 text-rose-300 text-[10px] font-bold tracking-wide shadow-sm uppercase shrink-0 ${className}`}
      >
        <RotateCcw className="h-2.5 w-2.5 text-rose-400 stroke-[2.5]" />
        <span>Reinforce</span>
      </span>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={`flex items-start gap-3 rounded-lg border border-rose-900/70 bg-gradient-to-r from-rose-950/40 to-zinc-950/60 p-3 text-xs text-rose-200 ${className}`}>
        <div className="p-1.5 rounded-full bg-rose-900/80 border border-rose-500/80 text-rose-300 shrink-0 mt-0.5 shadow-sm">
          <RotateCcw className="h-4 w-4 stroke-[2.5]" />
        </div>
        <div className="space-y-1">
          <div className="font-bold text-rose-300 flex items-center gap-2 uppercase tracking-wider text-[11px] font-cinzel">
            <span>Reinforcements Unit</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-rose-900/60 text-rose-200">
              Spearhead Rule
            </span>
          </div>
          <p className="text-zinc-300 text-xs leading-relaxed font-sans">
            This unit possesses the <strong className="text-rose-300 font-semibold">Reinforcements</strong> ability. When completely destroyed (slain), it does not leave the match permanently—it can be recalled to the battlefield at full strength via the Spearhead Reinforcements command or army ability.
          </p>
          {unit?.reinforcementNote && (
            <p className="text-[11px] text-amber-400 font-mono">
              Note: {unit.reinforcementNote}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Default 'badge'
  return (
    <span
      title={showTooltip ? tooltipText : undefined}
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-rose-950/90 border border-rose-500/80 text-rose-300 text-[10px] font-bold tracking-wide shadow-sm uppercase shrink-0 ${className}`}
    >
      <RotateCcw className="h-3 w-3 text-rose-400 stroke-[2.5]" />
      <span>Reinforcements</span>
    </span>
  );
};
