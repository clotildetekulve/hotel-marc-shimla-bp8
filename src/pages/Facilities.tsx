import { Wifi, Car, MapPin, Shirt, Stethoscope, Zap, Sun, Bell, Shield, Clock, Sparkles, Users } from 'lucide-react';
import { Hero, SectionHeader } from '../components';
import { IMAGES, WHATSAPP_LINK, HOTEL_INFO } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const facilities = [
  {
    icon: Wifi,
    name: 'Free Wi-Fi',
    description: 'High-speed internet access in rooms and public areas to keep you connected throughout your stay.',
    highlight: true,
  },
  {
    icon: Car,
    name: 'Secure Parking',
    description: 'Safe and free drive-in parking space for guests - a rare luxury in Shimla. Park right at the hotel entrance.',
    highlight: true,
  },
  {
    icon: MapPin,
    name: 'Travel Desk',
    description: 'We can arrange sightseeing taxis to Kufri, Naldehra, Chail, and provide pick-up/drop services to Railway Station or Bus Stand.',
    highlight: false,
  },
  {
    icon: Shirt,
    name: 'Laundry Service',
    description: 'Same-day laundry and dry cleaning services available for your convenience.',
    highlight: false,
  },
  {
    icon: Stethoscope,
    name: 'Doctor on Call',
    description: 'Medical assistance available for any emergencies. Your health and safety are our priority.',
    highlight: false,
  },
  {
    icon: Zap,
    name: 'Power Backup',
    description: '24-hour generator backup ensures uninterrupted stay regardless of weather conditions.',
    highlight: false,
  },
  {
    icon: Sun,
    name: 'Open Terrace',
    description: 'Enjoy the beautiful Shimla weather and panoramic views from our open terrace area.',
    highlight: true,
  },
  {
    icon: Bell,
    name: 'Room Service',
    description: '24-hour room service bringing Marc Kitchen delicacies right to your doorstep.',
    highlight: false,
  },
];

const services = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'CCTV surveillance and 24-hour security for your peace of mind',
  },
  {
    icon: Clock,
    title: '24/7 Reception',
    description: 'Our front desk is always available to assist you',
  },
  {
    icon: Sparkles,
    title: 'Daily Housekeeping',
    description: 'Clean, fresh rooms every day of your stay',
  },
  {
    icon: Users,
    title: 'Friendly Staff',
    description: 'Warm hospitality from our dedicated team',
  },
];

export function Facilities() {
  const facilitiesRef = useScrollAnimation<HTMLDivElement>();
  const servicesRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <Hero
        image={IMAGES.heroFacilities}
        title="Facilities & Amenities"
        subtitle="Everything you need for a comfortable and memorable stay"
        height="large"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <SectionHeader
            title="Hotel Amenities"
            subtitle="Modern conveniences combined with warm hospitality for the perfect mountain retreat"
          />

          <div
            ref={facilitiesRef.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
              facilitiesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {facilities.map((facility, index) => (
              <div
                key={facility.name}
                className={`p-6 rounded-sm transition-all duration-300 hover:shadow-xl ${
                  facility.highlight
                    ? 'bg-primary-700 text-white'
                    : 'bg-white shadow-lg'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                  facility.highlight
                    ? 'bg-gold-500'
                    : 'bg-gradient-to-br from-primary-100 to-gold-100'
                }`}>
                  <facility.icon className={`w-7 h-7 ${
                    facility.highlight ? 'text-white' : 'text-primary-700'
                  }`} />
                </div>
                <h3 className={`font-serif text-lg font-semibold mb-2 ${
                  facility.highlight ? 'text-white' : 'text-slate-800'
                }`}>
                  {facility.name}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  facility.highlight ? 'text-white/80' : 'text-slate-600'
                }`}>
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-400">Parking Facility</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">
                A Rare Luxury in Shimla
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Finding parking in Shimla can be a challenge, but not at Hotel Marc. We offer complimentary, secure drive-in parking right at the hotel entrance - a convenience that sets us apart.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">&#10003;</span>
                  </div>
                  <span className="text-white/80">Free parking for all guests</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">&#10003;</span>
                  </div>
                  <span className="text-white/80">Drive-in access to hotel entrance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">&#10003;</span>
                  </div>
                  <span className="text-white/80">24-hour security surveillance</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">&#10003;</span>
                  </div>
                  <span className="text-white/80">Space for multiple vehicles</span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=800&q=80"
                alt="Parking facility"
                className="rounded-sm shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 p-6 rounded-sm shadow-xl hidden md:block">
                <Car className="w-8 h-8 text-white mb-2" />
                <p className="text-white font-semibold">Free</p>
                <p className="text-white/80 text-sm">Parking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Guest Services"
            subtitle="Our commitment to your comfort and convenience"
          />

          <div
            ref={servicesRef.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
              servicesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className="text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-cream-100 flex items-center justify-center mb-4">
                  <service.icon className="w-10 h-10 text-primary-700" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-slate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl">
              <div className="text-center mb-8">
                <MapPin className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                <h2 className="font-serif text-3xl font-semibold text-slate-800 mb-4">
                  Travel Desk Services
                </h2>
                <p className="text-slate-600">
                  Let us help you explore the best of Shimla and its surroundings
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-slate-200 rounded-sm p-6">
                  <h3 className="font-semibold text-slate-800 mb-3">Sightseeing Tours</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>Kufri Day Trip</li>
                    <li>Naldehra Golf Course Visit</li>
                    <li>Chail Palace Excursion</li>
                    <li>Local Shimla Tour</li>
                  </ul>
                </div>
                <div className="border border-slate-200 rounded-sm p-6">
                  <h3 className="font-semibold text-slate-800 mb-3">Transfer Services</h3>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>Railway Station Pick-up/Drop</li>
                    <li>Bus Stand Transfer</li>
                    <li>Airport Transfer (Chandigarh)</li>
                    <li>Custom Tours on Request</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  Book Travel Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-700">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4">
            Need Any Assistance?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our team is available 24/7 to help you with any requests or inquiries.
          </p>
          <a href={`tel:${HOTEL_INFO.phone.replace(/\s/g, '')}`} className="btn-gold">
            Call Us: {HOTEL_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}
