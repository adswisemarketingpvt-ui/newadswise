import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  MapPin,
  TrendingUp,
  Search,
  CheckCircle,
  BarChart2,
  FileText,
  Building,
  Briefcase,
  ChevronRight,
  Target,
  Image as ImageIcon,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Smartphone,
  Layers,
  Star,
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

const PLO = () => {
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
              Platform Listing Optimization Service
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 mt-4 leading-tight text-[#363636]">
              Acquire local customers <br />
              <span className="text-[#536186]">in no time</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#363636]/80 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              In a hyper-local world, local customers expect to get instant
              answers to their queries. With our local business listing service,
              you can be assured that your business’s name, address, phone
              number (NAP), and other business details are consistently
              represented across search engines, directories, and applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-white bg-[#536186] shadow-lg shadow-[#536186]/30 transform transition hover:scale-105 hover:bg-[#363636] active:scale-95 flex items-center justify-center gap-2 relative z-50 hover:cursor-pointer pointer-events-auto"
              >
                Get Free Audit <ChevronRight size={18} />
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
              <span className="text-[#536186]">
                Platform Listing Optimization
              </span>{" "}
              & Local Business Listing Service?
            </h2>
            <p className="text-lg sm:text-xl text-[#363636]/70 leading-relaxed font-medium">
              Platform listing optimization, also known as citation management
              or local listing optimization, is a process of building,
              verifying, and maintaining your business listings on relevant
              platforms and directories.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <CheckCircle size={32} className="text-[#536186]" />,
              title: "Accurate Listings",
              desc: "Accurate and verified business listings.",
            },
            {
              icon: <Layers size={32} className="text-[#536186]" />,
              title: "NAP Consistency",
              desc: "Checking and correction of NAP (name, address, and phone number).",
            },
            {
              icon: <Target size={32} className="text-[#536186]" />,
              title: "Profile Optimization",
              desc: "Description, category, and image optimization for conversions.",
            },
            {
              icon: <Search size={32} className="text-[#536186]" />,
              title: "Continuous Monitoring",
              desc: "Monitoring to keep your business listings accurate and up-to-date.",
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
                Platform Listing Optimization
              </span>
            </h2>
            <p className="text-lg text-[#363636]/80 mb-8 font-medium">
              A local search translates into actual sales. When you have a
              potential customer searching for services near them, such as “near
              me” searches, inconsistent data can lead to losing the sale.
            </p>
            <div className="space-y-6">
              <ul className="space-y-4">
                {[
                  "Reach local map packs and search results consistently.",
                  "Gain trust with accurate hours, phone numbers, and directions.",
                  "Boost your local search engine ranking with consistent citations.",
                  "Harness review signals to convert searches.",
                  "Prevent confusion for customers caused by outdated or duplicate data.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#536186] flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
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
                Consistent, short, and optimized business listings are often an
                untapped way to beat bigger brands for local searches.
              </h3>
              <p className="text-[#D3D3D3] font-medium leading-relaxed mb-8">
                Whether you are a small business with a single location or a
                multi-location brand, our local business listing service is a
                powerful tool to deliver maximum ROI to your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D3D3D3] text-[#363636] font-bold rounded-lg hover:bg-white transition"
              >
                Schedule Consultation <ChevronRight size={18} />
              </Link>
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
                Our Platform Listing{" "}
                <span className="text-[#536186]">Optimization Services</span>
              </h2>
              <p className="text-lg text-[#363636]/70 leading-relaxed font-medium">
                We offer end-to-end solutions to help create a perfect and
                conversion-ready local presence for you.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Strategy Development
                  </h3>
                </div>
                <p className="text-[#363636]/80 mb-6 font-medium">
                  We conduct an audit of your existing local presence and create
                  a data-driven strategy that focuses on the highest-impact
                  listings in relevant directories, search engines, and vertical
                  websites.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Local
                    presence audit
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Competitor citation analysis
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Priority platform selection
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Campaign Management
                  </h3>
                </div>
                <p className="text-[#363636]/80 mb-6 font-medium">
                  We manage, verify, and maintain your listings so that you can
                  focus on running your business.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Claim &
                    verify listings
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Duplicate removal & suppression
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Batch
                    updates for multi-location brands
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Ongoing
                    accuracy checks
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <FileText className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Content Creation
                  </h3>
                </div>
                <p className="text-[#363636]/80 mb-6 font-medium">
                  Optimized content is the key to turning clicks into customers.
                  We optimize and create content for our clients.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    High-intent business descriptions
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Image
                    optimization (cover/alt text)
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Service
                    category optimization
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Localized content for city pages
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
                  Measure what matters. Transparent dashboards and monthly
                  reports provide visibility, clicks, calls, and ranking
                  improvements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Visibility & ranking reports
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Listing
                    health scorecard
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Call /
                    direction / click tracking
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Review
                    sentiment tracking
                  </li>
                </ul>
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
                We list and manage your presence across the channels that matter
                most to your business:
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Google Business Profile & Maps",
              "Instagram",
              "Facebook Pages & Places",
              "LinkedIn Company Pages",
              "Twitter Profiles & location tags",
              "YouTube Channel location & business info",
            ].map((platform, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-[#C0C0C0] shadow-sm flex items-center gap-4 hover:border-[#536186] transition-colors h-full">
                  <CheckCircle
                    className="text-[#536186] flex-shrink-0"
                    size={24}
                  />
                  <span className="font-bold text-[#363636] text-lg">
                    {platform}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="bg-[#363636] text-white p-8 rounded-2xl text-center max-w-3xl mx-auto shadow-xl">
              <p className="text-[#D3D3D3]/90 font-medium leading-relaxed">
                Additionally, we list you in niche directories and
                industry-specific websites that generate qualified leads (Yelp,
                Zomato, Justdial, local chambers of commerce, and others).
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  };

  const ProcessSection = () => {
    const processSteps = [
      {
        t: "Discovery & Audit",
        d: "Full Local Footprint Audit, Competitor Analysis, and Priority Map.",
      },
      {
        t: "Record Cleanup",
        d: "De-duplicate data, clean existing records, and standardize NAP.",
      },
      {
        t: "Claim & Verify",
        d: "Claim business profiles and complete verification.",
      },
      {
        t: "Optimize Profiles",
        d: "Add keyword-rich descriptions, images, categories, and services.",
      },
      {
        t: "Publish & Distribute",
        d: "Publish accurate data to primary sources and secondary sources.",
      },
      {
        t: "Monitor & Maintain",
        d: "Regular checks and reviews; update listings as necessary.",
      },
      {
        t: "Report & Improve",
        d: "Monthly reporting and constant optimization.",
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
                We have a transparent and repeatable process that is designed
                for scale and accuracy.
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
            <Link
              to="/contact"
              className="inline-flex justify-center items-center py-4 px-8 text-white font-bold bg-[#536186] rounded-xl shadow-lg hover:bg-[#363636] transition-colors"
            >
              15-Minute Technical Consultation
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
                Benefits of Choosing Our Platform Listing Optimization Agency
              </h2>
              <p className="text-lg text-[#363636]/80 font-medium mb-6">
                Working with us means working with reliability, authority, and
                quantified success.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <Star size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Proven Expertise across SMBs and enterprises.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <TrendingUp size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Higher Local Rankings in map pack and organic results.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <MapPin size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    More Foot Traffic & Calls converting more searchers.
                  </span>
                </div>
              </div>
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
                        Experienced Team:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        Local SEO experts, content writers, and listing
                        specialists.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Data-Driven:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        We make decisions based on audits, tracking, and A/B
                        testing.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        White-Glove Support:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        Dedicated account manager and rapid response times.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mb-16">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center py-4 px-8 text-white font-bold bg-[#536186] rounded-xl shadow-lg hover:bg-[#363636] transition-colors"
            >
              Get Free Audit
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#D3D3D3]/30 p-8 rounded-2xl text-center h-full border border-[#C0C0C0]">
                <Star className="text-[#536186] mx-auto mb-4" size={32} />
                <p className="text-2xl font-bold text-[#363636] mb-2">
                  Avg. 42%
                </p>
                <p className="text-[#363636]/80 font-medium">
                  increase in map pack visibility in 3 months
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-[#D3D3D3]/30 p-8 rounded-2xl text-center h-full border border-[#C0C0C0]">
                <TrendingUp className="text-[#536186] mx-auto mb-4" size={32} />
                <p className="text-2xl font-bold text-[#363636] mb-2">
                  3x More
                </p>
                <p className="text-[#363636]/80 font-medium">
                  organic calls & directions to storefronts
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="bg-[#D3D3D3]/30 p-8 rounded-2xl text-center h-full border border-[#C0C0C0]">
                <MapPin className="text-[#536186] mx-auto mb-4" size={32} />
                <p className="text-2xl font-bold text-[#363636] mb-2">100%</p>
                <p className="text-[#363636]/80 font-medium">
                  resolution rate for duplicate listings
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
              "Retail stores and boutiques",
              "Food services, restaurants, cafes, and bars",
              "Health services and clinics",
              "Home services, such as plumbers, electricians, and cleaners",
              "Legal and professional services",
              "Hotel and accommodation services",
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-[#D3D3D3]/20 p-6 rounded-2xl border border-[#C0C0C0] flex items-center justify-center text-center">
                  <h3 className="text-lg font-bold text-[#363636]">{item}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center text-[#536186] font-bold">
            And many other types of businesses serving local communities,
            cities, or regions.
          </div>
        </div>
      </section>
    );
  };

  const FAQSection = () => {
    const faqs = [
      {
        q: "What is a local business listing service and how does it help my business?",
        a: "A local business listing service creates and manages your profiles across directories, ensures NAP consistency, and optimizes listings for local search visibility — driving calls, visits, and bookings.",
      },
      {
        q: "Do you provide Google local listing services and verification?",
        a: "Yes — we handle claiming, verifying, and optimizing your Google Business Profile to improve map pack rankings and conversions.",
      },
      {
        q: "How long before I see results from platform listing optimization?",
        a: "Many businesses see improved visibility within 4–8 weeks; full benefits accrue as listings propagate and review/social signals build.",
      },
      {
        q: "Will you remove duplicate or incorrect listings on my behalf?",
        a: "Absolutely. We identify duplicates, reconcile conflicting records, and suppress incorrect entries across major directories.",
      },
      {
        q: "Can you manage multiple locations and franchises?",
        a: "Yes — we specialize in multi-location rollouts, bulk verification, and centralized reporting for consistent brand presence.",
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
            Ready to Be Found Locally?
          </h2>
          <p className="text-xl text-[#D3D3D3] mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
            Don’t lose customers to outdated or inconsistent listings. Our local
            business listing service provides you with accurate and optimized
            business profiles and access to a constant flow of local customers.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#363636] bg-[#D3D3D3] hover:bg-white transform transition hover:scale-105 shadow-xl shadow-[#363636]/20"
            >
              Get Your Free Local Listing Audit Today
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  return (
    <>
      <Helmet>
        <title>Local Business Listing Service | Improve Local Visibility</title>
        <meta
          name="description"
          content="Boost local visibility with our expert local business listing service — accurate listings,  and local SEO that drive customers to your door."
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

export default PLO;
