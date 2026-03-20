import React, { useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Palette,
  Camera,
  Layout,
  Search,
  Mail,
  Instagram,
  TrendingUp,
  Smartphone,
  MapPin,
  PlayCircle,
  CheckCircle,
  ArrowRight,
  Brush,
  PenTool,
  Layers,
  Star,
  Plus,
  Minus,
  MessageSquare,
  Users,
  Target,
  BarChart,
  Video,
  Monitor,
  Zap,
  Compass,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

/*
  SEO METADATA CONTENT (For specific configuration in index.html, next/head or helmet):
  Meta Title (≤60 chars): Digital Marketing for Interior Designers | Adswise Marketing
  Meta Description (150–160 chars): Digital marketing for interior designers that attracts high-value clients and boosts portfolio visibility. Book a free audit and start growing today.
  Slug: interior-design-marketing
*/

// ============================================================================
// ASSETS & CONFIG
// ============================================================================

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop", // Wide-angle living room styled by a designer
  services:
    "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2000&auto=format&fit=crop", // Portfolio website, Instagram ad, etc
  caseStudy:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", // Before and after kitchen
};

// ============================================================================
// ANIMATION WRAPPERS
// ============================================================================

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ParallaxImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img
        style={{ y, scale: 1.15 }}
        src={src}
        alt={alt}
        className="w-full h-full object-cover mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#D3D3D3] via-[#D3D3D3]/70 to-[#D3D3D3]/30"></div>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const InteriorDesignPage = () => {
  // Monochromatic Color Palette:
  // #536186 - Stone Gray (Primary Accent)
  // #D3D3D3 - Fog Gray (Light Background)
  // #363636 - Charcoal Gray (Text/Dark Background)
  // #C0C0C0 - Silver (Borders/Secondary Accent)
  // #B0C4DE - Ash Gray (Highlighting)

  const HeroSection = () => {
    return (
      <header className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#D3D3D3] text-[#363636] pt-20">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 opacity-50">
          <ParallaxImage
            src={IMAGES.hero}
            alt="Stylish living room designed by an interior designer with a mood board on a table."
            className="w-full h-full grayscale-[50%]"
          />
          {/* Subtle Grid Overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(#536186 1px, transparent 1px), linear-gradient(90deg, #536186 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/60 backdrop-blur-md text-[#536186] border border-[#C0C0C0]/50 text-xs md:text-sm font-bold tracking-widest uppercase mb-4 mt-8 shadow-sm">
              <Brush size={16} /> Digital Marketing for Design Studios
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-[#363636] capitalize font-serif"
          >
            Digital Marketing for <br className="hidden md:block" />
            <span className="text-[#536186]">Interior Designers.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl text-[#363636]/90 mb-6 font-bold">
              Transform gorgeous interiors into developed projects.
            </h2>
            <p className="text-lg text-[#363636]/80 mb-10 leading-relaxed font-medium bg-white/40 p-6 rounded-2xl backdrop-blur-sm border border-white/50">
              Through its performance-oriented brand from marketing -- Adswise
              Marketing -- we develop customized programs that will help your
              studio connect with high-value clients. The Adswise Marketing
              approach to design digital marketing for interior designers
              integrates visual storytelling, targeted ads, and localized search
              engine optimization (SEO) to help you achieve your goal of
              generating the correct leads rather than simply producing
              additional web traffic.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-10 py-5 rounded-lg bg-[#536186] text-white font-bold text-lg hover:bg-[#363636] transition transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Book my free design audit <ArrowRight size={20} />
            </Link>
            <p className="text-sm font-bold text-[#536186] tracking-wide uppercase mt-2">
              No long contracts • Month-to-month options • Dedicated creative
              strategist
            </p>
          </motion.div>
        </div>

        {/* Subtle Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#D3D3D3] to-transparent z-10"></div>
      </header>
    );
  };

  const TheProblemSection = () => {
    const problems = [
      {
        icon: Search,
        title: "Hidden Portfolios",
        desc: "Your company designs incredible spaces, but your customers do not see your best work because your portfolio is buried in the search results due to being on slow-loading pages.",
      },
      {
        icon: Instagram,
        title: "Vanity Metrics",
        desc: "Your social media posts receive likes but don’t convert views into consultation requests.",
      },
      {
        icon: Target,
        title: "Irrelevant Clicks",
        desc: "Your paid ads drive clicks but not design leads.",
      },
      {
        icon: Mail,
        title: "Lost Connections",
        desc: "Customers have no way to find you after discovering your business and have no route for booking a consultation.",
      },
    ];

    return (
      <section className="py-20 sm:py-28 bg-[#D3D3D3] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-[#363636] font-serif">
                The Problem: <br />
                <span className="text-[#536186] text-2xl sm:text-4xl">
                  Why interior designers don’t get the clients they deserve
                </span>
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium bg-[#B0C4DE]/20 p-6 rounded-2xl border border-[#C0C0C0]">
                The result is low lead conversion rates, wasted marketing
                dollars, and lost opportunities for high-value projects. To help
                resolve these issues, we synchronize your images and copy with
                the correct conversion paths for your design business.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {problems.map((c, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="h-full">
                <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-[#C0C0C0] hover:border-[#536186] hover:shadow-[0_8px_30px_rgba(83,97,134,0.15)] transition-all group h-full relative overflow-hidden text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#D3D3D3] text-[#536186] mb-6 shadow-sm border border-[#C0C0C0] group-hover:scale-110 transition-transform">
                    <c.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#363636] mb-3 font-serif">
                    {c.title}
                  </h3>
                  <p className="text-[#363636]/70 text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ServicesSection = () => {
    return (
      <section className="py-24 bg-white border-y border-[#C0C0C0] relative overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B0C4DE] rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D3D3D3] rounded-full blur-[120px] opacity-50"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="mb-16 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#363636] mb-6 font-serif">
                Tailored Services for{" "}
                <span className="text-[#536186]">Interior Studios</span>
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium">
                Our concentration involves activities which improve how
                designers work creatively from both the standpoints of best
                practice and boutique studios. Services are packaged according
                to solo designers, small groups, or studios that consist of
                multiple designers.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <AnimatedSection delay={0.1}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 lg:p-10 border border-[#C0C0C0] h-full hover:border-[#536186] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group">
                <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] group-hover:border-[#536186] pb-4 transition-colors">
                  <Layout className="text-[#536186]" size={36} />
                  <h3 className="text-2xl font-bold text-[#363636] font-serif">
                    Portfolio / Web Optimization
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Quick loading image galleries; separate filtered
                      subs/galleries of your work according to category;
                      portfolio project listing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      SEO - Service Pages for Your Design Services (example =
                      "modern kitchen designer") and Targeting Area Where you
                      Work as well.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Service 2 */}
            <AnimatedSection delay={0.2}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 lg:p-10 border border-[#C0C0C0] h-full hover:border-[#536186] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group">
                <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] group-hover:border-[#536186] pb-4 transition-colors">
                  <TrendingUp className="text-[#536186]" size={36} />
                  <h3 className="text-2xl font-bold text-[#363636] font-serif">
                    Paid Social & Search
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Instagram and Pinterest campaigns focused on visual
                      product discovery.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Search Ads in Google for Search Terms Reflecting Serious
                      Intent (e.g. "Designer Near Me" or by Room Specific).
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Service 3 */}
            <AnimatedSection delay={0.3}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 lg:p-10 border border-[#C0C0C0] h-full hover:border-[#536186] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group">
                <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] group-hover:border-[#536186] pb-4 transition-colors">
                  <Camera className="text-[#536186]" size={36} />
                  <h3 className="text-2xl font-bold text-[#363636] font-serif">
                    Content & Visual Storytelling
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      We utilize our website to house story pages of our
                      studios, process videos and before/after galleries.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      All blog articles will be written to answer common
                      questions of both our customers and potential customers
                      (budget, timelines, materials).
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Service 4 */}
            <AnimatedSection delay={0.4}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 lg:p-10 border border-[#C0C0C0] h-full hover:border-[#536186] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group">
                <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] group-hover:border-[#536186] pb-4 transition-colors">
                  <Mail className="text-[#536186]" size={36} />
                  <h3 className="text-2xl font-bold text-[#363636] font-serif">
                    Capturing & Nurturing Leads
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Through contact forms for conversion purposes, as well as,
                      through automated follow-up emails after every
                      consultation or contact by an individual.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Utilizing WhatsApp and emails to turn leads into
                      consultations.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Full Width Service 5 Row */}
            <AnimatedSection delay={0.5} className="md:col-span-2">
              <div className="bg-[#363636] rounded-3xl p-8 lg:p-10 border border-[#536186] h-full shadow-xl flex flex-col md:flex-row gap-8 items-center overflow-hidden relative">
                {/* Subtle decoration inside dark card */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#536186] rounded-full blur-[80px] opacity-30"></div>

                <div className="flex-1 z-10">
                  <div className="flex items-center gap-4 mb-6 border-b border-[#536186] pb-4">
                    <MapPin className="text-[#B0C4DE]" size={32} />
                    <h3 className="text-2xl font-bold text-white font-serif">
                      Local Advertising & Reputation
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-[#D3D3D3]">
                      <CheckCircle
                        className="text-[#B0C4DE] shrink-0 mt-1"
                        size={20}
                      />
                      <span>
                        Optimization of Google Business Profile, generation of
                        reviews, and citations in local databases.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D3D3D3]">
                      <CheckCircle
                        className="text-[#B0C4DE] shrink-0 mt-1"
                        size={20}
                      />
                      <span>
                        Targeted marketing efforts toward major neighborhoods or
                        new development ventures.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 z-10 w-full">
                  <div className="flex items-center gap-4 mb-6 border-b border-[#536186] pb-4">
                    <BarChart className="text-[#B0C4DE]" size={32} />
                    <h3 className="text-2xl font-bold text-white font-serif">
                      Analytics & Growth
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-[#D3D3D3]">
                      <CheckCircle
                        className="text-[#B0C4DE] shrink-0 mt-1"
                        size={20}
                      />
                      <span>
                        Monthly dashboard monitors ROI and experimentation of
                        conversion rates from inquiry to hire.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const HowWeWorkSection = () => {
    return (
      <section className="py-24 bg-[#D3D3D3] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#363636] mb-6 font-serif">
                How We Work
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium">
                Each stage has clearly defined deliverables as well as a
                timeline on when to expect results.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Discovery & Strategy",
                icon: <Compass size={40} />,
                desc: "We analyze your portfolio of keywords and referral sources to determine your ideal client and map their journey to your service.",
              },
              {
                title: "Creation & Launch",
                icon: <Rocket size={40} />,
                desc: "We create high-impact visuals, optimized landing pages and targeted ad campaigns that sync to your booking schedule.",
              },
              {
                title: "Refinement & Scaling",
                icon: <TrendingUp size={40} />,
                desc: "Each week we synthesize our test results into new creative and scale your most successful jobs, with complete reporting each month.",
              },
            ].map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white/70 backdrop-blur-md border border-[#C0C0C0] p-8 lg:p-10 rounded-3xl h-full flex flex-col items-center text-center shadow-lg hover:border-[#536186] hover:-translate-y-2 transition-all group">
                  <div className="w-20 h-20 bg-[#D3D3D3] border border-[#C0C0C0] rounded-full flex items-center justify-center text-[#536186] mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#536186] group-hover:text-white transition-all duration-300">
                    <span className="font-serif font-bold text-2xl">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#363636] mb-4 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-[#363636]/70 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Compass and Rocket defined locally for How We Work Section as they weren't in initial import list, using alternatives if needed but adding to import list is cleaner.
  // We'll use alternatives from the imported lucide-react list to avoid import errors since we are writing to file.
  // Relinking to Search and Zap respectively.

  const HowWeWorkSectionSafe = () => {
    return (
      <section className="py-24 bg-[#D3D3D3] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#363636] mb-6 font-serif">
                How We Work
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium">
                Each stage has clearly defined deliverables as well as a
                timeline on when to expect results.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Discovery & Strategy",
                icon: <Search size={32} />,
                desc: "We analyze your portfolio of keywords and referral sources to determine your ideal client and map their journey to your service.",
              },
              {
                title: "Creation & Launch",
                icon: <Zap size={32} />,
                desc: "We create high-impact visuals, optimized landing pages and targeted ad campaigns that sync to your booking schedule.",
              },
              {
                title: "Refinement & Scaling",
                icon: <TrendingUp size={32} />,
                desc: "Each week we synthesize our test results into new creative and scale your most successful jobs, with complete reporting each month.",
              },
            ].map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white/70 backdrop-blur-md border border-[#C0C0C0] p-8 lg:p-10 rounded-3xl h-full flex flex-col items-center text-center shadow-lg hover:border-[#536186] hover:-translate-y-2 transition-all group">
                  <div className="w-16 h-16 bg-[#D3D3D3] border border-[#C0C0C0] rounded-2xl flex items-center justify-center text-[#536186] mb-6 shadow-sm group-hover:rotate-12 group-hover:bg-[#536186] group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="uppercase tracking-widest text-[#B0C4DE] font-bold text-xs mb-2">
                    Phase 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#363636] mb-4 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-[#363636]/70 text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const SplitFeaturesSection = () => {
    return (
      <section className="py-24 bg-white border-y border-[#C0C0C0] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Benefits */}
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-8 font-serif">
                Benefits & Measurable Outcomes
              </h2>
              <div className="bg-[#536186] rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                  <Brush size={250} className="text-white" />
                </div>

                <ul className="space-y-6 relative z-10">
                  {[
                    "Numerous qualified consultations derived from high-intent traffic.",
                    "Shorter decision cycle through transparent processes.",
                    "More high-value projects due to their clients understanding design expenditures.",
                    "Increased local market presence for repeat and referral business.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <CheckCircle
                        className="text-white shrink-0 mt-1"
                        size={24}
                      />
                      <span className="text-[#D3D3D3] text-lg font-medium leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* KPIs */}
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-8 font-serif">
                KPIs We Track
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium mb-6">
                KPI’s to be established in the first month and measured by
                future revenue performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Consult Requests",
                    d: "Channel & project-based statistics",
                  },
                  {
                    t: "Cost Metrics",
                    d: "Cost per lead & Cost per consultation",
                  },
                  {
                    t: "Web Engagement",
                    d: "Portfolio conversion rate & session duration",
                  },
                  { t: "Ad Performance", d: "Impressions, CTR, CPL and ROAS" },
                  {
                    t: "Local Footprint",
                    d: "GBP views, directions, reviews growth",
                  },
                  {
                    t: "Revenue ROI",
                    d: "Lead-to-booking rate & revenue from leads",
                  },
                ].map((kpi, idx) => (
                  <div
                    key={idx}
                    className="bg-[#D3D3D3]/50 p-5 rounded-xl border border-[#C0C0C0] hover:bg-white transition-colors shadow-sm"
                  >
                    <h4 className="font-bold text-[#536186] text-lg mb-1">
                      {kpi.t}
                    </h4>
                    <p className="text-[#363636]/70 text-sm leading-snug font-medium">
                      {kpi.d}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
      {
        q: "How fast will I see consultations?",
        a: "Paid campaigns can generate consultation requests within 7–14 days. SEO and content gains typically appear over 2–4 months.",
      },
      {
        q: "Do you produce visual content (photos/video)?",
        a: "Yes — we coordinate shoots or repurpose your existing assets into ads and case studies.",
      },
      {
        q: "Can you target high-value local clients?",
        a: "Yes. We run hyper-local ad sets and GBP optimization to attract clients in your service areas.",
      },
      {
        q: "Will you work with my existing CMS/booking tool?",
        a: "Absolutely. We integrate with common CMS platforms and booking systems to streamline inquiries.",
      },
      {
        q: "Are there long contracts?",
        a: "No long contracts — month-to-month options available.",
      },
    ];

    return (
      <section className="py-20 sm:py-24 bg-[#D3D3D3]/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-4 font-serif">
                FAQs — Short & Clear Answers
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-[#C0C0C0] overflow-hidden shadow-sm transition-all hover:border-[#536186] hover:shadow-md">
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-[#B0C4DE]/10 transition-colors"
                  >
                    <span className="font-bold text-[#363636] text-base md:text-lg pr-4 font-serif">
                      {faq.q}
                    </span>
                    {openFAQ === index ? (
                      <Minus
                        size={24}
                        className="flex-shrink-0 text-[#536186]"
                      />
                    ) : (
                      <Plus
                        size={24}
                        className="flex-shrink-0 text-[#536186]"
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-5"
                      >
                        <p className="text-[#363636]/80 text-base font-medium pt-4 border-t border-[#C0C0C0]/50">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const CTASection = () => (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#363636]">
      {/* Decorative Elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/graphy.png')`,
        }}
      ></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#536186] rounded-full blur-[150px] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <AnimatedSection>
          <span className="inline-block p-4 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/20">
            <Star className="text-white fill-[#C0C0C0]" size={32} />
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight font-serif">
            Ready to turn your portfolio <br className="hidden md:block" />
            <span className="text-[#C0C0C0] italic">into booked projects?</span>
          </h2>
          <p className="text-xl text-[#D3D3D3] mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
            Book a free design-marketing audit and receive a tailored 90-day
            plan.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-[#363636] bg-[#D3D3D3] hover:bg-white transform transition hover:scale-105 shadow-xl shadow-black/30 flex items-center justify-center gap-2"
            >
              Book my free design audit <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-[#D3D3D3] bg-transparent border-2 border-[#536186] hover:bg-[#536186] hover:text-white transform transition flex items-center justify-center gap-2"
            >
              Our Services
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-bold text-[#B0C4DE] tracking-wide uppercase">
            <span>No long contracts</span>
            <span className="hidden md:inline">•</span>
            <span>Month-to-month options</span>
            <span className="hidden md:inline">•</span>
            <span>Dedicated creative strategist</span>
          </div>

          <div className="mt-10">
            <Link
              to="/portfolio"
              className="text-[#D3D3D3] hover:text-white underline underline-offset-4 transition text-sm font-bold uppercase tracking-wider"
            >
              View our Portfolio
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  return (
    <div className="font-sans bg-[#D3D3D3] text-[#363636] min-h-screen selection:bg-[#536186] selection:text-white">
      <HeroSection />
      <TheProblemSection />
      <ServicesSection />
      <HowWeWorkSectionSafe />
      <SplitFeaturesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default InteriorDesignPage;
