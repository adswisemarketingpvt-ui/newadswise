import React, { useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Search,
  Users,
  TrendingUp,
  Target,
  Globe,
  MonitorSmartphone,
  ChevronRight,
  CheckCircle,
  Plus,
  Minus,
  GraduationCap,
  Award,
  BookOpen,
  LayoutDashboard,
  ShieldCheck,
  Zap,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

// ============================================================================
// ASSETS & CONFIG
// ============================================================================

const IMAGES = {
  hero: "https://i.pinimg.com/736x/24/17/b5/2417b5e6c977d7db2709a591a7e6104c.jpg", // Families and prospective students at a campus open day with branded signage.
  texture: "https://www.transparenttextures.com/patterns/carbon-fibre.png",
  services:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop", // Team designing an education website and course pages on a laptop.
  caseStudy:
    "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop", // Admissions landing page on a smartphone showing course details and enquiry form.
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

const EducationPage = () => {
  // Monochromatic Color Palette:
  // #536186 - Stone Gray (Primary Text / Deep Accent)
  // #D3D3D3 - Fog Gray (Primary Background)
  // #363636 - Charcoal Gray (Headings / Dark Contrast)
  // #C0C0C0 - Silver (Borders / Secondary BG)
  // #B0C4DE - Ash Gray (Highlights / Light Accent)

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => {
    return (
      <header className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#D3D3D3] text-[#363636] pt-20">
        <Helmet>
          <title>Branding for Education — Adswise Marketing Experts</title>
          <meta
            name="description"
            content="Elevate enrollment and trust with Adswise's branding for education — strategy, design & digital growth for schools and institutes. "
          />
          <link
            rel="canonical"
            href="https://adswisemarketing.com/education-branding"
          />
        </Helmet>

        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <ParallaxImage
            src={IMAGES.hero}
            alt="Families and prospective students at a campus open day with branded signage."
            className="w-full h-full"
          />
          {/* Subtle Grid Overlay */}
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
              <GraduationCap size={16} /> Education Marketing Specialists
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-[#363636] capitalize"
          >
            Branding for <br className="hidden md:block" />
            <span className="text-[#536186]">Education.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl text-[#363636]/90 mb-6 font-bold">
              Place your institute in the best light to attract students,
              parents, and partners with a clear and credible brand.
            </h2>
            <p className="text-lg text-[#363636]/80 mb-10 leading-relaxed font-medium">
              At Adswise Marketing, we have expertise in education branding,
              helping educational institutions turn values into brands. Ready to
              grow your educational brand? Get your complimentary branding
              consultation and roadmap.
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
              Start a free branding consult <ChevronRight size={20} />
            </Link>
            <p className="text-sm font-bold text-[#536186] tracking-wide uppercase mt-2">
              We'll audit your messaging and identify quick wins{" "}
              <br className="sm:hidden" /> • No long contracts • Month-to-month
              options • NDA available
            </p>
          </motion.div>
        </div>

        {/* Subtle Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#D3D3D3] to-transparent z-10"></div>
      </header>
    );
  };

  const ObstaclesSection = () => {
    const problems = [
      {
        icon: Search,
        title: "Undeveloped Positioning",
        desc: "Students are not able to understand your differentiation among a sea of competitors.",
      },
      {
        icon: TrendingUp,
        title: "Low Enrollment Rates",
        desc: "Despite having great programs — great programs, poor messaging lead to missed opportunities.",
      },
      {
        icon: ShieldCheck,
        title: "Parent Trust",
        desc: "Parents want to trust the institution. Lacking a credible digital brand creates doubt.",
      },
      {
        icon: Globe,
        title: "Fragmented Digital Presence",
        desc: "Inconsistent tone and language across channels confuse prospective candidates.",
      },
      {
        icon: Target,
        title: "Lacking Measurement",
        desc: "Marketing expenses are spent without any idea of the metrics for student acquisition.",
      },
    ];

    return (
      <section className="py-20 bg-[#D3D3D3] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
                Why Education Brands{" "}
                <span className="text-[#536186]">Stall</span>
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium">
                The same obstacles frequently confront schools, colleges, and
                online education platforms. We are a digital marketing agency
                specializing in working with educational institutes and
                connecting creative storytelling with admissions objectives. We
                assist schools and colleges in moving from ‘who are you?’ to ‘we
                want in.’
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {problems.map((c, idx) => (
              <AnimatedSection
                key={idx}
                delay={idx * 0.1}
                className={`h-full ${idx === 3 ? "lg:col-start-1" : ""} ${idx === 4 ? "lg:col-start-2" : ""}`}
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
                Tailored Services for{" "}
                <span className="text-[#536186]">Education Brands</span>
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium">
                Pick, mix, or scale our modular services to accelerate your
                enrollment process.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Service 1 */}
            <AnimatedSection delay={0.1}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 border border-[#C0C0C0] h-full hover:border-[#536186] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B0C4DE]/30 rounded-full blur-[40px] group-hover:bg-[#B0C4DE]/60 transition-colors"></div>
                <div className="flex items-center gap-4 mb-4 pb-2 relative z-10">
                  <BookOpen className="text-[#536186]" size={32} />
                  <h3 className="text-xl font-bold text-[#363636]">
                    Brand Strategy & Positioning
                  </h3>
                </div>
                <p className="text-[#363636]/80 relative z-10">
                  Segment your audience, map your competition, and craft a
                  positioning statement that connects with students and parents
                  alike.
                </p>
              </div>
            </AnimatedSection>

            {/* Service 2 */}
            <AnimatedSection delay={0.2}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 border border-[#C0C0C0] h-full hover:border-[#536186] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B0C4DE]/30 rounded-full blur-[40px] group-hover:bg-[#B0C4DE]/60 transition-colors"></div>
                <div className="flex items-center gap-4 mb-4 pb-2 relative z-10">
                  <Award className="text-[#536186]" size={32} />
                  <h3 className="text-xl font-bold text-[#363636]">
                    Identity & Visual Design
                  </h3>
                </div>
                <p className="text-[#363636]/80 relative z-10">
                  Design logos, color schemes, typography, and brand guidelines
                  that look great on uniforms, websites, and signage.
                </p>
              </div>
            </AnimatedSection>

            {/* Service 3 */}
            <AnimatedSection delay={0.3}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 border border-[#C0C0C0] h-full hover:border-[#536186] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B0C4DE]/30 rounded-full blur-[40px] group-hover:bg-[#B0C4DE]/60 transition-colors"></div>
                <div className="flex items-center gap-4 mb-4 pb-2 relative z-10">
                  <Zap className="text-[#536186]" size={32} />
                  <h3 className="text-xl font-bold text-[#363636]">
                    Admissions Marketing
                  </h3>
                </div>
                <p className="text-[#363636]/80 relative z-10">
                  Landing pages, lead magnets, paid ads, and event ads that
                  generate qualified enquiries.
                </p>
              </div>
            </AnimatedSection>

            {/* Service 4 */}
            <AnimatedSection delay={0.4}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 border border-[#C0C0C0] h-full hover:border-[#536186] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B0C4DE]/30 rounded-full blur-[40px] group-hover:bg-[#B0C4DE]/60 transition-colors"></div>
                <div className="flex items-center gap-4 mb-4 pb-2 relative z-10">
                  <Users className="text-[#536186]" size={32} />
                  <h3 className="text-xl font-bold text-[#363636]">
                    Content & Communications
                  </h3>
                </div>
                <p className="text-[#363636]/80 relative z-10">
                  Curriculum storytelling, faculty profiles, student success
                  stories, and content targeting parents.
                </p>
              </div>
            </AnimatedSection>

            {/* Service 5 */}
            <AnimatedSection delay={0.5}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 border border-[#C0C0C0] h-full hover:border-[#536186] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B0C4DE]/30 rounded-full blur-[40px] group-hover:bg-[#B0C4DE]/60 transition-colors"></div>
                <div className="flex items-center gap-4 mb-4 pb-2 relative z-10">
                  <MonitorSmartphone className="text-[#536186]" size={32} />
                  <h3 className="text-xl font-bold text-[#363636]">
                    Website & UX for Institutes
                  </h3>
                </div>
                <p className="text-[#363636]/80 relative z-10">
                  SEO-friendly websites and course catalogs, as well as
                  mobile-first application processes.
                </p>
              </div>
            </AnimatedSection>

            {/* Service 6 */}
            <AnimatedSection delay={0.6}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 border border-[#C0C0C0] h-full hover:border-[#536186] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B0C4DE]/30 rounded-full blur-[40px] group-hover:bg-[#B0C4DE]/60 transition-colors"></div>
                <div className="flex items-center gap-4 mb-4 pb-2 relative z-10">
                  <TrendingUp className="text-[#536186]" size={32} />
                  <h3 className="text-xl font-bold text-[#363636]">
                    Analytics & Growth
                  </h3>
                </div>
                <p className="text-[#363636]/80 relative z-10">
                  Funnel optimization, CRM integrations, and monthly reporting
                  tied to admissions KPIs.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Deliverables Sub-Section inserted with Service Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-20 border-t border-[#C0C0C0] pt-16">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[450px]">
                <img
                  src={IMAGES.services}
                  alt="Team designing an education website and course pages on a laptop."
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#536186]/20 mix-blend-multiply"></div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h3 className="text-3xl font-extrabold text-[#363636] mb-6">
                Creative & Content Deliverables We Include
              </h3>
              <ul className="space-y-4">
                {[
                  "Brand guidelines PDF and asset pack",
                  "Admissions landing page templates",
                  "Three campaign creative concepts (social, display, email)",
                  "A/B test plan and measurement dashboard",
                  "30-day post-launch optimization support",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <CheckCircle
                      className="text-[#536186] shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-[#363636]/80 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link
                  to="/services"
                  className="px-6 py-3 rounded-xl bg-[#D3D3D3] text-[#363636] font-bold border border-[#C0C0C0] hover:border-[#536186] hover:bg-white transition-all shadow-sm flex items-center gap-2"
                >
                  <MonitorSmartphone size={16} /> Our Services
                </Link>
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
                We maintain transparency throughout the process to ensure our
                stakeholders are aware of our activities. Why it works: Short
                cycles, Clear milestones, Ongoing feedback from your admissions
                team.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Discover & Define",
                icon: <Search size={40} />,
                desc: "Leadership workshops, surveys with parents/students, and a brand brief with measurable objectives.",
              },
              {
                title: "Design & Deploy",
                icon: <Briefcase size={40} />,
                desc: "Visual brand design, admissions assets, website design, and campaign launches — proven and approved.",
              },
              {
                title: "Measure & Scale",
                icon: <TrendingUp size={40} />,
                desc: "Track our KPIs, optimize our creative assets, and amplify the channels that give us the best student acquisition cost.",
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
                Benefits & Results <br />
                (What You Get)
              </h2>
              <div className="bg-[#363636] rounded-3xl p-8 relative overflow-hidden shadow-2xl h-full">
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                  <GraduationCap size={250} className="text-white" />
                </div>

                <ul className="space-y-6 relative z-10">
                  {[
                    "Stronger brand recall – students recall and recommend your brand.",
                    "Higher qualified inquiries – your campaigns are reaching the right prospects.",
                    "Improved conversion – clearer admissions funnels and messaging.",
                    "Trust & credibility – your brand elements give parents and stakeholders confidence.",
                    "Lower CAC – your marketing spend is going towards converting channels.",
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
                We provide a clear dashboard and a one-page insights report
                delivered monthly, designed specifically for the needs of
                admissions teams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: "Inquiries & Forms", d: "Website Enquiries/Forms" },
                  { t: "Lead Scoring", d: "Lead Quality Score" },
                  {
                    t: "Efficiency Target",
                    d: "Cost Per Lead/Cost Per Enrollee",
                  },
                  { t: "Conversion", d: "Conversion Rate" },
                  {
                    t: "Attendance Metrics",
                    d: "Event Attendance/Open Days RSVPs",
                  },
                  {
                    t: "Search Visibility",
                    d: "Organic Search Visibility for Course Terms",
                  },
                  {
                    t: "Email Engagement",
                    d: "Email Open/Click Rates for Nurtures",
                  },
                ].map((kpi, idx) => (
                  <div
                    key={idx}
                    className="bg-[#B0C4DE]/20 p-4 rounded-xl border border-[#C0C0C0]"
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

          {/* Case Study Image Insert */}
          <div className="mt-20 pt-10 border-t border-[#C0C0C0]">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-extrabold text-[#363636] mb-4">
                    Proven Admission Funnels
                  </h3>
                  <p className="text-[#363636]/80 font-medium mb-6 leading-relaxed">
                    See how we optimize the mobile experience to drive up to 40%
                    more qualified student enquiries with responsive, SEO-ready
                    landing pages.
                  </p>
                  <Link
                    to="/case-studies"
                    className="px-6 py-4 rounded-xl bg-[#536186] text-white font-bold hover:bg-[#363636] transition-all flex w-fit items-center gap-2 shadow-lg hover:shadow-[#536186]/50"
                  >
                    Explore Case Studies <ChevronRight size={18} />
                  </Link>
                </div>
                <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(83,97,134,0.2)]">
                  <img
                    src={IMAGES.caseStudy}
                    alt="Admissions landing page on a smartphone showing course details and enquiry form."
                    className="w-full h-auto object-cover"
                  />
                </div>
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
        q: "How long until we see better enquiries?",
        a: "Small changes (landing pages, messaging) can show impact in 4–6 weeks; full repositioning typically takes 3–6 months.",
      },
      {
        q: "Do you work with K-12 and higher education?",
        a: "Yes — we tailor strategy for schools, colleges, universities, and private learning platforms.",
      },
      {
        q: "Can you integrate with our CRM?",
        a: "Absolutely. We connect forms, lead scoring, and automation to your CRM for seamless admissions workflows.",
      },
      {
        q: "What budget do we need for paid campaigns?",
        a: "Budgets vary by region and goals; we recommend a pilot budget to validate channels, then scale based on CPL targets.",
      },
      {
        q: "How do you protect student data?",
        a: "We follow best practices: secure forms, encrypted storage, and can run a data-privacy compliance review for student records (FERPA/GDPR-ready approaches).",
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
            Ready to attract more students? <br className="hidden md:block" />
            <span className="text-[#B0C4DE]">
              Let’s map your brand and admission funnel.
            </span>
          </h2>
          <p className="text-xl text-[#D3D3D3] mb-12 font-medium leading-relaxed max-w-3xl mx-auto">
            Book a Free Consult today and start filling your admissions
            pipelines.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-[#363636] bg-[#D3D3D3] hover:bg-white transform transition hover:scale-105 shadow-xl shadow-[#363636]/20 flex items-center justify-center gap-2"
            >
              Book a Free Consult <ChevronRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-5 rounded-xl font-bold text-[#D3D3D3] hover:text-white underline underline-offset-4 transform transition text-center"
            >
              Contact Admissions Growth
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  return (
    <div className="font-sans bg-[#D3D3D3] text-[#536186] min-h-screen selection:bg-[#536186] selection:text-[#363636]">
      <HeroSection />
      <ObstaclesSection />
      <ServicesSection />
      <HowWeWorkSection />
      <SplitFeaturesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default EducationPage;
