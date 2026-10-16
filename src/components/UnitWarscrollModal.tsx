import React from 'react';
import { SpearheadUnit } from '../types/spearhead';
import { X, Shield, Heart, Zap, Crosshair, Sword } from 'lucide-react';

interface UnitWarscrollModalProps {
  unit: SpearheadUnit | null;
  currentHealth?: number;
  onClose: () => void;
  onModifyHealth?: (delta: number) => void;
}

export const UnitWarscrollModal: React.FC<UnitWarscrollModalProps> = ({
  unit,
  currentHealth,
  onClose,
  onModifyHealth,
}) => {
  if (!unit) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-6 py-4 backdrop-blur-md">
          <div>
            <div className="text-[11px] font-semibold text-amber-400 tracking-wider uppercase">
              Warscroll Reference · {unit.role}
            </div>
            <h2 className="font-cinzel text-xl font-bold text-zinc-100">{unit.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Key Characteristics Bar */}
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 text-center">
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5">
              <span className="block text-[10px] uppercase font-semibold text-zinc-500">Move</span>
              <span className="font-mono text-lg font-bold text-amber-400">{unit.move}</span>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5">
              <span className="block text-[10px] uppercase font-semibold text-zinc-500">Health</span>
              <span className="font-mono text-lg font-bold text-emerald-400">{unit.health}</span>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5">
              <span className="block text-[10px] uppercase font-semibold text-zinc-500">Save</span>
              <span className="font-mono text-lg font-bold text-sky-400">{unit.save}</span>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5">
              <span className="block text-[10px] uppercase font-semibold text-zinc-500">Control</span>
              <span className="font-mono text-lg font-bold text-indigo-400">{unit.control}</span>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-2.5 col-span-2 sm:col-span-2">
              <span className="block text-[10px] uppercase font-semibold text-zinc-500">Base / Count</span>
              <span className="font-mono text-xs font-medium text-zinc-300">
                {unit.baseSize} · {unit.modelCount} Models
              </span>
            </div>
          </div>

          {/* Quick In-Combat Health Allocator */}
          {currentHealth !== undefined && onModifyHealth && (
            <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/80 p-3">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-rose-500" />
                <span className="text-xs font-semibold text-zinc-300">Combat Health:</span>
                <span className="font-mono text-sm font-bold text-zinc-100">
                  {currentHealth} / {unit.health} HP
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onModifyHealth(-1)}
                  disabled={currentHealth <= 0}
                  className="h-8 w-8 rounded bg-zinc-800 text-rose-400 font-bold hover:bg-zinc-700 disabled:opacity-40"
                >
                  -1
                </button>
                <button
                  onClick={() => onModifyHealth(1)}
                  disabled={currentHealth >= unit.health}
                  className="h-8 w-8 rounded bg-zinc-800 text-emerald-400 font-bold hover:bg-zinc-700 disabled:opacity-40"
                >
                  +1
                </button>
              </div>
            </div>
          )}

          {/* Weapons Profiles */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sword className="h-4 w-4 text-amber-400" />
              <h3 className="font-cinzel text-sm font-bold text-zinc-200">Weapons Profiles</h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-zinc-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-950 text-zinc-400 font-semibold border-b border-zinc-800">
                  <tr>
                    <th className="px-3 py-2">Weapon</th>
                    <th className="px-2 py-2">Type</th>
                    <th className="px-2 py-2">Rng</th>
                    <th className="px-2 py-2">Atk</th>
                    <th className="px-2 py-2">Hit</th>
                    <th className="px-2 py-2">Wnd</th>
                    <th className="px-2 py-2">Rnd</th>
                    <th className="px-2 py-2">Dmg</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 font-mono text-zinc-200">
                  {unit.weapons.map((w, i) => (
                    <tr key={i} className="hover:bg-zinc-800/30">
                      <td className="px-3 py-2 font-sans font-medium text-zinc-100">
                        {w.name}
                        {w.ability && (
                          <div className="text-[10px] text-amber-400 font-sans">{w.ability}</div>
                        )}
                      </td>
                      <td className="px-2 py-2 text-zinc-400">{w.type}</td>
                      <td className="px-2 py-2">{w.range}</td>
                      <td className="px-2 py-2">{w.attacks}</td>
                      <td className="px-2 py-2 text-emerald-400">{w.toHit}</td>
                      <td className="px-2 py-2 text-amber-400">{w.toWound}</td>
                      <td className="px-2 py-2 text-rose-400">{w.rend}</td>
                      <td className="px-2 py-2 font-bold">{w.damage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Unit Abilities */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-amber-400" />
              <h3 className="font-cinzel text-sm font-bold text-zinc-200">Abilities</h3>
            </div>
            <div className="space-y-3">
              {unit.abilities.map((ab, i) => (
                <div key={i} className="rounded-lg border border-zinc-800/80 bg-zinc-950/40 p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-zinc-100 text-xs">{ab.name}</span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-amber-400">
                      {ab.phase} Phase · {ab.type}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">{ab.effect}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Keywords */}
          <div>
            <span className="block text-[10px] uppercase font-semibold text-zinc-500 mb-1.5">
              Keywords
            </span>
            <div className="text-xs text-zinc-400">
              {unit.keywords.join(' · ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
