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
    <section id={`branch-${branch.id}`} className="relative">
      <div
        aria-hidden
        className="blob absolute -inset-3 -z-10 opacity-50 blur-2xl"
        style={{ backgroundColor: branch.color }}
      />
      <div
        className="relative rounded-[2.5rem] p-6 shadow-lg shadow-stone-900/5 sm:rounded-[3rem] sm:p-9"
        style={{
          background: `radial-gradient(circle at 18% 15%, ${branch.color} 0%, ${branch.colorSoft} 70%)`,
        }}
      >
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={`branch-${branch.id}-content`}
          className="flex w-full items-center justify-between gap-4 text-left"
        >
          <div className="flex items-start gap-3">
            <span
              aria-hidden
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/90 text-2xl shadow-sm"
            >
              {branch.icon}
            </span>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-white drop-shadow-sm sm:text-3xl">
                {branch.name}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-white/90 drop-shadow-sm sm:text-base">
                {branch.meaning}
              </p>
              {summary && (
                <span className="mt-2 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700">
                  {summary}
                </span>
              )}
            </div>
          </div>
          <span
            aria-hidden
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-lg font-medium text-stone-700 transition-transform"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            ⌄
          </span>
        </button>

        {expanded && (
          <div id={`branch-${branch.id}-content`} className="mt-7 space-y-6">
            {subBranchIds.map((subId) => {
              const subName = branch.subBranches.find((sb) => sb.id === subId)?.name ?? subId;
              return (
                <div key={subId}>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/80 drop-shadow-sm">
                    {subName}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3 sm:justify-start sm:gap-4">
                    {grouped[subId].map((skill) => (
                      <SkillNode key={skill.id} skill={skill} branch={branch} onOpen={onOpenSkill} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
