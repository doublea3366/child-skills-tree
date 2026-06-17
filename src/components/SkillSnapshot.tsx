'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChildBasics, ResponseValue, SnapshotAnswers, SnapshotResult } from '@/types/skill';
import { ageBandFromDob, ageBandLabel } from '@/lib/ageBand';
import { questionsForBand, computeSnapshotResult } from '@/lib/snapshotScoring';
import { SnapshotQuestion } from '@/components/SnapshotQuestion';
import { SnapshotResults } from '@/components/SnapshotResults';
import { Disclaimer } from '@/components/Disclaimer';

type Step = 'intro' | 'basics' | 'questions' | 'results';

type SkillSnapshotProps = {
  open: boolean;
  onClose: () => void;
  onApplyResult: (result: SnapshotResult, childName: string) => void;
};

const initialBasics: ChildBasics = {
  name: '',
  dob: '',
  prematureBy3Weeks: false,
  curiosities: '',
};

export function SkillSnapshot({ open, onClose, onApplyResult }: SkillSnapshotProps) {
  const [step, setStep] = useState<Step>('intro');
  const [basics, setBasics] = useState<ChildBasics>(initialBasics);
  const [answers, setAnswers] = useState<SnapshotAnswers>({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [result, setResult] = useState<SnapshotResult | null>(null);

  const ageBand = basics.dob ? ageBandFromDob(basics.dob, basics.prematureBy3Weeks) : null;
  const questions = useMemo(() => (ageBand ? questionsForBand(ageBand) : []), [ageBand]);

  function resetAndClose() {
    setStep('intro');
    setBasics(initialBasics);
    setAnswers({});
    setQuestionIndex(0);
    setResult(null);
    onClose();
  }

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') resetAndClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open) return null;

  function handleBasicsSubmit() {
    if (!basics.dob) return;
    setStep('questions');
    setQuestionIndex(0);
  }

  function handleAnswer(value: ResponseValue) {
    const question = questions[questionIndex];
    const nextAnswers = { ...answers, [question.id]: value };
    setAnswers(nextAnswers);

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else if (ageBand) {
      const computed = computeSnapshotResult(ageBand, nextAnswers);
      setResult(computed);
      setStep('results');
    }
  }

  function handleViewTree() {
    if (result) onApplyResult(result, basics.name);
    resetAndClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close Skill Snapshot"
        onClick={resetAndClose}
        className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Skill Snapshot"
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:max-h-[85vh] sm:max-w-lg sm:rounded-3xl sm:p-8"
      >
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-stone-100 text-stone-500 transition hover:bg-stone-200"
        >
          ✕
        </button>

        {step === 'intro' && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">Skill Snapshot</p>
            <h2 className="mt-1 font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">
              Let&rsquo;s find your child&rsquo;s starting map
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              This is not a diagnosis or a test your child can pass or fail. It creates a starting
              map based on what you&rsquo;ve noticed. You can adjust anything — you know your
              child best.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              We&rsquo;ll ask a few questions about your child&rsquo;s age and what you&rsquo;ve
              noticed them doing. It takes about three minutes.
            </p>
            <button
              type="button"
              onClick={() => setStep('basics')}
              className="mt-6 w-full rounded-full bg-stone-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-stone-800"
            >
              Get started
            </button>
            <div className="mt-4">
              <Disclaimer compact />
            </div>
          </div>
        )}

        {step === 'basics' && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">Skill Snapshot</p>
            <h2 className="mt-1 font-serif text-2xl font-semibold text-stone-900 sm:text-3xl">
              Tell us a little about your child
            </h2>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="child-name" className="text-sm font-medium text-stone-700">
                  Child&rsquo;s nickname or name
                </label>
                <input
                  id="child-name"
                  type="text"
                  value={basics.name}
                  onChange={(e) => setBasics({ ...basics, name: e.target.value })}
                  placeholder="Optional"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
                />
              </div>
              <div>
                <label htmlFor="child-dob" className="text-sm font-medium text-stone-700">
                  Date of birth
                </label>
                <input
                  id="child-dob"
                  type="date"
                  required
                  value={basics.dob}
                  max={new Date().toISOString().slice(0, 10)}
                  onChange={(e) => setBasics({ ...basics, dob: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
                />
              </div>
              <label className="flex items-center gap-2.5 text-sm text-stone-700">
                <input
                  type="checkbox"
                  checked={basics.prematureBy3Weeks}
                  onChange={(e) => setBasics({ ...basics, prematureBy3Weeks: e.target.checked })}
                  className="h-4 w-4 rounded border-stone-300 text-stone-800 focus:ring-stone-400"
                />
                Born more than 3 weeks early
              </label>
              <div>
                <label htmlFor="child-curiosities" className="text-sm font-medium text-stone-700">
                  Anything you&rsquo;re curious or wondering about? (optional)
                </label>
                <textarea
                  id="child-curiosities"
                  value={basics.curiosities}
                  onChange={(e) => setBasics({ ...basics, curiosities: e.target.value })}
                  rows={2}
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 text-sm focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleBasicsSubmit}
              disabled={!basics.dob}
              className="mt-6 w-full rounded-full bg-stone-900 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
            {ageBand && (
              <p className="mt-3 text-center text-xs text-stone-400">
                We&rsquo;ll ask questions suited to {ageBandLabel(ageBand)}.
              </p>
            )}
          </div>
        )}

        {step === 'questions' && questions[questionIndex] && (
          <SnapshotQuestion
            question={questions[questionIndex]}
            index={questionIndex}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        )}

        {step === 'results' && result && (
          <SnapshotResults childName={basics.name} result={result} onViewTree={handleViewTree} />
        )}
      </div>
    </div>
  );
}
