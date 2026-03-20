import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Target,
  BarChart2,
  PieChart,
  TrendingUp,
  Activity,
  Layers,
  CheckCircle,
  Plus,
  Minus,
  Search,
  MousePointer,
  Globe,
  Video,
  DollarSign,
  Users,
  Briefcase,
  MonitorPlay,
  Code,
} from "lucide-react";
import { Link } from "react-router-dom";

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

const PerformanceMarketing = () => {
  // Monochromatic Color Palette
  // Stone Gray: #536186
  // Fog Gray: #D3D3D3
  // Charcoal Gray: #363636
  // Silver: #C0C0C0
  // Ash Gray: #B0C4DE

  const HeroSection = () => {
    return (
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#D3D3D3] text-[#363636] py-20 lg:py-0">
        {/* --- BACKGROUND ANIMATION LAYER --- */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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

          {/* Floating Data Nodes (Performance Particles) */}
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
                opacity: [0.3, 0.6, 0.3],
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-4xl pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-auto"
          >
            {/* Badge for extra "Agency" feel */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-[#536186]/10 text-[#536186] rounded-full"
            >
              Data-Driven Growth
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 mt-8 leading-tight text-[#363636]">
              Performance Marketing Agency
              <br className="hidden md:block" />
              <span className="text-[#536186]">Adswise Marketing</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#363636]/80 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
              Need a performance marketing agency that can convert ad spend into
              revenue? Well, you’ve come to the right place. Within the first
              100 words, we can say that our performance marketing agency
              leverages data, creativity, and optimization to reduce CPA,
              increase ROAS, and drive sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 ">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-white bg-[#536186] shadow-lg shadow-[#536186]/30 transform transition hover:scale-105 hover:bg-[#363636] active:scale-95"
              >
                Book a Free Audit
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-10 py-4 border-2 border-[#536186] rounded-lg font-semibold text-[#536186] hover:bg-[#536186] hover:text-[#D3D3D3] transition active:scale-95"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Subtle Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#D3D3D3] to-transparent z-10 pointer-events-none"></div>
      </header>
    );
  };
  const IntroSection = () => (
    <section className="py-16 sm:py-20 bg-white border-y border-[#C0C0C0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              Introduction{" "}
              <span className="text-[#536186]">Performance Marketing</span>
            </h2>
            <p className="text-base sm:text-lg text-[#363636]/70 mb-10 leading-relaxed font-medium">
              Performance marketing is about results, not impressions. A great
              performance marketing agency is about leads, sales, signups, and
              high-value customer acquisition. At our agency, we create
              campaigns that are directly related to revenue and test
              aggressively to scale what is working.
              <br />
              <br />
              What you will get is highly tracked funnels, segmented audiences
              that reduce unnecessary spend, and creatives that convert. As a
              business operating in markets like Pune and beyond, our
              performance marketing strategy is about using paid media such as
              search, social, and programmatic ads, landing pages, and
              attribution modeling to see exactly what is driving the needle.
              Whether you need a quick acquisition strategy or a full growth
              strategy, our performance marketing agency will work with you to
              create a roadmap with KPIs and timelines.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  const WhatIsSection = () => (
    <section className="py-16 sm:py-20 bg-white border-y border-[#C0C0C0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              What is{" "}
              <span className="text-[#536186]">Performance Marketing?</span>
            </h2>
            <p className="text-[#363636]/70 text-lg">
              Performance marketing is a data-driven form of digital
              advertising, where costs and activities are based on specific
              results. Unlike conventional advertising strategies, which focus
              primarily on building brands, performance advertising strategies
              are constantly optimized to achieve specific goals.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              metric: "CPA",
              name: "Cost per Acquisition",
              icon: <Target className="text-[#536186]" />,
            },
            {
              metric: "ROAS",
              name: "Return on Ad Spend",
              icon: <DollarSign className="text-[#536186]" />,
            },
            {
              metric: "CPL",
              name: "Cost per Lead",
              icon: <Users className="text-[#536186]" />,
            },
            {
              metric: "LTV",
              name: "Customer Lifetime Value",
              icon: <Activity className="text-[#536186]" />,
            },
          ].map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="bg-[#D3D3D3]/30 p-6 rounded-2xl border border-[#C0C0C0] hover:border-[#536186] hover:bg-[#D3D3D3]/50 transition-all text-center group">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#363636] mb-1">
                  {item.metric}
                </h3>
                <p className="text-[#536186] font-medium">{item.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.4}>
          <p className="text-center text-[#363636]/70 mt-10 max-w-4xl mx-auto">
            The new performance marketing agency leverages analytics, creative,
            bid strategies, and conversion rate optimization to create a
            systematic approach to digital advertising. The end objective is not
            simply to drive traffic but to drive profitable growth.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );

  const WhyNeedSection = () => (
    <section className="py-16 sm:py-24 bg-[#B0C4DE]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              Why Your Business Needs a Performance Marketing Agency
            </h2>
            <p className="text-lg text-[#363636]/80 mb-8">
              If growth is a priority, then performance marketing provides a
              predictable and scalable solution. Here’s why a performance
              marketing agency is important to consider:
            </p>
            <ul className="space-y-6">
              {[
                {
                  title: "Accountability",
                  desc: "You measure the impact directly, spend to revenue.",
                },
                {
                  title: "Efficiency",
                  desc: "You target the audience and set bid strategies to avoid wastage.",
                },
                {
                  title: "Scalability",
                  desc: "You can scale the channels after they have been proven.",
                },
                {
                  title: "Speed",
                  desc: "You can test the winners much faster than an organic approach.",
                },
                {
                  title: "Insight",
                  desc: "You learn from the data to improve the product, pricing, and retention.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#536186] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-xl text-[#363636]">
                      {item.title}:
                    </strong>
                    <span className="text-[#363636]/80 ml-2">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[#536186] font-semibold italic">
              Markets that rely on instinct or ad-hoc campaigns often overlook
              optimization.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-[#536186] p-8 md:p-12 rounded-3xl shadow-xl">
              <div className="relative h-64 w-full border-b-2 border-l-2 border-[#B0C4DE]/30">
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  {/* Abstract upward chart */}
                  <path
                    d="M0,200 C50,180 100,100 150,120 C200,140 250,50 350,20"
                    fill="none"
                    stroke="#D3D3D3"
                    strokeWidth="4"
                  />
                  <path
                    d="M0,200 C50,180 100,100 150,120 C200,140 250,50 350,20 L350,250 L0,250 Z"
                    fill="rgba(211,211,211,0.1)"
                  />
                </svg>
                <div className="absolute -bottom-6 -left-6 bg-[#363636] text-white p-3 rounded-xl shadow-lg">
                  <p className="text-xs text-[#B0C4DE]">Before</p>
                  <p className="font-bold">Organic Growth</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-white text-[#363636] p-3 rounded-xl shadow-lg border-2 border-[#536186]">
                  <p className="text-xs text-[#536186]">After</p>
                  <p className="font-bold flex items-center gap-1">
                    <TrendingUp size={16} /> Performance Ads
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => {
    const services = [
      {
        icon: <Target size={32} className="text-[#536186]" />,
        title: "Strategy Development",
        points: [
          "Full funnel analysis and KPI definition.",
          "Attribution planning and conversion modeling.",
          "Channel mix planning: Search, Social, Display, Video, Programmatic.",
          "Growth experiments roadmap and budget allocation.",
        ],
      },
      {
        icon: <Layers size={32} className="text-[#536186]" />,
        title: "Campaign Management",
        points: [
          "Account setup, audience architecture, and bid automation.",
          "Campaign creation for search ads, performance max, paid social, and programmatic.",
          "Creative testing for thumbnails, headlines, CTAs, and videos.",
          "Real-time budget pacing and anomaly detection.",
        ],
      },
      {
        icon: <Code size={32} className="text-[#536186]" />,
        title: "Creative & Content",
        points: [
          "Conversion-first ad creative, landing pages, and video ads.",
          "Dynamic creative optimization and personalization.",
          "Native and performance copywriting aligned to funnel stage.",
        ],
      },
      {
        icon: <MousePointer size={32} className="text-[#536186]" />,
        title: "Conversion Rate Optimization (CRO)",
        points: [
          "Landing page audits and multivariate testing.",
          "Improvements to UX, form optimization, and microcopy changes.",
          "Heatmaps, session recordings, and speed improvements.",
        ],
      },
      {
        icon: <BarChart2 size={32} className="text-[#536186]" />,
        title: "Analytics & Reporting",
        points: [
          "Unified dashboarding and revenue attribution.",
          "Cohort analysis, LTV modeling, and media mix modeling.",
          "Weekly performance reviews and monthly strategic deep dives.",
        ],
      },
      {
        icon: <TrendingUp size={32} className="text-[#536186]" />,
        title: "Growth & Paid Media Integration",
        points: [
          "Cross-channel strategies integrating paid social & search with lifetime value.",
          "Syncing CRM & email for retargeting & lifecycle automation.",
          "Incrementality tests & holdout experiments.",
        ],
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-[#D3D3D3] text-[#D3D3D3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-[#363636]">
                Our Performance{" "}
                <span className="text-[#536186]">Marketing Services</span>
              </h2>
              <p className="text-[#363636]/70 text-lg">
                We provide end-to-end performance marketing services to help you
                acquire, convert, and retain high-value customers.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-[#536186] rounded-2xl p-8 h-full shadow-lg border border-[#B0C4DE]/10 hover:-translate-y-2 transition-transform duration-300">
                  <div className="bg-[#D3D3D3] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {svc.title}
                  </h3>
                  <ul className="space-y-3">
                    {svc.points.map((pt, i) => (
                      <li key={i} className="flex gap-3 text-[#D3D3D3] text-sm">
                        <CheckCircle
                          size={16}
                          className="text-[#B0C4DE] flex-shrink-0 mt-0.5"
                        />
                        <span>{pt}</span>
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

  const PlatformsSection = () => {
    const platforms = [
      {
        name: "Google Ads",
        desc: "Search, shopping, display, and performance max.",
        icon: <Search />,
      },
      {
        name: "Meta Ads",
        desc: "Facebook & Instagram — prospecting and conversion campaigns.",
        icon: <Globe />,
      },
      {
        name: "YouTube & CTV",
        desc: "Upper-funnel testing with direct response intent.",
        icon: <MonitorPlay />,
      },
      {
        name: "Programmatic DSPs",
        desc: "Audience targeting at scale.",
        icon: <Layers />,
      },
      {
        name: "LinkedIn Ads",
        desc: "B2B performance with conversion tracking.",
        icon: <Briefcase />,
      },
      {
        name: "Amazon Ads",
        desc: "Retail media for e-commerce brands.",
        icon: <Target />,
      },
      {
        name: "Analytics Apps",
        desc: "Google Analytics 4, Ads Data Hub, Mixpanel, and Looker Studio.",
        icon: <PieChart />,
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-4">
                Platforms We Work With
              </h2>
              <p className="text-[#536186] text-lg font-medium">
                We don’t let platform trends dictate which platforms we use; we
                let customer journey and unit economics dictate.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {platforms.map((plat, idx) => (
                <div
                  key={idx}
                  className="bg-[#D3D3D3]/30 border border-[#C0C0C0] p-6 rounded-2xl w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex items-start gap-4 hover:shadow-lg hover:border-[#536186] transition-all"
                >
                  <div className="p-3 bg-white text-[#536186] rounded-xl shadow-sm">
                    {plat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#363636] text-lg mb-1">
                      {plat.name}
                    </h4>
                    <p className="text-sm text-[#363636]/70 leading-relaxed">
                      {plat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  };

  const ProcessSection = () => {
    const steps = [
      {
        t: "Discover & Benchmark",
        d: "Media, tracking, creative, and conversion funnel audits.",
      },
      {
        t: "Define Strategy",
        d: "KPIs, channels, budgets, and experimentation roadmap.",
      },
      {
        t: "Build & Launch",
        d: "Campaign creation, tracking, creative, and landing page construction.",
      },
      {
        t: "Test & Learn",
        d: "A/B testing, audience segmentation, and bid experimentation.",
      },
      {
        t: "Optimize & Scale",
        d: "Focus on winners, creative optimization, and reach expansion.",
      },
      {
        t: "Measure & Report",
        d: "Transparent metrics and outcome-focused meetings.",
      },
      {
        t: "Iterate for LTV",
        d: "Retention, cross-sell, and upsell optimization with paid insights.",
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-[#B0C4DE]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#363636] mb-6">
              Our Process (5–7 Steps)
            </h2>
            <p className="text-center text-[#536186] mb-16 font-medium text-lg">
              The process helps ensure optimization is systematic and
              predictable.
            </p>

            <div className="max-w-4xl mx-auto space-y-4 relative">
              <div className="absolute left-[27px] sm:left-[35px] top-6 bottom-6 w-1 bg-[#D3D3D3]/60 rounded-full z-0"></div>
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative z-10 flex items-center gap-6 bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-[#C0C0C0] hover:border-[#536186] transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#536186] text-white flex items-center justify-center rounded-full font-bold text-lg group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#363636] mb-1">
                      {step.t}
                    </h4>
                    <p className="text-[#363636]/70">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  };

  const BenefitsSection = () => (
    <section className="py-16 sm:py-24 bg-[#536186] text-[#D3D3D3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden bg-[#363636] p-8 shadow-2xl flex flex-col justify-center">
              <h3 className="text-4xl font-black text-white mb-4">
                No vanity metrics here.
              </h3>
              <p className="text-xl text-[#B0C4DE]">
                We’re focused on revenue, margins, & growth rates. These are the
                metrics that matter to business leaders.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="bg-[#D3D3D3] text-[#363636] p-4 rounded-xl flex-1 text-center">
                  <p className="text-sm font-bold uppercase tracking-wider mb-1">
                    ROAS
                  </p>
                  <p className="text-3xl font-black text-[#536186]">
                    Target Hit
                  </p>
                </div>
                <div className="bg-[#D3D3D3] text-[#363636] p-4 rounded-xl flex-1 text-center">
                  <p className="text-sm font-bold uppercase tracking-wider mb-1">
                    CAC
                  </p>
                  <p className="text-3xl font-black text-[#536186]">Reduced</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-white">
              Benefits of Choosing Our Performance Marketing Agency
            </h2>
            <ul className="space-y-6">
              {[
                "Better unit economics through constant optimization.",
                "Faster decision-making through clean dashboards & playbooks.",
                "Reducing CAC through the elimination of inefficient audiences & creatives.",
                "Achieving ROAS through creative & bid synergy.",
                "Creating scale through the repetition of experiments & growth of LTV.",
              ].map((benefit, idx) => (
                <li key={idx} className="flex gap-4">
                  <CheckCircle
                    className="text-[#B0C4DE] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-lg font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const IndustriesAndWhyUs = () => (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
              Industries We Serve
            </h2>
            <p className="text-[#363636]/70 mb-8 text-lg">
              Our performance marketing strategies have helped many companies
              across different industries achieve success:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "E-commerce & D2C",
                "SaaS & Subscription",
                "Fintech & Financial",
                "Education & Online Learning",
                "Travel & Hospitality",
                "Lead Generation & Professional",
              ].map((ind, i) => (
                <span
                  key={i}
                  className="px-5 py-3 rounded-xl bg-[#D3D3D3] text-[#363636] font-semibold border border-[#C0C0C0]"
                >
                  {ind}
                </span>
              ))}
            </div>
            <p className="mt-8 text-lg text-[#536186] font-bold p-6 bg-[#B0C4DE]/30 rounded-2xl border-l-4 border-[#536186]">
              For our regional clients looking for a performance marketing
              agency in Pune, we offer bespoke solutions that incorporate
              regional sensibilities with global expertise.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
              Why Choose Us
            </h2>
            <p className="text-[#363636]/70 mb-8 text-lg">
              Not all agencies guarantee results; we guarantee theirs will be
              delivered. Select us for:
            </p>
            <ul className="space-y-5">
              {[
                {
                  title: "Senior-led teams",
                  desc: "with experience delivering high-growth brands.",
                },
                {
                  title: "Cross-functional teams",
                  desc: "including media buyers, data scientists, creatives, and product analysts.",
                },
                {
                  title: "Clear fee structures",
                  desc: "that reward performance.",
                },
                {
                  title: "Case studies",
                  desc: "with hard ROI data and references.",
                },
                {
                  title: "Technology",
                  desc: "that streamlines reporting and insights.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex gap-4 p-4 rounded-xl hover:bg-[#D3D3D3]/30 transition-colors border border-transparent hover:border-[#C0C0C0]"
                >
                  <Target
                    className="text-[#536186] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <strong className="text-[#363636]">{item.title}</strong>{" "}
                    <span className="text-[#363636]/70">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[#536186] font-bold text-lg">
              We’re not just a vendor; we’re a growth partner who will own those
              results with you and help you overcome challenges.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
      {
        q: "What is the difference between performance marketing strategy and traditional advertising?",
        a: "Performance marketing strategy centers on measurable outcomes and continuous optimization. Traditional advertising often focuses on awareness and impressions without direct attribution to conversions.",
      },
      {
        q: "How quickly can a performance marketing agency produce results?",
        a: "Initial learnings often appear in 2–6 weeks; meaningful scale and stable ROAS typically take 3–6 months depending on spend and market dynamics.",
      },
      {
        q: "Do you offer services for small budgets or startups?",
        a: "Yes. We design lean experimentation plans to validate channels and creative before scaling budgets.",
      },
      {
        q: "How do you measure long-term impact (LTV) from paid campaigns?",
        a: "We use cohort analysis, CRM stitching, and attribution models to connect initial acquisition to lifetime revenue and optimize for LTV, not just first purchase.",
      },
      {
        q: "Can you run region-specific programs like a performance marketing agency in Pune?",
        a: "Absolutely. We tailor audience definitions, creatives, and media mixes for regional markets, including Pune-based campaigns.",
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-[#D3D3D3] border-t border-[#C0C0C0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-[#363636]">
              FAQs (SEO-Optimized)
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-[#C0C0C0] overflow-hidden shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-[#B0C4DE]/10 transition-colors"
                  >
                    <span className="font-bold text-[#363636] text-lg pr-4">
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
                        <p className="text-[#363636]/80 text-base pt-4 border-t border-[#C0C0C0]">
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
    <section className="py-20 sm:py-32 relative overflow-hidden bg-[#363636]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#536186]/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
            Ready to scale with a <br />
            <span className="text-[#D3D3D3]">results-driven partner?</span>
          </h2>
          <p className="text-xl text-[#B0C4DE] mb-12 font-medium leading-relaxed">
            A great performance marketing agency is one that converts ad budgets
            into measurable business results. Through disciplined testing,
            transparent attribution, and creative assets optimized for
            conversion, we make growth measurable and growth scalable. Are you
            ready to create a data-driven growth strategy, from quick wins in
            acquisition to long-term optimization of LTV? A performance
            marketing agency like ours will create a roadmap to the metrics that
            matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#363636] bg-[#D3D3D3] hover:bg-white transform transition hover:scale-105 shadow-xl shadow-[#D3D3D3]/20"
            >
              Book a Free Performance Audit
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-transparent border-2 border-[#536186] hover:bg-[#536186] transform transition"
            >
              Request Proposal
            </a>
            <a
              href="/case-studies"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#D3D3D3] hover:text-white underline underline-offset-4 transform transition"
            >
              See Case Studies
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-[#536186]/50 flex justify-center gap-8 text-[#B0C4DE] text-sm font-semibold">
            <a href="/services" className="hover:text-white transition">
              Services Overview
            </a>
            <a
              href="/services/performance-marketing"
              className="hover:text-white transition"
            >
              Performance Marketing
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  return (
    <div className="font-sans bg-[#D3D3D3] text-[#363636] min-h-screen selection:bg-[#536186] selection:text-white">
      {/* Meta tags representation for SEO requirements */}
      {/* 
        <title>Performance Marketing Agency | Results-First Growth</title>
        <meta name="description" content="Hire a performance marketing agency that drives measurable ROI. Data-led ad campaigns, conversion optimization, and scalable performance marketing strategies." /> 
      */}
      <HeroSection />
      <IntroSection />
      <WhatIsSection />
      <WhyNeedSection />
      <ServicesSection />
      <PlatformsSection />
      <ProcessSection />
      <BenefitsSection />
      <IndustriesAndWhyUs />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default PerformanceMarketing;
