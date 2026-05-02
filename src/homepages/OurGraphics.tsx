import { useEffect, useState } from "react";

const OurGraphics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const graphics = [
    {
      id: 1,
      title: "Brand Identity",
      category: "Logo Design",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      id: 2,
      title: "Social Media Kits",
      category: "Digital Assets",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-1",
    },
    {
      id: 3,
      title: "Vector Art",
      category: "Illustration",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80",
      colSpan: "col-span-1",
      rowSpan: "row-span-2",
    },
    {
      id: 4,
      title: "UI/UX Mockups",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-1",
    },
    {
      id: 5,
      title: "Print Media",
      category: "Brochure & Flyers",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-1",
    },
    {
      id: 6,
      title: "3D Rendering",
      category: "Motion Graphics",
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
  ];

  return (
    <section className="bg-[#D3D3D3] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#363636] mb-6 tracking-tight">
            Our <span className="text-[#536186] inline-block animate-pulse-slow">Custom Graphics</span>
          </h2>
          <p className="text-[#536186] max-w-2xl mx-auto text-base md:text-lg font-medium opacity-90 uppercase tracking-widest relative">
            <span className="block mb-2">Engaging, dynamic, and tailor-made visuals.</span>
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#536186] rounded-full animate-widen"></span>
          </p>
        </div>

        {/* Graphics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {graphics.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.colSpan} ${item.rowSpan} graphic-card`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* background image container */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  loading="lazy"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#363636] via-[#363636]/40 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Border glow decoration */}
              <div className="absolute inset-0 border-2 border-[#C0C0C0]/0 group-hover:border-[#C0C0C0]/50 rounded-2xl transition-all duration-500 scale-105 group-hover:scale-100 pointer-events-none"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#D3D3D3] text-sm font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-500">
                  {item.title}
                </h3>
                
                {/* View button/icon */}
                <div className="flex items-center text-[#536186] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
                  <div className="w-10 h-10 rounded-full bg-[#D3D3D3] flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(83,97,134,0.5)]">
                    <svg className="w-5 h-5 text-[#363636] transform translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .graphic-card {
          opacity: 0;
          transform: translateY(50px) scale(0.95);
          animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          box-shadow: 0 10px 30px -10px rgba(54, 54, 54, 0.2);
        }

        .graphic-card:hover {
          box-shadow: 0 20px 40px -10px rgba(83, 97, 134, 0.4);
          z-index: 10;
        }

        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes widen {
          0% { width: 0; opacity: 0; }
          100% { width: 6rem; opacity: 1; }
        }

        .animate-widen {
          animation: widen 1s ease-out forwards 0.5s;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: .7; }
        }
      `}</style>
    </section>
  );
};

export default OurGraphics;
