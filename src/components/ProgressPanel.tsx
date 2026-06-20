'use client';

import { SkillNode, SnapshotResult } from '@/types/skill';
import { branches } from '@/data/branches';
import { nodeVisualState } from '@/lib/statusMeta';

type ProgressPanelProps = {
  skills: SkillNode[];
  childName: string;
  snapshotResult: SnapshotResult | null;
  onClose: () => void;
};

export function ProgressPanel({ skills, childName, snapshotResult, onClose }: ProgressPanelProps) {
  return (
    <div className="game-panel absolute left-4 top-4 z-20 w-64 rounded-2xl p-4 shadow-2xl shadow-black/40 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-white/40">Progress</p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close progress panel"
          className="flex h-6 w-6 items-center justify-center rounded-full text-white/40 transition hover:bg-white/10 hover:text-white/80"
        >
          ✕
        </button>
      </div>

      <div className="mt-2 flex items-center gap-2.5">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-[#1a1610]"
          style={{ backgroundColor: 'var(--gold)' }}
        >
          {childName ? childName.charAt(0).toUpperCase() : '🌱'}
        </span>
        <p className="text-sm font-semibold text-white/90">{childName || 'Your child'}</p>
      </div>

      {!snapshotResult ? (
        <p className="mt-3 text-xs leading-relaxed text-white/40">
          Take the Skill Snapshot to see progress by domain.
        </p>
      ) : (
        <div className="mt-3 flex flex-col gap-3">
          {branches.map((branch) => {
            const branchSkills = skills.filter((s) => s.branch === branch.id);
            const positive = branchSkills.filter((s) => {
              const status = snapshotResult.nodeStatuses[s.id];
              return status && (nodeVisualState[status] === 'completed' || nodeVisualState[status] === 'growing');
            }).length;
            const pct = branchSkills.length ? Math.round((positive / branchSkills.length) * 100) : 0;
            return (
              <div key={branch.id}>
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span className="flex items-center gap-1.5">
                    <span aria-hidden>{branch.icon}</span>
                    {branch.name}
                  </span>
                  <span className="font-medium">{pct}%</span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-white/[0.06]">
                  <div
                    className="h-1.5 rounded-full transition-all"
                    style={{ width: `${pct}%`, backgroundColor: branch.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
