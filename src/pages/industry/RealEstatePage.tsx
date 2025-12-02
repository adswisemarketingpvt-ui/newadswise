import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../components/Header'; // Assuming you have this
import { 
  MapPin, Layout, Share2, Target, Monitor, 
  CheckCircle2, BarChart3, Users, Building, 
  Home, ArrowRight, Key, TrendingUp, Building2,
  Phone, Globe, Search
} from 'lucide-react';

// ============================================================================
// ASSETS & CONFIG
// ============================================================================

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Skyscraper/Modern
  meeting: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop", // Real Estate Meeting
  interior: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", // Luxury Interior
  texture: "https://www.transparenttextures.com/patterns/carbon-fibre.png"
};

// ============================================================================
// ANIMATION WRAPPERS
// ============================================================================

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, className = '', delay = 0 
}) => {
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

const ParallaxImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`overflow-hidden relative ${className}`}>
            <motion.img 
                style={{ y, scale: 1.15 }}
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
        </div>
    );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const RealEstatePage = () => {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-yellow-400 selection:text-black">
      
      {/* 1. Global Header */}
      <Header />

      {/* 2. HERO SECTION */}
      <HeroSection />

      {/* 3. STATS BANNER */}
      <StatsBanner />

      {/* 4. SERVICES SUITE */}
      <ServicesSection />

      {/* 5. STRATEGY / WHY US */}
      <StrategySection />

      {/* 6. RESULTS CASE STUDY */}
      <ResultsSection />

      {/* 7. AUDIENCE GRID */}
      <AudienceSection />

      {/* 8. CTA */}
      <CTASection />

    </div>
  );
};

// ============================================================================
// SUB-SECTIONS COMPONENTS
// ============================================================================

const HeroSection = () => {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white pt-20">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                 <ParallaxImage src={IMAGES.hero} alt="Modern Real Estate" className="w-full h-full" />
                 {/* Gradient Overlay for Readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 z-10"></div>
            </div>

            <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                        <Building2 size={14} /> Industry Solutions
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight"
                >
                    Real Estate Marketing <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600">
                        That Sells Lifestyles.
                    </span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light"
                >
                    From locality domination to high-intent lead generation. We build the digital infrastructure that turns "Looking" into "Booking".
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link 
                        to="/contact" 
                        className="px-8 py-4 rounded-lg bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition transform hover:-translate-y-1 shadow-[0_0_20px_rgba(250,204,21,0.4)] flex items-center justify-center gap-2"
                    >
                        Book Strategy Call <ArrowRight size={20} />
                    </Link>
                    <Link 
                        to="/case-studies" 
                        className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition flex items-center justify-center gap-2"
                    >
                        View Case Studies
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

const StatsBanner = () => (
    <div className="bg-yellow-400 py-6 relative z-30">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-black/10">
                {[
                    { label: "Site Visits Generated", val: "12k+" },
                    { label: "Properties Sold", val: "850+" },
                    { label: "Leads Qualified", val: "45k+" },
                    { label: "Ad Spend Managed", val: "₹5Cr+" }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center"
                    >
                        <div className="text-2xl md:text-3xl font-black text-black">{stat.val}</div>
                        <div className="text-xs md:text-sm font-bold text-black/70 uppercase tracking-wide">{stat.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);

const ServicesSection = () => {
    const services = [
        {
            icon: MapPin, title: "Hyperlocal SEO",
            desc: "Dominating 'Near Me' searches. We optimize your Google Maps and location pages to capture demand in specific neighborhoods like 'Wakad' or 'Baner'.",
            tags: ["GMB Ranking", "Location Pages"]
        },
        {
            icon: Layout, title: "Portal Optimization",
            desc: "Stop wasting money on portals. We optimize your MagicBricks and Housing.com listings with high-CTR visuals and copy.",
            tags: ["99acres", "MagicBricks", "Housing"]
        },
        {
            icon: Target, title: "High-Intent Ads",
            desc: "We filter out the 'window shoppers'. Our Google & Meta ad funnels target HNI audiences with actual buying intent.",
            tags: ["Google Ads", "Lead Qualification"]
        },
        {
            icon: Share2, title: "Social Storytelling",
            desc: "Selling the dream. Drone shots, walkthrough reels, and lifestyle content that creates emotional connection before the site visit.",
            tags: ["Reels", "Drone Shoots"]
        },
        {
            icon: Monitor, title: "Conversion Web Design",
            desc: "Websites that act as virtual sales offices. Featuring EMI calculators, brochure downloads, and instant WhatsApp chat.",
            tags: ["Landing Pages", "CRM Integration"]
        },
        {
            icon: Key, title: "CRM Automation",
            desc: "Speed to lead is everything. We set up automated WhatsApp & Email sequences to nurture leads instantly 24/7.",
            tags: ["WhatsApp API", "Email Nurture"]
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
                            The 360° Real Estate Ecosystem
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Standalone ads don't work anymore. You need a connected system that attracts, educates, and converts homebuyers.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <AnimatedSection key={i} delay={i * 0.1}>
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 group h-full flex flex-col"
                            >
                                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-slate-900 text-white group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-300">
                                    <s.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{s.title}</h3>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">{s.desc}</p>
                                <div className="flex gap-2 flex-wrap mt-auto">
                                    {s.tags.map((t, idx) => (
                                        <span key={idx} className="text-[10px] uppercase font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded border border-slate-200">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

const StrategySection = () => (
    <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-repeat" style={{ backgroundImage: `url(${IMAGES.texture})` }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Why Developers Trust <span className="text-yellow-400">Adswise</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        Real estate marketing isn't about getting cheap leads. It's about getting *site visits*. We reverse-engineer the buyer journey to filter out time-wasters and deliver qualified prospects to your sales team.
                    </p>
                    
                    <div className="space-y-6">
                        {[
                            { title: "Market Research First", desc: "We analyze locality demand and competitor pricing before spending a rupee." },
                            { title: "No Junk Leads", desc: "Strict OTP verification and intent-based forms to ensure data quality." },
                            { title: "Transparent Reporting", desc: "Live dashboards showing Cost Per Site Visit, not just Cost Per Lead." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1">
                                    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-black text-xs font-bold">✓</div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-white">{item.title}</h4>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2}>
                    <div className="relative">
                         <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-400 to-yellow-600 rounded-2xl blur-lg opacity-40"></div>
                         <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
                             <h3 className="text-2xl font-bold mb-6 text-white border-b border-zinc-800 pb-4">The Sales Funnel</h3>
                             <div className="space-y-4">
                                 {[
                                     { step: "01", title: "Awareness", sub: "Ads, SEO, Social" },
                                     { step: "02", title: "Capture", sub: "Landing Pages & Portals" },
                                     { step: "03", title: "Nurture", sub: "Auto-WhatsApp & Email" },
                                     { step: "04", title: "Conversion", sub: "Site Visit & Booking" }
                                 ].map((s, i) => (
                                     <div key={i} className="flex items-center p-4 rounded-xl bg-black border border-zinc-800 hover:border-yellow-500/50 transition-colors group">
                                         <span className="text-3xl font-black text-zinc-700 group-hover:text-yellow-500 transition-colors mr-6">{s.step}</span>
                                         <div>
                                             <h5 className="font-bold text-white text-lg">{s.title}</h5>
                                             <p className="text-xs text-zinc-400 uppercase tracking-wider">{s.sub}</p>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                         </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    </section>
);

const ResultsSection = () => (
    <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
                
                {/* Text Content */}
                <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                    <AnimatedSection>
                        <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide mb-4">Case Study: Baner Project</div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Turning Clicks into Keys</h2>
                        <p className="text-slate-600 mb-10 leading-relaxed">
                            A mid-sized developer in Pune was struggling with high CPL and low site visit ratios. We revamped their landing pages and implemented WhatsApp automation.
                        </p>
                        
                        <div className="space-y-6">
                            {[
                                { label: "Quality Leads", val: "630", width: "75%" },
                                { label: "Site Visits Scheduled", val: "71", width: "50%" },
                                { label: "Confirmed Bookings", val: "09", width: "35%" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                                        <span>{stat.label}</span>
                                        <span className="text-black">{stat.val}</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: stat.width }}
                                            transition={{ duration: 1.5, delay: i * 0.2 }}
                                            className="h-full bg-yellow-400"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>

                {/* Visual Side */}
                <div className="md:w-1/2 relative min-h-[400px]">
                    <ParallaxImage src={IMAGES.interior} alt="Luxury Interior" className="absolute inset-0 w-full h-full" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs text-center"
                        >
                            <TrendingUp className="w-10 h-10 text-green-600 mx-auto mb-2" />
                            <div className="text-4xl font-black text-slate-900 mb-1">9.2x</div>
                            <div className="text-sm font-bold text-slate-500 uppercase">ROI on Ad Spend</div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

const AudienceSection = () => {
    const audiences = [
        { icon: Building, title: "Residential Developers" },
        { icon: Home, title: "Luxury Villa Projects" },
        { icon: Layout, title: "Redevelopment" },
        { icon: BarChart3, title: "Commercial Spaces" },
        { icon: Users, title: "Co-Working Hubs" },
        { icon: Target, title: "Channel Partners" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
                        Who We Partner With
                    </h2>
                </AnimatedSection>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {audiences.map((a, i) => (
                        <AnimatedSection key={i} delay={i * 0.05}>
                            <div className="p-6 rounded-xl border border-slate-100 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 text-center group cursor-default">
                                <div className="text-slate-400 group-hover:text-yellow-600 transition-colors mb-3 flex justify-center">
                                    <a.icon size={32} />
                                </div>
                                <h4 className="font-bold text-sm text-slate-700 group-hover:text-slate-900">{a.title}</h4>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection = () => (
    <section className="py-24 bg-yellow-400 text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
            <AnimatedSection>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Scale Your Sales?</h2>
                <p className="text-lg md:text-xl font-medium mb-10 opacity-90 max-w-2xl mx-auto">
                    Stop relying on random leads. Build a predictable, automated sales engine with Adswise.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link 
                        to="/contact" 
                        className="inline-block px-10 py-4 rounded-lg bg-black text-white font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
                    >
                        Get Your Proposal
                    </Link>
                    <a 
                        href="tel:+910000000000"
                        className="inline-flex items-center justify-center px-10 py-4 rounded-lg border-2 border-black text-black font-bold text-lg hover:bg-black hover:text-white transition duration-300"
                    >
                        <Phone className="mr-2" size={20} /> Call Now
                    </a>
                </div>
            </AnimatedSection>
        </div>
    </section>
);

export default RealEstatePage;