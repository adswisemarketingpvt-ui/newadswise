import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Zap } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Services', to: '/services' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Blog', to: '/blog' }
    ],
    services: [
      { label: 'Strategy Consulting', to: '/services/strategy-consulting' },
      { label: 'Performance Marketing', to: '/services/performance-marketing' },
      { label: 'Social Media Marketing', to: '/services/social-media-marketing' },
      { label: 'Website Development', to: '/services/website-development' },
      { label: 'Video Production', to: '/services/video-production' },
      { label: 'E-Commerce', to: '/services/ecommerce-development' },
      { label: 'Graphics Designing', to: '/services/graphics-designing' },
      { label: 'SEO ', to: '/services/search-engine-optimization' },
      { label: 'Answer Engine Optimization', to: '/services/answer-engine-optimization' },
      { label: 'Platform Listing Optimization', to: '/services/Platform-Listing-Optimization' },
      { label: 'Media Buying & Planning', to: '/services/media-buying-planning' },
      { label : 'Email & Watsapp Marketing' , to : '/services/email-whatsapp-marketing' },

    ],
    support: [
      { label: 'Contact', to: '/contact' },
      // { label: 'Pricing', to: '/pricing' },
      // { label: 'FAQ', to: '/faq' },
      { label: 'Privacy Policy', to: '/privacy' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/61578110506688', label: 'Facebook' },
    // { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/reel/DQZNxBniIGH/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://in.linkedin.com/company/adswise-marketing', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img className="h-10 w-10" src="https://adswisemarketing.com/logo.png" alt="" />
              <span className="text-2xl font-bold text-white">Adswise Marketing</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your digital presence with data-driven marketing strategies that deliver measurable results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-500" />
                <a href="mailto:hello@magemarketer.com" className="hover:text-white transition-colors">
                  adswisemarketing.pvt@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +91 9730266648
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                <span>Pune , Maharashtra</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} AdswiseMarketing. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
