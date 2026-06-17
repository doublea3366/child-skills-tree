'use client';

import { branches } from '@/data/branches';
import { SnapshotResult } from '@/types/skill';
import { Disclaimer } from '@/components/Disclaimer';

const summaryStyles: Record<string, string> = {
  'Likely discovered': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Emerging: 'bg-sky-50 text-sky-700 border-sky-200',
  'Ready to practice': 'bg-amber-50 text-amber-700 border-amber-200',
  'Worth observing': 'bg-rose-50 text-rose-600 border-rose-200',
};

type SnapshotResultsProps = {
  childName: string;
  result: SnapshotResult;
  onViewTree: () => void;
};

export function SnapshotResults({ childName, result, onViewTree }: SnapshotResultsProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
        {childName ? `${childName}'s` : "Your child's"} starting map
      </p>
      <h3 className="mt-1 font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">
        Here&rsquo;s where the map begins
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">
        This is a starting point, not a score. You can adjust anything as you explore the tree —
        you know your child best.
      </p>

      <div className="mt-6 space-y-2.5">
        {branches.map((branch) => {
          const summary = result.branchSummaries[branch.id];
          return (
            <div
              key={branch.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-3"
            >
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: branch.color }}
                />
                <span className="text-sm font-semibold text-stone-800">{branch.name}</span>
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

      <div className="mt-6 rounded-2xl bg-stone-50 p-4">
        <Disclaimer compact />
      </div>

      <button
        type="button"
        onClick={onViewTree}
        className="mt-6 w-full rounded-full bg-stone-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-stone-800"
      >
        View your personalized tree
      </button>
    </div>
  );
}
