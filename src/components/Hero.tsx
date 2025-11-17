import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Video, TrendingUp, Code } from 'lucide-react';

// Single-file Hero component with integrated animated logo (Framer Motion + TailwindCSS)
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // simple entrance trigger
    setIsVisible(true);
  }, []);

  const services = [
    { icon: Settings, title: 'Smart', subtitle: 'Strategy' },
    { icon: Video, title: 'Content', subtitle: 'Creation' },
    { icon: TrendingUp, title: 'Growth', subtitle: 'Marketing' },
    { icon: Code, title: 'Design And', subtitle: 'Development' }
  ];

  // Animated logo component (local subcomponent)
  const ModernMotionLogo = ({ className = 'w-48 h-auto' }) => {
    return (
      <div className={`flex items-center justify-center ${className} rounded-xl`}>
        <motion.img
          src="https://adswisemarketing.com/logo.png"
          alt="Adswise Marketing"
          className="w-[80%] object-contain mt-2"

          // Initial State
          initial={{ y: 0, opacity: 0 }}

          // Animation Loop
          animate={{
            y: [-8, 8, -8],
            opacity: 1,
            filter: [
              'drop-shadow(0 0 0px rgba(56, 189, 248, 0))',
              'drop-shadow(0 0 20px rgba(56, 189, 248, 0.5))', // Blue glow pulse
              'drop-shadow(0 0 0px rgba(56, 189, 248, 0))'
            ]
          }}

          // Transition Settings
          transition={{
            duration: 4,
            ease: 'easeInOut',
            repeat: Infinity
          }}

          // Hover Interaction
          whileHover={{
            scale: 1.06,
            rotate: 4,
            filter: 'drop-shadow(0 0 25px rgba(255, 255, 255, 0.85))'
          }}

          onError={(e) => {
            // graceful fallback if image fails
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Main Container - Mobile First */}
      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-20 py-20 md:py-12">

        {/* Mobile/Tablet: Centered Vertical Layout */}
        <div className="lg:hidden flex flex-col items-center text-center w-full max-w-md">
          {/* Logo (animated) */}
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <ModernMotionLogo className="w-48 h-auto mx-auto animate-float" />
          </div>

          {/* Title */}
          <h1
            className={`text-5xl font-bold leading-tight mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <span className="inline-block animate-text-gradient bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">Adswise</span>
            <br />
            <span className="inline-block animate-text-gradient bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent inline-block">Marketing</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg font-light leading-relaxed mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '600ms' }}
          >
            The last digital marketing agency,
            <br />
            You'll ever need.
          </p>

          {/* Services */}
          <div
            className={`grid grid-cols-4 gap-4 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '800ms' }}
          >
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 mb-2 flex items-center justify-center text-orange-500 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xs font-semibold leading-tight">{service.title}</h3>
                <p className="text-xs font-normal leading-tight">{service.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Side-by-side Layout */}
        <div className="hidden lg:flex flex-1 max-w-2xl pl-10 border-l-4 border-orange-500 mt-10 lg:mt-0">
          <div className=" mt-10 lg:mt-10">
            <h1
              className={`text-6xl font-bold leading-tight mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="inline-block animate-text-gradient bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto]">ADSWISE</span>
              <br />
              <span className="inline-block animate-text-gradient bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto]" style={{ animationDelay: '0.2s' }}>
                MARKETING
              </span>
            </h1>

            <p
              className={`text-2xl font-light leading-relaxed mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '300ms' }}
            >
              The last digital marketing agency,
              <br />
              You'll ever need.
            </p>

            <div
              className={`flex gap-12 flex-wrap transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '600ms' }}
            >
              {services.map((service, index) => (
                <div key={index} className="text-center flex flex-col items-center group cursor-pointer">
                  <div className="w-20 h-20 mb-4 flex items-center justify-center text-orange-500 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <service.icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold leading-tight">{service.title}</h3>
                  <p className="text-sm font-normal leading-tight">{service.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Logo on Right (animated) */}
        <div
          className={`hidden lg:flex flex-1 items-center justify-center transition-all pt-5 duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="max-w-xl w-full">
            <ModernMotionLogo className="max-w-xl w-[85%] h-auto animate-float" />
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      {/* <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Open WhatsApp chat"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8 md:w-9 md:h-9">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a> */}

      <style>{`
        @keyframes text-gradient {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .animate-text-gradient { animation: text-gradient 3s ease infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }

        /* ensure the logo container is visually centered on very small screens */
        @media (max-width: 420px) {
          .animate-float { animation-duration: 5.5s; }
        }
      `}</style>
    </div>
  );
}
