import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Video, TrendingUp, Code } from 'lucide-react';
import FallBeamBackground from './FallBeamBackground'; // ⬅️ import your background component
import SEO from './SEO';

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
  const ModernMotionLogo: React.FC<{ className?: string }> = ({ className = 'w-48 h-auto' }) => {
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
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <SEO
        title="AdsWise Marketing | Advertising, Branding & Digital Growth"
        description="We help brands grow through creative advertising, digital marketing, social media strategy and high-impact campaigns."
        url="https://www.adswisemarketing.com/"
      />

      {/* Falling beam animated background (behind everything) */}
      {/* <FallBeamBackground
        lineCount={24}
        beamColorClass="cyan-400"
        className="pointer-events-none"
      /> */}

      {/* Main content above beams */}
      <div className="relative z-20">
        {/* Main Container - Mobile First */}
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-20 py-20 md:py-12">
          {/* Mobile/Tablet: Centered Vertical Layout */}
          <div className="lg:hidden flex flex-col items-center text-center w-full max-w-md">
            {/* Logo (animated) */}
            <div
              className={`mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <ModernMotionLogo className="w-48 h-auto mx-auto animate-float" />
            </div>

            {/* Title */}
            <h1
              className={`text-5xl font-bold leading-tight mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="inline-block animate-text-gradient bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Adswise
              </span>
              <br />
              <span className="inline-block animate-text-gradient bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent inline-block">
                Marketing
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg font-light leading-relaxed mb-10 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              The last digital marketing agency,
              <br />
              You'll ever need.
            </p>

            {/* Services */}
            <div
              className={`grid grid-cols-4 gap-4 w-full transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
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
            <div className="mt-10 lg:mt-10">
              <h1
                className={`text-6xl font-bold leading-tight mb-8 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <span className="inline-block animate-text-gradient bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto]">
                  ADSWISE
                </span>
                <br />
                <span
                  className="inline-block animate-text-gradient bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto]"
                  style={{ animationDelay: '0.2s' }}
                >
                  MARKETING
                </span>
              </h1>

              <p
                className={`text-2xl font-light leading-relaxed mb-10 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                The last digital marketing agency,
                <br />
                You'll ever need.
              </p>

              <div
                className={`flex gap-12 flex-wrap transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="text-center flex flex-col items-center group cursor-pointer"
                  >
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
            className={`hidden lg:flex flex-1 items-center justify-center transition-all pt-5 duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="max-w-xl w-full">
              <ModernMotionLogo className="max-w-xl w-[85%] h-auto animate-float" />
            </div>
          </div>
        </div>
      </div>

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
