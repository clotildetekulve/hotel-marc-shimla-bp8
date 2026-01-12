import { ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  showCta?: boolean;
  showScrollIndicator?: boolean;
  overlay?: 'dark' | 'light' | 'gradient';
  height?: 'full' | 'large' | 'medium';
}

export function Hero({
  image,
  title,
  subtitle,
  showCta = false,
  showScrollIndicator = false,
  overlay = 'gradient',
  height = 'full',
}: HeroProps) {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]',
  };

  const overlayClasses = {
    dark: 'bg-black/50',
    light: 'bg-black/30',
    gradient: 'bg-gradient-to-t from-black/70 via-black/30 to-black/20',
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 animate-fade-in-up text-balance leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
        )}
        {showCta && (
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-lg"
            >
              Book Your Stay
            </a>
          </div>
        )}
      </div>

      {showScrollIndicator && (
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-float cursor-pointer"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-10 h-10" />
        </button>
      )}
    </section>
  );
}
