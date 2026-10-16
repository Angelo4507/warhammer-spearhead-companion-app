import React from 'react';
import { ObjectiveState } from '../types/spearhead';
import { Shield, Flag, CheckCircle } from 'lucide-react';
import realmBoardImage from '../assets/images/spearhead_realm_board_1791480643015.jpg';

interface BoardMapProps {
  objectives: {
    A: ObjectiveState;
    B: ObjectiveState;
    C: ObjectiveState;
    D: ObjectiveState;
  };
  onObjectiveChange: (obj: 'A' | 'B' | 'C' | 'D', nextState: ObjectiveState) => void;
  p1Name: string;
  p2Name: string;
  realm: 'Aqshy' | 'Ghyran';
}

const OBJECTIVE_INFO = {
  A: { name: 'Objective 1: Sunshard Beacon', loc: 'Left Flank (Territory 1)' },
  B: { name: 'Objective 2: Moonglow Spire', loc: 'Top Neutral (Territory 2)' },
  C: { name: 'Objective 3: Earthcore Obelisk', loc: 'Bottom Neutral (Territory 3)' },
  D: { name: 'Objective 4: Void Shard', loc: 'Right Flank (Territory 4)' }
};

export const BoardMap: React.FC<BoardMapProps> = ({
  objectives,
  onObjectiveChange,
  p1Name,
  p2Name,
  realm
}) => {
  const cycleState = (current: ObjectiveState): ObjectiveState => {
    if (current === 'NONE') return 'P1';
    if (current === 'P1') return 'P2';
    if (current === 'P2') return 'CONTESTED';
    return 'NONE';
  };

  const p1Count = Object.values(objectives).filter(s => s === 'P1').length;
  const p2Count = Object.values(objectives).filter(s => s === 'P2').length;

  const p1Hold1 = p1Count >= 1;
  const p1HoldMore = p1Count > p2Count && p1Count > 0;

  const p2Hold1 = p2Count >= 1;
  const p2HoldMore = p2Count > p1Count && p2Count > 0;

  const getObjectiveBadge = (state: ObjectiveState) => {
    switch (state) {
      case 'P1':
        return { label: p1Name, bg: 'bg-blue-900/80 border-blue-400 text-blue-200' };
      case 'P2':
        return { label: p2Name, bg: 'bg-rose-900/80 border-rose-400 text-rose-200' };
      case 'CONTESTED':
        return { label: 'Contested', bg: 'bg-amber-900/80 border-amber-400 text-amber-200' };
      default:
        return { label: 'Unclaimed', bg: 'bg-zinc-900/80 border-zinc-700 text-zinc-400' };
    }
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 overflow-hidden shadow-lg">
      <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 px-4 py-3 bg-zinc-950/40">
        <div className="flex items-center gap-2">
          <Flag className="h-4 w-4 text-amber-400" />
          <h3 className="font-cinzel text-sm font-bold text-zinc-200">
            Spearhead Battle Board ({realm === 'Aqshy' ? 'Realm of Fire' : 'Realm of Life'})
          </h3>
        </div>
        <div className="text-xs text-zinc-400">
          Click an objective node to cycle control
        </div>
      </div>

      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-zinc-950">
        <img
          src={realmBoardImage}
          alt="Spearhead Tactical Battlefield"
          className="h-full w-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

        {/* Objective Node 1 / A (Top-Left) */}
        <div className="absolute left-[18%] top-[22%] -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={() => onObjectiveChange('A', cycleState(objectives.A))}
            className={`group flex flex-col items-center p-2 rounded-xl border backdrop-blur-md transition-all transform hover:scale-105 ${
              objectives.A === 'P1'
                ? 'border-blue-400 bg-blue-950/80 shadow-[0_0_15px_rgba(96,165,250,0.5)]'
                : objectives.A === 'P2'
                ? 'border-rose-400 bg-rose-950/80 shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                : objectives.A === 'CONTESTED'
                ? 'border-amber-400 bg-amber-950/80 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                : 'border-zinc-700 bg-zinc-900/80'
            }`}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full font-cinzel font-bold text-sm bg-zinc-950/80 border border-zinc-600 text-amber-400">
              1
            </div>
            <span className="mt-1 text-[11px] font-semibold tracking-wide px-2 py-0.5 rounded border ${getObjectiveBadge(objectives.A).bg}">
              {getObjectiveBadge(objectives.A).label}
            </span>
          </button>
        </div>

        {/* Objective Node 2 / B (Top-Right) */}
        <div className="absolute right-[20%] top-[20%] translate-x-1/2 -translate-y-1/2">
          <button
            onClick={() => onObjectiveChange('B', cycleState(objectives.B))}
            className={`group flex flex-col items-center p-2 rounded-xl border backdrop-blur-md transition-all transform hover:scale-105 ${
              objectives.B === 'P1'
                ? 'border-blue-400 bg-blue-950/80 shadow-[0_0_15px_rgba(96,165,250,0.5)]'
                : objectives.B === 'P2'
                ? 'border-rose-400 bg-rose-950/80 shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                : objectives.B === 'CONTESTED'
                ? 'border-amber-400 bg-amber-950/80 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                : 'border-zinc-700 bg-zinc-900/80'
            }`}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full font-cinzel font-bold text-sm bg-zinc-950/80 border border-zinc-600 text-sky-400">
              2
            </div>
            <span className="mt-1 text-[11px] font-semibold tracking-wide px-2 py-0.5 rounded border ${getObjectiveBadge(objectives.B).bg}">
              {getObjectiveBadge(objectives.B).label}
            </span>
          </button>
        </div>

        {/* Objective Node 3 / C (Bottom-Left) */}
        <div className="absolute left-[20%] bottom-[20%] -translate-x-1/2 translate-y-1/2">
          <button
            onClick={() => onObjectiveChange('C', cycleState(objectives.C))}
            className={`group flex flex-col items-center p-2 rounded-xl border backdrop-blur-md transition-all transform hover:scale-105 ${
              objectives.C === 'P1'
                ? 'border-blue-400 bg-blue-950/80 shadow-[0_0_15px_rgba(96,165,250,0.5)]'
                : objectives.C === 'P2'
                ? 'border-rose-400 bg-rose-950/80 shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                : objectives.C === 'CONTESTED'
                ? 'border-amber-400 bg-amber-950/80 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                : 'border-zinc-700 bg-zinc-900/80'
            }`}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full font-cinzel font-bold text-sm bg-zinc-950/80 border border-zinc-600 text-emerald-400">
              3
            </div>
            <span className="mt-1 text-[11px] font-semibold tracking-wide px-2 py-0.5 rounded border ${getObjectiveBadge(objectives.C).bg}">
              {getObjectiveBadge(objectives.C).label}
            </span>
          </button>
        </div>

        {/* Objective Node 4 / D (Bottom-Right) */}
        <div className="absolute right-[18%] bottom-[22%] translate-x-1/2 translate-y-1/2">
          <button
            onClick={() => onObjectiveChange('D', cycleState(objectives.D))}
            className={`group flex flex-col items-center p-2 rounded-xl border backdrop-blur-md transition-all transform hover:scale-105 ${
              objectives.D === 'P1'
                ? 'border-blue-400 bg-blue-950/80 shadow-[0_0_15px_rgba(96,165,250,0.5)]'
                : objectives.D === 'P2'
                ? 'border-rose-400 bg-rose-950/80 shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                : objectives.D === 'CONTESTED'
                ? 'border-amber-400 bg-amber-950/80 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                : 'border-zinc-700 bg-zinc-900/80'
            }`}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full font-cinzel font-bold text-sm bg-zinc-950/80 border border-zinc-600 text-purple-400">
              4
            </div>
            <span className="mt-1 text-[11px] font-semibold tracking-wide px-2 py-0.5 rounded border ${getObjectiveBadge(objectives.D).bg}">
              {getObjectiveBadge(objectives.D).label}
            </span>
          </button>
        </div>
      </div>

      {/* Control Summary & VP Projections */}
      <div className="grid grid-cols-2 divide-x divide-zinc-800 bg-zinc-950/70 p-3 text-xs">
        <div className="pr-3 space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-blue-400">{p1Name} Control:</span>
            <span className="font-mono font-bold text-zinc-100">{p1Count} / 4</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-zinc-400">
            <span className={p1Hold1 ? 'text-emerald-400 flex items-center gap-1 font-medium' : 'text-zinc-600'}>
              <CheckCircle className="h-3 w-3" /> Hold 1 (+1 VP)
            </span>
            <span className={p1HoldMore ? 'text-emerald-400 flex items-center gap-1 font-medium' : 'text-zinc-600'}>
              <CheckCircle className="h-3 w-3" /> Hold More (+1 VP)
            </span>
          </div>
        </div>

        <div className="pl-3 space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-rose-400">{p2Name} Control:</span>
            <span className="font-mono font-bold text-zinc-100">{p2Count} / 4</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-zinc-400">
            <span className={p2Hold1 ? 'text-emerald-400 flex items-center gap-1 font-medium' : 'text-zinc-600'}>
              <CheckCircle className="h-3 w-3" /> Hold 1 (+1 VP)
            </span>
            <span className={p2HoldMore ? 'text-emerald-400 flex items-center gap-1 font-medium' : 'text-zinc-600'}>
              <CheckCircle className="h-3 w-3" /> Hold More (+1 VP)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
