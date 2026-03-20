import React from "react";
import {
  Sparkles,
  Headphones,
  Zap,
  RefreshCw,
  Gem,
  TrendingUp,
  DollarSign,
  Shield,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Sparkles,
    title: "Modern Design",
    description:
      "Modern design delivers clean, purposeful visuals with a fresh, instant impact.",
  },
  {
    icon: Headphones,
    title: "24X7 User Support",
    description:
      "24×7 user support gives you immediate help anytime without delays.",
  },
  {
    icon: Zap,
    title: "Fast",
    description:
      "Fast service delivers quick, efficient results without compromising quality.",
  },
  {
    icon: RefreshCw,
    title: "Creative Design",
    description:
      "Creative design turns ideas into visuals that attract attention.",
  },
  {
    icon: Gem,
    title: "Business Growth",
    description:
      "Business growth comes from smart decisions that expand revenue.",
  },
  {
    icon: TrendingUp,
    title: "Market Strategy",
    description:
      "Market strategy positions your brand and drives consistent results.",
  },
  {
    icon: DollarSign,
    title: "Affordable Cost",
    description:
      "Affordable cost means strong value without unnecessary expenses.",
  },
  {
    icon: Shield,
    title: "Safe",
    description: "Safe means reliable, protected, and low-risk.",
  },
];

const positions = [
  { x: -320, y: -220 },
  { x: 0, y: -220 },
  { x: 320, y: -220 },
  { x: -160, y: 0 },
  { x: 160, y: 0 },
  { x: -320, y: 220 },
  { x: 0, y: 220 },
  { x: 320, y: 220 },
];

const Features = () => {
  return (
    <div className="relative min-h-screen bg-[#D3D3D3] flex flex-col items-center justify-center px-6 py-10 text-center overflow-hidden">
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        {/* Main Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#363636] mb-6 tracking-tight">
            WHY CHOOSE <span className="text-[#536186]">ADSWISE MARKETING</span>{" "}
            OVER OTHERS?
          </h2>
          <p className="text-[#363636] text-xl font-semibold mb-8 max-w-3xl mx-auto italic">
            We don’t begin with campaigns. We begin with business clarity.
          </p>
        </div>

        {/* Strategy Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 text-left">
          {[
            {
              t: "Strategy-First",
              d: "Every engagement starts with market research, buyer persona mapping, and a documented digital roadmap.",
            },
            {
              t: "B2B & High-Value Focus",
              d: "Experience with industrial, real estate, and service brands where one enquiry outweighs a thousand clicks.",
            },
            {
              t: "Full-Funnel Thinking",
              d: "From brand visibility to lead capture and remarketing—everything works as one connected system.",
            },
            {
              t: "Creative That Sells",
              d: "Websites and ad creatives designed to drive form fills, calls, and store visits, not just look good.",
            },
            {
              t: "Transparent Reporting",
              d: "Clear dashboards and performance reviews so you know exactly what’s working.",
            },
            {
              t: "Invested in Success",
              d: "We pivot when tactics don't work because your growth becomes our portfolio.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/40 backdrop-blur-sm p-5 rounded-xl border border-[#536186]/20"
            >
              <h4 className="font-bold text-[#363636] mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#536186]" /> {item.t}
              </h4>
              <p className="text-sm text-[#536186] leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>

        {/* MOBILE HEX GRID */}
        {/* <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="hexagon mx-auto p-6">
                <div className="icon-circle">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-center font-bold text-sm">{f.title}</h3>
                <p className="text-gray-300 text-[10px] text-center mt-2 px-2">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div> */}

        {/* DESKTOP HEX GRID */}
        {/* <div className="hidden lg:flex w-full justify-center mt-10">
          <div className="relative w-[900px] h-[550px]">
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {positions.map((p, i) => (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${p.x}px)`}
                  y2={`calc(50% + ${p.y}px)`}
                  stroke="#536186"
                  strokeWidth="1"
                  opacity="0.15"
                />
              ))}
            </svg>

            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) translate(${positions[i].x}px, ${positions[i].y}px)`,
                  }}
                >
                  <div className="hexagon p-6 cursor-pointer group">
                    <div className="icon-circle group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-white text-center font-bold text-sm">
                      {f.title}
                    </h3>
                    <p className="text-gray-300 text-[10px] text-center mt-3 px-4 leading-tight">
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
      {/* CTA Button */}
      <div className="mt-4">
        <Link
          to="/contact"
          className="group flex items-center gap-3 bg-[#363636] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#536186] transition-all duration-300 shadow-xl hover:shadow-[#536186]/40"
        >
          Book a Free Consultation
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <style>{`
        .hexagon {
          width: 240px;
          height: 210px;
          background: linear-gradient(145deg, #4a4a4a, #2b2b2b);
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255,255,255,0.05);
        }
        
        .hexagon:hover {
          transform: scale(1.08) translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          z-index: 50;
        }

        .icon-circle {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #536186, #B0C4DE);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default Features;
