import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  LineChart,
  TrendingUp,
  Users,
  Presentation,
  MonitorPlay,
  Share2,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Megaphone,
  MapPin,
  Search,
  Globe,
  Building2,
  Workflow,
  BarChart3,
  BadgeCheck,
} from "lucide-react";
import SEO from "../../components/SEO";

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function MediaBuyingPlanning() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const services = [
    {
      title: "Strategy Development",
      icon: <MapPin className="text-[#536186] w-8 h-8 mb-4" />,
      desc: "We start with research and strategy development:",
      points: [
        "Audience profiling and mapping",
        "Competitive media audit and gap analysis",
        "Channel mix strategy (awareness, consideration, conversion)",
        "Budget allocation model with KPI tie-in (CPA, LTV, ROAS)",
      ],
    },
    {
      title: "Campaign Management",
      icon: <Workflow className="text-[#536186] w-8 h-8 mb-4" />,
      desc: "We handle campaign management from start to finish, including:",
      points: [
        "Setup, trafficking, and ad tagging",
        "Bid strategy and pacing for programmatic and platform buys",
        "A/B testing of creatives and landing pages",
        "Daily monitoring and weekly optimization",
      ],
    },
    {
      title: "Content & Creative Production",
      icon: <Presentation className="text-[#536186] w-8 h-8 mb-4" />,
      desc: "For effective buys, creatives must be effective too, including:",
      points: [
        "Conversion-first ad formats such as video, carousel, and responsive display",
        "Message personalization by audience segment and funnel stage",
        "Creative refresh to avoid ad fatigue",
      ],
    },
    {
      title: "Analytics & Reporting",
      icon: <BarChart3 className="text-[#536186] w-8 h-8 mb-4" />,
      desc: "Clear and action-oriented reporting:",
      points: [
        "Unified dashboards on reach, frequency, CPA, and ROAS",
        "Custom attribution modeling and incrementality tests",
        "Insights and optimization playbooks",
      ],
    },
    {
      title: "Paid Advertising",
      icon: <Megaphone className="text-[#536186] w-8 h-8 mb-4" />,
      desc: "We advertise on all major channels and ad formats:",
      points: [
        "Programmatic display and native advertising",
        "Social media advertising: audience and interest-based targeting",
        "Intent-based conversions through search and shopping campaigns",
        "Connected TV and video advertising",
      ],
    },
  ];

  const platforms = [
    { name: "Instagram (ads, reels, stories)", icon: <Share2 size={24} /> },
    {
      name: "Facebook / Meta Ads (Audience Network)",
      icon: <Users size={24} />,
    },
    { name: "LinkedIn (B2B targeting)", icon: <Building2 size={24} /> },
    {
      name: "Twitter / X (real-time engagement)",
      icon: <Megaphone size={24} />,
    },
    {
      name: "YouTube (in-stream and discovery)",
      icon: <MonitorPlay size={24} />,
    },
    { name: "Google Display & DV360", icon: <Globe size={24} /> },
    { name: "Connected TV and OTT platforms", icon: <MonitorPlay size={24} /> },
  ];

  const process = [
    {
      num: "01",
      title: "Discovery & Goals",
      desc: "Stakeholder workshop and KPI alignment.",
    },
    {
      num: "02",
      title: "Research & Planning",
      desc: "Audience segmentation, media mix modeling, and forecasting.",
    },
    {
      num: "03",
      title: "Buying & Execution",
      desc: "Inventory negotiation, set-up, and launch.",
    },
    {
      num: "04",
      title: "Optimize & Scale",
      desc: "Continuous testing and optimization, budget rebalance, and creative refresh.",
    },
    {
      num: "05",
      title: "Measure & Report",
      desc: "Attribution analysis and learnings.",
    },
  ];

  const industries = [
    "Ecommerce and Retail",
    "Healthcare and Pharma (compliant media campaigns)",
    "Education and EdTech",
    "SaaS and Technology",
    "Real Estate and Automobile",
    "FMCG",
  ];

  const faqs = [
    {
      q: "What is the difference between media planning and media buying?",
      a: "Media planning defines the strategy—audiences, channels, and budget. Media buying executes that plan—purchasing inventory, negotiating rates, and optimizing placements.",
    },
    {
      q: "How does a media planning and buying agency improve ROI?",
      a: "An agency uses data, negotiation power, and optimization processes to reduce wasted impressions, target the most valuable audiences, and scale what's working—improving ROI.",
    },
    {
      q: "Which platforms are best for media planning and buying?",
      a: "Best platforms depend on goals. Social channels (Meta, Instagram, LinkedIn) excel for targeting, YouTube and CTV for reach, and programmatic for scale and efficiency.",
    },
    {
      q: "How do you measure success for media planning and buying campaigns?",
      a: "We measure using KPIs like CPA, ROAS, conversions, reach, frequency, and incrementality studies—aligned to business objectives.",
    },
    {
      q: "Can you manage cross-channel campaigns and provide a single report?",
      a: "Yes. We consolidate cross-channel performance into unified dashboards so you can view holistic campaign impact and attribution.",
    },
  ];

  return (
    <div className="bg-[#D3D3D3]/10 text-[#363636] font-sans selection:bg-[#536186] selection:text-white pb-20">
      <SEO
        title="Media Planning and Buying Services – Adswise Marketing"
        description="Drive ROI with expert media planning and buying. Strategic ad placement, data-led targeting, and transparent reporting to scale your brand."
      />

      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-4 md:px-12 bg-[#536186] mt-20 md:mt-0">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,_#B0C4DE_0%,_transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10 py-20 mt-12 md:mt-24">
          <span className="inline-block text-[#B0C4DE] font-bold tracking-[0.15em] mb-6 text-xs md:text-sm uppercase px-4 py-1 border border-[#B0C4DE]/30 rounded-full">
            Maximize Your Advertising Budget
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 leading-[1.1] text-white">
            Media Planning and Buying | <br className="hidden md:block" />
            <span className="text-[#B0C4DE]">Adswise Marketing</span>
          </h1>
          <p className="text-lg md:text-xl text-[#E5E5E5] font-light max-w-4xl mx-auto leading-relaxed opacity-90 mb-12">
            In today’s highly competitive advertising world, effective media
            planning and buying is key to turning budgets into business growth.
            Businesses that rely solely on intuition to manage their advertising
            miss out on potential revenue. Our data-driven approach to media
            planning and buying helps clients maximize the effectiveness of
            their advertising budgets through audience insights and creative
            executions. Whether it’s brand awareness, leads, or direct sales,
            our team of experts helps clients create and buy media that drives
            business impact and proves its effectiveness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#363636] hover:bg-[#B0C4DE] hover:text-[#363636] px-8 py-4 rounded-full font-bold transition-all shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
            >
              Contact Us — Get a Free Media Audit <ChevronRight size={18} />
            </Link>
            <Link
              to="/case-studies/media-success"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#536186] px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              Request Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IS IT & WHY YOU NEED IT */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black text-[#536186] mb-6">
              What is media planning and buying?
            </h2>
            <p className="text-lg text-[#363636] leading-relaxed mb-6">
              Media planning and buying is the strategic process of choosing the
              most suitable media to reach your target audience at the right
              time, and then buying them at the best possible rates to execute
              the campaign. A good media planning process helps to establish
              clear objectives, audience segments, key performance indicator
              targets, and budget allocation, while buying is the tactical
              process of buying media, including inventory, costs, and
              optimization of placements to execute the campaign.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-[#536186] font-medium">
                <CheckCircle2 className="shrink-0" /> Accurate audience
                targeting and control
              </li>
              <li className="flex gap-3 text-[#536186] font-medium">
                <CheckCircle2 className="shrink-0" /> Cost-effective buying
                through negotiation and optimization
              </li>
              <li className="flex gap-3 text-[#536186] font-medium">
                <CheckCircle2 className="shrink-0" /> Reaching audiences across
                multiple platforms
              </li>
              <li className="flex gap-3 text-[#536186] font-medium">
                <CheckCircle2 className="shrink-0" /> Improving ROI through
                optimization
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="bg-[#F8F9FA] p-8 md:p-12 rounded-[2rem] border border-[#D3D3D3] shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-black text-[#363636] mb-6">
              Why your business needs media planning and buying
            </h2>
            <p className="text-[#536186] mb-6 font-medium">
              If you don't have professional media planning and buying, your
              campaigns are unlikely to perform well because of a poor channel
              mix, impressions, and a lack of creative optimization. The
              benefits of a professional approach are:
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <BadgeCheck className="text-[#536186] shrink-0" />{" "}
                <span>
                  Guaranteeing that your budget is reaching high-value
                  audiences, not impressions.
                </span>
              </li>
              <li className="flex gap-3">
                <BadgeCheck className="text-[#536186] shrink-0" />{" "}
                <span>
                  Utilizing historical data and real-time data to effectively
                  place your spend.
                </span>
              </li>
              <li className="flex gap-3">
                <BadgeCheck className="text-[#536186] shrink-0" />{" "}
                <span>
                  Eliminating wasted ad spend by using intelligent bidding
                  strategies.
                </span>
              </li>
              <li className="flex gap-3">
                <BadgeCheck className="text-[#536186] shrink-0" />{" "}
                <span>
                  Ensuring measurement consistency to easily scale up winners.
                </span>
              </li>
            </ul>
            <p className="font-bold text-[#363636]">
              If you are serious about growing your business, then media
              strategy and efficient buying are a must-have.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-20 bg-[#D3D3D3]/30 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-black text-[#536186] mb-4">
                Our Media Planning and Buying Services
              </h2>
              <p className="text-lg text-[#363636] max-w-3xl mx-auto">
                We combine experience, analysis, and negotiation skills to offer
                end-to-end media solutions.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <AnimatedSection
                key={idx}
                delay={idx * 0.1}
                className="bg-white p-8 rounded-2xl shadow-md border hover:border-[#B0C4DE] hover:shadow-xl transition-all h-full group"
              >
                <div className="group-hover:scale-110 transition-transform origin-left">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#363636] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#536186] mb-4 text-sm font-medium">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-[#363636]">
                      <span className="text-[#B0C4DE] font-bold">•</span>{" "}
                      {point}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-20 px-6 bg-[#363636] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Platforms We Work With
            </h2>
            <p className="text-[#D3D3D3] mb-12 text-lg">
              We are platform-agnostic and results-driven. For example:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {platforms.map((platform, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-[#536186] px-6 py-4 rounded-full hover:bg-[#B0C4DE] hover:text-[#363636] transition-colors font-semibold"
                >
                  {platform.icon}
                  <span>{platform.name}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black text-[#536186] text-center mb-6">
              Our Process
            </h2>
            <p className="text-center text-[#363636] text-lg mb-16">
              A well-defined and replicable process is key to delivering
              consistent and expected outcomes.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="relative">
                <div className="text-6xl font-black text-[#B0C4DE]/30 mb-2">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-[#536186] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#363636] text-sm">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS & INDUSTRIES GRID */}
      <section className="py-20 bg-[#F8F9FA] px-6 border-t border-[#D3D3D3]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="text-3xl font-black text-[#363636] mb-8">
              Benefits of Choosing Our Media Planning and Buying Agency
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-[#D3D3D3] shadow-sm">
                <span className="font-bold text-[#536186]">
                  Expert negotiation
                </span>{" "}
                – we get you a better rate and a premium position.
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#D3D3D3] shadow-sm">
                <span className="font-bold text-[#536186]">
                  Data-driven decisions
                </span>{" "}
                – real-time signals mean smarter bidding.
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#D3D3D3] shadow-sm">
                <span className="font-bold text-[#536186]">Scalability</span> –
                scale up your spend on high-performing channels.
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#D3D3D3] shadow-sm">
                <span className="font-bold text-[#536186]">Transparency</span> –
                no hidden fees.
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#D3D3D3] shadow-sm">
                <span className="font-bold text-[#536186]">
                  Compliance & safety
                </span>{" "}
                – brand-safe placements and ad-fraud protection.
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#D3D3D3] shadow-sm">
                <span className="font-bold text-[#536186]">Measurable ROI</span>{" "}
                – focus on the metrics that matter – revenue, CPA, ROAS.
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-black text-[#363636] mb-8">
              Industries We Serve
            </h2>
            <p className="text-[#536186] mb-6 font-medium">
              We have successfully executed media strategies in various
              verticals:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((ind, idx) => (
                <div
                  key={idx}
                  className="bg-[#B0C4DE]/30 text-[#363636] px-4 py-3 rounded-lg font-bold flex items-center border border-[#B0C4DE]"
                >
                  {ind}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#363636] italic">
              Each of these has unique audience strategies and media mixes based
              on their buying cycles and requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#536186] text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black mb-8">
              Why Choose Adswise Marketing
            </h2>
            <p className="text-xl text-[#B0C4DE] mb-12">
              Our work is based on experience, authority, and trust:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-[#363636]/50 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="text-[#B0C4DE] shrink-0 mt-1" />
                <p className="font-medium">
                  Senior Strategists with years of media buying experience.
                </p>
              </div>
              <div className="bg-[#363636]/50 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="text-[#B0C4DE] shrink-0 mt-1" />
                <p className="font-medium">
                  Proven case studies with better ROAS and CPA reductions.
                </p>
              </div>
              <div className="bg-[#363636]/50 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="text-[#B0C4DE] shrink-0 mt-1" />
                <p className="font-medium">
                  Certified partners with top ad platforms.
                </p>
              </div>
              <div className="bg-[#363636]/50 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <CheckCircle2 className="text-[#B0C4DE] shrink-0 mt-1" />
                <p className="font-medium">
                  Transparent billing and a performance-first mindset.
                </p>
              </div>
              <div className="bg-[#363636]/50 p-6 rounded-2xl border border-white/10 flex items-start gap-4 sm:col-span-2">
                <CheckCircle2 className="text-[#B0C4DE] shrink-0 mt-1" />
                <p className="font-medium">
                  A collaborative team that becomes an extension of your
                  marketing team.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-[#536186]">
              FAQs
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-[#F8F9FA] rounded-xl border border-[#D3D3D3] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-[#D3D3D3]/50 transition"
                  >
                    <span className="font-bold text-[#363636] pr-4">
                      {faq.q}
                    </span>
                    {openFAQ === index ? (
                      <ChevronDown
                        size={20}
                        className="text-[#536186] rotate-180 transition-transform"
                      />
                    ) : (
                      <ChevronDown
                        size={20}
                        className="text-[#536186] transition-transform"
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
                        <p className="text-[#536186]">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION & CTA */}
      <section className="py-20 bg-[#363636] px-6 text-center text-white rounded-t-[3rem] shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              Ready to convert ad spend into{" "}
              <span className="text-[#B0C4DE]">predictable growth?</span>
            </h2>
            <p className="text-lg md:text-xl text-[#F8F9FA] mb-12 opacity-90 leading-relaxed font-light">
              If you want measurable growth, our media planning and buying
              experts combine strategy, buying power, and relentless
              optimization to turn ad spend into revenue. Partner with a media
              planning and buying agency that prioritizes transparency,
              performance, and long-term value.
            </p>

            <div className="bg-[#536186] p-8 rounded-3xl text-left border border-white/10 mb-12 mx-auto max-w-2xl transform hover:scale-[1.02] transition-transform">
              <h3 className="font-bold text-2xl text-white mb-6">
                Quick Win Checklist{" "}
                <span className="text-[#B0C4DE] text-sm font-normal block mt-1">
                  (for businesses evaluating a media partner)
                </span>
              </h3>
              <ul className="space-y-3 font-medium text-[#F8F9FA] mb-8">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#B0C4DE] shrink-0" /> Are
                  objectives tied to revenue or leads?
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#B0C4DE] shrink-0" /> Is
                  audience data centralized and accessible?
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#B0C4DE] shrink-0" /> Do you
                  have creative assets optimized for platforms?
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#B0C4DE] shrink-0" /> Is there
                  an agreed attribution model?
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-[#B0C4DE] shrink-0" /> Can the
                  agency provide a 30/60/90-day optimization roadmap?
                </li>
              </ul>
              <div className="pt-6 border-t border-white/20 text-center">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-block bg-white text-[#536186] hover:bg-[#B0C4DE] hover:text-[#363636] px-8 py-4 rounded-full font-bold transition-all shadow-xl"
                >
                  Book a free 30-min strategy call
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <div className="text-left bg-white/5 p-4 rounded-xl border border-white/10 w-full sm:w-auto">
                <p className="text-[#B0C4DE] text-xs font-bold uppercase tracking-wider mb-1">
                  Call Us Directly
                </p>
                <a href="tel:+919730266648" className="text-xl font-bold">
                  +91-9730266648
                </a>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm font-bold text-[#B0C4DE]">
              <Link
                to="/services"
                className="hover:text-white transition-colors underline decoration-white/30"
              >
                Paid Media Services
              </Link>
              <Link
                to="/case-studies"
                className="hover:text-white transition-colors underline decoration-white/30"
              >
                Media Success Cases
              </Link>
              <Link
                to="/blog/media-attribution"
                className="hover:text-white transition-colors underline decoration-white/30"
              >
                Measurement & Attribution Blog
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
