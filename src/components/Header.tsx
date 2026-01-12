import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import { HOTEL_INFO, NAV_LINKS, WHATSAPP_LINK } from '../constants';
import { useScrollHeader } from '../hooks/useScrollHeader';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollHeader();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const headerBg = isScrolled || !isHomePage
    ? 'bg-white shadow-md'
    : 'bg-transparent';

  const textColor = isScrolled || !isHomePage
    ? 'text-slate-800'
    : 'text-white';

  const logoColor = isScrolled || !isHomePage
    ? 'text-primary-700'
    : 'text-white';

  return (
    <>
      <div className={`hidden lg:block transition-all duration-300 ${isScrolled ? 'bg-primary-800' : 'bg-primary-900/80'}`}>
        <div className="container-custom py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm text-white/90">
            <div className="flex items-center gap-6">
              <a href={`tel:${HOTEL_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>{HOTEL_INFO.phone}</span>
              </a>
              <a href={`mailto:${HOTEL_INFO.email}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{HOTEL_INFO.email}</span>
              </a>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-1 rounded-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      <header className={`fixed w-full z-50 transition-all duration-300 ${headerBg} ${isScrolled ? 'top-0' : 'lg:top-10 top-0'}`}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-sm bg-gradient-to-br from-primary-600 to-gold-500 flex items-center justify-center`}>
                <span className="text-white font-serif text-2xl font-bold">M</span>
              </div>
              <div>
                <h1 className={`font-serif text-xl font-semibold ${logoColor} transition-colors`}>
                  Hotel Marc
                </h1>
                <p className={`text-xs ${isScrolled || !isHomePage ? 'text-slate-500' : 'text-white/80'} transition-colors`}>
                  Shimla
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${textColor} ${location.pathname === link.path ? 'after:w-full' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Book Now
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 ${textColor}`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-primary-600 to-gold-500 flex items-center justify-center">
                  <span className="text-white font-serif text-xl font-bold">M</span>
                </div>
                <span className="font-serif text-lg font-semibold text-primary-700">Hotel Marc</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-600 hover:text-slate-900"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8 space-y-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </a>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <a
                  href={`tel:${HOTEL_INFO.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-primary-700"
                >
                  <Phone className="w-5 h-5" />
                  <span>{HOTEL_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${HOTEL_INFO.email}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-primary-700"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">{HOTEL_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
