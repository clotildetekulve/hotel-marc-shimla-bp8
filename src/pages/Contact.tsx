import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';
import { Hero, SectionHeader, ContactForm, FacebookEmbed } from '../components';
import { IMAGES, HOTEL_INFO, DISTANCES, WHATSAPP_LINK } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const infoRef = useScrollAnimation<HTMLDivElement>();
  const distancesRef = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <Hero
        image={IMAGES.heroContact}
        title="Contact & Location"
        subtitle="Get in touch with us for reservations and inquiries"
        height="large"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div
              ref={infoRef.ref}
              className={`transition-all duration-700 ${
                infoRef.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-600">Get in Touch</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-800 mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you have questions about our rooms, need assistance with booking, or want to plan your perfect Shimla vacation, our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                    <a href={`tel:${HOTEL_INFO.phone.replace(/\s/g, '')}`} className="text-slate-600 hover:text-primary-700 transition-colors block">
                      {HOTEL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                    <a href={`mailto:${HOTEL_INFO.email}`} className="text-slate-600 hover:text-primary-700 transition-colors">
                      {HOTEL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Address</h3>
                    <p className="text-slate-600">{HOTEL_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">Check-in / Check-out</h3>
                    <p className="text-slate-600">Check-in: {HOTEL_INFO.checkIn}</p>
                    <p className="text-slate-600">Check-out: {HOTEL_INFO.checkOut}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Message Us on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-xl">
              <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-6">
                Send Us an Inquiry
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Getting Here"
            subtitle="Distances from Hotel Marc to major attractions and transport hubs"
          />

          <div
            ref={distancesRef.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 transition-all duration-700 ${
              distancesRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {DISTANCES.map((item, index) => (
              <div
                key={item.place}
                className="bg-cream-50 p-6 rounded-sm text-center hover:bg-primary-700 hover:text-white transition-all duration-300 group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Navigation className="w-8 h-8 text-gold-500 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 group-hover:text-white mb-1 text-sm">
                  {item.place}
                </h3>
                <p className="text-2xl font-serif font-bold text-primary-700 group-hover:text-gold-400 mb-1">
                  {item.distance}
                </p>
                <p className="text-xs text-slate-500 group-hover:text-white/70">
                  {item.time}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-sm overflow-hidden shadow-xl h-96">
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
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <SectionHeader
            title="Connect With Us"
            subtitle="Follow us on Facebook for updates, special offers, and guest stories"
          />

          <div className="flex justify-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <FacebookEmbed
                width={400}
                height={450}
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
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow Us on Facebook
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-gold-500" />
                <span className="text-sm font-medium tracking-widest uppercase text-gold-400">How to Reach</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6">
                Directions to Hotel Marc
              </h2>
              <div className="space-y-6 text-white/80">
                <div>
                  <h3 className="font-semibold text-white mb-2">From Shimla Railway Station</h3>
                  <p>Take a taxi or auto to Chaura Maidan (approximately 10 minutes). Ask for Hotel Marc near Kotshera College.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">From ISBT Bus Stand</h3>
                  <p>The hotel is about 5 km from the new bus stand. Pre-book our pickup service for convenience.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">From Mall Road</h3>
                  <p>A pleasant 30-minute walk through scenic routes or a quick 10-minute drive via taxi.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">By Car</h3>
                  <p>Head towards Chaura Maidan from the main Shimla bypass. The hotel has ample free parking.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-sm">
              <h3 className="font-serif text-2xl font-semibold text-white mb-6 text-center">
                Need Pickup Service?
              </h3>
              <p className="text-white/70 text-center mb-6">
                We offer pickup and drop services from Railway Station and Bus Stand. Contact us to arrange your transfer.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${HOTEL_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-sm font-medium transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call for Pickup
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-sm font-medium transition-colors"
                >
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
