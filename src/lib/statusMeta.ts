import { SkillStatus } from '@/types/skill';

export type NodeVisualState = 'completed' | 'growing' | 'inProgress' | 'suggested' | 'locked';

export const nodeVisualState: Record<SkillStatus, NodeVisualState> = {
  discovered: 'completed',
  growing: 'growing',
  emerging: 'inProgress',
  ready: 'suggested',
  later: 'locked',
  watch: 'locked',
};

export const statusMeta: Record<SkillStatus, { label: string; icon: string; className: string }> = {
  later: {
    label: 'Later',
    icon: '·',
    className: 'bg-white/5 text-white/40 border-white/10',
  },
  ready: {
    label: 'Ready to try',
    icon: '→',
    className: 'bg-amber-400/10 text-amber-300 border-amber-400/25',
  },
  emerging: {
    label: 'Emerging',
    icon: '◐',
    className: 'bg-sky-400/10 text-sky-300 border-sky-400/25',
  },
  discovered: {
    label: 'Discovered',
    icon: '✓',
    className: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/25',
  },
  growing: {
    label: 'Growing stronger',
    icon: '↑',
    className: 'bg-violet-400/10 text-violet-300 border-violet-400/25',
  },
  watch: {
    label: 'Worth observing',
    icon: '◌',
    className: 'bg-rose-400/10 text-rose-300 border-rose-400/25',
  },
};
