import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Search, TrendingUp, MapPin, Target, Wrench, Link, 
  BarChart, CheckCircle, Plus, Minus, Send, AlertTriangle, 
  FileText, Code, Users, Building, Activity, Shield 
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface SEOServiceProps {
  companyName?: string;
  onContactSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  website?: string;
  serviceType: string;
  message: string;
}

// ============================================================================
// ANIMATED SECTION WRAPPER
// ============================================================================

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, className = '', delay = 0 
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

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const SEOService: React.FC<SEOServiceProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit
}) => {
  const accentColor = '#FF6B35'; // Adswise Orange
  const secondaryAccent = '#10B981'; // Growth Green
  
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', website: '', serviceType: '', message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Thanks! We'll be in touch to build your organic growth plan.");
    setFormData({ name: '', email: '', website: '', serviceType: '', message: '' });
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-600 rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[150px] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-sm font-semibold text-green-400 mb-6 flex items-center gap-2">
              <TrendingUp size={16} /> Search Engine Optimization
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Rank for Customers, Not Just{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-500">
                Random Keywords
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              At {companyName}, we focus on one thing: ranking for buyer-intent searches that bring real customers. Whether in Pune, Mumbai, or across Maharashtra, our local-first SEO turns traffic into qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-orange-900/40 transform transition hover:scale-105 hover:bg-orange-700" style={{ backgroundColor: accentColor }}>
                Get Your Free SEO Audit
              </a>
              <a href="#process" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                See Our 7-Step Process
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-green-900/20 transform rotate-2 hover:rotate-0 transition duration-500 p-4 bg-slate-950 min-h-[300px] flex items-center justify-center">
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            <div className="absolute top-10 -right-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl animate-pulse">
                <div className="flex items-center gap-3">
                    <TrendingUp className="text-green-500" />
                    <div>
                        <p className="font-bold text-lg text-white">Ranking Up</p>
                        <p className="text-sm text-slate-400">"plumbers in pune" <strong>#3</strong></p>
                    </div>
                </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-slate-900 border border-slate-700 p-6 rounded-xl shadow-xl text-white max-w-xs">
              <div className="flex items-center gap-3">
                <Target className="text-orange-500" />
                <div>
                  <p className="font-bold text-lg">Buyer-Intent Focus</p>
                  <p className="text-sm text-slate-400">Targeting real customers.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const WhySEOSection = () => {
    const benefits = [
      { icon: <Shield size={32} />, title: "Builds Trust & Credibility", desc: "People trust organic results more than ads. Ranking naturally signals expertise and relevance." },
      { icon: <TrendingUp size={32} />, title: "Compounding Authority", desc: "Paid ads stop when you stop paying. SEO builds authority that compounds and works for you 24/7." },
      { icon: <BarChart size={32} />, title: "Lowers Acquisition Cost", desc: "SEO traffic is 'free' (earned). Over time, it delivers a much higher ROI than relying only on paid channels." },
    ];

    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
              Why SEO Wins—Even When <span className="text-green-500">Ads Feel Easier</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -8, backgroundColor: '#1e293b' }} 
                  className="bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-800 h-full group"
                >
                  <div className="mb-4 text-slate-400 group-hover:text-green-400 transition-colors">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const DifferenceSection = () => {
    const differentiators = [
        { icon: <MapPin />, title: "Local-First Strategy", desc: "We rank you in Pune, Mumbai, and Maharashtra first. Winning locally is the fastest path to winning bigger." },
        { icon: <Target />, title: "Buyer-Intent Mapping", desc: "We map keywords to Awareness, Consideration, and Purchase stages to attract visitors who actually convert." },
        { icon: <Wrench />, title: "Technical SEO Fixes", desc: "We fix the roots: crawl errors, site speed, Core Web Vitals, and structured data. No shortcuts." },
        { icon: <Link />, title: "Authority-Building", desc: "We focus on high-quality niche backlinks, local citations, and PR mentions that build real, lasting authority." }
    ];
    
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">
                        What Makes {companyName}’s SEO Different
                    </h2>
                    <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                        We don’t chase random keywords or inflate traffic numbers. We focus on fundamentals that drive real business results.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {differentiators.map((item, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <motion.div 
                                whileHover={{ borderColor: accentColor }}
                                className="bg-black border border-slate-800 p-6 rounded-xl relative h-full transition-colors"
                            >
                                <div className="mb-4 text-orange-500">{React.cloneElement(item.icon, { size: 32 })}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
                
                <AnimatedSection className="mt-16">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-center min-h-[200px] text-slate-500">
                        
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
  };

  const ProcessSection = () => {
    const steps = [
      { num: "01", title: "Audit & Benchmarking", desc: "We break down where you stand, what competitors are doing, and what’s technically broken." },
      { num: "02", title: "Keyword Mapping", desc: "We map buyer-intent keywords to site pages, blogs, and future content clusters." },
      { num: "03", title: "On-Page Optimization", desc: "Making every page rank-ready with titles, metas, H1s, internal linking, and content upgrades." },
      { num: "04", title: "Technical Cleanup", desc: "Fixing what Google hates: redirect chains, broken links, slow pages, and poor site structure." },
      { num: "05", title: "Local SEO Boost", desc: "Optimizing your Google Business Profile, local pages, citations, and map rankings." },
      { num: "06", title: "Authority Building", desc: "Off-page SEO to build trust and authority that stands the test of algorithm updates." },
      { num: "07", title: "Monitoring & Reporting", desc: "Tracking keyword movement, traffic quality, user behavior, and (most importantly) leads." }
    ];

    return (
      <section id="process" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">
                    Our SEO Process
                </h2>
                <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                    Search Engine Optimization (SEO) isn't magic. It's a methodical, 7-step process focused on fundamentals.
                </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.1}>
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg relative h-full hover:border-green-500/50 transition-colors">
                            <span className="absolute -top-4 left-4 text-4xl font-bold text-slate-800 select-none">{step.num}</span>
                            <h3 className="text-lg font-bold text-white mt-4 mb-2 relative z-10">{step.title}</h3>
                            <p className="text-slate-400 text-sm relative z-10">{step.desc}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>

            <AnimatedSection className="mt-16">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-center min-h-[200px] text-slate-500">
                    
                </div>
            </AnimatedSection>
        </div>
      </section>
    );
  };

  const CaseStudy = () => (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="max-w-4xl mx-auto bg-black rounded-3xl overflow-hidden border border-slate-800 flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                        <div className="text-green-400 font-bold text-sm uppercase tracking-wider mb-2">Real Example</div>
                        <h3 className="text-2xl font-bold text-white mb-4">Local SEO Transformation</h3>
                        <p className="text-slate-400 mb-6">
                            A Pune-based diagnostic center was stuck on page 3. After restructuring their site and optimizing local search, they dominated their market.
                        </p>
                        <div className="flex gap-8 border-t border-slate-800 pt-6">
                            <div>
                                <div className="text-3xl font-bold text-white">Top 3</div>
                                <div className="text-xs text-slate-500 uppercase">Rankings for 14 Keywords</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">+62%</div>
                                <div className="text-xs text-slate-500 uppercase">Organic Calls</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">-41%</div>
                                <div className="text-xs text-slate-500 uppercase">Paid Ad Spend</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-800 relative min-h-[300px] flex items-center justify-center text-slate-600">
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                            <p className="text-white italic text-sm">"SEO works when it’s done with clarity, consistency, and real strategy. Not shortcuts."</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    </section>
  );
  
  const DeliverablesSection = () => {
    const deliverables = [
        "Local-first keyword strategy", "Full technical cleanup", "On-page SEO & content improvements",
        "High-quality link building", "Google Business Profile optimization", "Monthly SEO reporting",
        "Competitor monitoring", "Blog content roadmap", "Conversion-focused SEO"
    ];
    
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                            What You Get with {companyName}
                        </h2>
                        <p className="text-slate-400 mb-8 text-lg">
                            We deliver a comprehensive SEO strategy focused on one thing: <strong>conversions, not vanity metrics</strong>. We don't just get you traffic; we get you traffic that's ready to buy.
                        </p>
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-center min-h-[200px] text-slate-500">
                           
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection delay={0.2}>
                        <div className="space-y-4">
                            {deliverables.map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                                    className="flex items-start gap-3 p-4 bg-slate-900 rounded-lg border border-slate-800"
                                >
                                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                                    <span className="text-slate-300">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
  };

  const TruthsSection = () => {
    const truths = [
        "You won’t rank in 7 days.",
        "You can’t outrank competitors with thin content.",
        "Buying cheap backlinks kills your domain.",
        "Google rewards quality, not quantity.",
        "SEO without CRO is wasted effort.",
        "You MUST fix technical issues or rankings won’t stick."
    ];
    
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
                        Hard Truths Most People Ignore About SEO
                    </h2>
                    <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">
                        We're brutally honest. If any agency promises "page 1 in 30 days," run.
                    </p>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {truths.map((truth, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <div className="bg-slate-900 p-6 rounded-xl shadow-lg border border-red-500/30 h-full flex items-center gap-4">
                                <AlertTriangle size={28} className="text-red-500 flex-shrink-0" />
                                <p className="text-slate-300 font-medium">{truth}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
  };

  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const faqs = [
      { q: "How long does SEO take?", a: "Typically 2–4 months to see real movement, depending on competition and your current foundation." },
      { q: "Do I need SEO if I’m already running ads?", a: "Yes. Ads stop when the budget stops. SEO works 24/7 and lowers long-term acquisition cost." },
      { q: "What makes SEO at Adswise Marketing different?", a: "Our local-first strategy, technical rigor, and buyer-intent keyword approach. We don’t chase traffic—we pursue conversions." },
      { q: "Can you handle multi-location SEO?", a: "Absolutely. We optimize for city-level (Pune, Mumbai), state-level (Maharashtra), and hyperlocal searches." },
      { q: "Is content included?", a: "Yes. We create SEO-focused content calendars and optimize existing pages as part of our strategy." }
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
                </AnimatedSection>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                                <button 
                                type='button'

                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-slate-800 transition"
                                >
                                    <span className="font-semibold text-slate-200">{faq.q}</span>
                                    {openFAQ === index ? <Minus size={20} color={accentColor} /> : <Plus size={20} color={accentColor} />}
                                </button>
                                <AnimatePresence>
                                    {openFAQ === index && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }} 
                                            animate={{ height: 'auto', opacity: 1 }} 
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-6 pb-4"
                                        >
                                            <p className="text-slate-400 pt-2 border-t border-slate-800">{faq.a}</p>
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

  const ContactSection = () => (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
                <AnimatedSection>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                        Ready to Dominate Your <span className="text-green-500">Local Search Market?</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8">
                        At the end of the day, SEO is about earning visibility, not renting it. If you want long-term growth in Pune, Mumbai, and Maharashtra, your business needs strategy, structure, and consistent execution. That’s exactly what {companyName} delivers.
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mt-8 min-h-[250px] bg-slate-900 flex items-center justify-center text-slate-600">
                        
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <form onSubmit={handleSubmit} className="bg-black shadow-2xl rounded-2xl p-8 border border-slate-800">
                        <h3 className="text-2xl font-bold mb-6 text-white">Get Your Free SEO Strategy Call</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input required name="email" value={formData.email} type="email" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Service Needed</label>
                            <select name="serviceType" value={formData.serviceType} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition">
                                <option value="" className="bg-slate-900">Select a Service</option>
                                <option value="Local SEO">Local SEO (Pune/Mumbai)</option>
                                <option value="Technical Audit">Technical SEO Audit</option>
                                <option value="Full Strategy">Full SEO Strategy</option>
                                <option value="Multi-location">Multi-location SEO</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Tell us about your business goals</label>
                            <textarea required name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="e.g., 'I want to get more leads from Pune...'"></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg shadow-green-900/40 hover:shadow-green-900/60 transition transform hover:-translate-y-1 flex items-center justify-center gap-2" style={{ backgroundColor: secondaryAccent }}>
                            <span>Build My Visibility</span>
                            <Send size={20} />
                        </button>
                    </form>
                </AnimatedSection>
            </div>
        </div>
    </section>
  );

  const Footer = () => (
      <footer className="bg-black text-slate-500 py-12 border-t border-slate-900">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-white text-2xl font-bold mb-4">Adswise Marketing</h2>
              <p className="mb-8">Honest, Data-Driven SEO That Builds Authority.</p>
              <div className="text-sm">
                  © {new Date().getFullYear()} Adswise Marketing. All rights reserved.
              </div>
          </div>
      </footer>
  );

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  return (
    <div className="font-sans bg-black text-slate-100 min-h-screen">
      <HeroSection />
      <WhySEOSection />
      <DifferenceSection />
      <ProcessSection />
      <CaseStudy />
      <DeliverablesSection />
      <TruthsSection />
      <FAQSection />
      {/* <ContactSection />
      <Footer /> */}
    </div>
  );
};

export default SEOService;