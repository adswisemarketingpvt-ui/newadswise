import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  X,
  Building2,
  Factory,
  Armchair,
  HeartPulse,
  Landmark,
  GraduationCap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

type IconComponent = React.ComponentType<any>;

interface IndustryItem {
  icon: IconComponent;
  title: string;
  description: string;
  color: string;
  slug: string;
}

export default function Industry(): JSX.Element {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.12 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const industries: IndustryItem[] = [
    {
      icon: Building2,
      title: "Real Estate",
      description: "Digital ecosystems for developers & brokers to generate qualified leads and sell properties faster.",
      color: "#C7843B",
      slug: "real-estate",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "B2B strategies to connect manufacturers with global distributors and industrial partners.",
      color: "#F3BD68",
      slug: "manufacturing",
    },
    {
      icon: Armchair, // Represents Interior Design
      title: "Interior Design",
      description: "Aesthetic branding and visual storytelling to attract high-value residential and commercial clients.",
      color: "#C7843B",
      slug: "interior-design",
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      description: "Patient-centric marketing for hospitals, clinics, and health-tech startups to build trust.",
      color: "#F3BD68",
      slug: "healthcare",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Enrollment-focused campaigns for universities, ed-tech, and coaching institutes.",
      color: "#F3BD68",
      slug: "education",
    },
    // Added 2 extras to balance the grid visually, remove if strictly only want 4
    {
      icon: Landmark,
      title: "Finance & Fintech",
      description: "Secure, compliance-ready marketing for banks, advisors, and fintech platforms.",
      color: "#C7843B",
      slug: "finance",
    },
    
  ];

  const openFeatured = (index: number) => {
    setActiveIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeFeatured = () => {
    setActiveIndex(null);
    document.body.style.overflow = "";
  };

  const goToIndustry = (industry: IndustryItem) => {
    // ensure overlay closed and scroll unlocked
    setActiveIndex(null);
    document.body.style.overflow = "";
    // Updated route to /industries/
    navigate(`/industries/${industry.slug}`);
  };

  return (
    <div className="min-h-screen bg-black from-[#4D6473] via-[#2C4657] to-[#172531] py-20 px-6 md:px-12 relative">
      
      {/* ========================
          "Why Choose Us" / Stats Section
          (Adapted for Industry Context)
         ======================== */}
      <section
        id="how-we-help"
        aria-labelledby="how-we-help-title"
        className="mb-12"
      >
        <div className="hw-container">
          <h2
            id="how-we-help-title"
            className="text-4xl font-bold text-white mb-3 text-center"
          >
            Specialized Industry Expertise
          </h2>
          <p className="hw-lead text-center mx-auto max-w-3xl text-lg text-[rgba(255,255,255,0.85)] mb-8">
            At <strong>Adswise Marketing</strong>, we don’t use a one-size-fits-all approach.
            We understand the unique challenges of your sector and craft 
            tailored strategies that dominate your specific market niche.
          </p>

          <div
            className="hw-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            role="list"
          >
            {/* Card 1 */}
            <article
              className="hw-card rounded-2xl p-8 text-center bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] transition-all"
              role="listitem"
            >
              <svg className="hw-icon mx-auto" viewBox="0 0 24 24" aria-hidden="true" width="72" height="72">
                <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-4h4v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-white font-bold text-xl mt-5">
                Sector Specific
              </h3>
            </article>

            {/* Card 2 */}
            <article
              className="hw-card rounded-2xl p-8 text-center bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] transition-all"
              role="listitem"
            >
              <svg className="hw-icon mx-auto" viewBox="0 0 24 24" aria-hidden="true" width="72" height="72">
                 <path d="M12 3c-1.5 0-2 1-2 1s-1 1-1 3 1 3 1 3 1.5.5 2 1 1 .5 1 1-1 2-1 2 3 0 4-1 2-3 2-4-1.5-3-3-4-3-2-3-2z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                 <path d="M6 18h12v2H6z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-white font-bold text-xl mt-5">
                High ROI Logic
              </h3>
            </article>

            {/* Card 3 */}
            <article
              className="hw-card rounded-2xl p-8 text-center bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] transition-all"
              role="listitem"
            >
              <svg className="hw-icon mx-auto" viewBox="0 0 24 24" aria-hidden="true" width="72" height="72">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M2 12h20" fill="none" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="currentColor" strokeWidth="1.6"/>
              </svg>
              <h3 className="text-white font-bold text-xl mt-5">
                Global Standards
              </h3>
            </article>

            {/* Card 4 */}
            <article
              className="hw-card rounded-2xl p-8 text-center bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] transition-all"
              role="listitem"
            >
              <svg className="hw-icon mx-auto" viewBox="0 0 24 24" aria-hidden="true" width="72" height="72">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-white font-bold text-xl mt-5">
                Audience Focused
              </h3>
            </article>
          </div>
        </div>

        <style>{`
          #how-we-help { background: #000; color: #fff; padding: 48px 20px; overflow: hidden; }
          .hw-container { max-width: 1200px; margin: 0 auto; text-align: center; }
          .hw-lead { max-width: 980px; margin: 0 auto 24px; font-size: 18px; color: rgba(255,255,255,0.85); line-height: 1.5; }
          .hw-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
          .hw-card { transition: .3s ease; }
          .hw-card:hover { transform: translateY(-8px); background: rgba(255,255,255,0.06); }
          .hw-card h3 { margin-top: 20px; font-size: 20px; font-weight: 700; color: #fff; }
          .hw-icon { width: 72px; height: 72px; color: #f7931a; transition: .4s; }
          .hw-card:hover .hw-icon { transform: translateY(-6px) scale(1.1); }
          @media (max-width: 1000px) { .hw-grid { grid-template-columns: repeat(2, 1fr); } }
          @media (max-width: 520px) { .hw-grid { grid-template-columns: 1fr; } #how-we-help { padding: 28px 14px; } }
        `}</style>
      </section>

      {/* ========================
          Main Industry Grid
         ======================== */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-4 md:mb-5 animate-fadeIn" style={{ animationDelay: '0s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold text-white mb-4">
            Industries We <span className="text-yellow-500">Serve</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-lg">
            Every industry has its own language. We help you speak it fluently 
            to connect with your customers and drive sustainable growth in your sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative">
          {industries.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleCards.has(index);
            const hideWhileActive = activeIndex !== null && activeIndex === index;
            
            return (
              <div
                key={item.slug}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => openFeatured(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openFeatured(index);
                }}
                className={`
                  bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-10 scale-95"
                  }
                  ${hideWhileActive ? "opacity-0 pointer-events-none" : ""}
                  cursor-pointer
                `}
                style={{
                  transitionDelay: `${(index % 3) * 80}ms`,
                  animationDelay: `${(index % 3) * 80}ms`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-6"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon size={32} className="text-white" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-[#172531] mb-3 leading-tight">
                  {item.title}
                </h3>

                <div
                  className="w-12 h-1 mb-4"
                  style={{ backgroundColor: item.color }}
                />

                <p className="text-[#4D6473] leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 text-[#172531] font-semibold hover:text-[#C7843B] transition-colors duration-300 group">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToIndustry(item);
                    }}
                    className="flex items-center gap-2 focus:outline-none"
                    aria-label={`Learn more about ${item.title}`}
                  >
                    <span>View Solutions</span>
                    <ArrowRight
                      size={20}
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-5 blur-3xl animate-float"
          style={{ backgroundColor: "#C7843B" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl animate-float-delayed"
          style={{ backgroundColor: "#F3BD68" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full opacity-5 blur-3xl animate-float-slow"
          style={{ backgroundColor: "#4D6473" }}
        />
      </div>

      {/* Modal/Overlay */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
          onClick={closeFeatured}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative z-60 max-w-3xl w-[92%] md:w-2/3 lg:w-1/2 rounded-3xl p-10 shadow-2xl transform transition-all duration-500 featured-zoom"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: `linear-gradient(180deg, ${industries[activeIndex].color}, #F3BD68)`,
            }}
          >
            <button
              onClick={closeFeatured}
              aria-label="Close featured service"
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:scale-105 transition-transform"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div
                className="w-28 h-28 rounded-3xl flex items-center justify-center flex-shrink-0 transform transition-transform duration-500"
                style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
              >
                {React.createElement(industries[activeIndex].icon, {
                  size: 44,
                  className: "text-white",
                  strokeWidth: 2,
                })}
              </div>

              <div className="flex-1 text-white">
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2">
                  {industries[activeIndex].title}
                </h2>
                <div
                  className="w-20 h-1 mb-4"
                  style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
                />
                <p className="mb-6 text-white/90">
                  {industries[activeIndex].description}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => goToIndustry(industries[activeIndex])}
                    className="bg-black/90 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:translate-y-[-2px] transition-transform"
                  >
                    View Solutions
                  </button>

                  <button
                    onClick={closeFeatured}
                    className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shared Keyframes & Styles */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100% { transform: translate(0, 0);} 50% { transform: translate(20px, -20px);} }
        @keyframes float-delayed { 0%,100% { transform: translate(0, 0);} 50% { transform: translate(-30px, 30px);} }
        @keyframes float-slow { 0%,100% { transform: translate(-50%, -50%);} 50% { transform: translate(calc(-50% + 40px), calc(-50% - 40px));} }

        @keyframes gridPop { 0% { transform: translateY(10px) scale(.96); opacity: 0; } 60% { transform: translateY(-4px) scale(1.02); opacity: 1; } 100% { transform: translateY(0) scale(1); opacity: 1; } }
        @keyframes featuredZoomIn { 0% { transform: scale(.72) rotate(-6deg); opacity: 0; } 60% { transform: scale(1.06) rotate(-6deg); opacity: 1; } 100% { transform: scale(1) rotate(-6deg); opacity: 1; } }

        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.6s forwards; opacity: 0; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }

        .opacity-100.translate-y-0.scale-100 { animation: gridPop 420ms cubic-bezier(.2,.9,.2,1) both; }
        .featured-zoom { animation: featuredZoomIn 420ms cubic-bezier(.2,.9,.2,1) both; rotate: -6deg; }
      `}</style>
    </div>
  );
}

