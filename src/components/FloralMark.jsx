import { useId } from 'react';

/**
 * Seed of Life geometric ornament — used as a decorative divider accent.
 * Rendered as pure SVG so it scales crisply at any size.
 */
export default function FloralMark({ size = 18, color = 'currentColor', className = '' }) {
  const uid = useId();
  const clipId = `floral-clip-${uid}`;

  const cx = 50;
  const cy = 50;
  const r = 18;          // radius of each inner circle
  const outerR = r * 2;  // outer boundary circle

  const satellites = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 * Math.PI) / 180;
    return {
      cx: cx + r * Math.cos(angle),
      cy: cy + r * Math.sin(angle),
    };
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx={cx} cy={cy} r={outerR} />
        </clipPath>
      </defs>

      {/* Inner circles clipped to boundary */}
      <g clipPath={`url(#${clipId})`}>
        <circle cx={cx} cy={cy} r={r} />
        {satellites.map((s, i) => (
          <circle key={i} cx={s.cx} cy={s.cy} r={r} />
        ))}
      </g>

      {/* Outer boundary ring */}
      <circle cx={cx} cy={cy} r={outerR} />
    </svg>
  );
}
