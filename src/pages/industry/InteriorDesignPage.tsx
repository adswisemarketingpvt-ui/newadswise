import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Palette, Camera, Layout, Search, 
  Mail, Instagram, TrendingUp,
  Smartphone, MapPin, PlayCircle, 
  CheckCircle2, ArrowRight, Brush, 
  PenTool, Layers, Star
} from 'lucide-react';

// ============================================================================
// ASSETS & CONFIG
// ============================================================================

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
  texture: "https://www.transparenttextures.com/patterns/cubes.png",
  strategy: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  results: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070&auto=format&fit=crop",
  service1: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2000&auto=format&fit=crop",
  service2: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2000&auto=format&fit=crop",
  service3: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop"
};

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface InteriorDesignPageProps {
  companyName?: string;
  onContactSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  website: string;
  serviceInterest: string;
  message: string;
}

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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
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
                style={{ y, scale: 1.1 }}
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
    );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const InteriorDesignPage: React.FC<InteriorDesignPageProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', website: '', serviceInterest: '', message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Thank you! We're reviewing your portfolio potential.");
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <header className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black text-white">
          {/* Background Image with Parallax */}
          <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-black/60 z-10"></div>
             <img src={IMAGES.hero} alt="Luxury Interior" className="w-full h-full object-cover opacity-80" />
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-20 pt-20">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mb-6 md:mb-8"
              >
                <div className="inline-flex items-center gap-2 px-6 py-2 border border-yellow-500/30 rounded-full bg-black/50 backdrop-blur-md text-yellow-500 uppercase tracking-widest text-[10px] md:text-xs font-bold shadow-2xl">
                   <Brush size={12} /> Digital Aesthetics
                </div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-6xl md:text-7xl font-light mb-6 md:mb-8 leading-tight font-serif"
              >
                Design needs to be <br />
                <span className="italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600">
                  Seen to be Sold.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-slate-300 mb-8 md:mb-12 max-w-xl font-light leading-relaxed"
              >
                We curate digital experiences for Interior Designers & Architects. Transform your online portfolio into a client-generating masterpiece.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 sm:gap-6"
              >
                 <button className="px-8 py-4 bg-white text-black font-bold text-sm md:text-base hover:bg-yellow-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                    View Strategies <ArrowRight size={18} />
                 </button>
                 <button className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-light text-sm md:text-base hover:border-yellow-500 hover:text-yellow-500 transition-all w-full sm:w-auto">
                    Book Free Audit
                 </button>
              </motion.div>
            </div>
          </div>

          {/* Hero Footer Stats - Hidden on very small screens, visible on md+ */}
          <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/80 backdrop-blur-md py-6 z-20">
            <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
                {[
                    { label: "Designers Scaled", val: "50+" },
                    { label: "Lead Increase", val: "40%" },
                    { label: "Portfolio Views", val: "1.2M+" }
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="text-xl md:text-2xl font-serif text-yellow-500">{stat.val}</div>
                        <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>
          </div>
        </header>
    );
  };

  const TrendsSection = () => (
    <section className="py-20 md:py-24 bg-black relative">
        <div className="absolute inset-0 opacity-10 bg-repeat" style={{ backgroundImage: `url(${IMAGES.texture})` }}></div>
        <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 md:mb-16 text-white">
                    Why Digital Matters in 2025
                </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                    { icon: Smartphone, title: "Mobile Discovery", desc: "Affluent homeowners use Pinterest & Instagram on mobile to find inspiration." },
                    { icon: MapPin, title: "Local SEO", desc: "'Interior designers near me' searches have grown 300% in the last 2 years." },
                    { icon: PlayCircle, title: "Video Tours", desc: "Before-and-after reels and walkthroughs drive higher engagement than static photos." }
                ].map((item, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.2}>
                        <div className="group relative p-8 bg-zinc-900/50 border border-zinc-800 hover:border-yellow-500/50 transition-all duration-500 h-full overflow-hidden rounded-xl">
                            {/* Hover Glow */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all"></div>
                            
                            <item.icon className="text-slate-500 group-hover:text-yellow-500 mb-6 transition-colors transform group-hover:scale-110 duration-300" size={32} />
                            <h3 className="text-xl text-white font-serif mb-4">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            
                            <div className="w-8 h-1 bg-yellow-600 mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
  );

  const ServiceCard = ({ title, icon: Icon, desc, tags, index, image }: any) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="group relative bg-zinc-900 border border-zinc-800 h-full overflow-hidden rounded-xl"
      >
        {/* Background Image Reveal on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
            <img src={image} alt="" className="w-full h-full object-cover grayscale" />
        </div>

        <div className="relative z-10 p-8 flex flex-col h-full">
            <div className="mb-6 flex justify-between items-start">
                <div className="p-3 bg-black/80 backdrop-blur border border-zinc-700 rounded-lg text-yellow-500 group-hover:text-white group-hover:bg-yellow-600 transition-colors shadow-lg">
                    <Icon size={24} />
                </div>
                <span className="text-xs font-mono text-zinc-600">0{index + 1}</span>
            </div>
            
            <h3 className="text-2xl font-serif text-white mb-4 group-hover:translate-x-1 transition-transform">{title}</h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow group-hover:text-slate-300 transition-colors">
                {desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag: string, i: number) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-black/50 border border-zinc-700 text-zinc-400 rounded-sm">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </motion.div>
    );
  };

  const ServicesSection = () => {
    const services = [
        { 
            title: "Visual SEO", 
            icon: Search, 
            image: IMAGES.service1,
            desc: "Optimizing your images for Google Images & Pinterest search. We target keywords like 'Modern Living Room Design'.",
            tags: ["Google Images", "Alt Tags", "Local SEO"]
        },
        { 
            title: "Social Aesthetics", 
            icon: Instagram, 
            image: IMAGES.service2,
            desc: "Curating your Instagram feed to look like a high-end magazine. Reels, Stories, and engagement management.",
            tags: ["Reels", "Content", "Growth"]
        },
        { 
            title: "High-Intent Ads", 
            icon: TrendingUp, 
            image: IMAGES.service3,
            desc: "Stop boosting random posts. We run targeted campaigns finding homeowners actively looking for renovation.",
            tags: ["Google Ads", "Meta Ads", "Retargeting"]
        },
        { 
            title: "Portfolio Web Design", 
            icon: Layout, 
            image: IMAGES.hero,
            desc: "Sleek, minimalistic websites that let your work speak. Fast loading and built to convert visitors.",
            tags: ["UX/UI", "Speed", "Conversion"]
        },
        { 
            title: "Content Marketing", 
            icon: PenTool, 
            image: IMAGES.strategy,
            desc: "Establish authority with blogs about '2025 Trends' or 'Sustainable Materials'. Be the expert they trust.",
            tags: ["Blogs", "Guides", "Authority"]
        },
        { 
            title: "Lead Nurturing", 
            icon: Mail, 
            image: IMAGES.results,
            desc: "Automated email sequences that warm up leads who downloaded your brochure but haven't booked yet.",
            tags: ["Automation", "CRM", "Booking"]
        }
    ];

    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="mb-16 md:mb-20 max-w-2xl">
                    <span className="text-yellow-500 font-bold tracking-widest text-xs uppercase mb-2 block pl-1">Our Palette of Services</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">Crafting Your <br/>Digital Identity</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <ServiceCard key={i} index={i} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
  };

  const StrategySection = () => (
    <section className="py-20 md:py-24 bg-zinc-950 border-y border-zinc-900 overflow-hidden">
        <div className="container mx-auto px-4">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 text-white">The Adswise Design Process</h2>
            </AnimatedSection>
            
            <div className="relative">
                {/* Connecting Line - Vertical on Mobile, Horizontal on Desktop */}
                <div className="absolute left-8 top-0 h-full w-px bg-zinc-800 md:hidden"></div>
                <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-900 to-transparent"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                    {[
                        { title: "Audit & Trends", step: "01", desc: "Analyzing competitors & design trends." },
                        { title: "Persona Build", step: "02", desc: "Identifying your ideal high-ticket client." },
                        { title: "Content Creation", step: "03", desc: "Filming sites & curating feeds." },
                        { title: "Optimization", step: "04", desc: "Refining ads based on data." }
                    ].map((item, i) => (
                        <AnimatedSection key={i} delay={i * 0.2}>
                            <div className="relative z-10 flex md:flex-col items-start md:items-center text-left md:text-center pl-20 md:pl-0">
                                {/* Number Circle */}
                                <div className="absolute left-0 top-0 md:relative md:top-auto md:left-auto w-16 h-16 rounded-full bg-zinc-950 border border-yellow-500/30 flex items-center justify-center text-yellow-500 font-serif text-xl mb-4 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );

  const ResultsSection = () => {
     return (
        <section className="bg-black flex flex-col md:flex-row min-h-[600px]">
            <div className="md:w-1/2 px-6 py-16 md:p-20 flex flex-col justify-center bg-zinc-950">
                <AnimatedSection>
                    <div className="inline-block p-2 bg-yellow-900/10 rounded mb-4">
                        <Star className="text-yellow-500 fill-yellow-500" size={20} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Measurable <span className="text-yellow-500">Elegance</span></h2>
                    <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                        Design is subjective. Results are not. We track every click, every portfolio view, and every consultation request to ensure your ROI.
                    </p>
                    <div className="space-y-8 max-w-md">
                        {[
                            { label: "Website Traffic Growth", val: "60%" },
                            { label: "Social Engagement", val: "50%" },
                            { label: "Qualified Leads", val: "40%" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm text-slate-300 mb-2 font-medium">
                                    <span>{stat.label}</span>
                                    <span className="text-yellow-500">{stat.val}</span>
                                </div>
                                <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: stat.val }}
                                        transition={{ duration: 1.5, delay: i * 0.2 }}
                                        className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400"
                                    ></motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
            
            {/* Image Side with Floating Cards */}
            <div className="md:w-1/2 relative min-h-[400px] md:min-h-auto">
                <ParallaxImage src={IMAGES.results} alt="Interior Design Results" className="w-full h-full absolute inset-0" />
                
                <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/20">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square bg-black/80 backdrop-blur-xl border border-zinc-700 p-6 flex flex-col justify-between rounded-2xl shadow-2xl"
                        >
                            <TrendingUp className="text-green-500" size={32} />
                            <div>
                                <div className="text-3xl text-white font-serif mb-1">25+</div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-widest">Projects Booked</div>
                            </div>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="aspect-square bg-yellow-500/90 backdrop-blur-xl p-6 flex flex-col justify-between rounded-2xl shadow-2xl mt-8"
                        >
                            <Layers className="text-black" size={32} />
                            <div>
                                <div className="text-3xl text-black font-serif mb-1">Top 3</div>
                                <div className="text-[10px] text-black/70 uppercase tracking-widest font-bold">Local Ranking</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
     );
  };

  const ChecklistSection = () => (
      <section className="py-20 md:py-28 bg-zinc-950">
          <div className="container mx-auto px-4 max-w-5xl">
              <AnimatedSection>
                  <div className="bg-black border border-zinc-800 p-8 md:p-16 rounded-3xl relative overflow-hidden shadow-2xl">
                      {/* Decorative Background Elements */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px]"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-900/10 rounded-full blur-[80px]"></div>
                      
                      <div className="relative z-10 text-center mb-12">
                         <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">SEO Checklist for Designers</h3>
                         <p className="text-slate-400">Essential elements we implement to get your portfolio found.</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 relative z-10">
                          {[
                              "Alt text on all portfolio images",
                              "Schema markup for local business",
                              "Fast mobile page loads",
                              "Educational design blog content",
                              "Google Business Profile optimization",
                              "Backlinks from suppliers & directories"
                          ].map((item, i) => (
                              <motion.div 
                                whileHover={{ x: 5 }}
                                key={i} 
                                className="flex items-center gap-4 text-slate-300 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800/50"
                              >
                                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                                     <CheckCircle2 size={16} className="text-yellow-500" />
                                  </div>
                                  <span className="text-sm font-medium">{item}</span>
                              </motion.div>
                          ))}
                      </div>
                  </div>
              </AnimatedSection>
          </div>
      </section>
  );

  const ContactSection = () => (
    <section className="py-20 md:py-24 bg-black relative">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <AnimatedSection>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
                        Ready to Showcase <br/> Your <span className="text-yellow-500 italic">Vision?</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-10 font-light leading-relaxed">
                        We help you find clients who appreciate your style and budget. Let's build a brand that matches the quality of your interiors.
                    </p>
                    
                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all shadow-lg">
                                <Palette size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">Tailored Strategy</h4>
                                <p className="text-sm text-slate-500 group-hover:text-yellow-500/80 transition-colors">Custom marketing plans for your unique style.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all shadow-lg">
                                <Camera size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg">In-House Production</h4>
                                <p className="text-sm text-slate-500 group-hover:text-yellow-500/80 transition-colors">We create the content. You do the design.</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 md:p-12 border border-zinc-800 shadow-2xl relative rounded-3xl overflow-hidden">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-bl-full"></div>
                        
                        <h3 className="text-2xl font-serif text-white mb-8">Request Portfolio Audit</h3>
                        
                        <div className="space-y-5">
                            <input 
                                required 
                                name="name" 
                                onChange={handleInputChange} 
                                className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white placeholder-zinc-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all" 
                                placeholder="Your Name" 
                            />
                            <input 
                                required 
                                name="email" 
                                type="email" 
                                onChange={handleInputChange} 
                                className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white placeholder-zinc-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all" 
                                placeholder="Email Address" 
                            />
                            <input 
                                name="website" 
                                onChange={handleInputChange} 
                                className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white placeholder-zinc-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all" 
                                placeholder="Website / Instagram Link" 
                            />
                            <select 
                                name="serviceInterest" 
                                onChange={handleInputChange} 
                                className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white placeholder-zinc-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all appearance-none"
                            >
                                <option value="" className="text-zinc-500">Interested In...</option>
                                <option value="Social Media">Social Media Management</option>
                                <option value="SEO">Local SEO</option>
                                <option value="Ads">Lead Generation Ads</option>
                                <option value="Full Package">Full Branding Package</option>
                            </select>
                            <textarea 
                                name="message" 
                                rows={3} 
                                onChange={handleInputChange} 
                                className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white placeholder-zinc-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all" 
                                placeholder="Tell us about your design firm..." 
                            />
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit" 
                            className="mt-8 w-full py-5 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-yellow-500/20 transition-all flex items-center justify-center gap-2"
                        >
                            Get My Audit <ArrowRight size={20} />
                        </motion.button>
                    </form>
                </AnimatedSection>
            </div>
        </div>
    </section>
  );

  const Footer = () => (
      <footer className="bg-black text-zinc-600 py-12 border-t border-zinc-900 text-center text-sm">
          <div className="mb-4 text-white font-serif text-xl tracking-wider">Adswise Marketing</div>
          <p className="mb-4">Interior Design Digital Specialists</p>
          <div className="flex justify-center gap-4 text-xs uppercase tracking-widest text-zinc-700">
             <span>Instagram</span>
             <span>LinkedIn</span>
             <span>Pinterest</span>
          </div>
      </footer>
  );

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  return (
    <div className="font-sans bg-black text-slate-100 min-h-screen selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      <HeroSection />
      <TrendsSection />
      <ServicesSection />
      <StrategySection />
      <ResultsSection />
      <ChecklistSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default InteriorDesignPage;