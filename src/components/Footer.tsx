import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", to: "/about-us" },
      { label: "Services", to: "/services" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Blog", to: "/blog" },
    ],
    services: [
      { label: "Strategy Consulting", to: "/services/strategy-consulting" },
      { label: "Performance Marketing", to: "/services/performance-marketing" },
      {
        label: "Social Media Marketing",
        to: "/services/social-media-marketing",
      },
      { label: "Website Development", to: "/services/website-development" },
      { label: "Video Production", to: "/services/video-production" },
      { label: "E-Commerce", to: "/services/ecommerce-development" },
      { label: "Graphics Designing", to: "/services/graphics-designing" },
      { label: "SEO", to: "/services/search-engine-optimization" },
      {
        label: "Mobile App Development",
        to: "/services/mobile-app-development",
      },
      {
        label: "Platform Listing Optimization",
        to: "/services/Platform-Listing-Optimization",
      },
      {
        label: "Media Buying & Planning",
        to: "/services/media-buying-planning",
      },
      {
        label: "Email & WhatsApp Marketing",
        to: "/services/email-whatsapp-marketing",
      },
      { label: "Brand Development", to: "/services/brand-development" },
    ],
    support: [
      { label: "Contact", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy-policy" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/61578110506688",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/reel/DQZNxBniIGH/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://in.linkedin.com/company/adswise-marketing",
      label: "LinkedIn",
    },
  ];

  return (
    /* Background: Stone Gray #536186 | Text: Fog Gray #D3D3D3 */
    <footer className="bg-[#536186] text-[#D3D3D3] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <img
                className="h-10 w-10 brightness-110 transition-transform group-hover:scale-105"
                src="https://adswisemarketing.com/logo.png"
                alt="Adswise Logo"
              />
              {/* Brand Title: Ash Gray #B0C4DE */}
              <span className="text-2xl font-black text-[#B0C4DE] tracking-tighter">
                Adswise Marketing
              </span>
            </Link>
            <p className="text-[#D3D3D3]/80 mb-8 max-w-sm leading-relaxed font-medium">
              Transform your digital presence with data-driven marketing
              strategies that deliver measurable results.
            </p>
            <div className="space-y-4">
              <div className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-[#B0C4DE]" />
                <a
                  href="mailto:adswisemarketing.pvt@gmail.com"
                  className="hover:text-white transition-colors font-semibold"
                >
                  adswisemarketing.pvt@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-[#B0C4DE]" />
                <a
                  href="tel:+919730266648"
                  className="hover:text-white transition-colors font-semibold"
                >
                  +91 9730266648
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-[#B0C4DE]" />
                <span className="font-semibold">Pune, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Links Column: Company */}
          <div>
            <h3 className="text-[#B0C4DE] font-black uppercase tracking-widest text-sm mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column: Services */}
          <div>
            <h3 className="text-[#B0C4DE] font-black uppercase tracking-widest text-sm mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column: Support */}
          <div>
            <h3 className="text-[#B0C4DE] font-black uppercase tracking-widest text-sm mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#D3D3D3]/60 text-sm font-medium">
              © {currentYear} Adswise Marketing. All rights reserved.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  /* Social Icon Base: Charcoal Gray #363636 */
                  className="w-10 h-10 bg-[#363636] text-[#D3D3D3] rounded-lg flex items-center justify-center hover:bg-[#B0C4DE] hover:text-[#363636] transition-all duration-300 transform hover:-translate-y-1"
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
