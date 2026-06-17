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
        <div className="rounded-2xl bg-[#fdf9f0] p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400">Child</p>
          <div className="mt-2 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
              {childName ? childName.charAt(0).toUpperCase() : '🌱'}
            </span>
            <p className="text-sm font-semibold text-stone-800">{childName || 'Your child'}</p>
          </div>
          <button
            type="button"
            onClick={onStartSnapshot}
            className="mt-3 w-full rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-700 transition hover:border-stone-400"
          >
            {snapshotResult ? 'Update Skill Snapshot' : 'Take Skill Snapshot'}
          </button>
        </div>

        <div className="rounded-2xl bg-[#fdf9f0] p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400">Child age</p>
          <div className="mt-2 flex flex-col gap-1.5">
            <label className="flex items-center gap-2 text-sm text-stone-600">
              <input
                type="radio"
                name="sidebar-age"
                checked={ageBand === 'all'}
                onChange={() => onAgeChange('all')}
                className="h-3.5 w-3.5 text-stone-800"
              />
              All ages
            </label>
            {ageBands.map((band) => (
              <label key={band.id} className="flex items-center gap-2 text-sm text-stone-600">
                <input
                  type="radio"
                  name="sidebar-age"
                  checked={ageBand === band.id}
                  onChange={() => onAgeChange(band.id)}
                  className="h-3.5 w-3.5 text-stone-800"
                />
                {band.label}
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#fdf9f0] p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400">Domain</p>
          <div className="mt-2 flex flex-col gap-1.5">
            <label className="flex items-center gap-2 text-sm text-stone-600">
              <input
                type="radio"
                name="sidebar-domain"
                checked={domain === 'all'}
                onChange={() => onDomainChange('all')}
                className="h-3.5 w-3.5 text-stone-800"
              />
              All domains
            </label>
            {branches.map((branch) => (
              <label key={branch.id} className="flex items-center gap-2 text-sm text-stone-600">
                <input
                  type="radio"
                  name="sidebar-domain"
                  checked={domain === branch.id}
                  onChange={() => onDomainChange(branch.id)}
                  className="h-3.5 w-3.5 text-stone-800"
                />
                <span aria-hidden>{branch.icon}</span>
                {branch.name}
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#fdf9f0] p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-stone-400">Progress indicators</p>
          {!snapshotResult ? (
            <p className="mt-2 text-xs leading-relaxed text-stone-500">
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
                    <div className="flex items-center justify-between text-xs text-stone-600">
                      <span className="flex items-center gap-1.5">
                        <span aria-hidden>{branch.icon}</span>
                        {branch.name}
                      </span>
                      <span className="font-medium">{pct}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full rounded-full" style={{ backgroundColor: branch.colorSoft }}>
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
