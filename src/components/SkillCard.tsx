import { Branch, SkillNode as SkillNodeType } from '@/types/skill';
import { statusMeta } from '@/lib/statusMeta';

type SkillCardProps = {
  skill: SkillNodeType;
  branch: Branch;
};

export function SkillCard({ skill, branch }: SkillCardProps) {
  const status = skill.status ? statusMeta[skill.status] : null;

  return (
    <div
      role="tooltip"
      className="w-72 rounded-3xl border border-[var(--panel-border)] bg-[#1a1822] p-4 text-left shadow-xl shadow-black/40"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm"
            style={{ backgroundColor: branch.colorSoft }}
          >
            {branch.icon}
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: branch.color }}>
              {branch.name}
            </p>
            <h4 className="mt-0.5 font-serif text-base font-semibold leading-snug text-white/90">
              {skill.title}
            </h4>
          </div>
        </div>
        {status && (
          <span
            className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium ${status.className}`}
          >
            {status.icon} {status.label}
          </span>
        )}
      </div>
      {skill.developmentalTerm && (
        <p className="mt-1 text-xs italic text-white/30">{skill.developmentalTerm}</p>
      )}
      <p className="mt-1 text-xs font-medium text-white/40">{skill.ageRange}</p>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{skill.whatItIs}</p>
      <p className="mt-2 text-sm leading-relaxed text-white/60">
        <span className="font-semibold text-white/80">Why it matters: </span>
        {skill.whyItMatters}
      </p>
      {skill.activities[0] && (
        <p className="mt-2 rounded-xl bg-white/[0.05] p-2 text-sm leading-relaxed text-white/60">
          <span className="font-semibold text-white/80">Try this: </span>
          {skill.activities[0]}
        </p>
      )}
      <p className="mt-3 text-xs font-medium text-white/30">Tap for more detail</p>
    </div>
  );
}
