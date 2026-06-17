'use client';

import { useState } from 'react';
import { Branch, SkillNode as SkillNodeType } from '@/types/skill';
import { SkillCard } from '@/components/SkillCard';
import { statusMeta, nodeVisualState } from '@/lib/statusMeta';

type SkillNodeProps = {
  skill: SkillNodeType;
  branch: Branch;
  onOpen: (skill: SkillNodeType) => void;
};

export function SkillNode({ skill, branch, onOpen }: SkillNodeProps) {
  const [showPreview, setShowPreview] = useState(false);
  const status = skill.status ? statusMeta[skill.status] : null;
  const visual = skill.status ? nodeVisualState[skill.status] : 'locked';

  const circleStyle: React.CSSProperties = (() => {
    switch (visual) {
      case 'completed':
        return {
          backgroundColor: branch.color,
          borderColor: branch.color,
          boxShadow: `0 0 0 6px ${branch.colorSoft}`,
        };
      case 'growing':
        return {
          backgroundColor: branch.color,
          borderColor: branch.color,
          opacity: 0.85,
        };
      case 'inProgress':
        return {
          backgroundColor: branch.colorSoft,
          borderColor: branch.color,
          borderStyle: 'solid',
        };
      case 'suggested':
        return {
          backgroundColor: branch.colorSoft,
          borderColor: branch.color,
          borderStyle: 'dashed',
        };
      default:
        return {
          backgroundColor: '#f1ede3',
          borderColor: '#ddd4c2',
        };
    }
  })();

  const isFilled = visual === 'completed' || visual === 'growing';
  const isSuggested = visual === 'suggested';

  return (
    <div className="relative flex w-20 flex-col items-center text-center sm:w-24">
      <button
        type="button"
        onClick={() => onOpen(skill)}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        onFocus={() => setShowPreview(true)}
        onBlur={() => setShowPreview(false)}
        aria-describedby={`${skill.id}-status`}
        aria-label={`${skill.title}${status ? `, ${status.label}` : ''}`}
        className={`flex shrink-0 items-center justify-center rounded-full border-2 text-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2 hover:-translate-y-0.5 hover:scale-105 ${
          isSuggested ? 'h-16 w-16 animate-gentle-pulse' : 'h-14 w-14'
        }`}
        style={{ ...circleStyle, '--tw-ring-color': branch.color } as React.CSSProperties}
      >
        {visual === 'locked' ? (
          <span aria-hidden className="text-base text-stone-400">
            🔒
          </span>
        ) : (
          <span
            aria-hidden
            className={isFilled ? 'text-white' : ''}
            style={!isFilled ? { color: branch.color } : undefined}
          >
            {branch.icon}
          </span>
        )}
      </button>
      <span id={`${skill.id}-status`} className="sr-only">
        {status ? status.label : 'Not yet assessed'}
      </span>
      <span className="mt-2 line-clamp-2 text-[11px] font-medium leading-tight text-stone-600">
        {skill.title}
      </span>
      {showPreview && (
        <div className="absolute left-1/2 top-full z-40 mt-2 hidden -translate-x-1/2 md:block">
          <SkillCard skill={skill} branch={branch} />
        </div>
      )}
    </div>
  );
}
