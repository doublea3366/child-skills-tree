'use client';

import { useState } from 'react';
import { Branch, SkillNode as SkillNodeType } from '@/types/skill';
import { SkillCard } from '@/components/SkillCard';
import { statusMeta } from '@/lib/statusMeta';

type SkillNodeProps = {
  skill: SkillNodeType;
  branch: Branch;
  onOpen: (skill: SkillNodeType) => void;
};

export function SkillNode({ skill, branch, onOpen }: SkillNodeProps) {
  const [showPreview, setShowPreview] = useState(false);
  const status = skill.status ? statusMeta[skill.status] : null;
  const nodeStyle = {
    borderColor: branch.colorBorder,
    '--tw-ring-color': branch.color,
  } as React.CSSProperties;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => onOpen(skill)}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        onFocus={() => setShowPreview(true)}
        onBlur={() => setShowPreview(false)}
        aria-describedby={`${skill.id}-status`}
        className="group flex w-full min-h-[3.25rem] items-start gap-3 rounded-2xl border bg-white px-4 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={nodeStyle}
      >
        <span
          aria-hidden
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: branch.color }}
        >
          {skill.title.charAt(0)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-sm font-semibold text-stone-800">{skill.title}</span>
            {status && (
              <span
                id={`${skill.id}-status`}
                className={`shrink-0 rounded-full border px-2 py-0.5 text-[11px] font-medium ${status.className}`}
              >
                {status.icon} {status.label}
              </span>
            )}
          </span>
          <span className="mt-0.5 block text-xs text-stone-500">{skill.ageRange}</span>
        </span>
      </button>
      {showPreview && (
        <div className="absolute left-0 top-full z-40 mt-2 hidden md:block">
          <SkillCard skill={skill} branch={branch} />
        </div>
      )}
    </div>
  );
}
