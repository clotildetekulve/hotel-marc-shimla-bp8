import { Clock, Utensils, Leaf, ChefHat, Coffee, Soup } from 'lucide-react';
import { Hero, SectionHeader } from '../components';
import { IMAGES, WHATSAPP_LINK } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const cuisines = [
  {
    name: 'North Indian',
    description: 'Authentic flavors from the heart of India',
    dishes: ['Dal Makhani', 'Butter Chicken', 'Paneer Specials', 'Tandoori Items', 'Biryani'],
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
  },
  {
    name: 'Chinese',
    description: 'Indo-Chinese favorites for every palate',
    dishes: ['Hakka Noodles', 'Manchurian', 'Fried Rice', 'Spring Rolls', 'Soups'],
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
  },
  {
    name: 'Continental',
    description: 'Light bites and comfort food',
    dishes: ['Sandwiches', 'Pasta', 'Toast', 'Omelettes', 'French Fries'],
    image: 'https://images.unsplash.com/photo-1481070555726-e2fe8357571d?w=600&q=80',
  },
];

const breakfastItems = [
  { name: 'Fresh Parathas', description: 'Stuffed with potato, paneer, or mixed vegetables' },
  { name: 'Toast & Butter', description: 'Crispy toast with fresh butter and jam' },
  { name: 'Omelettes', description: 'Made to order with your choice of fillings' },
  { name: 'Hot Chai/Coffee', description: 'Freshly brewed to start your day right' },
];

const features = [
  {
    icon: ChefHat,
    title: 'Expert Chefs',
    description: 'Our experienced chefs prepare every dish with love and care',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We use only the freshest local ingredients in our kitchen',
  },
  {
    icon: Clock,
    title: '24/7 Room Service',
    description: 'Enjoy your meal in the privacy of your room anytime',
  },
];

export function Dining() {
  const cuisineRef = useScrollAnimation<HTMLDivElement>();
  const breakfastRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <Hero
        image={IMAGES.heroDining}
        title="Marc Kitchen"
        subtitle="Pure, Homely, and Hygienic - Taste the warmth of home-cooked meals"
        height="large"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-600">Dining Experience</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
                Food That Feels Like Home
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We believe that good food is the heart of a great vacation. "Marc Kitchen," our in-house multi-cuisine restaurant, serves freshly prepared dishes that taste just like home.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you crave the rich flavors of North Indian cuisine, the spicy kick of Indo-Chinese dishes, or light Continental snacks, our kitchen delivers it all with the warmth and care of home cooking.
              </p>

              <div className="space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">{feature.title}</h3>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Marc Kitchen dining area"
                className="rounded-sm shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-700 text-white p-6 rounded-sm shadow-xl hidden md:block">
                <Utensils className="w-8 h-8 text-gold-400 mb-2" />
                <p className="font-serif text-xl font-semibold">Multi-Cuisine</p>
                <p className="text-white/70 text-sm">Restaurant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Cuisines"
            subtitle="A diverse menu to satisfy every craving"
          />

          <div
            ref={cuisineRef.ref}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              cuisineRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {cuisines.map((cuisine, index) => (
              <div
                key={cuisine.name}
                className="bg-cream-50 rounded-sm overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cuisine.image}
                    alt={cuisine.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-serif text-2xl font-semibold text-white">
                    {cuisine.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{cuisine.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cuisine.dishes.map((dish) => (
                      <span
                        key={dish}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div
            ref={breakfastRef.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              breakfastRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80"
                alt="Breakfast spread"
                className="rounded-sm shadow-xl w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-400">Morning Delight</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">
                Start Your Day Right
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Begin each morning with our hearty breakfast selection, prepared fresh to fuel your day of exploration in beautiful Shimla.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {breakfastItems.map((item) => (
                  <div key={item.name} className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">{item.name}</h4>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Soup className="w-16 h-16 text-gold-500 mx-auto mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
              Room Service Available 24/7
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Prefer to dine in the comfort of your room? Our room service brings the Marc Kitchen experience right to your doorstep. Enjoy your meal while watching the sunset over the hills from your private space.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-700">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center text-white">
            <div>
              <p className="text-4xl font-serif font-bold text-gold-400">3</p>
              <p className="text-white/70 mt-1">Cuisines Served</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-gold-400">24/7</p>
              <p className="text-white/70 mt-1">Room Service</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-gold-400">100%</p>
              <p className="text-white/70 mt-1">Hygienic Preparation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
