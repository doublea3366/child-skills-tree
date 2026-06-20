'use client';

type AppHeaderProps = {
  childName: string;
  hasSnapshot: boolean;
  onStartSnapshot: () => void;
  progressOpen: boolean;
  onToggleProgress: () => void;
};

export function AppHeader({
  childName,
  hasSnapshot,
  onStartSnapshot,
  progressOpen,
  onToggleProgress,
}: AppHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden
          className="flex h-9 w-9 items-center justify-center rounded-full text-lg"
          style={{
            background: 'radial-gradient(circle, #fdf9f0 0%, #d9c9a3 100%)',
            boxShadow: '0 0 12px 2px rgba(253,249,240,0.35)',
          }}
        >
          🌳
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-white/90">Skills Tree</p>
          <p className="hidden text-xs text-white/40 sm:block">For parents of children ages 0–5</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToggleProgress}
          aria-pressed={progressOpen}
          aria-label="Toggle progress panel"
          className={`flex h-9 w-9 items-center justify-center rounded-full border text-base transition sm:h-auto sm:w-auto sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-xs sm:font-semibold ${
            progressOpen
              ? 'border-[var(--gold)] bg-[var(--gold-soft)] text-[var(--gold)]'
              : 'border-[var(--panel-border)] bg-white/[0.04] text-white/70 hover:border-white/30'
          }`}
        >
          <span aria-hidden>📊</span>
          <span className="hidden sm:inline">{childName || 'Progress'}</span>
        </button>
        <button
          type="button"
          onClick={onStartSnapshot}
          className="rounded-full bg-[var(--gold)] px-4 py-2 text-xs font-semibold text-[#1a1610] transition hover:brightness-110 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          {hasSnapshot ? 'Update Snapshot' : 'Take Skill Snapshot'}
        </button>
      </div>
    </div>
  );
}
