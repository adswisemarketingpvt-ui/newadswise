import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Target,
  TrendingUp,
  BarChart2,
  CheckCircle,
  Eye,
  Plus,
  Minus,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  MapPin,
  Briefcase,
  Layers,
  Search,
  PenTool,
  PlaySquare,
  MessageCircle,
  Star,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

const StrategyConsulting = () => {
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
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `linear-gradient(#536186 1px, transparent 1px), linear-gradient(90deg, #536186 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-[#D3D3D3]"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#536186]/20 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

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
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-[#536186]/10 border border-[#536186]/20 text-[#536186] rounded-full mt-10"
            >
              Strategy Consulting | Adswise Marketing
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 mt-4 leading-tight text-[#363636]">
              Take your market presence <br />
              <span className="text-[#536186]">to the next level</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#363636]/80 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              With data-driven brand building strategies that are designed to
              create lasting brand experiences, build trust, and fuel business
              growth. Our strategy consulting service offers brand building
              strategies designed to build brand equity that delivers results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-white bg-[#536186] shadow-lg shadow-[#536186]/30 transform transition hover:scale-105 hover:bg-[#363636] active:scale-95 flex items-center justify-center gap-2 relative z-50 hover:cursor-pointer pointer-events-auto"
              >
                Get Free Brand Audit <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
      </header>
    );
  };

  const WhatIsSection = () => (
    <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              What is{" "}
              <span className="text-[#536186]">Strategy Consulting?</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#363636]/70 leading-relaxed font-medium">
              Strategy consulting is a collaborative effort between experts and
              stakeholders to diagnose business issues and develop impactful
              solutions. For brand development, strategy consulting includes:
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {[
            {
              icon: <Target size={32} className="text-[#536186]" />,
              title: "Strategic Position",
              desc: "Determining the brand’s strategic position and value proposition.",
            },
            {
              icon: <Eye size={32} className="text-[#536186]" />,
              title: "Customer Experiences",
              desc: "Understanding customer experiences and high-impact touchpoints.",
            },
            {
              icon: <TrendingUp size={32} className="text-[#536186]" />,
              title: "Prioritized Activities",
              desc: "Prioritizing activities to build awareness, preference, and purchase intention.",
            },
          ].map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="bg-[#D3D3D3]/30 rounded-2xl p-8 border border-[#C0C0C0] hover:border-[#536186] hover:shadow-[0_8px_30px_rgba(83,97,134,0.15)] transition-all duration-300 h-full group">
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#363636] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#363636]/70 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="bg-[#363636] text-white p-8 rounded-2xl text-center max-w-4xl mx-auto shadow-xl">
            <p className="text-[#D3D3D3]/90 font-medium leading-relaxed text-lg">
              Our strategy consultants combine market research, competitor
              insight, and real-world testing to provide actionable
              recommendations. The end-product is an informed brand
              architecture, messaging platform, and marketing strategy linked to
              business outcomes.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  const WhySection = () => (
    <section className="py-16 sm:py-24 bg-[#D3D3D3] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B0C4DE] rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              Why Your Business Needs <br />
              <span className="text-xl sm:text-2xl text-[#536186] font-semibold mt-2 block">
                Brand Building Strategies
              </span>
            </h2>
            <p className="text-lg text-[#363636]/80 mb-8 font-medium">
              Ultimately, people do not buy features; they buy trust and
              meaning. Therefore, without brand-building strategies in place,
              companies face:
            </p>
            <div className="space-y-6">
              <ul className="space-y-4">
                {[
                  "Being lost in price wars instead of commanding premium pricing.",
                  "Suffering with inconsistent messaging that confuses customers.",
                  "Losing customers to brands with stronger emotional connections.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#536186] flex items-center justify-center">
                      <Minus className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#363636]/80 font-medium text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-[#363636] p-8 md:p-10 rounded-3xl shadow-2xl relative border border-[#C0C0C0]/20">
              <div className="absolute -top-6 -right-6 bg-[#C0C0C0] w-24 h-24 rounded-full blur-[30px] opacity-20"></div>
              <div className="bg-[#536186] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 leading-relaxed">
                A brand strategy helps companies achieve clarity with customers
                and within teams.
              </h3>
              <p className="text-[#D3D3D3] font-medium leading-relaxed mb-8">
                It helps companies maximize marketing ROI by targeting marketing
                channels and messaging that resonate with customers. Most
                importantly, it converts one-time customers into lifelong brand
                ambassadors.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => {
    return (
      <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Our Strategy{" "}
                <span className="text-[#536186]">Consulting Services</span>
              </h2>
              <p className="text-lg text-[#363636]/70 leading-relaxed font-medium">
                We provide end-to-end strategy consulting with tactical depth
                and hands-on execution.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Strategy Development
                  </h3>
                </div>
                <p className="text-[#363636]/80 mb-6 font-medium">
                  Our process begins with discovery, stakeholder interviews,
                  brand audits, and customer research to build a strategic
                  foundation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Brand
                    audits & gap analysis
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Positioning & value proposition workshops
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Customer segmentation and persona
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Competitive landscape mapping
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <Layers className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Campaign Management
                  </h3>
                </div>
                <p className="text-[#363636]/80 mb-6 font-medium">
                  We translate strategy into high-impact campaigns and manage
                  them end-to-end.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Integrated campaign planning
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Channel
                    orchestration and budget allocation
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> A/B
                    testing and iterative optimization
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Creative briefs and production oversight
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <PenTool className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Content Creation
                  </h3>
                </div>
                <p className="text-[#363636]/80 mb-6 font-medium">
                  Engaging content is at the heart of every brand. Our team
                  delivers compelling content that gets the job done.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Brand
                    stories and messaging pillars
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Website
                    copy and landing pages
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Creative assets: videos, social content
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    SEO-friendly content for visibility
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <BarChart2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Analytics & Reporting
                  </h3>
                </div>
                <p className="text-[#363636]/80 mb-6 font-medium">
                  Data is proof of value. We develop measurement frameworks to
                  track brand activities and business outcomes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Definition of KPIs and dashboards
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Attribution and conversion analysis
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Monthly
                    reviews and insights
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Strategic shifts based on real-time data
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="md:col-span-2">
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0] text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Paid Advertising
                  </h3>
                </div>
                <p className="text-[#363636]/80 mb-6 font-medium max-w-3xl mx-auto">
                  When you require a quick boost in reach and conversions, our
                  paid marketing strategies are there to help you achieve
                  measurable results.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                  <div className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Paid
                    search, display, and social advertising
                  </div>
                  <div className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Audience targeting and retargeting
                  </div>
                  <div className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Landing
                    page optimization
                  </div>
                  <div className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Cost-per-acquisition modeling
                  </div>
                </div>
                <p className="text-[#536186] text-sm mt-6 font-bold uppercase tracking-widest">
                  We also incorporate link building strategies to increase
                  organic authority and search results.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const PlatformsSection = () => {
    return (
      <section className="py-16 sm:py-24 bg-[#D3D3D3]/50 border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Platforms We Work With
              </h2>
              <p className="text-lg text-[#363636]/70 leading-relaxed font-medium">
                We design omnichannel brand programs on leading marketing
                platforms:
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { t: "Instagram", d: "Visual brand storytelling" },
              { t: "Facebook", d: "Community building" },
              { t: "LinkedIn", d: "B2B marketing" },
              { t: "Twitter", d: "Real-time engagement" },
              { t: "YouTube", d: "Long-form storytelling" },
              { t: "Email & CMS", d: "Programmatic marketing" },
            ].map((platform, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-[#C0C0C0] shadow-sm flex flex-col gap-2 hover:border-[#536186] transition-colors h-full">
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      className="text-[#536186] flex-shrink-0"
                      size={20}
                    />
                    <span className="font-bold text-[#363636] text-lg">
                      {platform.t}
                    </span>
                  </div>
                  <span className="text-sm text-[#363636]/70 font-medium pl-7">
                    {platform.d}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ProcessSection = () => {
    const processSteps = [
      {
        t: "Discover",
        d: "Deep dive research, stakeholder alignment, and KPI establishment.",
      },
      {
        t: "Define",
        d: "Brand positioning, message framework, and segmentation.",
      },
      {
        t: "Design",
        d: "Creative direction, content strategy, and channel strategy.",
      },
      {
        t: "Deliver",
        d: "Campaign execution, content creation, and paid media launch.",
      },
      {
        t: "Measure",
        d: "Analytics establishment, reporting rhythm, and optimization.",
      },
      {
        t: "Scale",
        d: "Rollout strategy, multi-channel testing, and continuous improvement.",
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-[#B0C4DE]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Our Process
              </h2>
              <p className="text-lg text-[#363636]/70 leading-relaxed font-medium">
                A process that is both predictable and repeatable is critical
                for speed and impact.
              </p>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-[#C0C0C0] flex items-center gap-6 shadow-sm hover:border-[#536186] transition-colors">
                  <div className="w-12 h-12 bg-[#D3D3D3]/50 rounded-full flex items-center justify-center font-bold text-[#536186]">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#363636] mb-1">
                      {step.t}
                    </h3>
                    <p className="text-[#363636]/80 font-medium">{step.d}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#536186] font-bold text-sm uppercase tracking-widest mb-6 border-t border-[#B0C4DE] pt-8 max-w-md mx-auto">
              Each section has check points and a consultant assigned to ensure
              speed and results.
            </p>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center py-4 px-8 text-white font-bold bg-[#536186] rounded-xl shadow-lg hover:bg-[#363636] transition-colors"
            >
              Book 15-min Strategy Call
            </Link>
          </div>
        </div>
      </section>
    );
  };

  const AdditionalInfoSection = () => {
    return (
      <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Benefits of Choosing Our Strategy Consulting Agency
              </h2>
              <p className="text-lg text-[#363636]/80 font-medium mb-6">
                Our partnership with us offers numerous benefits:
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <Star size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Strategic Clarity - One source of truth in brand decisions.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <TrendingUp size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Faster Growth - Prioritized efforts with quick ROI.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <Layers size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Cross-functional Expertise - Strategy, creative, media, and
                    analytics.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <BarChart2 size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Measurable Outcomes - Clear KPIs linked to revenue and
                    retention.
                  </span>
                </div>
              </div>
              <p className="text-[#363636]/70 italic font-medium">
                We are committed to Google EEAT principles - experienced
                strategists, transparent methodology, and proven case studies to
                demonstrate our authority.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#B0C4DE]/15 rounded-3xl p-8 sm:p-10 border border-[#C0C0C0] h-full">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                  Why Choose Us
                </h2>
                <ul className="space-y-6 mb-8">
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Proven Track Record:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        Case studies with quantified brand improvement.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Senior-Led Teams:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        Strategy is led by senior-level consultants and executed
                        by specialists.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Custom Playbooks:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        No cookie-cutter solutions here; every brand gets a
                        unique approach.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Transparent Pricing:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        Clear scope, clear ROI, and never any surprises.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#D3D3D3]/30 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <p className="text-xl italic font-bold text-[#363636] mb-4">
                  "Their strategy transformed our brand from a confusing story
                  to a clear, powerful message that immediately increased our
                  MQLs by 40%."
                </p>
                <p className="text-[#536186] font-semibold">
                  — B2B SaaS Client
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-[#D3D3D3]/30 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <p className="text-xl italic font-bold text-[#363636] mb-4">
                  "We finally have a unified brand voice. The strategy
                  consulting engagement led directly to our best Q4 revenue
                  ever."
                </p>
                <p className="text-[#536186] font-semibold">
                  — eCommerce Retailer
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Industries We Serve
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            {[
              "Consumer & Retail",
              "SaaS & Technology",
              "Healthcare & Wellness",
              "Financial Services & Insurance",
              "Education & e-Learning",
              "Hospitality & Travel",
              "Professional Services",
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-[#D3D3D3]/20 p-6 rounded-2xl border border-[#C0C0C0] flex items-center justify-center text-center">
                  <h3 className="text-lg font-bold text-[#363636]">{item}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const FAQSection = () => {
    const faqs = [
      {
        q: "What are brand building strategies and how do they help my business?",
        a: "Brand building strategies are coordinated efforts—positioning, messaging, content, and distribution—that increase awareness, preference, and customer loyalty. They help businesses charge premium prices, reduce churn, and grow sustainably.",
      },
      {
        q: "How long until I see results from brand building strategies?",
        a: "Short-term improvements (awareness and traffic) can appear within 4–8 weeks. Meaningful brand equity and measurable revenue impact typically develop over 3–12 months, depending on budget and market dynamics.",
      },
      {
        q: "Do you offer link building strategies as part of brand consulting?",
        a: "Yes. We integrate ethical link building strategies to strengthen domain authority and amplify organic discoverability as part of broader content and PR programs.",
      },
      {
        q: "Can you help with both B2B and B2C brand building strategies?",
        a: "Absolutely. We design audience-specific strategies—B2C focuses on emotion and scale, while B2B emphasizes trust, thought leadership, and relationship building.",
      },
      {
        q: "What metrics do you use to measure brand strategy success?",
        a: "We track brand metrics (awareness, search volume, share of voice), performance metrics (traffic, leads, conversions), and financial KPIs (CAC, LTV, revenue growth) to show impact.",
      },
    ];
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
      <section className="py-16 sm:py-24 bg-[#D3D3D3]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                FAQs
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-sm border border-[#C0C0C0] overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-[#D3D3D3]/20 transition-colors"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="font-bold text-[#363636] pr-8">
                      {faq.q}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="text-[#536186] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="text-[#536186] flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 pt-2 text-[#363636]/80 font-medium border-t border-[#C0C0C0]/50">
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
    <section className="py-20 sm:py-32 relative overflow-hidden bg-[#536186]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#363636]/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
            Ready to transform recognition into revenue?
          </h2>
          <p className="text-xl text-[#D3D3D3] mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
            Our brand building strategies incorporate creative uniqueness with
            measurable approaches to achieve business growth and create
            long-term value. Book a free strategy call and get a customized
            brand roadmap with revenue-focused initiatives.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#363636] bg-[#D3D3D3] hover:bg-white transform transition hover:scale-105 shadow-xl shadow-[#363636]/20"
            >
              Get Your Free Brand Audit
            </Link>
            <Link
              to="/services/brand-design"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-transparent border-2 border-[#B0C4DE] hover:bg-[#B0C4DE] hover:text-[#363636] transform transition"
            >
              Explore Brand Design
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  return (
    <>
      <Helmet>
        <title>Brand Building Strategies | Strategy Consulting Experts</title>
        <meta
          name="description"
          content="Transform your brand with proven brand building strategies — expert strategy consulting that boosts awareness, trust, and revenue for ambitious businesses."
        />
      </Helmet>

      <div className="font-sans min-h-screen text-[#363636] bg-[#D3D3D3]">
        <HeroSection />
        <WhatIsSection />
        <WhySection />
        <ServicesSection />
        <PlatformsSection />
        <ProcessSection />
        <AdditionalInfoSection />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
};

export default StrategyConsulting;
