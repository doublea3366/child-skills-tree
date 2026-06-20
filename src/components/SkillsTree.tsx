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
  onDomainChange: (value: BranchId | 'all') => void;
};

export function SkillsTree({
  skills,
  ageBand,
  domain,
  snapshotResult,
  onOpenSkill,
  onDomainChange,
}: SkillsTreeProps) {
  const filtered = filterSkills(skills, { branch: domain, ageBand });
  const withStatus = filtered.map((skill) => ({
    ...skill,
    status: snapshotResult?.nodeStatuses[skill.id] ?? skill.status,
  }));

  const activeBranch = domain !== 'all' ? branchMap[domain] : null;

  return (
    <div id="tree" className="relative">
      {withStatus.length === 0 ? (
        <div className="flex min-h-[60vh] items-center justify-center px-6 text-center text-white/40">
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
