'use client';

import { Branch, SkillNode as SkillNodeType } from '@/types/skill';
import { TalentNode } from '@/components/TalentNode';
import { Connectors } from '@/components/Connectors';
import { skillsBySubBranch } from '@/lib/skillFilters';

type BranchTreeViewProps = {
  branch: Branch;
  skills: SkillNodeType[];
  onOpenSkill: (skill: SkillNodeType) => void;
  onBack: () => void;
};

const HUB_X = 50;
const HUB_Y = 14;
const RADIUS_X_STEP = 6;
const RADIUS_X_BASE = 21;
const RADIUS_Y_STEP = 14;
const RADIUS_Y_BASE = 20;

export function BranchTreeView({ branch, skills, onOpenSkill, onBack }: BranchTreeViewProps) {
  const grouped = skillsBySubBranch(skills, branch.id);
  const subBranchIds = Object.keys(grouped);
  const n = subBranchIds.length;

  type Positioned = { skill: SkillNodeType; x: number; y: number };
  const spokes: Positioned[][] = subBranchIds.map((subId, s) => {
    const angleDeg = n === 1 ? 0 : -58 + (116 * s) / (n - 1);
    const angleRad = (angleDeg * Math.PI) / 180;
    return grouped[subId].map((skill, d) => {
      const radiusX = RADIUS_X_BASE + d * RADIUS_X_STEP;
      const radiusY = RADIUS_Y_BASE + d * RADIUS_Y_STEP;
      return {
        skill,
        x: HUB_X + radiusX * Math.sin(angleRad),
        y: HUB_Y + radiusY * Math.cos(angleRad),
      };
    });
  });

  const lines: { x1: number; y1: number; x2: number; y2: number; color: string }[] = [];
  spokes.forEach((spoke) => {
    spoke.forEach((node, i) => {
      const prev = i === 0 ? { x: HUB_X, y: HUB_Y } : spoke[i - 1];
      lines.push({ x1: prev.x, y1: prev.y, x2: node.x, y2: node.y, color: branch.color });
    });
  });

  return (
    <>
      <div
        className="relative hidden aspect-[16/11] w-full overflow-hidden rounded-[2rem] sm:block"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${branch.color}33 0%, #15141c 55%, #0d0c11 100%)`,
          boxShadow: 'inset 0 0 80px rgba(0,0,0,0.5)',
        }}
      >
        <div aria-hidden className="absolute inset-0 game-grid-overlay opacity-[0.06]" />

        <button
          type="button"
          onClick={onBack}
          className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur transition hover:bg-white/20"
        >
          ← Back to overview
        </button>

        <Connectors lines={lines} />

        <div
          className="absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
          style={{ left: `${HUB_X}%`, top: `${HUB_Y}%` }}
        >
          <span
            aria-hidden
            className="flex h-16 w-16 items-center justify-center rounded-full text-2xl sm:h-20 sm:w-20"
            style={{
              backgroundColor: 'rgba(20,20,28,0.85)',
              border: `2px solid ${branch.color}`,
              boxShadow: `0 0 16px 3px ${branch.color}66`,
            }}
          >
            {branch.icon}
          </span>
          <span className="mt-2 text-xs font-semibold text-white/90">{branch.name}</span>
        </div>

        {spokes.flat().map(({ skill, x, y }) => (
          <TalentNode key={skill.id} skill={skill} branch={branch} x={x} y={y} onOpen={onOpenSkill} />
        ))}
      </div>

      <div
        className="rounded-[2rem] p-4 sm:hidden"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${branch.color}33 0%, #15141c 55%, #0d0c11 100%)`,
          boxShadow: 'inset 0 0 80px rgba(0,0,0,0.5)',
        }}
      >
        <button
          type="button"
          onClick={onBack}
          className="mb-4 flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 transition active:bg-white/20"
        >
          ← Back to overview
        </button>
        <div className="mb-4 flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-12 w-12 items-center justify-center rounded-full text-xl"
            style={{
              backgroundColor: 'rgba(20,20,28,0.85)',
              border: `2px solid ${branch.color}`,
            }}
          >
            {branch.icon}
          </span>
          <span className="text-base font-semibold text-white/90">{branch.name}</span>
        </div>
        <div className="flex flex-col gap-5">
          {subBranchIds.map((subId) => {
            const subName = branch.subBranches.find((sb) => sb.id === subId)?.name ?? subId;
            return (
              <div key={subId}>
                <h3 className="mb-2.5 text-[11px] font-semibold uppercase tracking-wide text-white/50">
                  {subName}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {grouped[subId].map((skill) => (
                    <TalentNode key={skill.id} skill={skill} branch={branch} layout="flow" onOpen={onOpenSkill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
