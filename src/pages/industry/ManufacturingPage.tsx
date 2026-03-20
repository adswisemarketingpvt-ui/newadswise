import React, { useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Factory,
  Settings,
  Users,
  Search,
  FileText,
  Globe,
  Magnet,
  MapPin,
  Video,
  ChevronRight,
  TrendingUp,
  Cpu,
  Target,
  BarChart,
  Link as LinkIcon,
  MessageSquare,
  ShieldCheck,
  Zap,
  CheckCircle,
  Plus,
  Minus,
} from "lucide-react";
import { Link } from "react-router-dom";

/*
  SEO METADATA CONTENT (For specific configuration in index.html, next/head or helmet):
  Meta Title (≤60 chars): Manufacturing Industry Digital Marketing | Adswise Marketing
  Meta Description (150–160 chars): Boost B2B sales with manufacturing industry digital marketing — targeted lead-gen, machinery campaigns, measurable ROI. Book a free strategy call now.
  Slug: manufacturing-marketing
*/

// ============================================================================
// ASSETS & CONFIG
// ============================================================================

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070&auto=format&fit=crop", // Factory floor with CNC machines and engineer reviewing specifications.
  texture: "https://www.transparenttextures.com/patterns/carbon-fibre.png",
  factory:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // Technical demo of industrial machinery with sales team capturing lead details.
  services:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", // Product landing page and LinkedIn ad targeting manufacturing buyers.
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#D3D3D3] via-[#D3D3D3]/80 to-[#D3D3D3]/40"></div>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const ManufacturingPage = () => {
  // Monochromatic Color Palette:
  // #536186 - Stone Gray (Primary Accent)
  // #D3D3D3 - Fog Gray (Light Background)
  // #363636 - Charcoal Gray (Text/Dark Background)
  // #C0C0C0 - Silver (Borders/Secondary Accent)
  // #B0C4DE - Ash Gray (Highlighting)

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => {
    return (
      <header className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#D3D3D3] text-[#363636] pt-20">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <ParallaxImage
            src={IMAGES.hero}
            alt="Factory floor with CNC machines and engineer reviewing specifications"
            className="w-full h-full"
          />
          {/* Blueprint Grid Overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(#536186 1px, transparent 1px), linear-gradient(90deg, #536186 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#536186]/10 text-[#536186] border border-[#536186]/50 text-xs md:text-sm font-bold tracking-widest uppercase mb-3 mt-8 backdrop-blur-md">
              <Factory size={16} /> B2B Growth Engines
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-[#363636] capitalize"
          >
            Manufacturing Industry <br className="hidden md:block" />
            <span className="text-[#536186]">Digital Marketing.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl text-[#363636]/90 mb-6 font-bold">
              Generate more qualified leads, reduce your sales time, and grow
              your manufacturers' income.
            </h2>
            <p className="text-lg text-[#363636]/80 mb-10 leading-relaxed font-medium">
              We are Adswise Marketing — we design specialized digital marketing
              systems for manufacturers. Our digital manufacturing marketing
              methodology utilizes both a technical understanding and measurable
              marketing, thus providing your manufacturing equipment, components
              and/or plant services with visibility to the appropriate buyer
              groups at the right moment.
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
              className="px-10 py-5 rounded-lg bg-[#536186] text-white font-bold text-lg hover:bg-[#363636] transition transform hover:-translate-y-1 shadow-[0_0_30px_rgba(83,97,134,0.3)] flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Get my free strategy call <ChevronRight size={20} />
            </Link>
            <p className="text-sm font-bold text-[#536186] tracking-wide uppercase mt-2">
              Start with a tailored 90-day launch plan{" "}
              <br className="sm:hidden" /> • No long contracts • Month-to-month
              options
            </p>
          </motion.div>
        </div>

        {/* Subtle Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#D3D3D3] to-transparent z-10"></div>
      </header>
    );
  };

  const TheProblemSection = () => {
    const problems = [
      {
        icon: Search,
        title: "Invisible to Buyers",
        desc: "Manufacturers frequently miss out on deals prior to a potential customer discovering them.",
      },
      {
        icon: MessageSquare,
        title: "Generic Messaging",
        desc: "Precision is required in terms of messaging for technical products rather than generic advertisements.",
      },
      {
        icon: TrendingUp,
        title: "Long Sales Cycles",
        desc: "Long sales cycles without the appropriate nurturing of leads will leave them cold.",
      },
      {
        icon: Target,
        title: "Misaligned SEO",
        desc: "Search engine optimization generally does not cater to the needs of users searching for machinery or their intent on making an industrial purchase.",
      },
      {
        icon: Users,
        title: "Siloed Teams",
        desc: "Marketing and sales work separately resulting in missed opportunities for both sides.",
      },
    ];

    return (
      <section className="py-20 bg-[#D3D3D3] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
                The Problem: <br />
                <span className="text-[#536186]">
                  Why Manufacturers Struggle Online
                </span>
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium">
                As a result of these issues, there are multiple wasteful
                expenditures on advertising, poor conversion rates, and lost
                enterprise sales. We resolve this through establishing marketing
                alignment with engineering specifications, procurement behaviour
                and distributor network relationships.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {problems.map((c, idx) => (
              <AnimatedSection
                key={idx}
                delay={idx * 0.1}
                className={`h-full ${idx === 3 ? "lg:col-start-2" : ""}`}
              >
                <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl border border-[#C0C0C0] hover:border-[#536186] hover:shadow-[0_8px_30px_rgba(83,97,134,0.1)] transition-all group h-full relative overflow-hidden">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#536186]/10 text-[#536186] mb-6 group-hover:scale-110 transition-transform">
                    <c.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#363636] mb-3">
                    {c.title}
                  </h3>
                  <p className="text-[#363636]/70 text-base leading-relaxed">
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
      <section className="py-24 bg-white border-y border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-16 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#363636] mb-6">
                Tailored Services for the{" "}
                <span className="text-[#536186]">Manufacturing Sector</span>
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium">
                We provide services that cater to the unique needs and
                challenges faced by factories, OEMs and suppliers of machinery.
                We combine these into a unified plan so digital channels support
                sales at every phase.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <AnimatedSection delay={0.1}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 border border-[#C0C0C0] h-full hover:border-[#536186] transition-colors">
                <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] pb-4">
                  <Globe className="text-[#536186]" size={36} />
                  <h3 className="text-2xl font-bold text-[#363636]">
                    SEO and Content Marketing
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#536186] shrink-0 mt-1"
                      size={18}
                    />
                    <span>
                      Having a targeted keyword strategy for searching machine
                      models, part numbers and solutions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#536186] shrink-0 mt-1"
                      size={18}
                    />
                    <span>
                      Creating technical content, such as white papers,
                      specification sheets and "how it works." This material is
                      designed specifically to engage with engineers and
                      purchasing departments.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Service 2 */}
            <AnimatedSection delay={0.2}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 border border-[#C0C0C0] h-full hover:border-[#536186] transition-colors">
                <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] pb-4">
                  <Target className="text-[#536186]" size={36} />
                  <h3 className="text-2xl font-bold text-[#363636]">
                    B2B Digital Advertising & ABM
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#536186] shrink-0 mt-1"
                      size={18}
                    />
                    <span>
                      Developing targeted pay-per-click (PPC) advertising
                      campaigns for purchase intent keywords and account-based
                      marketing for large customer accounts.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#536186] shrink-0 mt-1"
                      size={18}
                    />
                    <span>
                      Using LinkedIn and programmatic advertising to reach
                      decision-making individuals in procurement departments.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Service 3 */}
            <AnimatedSection delay={0.3}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 border border-[#C0C0C0] h-full hover:border-[#536186] transition-colors">
                <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] pb-4">
                  <Cpu className="text-[#536186]" size={36} />
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Site & Lead Systems
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#536186] shrink-0 mt-1"
                      size={18}
                    />
                    <span>
                      Conversion focused product pages, Spec downloads, and ROI
                      Calculators.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#536186] shrink-0 mt-1"
                      size={18}
                    />
                    <span>
                      CRM Integrations and Lead Scoring to Only Pass on Sales
                      Ready Leads.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#536186] shrink-0 mt-1"
                      size={18}
                    />
                    <span>
                      Quick Demo’s, Installation Walk-Thru’s, and Testimonial
                      Video’s to Help Speed Up Evaluation Time.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Service 4 & 5 */}
            <AnimatedSection delay={0.4}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 border border-[#C0C0C0] h-full hover:border-[#536186] transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] pb-4">
                    <MapPin className="text-[#536186]" size={36} />
                    <h3 className="text-2xl font-bold text-[#363636]">
                      Distributor & Channel Growth
                    </h3>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-[#363636]/80">
                      <CheckCircle
                        className="text-[#536186] shrink-0 mt-1"
                        size={18}
                      />
                      <span>
                        Support for Dealer Portals, Distributor Landing Pages,
                        and Co-Marketing Packages.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] pb-4">
                    <BarChart className="text-[#536186]" size={36} />
                    <h3 className="text-2xl font-bold text-[#363636]">
                      Analytics & Optimization
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-[#363636]/80">
                      <CheckCircle
                        className="text-[#536186] shrink-0 mt-1"
                        size={18}
                      />
                      <span>
                        Dashboarding for leads, opportunity value, and channel
                        ROI. Continuous A/B testing to reduce friction.
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
        {/* Tech Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#536186 1px, transparent 1px), linear-gradient(90deg, #536186 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#363636] mb-6">
                How We Work
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium">
                All phases have defined deliverables with timelines for
                completion. We use straightforward checklists for easy
                visibility of your overall growth to the Leadership team.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Audit & Develop a Plan",
                icon: <Search size={40} />,
                desc: "We analyze your product specs, identify your target market, evaluate your current channels, and outline quick wins along with long term SEO strategies.",
              },
              {
                title: "Create & Execute",
                icon: <Settings size={40} />,
                desc: "We produce technical copy/content, create detailed ads, define tracking and build CRM funnels.",
              },
              {
                title: "Evaluate & Scale",
                icon: <TrendingUp size={40} />,
                desc: "We perform weekly optimizations, identify underperforming areas through channel reallocations, and report back every month on progress to develop what has worked previously.",
              },
            ].map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white/80 backdrop-blur-md border border-[#B0C4DE] p-8 rounded-3xl h-full flex flex-col items-center text-center shadow-lg hover:border-[#536186] hover:-translate-y-2 transition-all group">
                  <div className="w-20 h-20 bg-[#D3D3D3] rounded-full flex items-center justify-center text-[#536186] mb-6 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#363636] mb-4">
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

  const SplitFeaturesSection = () => {
    return (
      <section className="py-24 bg-white border-y border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-8">
                Benefits & Results
              </h2>
              <div className="bg-[#363636] rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                  <Factory size={250} className="text-white" />
                </div>

                <ul className="space-y-6 relative z-10">
                  {[
                    "Generally better prospects through intent based searching and account-based marketing (ABM).",
                    "Reduced demo to deal cycle times through effective demonstration content and follow-up processes.",
                    "Funnel insight accuracy improvement via integration of analytics.",
                    "Better channel partnerships achieved through use of distributor focused landing pages.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <CheckCircle
                        className="text-[#B0C4DE] shrink-0 mt-1"
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-8">
                KPIs We Track
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium mb-6">
                Establish Month 1 Baseline KPIs and Assign Revenue Impact to All
                Metrics. By Product Line, Qualified Leads (RFQ, Demo Requests)
                will be tracked.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "CPQ & CPO",
                    d: "Cost Per Qualified Lead & Cost Per Opportunity",
                  },
                  { t: "Conversion Steps", d: "Lead > Demo > Deal" },
                  {
                    t: "Organic Visibility",
                    d: "Model #(s) & Technical Query positions",
                  },
                  {
                    t: "ABM Engagement",
                    d: "Targeted Account Touches & Content Views",
                  },
                  {
                    t: "Channel Mix ROI",
                    d: "Performance by channel & Projected LTV",
                  },
                ].map((kpi, idx) => (
                  <div
                    key={idx}
                    className="bg-[#B0C4DE]/20 p-5 rounded-xl border border-[#C0C0C0]"
                  >
                    <h4 className="font-bold text-[#363636] text-lg mb-1">
                      {kpi.t}
                    </h4>
                    <p className="text-[#363636]/70 text-sm leading-snug">
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
        q: "How quickly will we see results?",
        a: "Paid campaigns often generate qualified leads in 7–21 days; organic SEO and content impact builds over 2–6 months.",
      },
      {
        q: "Can you market niche machinery with small search volumes?",
        a: "Yes. We use technical content, part-number landing pages, and ABM to capture low-volume, high-value buyers.",
      },
      {
        q: "Do you integrate with our ERP/CRM?",
        a: "Absolutely. We connect to major CRMs and can push leads into ERP workflows for quoting and tracking.",
      },
      {
        q: "How do you support distributor networks?",
        a: "We create co-branded pages, lead routing rules, and marketing kits that distributors can use locally.",
      },
      {
        q: "What are your contract terms?",
        a: "No long contracts — month-to-month options and transparent reporting.",
      },
    ];

    return (
      <section className="py-20 sm:py-24 bg-[#D3D3D3]/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-4">
                FAQs — Quick, Clear Answers
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-[#C0C0C0] overflow-hidden shadow-sm transition-all hover:border-[#536186]">
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-[#B0C4DE]/10 transition-colors"
                  >
                    <span className="font-bold text-[#363636] text-base md:text-lg pr-4">
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
                        <p className="text-[#363636]/80 text-base pt-4 border-t border-[#C0C0C0]/50">
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
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#536186]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#363636]/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
            Ready to grow manufacturer business digital growth{" "}
            <br className="hidden md:block" />
            <span className="text-[#B0C4DE]">and win bigger contracts?</span>
          </h2>
          <p className="text-xl text-[#D3D3D3] mb-12 font-medium leading-relaxed max-w-3xl mx-auto">
            Book a free strategy call — we’ll show a tailored plan for your
            product lines.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-[#363636] bg-[#D3D3D3] hover:bg-white transform transition hover:scale-105 shadow-xl shadow-[#363636]/20 flex items-center justify-center gap-2"
            >
              Start a free strategy call <ChevronRight size={20} />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-white bg-transparent border-2 border-[#B0C4DE] hover:bg-[#B0C4DE] hover:text-[#363636] transform transition flex items-center justify-center gap-2"
            >
              Our Services
            </Link>
            <Link
              to="/case-studies-manufacturing"
              className="w-full sm:w-auto px-8 py-5 rounded-xl font-bold text-[#D3D3D3] hover:text-white underline underline-offset-4 transform transition text-center"
            >
              Manufacturing Case Studies
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  return (
    <div className="font-sans bg-[#D3D3D3] text-[#536186] min-h-screen selection:bg-[#536186] selection:text-[#363636]">
      <HeroSection />
      <TheProblemSection />
      <ServicesSection />
      <HowWeWorkSection />
      <SplitFeaturesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default ManufacturingPage;
