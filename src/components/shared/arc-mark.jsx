export function ArcMark({ className, color = "currentColor", strokeWidth = 2 }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M4 52 C 50 8, 150 8, 196 52"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
