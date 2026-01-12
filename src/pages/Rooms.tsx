import { Clock, Users, CreditCard, Heart, Wifi, Tv, Bath, Coffee } from 'lucide-react';
import { Hero, SectionHeader, RoomCard } from '../components';
import { IMAGES, ROOMS, HOTEL_INFO, WHATSAPP_LINK } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const policies = [
  { icon: Clock, label: 'Check-in', value: HOTEL_INFO.checkIn },
  { icon: Clock, label: 'Check-out', value: HOTEL_INFO.checkOut },
  { icon: Users, label: 'Extra Guest', value: 'On Request' },
  { icon: CreditCard, label: 'Payment', value: 'Cash / UPI' },
];

const commonAmenities = [
  { icon: Wifi, name: 'Free Wi-Fi' },
  { icon: Tv, name: 'LCD TV' },
  { icon: Bath, name: 'Hot Water' },
  { icon: Coffee, name: 'Room Service' },
];

export function Rooms() {
  const policyRef = useScrollAnimation<HTMLDivElement>();
  const amenitiesRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <Hero
        image={IMAGES.heroRooms}
        title="Rooms & Suites"
        subtitle="Comfortable accommodations designed for your perfect mountain retreat"
        height="large"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <SectionHeader
            title="Choose Your Perfect Room"
            subtitle="Clean, spacious, and well-furnished rooms with modern amenities. All rooms feature flat-screen TVs, intercoms, and attached bathrooms with hot & cold water."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.map((room, index) => (
              <RoomCard key={room.id} {...room} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={amenitiesRef.ref}
              className={`transition-all duration-700 ${
                amenitiesRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-400">Standard Features</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">
                In Every Room
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Every room at Hotel Marc comes equipped with essential amenities to ensure a comfortable and convenient stay, regardless of the category you choose.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {commonAmenities.map((amenity) => (
                  <div key={amenity.name} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center">
                      <amenity.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <span className="font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-slate-800 rounded-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-5 h-5 text-red-400" />
                  <span className="font-semibold">Couple Friendly</span>
                </div>
                <p className="text-white/70 text-sm">
                  Valid local ID required for unmarried couples. We respect your privacy and ensure a comfortable stay for all guests.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80"
                alt="Room interior"
                className="rounded-sm shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 p-6 rounded-sm shadow-xl hidden md:block">
                <p className="text-white font-semibold">Starting from</p>
                <p className="text-3xl font-serif font-bold text-white">Best Rates</p>
                <p className="text-white/80 text-sm">Book Direct & Save</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Room Policies"
            subtitle="Important information for your stay at Hotel Marc"
          />

          <div
            ref={policyRef.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 ${
              policyRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {policies.map((policy, index) => (
              <div
                key={policy.label}
                className="text-center p-6 bg-cream-50 rounded-sm"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <policy.icon className="w-7 h-7 text-primary-700" />
                </div>
                <p className="text-slate-500 text-sm mb-1">{policy.label}</p>
                <p className="font-serif text-xl font-semibold text-slate-800">{policy.value}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-cream-100 p-8 rounded-sm">
              <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-4 text-center">
                Important Notes
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Early check-in and late check-out subject to availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Valid government ID required at the time of check-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Pets are not allowed in the hotel premises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Smoking is prohibited in all rooms (designated area available)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Outside food is not allowed in the restaurant area</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-700">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4">
            Ready to Book Your Room?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us directly for the best rates and personalized assistance with your booking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Book via WhatsApp
            </a>
            <a href={`tel:${HOTEL_INFO.phone.replace(/\s/g, '')}`} className="btn-secondary border-white text-white hover:bg-white hover:text-primary-700">
              Call: {HOTEL_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
