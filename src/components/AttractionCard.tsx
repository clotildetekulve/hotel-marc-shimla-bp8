import { MapPin, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AttractionCardProps {
  name: string;
  description: string;
  distance: string;
  duration: string;
  image: string;
  index?: number;
}

export function AttractionCard({
  name,
  description,
  distance,
  duration,
  image,
  index = 0,
}: AttractionCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif text-xl font-semibold text-white">{name}</h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex items-center justify-between text-sm border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2 text-primary-700">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">{distance}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
