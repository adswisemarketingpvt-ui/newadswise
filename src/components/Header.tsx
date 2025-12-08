import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Services Dropdown States
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Industry Dropdown States
  const [isIndustryHovered, setIsIndustryHovered] = useState(false);
  const [isMobileIndustryOpen, setIsMobileIndustryOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu and reset dropdowns when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    
    // Reset Mobile Accordions
    setIsMobileServicesOpen(false);
    setIsMobileIndustryOpen(false); 
    
    // Reset Desktop Hovers
    setIsServicesHovered(false);
    setIsIndustryHovered(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' }, 
    { to: '/about-us', label: 'About' },
    { to: '/services', label: 'Services' }, 
    { to: '/industry', label: 'Industry' },
    { to: '/contact', label: 'Contact' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/blog', label: 'Blog' },
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
    { to : '/services/email-whatsapp-marketing' , label : 'Email & Whatsapp Marketing' },
  ];

  const industryDropdownLinks = [
    { to: '/industries/real-estate', label: 'Real Estate' },
    { to: '/industries/manufacturing', label: 'Manufacturing' },
    { to: '/industries/interior-design', label: 'Interior Design' },
    { to: '/industries/healthcare', label: 'Healthcare Industry' },
    { to: '/industries/education', label: 'Education' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md bg-black' : 'bg-black'}`}>
      {/* Main Navbar Container */}
      <div className="w-full text-white relative">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img src="https://adswisemarketing.com/logo.png" alt="Adswise" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              <span className="text-xl sm:text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white">
                Adswise Marketing
              </span>
            </Link>

            {/* Desktop Nav - Hidden on Mobile/Tablet, Visible on Large Screens */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                
                // --- SERVICES DROPDOWN LOGIC ---
                if (link.label === 'Services') {
                  return (
                    <div 
                      key={link.to}
                      className="relative h-20 flex items-center group"
                      onMouseEnter={() => setIsServicesHovered(true)}
                      onMouseLeave={() => setIsServicesHovered(false)}
                    >
                      <Link
                        to={link.to}
                        className="flex items-center gap-1 font-medium text-white/90 hover:text-yellow-300 transition-colors"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesHovered ? 'rotate-180' : ''}`} />
                      </Link>

                      <AnimatePresence>
                        {isServicesHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[80%] -left-4 w-72 pt-2"
                          >
                            <div className="bg-white rounded-lg shadow-xl overflow-hidden py-2 border-t-4 border-yellow-400">
                              {serviceDropdownLinks.map((service) => (
                                <Link
                                  key={service.to}
                                  to={service.to}
                                  className="block px-4 py-2.5 text-sm text-slate-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
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

                // --- INDUSTRY DROPDOWN LOGIC ---
                if (link.label === 'Industry') {
                    return (
                      <div 
                        key={link.to}
                        className="relative h-20 flex items-center group"
                        onMouseEnter={() => setIsIndustryHovered(true)}
                        onMouseLeave={() => setIsIndustryHovered(false)}
                      >
                        <Link
                          to={link.to}
                          className="flex items-center gap-1 font-medium text-white/90 hover:text-yellow-300 transition-colors"
                        >
                          {link.label}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isIndustryHovered ? 'rotate-180' : ''}`} />
                        </Link>
  
                        <AnimatePresence>
                          {isIndustryHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-[80%] -left-4 w-64 pt-2"
                            >
                              <div className="bg-white rounded-lg shadow-xl overflow-hidden py-2 border-t-4 border-yellow-400">
                                {industryDropdownLinks.map((industry) => (
                                  <Link
                                    key={industry.to}
                                    to={industry.to}
                                    className="block px-4 py-2.5 text-sm text-slate-800 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                                  >
                                    {industry.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
                
                // --- STANDARD LINKS ---
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="font-medium text-white/90 hover:text-yellow-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                className="ml-2 px-6 py-2.5 bg-yellow-400 text-black rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/20"
              >
                Free Business Report
              </Link>
            </div>

            {/* Mobile Menu Button - Visible on Small & Tablet Screens */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                aria-label="Toggle menu"
                className="p-2 rounded-md text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 w-full bg-white text-slate-900 shadow-2xl border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col px-4 pt-4 pb-8 max-h-[calc(100vh-80px)] overflow-y-auto">

                {navLinks.map((link) => {
                  
                  // --- MOBILE SERVICES ---
                  if (link.label === 'Services') {
                    return (
                      <div key={link.to} className="border-b border-slate-100 last:border-0">
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="flex items-center justify-between w-full px-2 py-4 text-slate-900 font-semibold text-lg"
                        >
                          {link.label}
                          <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-yellow-500' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-slate-50 rounded-lg mb-2"
                            >
                              {serviceDropdownLinks.map((service) => (
                                <Link
                                  key={service.to}
                                  to={service.to}
                                  className="block px-6 py-3 text-sm text-slate-600 hover:text-yellow-700 hover:bg-yellow-50 border-l-4 border-transparent hover:border-yellow-400 transition-all"
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

                  // --- MOBILE INDUSTRY ---
                  if (link.label === 'Industry') {
                    return (
                      <div key={link.to} className="border-b border-slate-100 last:border-0">
                        <button
                          onClick={() => setIsMobileIndustryOpen(!isMobileIndustryOpen)}
                          className="flex items-center justify-between w-full px-2 py-4 text-slate-900 font-semibold text-lg"
                        >
                          {link.label}
                          <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isMobileIndustryOpen ? 'rotate-180 text-yellow-500' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isMobileIndustryOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-slate-50 rounded-lg mb-2"
                            >
                              {industryDropdownLinks.map((industry) => (
                                <Link
                                  key={industry.to}
                                  to={industry.to}
                                  className="block px-6 py-3 text-sm text-slate-600 hover:text-yellow-700 hover:bg-yellow-50 border-l-4 border-transparent hover:border-yellow-400 transition-all"
                                >
                                  {industry.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  // --- MOBILE STANDARD LINKS ---
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-2 py-4 text-slate-900 font-semibold text-lg border-b border-slate-100 last:border-0 hover:text-yellow-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="mt-8 space-y-4">
                    <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-4 bg-yellow-400 text-black rounded-xl font-bold text-lg shadow-md active:scale-95 transition-transform"
                    >
                    Free Business Report
                    </Link>

                    <div className="text-center text-sm text-slate-500">
                    <p>Call us directly:</p>
                    <a href="tel:+919730266648" className="text-yellow-600 font-bold text-lg block mt-1">
                        +91 9730266648
                    </a>
                    </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}