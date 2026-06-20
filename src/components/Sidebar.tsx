'use client';

import { AgeBandId, BranchId, SkillNode, SnapshotResult } from '@/types/skill';
import { ageBands } from '@/lib/ageBand';
import { branches } from '@/data/branches';
import { nodeVisualState } from '@/lib/statusMeta';

type SidebarProps = {
  skills: SkillNode[];
  childName: string;
  ageBand: AgeBandId | 'all';
  domain: BranchId | 'all';
  onAgeChange: (value: AgeBandId | 'all') => void;
  onDomainChange: (value: BranchId | 'all') => void;
  snapshotResult: SnapshotResult | null;
  onStartSnapshot: () => void;
};

export function Sidebar({
  skills,
  childName,
  ageBand,
  domain,
  onAgeChange,
  onDomainChange,
  snapshotResult,
  onStartSnapshot,
}: SidebarProps) {
  return (
    <aside className="hidden w-60 shrink-0 flex-col gap-6 py-8 lg:flex">
      <div className="sticky top-24 flex flex-col gap-6">
        <div className="game-panel rounded-2xl p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-white/40">Child</p>
          <div className="mt-2 flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-[#1a1610]"
              style={{ backgroundColor: 'var(--gold)' }}
            >
              {childName ? childName.charAt(0).toUpperCase() : '🌱'}
            </span>
            <p className="text-sm font-semibold text-white/90">{childName || 'Your child'}</p>
          </div>
          <button
            type="button"
            onClick={onStartSnapshot}
            className="mt-3 w-full rounded-full border border-[var(--panel-border)] bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/70 transition hover:border-white/30"
          >
            {snapshotResult ? 'Update Skill Snapshot' : 'Take Skill Snapshot'}
          </button>
        </div>

        <div className="game-panel rounded-2xl p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-white/40">Child age</p>
          <div className="mt-2 flex flex-col gap-1.5">
            <label className="flex items-center gap-2 text-sm text-white/60">
              <input
                type="radio"
                name="sidebar-age"
                checked={ageBand === 'all'}
                onChange={() => onAgeChange('all')}
                className="h-3.5 w-3.5 accent-[var(--gold)]"
              />
              All ages
            </label>
            {ageBands.map((band) => (
              <label key={band.id} className="flex items-center gap-2 text-sm text-white/60">
                <input
                  type="radio"
                  name="sidebar-age"
                  checked={ageBand === band.id}
                  onChange={() => onAgeChange(band.id)}
                  className="h-3.5 w-3.5 accent-[var(--gold)]"
                />
                {band.label}
              </label>
            ))}
          </div>
        </div>

        <div className="game-panel rounded-2xl p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-white/40">Domain</p>
          <div className="mt-2 flex flex-col gap-1.5">
            <label className="flex items-center gap-2 text-sm text-white/60">
              <input
                type="radio"
                name="sidebar-domain"
                checked={domain === 'all'}
                onChange={() => onDomainChange('all')}
                className="h-3.5 w-3.5 accent-[var(--gold)]"
              />
              All domains
            </label>
            {branches.map((branch) => (
              <label key={branch.id} className="flex items-center gap-2 text-sm text-white/60">
                <input
                  type="radio"
                  name="sidebar-domain"
                  checked={domain === branch.id}
                  onChange={() => onDomainChange(branch.id)}
                  className="h-3.5 w-3.5 accent-[var(--gold)]"
                />
                <span aria-hidden>{branch.icon}</span>
                {branch.name}
              </label>
            ))}
          </div>
        </div>

        <div className="game-panel rounded-2xl p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-white/40">Progress indicators</p>
          {!snapshotResult ? (
            <p className="mt-2 text-xs leading-relaxed text-white/40">
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
      </div>
    </aside>
  );
}
