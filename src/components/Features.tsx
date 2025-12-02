import React, { useState } from 'react';
import { Sparkles, Headphones, Zap, RefreshCw, Gem, TrendingUp, DollarSign, Shield } from 'lucide-react';
// Assuming you have this file, keeping it included
import FallBeamBackground from './FallBeamBackground'; 

const Features = () => {
  const [activeCard, setActiveCard] = useState(null);

  const features = [
    { icon: Sparkles, title: "Modern Design", description: "Modern design delivers clean, purposeful visuals with a fresh, instant impact." },
    { icon: Headphones, title: "24X7 User Support", description: "24×7 user support gives you immediate help anytime without delays." },
    { icon: Zap, title: "Fast", description: "Fast service delivers quick, efficient results without compromising quality." },
    { icon: RefreshCw, title: "Creative Design", description: "Creative design turns ideas into visuals that attract attention and communicate clearly." },
    { icon: Gem, title: "Business Growth", description: "Business growth comes from smart decisions that expand revenue and reach." },
    { icon: TrendingUp, title: "Market Strategy", description: "Market strategy is the plan that positions your brand and drives consistent results." },
    { icon: DollarSign, title: "Affordable Cost", description: "Affordable cost means strong value without unnecessary expenses." },
    { icon: Shield, title: "Safe", description: "Safe means reliable, protected, and low-risk." }
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 overflow-hidden relative">
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeInScale 0.8s ease-out forwards; opacity: 0; }
        .animate-slideUp { animation: slideInUp 0.6s ease-out forwards; opacity: 0; }

        .hexagon {
          width: 100%;
          max-width: 280px;
          height: 240px;
          background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
          position: relative;
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          transition: all 0.4s ease;
          border: 2px solid #2a2a2a; /* Fallback border */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* Create a pseudo-element for the border gradient effect since clip-path cuts off standard borders */
        .hexagon::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, #333, #000);
          z-index: -1;
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }

        .hexagon:hover, .hexagon.active {
          background: linear-gradient(145deg, #252525, #1a1a1a);
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(255, 68, 68, 0.3);
        }
        
        /* Highlight border effect on hover */
        .hexagon:hover::before {
            opacity: 1;
        }

        .hexagon::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 68, 68, 0.2) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .icon-circle {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          box-shadow: 0 8px 20px rgba(255, 68, 68, 0.4);
          margin-bottom: 1rem;
        }

        .hexagon:hover .icon-circle, .hexagon.active .icon-circle {
          transform: scale(1.15) rotate(360deg);
          box-shadow: 0 12px 30px rgba(255, 68, 68, 0.6);
        }

        /* Mobile specific styles */
        @media (max-width: 1023px) {
          .hexagon {
            height: 220px;
            max-width: 100%;
          }
        }

        /* Desktop hexagon positioning - RECALCULATED FOR PERFECT SYMMETRY */
        @media (min-width: 1024px) {
          .hexagon-grid {
            position: relative;
            height: 800px; /* Increased height slightly for breathing room */
            width: 100%;
            max-width: 1200px; /* Constrain width to keep shape compact */
            margin: 0 auto;
          }
          
          /* Row 1: Top (3 items) */
          .hex-item-0 { top: 15%; left: 20%; }
          .hex-item-1 { top: 15%; left: 50%; }
          .hex-item-2 { top: 15%; left: 80%; }
          
          /* Row 2: Middle (2 items - Offset) */
          .hex-item-3 { top: 45%; left: 35%; }
          .hex-item-4 { top: 45%; left: 65%; }
          
          /* Row 3: Bottom (3 items) */
          .hex-item-5 { top: 75%; left: 20%; }
          .hex-item-6 { top: 75%; left: 50%; }
          .hex-item-7 { top: 75%; left: 80%; }
        }
      `}</style>

      <div className="max-w-7xl w-full relative z-10">
        
        {/* Fallback for background if component missing */}
        {FallBeamBackground ? (
             <FallBeamBackground
             lineCount={24}
             beamColorClass="cyan-400"
             className="pointer-events-none absolute inset-0"
           />
        ) : <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />}
       

        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fadeIn relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-yellow-500">Us</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            We deliver innovative solutions that drive success and exceed expectations.
          </p>
        </div>

        {/* Mobile & Tablet Grid (Flex/Grid Layout) */}
        <div className="block lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 justify-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="animate-slideUp w-full max-w-[320px]"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <div className={`hexagon p-6 cursor-pointer ${activeCard === index ? 'active' : ''} mx-auto`}>
                  <div className="icon-circle">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-white text-lg font-bold text-center">
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

        {/* Desktop Hexagon Grid (Absolute Layout) */}
        <div className="hidden lg:block hexagon-grid">
          
          {/* Connecting Lines SVG - Updated to match new coordinates */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="#444" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {/* Top Row to Middle Row */}
            <line x1="20%" y1="25%" x2="35%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
            <line x1="50%" y1="25%" x2="35%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
            <line x1="50%" y1="25%" x2="65%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
            <line x1="80%" y1="25%" x2="65%" y2="40%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />

            {/* Middle Row to Bottom Row */}
            <line x1="35%" y1="55%" x2="20%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
            <line x1="35%" y1="55%" x2="50%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
            <line x1="65%" y1="55%" x2="50%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
            <line x1="65%" y1="55%" x2="80%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
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
                  animationDelay: `${index * 0.1}s`,
                  zIndex: 1,
                  width: '280px' // Ensure width is fixed for centering calculation
                }}
              >
                <div className="hexagon group p-6 cursor-pointer mx-auto">
                  <div className="icon-circle">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-white text-lg font-bold text-center group-hover:text-red-400 transition-colors">
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
        
      </div>
    </div>
  );
};

export default Features;