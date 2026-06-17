import { AgeBandId, BranchId, SkillNode } from '@/types/skill';
import { ageBandIndex } from '@/lib/ageBand';

export type SkillFilterOptions = {
  branch?: BranchId | 'all';
  ageBand?: AgeBandId | 'all';
};

export function filterSkills(skills: SkillNode[], options: SkillFilterOptions): SkillNode[] {
  return skills.filter((skill) => {
    if (options.branch && options.branch !== 'all' && skill.branch !== options.branch) {
      return false;
    }
    if (options.ageBand && options.ageBand !== 'all' && skill.ageBand !== options.ageBand) {
      return false;
    }
    return true;
  });
}

export function skillsByBranch(skills: SkillNode[], branch: BranchId): SkillNode[] {
  return skills
    .filter((s) => s.branch === branch)
    .sort((a, b) => ageBandIndex(a.ageBand) - ageBandIndex(b.ageBand));
}

export function skillsBySubBranch(skills: SkillNode[], branch: BranchId): Record<string, SkillNode[]> {
  const grouped: Record<string, SkillNode[]> = {};
  for (const skill of skillsByBranch(skills, branch)) {
    if (!grouped[skill.subBranch]) grouped[skill.subBranch] = [];
    grouped[skill.subBranch].push(skill);
  }
  return grouped;
}
