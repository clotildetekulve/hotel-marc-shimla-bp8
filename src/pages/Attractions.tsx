import { MapPin, Clock, Car, Camera, Mountain, TreePine } from 'lucide-react';
import { Hero, SectionHeader, AttractionCard, WeatherWidget } from '../components';
import { IMAGES, ATTRACTIONS, WHATSAPP_LINK } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories = [
  {
    name: 'Walking Distance',
    icon: MapPin,
    description: 'Explore these attractions on foot from Hotel Marc',
    attractions: ATTRACTIONS.filter(a => parseFloat(a.distance) < 2 || a.distance.includes('m')),
  },
  {
    name: 'Short Drive',
    icon: Car,
    description: 'Quick drives to popular Shimla landmarks',
    attractions: ATTRACTIONS.filter(a => parseFloat(a.distance) >= 2 && parseFloat(a.distance) <= 10),
  },
  {
    name: 'Day Trips',
    icon: Mountain,
    description: 'Perfect destinations for a full day excursion',
    attractions: ATTRACTIONS.filter(a => parseFloat(a.distance) > 10),
  },
];

const travelTips = [
  {
    icon: Camera,
    title: 'Best Photo Spots',
    description: 'The Ridge, Viceregal Lodge gardens, and Jakhu Temple viewpoint offer stunning panoramas.',
  },
  {
    icon: Clock,
    title: 'Best Time to Visit',
    description: 'March to June for pleasant weather, September to November for clear mountain views.',
  },
  {
    icon: TreePine,
    title: 'Nature Walks',
    description: 'The path from Hotel Marc to Viceregal Lodge is perfect for morning walks through pine forests.',
  },
];

export function Attractions() {
  const categoriesRef = useScrollAnimation<HTMLDivElement>();
  const tipsRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <Hero
        image={IMAGES.heroAttractions}
        title="Explore Shimla"
        subtitle="Discover the Queen of Hills and its magnificent attractions"
        height="large"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeader
                title="Local Attractions"
                subtitle="From heritage sites to scenic viewpoints, Shimla has something for everyone"
                centered={false}
              />

              <div className="grid sm:grid-cols-2 gap-6">
                {ATTRACTIONS.slice(0, 4).map((attraction, index) => (
                  <AttractionCard key={attraction.name} {...attraction} index={index} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <WeatherWidget />

              <div className="bg-primary-700 text-white p-6 rounded-lg">
                <h3 className="font-serif text-xl font-semibold mb-4">Plan Your Trip</h3>
                <p className="text-white/70 text-sm mb-4">
                  Our travel desk can arrange customized tours to all these attractions. Contact us for the best rates.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gold-500 hover:bg-gold-600 text-white text-center py-3 rounded-sm font-medium transition-colors"
                >
                  Book a Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="More Places to Explore"
            subtitle="Extended list of attractions near Shimla"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATTRACTIONS.slice(4).map((attraction, index) => (
              <AttractionCard key={attraction.name} {...attraction} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <SectionHeader
            title="Attractions by Distance"
            subtitle="Plan your explorations based on how far you want to travel"
            light
          />

          <div
            ref={categoriesRef.ref}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              categoriesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-slate-800 rounded-sm p-6"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">{category.name}</h3>
                    <p className="text-white/60 text-sm">{category.attractions.length} attractions</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.attractions.map((attraction) => (
                    <li key={attraction.name} className="flex items-center justify-between text-sm">
                      <span className="text-white/80">{attraction.name}</span>
                      <span className="text-gold-400">{attraction.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionHeader
            title="Travel Tips"
            subtitle="Make the most of your Shimla experience with these helpful tips"
          />

          <div
            ref={tipsRef.ref}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              tipsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {travelTips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-white p-8 rounded-sm shadow-lg text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gold-100 flex items-center justify-center mb-4">
                  <tip.icon className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                  {tip.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80)` }}
        />
        <div className="absolute inset-0 bg-primary-900/85" />

        <div className="relative container-custom px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
              Let Us Plan Your Perfect Shimla Trip
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Our travel desk offers customized tour packages to all major attractions. From pickup services to guided tours, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Contact Travel Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
