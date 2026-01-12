import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
  source?: string;
}

const sourceColors: Record<string, string> = {
  'Goibibo': 'bg-orange-100 text-orange-700',
  'TripAdvisor': 'bg-green-100 text-green-700',
  'Trip.com': 'bg-blue-100 text-blue-700',
  'Google': 'bg-red-100 text-red-700',
};

export function TestimonialCard({ name, review, rating, source }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-sm shadow-lg relative">
      <Quote className="absolute top-6 right-6 w-10 h-10 text-gold-200" />

      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-gold-500 fill-current' : 'text-slate-300'}`}
            />
          ))}
        </div>
        {source && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${sourceColors[source] || 'bg-gray-100 text-gray-700'}`}>
            {source}
          </span>
        )}
      </div>

      <p className="text-slate-600 italic leading-relaxed mb-6">"{review}"</p>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-gold-400 flex items-center justify-center">
          <span className="text-white font-semibold text-lg">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-slate-800">{name}</p>
          <p className="text-sm text-slate-500">Verified Guest</p>
        </div>
      </div>
    </div>
  );
}
