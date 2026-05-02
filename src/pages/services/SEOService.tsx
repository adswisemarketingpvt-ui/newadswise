import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Search,
  TrendingUp,
  MapPin,
  Target,
  BarChart,
  CheckCircle,
  Plus,
  Minus,
  ChevronRight,
  Globe,
  Settings,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

/*
  SEO METADATA CONTENT (For specific configuration in index.html, next/head or helmet):
  Meta Title (≤60 chars): Search Engine Optimization Agency in Pune | Top SEO Agency
  Meta Description (150–160 chars): Looking for a search engine optimization company or agency in Pune? Our SEO agency delivers measurable growth with affordable, transparent, and results-driven SEO services.
*/

// ============================================================================
// ANIMATED SECTION WRAPPER
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
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const SEOService = () => {
  // Monochromatic Color Palette:
  // #536186 - Stone Gray (Primary Accent)
  // #D3D3D3 - Fog Gray (Light Background)
  // #363636 - Charcoal Gray (Text/Dark Background)
  // #C0C0C0 - Silver (Borders/Secondary Accent)
  // #B0C4DE - Ash Gray (Highlighting)

  const HeroSection = () => {
    return (
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#D3D3D3] text-[#363636] py-20 lg:py-0">
        {/* --- BACKGROUND ANIMATION LAYER --- */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Animated Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.2]"
            style={{
              backgroundImage: `linear-gradient(#536186 1px, transparent 1px), linear-gradient(90deg, #536186 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-[#D3D3D3] via-transparent to-[#D3D3D3]"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Floating Search Nodes */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-[#536186]/30 rounded-full flex items-center justify-center"
              style={{
                width: Math.random() * 150 + 100,
                height: Math.random() * 150 + 100,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, 30, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Search className="text-[#536186]/20" size={30} />
            </motion.div>
          ))}

          {/* Glowing Accents */}
          <div className="absolute top-0 right-0 w-3/4 md:w-[600px] h-[600px] bg-[#B0C4DE] rounded-full blur-[80px] md:blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-3/4 md:w-[600px] h-[600px] bg-[#C0C0C0] rounded-full blur-[80px] md:blur-[120px] opacity-60"></div>
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-5xl pt-12 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-auto"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-[#536186]/10 border border-[#536186]/20 text-[#536186] rounded-full"
            >
              <TrendingUp size={16} /> Measurable Organic Growth
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 mt-4 leading-tight text-[#363636] capitalize">
              Search Engine Optimization <br />
              <span className="text-[#536186]">Agency in Pune</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#363636]/80 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              If you're looking for a search engine optimization company or
              agency in Pune, you're looking for measurable organic growth,
              reporting, and an SEO partner that knows how to convert search
              traffic into customers. We're an SEO agency that provides local
              and national brands with the technical, content, and
              conversion-based SEO services necessary to rank higher, attract
              more customers, and grow revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-white bg-[#536186] shadow-lg shadow-[#536186]/30 transform transition hover:scale-105 hover:bg-[#363636] active:scale-95 flex items-center justify-center gap-2 relative z-50 hover:cursor-pointer pointer-events-auto"
              >
                Book a Free SEO Audit <ChevronRight size={18} />
              </Link>
              <Link
                to="/case-studies"
                className="w-full sm:w-auto px-10 py-4 border-2 border-[#536186] rounded-lg font-semibold text-[#536186] hover:bg-[#536186] hover:text-[#D3D3D3] transition active:scale-95 text-center relative z-50 hover:cursor-pointer pointer-events-auto"
              >
                See Client Results
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Subtle Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
      </header>
    );
  };

  const IntroSection = () => (
    <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-[#363636]">
              Introduction to{" "}
              <span className="text-[#536186]">SEO Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#363636]/70 leading-relaxed font-medium mb-6">
              Businesses benefit from search visibility, which is predictable
              and leads to business growth. Partnering with a dedicated search
              engine optimization company in Pune is an investment in guaranteed
              business growth over time, including increased quality of leads
              and return on investment, as opposed to relying on paid search
              advertising strategies for short-term gains.
            </p>
            <p className="text-lg text-[#363636]/70 leading-relaxed font-medium bg-[#B0C4DE]/10 p-6 rounded-2xl border border-[#B0C4DE]/30">
              We provide search engine optimization services for businesses that
              demand strategy, execution, keyword research, intent, SEO,
              content, and reporting. We operate as an extension of your
              business, working closely with you to ensure that search engine
              optimization strategies are perfectly synchronized with your
              sales, product, and marketing cycles. Whether you’re a startup,
              small, medium, or large enterprise, we ensure that search engine
              optimization strategies fit your budget, ambitions, and
              requirements.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  const WhatIsSEOSection = () => (
    <section className="py-16 sm:py-24 bg-[#D3D3D3] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B0C4DE] rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              What is Search Engine Optimization (SEO)?
            </h2>
            <p className="text-lg text-[#363636]/80 mb-8 font-medium">
              Search Engine Optimization is the scientific study and application
              of improving a website’s presence in a search engine’s results
              pages. It has three main pillars:
            </p>
            <ul className="space-y-6 mb-8">
              {[
                {
                  title: "Technical SEO",
                  desc: "Improving crawlability, indexability, site speed, structured data, and mobile-friendliness.",
                },
                {
                  title: "On-page SEO",
                  desc: "Improving page titles, headers, content, internal linking, and user experience.",
                },
                {
                  title: "Off-page SEO",
                  desc: "Improving authority through quality links, partnerships, and brand signals.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-4 items-start bg-white/50 p-4 rounded-xl border border-[#C0C0C0]/50 hover:bg-white transition-colors"
                >
                  <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-[#536186] flex items-center justify-center shadow-md">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[#363636] font-bold block text-lg mb-1">
                      {item.title}
                    </span>
                    <span className="text-[#363636]/70 leading-snug">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="inline-block bg-[#536186] text-white px-6 py-4 rounded-xl shadow-lg border border-[#363636]/10">
              <p className="font-medium">
                SEO is all about providing value and achieving business
                objectives, rather than manipulating algorithms, which is what a
                good seo company should provide.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-[#363636] p-8 md:p-10 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-6 -right-6 bg-[#C0C0C0] w-24 h-24 rounded-full blur-[30px] opacity-20"></div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Your Business Needs SEO Services
              </h3>
              <p className="text-[#D3D3D3] mb-6 font-medium">
                Typically, organic search is one of the first steps in the
                customer journey. Partnering with a seasoned seo company has
                numerous benefits:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Continued growth in traffic volume with compound growth over time.",
                  "Lower cost for lead generation compared to buying clicks.",
                  "Establishes trust and authority in your niche to improve conversion rates.",
                  "Helps you better understand your customer’s intent through keyword and analytics data.",
                  "It’s a long-term asset with continued traffic flow after the initial effort.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <TrendingUp className="w-5 h-5 text-[#B0C4DE] flex-shrink-0 mt-0.5" />
                    <span className="text-[#D3D3D3]/80 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#D3D3D3] rounded-xl p-5">
                <p className="text-[#363636] font-medium text-sm leading-relaxed">
                  If you’re researching what is best in a digital marketing
                  agency in Pune seo sem or looking for affordable seo services
                  in pune, know that a structured SEO effort has long-term value
                  over any advertising effort.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const ServiceDetailsSection = () => {
    const servicesData = [
      {
        icon: <Search size={32} className="text-[#536186]" />,
        title: "Strategy Development",
        list: [
          "Complete SEO audit including technical, on-page, and off-page SEO.",
          "Keyword research including intent and revenue potential.",
          "Market Gap Intelligence & Strategic Opportunity Blueprint.",
          "Customized SEO roadmap to match business KPIs.",
        ],
      },
      {
        icon: <Settings size={32} className="text-[#536186]" />,
        title: "Technical SEO & Site Optimization",
        list: [
          "Crawlability issues, fixes, and performance diagnostics.",
          "Page speed optimization & Core web vitals improvements.",
          "Mobile-first optimization.",
          "Structured Data (Schema) implementation.",
        ],
      },
      {
        icon: <Target size={32} className="text-[#536186]" />,
        title: "Content Crafting & On Page Mastery",
        list: [
          "Content strategy targeting buyer intent & local SEO.",
          "SEO-friendly page copy, blog posts, landing pages.",
          "Meta tags, H tags, and Internal linking.",
          "Content optimization for featured snippets & rich results.",
        ],
      },
      {
        icon: <MapPin size={32} className="text-[#536186]" />,
        title: "Campaign Management & Local SEO",
        list: [
          "Local SEO (Google Business Profile optimization, citations).",
          "Targeted link outreach and PR-driven link acquisition.",
          "Ongoing content campaigns to capture long-tail searches.",
          "Seasonal and campaign-specific SEO activations.",
        ],
      },
      {
        icon: <BarChart size={32} className="text-[#536186]" />,
        title: "Performance Intelligence",
        list: [
          "Conversion tracking & multi-touch attribution modeling setup.",
          "Monthly performance dashboard and transparent reporting.",
          "Quarterly strategy reviews and iterative improvements.",
          "Leveraging PPC for keyword insights and LPO.",
        ],
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-[#363636]">
                Our SEO <span className="text-[#536186]">Services</span>
              </h2>
              <p className="text-[#363636]/70 text-lg">
                Our range of services includes full-spectrum SEO strategies that
                match your business needs, including affordable search engine
                marketing services.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {servicesData.map((svc, idx) => (
              <AnimatedSection
                key={idx}
                delay={idx * 0.1}
                className={idx === 4 ? "lg:col-start-2" : ""}
              >
                <div className="bg-[#D3D3D3]/30 rounded-2xl p-8 h-full border border-[#C0C0C0] hover:border-[#536186] hover:shadow-[0_8px_30px_rgba(83,97,134,0.15)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#B0C4DE] rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

                  <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#363636] mb-4 relative z-10">
                    {svc.title}
                  </h3>
                  <ul className="space-y-3 relative z-10">
                    {svc.list.map((pt, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[#363636]/70 text-sm"
                      >
                        <CheckCircle
                          size={16}
                          className="text-[#536186] flex-shrink-0 mt-0.5"
                        />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ToolsAndProcessSection = () => {
    const processSteps = [
      {
        t: "Discovery & Audit",
        d: "Establish the baseline through benchmarking, crawl, and content inventory.",
      },
      {
        t: "Strategy & Roadmap",
        d: "Define keyword targets, content strategy, and link strategy.",
      },
      {
        t: "Technical Remediation",
        d: "Execute fixes for crawl, speed, and mobile user experience.",
      },
      {
        t: "Content Production",
        d: "Launch optimized content and authoritative content.",
      },
      {
        t: "Link Building",
        d: "Ethical and impactful link building and outreach.",
      },
      { t: "Measure & Optimize", d: "Analyze, optimize, and scale winners." },
      { t: "Scale", d: "Grow to new keywords, markets, and products." },
    ];

    return (
      <section className="py-16 sm:py-24 bg-[#B0C4DE]/15 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Platforms We Work With
              </h2>
              <p className="text-lg text-[#363636]/80 mb-8 font-medium">
                We integrate SEO into the applications and systems you already
                use. Our flexible and agile team will utilize the tools that
                work best for each project to ensure measurable results.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "CMS Platforms",
                    desc: "WordPress, Shopify, Magento, Custom CMS.",
                  },
                  {
                    title: "Google Ecosystem",
                    desc: "Search Console, Analytics 4, Search Ads 360, Business Profile.",
                  },
                  {
                    title: "Technical & Auditing Tools",
                    desc: "Screaming Frog, Semrush, Ahrefs, and Lighthouse.",
                  },
                ].map((plat, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 rounded-xl border border-[#C0C0C0] shadow-sm flex items-center gap-4 hover:border-[#536186] transition-colors"
                  >
                    <Globe className="text-[#536186] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-[#363636]">{plat.title}</h4>
                      <p className="text-sm text-[#363636]/70">{plat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-[#536186] italic bg-white p-4 rounded-lg border-l-4 border-[#536186] shadow-sm">
                A seamless fit for any seo firm in pune engagement.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Our Process (7 Steps)
              </h2>
              <p className="text-lg text-[#363636]/80 mb-8 font-medium">
                A well-defined process minimizes risk and maximizes efficiency.
                It is designed to be completely transparent, so you'll always
                know what's driving value.
              </p>

              <div className="relative">
                <div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-[#C0C0C0] z-0"></div>
                <div className="space-y-5 relative z-10">
                  {processSteps.map((step, idx) => (
                    <motion.div
                      key={idx}
                      className="flex gap-5 group"
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#536186] text-white flex items-center justify-center font-bold shadow-md flex-shrink-0 group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <div className="bg-white border border-[#C0C0C0] p-4 rounded-xl flex-1 shadow-sm group-hover:border-[#536186] group-hover:shadow-md transition-all">
                        <strong className="text-[#363636] block mb-1 text-base">
                          {step.t}
                        </strong>
                        <span className="text-[#363636]/70 text-sm leading-relaxed">
                          {step.d}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const BenefitsSection = () => {
    return (
      <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Benefits of Choosing
                <br /> <span className="text-[#536186]">Our SEO Agency</span>
              </h2>
              <div className="bg-[#363636] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                {/* Decorative graphic */}
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                  <TrendingUp size={250} className="text-white" />
                </div>

                <ul className="space-y-6 relative z-10">
                  {[
                    "Proven methodologies combining technical accuracy with creative content.",
                    "Transparent reporting that links SEO efforts directly to revenue.",
                    "Variable engagement models: project-based, retainer-based, or performance-based.",
                    "Local expertise, national presence: The perfect choice for 'top seo company in pune'.",
                    "Affordable options for small businesses looking for 'affordable seo services in pune'.",
                  ].map((ben, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle
                        className="text-[#B0C4DE] flex-shrink-0 mt-1"
                        size={20}
                      />
                      <span className="text-[#D3D3D3]/90 text-base md:text-lg font-medium">
                        {ben}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-[#536186]">
                  <p className="text-white font-bold italic">
                    We aim to be your go-to 'seo services provider company in
                    pune' that can grow with you!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Industries We Serve & Why Us
              </h2>
              <p className="text-[#363636]/80 mb-6 font-medium text-lg">
                SEO strategies vary according to industries. We have proven
                results across multiple verticals:
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "E-commerce & Retail",
                  "SaaS & Tech Innovators",
                  "Healthcare & Wellness",
                  "Finance & Fintech",
                  "Hospitality & Wanderlust",
                  "Local Services & Trades",
                  "B2B Professional Solutions",
                ].map((ind, i) => (
                  <span
                    key={i}
                    className="bg-[#D3D3D3]/50 text-[#363636] px-4 py-2 rounded-lg text-sm font-semibold border border-[#C0C0C0]"
                  >
                    {ind}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold text-[#536186] mb-8">
                *For local businesses, we implement specialized local SEO
                strategies to help you rank in near-me searches and maps.
              </p>

              <div className="bg-[#B0C4DE]/20 p-6 rounded-2xl border border-[#C0C0C0]">
                <h3 className="text-xl font-bold text-[#363636] mb-4">
                  Why Choose Us vs. Others?
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm text-[#363636]/80">
                    <Search
                      size={16}
                      className="text-[#536186] flex-shrink-0 mt-0.5"
                    />
                    Experienced in-house technical SEOs, content writers, and
                    outreach experts.
                  </li>
                  <li className="flex gap-2 text-sm text-[#363636]/80">
                    <BarChart
                      size={16}
                      className="text-[#536186] flex-shrink-0 mt-0.5"
                    />
                    Data-driven approach focused firmly on your KPIs.
                  </li>
                  <li className="flex gap-2 text-sm text-[#363636]/80">
                    <Shield
                      size={16}
                      className="text-[#536186] flex-shrink-0 mt-0.5"
                    />
                    Ethical link building and strictly white-hat SEO techniques.
                  </li>
                </ul>
                <p className="mt-4 text-xs font-bold text-[#363636]/60 uppercase tracking-wide">
                  If you’re checking a "best seo agency in pune list", we can
                  prove our success.
                </p>
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
        q: "How quickly will I see results from SEO?",
        a: "SEO timelines vary by competition and starting point. Most clients see meaningful movement in 3–6 months, with consistent growth over 6–12 months.",
      },
      {
        q: "Do you provide local SEO for Pune businesses?",
        a: "Yes — we optimize Google Business Profile, local citations, and on-site signals for stronger visibility in local searches.",
      },
      {
        q: "Are your SEO practices Google-safe?",
        a: "Absolutely. We follow white-hat techniques — technical fixes, quality content, and ethical outreach designed to maintain long-term rankings.",
      },
      {
        q: "Can SEO and paid ads work together?",
        a: "Yes. Using SEO and SEM together accelerates traffic and helps test keyword performance for long-term organic focus.",
      },
      {
        q: "Do you offer affordable SEO packages for small businesses?",
        a: "We have tiered packages and custom solutions to suit different budgets, including affordable SEO services in Pune and scalable enterprise engagements.",
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-[#D3D3D3]/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] text-center mb-12">
              FAQs
            </h2>
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

          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <Link
                to="/blog/seo"
                className="font-bold text-[#536186] hover:text-[#363636] transition-colors underline underline-offset-4"
              >
                Read our Blog for more SEO Resources
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  };

  const CTASection = () => (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-[#536186]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#363636]/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
            Ready to partner with a <br />
            <span className="text-[#B0C4DE]">results-driven agency?</span>
          </h2>
          <p className="text-xl text-[#D3D3D3] mb-12 font-medium leading-relaxed max-w-3xl mx-auto">
            From technical health to content that converts, our SEO services
            turn searchers into customers. Whether you’re comparing a search
            engine optimization seo company pune, looking for a reliable seo
            firm in pune, or hunting the best seo in pune, our team delivers
            transparent, measurable growth.
            <br />
            <br />
            Get started today by booking a free audit and strategy call.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#363636] bg-[#D3D3D3] hover:bg-white transform transition hover:scale-105 shadow-xl shadow-[#363636]/20"
            >
              Book a Free SEO Audit
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-transparent border-2 border-[#B0C4DE] hover:bg-[#B0C4DE] hover:text-[#363636] transform transition"
            >
              Request Proposal
            </Link>
            <Link
              to="/case-studies"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#D3D3D3] hover:text-white underline underline-offset-4 transform transition"
            >
              See Client Results
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-[#D3D3D3] font-sans selection:bg-[#536186] selection:text-white">
      <HeroSection />
      <IntroSection />
      <WhatIsSEOSection />
      <ServiceDetailsSection />
      <ToolsAndProcessSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default SEOService;
