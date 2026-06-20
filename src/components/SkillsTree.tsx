'use client';

import { branches, branchMap } from '@/data/branches';
import { AgeBandId, BranchId, SkillNode as SkillNodeType, SnapshotResult } from '@/types/skill';
import { filterSkills } from '@/lib/skillFilters';
import { TreeOverview } from '@/components/TreeOverview';
import { BranchTreeView } from '@/components/BranchTreeView';

type SkillsTreeProps = {
  skills: SkillNodeType[];
  ageBand: AgeBandId | 'all';
  domain: BranchId | 'all';
  snapshotResult: SnapshotResult | null;
  onOpenSkill: (skill: SkillNodeType) => void;
  onStartSnapshot: () => void;
  onDomainChange: (value: BranchId | 'all') => void;
};

export function SkillsTree({
  skills,
  ageBand,
  domain,
  snapshotResult,
  onOpenSkill,
  onStartSnapshot,
  onDomainChange,
}: SkillsTreeProps) {
  const filtered = filterSkills(skills, { branch: domain, ageBand });
  const withStatus = filtered.map((skill) => ({
    ...skill,
    status: snapshotResult?.nodeStatuses[skill.id] ?? skill.status,
  }));

  const activeBranch = domain !== 'all' ? branchMap[domain] : null;

  return (
    <div id="tree" className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10 text-center">
        <h2 className="font-serif text-3xl font-semibold text-white/95 sm:text-4xl">
          The Skills Tree
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/50">
          Explore seven developmental branches, from movement and hands to feelings and daily
          life. Click a branch to expand it, then tap any skill to see what it means for your
          child.
        </p>
      </div>

      <div className="game-panel mx-auto mb-10 max-w-sm rounded-3xl p-5 text-center">
        <span aria-hidden className="text-2xl">
          🌱
        </span>
        <p className="mt-1 font-serif text-lg font-semibold text-white/90">
          Start with a quick skill check
        </p>
        <p className="mt-1 text-sm leading-relaxed text-white/50">
          Answer a few gentle questions about what you&rsquo;ve noticed, and we&rsquo;ll personalize
          this map to your child&rsquo;s own pace.
        </p>
        <button
          type="button"
          onClick={onStartSnapshot}
          className="mt-3 rounded-full bg-[var(--gold)] px-5 py-2 text-sm font-semibold text-[#1a1610] transition hover:brightness-110"
        >
          Begin skill check
        </button>
      </div>

      {withStatus.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-[var(--panel-border)] bg-white/[0.02] p-10 text-center text-white/40">
          No skills match the current filters. Try resetting the age range or domain.
        </div>
      ) : activeBranch ? (
        <BranchTreeView
          branch={activeBranch}
          skills={withStatus}
          onOpenSkill={onOpenSkill}
          onBack={() => onDomainChange('all')}
        />
      ) : (
        <TreeOverview
          branches={branches}
          skills={withStatus}
          branchSummaries={snapshotResult?.branchSummaries}
          onSelectBranch={onDomainChange}
        />
      )}
    </div>
  );
}
