import { SkillStatus } from '@/types/skill';

export const statusMeta: Record<SkillStatus, { label: string; icon: string; className: string }> = {
  later: {
    label: 'Later',
    icon: '·',
    className: 'bg-stone-100 text-stone-500 border-stone-200',
  },
  ready: {
    label: 'Ready to try',
    icon: '→',
    className: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  emerging: {
    label: 'Emerging',
    icon: '◐',
    className: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  discovered: {
    label: 'Discovered',
    icon: '✓',
    className: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  growing: {
    label: 'Growing stronger',
    icon: '↑',
    className: 'bg-violet-50 text-violet-700 border-violet-200',
  },
  watch: {
    label: 'Worth observing',
    icon: '◌',
    className: 'bg-rose-50 text-rose-600 border-rose-200',
  },
};
