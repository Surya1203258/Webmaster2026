interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = "w-10 h-10", variant = 'dark' }: LogoProps) {
  const primaryColor = variant === 'light' ? '#ffffff' : '#d97706';
  const secondaryColor = variant === 'light' ? '#fbbf24' : '#b45309';
  const hubColor = variant === 'light' ? '#fbbf24' : '#b45309';
  
  return (
    <svg
      viewBox="0 0 60 52"
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
      
      <path
        d="M4 8 L4 32 Q4 38 10 38 L18 38 Q24 38 24 32 L24 8 Q24 2 18 2 L10 2 Q4 2 4 8 Z"
        fill={`url(#logoGradient-${variant})`}
      />
      <path
        d="M8 12 L8 28 Q8 32 12 32 L16 32 Q20 32 20 28 L20 12 Q20 8 16 8 L12 8 Q8 8 8 12 Z"
        fill={variant === 'light' ? '#1c1917' : '#ffffff'}
      />
      
      <path
        d="M54 6 Q54 2 50 2 L36 2 Q30 2 30 8 L30 32 Q30 38 36 38 L50 38 Q54 38 54 34"
        stroke={`url(#logoGradient-${variant})`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      <text
        x="30"
        y="50"
        textAnchor="middle"
        fill={hubColor}
        fontSize="10"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
        letterSpacing="2"
      >
        hub
      </text>
    </svg>
  );
}
