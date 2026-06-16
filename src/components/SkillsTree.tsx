'use client';

import { branches } from '@/data/branches';
import { AgeBandId, BranchId, SkillNode as SkillNodeType, SnapshotResult } from '@/types/skill';
import { filterSkills } from '@/lib/skillFilters';
import { BranchSection } from '@/components/BranchSection';

type SkillsTreeProps = {
  skills: SkillNodeType[];
  ageBand: AgeBandId | 'all';
  domain: BranchId | 'all';
  snapshotResult: SnapshotResult | null;
  onOpenSkill: (skill: SkillNodeType) => void;
};

export function SkillsTree({ skills, ageBand, domain, snapshotResult, onOpenSkill }: SkillsTreeProps) {
  const filtered = filterSkills(skills, { branch: domain, ageBand });
  const withStatus = filtered.map((skill) => ({
    ...skill,
    status: snapshotResult?.nodeStatuses[skill.id] ?? skill.status,
  }));

  const visibleBranches = branches.filter((b) => withStatus.some((s) => s.branch === b.id));

  return (
    <div id="tree" className="relative mx-auto max-w-5xl px-6 py-12">
      <div
        aria-hidden
        className="absolute bottom-8 left-[2.4rem] top-8 hidden w-px bg-gradient-to-b from-stone-300 via-stone-200 to-transparent sm:block"
      />
      <div className="mb-10 text-center">
        <h2 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">
          The Skills Tree
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-stone-600">
          Scroll through seven developmental branches, from movement and hands to feelings and
          daily life. Tap any skill to see what it means for your child.
        </p>
      </div>

      {visibleBranches.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-10 text-center text-stone-500">
          No skills match the current filters. Try resetting the age range or domain.
        </div>
      ) : (
        <div className="relative flex flex-col gap-8 sm:pl-16">
          {visibleBranches.map((branch) => (
            <div key={branch.id} className="relative">
              <span
                aria-hidden
                className="absolute -left-[2.85rem] top-7 hidden h-4 w-4 rounded-full border-2 border-white sm:block"
                style={{ backgroundColor: branch.color }}
              />
              <BranchSection
                branch={branch}
                skills={withStatus.filter((s) => s.branch === branch.id)}
                summary={snapshotResult?.branchSummaries[branch.id]}
                onOpenSkill={onOpenSkill}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
