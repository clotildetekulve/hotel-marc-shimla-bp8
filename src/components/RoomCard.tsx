import { Check, Star } from 'lucide-react';
import { HOTEL_INFO } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface RoomCardProps {
  name: string;
  subtitle: string;
  bestFor: string;
  description: string;
  amenities: string[];
  image: string;
  featured?: boolean;
  index?: number;
}

export function RoomCard({
  name,
  subtitle,
  bestFor,
  description,
  amenities,
  image,
  featured = false,
  index = 0,
}: RoomCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const whatsappMessage = `Hello! I would like to book the ${name} at Hotel Marc, Shimla.`;
  const bookingLink = `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-sm overflow-hidden card-shadow transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${featured ? 'ring-2 ring-gold-500' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {featured && (
        <div className="bg-gold-500 text-white text-center py-2 text-sm font-medium tracking-wide">
          <Star className="w-4 h-4 inline-block mr-2" />
          Most Popular
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 text-primary-700 px-3 py-1 rounded-sm text-sm font-medium">
            {subtitle}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-1">{name}</h3>
          <p className="text-sm text-gold-600 font-medium">Best for: {bestFor}</p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">{description}</p>

        <div className="border-t border-slate-100 pt-4 mb-6">
          <h4 className="text-sm font-semibold text-slate-700 mb-3">Room Amenities</h4>
          <div className="grid grid-cols-2 gap-2">
            {amenities.slice(0, 6).map((amenity) => (
              <div key={amenity} className="flex items-center gap-2 text-sm text-slate-600">
                <Check className="w-4 h-4 text-forest-500 flex-shrink-0" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <a
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-3 font-medium transition-colors ${
            featured
              ? 'bg-gold-500 text-white hover:bg-gold-600'
              : 'bg-primary-700 text-white hover:bg-primary-800'
          }`}
        >
          Book This Room
        </a>
      </div>
    </div>
  );
}
