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
      <span className="text-xs font-medium uppercase tracking-wide text-white/40">Domain</span>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by developmental domain">
        <button
          type="button"
          onClick={() => onChange('all')}
          aria-pressed={value === 'all'}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
            value === 'all'
              ? 'border-[var(--gold)] bg-[var(--gold)] text-[#1a1610]'
              : 'border-[var(--panel-border)] bg-white/[0.04] text-white/60 hover:border-white/30'
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
                  ? { backgroundColor: branch.color, borderColor: branch.color, color: '#1a1610' }
                  : { borderColor: 'var(--panel-border)' }
              }
              className="rounded-full border bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-white/60 transition hover:opacity-90"
            >
              {branch.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
