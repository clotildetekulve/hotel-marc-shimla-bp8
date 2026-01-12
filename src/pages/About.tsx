import { MapPin, Heart, Award, Users, Star, CheckCircle } from 'lucide-react';
import { Hero, SectionHeader } from '../components';
import { IMAGES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const values = [
  {
    icon: MapPin,
    title: 'The Location Advantage',
    description: 'Located near the Viceregal Lodge (Indian Institute of Advanced Study), one of Shimla\'s most famous heritage sites. The area is flat and walkable, perfect for evening strolls.',
  },
  {
    icon: Heart,
    title: 'Family Hospitality',
    description: 'Managed by Mr. Marc and a dedicated team, we pride ourselves on personalized care that only a locally owned establishment can provide.',
  },
  {
    icon: Award,
    title: 'Value for Money',
    description: 'We offer 3-star amenities at budget-friendly prices, making luxury accessible to all travelers without compromising on comfort.',
  },
];

const milestones = [
  { year: '2014', event: 'Hotel Marc opened its doors' },
  { year: '2016', event: 'Expanded to 15 rooms' },
  { year: '2018', event: 'Launched Marc Kitchen restaurant' },
  { year: '2020', event: 'Renovated with modern amenities' },
  { year: '2023', event: 'Added valley view suites' },
];

export function About() {
  const storyRef = useScrollAnimation<HTMLDivElement>();
  const valuesRef = useScrollAnimation<HTMLDivElement>();
  const teamRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <Hero
        image={IMAGES.heroAbout}
        title="Our Story & Vision"
        subtitle="A family legacy of warmth and hospitality in the heart of Shimla"
        height="large"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div
            ref={storyRef.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              storyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-600">Our Journey</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
                A Decade of Memorable Stays
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Hotel Marc has established a reputation for friendly, attentive service that only local ownership can provide. Situated next to Kotshera College in Chaura Maidan, we are away from the noise but close to the action.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                What started as a small family guesthouse has grown into one of the most beloved hotels in the Chaura Maidan area. Our commitment to providing a home-away-from-home experience has remained unchanged over the years.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Every guest who walks through our doors becomes part of the Hotel Marc family. We believe in creating memories, not just providing accommodation, and that philosophy guides everything we do.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Hotel Marc building"
                className="rounded-sm shadow-xl w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary-700 text-white p-8 rounded-sm shadow-xl hidden lg:block">
                <p className="text-3xl font-serif font-bold">Since</p>
                <p className="text-5xl font-serif font-bold text-gold-400">2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Why Choose Us"
            subtitle="Three pillars that define the Hotel Marc experience"
          />

          <div
            ref={valuesRef.ref}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              valuesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 bg-cream-50 rounded-sm group hover:bg-primary-700 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gold-100 group-hover:bg-gold-500 flex items-center justify-center mb-6 transition-colors duration-500">
                  <value.icon className="w-10 h-10 text-primary-700 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-slate-800 group-hover:text-white mb-4 transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in the Hotel Marc story"
            light
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold-500/30" />

              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center mb-8 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div className="bg-slate-800 p-6 rounded-sm">
                      <span className="text-gold-400 font-serif text-2xl font-bold">{milestone.year}</span>
                      <p className="text-white/80 mt-2">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold-500 rounded-full transform -translate-x-1/2" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <div
            ref={teamRef.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              teamRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80"
                alt="Hotel staff"
                className="rounded-sm shadow-xl w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-600">Our Team</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
                The Heart of Hotel Marc
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Behind every memorable stay is our dedicated team of hospitality professionals. From our front desk staff to our housekeeping team, everyone at Hotel Marc is committed to making your visit exceptional.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">Trained hospitality professionals with local expertise</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">24/7 availability for guest assistance</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">Personalized recommendations for local attractions</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-forest-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-600">Multilingual staff for international guests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-gold-400 mb-3" />
              <p className="text-4xl font-serif font-bold">500+</p>
              <p className="text-white/70 mt-1">Happy Guests</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-gold-400 mb-3" />
              <p className="text-4xl font-serif font-bold">4.5</p>
              <p className="text-white/70 mt-1">Average Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-10 h-10 text-gold-400 mb-3" />
              <p className="text-4xl font-serif font-bold">10+</p>
              <p className="text-white/70 mt-1">Years of Service</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-10 h-10 text-gold-400 mb-3" />
              <p className="text-4xl font-serif font-bold">100%</p>
              <p className="text-white/70 mt-1">Dedication</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
