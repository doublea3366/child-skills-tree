'use client';

import { BranchId } from '@/types/skill';
import { branches } from '@/data/branches';

type DomainFilterProps = {
  value: BranchId | 'all';
  onChange: (value: BranchId | 'all') => void;
};

export function DomainFilter({ value, onChange }: DomainFilterProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-stone-500">Domain</span>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by developmental domain">
        <button
          type="button"
          onClick={() => onChange('all')}
          aria-pressed={value === 'all'}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
            value === 'all'
              ? 'border-stone-900 bg-stone-900 text-white'
              : 'border-stone-300 bg-white text-stone-600 hover:border-stone-400'
          }`}
        >
          All
        </button>
        {branches.map((branch) => {
          const active = value === branch.id;
          return (
            <button
              key={branch.id}
              type="button"
              onClick={() => onChange(branch.id)}
              aria-pressed={active}
              style={
                active
                  ? { backgroundColor: branch.color, borderColor: branch.color, color: 'white' }
                  : { borderColor: branch.colorBorder }
              }
              className="rounded-full border bg-white px-3.5 py-1.5 text-sm font-medium text-stone-700 transition hover:opacity-90"
            >
              {branch.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
