export function Disclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs leading-relaxed text-white/40">
        The Skill Snapshot creates a starting map based on your answers. It is not a test your
        child can pass or fail.
      </p>
    );
  }

  return (
    <p className="text-sm leading-relaxed text-white/40">
      This tool is educational and is not a diagnosis. Children develop in different ways and at
      different speeds. If you have concerns about your child&rsquo;s development, talk with your
      pediatrician or a qualified child development professional.
    </p>
  );
}
