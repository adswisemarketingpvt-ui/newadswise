import React, { useState } from 'react';
import { Sparkles, Headphones, Zap, RefreshCw, Gem, TrendingUp, DollarSign, Shield } from 'lucide-react';

const Features = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const features = [
    { icon: Sparkles, title: "Modern Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
    { icon: Headphones, title: "24X7 User Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
    { icon: Zap, title: "Fast", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
    { icon: RefreshCw, title: "Creative Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
    { icon: Gem, title: "Business Growth", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
    { icon: TrendingUp, title: "Market Strategy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
    { icon: DollarSign, title: "Affordable Cost", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" },
    { icon: Shield, title: "Safe", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. JustFreeSlide.com" }
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 overflow-hidden">
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeInScale 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideUp {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .hexagon {
          width: 100%;
          max-width: 280px;
          height: 240px;
          background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
          position: relative;
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          transition: all 0.4s ease;
          border: 2px solid #2a2a2a;
        }

        .hexagon:hover, .hexagon.active {
          background: linear-gradient(145deg, #252525, #1a1a1a);
          border-color: #ff4444;
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(255, 68, 68, 0.3);
        }

        .hexagon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 68, 68, 0.1) 0%, transparent 50%);
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .hexagon:hover::before, .hexagon.active::before {
          opacity: 1;
        }

        .icon-circle {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          box-shadow: 0 8px 20px rgba(255, 68, 68, 0.4);
        }

        .hexagon:hover .icon-circle, .hexagon.active .icon-circle {
          transform: scale(1.15) rotate(360deg);
          box-shadow: 0 12px 30px rgba(255, 68, 68, 0.6);
        }

        /* Mobile specific styles */
        @media (max-width: 768px) {
          .hexagon {
            height: 200px;
            max-width: 100%;
          }
          
          .icon-circle {
            width: 60px;
            height: 60px;
          }
        }

        /* Desktop hexagon positioning */
        @media (min-width: 1024px) {
          .hexagon-grid {
            position: relative;
            height: 700px;
          }
          
          .hex-item-0 { top: 12%; left: 8%; }
          .hex-item-1 { top: 12%; left: 40%; }
          .hex-item-2 { top: 12%; left: 72%; }
          .hex-item-3 { top: 42%; left: 24%; }
          .hex-item-4 { top: 42%; left: 56%; }
          .hex-item-5 { top: 72%; left: 8%; }
          .hex-item-6 { top: 72%; left: 40%; }
          .hex-item-7 { top: 72%; left: 72%; }
        }
      `}</style>

      <div className="max-w-7xl w-full relative">
        {/* Header */}
        <div className="text-center mb-4 md:mb-5 animate-fadeIn" style={{ animationDelay: '0s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-yellow-500">Us</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-lg">
            We deliver innovative solutions that drive success and exceed expectations.
          </p>
        </div>

        {/* Mobile & Tablet Grid */}
        <div className="block lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 px-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="animate-slideUp flex justify-center"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                onTouchStart={() => setActiveCard(index)}
              >
                <div className={`hexagon flex flex-col items-center justify-center p-6 cursor-pointer ${activeCard === index ? 'active' : ''}`}>
                  <div className="icon-circle mb-4">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-white text-base md:text-lg font-bold text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs text-center mt-2 leading-relaxed px-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Hexagon Grid */}
        <div className="hidden lg:block hexagon-grid">
          {/* Connecting Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#333" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <line x1="20%" y1="20%" x2="45%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
            <line x1="55%" y1="20%" x2="78%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
            <line x1="20%" y1="80%" x2="45%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
            <line x1="55%" y1="80%" x2="78%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
            <line x1="20%" y1="25%" x2="30%" y2="45%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="25%" x2="38%" y2="45%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
            <line x1="62%" y1="45%" x2="50%" y2="25%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
            <line x1="80%" y1="25%" x2="68%" y2="45%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
            <line x1="30%" y1="55%" x2="20%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
            <line x1="38%" y1="55%" x2="50%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
            <line x1="62%" y1="55%" x2="50%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
            <line x1="68%" y1="55%" x2="80%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.3" />
          </svg>

          {/* Feature Hexagons */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`absolute animate-fadeIn hex-item-${index}`}
                style={{
                  transform: 'translate(-50%, -50%)',
                  animationDelay: `${index * 0.15}s`,
                  zIndex: 1
                }}
              >
                <div className="hexagon flex flex-col items-center justify-center p-8 cursor-pointer">
                  <div className="icon-circle mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-white text-lg font-bold text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs text-center mt-3 leading-relaxed px-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Icons */}
        <div className="flex justify-start gap-3 md:gap-4 mt-8 md:mt-12 ml-4 md:ml-8 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          {/* <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-lg shadow-red-500/50">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 3H3v18h18V3zM9.5 17.5h-2v-11h2v11zm7 0h-2v-11h2v11z"/>
            </svg>
          </div> */}
          {/* <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-lg shadow-yellow-500/50">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div> */}
        </div>
        
      </div>
    </div>
  );
};

export default Features;