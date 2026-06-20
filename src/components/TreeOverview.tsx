'use client';

import { Branch, BranchId, BranchStatusSummary, SkillNode as SkillNodeType } from '@/types/skill';
import { BranchHub } from '@/components/BranchHub';
import { Connectors } from '@/components/Connectors';
import { nodeVisualState } from '@/lib/statusMeta';

type TreeOverviewProps = {
  branches: Branch[];
  skills: SkillNodeType[];
  branchSummaries?: Record<BranchId, BranchStatusSummary>;
  onSelectBranch: (branchId: BranchId) => void;
};

const ROOT_X = 50;
const ROOT_Y = 12;
const RADIUS_X = 40;
const RADIUS_Y = 52;

export function TreeOverview({ branches, skills, branchSummaries, onSelectBranch }: TreeOverviewProps) {
  const visibleBranches = branches.filter((b) => skills.some((s) => s.branch === b.id));
  const n = visibleBranches.length;

  const hubPositions = visibleBranches.map((branch, i) => {
    const angleDeg = n === 1 ? 0 : -62 + (124 * i) / (n - 1);
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
      branch,
      x: ROOT_X + RADIUS_X * Math.sin(angleRad),
      y: ROOT_Y + RADIUS_Y * Math.cos(angleRad),
    };
  });

  const lines = hubPositions.map(({ branch, x, y }) => ({
    x1: ROOT_X,
    y1: ROOT_Y,
    x2: x,
    y2: y,
    color: branch.color,
  }));

  return (
    <>
      <div className="relative hidden aspect-[16/10] w-full overflow-hidden rounded-[2rem] game-surface sm:block">
        <div aria-hidden className="absolute inset-0 game-grid-overlay opacity-[0.06]" />

        <Connectors lines={lines} />

        <div
          className="absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
          style={{ left: `${ROOT_X}%`, top: `${ROOT_Y}%` }}
        >
          <span
            aria-hidden
            className="flex h-16 w-16 items-center justify-center rounded-full text-3xl sm:h-20 sm:w-20"
            style={{
              background: 'radial-gradient(circle, #fdf9f0 0%, #d9c9a3 100%)',
              boxShadow: '0 0 22px 6px rgba(253,249,240,0.5)',
            }}
          >
            🌳
          </span>
          <span className="mt-2 text-xs font-semibold text-white/90">Skills Tree</span>
        </div>

        {hubPositions.map(({ branch, x, y }) => {
          const branchSkills = skills.filter((s) => s.branch === branch.id);
          const positive = branchSkills.filter(
            (s) => s.status && (nodeVisualState[s.status] === 'completed' || nodeVisualState[s.status] === 'growing')
          ).length;
          const pct = branchSkills.length ? Math.round((positive / branchSkills.length) * 100) : 0;
          return (
            <BranchHub
              key={branch.id}
              branch={branch}
              x={x}
              y={y}
              progressPct={pct}
              summary={branchSummaries?.[branch.id]}
              onSelect={onSelectBranch}
            />
          );
        })}
      </div>

      <div className="game-surface flex flex-col gap-2.5 rounded-[2rem] p-3 sm:hidden">
        {visibleBranches.map((branch) => {
          const branchSkills = skills.filter((s) => s.branch === branch.id);
          const positive = branchSkills.filter(
            (s) => s.status && (nodeVisualState[s.status] === 'completed' || nodeVisualState[s.status] === 'growing')
          ).length;
          const pct = branchSkills.length ? Math.round((positive / branchSkills.length) * 100) : 0;
          return (
            <button
              key={branch.id}
              type="button"
              onClick={() => onSelectBranch(branch.id)}
              className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 text-left transition active:bg-white/10"
            >
              <span
                aria-hidden
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xl"
                style={{ backgroundColor: 'rgba(20,20,28,0.85)', border: `1px solid ${branch.color}` }}
              >
                {branch.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-white/90">{branch.name}</span>
                {branchSummaries?.[branch.id] && (
                  <span className="block text-xs text-white/50">{branchSummaries[branch.id]}</span>
                )}
              </span>
              <span className="shrink-0 text-xs font-semibold" style={{ color: branch.color }}>
                {pct}%
              </span>
              <span aria-hidden className="shrink-0 text-white/30">
                →
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
