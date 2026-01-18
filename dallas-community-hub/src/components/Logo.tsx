interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = "w-10 h-10", variant = 'dark' }: LogoProps) {
  const primaryColor = variant === 'light' ? '#ffffff' : '#d97706';
  const secondaryColor = variant === 'light' ? '#fbbf24' : '#b45309';
  
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={`logoGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
      </defs>
      
      <circle cx="24" cy="8" r="4" fill={`url(#logoGradient-${variant})`} />
      <circle cx="40" cy="16" r="3.5" fill={`url(#logoGradient-${variant})`} />
      <circle cx="44" cy="28" r="3" fill={`url(#logoGradient-${variant})`} />
      <circle cx="40" cy="40" r="3.5" fill={`url(#logoGradient-${variant})`} />
      <circle cx="24" cy="44" r="4" fill={`url(#logoGradient-${variant})`} />
      <circle cx="8" cy="40" r="3.5" fill={`url(#logoGradient-${variant})`} />
      <circle cx="4" cy="28" r="3" fill={`url(#logoGradient-${variant})`} />
      <circle cx="8" cy="16" r="3.5" fill={`url(#logoGradient-${variant})`} />
      
      <circle cx="24" cy="24" r="8" fill={`url(#logoGradient-${variant})`} />
      
      <path
        d="M24 12 L24 16"
        stroke={`url(#logoGradient-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36.5 17.5 L31 21"
        stroke={`url(#logoGradient-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 28 L32 28"
        stroke={`url(#logoGradient-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36.5 38.5 L31 35"
        stroke={`url(#logoGradient-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 40 L24 32"
        stroke={`url(#logoGradient-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.5 38.5 L17 35"
        stroke={`url(#logoGradient-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 28 L16 28"
        stroke={`url(#logoGradient-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.5 17.5 L17 21"
        stroke={`url(#logoGradient-${variant})`}
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      <path
        d="M24 20 L21 24 L24 28 L27 24 Z"
        fill={variant === 'light' ? '#1c1917' : '#ffffff'}
      />
    </svg>
  );
}
