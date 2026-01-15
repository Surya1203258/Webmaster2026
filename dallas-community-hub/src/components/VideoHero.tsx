import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface VideoHeroProps {
  title: string;
  subtitle: string;
  highlightText?: string;
  videoUrl: string;
  posterImage: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  height?: string;
}

export default function VideoHero({
  title,
  subtitle,
  highlightText,
  videoUrl,
  posterImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  height = 'h-screen min-h-[600px]'
}: VideoHeroProps) {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={posterImage}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-in">
          {title}
          {highlightText && (
            <span className="block text-amber-400 italic">{highlightText}</span>
          )}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
        {(primaryButtonText || secondaryButtonText) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {primaryButtonText && primaryButtonLink && (
              <Link to={primaryButtonLink}>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-10 py-6 rounded-full">
                  {primaryButtonText}
                </Button>
              </Link>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink}>
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-stone-800 text-lg px-10 py-6 rounded-full bg-transparent"
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
