import React from 'react';
import { MatchState } from '../types/spearhead';
import { X, Trophy, History, Trash2, Calendar } from 'lucide-react';
import { SPEARHEAD_FACTIONS } from '../data/spearheadData';

interface MatchHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  matches: MatchState[];
  onClearHistory: () => void;
}

export const MatchHistoryModal: React.FC<MatchHistoryModalProps> = ({
  isOpen,
  onClose,
  matches,
  onClearHistory
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <div className="flex items-center gap-2">
            <History className="h-5 w-5 text-amber-400" />
            <h2 className="font-cinzel text-lg font-bold text-zinc-100">Spearhead Battle Records</h2>
          </div>
          <button onClick={onClose} className="rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {matches.length === 0 ? (
            <div className="text-center py-12 text-zinc-500">
              <Trophy className="h-10 w-10 mx-auto mb-2 opacity-30 text-amber-400" />
              <p className="text-sm font-medium">No recorded battle matches yet.</p>
              <p className="text-xs text-zinc-600 mt-1">Completed Spearhead matches will appear here automatically.</p>
            </div>
          ) : (
            <>
              <div className="flex justify-end">
                <button
                  onClick={onClearHistory}
                  className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Clear All Battle Logs</span>
                </button>
              </div>

              <div className="space-y-3">
                {matches.map(m => {
                  const p1Faction = SPEARHEAD_FACTIONS.find(f => f.id === m.p1.factionId);
                  const p2Faction = SPEARHEAD_FACTIONS.find(f => f.id === m.p2.factionId);
                  const p1Won = m.p1.score > m.p2.score;
                  const isDraw = m.p1.score === m.p2.score;

                  return (
                    <div
                      key={m.id}
                      className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 space-y-3"
                    >
                      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800/80 pb-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                          <span>{new Date(m.date).toLocaleDateString()}</span>
                          <span>·</span>
                          <span className="font-semibold text-amber-400">{m.realm}</span>
                        </div>
                        <span className="font-mono text-[11px] text-zinc-500">
                          {m.isFinished ? '4 Rounds Complete' : `Round ${m.round}`}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 items-center">
                        <div className={`p-2.5 rounded-lg border ${p1Won ? 'border-amber-500/50 bg-amber-950/20' : 'border-zinc-800/80'}`}>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-zinc-100">{m.p1.name}</span>
                            <span className="font-mono text-base font-bold text-blue-400">{m.p1.score} VP</span>
                          </div>
                          <span className="text-[11px] text-zinc-400">{p1Faction?.name || 'Order'}</span>
                        </div>

                        <div className={`p-2.5 rounded-lg border ${!p1Won && !isDraw ? 'border-amber-500/50 bg-amber-950/20' : 'border-zinc-800/80'}`}>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-zinc-100">{m.p2.name}</span>
                            <span className="font-mono text-base font-bold text-rose-400">{m.p2.score} VP</span>
                          </div>
                          <span className="text-[11px] text-zinc-400">{p2Faction?.name || 'Chaos'}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
