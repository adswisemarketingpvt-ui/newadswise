import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // New states for dropdowns
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false); // Reset mobile accordion
    setIsServicesHovered(false);    // Reset desktop hover
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' }, 
    { to: '/about-us', label: 'About' },
    { to: '/services', label: 'Services' }, // We will intercept this label in the map loop
    { to: '/contact', label: 'Contact' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' }
  ];

  const serviceDropdownLinks = [
    { to: '/services/strategy-consulting', label: 'Strategy Consulting' },
    { to: '/services/performance-marketing', label: 'Performance Marketing' },
    { to: '/services/social-media-marketing', label: 'Social Media Marketing' },
    { to: '/services/website-development', label: 'Website Development' },
    { to: '/services/video-production', label: 'Video Production' },
    { to: '/services/ecommerce-development', label: 'E-Commerce' },
    { to: '/services/graphics-designing', label: 'Graphics Designing' },
    { to: '/services/search-engine-optimization', label: 'SEO' },
    { to: '/services/answer-engine-optimization', label: 'Answer Engine Optimization' },
    { to: '/services/Platform-Listing-Optimization', label: 'Platform Listing Optimization' },
    { to: '/services/media-buying-planning', label: 'Media Buying & Planning' },

  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="bg-black text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="https://adswisemarketing.com/logo.png" alt="Adswise" className="w-8 h-8 object-contain" />
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
                Adswise Marketing
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                if (link.label === 'Services') {
                  return (
                    <div 
                      key={link.to}
                      className="relative h-20 flex items-center" // Match header height to make hover area comfortable
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <Link
                        to={link.to}
                        className="flex items-center gap-1 font-medium text-white/90 hover:text-yellow-300"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesHovered ? 'rotate-180' : ''}`} />
                      </Link>

                      {/* Desktop Dropdown */}
                      <AnimatePresence>
                        {isServicesHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[80%] -left-4 w-64 pt-2"
                          >
                            <div className="bg-white rounded-lg shadow-xl overflow-hidden py-2">
                              {serviceDropdownLinks.map((service) => (
                                <Link
                                  key={service.to}
                                  to={service.to}
                                  className="block px-4 py-3 text-sm text-slate-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="font-medium text-white/90 hover:text-yellow-300"
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                className="ml-2 px-5 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:brightness-95 transition"
              >
                Free Business Report
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                aria-label="Toggle menu"
                className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/40"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden bg-white text-slate-900 shadow-lg overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 h-[80vh] overflow-y-auto">

                {navLinks.map((link) => {
                  if (link.label === 'Services') {
                    return (
                      <div key={link.to} className="block">
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="flex items-center justify-between w-full px-3 py-3 text-slate-800 font-medium"
                        >
                          {link.label}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="overflow-hidden bg-slate-50 rounded-md"
                            >
                              {serviceDropdownLinks.map((service) => (
                                <Link
                                  key={service.to}
                                  to={service.to}
                                  className="block px-6 py-3 text-sm text-slate-600 hover:text-yellow-600 border-l-2 border-transparent hover:border-yellow-400"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-3 py-3 text-slate-800 font-medium"
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <Link
                  to="/contact"
                  className="mt-3 block text-center px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold"
                >
                  Free Business Report
                </Link>

                <div className="mt-4 text-sm text-slate-500">
                  <p>
                    Call us:{' '}
                    <a href="tel:+1234567890" className="text-yellow-500">
                      +1 234 567 890
                    </a>
                  </p>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}