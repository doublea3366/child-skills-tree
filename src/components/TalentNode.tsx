'use client';

import { useState } from 'react';
import { Branch, SkillNode as SkillNodeType } from '@/types/skill';
import { SkillCard } from '@/components/SkillCard';
import { nodeVisualState } from '@/lib/statusMeta';

type TalentNodeProps = {
  skill: SkillNodeType;
  branch: Branch;
  x?: number;
  y?: number;
  layout?: 'radial' | 'flow';
  onOpen: (skill: SkillNodeType) => void;
};

export function TalentNode({ skill, branch, x, y, layout = 'radial', onOpen }: TalentNodeProps) {
  const [showPreview, setShowPreview] = useState(false);
  const visual = skill.status ? nodeVisualState[skill.status] : 'locked';

  const circleStyle: React.CSSProperties = (() => {
    switch (visual) {
      case 'completed':
        return {
          backgroundColor: branch.color,
          borderColor: branch.color,
          boxShadow: `0 0 14px 3px ${branch.color}, 0 0 0 3px rgba(0,0,0,0.4)`,
        };
      case 'growing':
        return {
          backgroundColor: branch.color,
          borderColor: branch.color,
          opacity: 0.88,
          boxShadow: `0 0 8px 2px ${branch.color}`,
        };
      case 'inProgress':
        return {
          backgroundColor: 'rgba(20,20,28,0.85)',
          borderColor: branch.color,
          borderStyle: 'solid',
          boxShadow: `0 0 6px 1px ${branch.color}`,
        };
      case 'suggested':
        return {
          backgroundColor: 'rgba(20,20,28,0.85)',
          borderColor: branch.color,
          borderStyle: 'dashed',
        };
      default:
        return {
          backgroundColor: 'rgba(20,20,28,0.6)',
          borderColor: 'rgba(255,255,255,0.15)',
        };
    }
  })();

  const isFilled = visual === 'completed' || visual === 'growing';
  const isSuggested = visual === 'suggested';

  const wrapperClassName =
    layout === 'radial'
      ? 'pointer-events-none absolute flex w-12 -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center sm:w-16'
      : 'flex w-16 flex-col items-center text-center';
  const wrapperStyle = layout === 'radial' ? { left: `${x}%`, top: `${y}%` } : undefined;

  return (
    <div className={wrapperClassName} style={wrapperStyle}>
      <button
        type="button"
        onClick={() => onOpen(skill)}
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        onFocus={() => setShowPreview(true)}
        onBlur={() => setShowPreview(false)}
        aria-label={skill.title}
        className={`pointer-events-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 text-base transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#13131c] hover:scale-110 sm:h-12 sm:w-12 ${
          isSuggested ? 'animate-gentle-pulse' : ''
        }`}
        style={{ ...circleStyle, '--tw-ring-color': branch.color } as React.CSSProperties}
      >
        {visual === 'locked' ? (
          <span aria-hidden className="text-sm text-white/30">
            🔒
          </span>
        ) : (
          <span aria-hidden className={isFilled ? 'text-white' : ''} style={!isFilled ? { color: branch.color } : undefined}>
            {branch.icon}
          </span>
        )}
      </button>
      <span className="mt-1.5 line-clamp-2 text-[9px] font-medium leading-tight text-white/70">
        {skill.title}
      </span>
      {showPreview && (
        <div className="pointer-events-auto absolute left-1/2 top-full z-40 mt-2 hidden -translate-x-1/2 md:block">
          <SkillCard skill={skill} branch={branch} />
        </div>
      )}
    </div>
  );
}
