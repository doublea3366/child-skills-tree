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
const TRUNK_X_BASE = 21;
const TRUNK_X_STEP = 6;
const TRUNK_Y_BASE = 20;
const TRUNK_Y_STEP = 14;
const OFFSHOOT_X_STEP = 7;
const OFFSHOOT_Y_STEP = 11;

type Positioned = { skill: SkillNodeType; x: number; y: number };
type LineDef = { x1: number; y1: number; x2: number; y2: number; color: string; secondary?: boolean };

function buildSpokeLayout(
  nodes: SkillNodeType[],
  angleRad: number,
  color: string,
): { positioned: Positioned[]; lines: LineDef[] } {
  const nodeIds = new Set(nodes.map((n) => n.id));
  const trunk = nodes.filter((n) => !n.parentSkillId || !nodeIds.has(n.parentSkillId));
  const offshoots = nodes.filter((n) => n.parentSkillId && nodeIds.has(n.parentSkillId));

  function chainFrom(parentId: string): SkillNodeType[] {
    const result: SkillNodeType[] = [];
    let curId = parentId;
    for (;;) {
      const next = offshoots.find((n) => n.parentSkillId === curId);
      if (!next) break;
      result.push(next);
      curId = next.id;
    }
    return result;
  }

  // Perpendicular direction — always points downward or sideways, never upward
  let perpX = Math.cos(angleRad);
  let perpY = -Math.sin(angleRad);
  if (perpY < 0) { perpX = -perpX; perpY = -perpY; }

  const positioned: Positioned[] = [];
  const lines: LineDef[] = [];

  const trunkPos = trunk.map((skill, d) => ({
    skill,
    x: HUB_X + (TRUNK_X_BASE + d * TRUNK_X_STEP) * Math.sin(angleRad),
    y: HUB_Y + (TRUNK_Y_BASE + d * TRUNK_Y_STEP) * Math.cos(angleRad),
  }));

  if (trunkPos.length > 0) {
    lines.push({ x1: HUB_X, y1: HUB_Y, x2: trunkPos[0].x, y2: trunkPos[0].y, color });
    for (let i = 1; i < trunkPos.length; i++) {
      lines.push({ x1: trunkPos[i - 1].x, y1: trunkPos[i - 1].y, x2: trunkPos[i].x, y2: trunkPos[i].y, color });
    }
  }
  positioned.push(...trunkPos);

  trunkPos.forEach((tp) => {
    const chainRoots = offshoots.filter((n) => n.parentSkillId === tp.skill.id);
    chainRoots.forEach((root, chainIdx) => {
      const dir_x = chainIdx % 2 === 0 ? perpX : -perpX;
      const dir_y = chainIdx % 2 === 0 ? perpY : -perpY;
      const chain = [root, ...chainFrom(root.id)];

      let prevX = tp.x;
      let prevY = tp.y;
      chain.forEach((skill, d) => {
        const x = tp.x + (d + 1) * OFFSHOOT_X_STEP * dir_x;
        const y = tp.y + (d + 1) * OFFSHOOT_Y_STEP * dir_y;
        positioned.push({ skill, x, y });
        lines.push({ x1: prevX, y1: prevY, x2: x, y2: y, color, secondary: true });
        prevX = x;
        prevY = y;
      });
    });
  });

  return { positioned, lines };
}

export function BranchTreeView({ branch, skills, onOpenSkill, onBack }: BranchTreeViewProps) {
  const grouped = skillsBySubBranch(skills, branch.id);
  const subBranchIds = Object.keys(grouped);
  const n = subBranchIds.length;

  const allPositioned: Positioned[] = [];
  const allLines: LineDef[] = [];

  subBranchIds.forEach((subId, s) => {
    const angleDeg = n === 1 ? 0 : -58 + (116 * s) / (n - 1);
    const angleRad = (angleDeg * Math.PI) / 180;
    const { positioned, lines } = buildSpokeLayout(grouped[subId], angleRad, branch.color);
    allPositioned.push(...positioned);
    allLines.push(...lines);
  });

  return (
    <>
      <div
        className="relative hidden h-[78vh] min-h-[560px] w-full overflow-hidden sm:block"
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

        <Connectors lines={allLines} />

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

        {allPositioned.map(({ skill, x, y }) => (
          <TalentNode key={skill.id} skill={skill} branch={branch} x={x} y={y} onOpen={onOpenSkill} />
        ))}
      </div>

      <div
        className="p-4 sm:hidden"
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
