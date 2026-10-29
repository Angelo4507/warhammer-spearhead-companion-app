import React, { useState } from 'react';
import { MatchState } from '../types/spearhead';
import { X, Trophy, History, Trash2, Calendar, AlertTriangle } from 'lucide-react';
import { SPEARHEAD_FACTIONS } from '../data/spearheadData';

interface MatchHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  matches: MatchState[];
  onClearHistory: () => void;
  onDeleteMatch: (matchId: string) => void;
}

export const MatchHistoryModal: React.FC<MatchHistoryModalProps> = ({
  isOpen,
  onClose,
  matches,
  onClearHistory,
  onDeleteMatch,
}) => {
  const [confirmClear, setConfirmClear] = useState<boolean>(false);
  const [deletingMatchId, setDeletingMatchId] = useState<string | null>(null);

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
          <button 
            onClick={() => {
              setConfirmClear(false);
              setDeletingMatchId(null);
              onClose();
            }} 
            className="rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
          >
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
              {/* Clear All Header Action with Safety Confirm */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-mono">
                  {matches.length} {matches.length === 1 ? 'match record' : 'matches recorded'}
                </span>
                {confirmClear ? (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-rose-400 font-medium">Delete all logs?</span>
                    <button
                      onClick={() => {
                        onClearHistory();
                        setConfirmClear(false);
                      }}
                      className="px-2.5 py-1 rounded bg-rose-600 hover:bg-rose-500 text-[11px] font-bold text-white transition-colors"
                    >
                      Yes, Clear All
                    </button>
                    <button
                      onClick={() => setConfirmClear(false)}
                      className="px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-[11px] text-zinc-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmClear(true)}
                    className="flex items-center gap-1.5 text-xs text-rose-400/80 hover:text-rose-300 transition-colors"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Clear All Battle Logs</span>
                  </button>
                )}
              </div>

              {/* Match List */}
              <div className="space-y-3">
                {matches.map(m => {
                  const p1Faction = SPEARHEAD_FACTIONS.find(f => f.id === m.p1.factionId);
                  const p2Faction = SPEARHEAD_FACTIONS.find(f => f.id === m.p2.factionId);
                  const p1Won = m.p1.score > m.p2.score;
                  const isDraw = m.p1.score === m.p2.score;

                  return (
                    <div
                      key={m.id}
                      className="group rounded-lg border border-zinc-800 bg-zinc-950/60 p-4 space-y-3 hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800/80 pb-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                          <span>{new Date(m.date).toLocaleDateString()}</span>
                          <span>·</span>
                          <span className="font-semibold text-amber-400">{m.realm}</span>
                          <span>·</span>
                          <span className="font-mono text-[11px] text-zinc-500">
                            {m.isFinished ? '4 Rounds Complete' : `Round ${m.round}`}
                          </span>
                        </div>

                        {/* Delete Single Match Action */}
                        {deletingMatchId === m.id ? (
                          <div className="flex items-center gap-1.5">
                            <span className="text-[11px] text-rose-400 font-medium">Delete?</span>
                            <button
                              onClick={() => {
                                onDeleteMatch(m.id);
                                setDeletingMatchId(null);
                              }}
                              className="px-2 py-0.5 rounded bg-rose-600 text-[10px] font-bold text-white hover:bg-rose-500"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeletingMatchId(null)}
                              className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300 hover:bg-zinc-700"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeletingMatchId(m.id)}
                            title="Delete this match record"
                            className="flex items-center gap-1 rounded px-2 py-1 text-zinc-500 hover:bg-rose-950/40 hover:text-rose-400 transition-colors text-xs"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline text-[11px]">Delete</span>
                          </button>
                        )}
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
