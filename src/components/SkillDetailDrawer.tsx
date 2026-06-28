'use client';

import { useEffect } from 'react';
import { Branch, SkillNode as SkillNodeType } from '@/types/skill';
import { statusMeta } from '@/lib/statusMeta';

type SkillDetailDrawerProps = {
  skill: SkillNodeType | null;
  branch: Branch | null;
  onClose: () => void;
};

export function SkillDetailDrawer({ skill, branch, onClose }: SkillDetailDrawerProps) {
  useEffect(() => {
    if (!skill) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [skill, onClose]);

  if (!skill || !branch) return null;
  const status = skill.status ? statusMeta[skill.status] : null;
  const [firstActivity, ...moreActivities] = skill.activities;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close skill detail"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="skill-detail-title"
        className="relative z-10 max-h-[88vh] w-full overflow-y-auto rounded-t-3xl border border-[var(--panel-border)] bg-[#15141c] p-6 shadow-2xl shadow-black/50 motion-safe:animate-[slideUp_0.25s_ease-out] sm:max-h-[85vh] sm:max-w-lg sm:rounded-3xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-white/50 transition hover:bg-white/[0.12]"
        >
          ✕
        </button>

        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg"
            style={{ backgroundColor: branch.colorSoft }}
          >
            {branch.icon}
          </span>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: branch.color }}>
            {branch.name} · {branch.subBranches.find((sb) => sb.id === skill.subBranch)?.name}
          </p>
        </div>
        <h2 id="skill-detail-title" className="mt-3 font-serif text-2xl font-semibold text-white/95 sm:text-3xl">
          {skill.title}
        </h2>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {skill.developmentalTerm && (
            <span className="text-sm italic text-white/30">{skill.developmentalTerm}</span>
          )}
          <span className="text-sm font-medium text-white/40">{skill.ageRange}</span>
          {status && (
            <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${status.className}`}>
              {status.icon} {status.label}
            </span>
          )}
        </div>

        <Section title="What it means" text={skill.whatItIs} />
        <Section title="Why it matters" text={skill.whyItMatters} />
        <Section title="What this helps your child discover" text={skill.worldItOpens} />

        {firstActivity && (
          <div className="mt-4 rounded-2xl bg-white/[0.05] p-4">
            <h3 className="text-sm font-semibold text-white/80">A suggested activity</h3>
            <p className="mt-1 text-sm leading-relaxed text-white/60">{firstActivity}</p>
          </div>
        )}
        <ListSection title="More ideas to try" items={moreActivities} />
        {skill.catchUpActivities && skill.catchUpActivities.length > 0 && (
          <div className="mt-4 rounded-2xl border border-[var(--gold)]/20 bg-[var(--gold)]/[0.06] p-4">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>
              If the age window has passed
            </h3>
            <ul className="mt-1.5 space-y-1.5">
              {skill.catchUpActivities.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-white/60">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: 'var(--gold)', opacity: 0.6 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <ListSection title="Watch for" items={skill.watchFor} />
        <ListSection title="Unlocks next" items={skill.unlocks} />

        {skill.parentGuidance && <Section title="Parent guidance" text={skill.parentGuidance} />}
        {skill.safetyNotes && (
          <div className="mt-4 rounded-2xl border border-amber-400/25 bg-amber-400/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">Safety note</p>
            <p className="mt-1 text-sm leading-relaxed text-amber-200/90">{skill.safetyNotes}</p>
          </div>
        )}

        <p className="mt-6 text-xs leading-relaxed text-white/30">
          Many children practice this differently and on their own timeline. This is a map, not a
          test.
        </p>
      </div>
    </div>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-white/60">{text}</p>
    </div>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      <ul className="mt-1.5 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-white/60">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
