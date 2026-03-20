import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Code,
  Layout,
  Smartphone,
  Globe,
  Zap,
  Server,
  ShoppingCart,
  CheckCircle,
  Plus,
  Minus,
  ChevronRight,
  TrendingUp,
  Shield,
  Workflow,
  Search,
  Monitor,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

/*
  SEO METADATA CONTENT (For specific configuration in index.html, next/head or helmet):
  Meta Title (≤60 chars): Web Development Services | Website Development Agency
  Meta Description (150–160 chars): Professional web development services from a trusted website development agency. Fast, secure, SEO-friendly sites built to convert and scale your business.
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

const WebsiteDevelopment = () => {
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
              backgroundSize: "60px 60px",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#D3D3D3] via-transparent to-[#D3D3D3]"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Floating UI Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-[#536186]/20 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 60 + 30,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 5 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Layout className="text-[#536186]/40" size={24} />
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
              <Code size={16} /> Full-Stack Architecture
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 mt-4 leading-tight text-[#363636] capitalize">
              Web Development Services <br />
              <span className="text-[#536186]">Adswise Marketing</span>
            </h1>

            <p className="text-lg sm:text-lg text-[#363636]/80 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              At Adswise Marketing, our web development services bring ideas to
              life with powerful, business-growing websites. We are full-stack
              web architects who specialize in intuitive user experience,
              bulletproof development, and conversion-focused strategy to create
              breathtaking websites that surpass expectations. Do you need a
              website that drives traffic, converts visitors, and grows with
              your business? You’re in the right place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4 ">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-white bg-[#536186] shadow-lg shadow-[#536186]/30 transform transition hover:scale-105 hover:bg-[#363636] active:scale-95 flex items-center justify-center gap-2 relative z-50 hover:cursor-pointer pointer-events-auto"
              >
                Get Your Free Website Audit <ChevronRight size={18} />
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
              Introduction to <span className="text-[#536186]">Web Dev</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#363636]/70 leading-relaxed font-medium mb-6">
              Your website is your single most important online asset, perhaps
              the first time a new customer has ever heard of your business.
              Investing in professional web development services means that
              first impression is a quick, clear, and compelling one. At our web
              development agency, we understand the importance of a website that
              doesn’t just exist, but works.
            </p>
            <p className="text-lg text-[#363636]/70 leading-relaxed font-medium bg-[#B0C4DE]/10 p-6 rounded-2xl border border-[#B0C4DE]/30">
              Our web development services combine user experience, frontend,
              and backend development, along with search engine optimization, to
              create websites that help achieve marketing, sales, and product
              goals. Perhaps you’re launching a new business, migrating to a new
              platform, or scaling an existing portal? Our web development
              agency has the expertise to provide tailor-made solutions that
              deliver results.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  const WhatIsWebDevSection = () => (
    <section className="py-16 sm:py-24 bg-[#D3D3D3] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B0C4DE] rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              What is Website Development?
            </h2>
            <p className="text-lg text-[#363636]/80 mb-8 font-medium">
              Website development is the technical and creative process of
              building an online presence, including structure, functionality,
              appearance, and content delivery. It consists of:
            </p>
            <ul className="space-y-6 mb-8">
              {[
                {
                  title: "Frontend Development",
                  desc: "Responsive UI, Accessibility, and Interactive Features.",
                },
                {
                  title: "Backend Development",
                  desc: "Databases, API, Server Logic, etc.",
                },
                {
                  title: "Hosting & Architecture",
                  desc: "Deployment, Scaling, and Tuning.",
                },
                {
                  title: "Ecommerce Mastery",
                  desc: "WordPress, Shopify, Headless, or Custom Solutions Designed for Scalability.",
                },
                {
                  title: "Security & Compliance",
                  desc: "SSL, Data Security, and compliance regulations.",
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
                Good web development services involve more than just coding, as
                they must map business outcomes to technical decisions,
                including speed, user experience, and conversion rates.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-[#363636] p-8 md:p-10 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-6 -right-6 bg-[#C0C0C0] w-24 h-24 rounded-full blur-[30px] opacity-20"></div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Your Business Needs Web Development Services
              </h3>
              <p className="text-[#D3D3D3] mb-6 font-medium">
                With a professionally designed website, you'll see growth at
                multiple levels:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Lightning-fast load times will propel you to the top of the search engines and lower your bounce rate dramatically.",
                  "Simple navigation and clear messaging will help visitors convert into customers.",
                  "Clean code will lower your technical debt and risk.",
                  "Scalable design will help you add features and handle traffic surges.",
                  "SEO-friendly design will help you grow your organic traffic over time.",
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
                  Working with an experienced website development company will
                  save you time and money in the long run, as opposed to the
                  trial and error method.
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
        title: "Strategy & Planning",
        list: [
          "Strategic discovery sessions with key stakeholders.",
          "Technical audits and performance benchmarks.",
          "Feature prioritization, road mapping, and success metrics.",
        ],
      },
      {
        icon: <Layout size={32} className="text-[#536186]" />,
        title: "UI/UX & Design",
        list: [
          "User research and persona-based wireframing.",
          "Mobile-first responsive design and prototyping.",
          "Accessibility audit and user experience validation.",
        ],
      },
      {
        icon: <Code size={32} className="text-[#536186]" />,
        title: "Frontend Development",
        list: [
          "Modern frameworks like React, Vue, or Vanilla JS.",
          "Pixel perfect builds, responsive layouts, and animations.",
          "Progressive enhancement and cross-browser testing.",
        ],
      },
      {
        icon: <Server size={32} className="text-[#536186]" />,
        title: "Backend Development",
        list: [
          "Backend architecture and smooth integrations.",
          "Strong APIs, microservices, and database architecture.",
          "CMS integration (WordPress, Webflow, Headless).",
          "Payment systems, CRMs, and tool integrations.",
        ],
      },
      {
        icon: <ShoppingCart size={32} className="text-[#536186]" />,
        title: "eCommerce Development",
        list: [
          "Shopify, WooCommerce, or custom platforms.",
          "Conversion-optimised product pages and checkout flows.",
          "Inventory, tax, and shipping integrations.",
        ],
      },
      {
        icon: <Shield size={32} className="text-[#536186]" />,
        title: "Performance & Security",
        list: [
          "Optimization of Core Web Vitals.",
          "CDN Configuration and secure architecture.",
          "Managed Hosting platforms like AWS, GCP, Azure.",
        ],
      },
      {
        icon: <TrendingUp size={32} className="text-[#536186]" />,
        title: "Maintenance & SEO",
        list: [
          "SEO-friendly URLs, schema, and page speed fixes.",
          "Content template and editorial flow setup.",
          "Ongoing updates, automated backups, and A/B testing.",
          "Analytics setup to measure growth.",
        ],
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 text-[#363636]">
                Our Web Development{" "}
                <span className="text-[#536186]">Services</span>
              </h2>
              <p className="text-[#363636]/70 text-lg">
                Our web development services begin with strategy all the way
                through ongoing optimization. Our services are tailored to each
                project, but some of our key services include:
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
            {servicesData.map((svc, idx) => (
              <AnimatedSection
                key={idx}
                delay={idx * 0.1}
                className={
                  idx === 6 ? "md:col-span-2 lg:col-span-3 xl:col-span-1" : ""
                }
              >
                <div className="bg-[#D3D3D3]/30 rounded-2xl p-6 h-full border border-[#C0C0C0] hover:border-[#536186] hover:shadow-[0_8px_30px_rgba(83,97,134,0.15)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#B0C4DE] rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

                  <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform relative z-10">
                    {svc.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#363636] mb-4 relative z-10">
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
        t: "Discover & Define",
        d: "Strategic workshops, technical audits, key KPIs.",
      },
      {
        t: "Design & Prototype",
        d: "Wireframes, visual design, user testing.",
      },
      {
        t: "Build & Integrate",
        d: "Frontend development, backend development, third-party integrations.",
      },
      {
        t: "Test & Launch",
        d: "Quality assurance, performance tuning, staged rollouts.",
      },
      {
        t: "Measure & Improve",
        d: "Analytics, A/B testing, iterative updates.",
      },
      {
        t: "Maintain & Secure",
        d: "Backups, updates, iterative optimisations.",
      },
      {
        t: "Scale",
        d: "New features, multilingual support, platform migrations.",
      },
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
                We offer web development services for popular platforms and web
                stacks. The choice of platform depends on your needs, and we can
                help you decide which one is the best for your business.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "WordPress",
                    desc: "Flexible content management system for content-centric web applications.",
                  },
                  {
                    title: "Shopify",
                    desc: "Reliable e-commerce storefronts tailored for sales.",
                  },
                  {
                    title: "Webflow",
                    desc: "Design-centric, CMS enabled web applications.",
                  },
                  {
                    title: "Headless Ecosystems",
                    desc: "Headless CMS + frontend frameworks or Custom web stacks.",
                  },
                  {
                    title: "Hosting Providers",
                    desc: "AWS, Google Cloud, Vercel, Netlify, etc.",
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
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Our Process (7 Steps)
              </h2>
              <p className="text-lg text-[#363636]/80 mb-8 font-medium">
                A predictable process to guarantee quality and speed. Each phase
                has clear deliverables, timelines, and approval checkpoints to
                ensure you’re kept in the loop throughout the process.
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
                <br /> <span className="text-[#536186]">Our Agency</span>
              </h2>
              <div className="bg-[#363636] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                {/* Decorative graphic */}
                <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                  <Monitor size={250} className="text-white" />
                </div>

                <ul className="space-y-6 relative z-10">
                  {[
                    "Business-first development that ties features to KPIs.",
                    "Faster time-to-market with our library of reusable components and modular code.",
                    "More conversions with our best practices in UX and CRO.",
                    "Long-term maintainability with our documentation for your internal teams.",
                    "Transparent pricing models with clear milestones to avoid surprises.",
                    "Launch support to guarantee ongoing performance and security.",
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
                    With these benefits, your website will become a reliable
                    growth engine instead of a one-time solution.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Industries We Serve & Why Us
              </h2>
              <p className="text-[#363636]/80 mb-6 font-medium text-lg">
                We have developed high-performing websites for various
                industries, including:
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "E-commerce",
                  "Retail Solutions",
                  "SaaS & Tech Startups",
                  "Healthcare & Wellness",
                  "Finance & Fintech",
                  "Hospitality & Travel",
                  "Education & Edtech",
                  "Professional Services",
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
                *For businesses in Pune, we understand that finding the best web
                development company in pune or the best web designing agency in
                pune is important.
              </p>

              <div className="bg-[#B0C4DE]/20 p-6 rounded-2xl border border-[#C0C0C0]">
                <h3 className="text-xl font-bold text-[#363636] mb-4">
                  Why Choose Our Web Development Agency?
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2 text-sm text-[#363636]/80">
                    <CheckCircle
                      size={16}
                      className="text-[#536186] flex-shrink-0 mt-0.5"
                    />
                    Demonstrated success, results, and customer testimonials.
                  </li>
                  <li className="flex gap-2 text-sm text-[#363636]/80">
                    <CheckCircle
                      size={16}
                      className="text-[#536186] flex-shrink-0 mt-0.5"
                    />
                    Seasoned team of web developers, UX experts, and product
                    strategists.
                  </li>
                  <li className="flex gap-2 text-sm text-[#363636]/80">
                    <CheckCircle
                      size={16}
                      className="text-[#536186] flex-shrink-0 mt-0.5"
                    />
                    Clear communication, weekly updates, and demos.
                  </li>
                  <li className="flex gap-2 text-sm text-[#363636]/80">
                    <CheckCircle
                      size={16}
                      className="text-[#536186] flex-shrink-0 mt-0.5"
                    />
                    Security-focused approach, regular audits, and best
                    practices.
                  </li>
                </ul>
                <p className="mt-4 text-xs font-bold text-[#363636]/60 uppercase tracking-wide">
                  If you're looking for the best web development company in
                  pune, we're your best bet!
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
        q: "How long does a website build take?",
        a: "Timelines vary by complexity. A basic marketing site typically takes 6–10 weeks; complex platforms or eCommerce stores may take 12–20+ weeks. We provide realistic schedules after discovery.",
      },
      {
        q: "Do you provide responsive and mobile-first development?",
        a: "Yes. Every project follows a mobile-first approach to ensure fast, accessible experiences across devices.",
      },
      {
        q: "Which CMS should I choose — WordPress, Webflow, or headless?",
        a: "It depends on your needs. WordPress fits content-heavy sites, Webflow suits design-led builds, and headless is ideal for scale and custom experiences. We recommend the best option during strategy sessions.",
      },
      {
        q: "Will my site be SEO-friendly out of the box?",
        a: "Absolutely. We implement technical SEO foundations, schema markup, and SEO-friendly templates as part of standard builds.",
      },
      {
        q: "Do you support post-launch maintenance and updates?",
        a: "Yes. We offer maintenance plans that include security updates, backups, performance monitoring, and iterative improvements.",
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-[#D3D3D3]/50">
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
                to="/blog/web-development"
                className="font-bold text-[#536186] hover:text-[#363636] transition-colors underline underline-offset-4"
              >
                Read our Blog for more Web Development Resources
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
            Investing in professional web development services turns your
            website into a scalable business asset. As a results-driven website
            development agency and web development agency, we build fast,
            secure, and conversion-optimized sites tailored to your goals.
            Whether you’re searching for a top web development company in pune
            or evaluating a web designing agency in pune, our team delivers
            measurable outcomes and ongoing support.
            <br />
            <br />
            Ready to start? Book a free discovery call and get a custom web
            roadmap.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#363636] bg-[#D3D3D3] hover:bg-white transform transition hover:scale-105 shadow-xl shadow-[#363636]/20"
            >
              Get Your Free Website Audit
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-transparent border-2 border-[#B0C4DE] hover:bg-[#B0C4DE] hover:text-[#363636] transform transition"
            >
              Request a Proposal
            </Link>
            <Link
              to="/case-studies"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#D3D3D3] hover:text-white underline underline-offset-4 transform transition"
            >
              See Case Studies
            </Link>
          </div>

          {/* <div className="mt-12">
            <a
              href="#download-checklist"
              className="text-sm font-bold text-[#B0C4DE] hover:text-white uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
            >
              Download Our Web Development Checklist <ChevronRight size={16} />
            </a>
          </div> */}
        </AnimatedSection>
      </div>
    </section>
  );

  return (
    <>
      <Helmet>
        <title>Web Development Services | Website Development Agency</title>
        <meta
          name="description"
          content=" Trusted web development services delivering fast, secure, SEO-friendly sites that convert and scale your business."
        />
      </Helmet>

      <div className="min-h-screen bg-[#D3D3D3] font-sans selection:bg-[#536186] selection:text-white">
        <HeroSection />
        <IntroSection />
        <WhatIsWebDevSection />
        <ServiceDetailsSection />
        <ToolsAndProcessSection />
        <BenefitsSection />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
};

export default WebsiteDevelopment;
