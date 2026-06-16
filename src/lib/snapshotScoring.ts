import { snapshotQuestions } from '@/data/snapshotQuestions';
import { skills } from '@/data/skills';
import {
  AgeBandId,
  BranchId,
  BranchStatusSummary,
  ResponseValue,
  SkillStatus,
  SnapshotAnswers,
  SnapshotQuestion,
  SnapshotResult,
} from '@/types/skill';
import { ageBandIndex } from '@/lib/ageBand';

export const responseScore: Record<ResponseValue, number | null> = {
  notYet: 0,
  sometimes: 1,
  often: 2,
  confidently: 3,
  notSure: null,
};

const WINDOW_BEFORE = 2;
const WINDOW_AFTER = 1;

export function questionsForBand(band: AgeBandId): SnapshotQuestion[] {
  const idx = ageBandIndex(band);
  return snapshotQuestions.filter((q) => {
    const qIdx = ageBandIndex(q.ageBand);
    return qIdx >= idx - WINDOW_BEFORE && qIdx <= idx + WINDOW_AFTER;
  });
}

export function questionsForBandByBranch(band: AgeBandId): Record<BranchId, SnapshotQuestion[]> {
  const grouped = {} as Record<BranchId, SnapshotQuestion[]>;
  for (const q of questionsForBand(band)) {
    if (!grouped[q.branch]) grouped[q.branch] = [];
    grouped[q.branch].push(q);
  }
  return grouped;
}

function branchStatusFromAverage(average: number | undefined): BranchStatusSummary {
  if (average === undefined) return 'Emerging';
  if (average >= 2.5) return 'Likely discovered';
  if (average >= 1.5) return 'Emerging';
  if (average >= 0.75) return 'Ready to practice';
  return 'Worth observing';
}

export function computeSnapshotResult(ageBand: AgeBandId, answers: SnapshotAnswers): SnapshotResult {
  const bandIdx = ageBandIndex(ageBand);

  const branchTotals: Record<string, { sum: number; count: number }> = {};
  for (const q of snapshotQuestions) {
    const resp = answers[q.id];
    if (!resp) continue;
    const score = responseScore[resp];
    if (score === null || score === undefined) continue;
    if (!branchTotals[q.branch]) branchTotals[q.branch] = { sum: 0, count: 0 };
    branchTotals[q.branch].sum += score;
    branchTotals[q.branch].count += 1;
  }

  const branchSummaries = {} as Record<BranchId, BranchStatusSummary>;
  const branchIds: BranchId[] = ['movement', 'hands', 'language', 'thinking', 'people', 'feelings', 'dailyLife'];
  for (const id of branchIds) {
    const totals = branchTotals[id];
    const average = totals && totals.count > 0 ? totals.sum / totals.count : undefined;
    branchSummaries[id] = branchStatusFromAverage(average);
  }

  const nodeStatuses: Record<string, SkillStatus> = {};
  for (const skill of skills) {
    const skillBandIdx = ageBandIndex(skill.ageBand);
    const diff = bandIdx - skillBandIdx;
    const resp = answers[skill.id];

    if (resp) {
      const score = responseScore[resp];
      if (score === 3 || score === 2) {
        nodeStatuses[skill.id] = diff >= 2 ? 'discovered' : 'growing';
      } else if (score === 1) {
        nodeStatuses[skill.id] = 'emerging';
      } else if (score === 0) {
        nodeStatuses[skill.id] = diff >= 2 ? 'watch' : diff < 0 ? 'later' : 'ready';
      } else {
        nodeStatuses[skill.id] = diff >= 2 ? 'watch' : 'emerging';
      }
      continue;
    }

    if (diff > 0) nodeStatuses[skill.id] = 'discovered';
    else if (diff === 0) nodeStatuses[skill.id] = 'emerging';
    else if (diff === -1) nodeStatuses[skill.id] = 'ready';
    else nodeStatuses[skill.id] = 'later';
  }

  return { branchSummaries, nodeStatuses };
}
