'use client';

import { branches } from '@/data/branches';
import { SnapshotResult } from '@/types/skill';
import { Disclaimer } from '@/components/Disclaimer';

const summaryStyles: Record<string, string> = {
  'Likely discovered': 'bg-emerald-400/10 text-emerald-300 border-emerald-400/25',
  Emerging: 'bg-sky-400/10 text-sky-300 border-sky-400/25',
  'Ready to practice': 'bg-amber-400/10 text-amber-300 border-amber-400/25',
  'Worth observing': 'bg-rose-400/10 text-rose-300 border-rose-400/25',
};

type SnapshotResultsProps = {
  childName: string;
  result: SnapshotResult;
  onViewTree: () => void;
};

export function SnapshotResults({ childName, result, onViewTree }: SnapshotResultsProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
        {childName ? `${childName}'s` : "Your child's"} starting map
      </p>
      <h3 className="mt-1 font-serif text-2xl font-semibold text-white/95 sm:text-3xl">
        Here&rsquo;s where the map begins
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">
        This is a starting point, not a score. You can adjust anything as you explore the tree —
        you know your child best.
      </p>

      <div className="mt-6 space-y-2.5">
        {branches.map((branch) => {
          const summary = result.branchSummaries[branch.id];
          return (
            <div
              key={branch.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--panel-border)] bg-white/[0.04] px-4 py-3"
            >
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: branch.color }}
                />
                <span className="text-sm font-semibold text-white/80">{branch.name}</span>
              </div>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium ${summaryStyles[summary]}`}
              >
                {summary}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl bg-white/[0.04] p-4">
        <Disclaimer compact />
      </div>

      <button
        type="button"
        onClick={onViewTree}
        className="mt-6 w-full rounded-full bg-[var(--gold)] px-6 py-3.5 text-base font-semibold text-[#1a1610] transition hover:brightness-110"
      >
        View your personalized tree
      </button>
    </div>
  );
}
