import * as Icons from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FeatureCardProps {
  name: string;
  description: string;
  icon: string;
  index?: number;
}

export function FeatureCard({ name, description, icon, index = 0 }: FeatureCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[icon] || Icons.Star;

  return (
    <div
      ref={ref}
      className={`group bg-white p-6 rounded-sm shadow-md hover:shadow-xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-gold-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <IconComponent className="w-7 h-7 text-primary-700" />
      </div>
      <h3 className="font-serif text-lg font-semibold text-slate-800 mb-2">{name}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
