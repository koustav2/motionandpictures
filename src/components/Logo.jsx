export default function Logo({ size = 64, className = "" }) {
    return (
      <svg
        viewBox="38.5 20 123 160"
        width={size}
        height={size}
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor">
          <path d="M102.887 20v117.469c32.371 0 58.613-26.296 58.613-58.734C161.5 46.296 135.258 20 102.887 20z" />
          <path d="M38.5 121.266C38.5 153.704 64.742 180 97.113 180V62.532c-32.371 0-58.613 26.296-58.613 58.734z" />
        </g>
      </svg>
    );
  }
  