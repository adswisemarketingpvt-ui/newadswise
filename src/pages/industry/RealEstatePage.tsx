import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  ArrowRight,
  Target,
  MapPin,
  Search,
  Smartphone,
  BarChart3,
  Settings,
  ShieldCheck,
  RefreshCw,
  TrendingUp,
  CheckCircle,
  Plus,
  Minus,
  MessageSquare,
} from "lucide-react";
import SEO from "../../components/SEO"; // Using the SEO component

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

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const RealEstatePage = () => {
  return (
    <div className="min-h-screen font-sans text-[#363636] bg-[#F8F9FA] selection:bg-[#536186] selection:text-white">
      <SEO
        title="Real Estate Digital Marketing Services | Adswise Marketing"
        description="Get targeted real estate digital marketing services — SEO, PPC, listings for higher-quality leads. Book a free strategy call and start scaling today."
        canonicalUrl="/industry/real-estate-marketing"
      />

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. THE PROBLEM */}
      <ProblemSection />

      {/* 3. TAILORED SERVICES */}
      <ServicesSection />

      {/* 4. HOW WE WORK */}
      <ProcessSection />

      {/* 5. PROOF - CASE STUDY */}
      <CaseStudySection />

      {/* 6. BENEFITS & MEASURABLE OUTCOMES */}
      <BenefitsSection />

      {/* 7. KPIs WE TRACK */}
      <KPISection />

      {/* 8. FAQs */}
      <FAQSection />

      {/* 9. CTA */}
      <CTASection />
    </div>
  );
};

// ============================================================================
// SUB-SECTIONS COMPONENTS
// ============================================================================

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#536186] text-white pt-24 pb-12">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#536186] rounded-full blur-[150px] opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#536186]/30 border border-[#B0C4DE]/30 rounded-full text-sm font-semibold text-[#B0C4DE] mb-6 flex items-center gap-2 w-max shadow-lg backdrop-blur-sm">
              <Building2 size={16} /> Real Estate Marketing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Real Estate Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B0C4DE] to-[#D3D3D3]">
                Marketing Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#D3D3D3] mb-8 leading-relaxed">
              Supply your real estate developer / builder property project with
              steady leads and quicker sales. Adswise Marketing are a
              results-driven marketing firm, offering a complete suite of
              solutions for developers, brokers and product technology brands in
              performance-oriented marketing. Using a combination of real estate
              digital marketing with search ads, social media ads, listing
              optimization and automation, we convert online interest into site
              visits and convert site visits into bookings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg bg-white text-[#363636] font-bold text-lg hover:bg-[#D3D3D3] transition transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2 group"
              >
                Get a Free Strategy Call{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
            <p className="text-sm text-[#B0C4DE] font-semibold">
              See a 90-day plan for your projects. No long contracts •
              Month-to-month options
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-[#536186]/50 h-[600px] w-full relative">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80"
                alt="Aerial view of a residential project and sales pavilion."
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#363636] via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-[#536186] rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Predictable Leads</p>
                    <p className="text-[#D3D3D3] text-sm">
                      Scale your real estate bookings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      icon: Target,
      title: "Broad Audience Targeting",
      desc: "Ads target a broad audience while producing poor quality leads.",
    },
    {
      icon: Search,
      title: "Poor Search Visibility",
      desc: "Project pages do not perform well in the search engines for localities and floor plans.",
    },
    {
      icon: RefreshCw,
      title: "Outdated Listings",
      desc: "Real estate listings are not updated or tracked from portal to portal.",
    },
    {
      icon: MessageSquare,
      title: "Slow Response Times",
      desc: "Slow response times lead to lost walk-ins and unclaimed Reservations.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#536186] font-bold tracking-wider text-sm uppercase mb-2 block">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              Why Real Estate Marketing Underperforms
            </h2>
            <p className="text-lg text-[#363636]/80 leading-relaxed">
              Today's real estate buyer moves quickly and is looking for clarity
              in the purchasing process. All of these factors lead to wasted
              advertising dollars, extended sales cycles, and stress for the
              closing teams. We can solve these problems through the alignment
              of creative strategy, targeting strategy, and Sales Process.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((prob, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#D3D3D3] hover:border-[#536186] transition-colors h-full flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-[#F8F9FA] text-[#536186] flex items-center justify-center mb-6 group-hover:bg-[#536186] group-hover:text-white transition-colors duration-300">
                  <prob.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-[#363636] mb-3">
                  {prob.title}
                </h3>
                <p className="text-[#363636]/70 text-sm leading-relaxed flex-grow">
                  {prob.desc}
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
    <section className="py-24 bg-white border-y border-[#D3D3D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-[#536186] font-bold tracking-wider text-sm uppercase mb-2 block">
              Our Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              Tailored Services for Property Brands
            </h2>
            <p className="text-lg text-[#363636]/80">
              Our program is designed to fit your needs whether it be for one
              single floor studio or an entire township launch.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <AnimatedSection delay={0.1}>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-[#536186]/10 text-[#536186] flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#363636] mb-2">
                    Local Search and SEO
                  </h3>
                  <p className="text-[#363636]/70 leading-relaxed">
                    Keyword optimized project pages, structured sitemaps, set up
                    GBP for your location. Micro market landing sites and
                    medium/large locality pages.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-[#536186]/10 text-[#536186] flex items-center justify-center">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#363636] mb-2">
                    Paid Media PPC & Social Media PPC
                  </h3>
                  <p className="text-[#363636]/70 leading-relaxed">
                    High quality intent search campaigns on google, dynamic
                    remarketing campaigns using hyper local social media ads,
                    lead form campaigns and open house traffic generation
                    campaigns.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-[#536186]/10 text-[#536186] flex items-center justify-center">
                  <Settings size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#363636] mb-2">
                    Exposure, Content & Pictures
                  </h3>
                  <p className="text-[#363636]/70 leading-relaxed">
                    Maximize the title and photo synergies with all leading
                    online property sites. Conduct A/B testing on pricing,
                    headlines, and call-to-action buttons. Quick reference
                    videos, EMI calculators, and clear floor plan pictures
                    answering buyer questions (carpet area, amenities,
                    possession date).
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-[#536186]/10 text-[#536186] flex items-center justify-center">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#363636] mb-2">
                    Automation, Nurturing & Analytics (CRO)
                  </h3>
                  <p className="text-[#363636]/70 leading-relaxed">
                    Quickly respond via WhatsApp/SMS, and set up email sequences
                    and broker dashboards easily. Use lead scoring, heatmaps,
                    form analysis, and conversion testing to help reduce
                    friction. We combine these all into one comprehensive
                    measurable program.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} className="relative hidden lg:block">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#D3D3D3] relative h-[700px]">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Search ad and mobile property listing demonstrating digital marketing services."
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#536186]/90 via-[#363636]/40 to-transparent"></div>

              <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-start gap-4 transform translate-y-4">
                  <div className="w-10 h-10 bg-[#536186] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Search size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#536186] uppercase mb-1">
                      Google Search Ad
                    </p>
                    <div className="h-2 w-24 bg-[#D3D3D3] rounded mb-2"></div>
                    <div className="h-2 w-48 bg-[#D3D3D3] rounded"></div>
                  </div>
                </div>

                <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-start gap-4 ml-8 transform -translate-y-4">
                  <div className="w-10 h-10 bg-[#363636] rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#363636] uppercase mb-1">
                      Mobile Property Listing
                    </p>
                    <div className="h-2 w-32 bg-[#D3D3D3] rounded mb-2"></div>
                    <Link
                      to="/contact"
                      className="inline-block mt-2 px-4 py-1.5 bg-[#536186] text-white text-xs font-bold rounded-lg shrink-0"
                    >
                      Contact Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Find and Assess",
      desc: "We will assess your web-site, your listings, your advertisement accounts, and your existing customer journey. We'll map the point(s) where customers leave your site.",
    },
    {
      num: "02",
      title: "Create and Launch",
      desc: "We carry out your SEO fixes, create conversion oriented landing pages, and create advertisement sets using targeted audience split.",
    },
    {
      num: "03",
      title: "Refine and Scale",
      desc: "Weekly Optimizing loops and Creative Refreshment and Budget shifting based on performance. Each sprint has distinct deliverables and a Dashboard so that you always have visibility on your ROI.",
    },
  ];

  return (
    <section className="py-24 bg-[#D3D3D3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              How We Work — A Simple 3-Step Process
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white p-10 rounded-3xl shadow-lg relative h-full group hover:-translate-y-2 transition duration-300">
                <div className="text-6xl font-black text-[#F8F9FA] absolute top-6 right-6 transition duration-300 group-hover:text-[#B0C4DE]/30">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-[#363636] mb-6 relative z-10">
                  {step.title}
                </h3>
                <p className="text-[#363636]/70 leading-relaxed relative z-10">
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

const CaseStudySection = () => {
  return (
    <section className="py-24 bg-[#363636] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="text-[#B0C4DE] font-bold tracking-wider text-sm uppercase mb-2 block">
              Case Example
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Proof: Bhumkar Realty Township
            </h2>
            <p className="text-[#D3D3D3] text-lg leading-relaxed mb-8">
              An illustrative example of a project we completed was one for a
              new township development (client example: Bhumkar Realty). We
              created and executed focused social media and search engine
              advertising, as well as an individualised land to funnel visitors.
            </p>
            <p className="text-[#D3D3D3] text-lg leading-relaxed mb-10">
              This project achieved qualified leads going to site and increased
              booking rates through an automated follow up process.
            </p>

            <blockquote className="border-l-4 border-[#B0C4DE] pl-6 py-2">
              <p className="text-xl font-medium italic text-white mb-4">
                "We've experienced a reduction in wasted ad spend as well as
                received walk-in leads each week."
              </p>
              <footer className="text-[#B0C4DE] font-bold">
                — Adswise marketing Client
              </footer>
            </blockquote>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="rounded-3xl overflow-hidden relative shadow-2xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
                alt="Open-house event with visitors and branded marketing materials."
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    "More qualified leads generated by Intent Based Search and Targeted Social Media Ads.",
    "Fewer Sales Cycles From Automated Nurture Sequences.",
    "Better Visibility for Each Project and Locality Page.",
    "Less Waste Through More Precise Audience Segmentation.",
  ];

  return (
    <section className="py-20 bg-white border-b border-[#D3D3D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636]">
              Benefits & Measurable Outcomes
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-6 bg-[#F8F9FA] rounded-xl border border-[#D3D3D3]">
                <ShieldCheck
                  className="text-[#536186] flex-shrink-0 mt-1"
                  size={24}
                />
                <p className="text-[#363636]/80 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

const KPISection = () => {
  const kpis = [
    "Lead Sources and Projects' Metrics (MQL/SQL)",
    "Cost Per Lead (CPL) & Cost Per Booking (CPB)",
    "Lead → Visit | Visit → Booking Conversion Rate",
    "Impressions, Click Through Rate(CTR), Average Position",
    "Organic Traffic & Keyword Rankings for Project Pages",
    "Return on Advertising (ROA) & Life Time Value (LTV)",
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              KPIs We Track
            </h2>
            <p className="text-lg text-[#363636]/80 mb-8 leading-relaxed">
              These targets will serve as our baseline metrics. We will evolve &
              continue to improve our performance throughout each sprint by
              gathering data against these metrics and adjusting our strategy
              based on our progress.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-[#536186] p-8 rounded-3xl text-white shadow-xl">
              <ul className="space-y-4">
                {kpis.map((kpi, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 border-b border-[#B0C4DE]/20 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#B0C4DE]/20 flex items-center justify-center flex-shrink-0">
                      <BarChart3 size={16} className="text-[#B0C4DE]" />
                    </div>
                    <span className="text-[#D3D3D3] font-medium">{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const faqs = [
    {
      q: "How fast will campaigns produce leads?",
      a: "Paid campaigns start producing leads in 7–14 days; organic gains typically take 2–3 months.",
    },
    {
      q: "Can you work with our CRM and sales team?",
      a: "Yes. We integrate with popular CRMs and set up webhook flows for instant lead delivery.",
    },
    {
      q: "Do you manage listings on property portals?",
      a: "Yes — we handle syndication, creative titles, and lead form optimization.",
    },
    {
      q: "Will you run multiple projects simultaneously?",
      a: "Yes. We segment campaigns by project and provide dedicated reporting.",
    },
    {
      q: "Are there long contracts?",
      a: "No long contracts — month-to-month options available.",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-[#D3D3D3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-4">
              FAQs — Quick Answers
            </h2>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div
                className={`bg-[#F8F9FA] rounded-2xl border transition-all duration-300 ${openFAQ === index ? "border-[#536186] shadow-md" : "border-[#D3D3D3] hover:border-[#B0C4DE]"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                >
                  <span
                    className={`font-bold text-lg pr-8 ${openFAQ === index ? "text-[#536186]" : "text-[#363636]"}`}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFAQ === index ? "bg-[#536186] text-white" : "bg-[#D3D3D3] text-[#363636]"}`}
                  >
                    {openFAQ === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-[#363636]/80 leading-relaxed pt-2">
                        <span className="font-semibold text-[#536186]">
                          A:{" "}
                        </span>
                        {faq.a}
                      </div>
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
  <section className="py-24 bg-[#536186] relative overflow-hidden text-center text-white">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="max-w-4xl mx-auto px-4 relative z-10">
      <AnimatedSection>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
          Are you prepared to grow your bookings faster and reduce wasted
          spending?
        </h2>
        <p className="text-xl text-[#B0C4DE] mb-12">
          Schedule a complimentary strategy consultation with us and get a
          customized 90-day launch plan.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-white text-[#536186] font-bold text-lg shadow-2xl hover:bg-[#D3D3D3] transition transform hover:-translate-y-1 gap-3"
        >
          Start a Free Strategy Call
          <ArrowRight size={20} />
        </Link>
        <p className="mt-8 text-sm text-[#D3D3D3] font-medium flex items-center justify-center gap-4 flex-wrap">
          <span>
            <CheckCircle size={16} className="inline mr-2 text-[#B0C4DE]" />{" "}
            Begins Converting Immediately
          </span>
          <span className="hidden sm:inline">•</span>
          <span>
            <CheckCircle size={16} className="inline mr-2 text-[#B0C4DE]" /> No
            long-term contracts
          </span>
          <span className="hidden sm:inline">•</span>
          <span>
            <CheckCircle size={16} className="inline mr-2 text-[#B0C4DE]" />{" "}
            Assigned Account Manager
          </span>
        </p>

        {/* Internal Links Block as requested */}
        <div className="mt-16 pt-8 border-t border-[#B0C4DE]/20 flex flex-wrap justify-center gap-8 text-sm font-semibold text-[#B0C4DE]">
          <Link to="/services" className="hover:text-white transition">
            Our Services
          </Link>
          <Link to="/case-studies" className="hover:text-white transition">
            Case Studies
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact Adswise
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default RealEstatePage;
