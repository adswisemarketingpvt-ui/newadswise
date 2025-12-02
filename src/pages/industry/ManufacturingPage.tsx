import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Factory, Settings, Users, Search, 
  FileText, Globe, Magnet, MapPin, 
  Video, ChevronRight, CheckCircle2, 
  TrendingUp, Send, ShieldCheck, 
  Cpu, Wrench, Truck
} from 'lucide-react';

// ============================================================================
// ASSETS & CONFIG
// ============================================================================

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070&auto=format&fit=crop", // Sparks/Welding
  texture: "https://www.transparenttextures.com/patterns/carbon-fibre.png",
  factory: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // CNC/Machinery
  logistics: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" // Warehouse
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
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20"></div>
        </div>
    );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const ManufacturingPage = ({
  onContactSubmit
}: { onContactSubmit?: (formData: any) => void }) => {
  
  // Brand Colors
  const accentColor = '#FF6B35'; // Safety Orange
  
  const [formData, setFormData] = useState({
    name: '', email: '', companyName: '', industryType: '', message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Industrial inquiry received. We will analyze your requirements shortly.");
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => {
    return (
        <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white pt-20">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                 <ParallaxImage src={IMAGES.hero} alt="Industrial Manufacturing" className="w-full h-full" />
                 {/* Blueprint Grid Overlay */}
                 <div className="absolute inset-0 opacity-20" 
                      style={{ backgroundImage: 'linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                 </div>
            </div>

            <div className="relative z-20 container mx-auto px-4 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/30 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                        <Wrench size={14} /> Industrial Growth Engine
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight"
                >
                    Manufacturing Digital <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                        Supply Chain Solutions.
                    </span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light"
                >
                    We build the digital infrastructure that connects factories to buyers. Secure OEM partnerships, expand dealer networks, and generate qualified RFQs.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a 
                        href="#contact" 
                        className="px-8 py-4 rounded-lg bg-orange-600 text-white font-bold text-lg hover:bg-orange-500 transition transform hover:-translate-y-1 shadow-[0_0_30px_rgba(255,107,53,0.3)] flex items-center justify-center gap-2"
                    >
                        Get B2B Leads <ChevronRight size={20} />
                    </a>
                    <a 
                        href="#solutions" 
                        className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition flex items-center justify-center gap-2"
                    >
                        View Solutions
                    </a>
                </motion.div>
            </div>
        </header>
    );
  };

  const ChallengesSection = () => {
    const challenges = [
        { icon: Search, title: "Invisible to Buyers", desc: "Your machines are world-class, but procurement teams can't find you on Google." },
        { icon: Users, title: "Gatekeeper Barrier", desc: "Struggling to bypass front-desk staff to reach decision-making Engineers." },
        { icon: FileText, title: "Technical Gaps", desc: "Buyers reject suppliers instantly if specs, grades, or certifications are unclear." },
        { icon: TrendingUp, title: "Long Cycles", desc: "Deals die during the 6-month sales cycle without automated digital follow-up." }
    ];

    return (
      <section className="py-20 bg-zinc-950 relative">
          <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: `url(${IMAGES.texture})` }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <AnimatedSection>
                  <div className="text-center max-w-3xl mx-auto mb-16">
                      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                          Why Manufacturers <span className="text-orange-500">Struggle Online</span>
                      </h2>
                      <p className="text-slate-400 text-lg">
                          Industrial procurement has moved online. If your digital presence lacks technical clarity and authority, you lose the RFQ before the first call.
                      </p>
                  </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {challenges.map((c, idx) => (
                      <AnimatedSection key={idx} delay={idx * 0.1} className="h-full">
                          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-sm border-l-4 border-orange-600 hover:bg-zinc-900 transition-all group h-full relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                  <c.icon size={64} className="text-white" />
                              </div>
                              <div className="w-12 h-12 flex items-center justify-center text-orange-500 mb-6">
                                  <c.icon size={32} />
                              </div>
                              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{c.title}</h3>
                              <p className="text-slate-400 text-sm leading-relaxed">
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

  const SolutionsSection = () => {
    const solutions = [
        { icon: Globe, color: "text-blue-500", title: "Industrial SEO", desc: "Ranking for 'CNC machining Pune' or 'Chemical supplier Mumbai'. We build spec-rich pages matching procurement intent." },
        { icon: FileText, color: "text-orange-500", title: "Smart Catalogs", desc: "Turning PDFs into interactive digital assets with high-res photos, material grades, and downloadable ISO certifications." },
        { icon: Magnet, color: "text-green-500", title: "B2B Lead Gen", desc: "Laser-targeted LinkedIn & Google campaigns reaching Factory Owners, OEMs, and Procurement Managers." },
        { icon: MapPin, color: "text-purple-500", title: "Dealer Network", desc: "Recruitment campaigns to find and onboard qualified distributors in untapped territories across India." },
        { icon: Cpu, color: "text-yellow-500", title: "Tech Websites", desc: "Websites acting as 24/7 technical consultants with RFQ calculators, WhatsApp APIs, and 3D product views." },
        { icon: Video, color: "text-red-500", title: "Factory Tours", desc: "Drone fly-throughs and machinery operation videos that prove your production capacity without a site visit." }
    ];

    return (
      <section id="solutions" className="py-24 bg-black relative border-t border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="mb-16">
                    <span className="text-orange-500 font-bold mb-2 uppercase tracking-widest text-xs">Our Engineering</span>
                    <h2 className="text-3xl sm:text-5xl font-bold text-white">
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Industrial Sales</span>
                    </h2>
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {solutions.map((sol, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.05}>
                        <div className="bg-zinc-900/50 p-8 border border-zinc-800 hover:bg-zinc-900 hover:border-orange-500/50 transition-all group h-full flex flex-col relative">
                            {/* Technical Corner Markers */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-600 group-hover:border-orange-500 transition-colors"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-600 group-hover:border-orange-500 transition-colors"></div>
                            
                            <div className={`w-12 h-12 rounded bg-black border border-zinc-800 flex items-center justify-center ${sol.color} mb-6 shadow-inner`}>
                                <sol.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 font-mono">{sol.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                {sol.desc}
                            </p>
                            <div className="flex items-center text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors cursor-pointer">
                                Explore <ChevronRight size={14} className="ml-1 text-orange-500" />
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </section>
    );
  };

  const CaseStudy = () => (
    <section className="bg-zinc-950 py-24">
        <div className="container mx-auto px-4">
            <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col lg:flex-row">
                
                {/* Visual Dashboard Side */}
                <div className="lg:w-1/2 relative min-h-[400px]">
                    <ParallaxImage src={IMAGES.factory} alt="CNC Factory Floor" className="absolute inset-0 w-full h-full" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-8">
                        {/* Floating Stats Card */}
                        <div className="bg-black/80 backdrop-blur-md border border-zinc-700 p-6 rounded-xl w-full max-w-sm shadow-2xl">
                            <div className="flex items-center justify-between mb-6 border-b border-zinc-700 pb-4">
                                <div className="text-sm font-bold text-slate-300">Live Production Data</div>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                                        <span>Tech Visitors</span>
                                        <span className="text-white">1,900+</span>
                                    </div>
                                    <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[80%]"></div></div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                                        <span>Qualified Inquiries</span>
                                        <span className="text-white">310</span>
                                    </div>
                                    <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden"><div className="h-full bg-orange-500 w-[65%]"></div></div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                                        <span>OEM Contracts</span>
                                        <span className="text-white">03</span>
                                    </div>
                                    <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden"><div className="h-full bg-green-500 w-[40%]"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content Side */}
                <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                    <AnimatedSection>
                        <div className="flex items-center gap-2 mb-4">
                            <Factory size={20} className="text-orange-500" />
                            <div className="text-orange-500 font-bold text-xs uppercase tracking-widest">Case Study: Pune Machinery</div>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">From Empty Inbox to <br/>OEM Supplier.</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            This client relied on exhibitions and agent networks. We implemented a complete industrial marketing ecosystem targeting OEMs. Within 45 days, they secured 3 major supply contracts.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4">
                             <div className="p-4 bg-black border border-zinc-800 rounded-lg">
                                 <div className="text-2xl font-bold text-white">47</div>
                                 <div className="text-xs text-zinc-500 uppercase mt-1">High-Value RFQs</div>
                             </div>
                             <div className="p-4 bg-black border border-zinc-800 rounded-lg">
                                 <div className="text-2xl font-bold text-white">12</div>
                                 <div className="text-xs text-zinc-500 uppercase mt-1">Distributors Added</div>
                             </div>
                        </div>
                    </AnimatedSection>
                </div>

            </div>
        </div>
    </section>
  );

  const IndustriesSection = () => {
    const industries = [
        "Industrial Machinery", "Fabrication & Engineering", 
        "Chemicals & Pharma", "Textile Manufacturing", 
        "Food Processing", "Electronics & Electrical",
        "Packaging Solutions", "Contract Manufacturing"
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Industries We Engineer Growth For</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {industries.map((ind, i) => (
                            <div key={i} className="group p-6 bg-zinc-900 border border-zinc-800 rounded hover:border-orange-500/50 transition-all cursor-default text-center">
                                <div className="mb-3 text-zinc-600 group-hover:text-orange-500 transition-colors flex justify-center">
                                    <Settings size={24} className={i % 2 === 0 ? "animate-spin-slow" : ""} />
                                </div>
                                <span className="text-sm font-medium text-slate-300 group-hover:text-white">{ind}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
  };

  const ContactSection = () => (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Stop Losing Deals to <span className="text-orange-500">Competitors.</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        The machinery, process, and product didn't change for our clients. Only the strategy changed—and the results followed.
                    </p>
                    <div className="bg-black/50 p-8 rounded-xl border border-zinc-800">
                        <h4 className="text-white font-bold mb-6 border-b border-zinc-800 pb-2">Why Manufacturers Choose Adswise?</h4>
                        <ul className="space-y-4">
                            {[
                                "Expertise in technical content writing",
                                "Deep knowledge of industrial buying behavior",
                                "Ability to communicate engineering concepts",
                                "Transparent cost-per-RFQ tracking"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                    <ShieldCheck className="text-green-500 shrink-0" size={18} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 md:p-10 border-t-4 border-orange-600 shadow-2xl rounded-xl relative">
                        <h3 className="text-2xl font-bold mb-8 text-white">Request Strategy Audit</h3>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Name</label>
                                <input required name="name" onChange={handleInputChange} className="w-full px-4 py-3 rounded bg-black border border-zinc-800 text-white focus:border-orange-500 outline-none transition" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Company</label>
                                <input required name="companyName" onChange={handleInputChange} className="w-full px-4 py-3 rounded bg-black border border-zinc-800 text-white focus:border-orange-500 outline-none transition" placeholder="Factory Name" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Email</label>
                            <input required name="email" type="email" onChange={handleInputChange} className="w-full px-4 py-3 rounded bg-black border border-zinc-800 text-white focus:border-orange-500 outline-none transition" placeholder="email@company.com" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Sector</label>
                            <select name="industryType" onChange={handleInputChange} className="w-full px-4 py-3 rounded bg-black border border-zinc-800 text-white focus:border-orange-500 outline-none transition appearance-none">
                                <option value="" className="text-zinc-600">Select Industry</option>
                                <option value="Machinery">Industrial Machinery</option>
                                <option value="Chemicals">Chemicals & Pharma</option>
                                <option value="Fabrication">Fabrication & Engineering</option>
                                <option value="FoodProcessing">Food Processing</option>
                            </select>
                        </div>

                        <div className="mb-8">
                            <label className="block text-xs font-bold uppercase text-zinc-500 mb-1">Requirements</label>
                            <textarea required name="message" onChange={handleInputChange} rows={3} className="w-full px-4 py-3 rounded bg-black border border-zinc-800 text-white focus:border-orange-500 outline-none transition" placeholder="Describe your product & target market..."></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 rounded font-bold text-white text-lg hover:bg-orange-700 transition flex items-center justify-center gap-2 uppercase tracking-wide" style={{ backgroundColor: accentColor }}>
                            <span>Start Growth Engine</span>
                            <Send size={18} />
                        </button>
                    </form>
                </AnimatedSection>
            </div>
        </div>
    </section>
  );

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  return (
    <div className="font-sans bg-black text-slate-100 min-h-screen selection:bg-orange-500 selection:text-white">
      <HeroSection />
      <ChallengesSection />
      <SolutionsSection />
      <CaseStudy />
      <IndustriesSection />
      <ContactSection />
    </div>
  );
};

export default ManufacturingPage;