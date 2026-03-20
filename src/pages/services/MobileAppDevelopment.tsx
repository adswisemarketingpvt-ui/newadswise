import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Code,
  Server,
  Layers,
  Shield,
  Activity,
  CheckCircle,
  Plus,
  Minus,
  Target,
  Users,
  Briefcase,
  MonitorPlay,
  Globe,
  Settings,
  Rocket,
  Search,
  PenTool,
  BarChart,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/*
  SEO METADATA CONTENT (For specific configuration in index.html or Head tags):
  Meta Title (≤60 chars): Mobile App Development Company | Expert App Builders
  Meta Description (150–160 chars): Hire a mobile app development company that delivers secure, scalable Android & iOS apps. Product-led development, rapid MVPs, and long-term maintenance.
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

const MobileAppDevelopment = () => {
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
            {/* Badge for extra "Agency" feel */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-[#536186]/10 border border-[#536186]/20 text-[#536186] rounded-full"
            >
              Expert App Builders
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 mt-4 leading-tight text-[#363636]">
              Mobile App Development Company <br />
              <span className="text-[#536186]">Adswise Marketing</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#363636]/80 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              If you’re considering a mobile app development company to help you
              build a product that people will love and will help your business
              grow, then you need a company that has the best of both worlds –
              product expertise and engineering know-how. We have teams of
              product managers, designers, and engineers who design and build
              native and cross-platform apps that solve real problems, provide
              fast performance, and scale with your growth plans.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-white bg-[#536186] shadow-lg shadow-[#536186]/30 transform transition hover:scale-105 hover:bg-[#363636] active:scale-95 flex items-center justify-center gap-2 relative z-50 hover:cursor-pointer pointer-events-auto"
              >
                Get a Free App Roadmap <ChevronRight size={18} />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-10 py-4 border-2 border-[#536186] rounded-lg font-semibold text-[#536186] hover:bg-[#536186] hover:text-[#D3D3D3] transition active:scale-95 relative z-50 hover:cursor-pointer pointer-events-auto"
              >
                Services Overview
              </Link>
            </div>

            <p className="mt-8 text-sm text-[#536186] font-semibold">
              Whether you’re looking at mobile app development companies
              worldwide or a reliable mobile development company locally, we are
              here to help.
            </p>
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
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-[#363636]">
              Introduction to{" "}
              <span className="text-[#536186]">App Development</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#363636]/70 leading-relaxed font-medium mb-6">
              A successful mobile application is more than just code; it’s a
              valuable product that people use every day. Working with a
              reliable mobile application development company saves time to
              market, eliminates the need for expensive rewrites, and maximizes
              the opportunity to acquire customers with your mobile application.
            </p>
            <p className="text-lg text-[#363636]/70 leading-relaxed font-medium bg-[#B0C4DE]/10 p-6 rounded-2xl border border-[#B0C4DE]/30">
              We start with the product, with a focus on product clarity,
              including user research, prioritized product roadmaps, and clear
              goals. Next, we add the engineering rigor with a focus on modular
              development, automated testing, and secure infrastructure. Whether
              it’s an MVP or an enterprise-level application, our mobile
              application development company supports Android, iOS, or
              cross-platform development. If you’re looking for a dedicated
              mobile application development company in Pune or considering
              mobile application development companies around the world, our
              focus is on repeatable processes with clear milestones and
              post-launch optimization to ensure that your investment continues
              to produce returns.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  const WhatIsAppDevSection = () => (
    <section className="py-16 sm:py-20 bg-[#D3D3D3] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B0C4DE] rounded-full blur-[100px] opacity-40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              What is App Development? <br />
              <span className="text-xl sm:text-2xl text-[#536186] font-semibold mt-2 block">
                — A mobile app development company perspective
              </span>
            </h2>
            <p className="text-lg text-[#363636]/80 mb-8 font-medium">
              App development is the entire process of developing an app for
              mobile devices, from ideation to launch. A contemporary mobile app
              development company includes:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Product discovery and validation.",
                "UX/UI design and prototyping.",
                "Native iOS/Android app development, or cross-platform app development.",
                "Backend architecture, APIs, and integrations.",
                "Quality assurance, security, and app store release.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#536186] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#363636]/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-[#363636] font-bold border-l-4 border-[#536186] pl-4">
              Good app development involves the ability to understand users and
              make technical decisions that ensure the app works well.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-[#363636] p-8 md:p-10 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-6 -right-6 bg-[#B0C4DE] w-24 h-24 rounded-full blur-[30px] opacity-20"></div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Your Business Needs a Mobile App
              </h3>
              <p className="text-[#D3D3D3] mb-6">
                With mobile apps, you'll be able to establish personal and
                direct relationships with your audience. This is because mobile
                apps allow you to:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Send targeted and timely messages using push notifications.",
                  "Provide better checkout and booking experiences compared to mobile websites.",
                  "Gather behavioral data for better product decisions.",
                  "Provide offline experiences and device-specific features.",
                  "Develop brand loyalty using frictionless and repetitive experiences.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Target className="w-5 h-5 text-[#B0C4DE] flex-shrink-0 mt-0.5" />
                    <span className="text-[#D3D3D3]/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#536186] rounded-xl p-5 border border-[#B0C4DE]/20">
                <p className="text-white font-medium text-sm leading-relaxed">
                  When you choose to develop your mobile app with the aid of a
                  professional mobile app development company, you'll be assured
                  of data security and handling, efficient network usage, and
                  maintainability of the app.
                </p>
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
        icon: <Search size={32} className="text-white" />,
        title: "Product Strategy & Discovery",
        points: [
          "Workshops with stakeholders, user interviews, etc.",
          "Competitive analysis, technical feasibility, etc.",
          "Prioritization of features, definition of MVP, etc.",
          "Roadmap with measurable success criteria, etc.",
        ],
      },
      {
        icon: <PenTool size={32} className="text-white" />,
        title: "UX/UI Design & Prototyping",
        points: [
          "User journeys, wireframes, and interactive prototypes.",
          "Accessibility checks and usability testing.",
          "Visual design systems and animation patterns.",
          "Prototype validation with real users.",
        ],
      },
      {
        icon: <Smartphone size={32} className="text-white" />,
        title: "Native & Cross-Platform Engineering",
        points: [
          "iOS: Swift-based apps (Human Interface Guidelines).",
          "Android: Kotlin-based builds for high performance.",
          "Cross-platform: Flutter or React Native for native-like feel.",
          "Offline-first architecture, background sync, caching.",
        ],
      },
      {
        icon: <Server size={32} className="text-white" />,
        title: "Backend, APIs & Integrations",
        points: [
          "Scalable backends on AWS, Google Cloud, and Azure.",
          "Secure APIs, real-time messaging, and payments.",
          "Third-party integrations: analytics, CRM, maps, identity.",
        ],
      },
      {
        icon: <Shield size={32} className="text-white" />,
        title: "QA, Security, and Performance",
        points: [
          "Automated test suites, device labs, performance profiling.",
          "Security best practices: encryption, secure authentication.",
          "Crash monitoring, error tracking, incident response.",
        ],
      },
      {
        icon: <Rocket size={32} className="text-white" />,
        title: "Launch & App Store Optimization",
        points: [
          "App Store and Google Play submissions.",
          "Store optimization, A/B tests for creatives, review management.",
          "Phased Rollouts, Beta Testing, and Analytics.",
        ],
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-[#363636]">
                Our App{" "}
                <span className="text-[#536186]">Development Services</span>
              </h2>
              <p className="text-[#363636]/70 text-lg">
                We offer a full range of services that are tailored to the
                maturity level of the product, bringing your app from concept to
                scale.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-8 h-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-[#C0C0C0] hover:border-[#536186] hover:shadow-[0_8px_30px_rgba(83,97,134,0.15)] hover:-translate-y-2 transition-all duration-300 group">
                  <div className="bg-[#536186] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#363636] mb-4">
                    {svc.title}
                  </h3>
                  <ul className="space-y-3">
                    {svc.points.map((pt, i) => (
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

          <AnimatedSection delay={0.4}>
            <div className="mt-12 text-center">
              <Link
                to="/services/product-design"
                className="inline-flex items-center gap-2 font-bold text-[#536186] hover:text-[#363636] transition-colors underline underline-offset-4"
              >
                Learn more about our Mobile Strategy & UX{" "}
                <ChevronRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  };

  const TechAndProcessSection = () => {
    const processSteps = [
      {
        t: "Discover",
        d: "Goals, users, constraints, and define success metrics.",
      },
      {
        t: "Design",
        d: "Wireframing, prototyping, and user testing.",
      },
      {
        t: "Build",
        d: "Iterative development with continuous integration and review.",
      },
      {
        t: "Test",
        d: "Automated and manual testing, as well as device compatibility.",
      },
      {
        t: "Launch",
        d: "App store submission, monitoring, and user onboarding support.",
      },
      {
        t: "Measure",
        d: "Analytics, user feedback, and app performance audits.",
      },
      {
        t: "Iterate & Scale",
        d: "Iterate on features and scale as necessary.",
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-[#B0C4DE]/15 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Platforms & Technologies
              </h2>
              <p className="text-lg text-[#363636]/80 mb-8 font-medium">
                We select tools and platforms based on the objectives of the
                products. Selecting the appropriate tools and platforms from the
                start helps avoid rework and improves maintainability over time:
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-[#C0C0C0] shadow-sm">
                  <h4 className="font-bold text-[#536186] mb-3 flex items-center gap-2">
                    <Smartphone size={20} /> Mobile Frontend
                  </h4>
                  <ul className="text-sm text-[#363636]/80 space-y-2">
                    <li>
                      <strong className="text-[#363636]">
                        iOS (iPhone, iPad):
                      </strong>{" "}
                      Swift, Combine, SwiftUI.
                    </li>
                    <li>
                      <strong className="text-[#363636]">Android:</strong>{" "}
                      Kotlin, Jetpack libraries.
                    </li>
                    <li>
                      <strong className="text-[#363636]">
                        Cross-platform:
                      </strong>{" "}
                      Flutter, React Native for efficient development.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#C0C0C0] shadow-sm">
                  <h4 className="font-bold text-[#536186] mb-3 flex items-center gap-2">
                    <Server size={20} /> Backend, Data & DevOps
                  </h4>
                  <ul className="text-sm text-[#363636]/80 space-y-2">
                    <li>
                      <strong className="text-[#363636]">Backend:</strong>{" "}
                      Node.js, Python, Java, serverless functions, managed
                      databases.
                    </li>
                    <li>
                      <strong className="text-[#363636]">DevOps:</strong> CI/CD
                      pipelines, containerization, cloud hosting.
                    </li>
                    <li>
                      <strong className="text-[#363636]">
                        Analytics & Growth:
                      </strong>{" "}
                      Firebase, Mixpanel, Amplitude, custom event tracking.
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[#C0C0C0] text-center">
                    <Link
                      to="/services/backend-development"
                      className="text-sm font-bold text-[#536186] hover:underline"
                    >
                      Explore Backend & Cloud Services
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Our Process (7 Steps)
              </h2>
              <p className="text-lg text-[#363636]/80 mb-8 font-medium">
                A predictable process fosters trust and expedites the
                development process. It concludes with tangible results and
                stakeholder sign-offs at the end of each sprint.
              </p>

              <div className="relative">
                <div className="absolute left-[20px] top-6 bottom-6 w-0.5 bg-[#C0C0C0] z-0"></div>
                <div className="space-y-6 relative z-10">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-5">
                      <div className="w-10 h-10 rounded-full bg-[#536186] text-white flex items-center justify-center font-bold shadow-md flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="bg-white border border-[#C0C0C0] p-4 rounded-xl flex-1 shadow-sm hover:border-[#536186] hover:shadow-md transition-all">
                        <strong className="text-[#363636] block mb-1 text-lg">
                          {step.t}
                        </strong>
                        <span className="text-[#363636]/70 text-sm leading-relaxed">
                          {step.d}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const BenefitsIndustriesSection = () => {
    return (
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                The App Development{" "}
                <span className="text-[#536186]">Advantage</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <div className="bg-[#363636] rounded-3xl p-8 sm:p-10 shadow-2xl h-full">
                <h3 className="text-2xl font-bold text-white mb-8 border-b border-[#536186] pb-4">
                  Benefits of Choosing Us
                </h3>
                <p className="text-[#B0C4DE] mb-6 font-medium">
                  By partnering with our mobile app development company, you get
                  to differentiate between an app and a growth engine:
                </p>
                <ul className="space-y-6">
                  {[
                    {
                      t: "Product-first approach",
                      d: "Features driven by user value and business success.",
                    },
                    {
                      t: "Engineering excellence",
                      d: "Clean architecture, test coverage, and deployment automation.",
                    },
                    {
                      t: "Faster cycles",
                      d: "Modular code and component reuse mean faster releases into the future.",
                    },
                    {
                      t: "Security and compliance",
                      d: "Integrated privacy practices and secure data flows.",
                    },
                    {
                      t: "Local support, global standards",
                      d: "Local product leadership combined with scalable delivery.",
                    },
                    {
                      t: "Ongoing ownership",
                      d: "We don’t disappear after launch; we’ll help grow and stabilize your product.",
                    },
                  ].map((ben, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle
                        className="text-[#B0C4DE] flex-shrink-0 mt-1"
                        size={20}
                      />
                      <div>
                        <strong className="text-white block">{ben.t}</strong>
                        <span className="text-[#D3D3D3]/80 text-sm">
                          {ben.d}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="h-full">
              <div className="bg-[#D3D3D3]/30 rounded-3xl p-8 sm:p-10 border border-[#C0C0C0] h-full">
                <h3 className="text-2xl font-bold text-[#363636] mb-8 border-b border-[#C0C0C0] pb-4">
                  Industries We Serve
                </h3>
                <p className="text-[#363636]/80 mb-6 font-medium">
                  We've delivered apps for many sectors. Our clients may require
                  an android app development company in Pune or app development
                  companies in Pune, and we offer our expertise in collaboration
                  with our clients in the city and surrounding regions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Fintech and Payments",
                    "Healthcare & Telehealth",
                    "E-commerce & Deals",
                    "On-demand services",
                    "Education & Learning",
                    "Enterprise Solutions",
                  ].map((ind, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl border border-[#C0C0C0] shadow-sm flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#B0C4DE]/30 flex flex-shrink-0 items-center justify-center">
                        <Layers size={14} className="text-[#536186]" />
                      </div>
                      <span className="font-bold text-[#363636] text-sm">
                        {ind}
                      </span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-[#363636] mt-10 mb-4">
                  Why Choose Our Mobile Development Company
                </h3>
                <ul className="space-y-3 mb-6 relative z-10">
                  <li className="flex gap-2 text-sm text-[#363636]/80">
                    <CheckCircle
                      size={16}
                      className="text-[#536186] flex-shrink-0 mt-0.5"
                    />{" "}
                    Proven case studies (retention, engagement, revenue).
                  </li>
                  <li className="flex gap-2 text-sm text-[#363636]/80">
                    <CheckCircle
                      size={16}
                      className="text-[#536186] flex-shrink-0 mt-0.5"
                    />{" "}
                    Senior-led architecture review preventing technical debt.
                  </li>
                  <li className="flex gap-2 text-sm text-[#363636]/80">
                    <CheckCircle
                      size={16}
                      className="text-[#536186] flex-shrink-0 mt-0.5"
                    />{" "}
                    Transparent communication and flexible commercial models.
                  </li>
                </ul>
                <p className="text-sm font-bold text-[#536186] italic">
                  When choosing mobile app development companies, it’s easy to
                  get caught up on price, but it’s what we deliver that matters.
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
        q: "How long does a typical mobile app take to build?",
        a: "Timelines depend on scope. A focused MVP often completes in 8–12 weeks; feature-rich consumer apps typically take 4–9 months. We provide a detailed timeline after discovery.",
      },
      {
        q: "Should I choose native or cross-platform development?",
        a: "If you need the absolute best performance and platform-specific UX, choose native. If time-to-market and budget are priorities, cross-platform (Flutter/React Native) is a strong option.",
      },
      {
        q: "Do you build apps for Android in Pune?",
        a: "Yes — we operate as an android application development company in Pune and support full Android lifecycles from design to Play Store release.",
      },
      {
        q: "How do you ensure app security?",
        a: "Security is integrated into the lifecycle: threat modeling, secure auth, encrypted storage, and regular audits. We follow best practices and compliance as required.",
      },
      {
        q: "What post-launch services do you offer?",
        a: "Maintenance, performance monitoring, user analytics, feature sprints, and app store optimization are part of our post-launch packages. Analytics, funnels, cohort analysis, and retention playbooks are key to our Post-Launch Support & Growth.",
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-[#D3D3D3]/50 border-t border-[#C0C0C0]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] text-center mb-12">
              FAQs (SEO-Optimized)
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
                to="/blog"
                className="font-bold text-[#536186] hover:text-[#363636] transition-colors underline underline-offset-4"
              >
                Read our Blog on Mobile Growth & ASO
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
            Ready to discuss your app? <br />
            <span className="text-[#B0C4DE]">
              Transform an idea into a measurable product.
            </span>
          </h2>
          <p className="text-xl text-[#D3D3D3] mb-12 font-medium leading-relaxed max-w-3xl mx-auto">
            Choosing the right mobile app development company transforms an idea
            into a measurable product that users open again and again. Our blend
            of product strategy, disciplined engineering, and continuous
            improvement ensures your app meets user needs and business targets.
            <br />
            <br />
            If you’re evaluating mobile app development companies or need a
            trustworthy mobile development company to take your concept live,
            let’s talk. Book a free discovery call and get a tailored
            development plan and cost estimate.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#363636] bg-[#D3D3D3] hover:bg-white transform transition hover:scale-105 shadow-xl shadow-[#363636]/20"
            >
              Get a Free App Roadmap
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
              View Relevant Case Studies
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
      <WhatIsAppDevSection />
      <ServicesSection />
      <TechAndProcessSection />
      <BenefitsIndustriesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default MobileAppDevelopment;
