import { AgeBandId } from '@/types/skill';

export const ageBands: { id: AgeBandId; label: string; months: [number, number] }[] = [
  { id: '0-3m', label: '0–3 months', months: [0, 3] },
  { id: '4-6m', label: '4–6 months', months: [4, 6] },
  { id: '7-9m', label: '7–9 months', months: [7, 9] },
  { id: '10-12m', label: '10–12 months', months: [10, 12] },
  { id: '13-18m', label: '13–18 months', months: [13, 18] },
  { id: '19-24m', label: '19–24 months', months: [19, 24] },
  { id: '2-3y', label: '2–3 years', months: [25, 36] },
  { id: '3-4y', label: '3–4 years', months: [37, 48] },
  { id: '4-5y', label: '4–5 years', months: [49, 60] },
];

export const ageBandOrder: AgeBandId[] = ageBands.map((b) => b.id);

export function ageBandIndex(band: AgeBandId): number {
  return ageBandOrder.indexOf(band);
}

export function monthsBetween(dob: Date, now: Date = new Date()): number {
  let months = (now.getFullYear() - dob.getFullYear()) * 12 + (now.getMonth() - dob.getMonth());
  if (now.getDate() < dob.getDate()) months -= 1;
  return Math.max(0, months);
}

export function ageBandFromMonths(totalMonths: number): AgeBandId {
  for (const band of ageBands) {
    const [min, max] = band.months;
    if (totalMonths >= min && totalMonths <= max) return band.id;
  }
  return totalMonths > 60 ? '4-5y' : '0-3m';
}

export function ageBandFromDob(dob: string, prematureBy3Weeks = false): AgeBandId {
  const dobDate = new Date(dob);
  let months = monthsBetween(dobDate);
  if (prematureBy3Weeks) {
    months = Math.max(0, months - 1);
  }
  return ageBandFromMonths(months);
}

export function ageBandLabel(band: AgeBandId): string {
  return ageBands.find((b) => b.id === band)?.label ?? band;
}
