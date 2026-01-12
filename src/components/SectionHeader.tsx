import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${centered ? 'text-center' : ''}`}
    >
      <div className={`flex items-center gap-4 mb-4 ${centered ? 'justify-center' : ''}`}>
        <div className={`h-px w-12 ${light ? 'bg-white/40' : 'bg-gold-500'}`} />
        <span className={`text-sm font-medium tracking-widest uppercase ${light ? 'text-white/70' : 'text-gold-600'}`}>
          Hotel Marc
        </span>
        <div className={`h-px w-12 ${light ? 'bg-white/40' : 'bg-gold-500'}`} />
      </div>
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-semibold ${light ? 'text-white' : 'text-slate-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
