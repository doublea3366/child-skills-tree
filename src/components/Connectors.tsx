type Line = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
};

type ConnectorsProps = {
  lines: Line[];
};

export function Connectors({ lines }: ConnectorsProps) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {lines.map((line, i) => (
        <g key={i}>
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.color}
            strokeWidth={4}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={0.18}
          />
          <line
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.color}
            strokeWidth={1.5}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={0.75}
          />
        </g>
      ))}
    </svg>
  );
}
