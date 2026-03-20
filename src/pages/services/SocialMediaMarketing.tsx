import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Share2,
  Heart,
  Users,
  MessageCircle,
  BarChart2,
  TrendingUp,
  Globe,
  Plus,
  Minus,
  Send,
  ThumbsUp,
  Video,
  Layers,
  ChevronRight,
  CheckCircle,
  Target,
  PenTool,
  Search,
  MonitorPlay,
  Briefcase,
  PlaySquare,
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

const SocialMediaMarketing = () => {
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
          {/* Animated Grid Pattern */}
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

          {/* Connect Dots / Social Graph Vibes */}
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

          {/* Original Glow Effects */}
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
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-[#536186]/10 border border-[#536186]/20 text-[#536186] rounded-full"
            >
              Adswise Marketing — Social Media Marketing Services
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 mt-4 leading-tight text-[#363636]">
              Elevate your brand with a trusted <br />
              <span className="text-[#536186]">social media agency</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#363636]/80 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              Are you looking for a marketing partner who can leverage social
              attention into quantifiable growth? At Adswise Marketing, we
              specialize in providing comprehensive social media marketing
              solutions. From developing creative content strategies to
              leveraging data-driven approaches, our team can help you launch
              new products, drive customer acquisition, build brand equity, and
              much more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-white bg-[#536186] shadow-lg shadow-[#536186]/30 transform transition hover:scale-105 hover:bg-[#363636] active:scale-95 flex items-center justify-center gap-2 relative z-50 hover:cursor-pointer pointer-events-auto"
              >
                Let’s Build Your Brand <ChevronRight size={18} />
              </Link>
              <Link
                to="/case-studies"
                className="w-full sm:w-auto px-10 py-4 border-2 border-[#536186] rounded-lg font-semibold text-[#536186] hover:bg-[#536186] hover:text-[#D3D3D3] transition active:scale-95 relative z-50 hover:cursor-pointer pointer-events-auto flex items-center justify-center"
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

  const WhatIncludesSection = () => (
    <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              What our{" "}
              <span className="text-[#536186]">
                social media marketing services
              </span>{" "}
              include
            </h2>
            <p className="text-lg sm:text-xl text-[#363636]/70 leading-relaxed font-medium">
              We take a full-funnel approach to social, designing systems that
              attract attention, foster consideration, and ultimately drive
              interest into action. Our service offering is flexible and
              outcome-focused across the spectrum of:
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Search size={32} className="text-[#536186]" />,
              title: "Brand/Channel Audits",
              desc: "Quickly identify opportunities for short-term gain and long-term strategy.",
            },
            {
              icon: <PenTool size={32} className="text-[#536186]" />,
              title: "Content Strategy & Production",
              desc: "Short-form video, static and carousel images, stories, and other native formats.",
            },
            {
              icon: <MessageCircle size={32} className="text-[#536186]" />,
              title: "Community Management",
              desc: "Safeguard and enhance brand reputation through proactive engagement.",
            },
            {
              icon: <TrendingUp size={32} className="text-[#536186]" />,
              title: "Paid Social Campaign Strategy",
              desc: "Test and optimise ad campaigns across major platforms for maximum ROAS.",
            },
            {
              icon: <BarChart2 size={32} className="text-[#536186]" />,
              title: "Measurement Frameworks",
              desc: "Dashboards that reliably link social media activity to tangible business outcomes.",
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
          <AnimatedSection delay={0.5}>
            <div className="bg-[#536186] rounded-2xl p-8 shadow-xl flex flex-col justify-center h-full text-center">
              <p className="text-white font-bold text-lg leading-relaxed">
                It is this combination of creativity and analysis that defines a
                true professional social media marketing agency: not just good
                content, but content that makes a measurable difference.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const WhySpecialistSection = () => (
    <section className="py-16 sm:py-24 bg-[#D3D3D3] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B0C4DE] rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              Why choose a specialist <br />
              <span className="text-xl sm:text-2xl text-[#536186] font-semibold mt-2 block">
                social media agency?
              </span>
            </h2>
            <p className="text-lg text-[#363636]/80 mb-8 font-medium">
              Platform ecosystems are constantly evolving. Algorithms, ad types,
              and audience behaviors are constantly changing, and so too are the
              definitions of “what works.” This is the world that a specialist
              social media agency exists in. We do not take a one-size-fits-all
              approach; we develop platform-specific playbooks that are right
              for your product, your audience, and your commercial objectives.
            </p>
            <div className="space-y-6">
              <h3 className="text-[#363636] font-bold text-xl">
                By working with a specialist, there are many benefits:
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#536186] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#363636]/80 font-medium text-lg">
                    More efficient creative development and more relevant
                    content.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#536186] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#363636]/80 font-medium text-lg">
                    More effective media planning through rigorous testing and
                    learning.
                  </span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#536186] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#363636]/80 font-medium text-lg">
                    More streamlined execution between paid and organic channels
                    for consistent messaging.
                  </span>
                </li>
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
                If your goal is return, as opposed to reach, then a specialist
                social media marketing agency can get you there quicker.
              </h3>
              <p className="text-[#D3D3D3] font-medium leading-relaxed mb-8">
                We eliminate the guesswork. Through dedicated focus on social
                platform nuances, our strategies inherently align your brand
                with how modern consumers actually behave and convert on their
                favorite apps.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D3D3D3] text-[#363636] font-bold rounded-lg hover:bg-white transition"
              >
                Partner with an Expert <ChevronRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const HowWeWorkSection = () => {
    const processSteps = [
      {
        t: "Discover",
        d: "We audit channels, competitors, and audiences to set a performance baseline and identify opportunity areas.",
        icon: <Search size={24} className="text-white" />,
      },
      {
        t: "Design",
        d: "We set measurable objectives, develop content pillars, and design campaign blueprints to meet business objectives.",
        icon: <PenTool size={24} className="text-white" />,
      },
      {
        t: "Deliver",
        d: "Our delivery team produces short-form videos, thumb-stopping hooks, carousel stories, and ad creatives tailored to platform nuances.",
        icon: <PlaySquare size={24} className="text-white" />,
      },
      {
        t: "Scale",
        d: "We design experiments, scale winning creative and audiences, and optimize funnels to improve conversion metrics over time.",
        icon: <TrendingUp size={24} className="text-white" />,
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                How we work —{" "}
                <span className="text-[#536186]">
                  discover, design, deliver, scale
                </span>
              </h2>
              <p className="text-lg text-[#363636]/70 leading-relaxed font-medium">
                Our approach is simple, repeatable, and transparent. It ensures
                that your social media marketing service is robust, data-driven,
                and agile to changing trends.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="relative h-full flex flex-col group">
                  {idx !== processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-[#536186] to-transparent z-0 opacity-20"></div>
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-[#536186] flex items-center justify-center font-bold text-white mb-6 z-10 shadow-lg group-hover:-translate-y-2 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636] mb-4">
                    {step.t}
                  </h3>
                  <p className="text-[#363636]/70 font-medium leading-relaxed flex-grow">
                    {step.d}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const DeepDivesSection = () => {
    return (
      <section className="py-16 sm:py-24 bg-[#B0C4DE]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Creative That Converts */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#C0C0C0] relative overflow-hidden h-full">
                <div className="absolute -right-10 -bottom-10 opacity-5">
                  <PlaySquare size={300} className="text-[#536186]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6 relative z-10">
                  Creative that converts — attention to action
                </h2>
                <p className="text-lg text-[#363636]/80 font-medium mb-6 relative z-10">
                  Good creative stops a scroll, while great creative drives
                  action. We specialize in formats and messages that reduce the
                  distance between discovery and conversion. Our content
                  playbook includes:
                </p>
                <ul className="space-y-4 mb-6 relative z-10">
                  <li className="flex gap-3 items-start">
                    <CheckCircle
                      className="text-[#536186] flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-[#363636]/80 font-medium">
                      Attention-first opens (0-3 seconds) that capture attention
                      immediately.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle
                      className="text-[#536186] flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-[#363636]/80 font-medium">
                      Platform-native stories that feel organic, rather than
                      interruptive.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle
                      className="text-[#536186] flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-[#363636]/80 font-medium">
                      Clear and context-appropriate calls-to-action that match
                      user intent.
                    </span>
                  </li>
                </ul>
                <p className="text-sm font-bold text-[#536186] bg-[#D3D3D3]/50 p-4 rounded-xl relative z-10">
                  We also use user-generated content and micro-influencer
                  strategies to increase authenticity. This is particularly
                  useful for any social media marketing agency that seeks
                  performance.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Paid social — testable, measurable, repeatable
              </h2>
              <p className="text-lg text-[#363636]/80 font-medium mb-6">
                "Paid social" is a strategy, not a single ad effort. We
                construct a model for tests, including creative tests, audience
                tests, and funnel retargeting, to find the scalable combination.
                Our paid strategy focuses on first-party signals, sequential
                messaging, and creative freshness to lower CPA and increase
                ROAS.
              </p>
              <h3 className="text-xl font-bold text-[#363636] mb-4">
                What are the main components of our paid strategy?
              </h3>
              <div className="space-y-6">
                {[
                  "Audience architecture, including prospecting, engagement, retargeting, and retention.",
                  "Testing cadence for creative, including rotating concepts and locking winners.",
                  "Attribution-aware metrics and tests for incremental lift.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl border border-[#C0C0C0] shadow-sm flex items-center gap-4 hover:border-[#536186] transition-colors"
                  >
                    <TrendingUp
                      className="text-[#536186] flex-shrink-0"
                      size={24}
                    />
                    <p className="font-bold text-[#363636]">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg font-bold text-[#536186] border-l-4 border-[#536186] pl-4">
                When you work with a results-driven social media marketing
                agency, your ad spend becomes an investment, not an expense.
              </p>
            </AnimatedSection>
          </div>

          {/* Community & Analytics */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Community & reputation — the human side of social
              </h2>
              <p className="text-lg text-[#363636]/80 font-medium mb-6">
                Social media channels are, first and foremost, conversation
                channels, and second, distribution channels. We approach
                community management in a proactive, human way, including
                responses, sentiment analysis, and escalation strategies to
                maintain brand trust. Good community management can increase
                organic reach, generate content inspiration, and convert
                customers into evangelists.
              </p>
              <h3 className="text-xl font-bold text-[#363636] mb-4">
                Our community management practice includes:
              </h3>
              <ul className="space-y-4 mb-6">
                {[
                  "Real-time monitoring and response playbooks.",
                  "Crisis detection and escalation strategies.",
                  "Content inspiration from real customer stories.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <MessageCircle
                      className="text-[#536186] flex-shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-[#363636] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-[#536186] italic">
                This is all critical to any professional social media agency
                concerned about long-term brand health.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#363636] rounded-3xl p-8 sm:p-10 shadow-2xl h-full">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                  Analytics & transparency
                </h2>
                <p className="text-lg text-[#D3D3D3]/90 font-medium mb-6">
                  Transparency is non-negotiable. We offer transparent
                  dashboards and reviews that relate social activity to tangible
                  KPIs like leads, sales, sign-ups, and lifetime value. Every
                  campaign starts with an agreement on the measurement approach
                  so that trade-offs can always be made with conviction and
                  accountability.
                </p>

                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Reporting commitments:
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3 items-start text-[#D3D3D3]">
                      <BarChart2
                        className="text-[#B0C4DE] flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="font-medium">
                        Actionable weekly reports and monthly strategic reviews.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start text-[#D3D3D3]">
                      <BarChart2
                        className="text-[#B0C4DE] flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="font-medium">
                        Clear attribution notes and principled reporting on paid
                        vs organic impact.
                      </span>
                    </li>
                    <li className="flex gap-3 items-start text-[#D3D3D3]">
                      <BarChart2
                        className="text-[#B0C4DE] flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="font-medium">
                        Recommendations are made as tests and experiments.
                      </span>
                    </li>
                  </ul>
                </div>
                <p className="text-[#B0C4DE] font-bold text-center">
                  This is what a modern social media marketing agency looks like
                  in terms of measurable value.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const AdditionalInfoSection = () => {
    return (
      <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Who benefits most from our{" "}
                <span className="text-[#536186]">
                  social media marketing services?
                </span>
              </h2>
              <p className="text-lg text-[#363636]/70 leading-relaxed font-medium">
                Our clients come from a broad range of industries and stages.
                Some of the most common clients we work with include:
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
            {[
              {
                t: "Retail & Ecommerce",
                d: "Conversion-focused product creatives, streamlined shopping experiences, and strategic retargeting strategies to maximize sales.",
              },
              {
                t: "Service Businesses",
                d: "Lead generation, appointment booking, and reputation building to maximize lifetime value.",
              },
              {
                t: "Hospitality & Experiences",
                d: "Campaign-based promotions, immersive brand storytelling, and conversion-focused booking strategies to maximize sales and engagement.",
              },
              {
                t: "Startups & D2C Brands",
                d: "Rapid validation and acquisition strategies to maximize growth.",
              },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-[#D3D3D3]/20 p-6 rounded-2xl border border-[#C0C0C0] flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex items-center justify-center font-bold text-white shrink-0 z-10 shadow-lg">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#363636] mb-2">
                      {item.t}
                    </h3>
                    <p className="text-[#363636]/80 font-medium text-sm leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                How we measure success
              </h2>
              <p className="text-lg text-[#363636]/80 font-medium mb-6">
                The measures of success vary based on the goal of the business.
                We work together to identify the North Star metric for your
                program, which could be revenue per lead, cost per acquisition,
                or lift in retention. We design experiments to increase it.
                Measurement is not an afterthought; it is the basis of all the
                creative and media decisions we make.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <Target size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold text-sm">
                    Reach & engagement signals to verify the resonance of the ad
                    creatives.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <Layers size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold text-sm">
                    Funnel metrics like clicks, landing page conversions, and
                    micro-conversions.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <TrendingUp size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold text-sm">
                    Business outcomes, which include leads, sales, and
                    subscription sign-ups.
                  </span>
                </div>
              </div>
              <p className="font-bold text-[#536186] text-lg text-center uppercase tracking-widest mt-8">
                A data-first social media marketing agency.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#B0C4DE]/15 rounded-3xl p-8 sm:p-10 border border-[#C0C0C0] h-full">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                  Partnership models — flexible and collaborative
                </h2>
                <p className="text-lg text-[#363636]/80 font-medium mb-8">
                  We work with your unique business and team styles. This can be
                  full-service, co-managed, and project-based. The aim is to
                  work with your existing processes, not against them.
                </p>
                <ul className="space-y-6 mb-8">
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Full-service:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        strategy, creativity, paid, and community work.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Co-managed:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        where we work with your internal team to ensure brand
                        alignment.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Project-based:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        for one-off activations, launches, and creativity.
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="text-sm font-bold text-[#536186] italic">
                  This allows any business to have access to professional social
                  media marketing services without losing control.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const CaseOutcomesSection = () => (
    <section className="py-16 sm:py-24 bg-[#D3D3D3]/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
              Case-style outcomes — proof in performance
            </h2>
            <p className="text-lg text-[#363636]/80 font-medium max-w-3xl mx-auto">
              We respect client confidentiality, but the anonymised results
              demonstrate the consistency of benefits realised. These are the
              tangible results of an established social media marketing company
              / agency.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              metric: "Lower CPA",
              desc: "Lower acquisition costs through creative testing and audience segmentation.",
            },
            {
              metric: "Higher CVR",
              desc: "Improved conversion rates through sequenced funnels and re-organizing content (discovery, consideration, conversion).",
            },
            {
              metric: "Brand Lift",
              desc: "Greater brand awareness through narrative consistency and implementation of retention-based social sequences.",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#C0C0C0] text-center h-full hover:border-[#536186] transition-colors">
                <div className="text-2xl font-bold tracking-tight text-[#536186] mb-4">
                  {item.metric}
                </div>
                <p className="text-[#363636]/80 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="bg-[#363636] text-white p-8 rounded-2xl text-center max-w-3xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Adswise Marketing?
            </h3>
            <p className="text-[#D3D3D3]/90 font-medium leading-relaxed">
              The social media agency we choose to work with makes a big
              difference. We offer a mix of creative enthusiasm and business
              sense. We’re a group of strategists, writers, designers, and paid
              media specialists who concentrate on results. Our strength lies in
              our capacity to integrate platform specialists with a relentless
              testing mentality to ensure your social media channels drive
              growth.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  const CTASection = () => (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-[#536186]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#363636]/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
            Get started: <br />
            <span className="text-[#B0C4DE]">a practical first step</span>
          </h2>
          <p className="text-xl text-[#D3D3D3] mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
            Start with a strategic audit, a short look at what you’re doing now,
            opportunities to improve, and a 90-day plan to make progress without
            sacrificing innovation. It will give you a plan and a set of metrics
            to gauge success.
          </p>
          <p className="text-lg text-white font-bold mb-12 max-w-2xl mx-auto border-l-4 border-[#B0C4DE] pl-4 text-left">
            If you’re ready to stop focusing on vanity metrics and create a
            social media presence that drives revenue, Adswise Marketing can
            help with our social media marketing services.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#363636] bg-[#D3D3D3] hover:bg-white transform transition hover:scale-105 shadow-xl shadow-[#363636]/20"
            >
              Contact Us for a Free Audit
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-transparent border-2 border-[#B0C4DE] hover:bg-[#B0C4DE] hover:text-[#363636] transform transition"
            >
              Learn More
            </Link>
          </div>
          <p className="mt-8 text-sm text-[#B0C4DE] font-semibold uppercase tracking-widest">
            — no jargon, just clear actions that scale your social presence and
            grow your business.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );

  return (
    <>
      <Helmet>
        <title>Best Social Media Agency for Growth | Adswise Marketing</title>
        <meta
          name="description"
          content="Partner with Adswise Marketing, a creative social media agency delivering strategy, content, ads, and analytics to increase engagement, leads, and sales."
        />
      </Helmet>

      <div className="font-sans min-h-screen text-[#363636] bg-[#D3D3D3]">
        <HeroSection />
        <WhatIncludesSection />
        <WhySpecialistSection />
        <HowWeWorkSection />
        <DeepDivesSection />
        <AdditionalInfoSection />
        <CaseOutcomesSection />
        <CTASection />
      </div>
    </>
  );
};

export default SocialMediaMarketing;
