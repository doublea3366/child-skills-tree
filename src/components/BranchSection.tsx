'use client';

import { useState } from 'react';
import { Branch, SkillNode as SkillNodeType } from '@/types/skill';
import { SkillNode } from '@/components/SkillNode';
import { skillsBySubBranch } from '@/lib/skillFilters';
import { BranchStatusSummary } from '@/types/skill';

type BranchSectionProps = {
  branch: Branch;
  skills: SkillNodeType[];
  summary?: BranchStatusSummary;
  defaultExpanded?: boolean;
  onOpenSkill: (skill: SkillNodeType) => void;
};

export function BranchSection({
  branch,
  skills,
  summary,
  defaultExpanded = true,
  onOpenSkill,
}: BranchSectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const grouped = skillsBySubBranch(skills, branch.id);
  const subBranchIds = Object.keys(grouped);

  if (skills.length === 0) return null;

  return (
    <section
      id={`branch-${branch.id}`}
      className="relative rounded-3xl border p-5 sm:p-7"
      style={{ borderColor: branch.colorBorder, backgroundColor: branch.colorSoft }}
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={`branch-${branch.id}-content`}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <div>
          <h2 className="font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">{branch.name}</h2>
          <p className="mt-1 text-sm leading-relaxed text-stone-600 sm:text-base">{branch.meaning}</p>
          {summary && (
            <span className="mt-2 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-stone-700">
              {summary}
            </span>
          )}
        </div>
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg font-medium text-stone-700 transition-transform"
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ⌄
        </span>
      </button>

      {expanded && (
        <div id={`branch-${branch.id}-content`} className="mt-6 space-y-6">
          {subBranchIds.map((subId) => {
            const subName = branch.subBranches.find((sb) => sb.id === subId)?.name ?? subId;
            return (
              <div key={subId}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-stone-500">
                  {subName}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {grouped[subId].map((skill) => (
                    <SkillNode key={skill.id} skill={skill} branch={branch} onOpen={onOpenSkill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
