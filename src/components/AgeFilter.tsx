'use client';

import { AgeBandId } from '@/types/skill';
import { ageBands } from '@/lib/ageBand';

type AgeFilterProps = {
  value: AgeBandId | 'all';
  onChange: (value: AgeBandId | 'all') => void;
};

export function AgeFilter({ value, onChange }: AgeFilterProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor="age-filter" className="text-xs font-medium uppercase tracking-wide text-stone-500">
        Age range
      </label>
      <select
        id="age-filter"
        value={value}
        onChange={(e) => onChange(e.target.value as AgeBandId | 'all')}
        className="min-w-[10rem] rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-300"
      >
        <option value="all">All ages</option>
        {ageBands.map((band) => (
          <option key={band.id} value={band.id}>
            {band.label}
          </option>
        ))}
      </select>
    </div>
  );
}
