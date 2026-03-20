import React, { useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Activity,
  Heart,
  ShieldCheck,
  UserPlus,
  Stethoscope,
  Star,
  Search,
  Smartphone,
  Video,
  Mail,
  Calendar,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Lock,
  MapPin,
  FileText,
  Database,
  Plus,
  Minus,
  MessageSquare,
  Users,
  Target,
  BarChart,
  Monitor,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";

/*
  SEO METADATA CONTENT (For specific configuration in index.html, next/head or helmet):
  Meta Title (≤60 chars): Healthcare Digital Marketing Agency - Adswise Marketing
  Meta Description (150–160 chars): Adswise is a healthcare digital marketing agency that drives patient growth, appointments, and trust. Book a free audit and start converting patients today.
  Slug: healthcare-marketing
*/

// ============================================================================
// ASSETS & CONFIG
// ============================================================================

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", // Clean Medical BG
  services:
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop", // Modern Hospital/Tech
  caseStudy:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop", // Doctor with tablet
  texture: "https://www.transparenttextures.com/patterns/cubes.png", // Subtle pattern
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

const HealthcarePage = () => {
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
            alt="Clinician consulting a patient in a clinic with an appointment tablet."
            className="w-full h-full grayscale-[50%]"
          />
          {/* Decorative Grid Overlay to fit Health Theme */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
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
              <HeartPulse size={16} className="animate-pulse" /> Healthcare
              First Initiatives
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-[#363636] capitalize font-serif"
          >
            Healthcare Digital <br className="hidden md:block" />
            <span className="text-[#536186]">Marketing Agency.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl text-[#363636]/90 mb-6 font-bold">
              Enhance trustworthiness and safeguard your brand.
            </h2>
            <p className="text-lg text-[#363636]/80 mb-10 leading-relaxed font-medium bg-white/40 p-6 rounded-2xl backdrop-blur-sm border border-white/50">
              Adswise Marketing has a team of professionals who focus only on
              developing legally compliant and measurable marketing campaigns
              specifically for hospitals, clinics or other types of healthcare
              providers. The goal of our efforts are to acquire new patients,
              find physicians to refer patients, and improve our client's
              overall image in the marketplace, which means less spending on
              distraction marketing and more on building quality connections
              between patients and providers.
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
              Book a free healthcare marketing audit <ArrowRight size={20} />
            </Link>
            <p className="text-sm font-bold text-[#536186] tracking-wide uppercase mt-2">
              No long contracts • Month-to-month options
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
        icon: ShieldCheck,
        title: "Compliance Risks",
        desc: "If a doctor advertises using ads that do not comply with laws and/or provide clinically accurate data, there is the potential for being restricted or even banned.",
      },
      {
        icon: MapPin,
        title: "Poor Local UI",
        desc: "Local search engines, physician directories, and appointment scheduling systems are frequently poorly optimized.",
      },
      {
        icon: Star,
        title: "Fragile Reputations",
        desc: "Issues with reputation (i.e. a few bad reviews) can wipe out months worth of marketing efforts.",
      },
      {
        icon: Target,
        title: "Generic Messaging",
        desc: "Generic messaging typically does not result in converting patients who are searching for particular procedures.",
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
                  Why healthcare marketing often falls short
                </span>
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium bg-[#B0C4DE]/20 p-6 rounded-2xl border border-[#C0C0C0]">
                Healthcare as an industry is different. Patients’ decisions are
                often driven by personal choice, urgency, and trust-based
                relationship with the provider(s). Overall, poor marketing
                results in low appointment rates, wasted advertising, and lost
                revenue digital channels aligned with clinically credible
                content.
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
                <span className="text-[#536186]">Hospitals & Providers</span>
              </h2>
              <p className="text-[#363636]/80 text-lg font-medium">
                Our programs are tailored to the complexity of medicine, the
                intricacy of the law, and the psychology of the patient. Our
                services are combined into one roadmap for clinical teams, front
                desk staff, and hospital leadership.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <AnimatedSection delay={0.1}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 lg:p-10 border border-[#C0C0C0] h-full hover:border-[#536186] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group">
                <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] group-hover:border-[#536186] pb-4 transition-colors">
                  <Search className="text-[#536186]" size={36} />
                  <h3 className="text-2xl font-bold text-[#363636] font-serif">
                    Search & Local SEO
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      SEO for clinics/departments on condition and
                      treatment-related searches.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Google Business Profile optimization, direction clicks,
                      and appointment link.
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
                    Paid Media & Ads
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Conversion-oriented search ads for appointment bookings
                      and teleconsults.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Remarketing for users who viewed symptoms, services, or
                      doctors.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Service 3 */}
            <AnimatedSection delay={0.3}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 lg:p-10 border border-[#C0C0C0] h-full hover:border-[#536186] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group">
                <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] group-hover:border-[#536186] pb-4 transition-colors">
                  <Video className="text-[#536186]" size={36} />
                  <h3 className="text-2xl font-bold text-[#363636] font-serif">
                    Advertising & Creative
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Compliant ad copy, condition-specific landing pages, and
                      educational content.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Short-form explainer videos, intro videos for doctors, and
                      trusted formats for patient testimonials.
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Service 4 */}
            <AnimatedSection delay={0.4}>
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 lg:p-10 border border-[#C0C0C0] h-full hover:border-[#536186] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group">
                <div className="flex items-center gap-4 mb-6 border-b border-[#C0C0C0] group-hover:border-[#536186] pb-4 transition-colors">
                  <Smartphone className="text-[#536186]" size={36} />
                  <h3 className="text-2xl font-bold text-[#363636] font-serif">
                    Patient Conversion
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Mobile-centric appointment paths, telehealth paths, and
                      reminders.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-[#363636]/80">
                    <CheckCircle
                      className="text-[#B0C4DE] shrink-0 mt-1"
                      size={20}
                    />
                    <span>
                      Live Chat/Triage setup for capturing critical leads in a
                      responsible manner.
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

                <div className="flex-1 z-10 w-full">
                  <div className="flex items-center gap-4 mb-6 border-b border-[#536186] pb-4">
                    <Star className="text-[#B0C4DE]" size={32} />
                    <h3 className="text-2xl font-bold text-white font-serif">
                      Reputation & PR
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-[#D3D3D3]">
                      <CheckCircle
                        className="text-[#B0C4DE] shrink-0 mt-1"
                        size={20}
                      />
                      <span>
                        Review generation strategies and crisis response
                        playbooks.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D3D3D3]">
                      <CheckCircle
                        className="text-[#B0C4DE] shrink-0 mt-1"
                        size={20}
                      />
                      <span>
                        Thought leadership content for building trust among
                        specialists and encouraging referrals.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 z-10 w-full">
                  <div className="flex items-center gap-4 mb-6 border-b border-[#536186] pb-4">
                    <Lock className="text-[#B0C4DE]" size={32} />
                    <h3 className="text-2xl font-bold text-white font-serif">
                      Analytics & Compliance
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-[#D3D3D3]">
                      <CheckCircle
                        className="text-[#B0C4DE] shrink-0 mt-1"
                        size={20}
                      />
                      <span>
                        HIPAA-compliant (where necessary) tracking, consent, and
                        monthly dashboards.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[#D3D3D3]">
                      <CheckCircle
                        className="text-[#B0C4DE] shrink-0 mt-1"
                        size={20}
                      />
                      <span>
                        A/B messaging tests, subject to clinical review.
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

  const HowWeWorkSectionSafe = () => {
    return (
      <section className="py-24 bg-[#D3D3D3] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#363636] mb-6 font-serif">
                How We Work
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Discover & Audit",
                icon: <Search size={32} />,
                desc: "We audit your site, referral paths, ad accounts, and clinical messages. We identify compliance touch points and quick wins.",
              },
              {
                title: "Build & Launch",
                icon: <Lock size={32} />,
                desc: "We build compliant landing pages, ad sets, and appointment paths. We provide staff training on lead management.",
              },
              {
                title: "Measure & Optimize",
                icon: <TrendingUp size={32} />,
                desc: "Weekly optimization cycles, creative updates, and monthly clinical review sessions to ensure accuracy and effectiveness.",
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
                Benefits & Measurable Results
              </h2>
              <div className="bg-[#536186] rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                  <Stethoscope size={250} className="text-white" />
                </div>

                <ul className="space-y-6 relative z-10">
                  {[
                    "More qualified appointment bookings will occur due to better understanding and searching for services locally.",
                    "Better experience for patients - Faster mobile scheduling along simple, clear timelines for their visit.",
                    "More reference opportunities with specialized content and profiles of the clinicians who provide those services.",
                    "Reduced excess spend on ads by using precise targeting of the audience, messaging that complies to regulations.",
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
                KPIs aligned with revenue/capacity planning, scale marketing
                programs in a responsible manner to fit your service capacity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Patient Rate",
                    d: "Number of patients who have new or return to appointments",
                  },
                  {
                    t: "Cost Analytics",
                    d: "Cost per Appointment & Cost per New Patient",
                  },
                  {
                    t: "Show Rates",
                    d: "Appointment Show Rates & No-Show Reduction",
                  },
                  {
                    t: "SEO Metrics",
                    d: "Organic Rankings of Conditions and Treatments",
                  },
                  {
                    t: "Google Profile",
                    d: "Calls, Directions, Bookings metrics",
                  },
                  {
                    t: "Acquisition",
                    d: "Patient tracking by Source (Search, Social, Referral)",
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
        q: "How fast will we see appointments from ads?",
        a: "Paid search and local campaigns can generate booked appointments within 7–21 days; organic improvements take 2–4 months.",
      },
      {
        q: "Do you handle HIPAA and medical data privacy?",
        a: "Yes. We follow best practices for patient data, work with your legal team, and avoid sending protected health information in ad tracking.",
      },
      {
        q: "Can you market multiple specialties at once?",
        a: "Absolutely. We run parallel campaigns for specialties and manage budget allocation based on capacity and goals.",
      },
      {
        q: "Will you create clinical content like condition guides?",
        a: "Yes — with clinician review. We produce patient-friendly guides, FAQs, and explainer videos that increase trust.",
      },
      {
        q: "Are there long-term contracts?",
        a: "No long contracts — month-to-month options available.",
      },
    ];

    return (
      <section className="py-20 sm:py-24 bg-[#D3D3D3]/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-4 font-serif">
                FAQs — Concise Answers
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
            <Stethoscope className="text-white" size={32} />
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight font-serif">
            Ready to increase appointments, <br className="hidden md:block" />
            <span className="text-[#C0C0C0] italic">
              reduce wasted spend, & protect your reputation?
            </span>
          </h2>
          <p className="text-xl text-[#D3D3D3] mb-12 font-medium leading-relaxed max-w-2xl mx-auto">
            Book a free healthcare marketing audit and receive a tailored 90-day
            growth plan.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-xl font-bold text-[#363636] bg-[#D3D3D3] hover:bg-white transform transition hover:scale-105 shadow-xl shadow-black/30 flex items-center justify-center gap-2"
            >
              Book my free audit <ArrowRight size={20} />
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
            <span>Clinical review included</span>
          </div>

          <div className="mt-10">
            <Link
              to="/case-studies-healthcare"
              className="text-[#D3D3D3] hover:text-white underline underline-offset-4 transition text-sm font-bold uppercase tracking-wider"
            >
              Healthcare Case Studies
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

export default HealthcarePage;
