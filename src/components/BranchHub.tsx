'use client';

import { Branch, BranchStatusSummary } from '@/types/skill';

type BranchHubProps = {
  branch: Branch;
  x: number;
  y: number;
  progressPct: number;
  summary?: BranchStatusSummary;
  onSelect: (branchId: Branch['id']) => void;
};

const RADIUS = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function BranchHub({ branch, x, y, progressPct, summary, onSelect }: BranchHubProps) {
  const offset = CIRCUMFERENCE - (progressPct / 100) * CIRCUMFERENCE;

  return (
    <div
      className="pointer-events-none absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:w-28"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <button
        type="button"
        onClick={() => onSelect(branch.id)}
        aria-label={`Open ${branch.name} branch`}
        className="pointer-events-auto relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#13131c] sm:h-24 sm:w-24"
        style={{ '--tw-ring-color': branch.color } as React.CSSProperties}
      >
        <svg viewBox="0 0 64 64" className="pointer-events-none absolute h-full w-full -rotate-90">
          <circle cx={32} cy={32} r={RADIUS} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={4} />
          <circle
            cx={32}
            cy={32}
            r={RADIUS}
            fill="none"
            stroke={branch.color}
            strokeWidth={4}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            style={{ filter: `drop-shadow(0 0 6px ${branch.color})` }}
          />
        </svg>
        <span
          className="flex h-14 w-14 items-center justify-center rounded-full text-2xl shadow-inner sm:h-16 sm:w-16"
          style={{ backgroundColor: 'rgba(20,20,28,0.85)', border: `1px solid ${branch.color}` }}
        >
          {branch.icon}
        </span>
      </button>
      <span className="mt-2 text-xs font-semibold leading-tight text-white/90">{branch.name}</span>
      {summary && <span className="mt-0.5 text-[10px] text-white/50">{summary}</span>}
    </div>
  );
}
