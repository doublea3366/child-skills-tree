'use client';

type HeroProps = {
  onStartSnapshot: () => void;
  onExploreTree: () => void;
};

export function Hero({ onStartSnapshot, onExploreTree }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50 via-stone-50 to-stone-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(217,119,87,0.12), transparent 40%), radial-gradient(circle at 85% 10%, rgba(63,125,107,0.12), transparent 40%), radial-gradient(circle at 75% 80%, rgba(138,93,153,0.10), transparent 45%)',
        }}
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center sm:py-28">
        <span className="mb-6 inline-flex items-center rounded-full border border-stone-300/70 bg-white/70 px-4 py-1.5 text-sm font-medium text-stone-600 backdrop-blur-sm">
          For parents of children ages 0–5
        </span>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl md:text-6xl">
          Help your kid build skills.
          <br />
          Help your kid discover the world.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
          A parent-friendly skills tree for seeing what your child is learning, what may be
          emerging next, and how to support magical firsts from birth through age five.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={onStartSnapshot}
            className="w-full rounded-full bg-stone-900 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-stone-900/10 transition hover:bg-stone-800 active:scale-[0.98] sm:w-auto"
          >
            Start Skill Snapshot
          </button>
          <button
            type="button"
            onClick={onExploreTree}
            className="w-full rounded-full border border-stone-300 bg-white/80 px-8 py-3.5 text-base font-semibold text-stone-700 transition hover:border-stone-400 hover:bg-white active:scale-[0.98] sm:w-auto"
          >
            Explore the Tree
          </button>
        </div>
        <p className="mt-8 max-w-xl text-sm text-stone-500">
          The tree is a map, not a test. Every new skill is a new way for your child to
          experience, understand, and participate in the world.
        </p>
      </div>
    </section>
  );
}
