'use client';

import { ResponseValue, SnapshotQuestion as SnapshotQuestionType } from '@/types/skill';
import { branchMap } from '@/data/branches';

const options: { value: ResponseValue; label: string }[] = [
  { value: 'notYet', label: 'Not yet' },
  { value: 'sometimes', label: 'Sometimes' },
  { value: 'often', label: 'Often' },
  { value: 'confidently', label: 'Yes, confidently' },
  { value: 'notSure', label: "I'm not sure" },
];

type SnapshotQuestionProps = {
  question: SnapshotQuestionType;
  index: number;
  total: number;
  onAnswer: (value: ResponseValue) => void;
};

export function SnapshotQuestion({ question, index, total, onAnswer }: SnapshotQuestionProps) {
  const branch = branchMap[question.branch];

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: branch.color }}>
          {branch.name}
        </span>
        <span className="text-xs font-medium text-white/30">
          {index + 1} of {total}
        </span>
      </div>
      <div className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full bg-[var(--gold)] transition-all"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>
      <h3 className="font-serif text-xl font-semibold leading-snug text-white/95 sm:text-2xl">
        {question.prompt}
      </h3>
      <div className="mt-6 grid gap-2.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onAnswer(opt.value)}
            className="rounded-2xl border border-[var(--panel-border)] bg-white/[0.04] px-5 py-3.5 text-left text-sm font-medium text-white/70 transition hover:border-white/30 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-white/10"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
