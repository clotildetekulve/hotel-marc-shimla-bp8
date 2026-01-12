import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, Car, Mountain } from 'lucide-react';
import { HOTEL_INFO, NAV_LINKS, WHATSAPP_LINK } from '../constants';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-primary-600 to-gold-500 flex items-center justify-center">
                <span className="text-white font-serif text-2xl font-bold">M</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">Hotel Marc</h3>
                <p className="text-sm text-slate-400">Shimla</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {HOTEL_INFO.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-slate-400 hover:text-gold-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <a
                href={`tel:${HOTEL_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-3 text-slate-400 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>{HOTEL_INFO.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors text-sm"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{HOTEL_INFO.email}</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{HOTEL_INFO.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Why Choose Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Car className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>Free Parking Available</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mountain className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>Valley View Rooms</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span>24/7 Room Service</span>
              </div>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-sm text-sm font-medium transition-colors"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              2026 Hotel Marc Shimla. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
