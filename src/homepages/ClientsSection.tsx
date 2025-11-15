// ClientsSection.tsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Our Clients section
 *
 * Usage:
 *  - Place <ClientsSection /> inside your page.
 *  - Put client logos in /public/logos/logo1.png, logo2.png, ... or update the `logos` array below to point to your image URLs.
 *
 * Notes:
 *  - This component uses Tailwind utility classes. If you don't use Tailwind, replace classes with your CSS.
 */

type Logo = {
  id: string;
  src: string;
  alt?: string;
};

const logos: Logo[] = [
  // Replace these with your actual logo image paths (public folder or imported assets)
  {
    id: "logo1",
    src: "https://suncreastfinancials.com//public/FINAL%20LOGO.png",
    alt: "Client 1",
  },
  {
    id: "logo2",
    src: "https://www.dtkfootwear.com//logo.png",
    alt: "Client 2",
  },
  {
    id: "logo3",
    src: "https://believe-properties.com//public/logo.png",
    alt: "Client 3",
  },
  {
    id: "logo4",
    src: "https://vishwaswamiinteriors.com//logo.png",
    alt: "Client 4",
  },
  { id: "logo5", src: "https://adswisemarketing.com//client2jpg", alt: "Client 5" },
  { id: "logo6", src: "https://adswisemarketing.com//client.jpg", alt: "Client 6" },
  { id: "logo7", src: "/logos/logo7.png", alt: "Client 7" },
  { id: "logo8", src: "/logos/logo8.png", alt: "Client 8" },
];

export default function ClientsSection(): JSX.Element {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [visibleSet, setVisibleSet] = useState<Set<string>>(new Set());

  // Mark mounted to start animations after first render (helps with SSR flash)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // IntersectionObserver to add fade/zoom animation the first time a visible logo enters viewport (useful for slow devices)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const id = target.dataset.logoId;
          if (entry.isIntersecting && id) {
            setVisibleSet((prev) => {
              if (prev.has(id)) return prev;
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          }
        });
      },
      { root: null, threshold: 0.15 }
    );

    const node = marqueeRef.current;
    if (!node) return;
    const items = node.querySelectorAll<HTMLElement>(".client-logo-card");
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Duplicate logos array to create a seamless marquee loop
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* LEFT: scrolling logos */}
        <div className="md:col-span-5 lg:col-span-6">
          <div className="relative overflow-hidden rounded-xl">
            {/* Visible window */}
            <div
              className="marquee-columns relative flex gap-6"
              aria-hidden={false}
              style={{ height: 640 /* same height as before */ }}
            >
              {/* render 3 side-by-side marquee columns */}
              {[0, 1, 2].map((colIndex) => (
                <div
                  key={colIndex}
                  className="marquee-wrapper flex-1 overflow-hidden"
                  // stagger durations so columns move slightly differently for a natural feel
                  // (we rely on .marquee-track animation but override duration via inline style on the track)
                >
                  <div
                    className="marquee-track"
                    style={{ animationDuration: `${18 + colIndex * 4}s` }}
                  >
                    {marqueeLogos.map((logo, i) => {
                      return (
                        <div
                          key={`${logo.id}-${i}-col${colIndex}`}
                          data-logo-id={logo.id}
                          className={`client-logo-card m-4 bg-white rounded-2xl shadow-sm flex items-center justify-center p-6 w-40 h-40
                    transform transition-all duration-500
                    ${visibleSet.has(logo.id) ? "logo-visible" : "logo-hidden"}
                  `}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={logo.src}
                            alt={logo.alt ?? "client logo"}
                            className="max-w-full max-h-full object-contain"
                            style={{ filter: "grayscale(0.02)" }}
                            onError={(e) => {
                              const el = e.currentTarget as HTMLImageElement;
                              el.src =
                                "data:image/svg+xml;utf8," +
                                encodeURIComponent(
                                  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='100%' height='100%' fill='#ffffff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#cbd5e1' font-family='sans-serif' font-size='18'>Logo</text></svg>`
                                );
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* small overlay gradient top/bottom to match screenshot vibe */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#F2F7FB] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#F2F7FB] to-transparent" />
          </div>
        </div>

        {/* RIGHT: sticky content */}
        <div className="md:col-span-7 lg:col-span-6">
          <div className="sticky top-24">
            <div
              className="text-center mb-4 md:mb-5 animate-fadeIn"
              style={{ animationDelay: "0s" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold text-white mb-4">
                Our <span className="text-yellow-500">Clients</span>
              </h1>
              <p className="text-gray-500 text-sm md:text-lg">
                Powering growth for businesses across industries.
              </p>
            </div>

            <p className="text-white leading-relaxed mb-6">
              At Mage Marketer, we believe that every brand has a unique journey
              to growth and our mission is to guide you through it with
              carefully designed strategies. We combine deep market research,
              innovative tools and creative storytelling to craft campaigns that
              resonate with your audience and drive measurable impact.
            </p>

            <p className="text-white leading-relaxed mb-6">
              Our approach is not just about running ads or creating content —
              it’s about weaving together the right mix of SEO, social media,
              design and analytics into a cohesive roadmap. This ensures that
              your brand not only captures attention but also builds trust,
              engagement and long-lasting connections.
            </p>

            <p className="text-white leading-relaxed">
              With Mage Marketer as your partner, you gain more than a service
              provider — you gain a growth curator dedicated to unlocking your
              full potential.
            </p>
          </div>
        </div>
      </div>

      {/* Inline styles for marquee & animations */}
      <style jsx>{`
        /* container for the three columns */
        .marquee-columns {
          display: flex;
          gap: 1.5rem;
          align-items: stretch;
        }

        .marquee-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* reuse marquee-track but each column can override duration via inline style */
        .marquee-track {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          animation-name: marqueeScroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          /* default duration (can be overridden with inline style) */
          animation-duration: 18s;
          /* ensure full height stacking for duplication to work */
        }

        /* Pause on hover for the entire wrapper */
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}
