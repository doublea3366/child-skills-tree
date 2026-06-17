export type BranchId =
  | 'movement'
  | 'hands'
  | 'language'
  | 'thinking'
  | 'people'
  | 'feelings'
  | 'dailyLife';

export type AgeBandId =
  | '0-3m'
  | '4-6m'
  | '7-9m'
  | '10-12m'
  | '13-18m'
  | '19-24m'
  | '2-3y'
  | '3-4y'
  | '4-5y';

export type SkillStatus =
  | 'later'
  | 'ready'
  | 'emerging'
  | 'discovered'
  | 'growing'
  | 'watch';

export type Branch = {
  id: BranchId;
  name: string;
  tagline: string;
  meaning: string;
  color: string;
  colorSoft: string;
  colorBorder: string;
  subBranches: { id: string; name: string }[];
};

export type SkillNode = {
  id: string;
  branch: BranchId;
  subBranch: string;
  title: string;
  developmentalTerm?: string;
  ageRange: string;
  ageBand: AgeBandId;
  status?: SkillStatus;
  whatItIs: string;
  whyItMatters: string;
  worldItOpens: string;
  activities: string[];
  watchFor: string[];
  unlocks: string[];
  parentGuidance?: string;
  safetyNotes?: string;
  relatedSkills?: string[];
  tags?: string[];
};

export type BranchStatusSummary =
  | 'Likely discovered'
  | 'Emerging'
  | 'Ready to practice'
  | 'Worth observing';

export type ResponseValue = 'notYet' | 'sometimes' | 'often' | 'confidently' | 'notSure';

export type SnapshotQuestion = {
  id: string;
  branch: BranchId;
  ageBand: AgeBandId;
  prompt: string;
};

export type SnapshotAnswers = Record<string, ResponseValue>;

export type ChildBasics = {
  name: string;
  dob: string;
  prematureBy3Weeks: boolean;
  curiosities?: string;
};

export type SnapshotResult = {
  branchSummaries: Record<BranchId, BranchStatusSummary>;
  nodeStatuses: Record<string, SkillStatus>;
};
