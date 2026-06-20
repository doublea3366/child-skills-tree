'use client';

import { AgeBandId, BranchId } from '@/types/skill';
import { AgeFilter } from '@/components/AgeFilter';
import { DomainFilter } from '@/components/DomainFilter';

type TreeNavigationProps = {
  ageBand: AgeBandId | 'all';
  domain: BranchId | 'all';
  onAgeChange: (value: AgeBandId | 'all') => void;
  onDomainChange: (value: BranchId | 'all') => void;
  onReset: () => void;
  hasSnapshot: boolean;
};

export function TreeNavigation({
  ageBand,
  domain,
  onAgeChange,
  onDomainChange,
  onReset,
  hasSnapshot,
}: TreeNavigationProps) {
  const hasActiveFilters = ageBand !== 'all' || domain !== 'all';

  return (
    <div className="sticky top-0 z-30 border-b border-[var(--panel-border)] bg-[#0d0c11]/90 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
          <AgeFilter value={ageBand} onChange={onAgeChange} />
          <DomainFilter value={domain} onChange={onDomainChange} />
        </div>
        <div className="flex items-center gap-3">
          {hasSnapshot && (
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Personalized map active
            </span>
          )}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onReset}
              className="text-sm font-medium text-white/40 underline-offset-2 hover:text-white/80 hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
