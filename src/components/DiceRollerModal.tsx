import React, { useState } from 'react';
import { X, RotateCcw, Dices } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

interface DiceRollerModalProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled: boolean;
}

export const DiceRollerModal: React.FC<DiceRollerModalProps> = ({
  isOpen,
  onClose,
  soundEnabled,
}) => {
  const [numDice, setNumDice] = useState<number>(6);
  const [target, setTarget] = useState<number>(3);
  const [diceResults, setDiceResults] = useState<number[]>([3, 4, 1, 6, 5, 2]);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [modifier, setModifier] = useState<number>(0); // +1 or -1

  if (!isOpen) return null;

  const handleRoll = () => {
    if (soundEnabled) playSound('diceRoll');
    setIsRolling(true);
    setTimeout(() => {
      const rolls: number[] = [];
      for (let i = 0; i < numDice; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
      }
      setDiceResults(rolls);
      setIsRolling(false);
    }, 150);
  };

  const handleRerollOnes = () => {
    if (soundEnabled) playSound('diceRoll');
    setDiceResults(prev =>
      prev.map(d => (d === 1 ? Math.floor(Math.random() * 6) + 1 : d))
    );
  };

  const handleRerollMisses = () => {
    if (soundEnabled) playSound('diceRoll');
    setDiceResults(prev =>
      prev.map(d => {
        const modified = Math.max(1, Math.min(6, d + modifier));
        return modified < target ? Math.floor(Math.random() * 6) + 1 : d;
      })
    );
  };

  const successes = diceResults.filter(d => {
    const finalVal = Math.max(1, Math.min(6, d + modifier));
    return finalVal >= target;
  }).length;

  const crits = diceResults.filter(d => d === 6).length;
  const ones = diceResults.filter(d => d === 1).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <div className="flex items-center gap-2">
            <Dices className="h-5 w-5 text-amber-400" />
            <h2 className="font-cinzel text-lg font-bold text-zinc-100">Tactical Dice Roller</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Controls */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Number of Dice: <span className="text-amber-400 font-mono">{numDice}</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={numDice}
                  onChange={e => setNumDice(parseInt(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
              <div className="flex gap-1.5 mt-2">
                {[1, 3, 5, 10, 20].map(n => (
                  <button
                    key={n}
                    onClick={() => setNumDice(n)}
                    className={`px-2 py-1 text-xs rounded border transition-colors ${
                      numDice === n
                        ? 'border-amber-500/60 bg-amber-500/20 text-amber-300'
                        : 'border-zinc-800 bg-zinc-800/60 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Target Roll: <span className="text-amber-400 font-mono">{target}+</span>
              </label>
              <div className="grid grid-cols-5 gap-1">
                {[2, 3, 4, 5, 6].map(t => (
                  <button
                    key={t}
                    onClick={() => setTarget(t)}
                    className={`py-1.5 text-xs font-bold rounded border transition-colors ${
                      target === t
                        ? 'border-amber-500 bg-amber-500 text-zinc-950 font-bold'
                        : 'border-zinc-800 bg-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {t}+
                  </button>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Modifier:</span>
                <div className="flex items-center gap-1 font-mono">
                  <button
                    onClick={() => setModifier(m => Math.max(-2, m - 1))}
                    className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  >
                    -1
                  </button>
                  <span className="w-8 text-center font-bold text-amber-400">
                    {modifier > 0 ? `+${modifier}` : modifier}
                  </span>
                  <button
                    onClick={() => setModifier(m => Math.min(2, m + 1))}
                    className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  >
                    +1
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Roll Button */}
          <button
            onClick={handleRoll}
            disabled={isRolling}
            className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
          >
            <Dices className="h-5 w-5" />
            <span>ROLL {numDice} DICE</span>
          </button>

          {/* Results Display */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-3">
              <div className="flex items-center gap-4 text-xs font-mono">
                <div>
                  <span className="text-zinc-500">Successes: </span>
                  <span className="text-emerald-400 font-bold text-base">{successes}</span>
                </div>
                <div>
                  <span className="text-zinc-500">Natural 6s: </span>
                  <span className="text-amber-400 font-bold text-base">{crits}</span>
                </div>
                <div>
                  <span className="text-zinc-500">Natural 1s: </span>
                  <span className="text-rose-400 font-bold text-base">{ones}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleRerollOnes}
                  disabled={ones === 0}
                  className="px-2 py-1 text-xs rounded border border-zinc-800 bg-zinc-800 text-zinc-300 hover:text-white disabled:opacity-40 transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reroll 1s</span>
                </button>
                <button
                  onClick={handleRerollMisses}
                  className="px-2 py-1 text-xs rounded border border-zinc-800 bg-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reroll Misses</span>
                </button>
              </div>
            </div>

            {/* Visual Dice Grid */}
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-1">
              {diceResults.map((val, idx) => {
                const finalVal = Math.max(1, Math.min(6, val + modifier));
                const isSuccess = finalVal >= target;
                const isCrit = val === 6;
                const isFumble = val === 1;

                let borderClass = 'border-zinc-700 bg-zinc-800 text-zinc-300';
                if (isCrit) {
                  borderClass = 'border-amber-400 bg-amber-500/20 text-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.2)]';
                } else if (isSuccess) {
                  borderClass = 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300';
                } else if (isFumble) {
                  borderClass = 'border-rose-500/60 bg-rose-500/10 text-rose-300';
                }

                return (
                  <div
                    key={idx}
                    className={`h-9 w-9 rounded-lg border flex items-center justify-center font-mono font-bold text-base ${borderClass} transition-transform ${
                      isRolling ? 'scale-90 opacity-50' : 'scale-100'
                    }`}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
