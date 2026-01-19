interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = "w-10 h-10", variant = 'dark' }: LogoProps) {
  const primaryColor = variant === 'light' ? '#ffffff' : '#d97706';
  const secondaryColor = variant === 'light' ? '#fbbf24' : '#b45309';
  const accentColor = variant === 'light' ? '#fcd34d' : '#f59e0b';
  
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
        <linearGradient id={`logoGradientReverse-${variant}`} x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>
      </defs>
      
      <circle cx="24" cy="6" r="4.5" fill={`url(#logoGradient-${variant})`} />
      <circle cx="38" cy="12" r="4" fill={`url(#logoGradient-${variant})`} />
      <circle cx="42" cy="24" r="3.5" fill={`url(#logoGradientReverse-${variant})`} />
      <circle cx="38" cy="36" r="4" fill={`url(#logoGradient-${variant})`} />
      <circle cx="24" cy="42" r="4.5" fill={`url(#logoGradientReverse-${variant})`} />
      <circle cx="10" cy="36" r="4" fill={`url(#logoGradient-${variant})`} />
      <circle cx="6" cy="24" r="3.5" fill={`url(#logoGradientReverse-${variant})`} />
      <circle cx="10" cy="12" r="4" fill={`url(#logoGradient-${variant})`} />
      
      <path d="M24 10.5 L24 15" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M34.5 14.5 L30 18" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38.5 24 L33 24" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M34.5 33.5 L30 30" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 37.5 L24 33" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M13.5 33.5 L18 30" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M9.5 24 L15 24" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M13.5 14.5 L18 18" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" />
      
      <circle cx="24" cy="24" r="9" fill={`url(#logoGradient-${variant})`} />
      
      <circle cx="24" cy="24" r="4" fill={accentColor} />
      <circle cx="24" cy="24" r="2" fill={variant === 'light' ? '#1c1917' : '#ffffff'} />
    </svg>
  );
}
