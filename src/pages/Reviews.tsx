import { Star, ExternalLink, Quote } from 'lucide-react';
import { Hero, SectionHeader } from '../components';
import { ALL_FIVE_STAR_REVIEWS, GOOGLE_REVIEWS_URL } from '../constants';

const sourceColors: Record<string, string> = {
  'Goibibo': 'bg-orange-100 text-orange-700',
  'TripAdvisor': 'bg-green-100 text-green-700',
  'Trip.com': 'bg-blue-100 text-blue-700',
  'Google': 'bg-red-100 text-red-700',
};

function ReviewCard({ name, review, rating, source }: { name: string; review: string; rating: number; source: string }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${sourceColors[source] || 'bg-gray-100 text-gray-700'}`}>
          {source}
        </span>
      </div>

      <div className="flex-1 relative">
        <Quote className="absolute -top-1 -left-1 w-8 h-8 text-stone-200" />
        <p className="text-stone-600 leading-relaxed pl-6 italic">"{review}"</p>
      </div>

      <div className="mt-4 pt-4 border-t border-stone-100">
        <p className="font-semibold text-stone-800">{name}</p>
        <p className="text-sm text-stone-500">Verified Guest</p>
      </div>
    </div>
  );
}

function StatsCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">{value}</div>
      <div className="text-stone-600 text-sm md:text-base">{label}</div>
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Hero
        title="Guest Reviews"
        subtitle="See what our guests say about their stay at Hotel Marc"
        image="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920"
        height="medium"
      />

      <section className="py-16 md:py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              Trusted by Travelers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Guests Love Us</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Read authentic reviews from guests who have experienced the warmth and hospitality of Hotel Marc
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <StatsCard value="4.2" label="Average Rating" />
            <StatsCard value="60+" label="Total Reviews" />
            <StatsCard value="86%" label="Recommend Us" />
            <StatsCard value="10+" label="Years of Service" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="5-Star Reviews"
            title="What Our Guests Say"
            description="Authentic reviews from verified guests across multiple platforms"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {ALL_FIVE_STAR_REVIEWS.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                review={review.review}
                rating={review.rating}
                source={review.source}
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-stone-700 transition-colors"
            >
              <span>Read More Reviews on Google</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-stone-500 text-sm mt-3">
              See all guest reviews and ratings on Google Travel
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-stone-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            Have you stayed with us? We would love to hear about your experience. Your feedback helps us improve and helps other travelers make informed decisions.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 text-stone-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
          >
            <span>Write a Review</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
