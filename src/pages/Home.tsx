import { Link } from 'react-router-dom';
import { Car, Mountain, UtensilsCrossed, MapPin, ArrowRight, Star, Clock, CheckCircle, ChefHat, Wifi, Sun, Camera, Phone, Mail, Coffee } from 'lucide-react';
import { Hero, SectionHeader, RoomCard, TestimonialCard, FacebookEmbed } from '../components';
import { IMAGES, ROOMS, TESTIMONIALS, WHATSAPP_LINK, HOTEL_INFO } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  {
    icon: Car,
    title: 'Ample Parking',
    description: 'Secure, drive-in parking is available - a rare luxury in Shimla.',
  },
  {
    icon: Mountain,
    title: 'Valley Views',
    description: 'Wake up to breathtaking views of the mountains and Shimla valley.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Marc Kitchen',
    description: 'Enjoy delicious, hygienic, and homely North Indian and Chinese cuisine.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Walking distance to the Viceregal Lodge and State Museum.',
  },
];

const nearbyPlaces = [
  { name: 'Viceregal Lodge', distance: '1.8 km', image: '/viceregal-lodge.jpg' },
  { name: 'Mall Road', distance: '3 km', image: '/mall-road-shimla.jpg' },
  { name: 'State Museum', distance: '750 m', image: '/himachal-state-museum-and-library-himachal-pradesh-1-attr-hero.jpeg' },
];

const cuisineHighlights = [
  { name: 'North Indian', icon: ChefHat, description: 'Authentic flavors from the heart of India' },
  { name: 'Chinese', icon: UtensilsCrossed, description: 'Indo-Chinese favorites for every palate' },
  { name: 'Continental', icon: Coffee, description: 'Light bites and comfort food' },
];

const facilitiesPreview = [
  { name: 'Free Wi-Fi', icon: Wifi, description: 'Stay connected throughout your stay' },
  { name: 'Secure Parking', icon: Car, description: 'A rare luxury in Shimla' },
  { name: 'Open Terrace', icon: Sun, description: 'Enjoy panoramic valley views' },
];

const galleryPreview = [
  { src: '/view1.jpg', alt: 'Valley view' },
  { src: '/room1.jpg', alt: 'Hotel room' },
  { src: '/facade1.jpg', alt: 'Hotel exterior' },
  { src: '/rest1.jpg', alt: 'Restaurant' },
];

export function Home() {
  const welcomeRef = useScrollAnimation<HTMLDivElement>();
  const highlightsRef = useScrollAnimation<HTMLDivElement>();
  const diningRef = useScrollAnimation<HTMLDivElement>();
  const facilitiesRef = useScrollAnimation<HTMLDivElement>();
  const galleryRef = useScrollAnimation<HTMLDivElement>();
  const contactRef = useScrollAnimation<HTMLDivElement>();
  const ctaRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <Hero
        image={IMAGES.hero}
        title="Experience the Serenity of Shimla"
        subtitle="Ample Parking - Valley Views - Homely Food - Just Minutes from the Mall Road"
        showCta
        showScrollIndicator
        height="full"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div
            ref={welcomeRef.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              welcomeRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-600">Welcome</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-800 mb-6">
                Welcome to Hotel Marc
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Nestled in the quiet, green environs of Chaura Maidan, Hotel Marc offers the perfect blend of peace and proximity. Unlike the crowded city center, we provide a tranquil escape overlooking the majestic Shivalik Hills, while still being just a 10-minute drive (or a scenic walk) from the bustling Mall Road.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you are a couple seeking romance or a family looking for a safe, comfortable vacation, our family-run hospitality ensures you feel right at home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  Our Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link to="/rooms" className="btn-secondary">
                  View Rooms
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={IMAGES.hotelExterior}
                  alt="Hotel Marc exterior"
                  className="rounded-sm shadow-lg w-full h-48 object-cover"
                />
                <img
                  src={IMAGES.shimlaValley}
                  alt="Shimla valley view"
                  className="rounded-sm shadow-lg w-full h-48 object-cover mt-8"
                />
                <img
                  src={IMAGES.terrace}
                  alt="Hotel terrace"
                  className="rounded-sm shadow-lg w-full h-48 object-cover"
                />
                <img
                  src={IMAGES.dining}
                  alt="Dining area"
                  className="rounded-sm shadow-lg w-full h-48 object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 rounded-sm shadow-xl hidden md:block">
                <div className="text-center">
                  <p className="text-4xl font-serif font-bold">10+</p>
                  <p className="text-sm">Years of Hospitality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Why Choose Hotel Marc"
            subtitle="Experience the perfect blend of comfort, convenience, and stunning natural beauty"
          />

          <div
            ref={highlightsRef.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
              highlightsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group text-center p-8 bg-cream-50 rounded-sm hover:bg-primary-700 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gold-100 group-hover:bg-gold-500 flex items-center justify-center mb-6 transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-primary-700 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-800 group-hover:text-white mb-3 transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/80 text-sm transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <SectionHeader
            title="Our Rooms & Suites"
            subtitle="Comfortable, clean, and well-furnished accommodations designed for your perfect stay"
            light
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.map((room, index) => (
              <RoomCard key={room.id} {...room} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/rooms" className="btn-gold">
              View All Rooms
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div
            ref={diningRef.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              diningRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Marc Kitchen dining area"
                className="rounded-sm shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-700 text-white p-6 rounded-sm shadow-xl hidden md:block">
                <UtensilsCrossed className="w-8 h-8 text-gold-400 mb-2" />
                <p className="font-serif text-xl font-semibold">Multi-Cuisine</p>
                <p className="text-white/70 text-sm">Restaurant</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-600">Marc Kitchen</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
                Food That Feels Like Home
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our in-house multi-cuisine restaurant serves freshly prepared dishes that taste just like home. From authentic North Indian to Indo-Chinese and Continental - satisfy every craving with pure, homely, and hygienic food.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {cuisineHighlights.map((item) => (
                  <div key={item.name} className="text-center p-4 bg-white rounded-sm shadow-md">
                    <item.icon className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-800">{item.name}</h4>
                    <p className="text-slate-500 text-xs mt-1">{item.description}</p>
                  </div>
                ))}
              </div>

              <Link to="/dining" className="btn-primary">
                Explore Our Menu
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Facilities & Amenities"
            subtitle="Modern conveniences for a comfortable mountain retreat"
          />

          <div
            ref={facilitiesRef.ref}
            className={`grid sm:grid-cols-3 gap-8 mb-12 transition-all duration-700 ${
              facilitiesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {facilitiesPreview.map((facility, index) => (
              <div
                key={facility.name}
                className="text-center p-8 bg-cream-50 rounded-sm hover:shadow-xl transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary-100 to-gold-100 flex items-center justify-center mb-4">
                  <facility.icon className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">{facility.name}</h3>
                <p className="text-slate-600 text-sm">{facility.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/facilities" className="btn-secondary">
              View All Facilities
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <SectionHeader
            title="Photo Gallery"
            subtitle="Glimpse into life at Hotel Marc"
            light
          />

          <div
            ref={galleryRef.ref}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 transition-all duration-700 ${
              galleryRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {galleryPreview.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery" className="btn-gold">
              View Full Gallery
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <SectionHeader
            title="Guest Experiences"
            subtitle="What our guests say about their stay at Hotel Marc"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/reviews" className="btn-secondary">
              Read All Reviews
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Follow Us on Facebook"
            subtitle="Stay updated with our latest news, offers, and guest experiences"
          />

          <div className="flex justify-center">
            <div className="w-full max-w-2xl bg-stone-50 rounded-lg p-4 shadow-sm">
              <FacebookEmbed
                width={600}
                height={500}
                showPosts={true}
                smallHeader={false}
                hideCover={false}
                adaptContainerWidth={true}
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.facebook.com/people/Hotel-Marc/100064515986248/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit Our Facebook Page
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <SectionHeader
            title="Nearby Attractions"
            subtitle="Explore Shimla's finest landmarks just moments away from Hotel Marc"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {nearbyPlaces.map((place, index) => (
              <div
                key={place.name}
                className="group relative h-80 rounded-sm overflow-hidden shadow-lg"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white font-semibold mb-2">{place.name}</h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin className="w-4 h-4" />
                    <span>{place.distance} from hotel</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/attractions" className="btn-secondary">
              Explore All Attractions
              <ArrowRight className="ml-2 w-4 h-4 inline" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div
            ref={contactRef.ref}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
              contactRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-600">Contact Us</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Have questions or ready to book? Our team is here to help you plan your perfect Shimla getaway. Reach out through any of our channels below.
              </p>

              <div className="space-y-4 mb-8">
                <a href={`tel:${HOTEL_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 p-4 bg-cream-50 rounded-sm hover:bg-cream-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Call Us</p>
                    <p className="font-semibold text-slate-800">{HOTEL_INFO.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${HOTEL_INFO.email}`} className="flex items-center gap-4 p-4 bg-cream-50 rounded-sm hover:bg-cream-100 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-semibold text-slate-800">{HOTEL_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-cream-50 rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Address</p>
                    <p className="font-semibold text-slate-800 text-sm">{HOTEL_INFO.address}</p>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn-primary">
                Contact & Directions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-sm overflow-hidden shadow-xl h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.123456789!2d77.165!3d31.105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA2JzE4LjAiTiA3N8KwMDknNTQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Marc Location"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${IMAGES.shimlaValley})` }}
        />
        <div className="absolute inset-0 bg-primary-900/85" />

        <div
          ref={ctaRef.ref}
          className={`relative container-custom px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${
            ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
              Ready for a Memorable Stay?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Book directly with us for the best rates and personalized service. Our team is ready to make your Shimla experience unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Book Now on WhatsApp
              </a>
              <a href={`tel:${HOTEL_INFO.phone.replace(/\s/g, '')}`} className="btn-secondary border-white text-white hover:bg-white hover:text-primary-700">
                Call Us: {HOTEL_INFO.phone}
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-white/80 text-sm">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-gold-500" />
                <span>Best Rate Guarantee</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-gold-500" />
                <span>Flexible Check-in/out</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-5 h-5 text-gold-500" />
                <span>Personalized Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary-800 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-serif font-bold text-gold-400">500+</p>
              <p className="text-white/70 mt-1">Happy Guests</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-gold-400">4.5</p>
              <p className="text-white/70 mt-1">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-gold-400">10+</p>
              <p className="text-white/70 mt-1">Years of Service</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-gold-400">24/7</p>
              <p className="text-white/70 mt-1">Guest Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
