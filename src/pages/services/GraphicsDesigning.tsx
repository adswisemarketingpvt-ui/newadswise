import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  PenTool, Layers, Image as ImageIcon, Printer, 
  Layout, MousePointerClick, Eye, TrendingUp, 
  Zap, CheckCircle, Plus, Minus, Send, Palette 
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface GraphicsDesigningProps {
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

const GraphicsDesigning: React.FC<GraphicsDesigningProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit
}) => {
  const accentColor = '#FF6B35'; // Adswise Orange
  const secondaryAccent = '#A855F7'; // Creative Purple for Design vibes
  
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
    alert("Thanks! We'll be in touch to build your visual identity.");
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[150px] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-sm font-semibold text-purple-400 mb-6 flex items-center gap-2">
              <Palette size={16} /> Creative Design Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turning Creativity into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500">
                Business Impact
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Ever noticed how some brands just look trustworthy? That’s not luck — it’s design done right. We craft visuals that connect emotionally and drive action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-purple-900/40 transform transition hover:scale-105 hover:bg-purple-700" style={{ backgroundColor: secondaryAccent }}>
                Let’s Design Something Powerful
              </a>
              <a href="#portfolio" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                View Our Work
              </a>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
          >
             <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-purple-900/20 transform rotate-2 hover:rotate-0 transition duration-500">
                
             </div>
             
             {/* Floating Elements */}
             <div className="absolute top-10 -right-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl animate-pulse">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
             </div>
             
             <div className="absolute -bottom-8 -left-8 bg-slate-900 border border-slate-700 p-6 rounded-xl shadow-xl text-white max-w-xs">
                <div className="flex items-center gap-3">
                    <PenTool className="text-orange-500" />
                    <div>
                        <p className="font-bold text-lg">Custom Crafted</p>
                        <p className="text-sm text-slate-400">No generic templates.</p>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const WhyDesignMatters = () => {
    const benefits = [
      { icon: <Eye size={32} />, title: "First Impressions Stick", desc: "You have 3 seconds. Professional design speaks confidence and quality instantly." },
      { icon: <Layers size={32} />, title: "Builds Brand Identity", desc: "Consistency creates recognition. From logos to ads, we make your brand unforgettable." },
      { icon: <MousePointerClick size={32} />, title: "Converts Viewers", desc: "Great design guides the eye and triggers action. It delivers measurable ROI." },
      { icon: <Zap size={32} />, title: "Differentiation", desc: "Stand out in a crowded market. Don't use the same templates as your competitors." }
    ];

    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
              Why Your Business Needs <span className="text-purple-500">Pro Design</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -8, backgroundColor: '#1e293b' }} 
                  className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 h-full group"
                >
                  <div className="mb-4 text-slate-400 group-hover:text-purple-400 transition-colors">{benefit.icon}</div>
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

  const ProcessSection = () => {
    const steps = [
      { num: "01", title: "Discovery", desc: "We understand your goals and audience mindset." },
      { num: "02", title: "Concept", desc: "Brainstorming color psychology and typography." },
      { num: "03", title: "Purpose", desc: "Designing layout and contrast to guide action." },
      { num: "04", title: "Refinement", desc: "Iterative feedback loops until it's perfect." },
      { num: "05", title: "Delivery", desc: "Optimized files for web, print, and social." }
    ];

    return (
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">
                  Our Design Process
                </h2>
                <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                    At {companyName}, design isn’t random creativity — it’s structured art with a business goal.
                </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {steps.map((step, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.1}>
                        <div className="bg-black border border-slate-800 p-6 rounded-lg relative h-full hover:border-orange-500/50 transition-colors">
                            <span className="absolute -top-4 left-4 text-4xl font-bold text-slate-800 select-none">{step.num}</span>
                            <h3 className="text-lg font-bold text-white mt-4 mb-2 relative z-10">{step.title}</h3>
                            <p className="text-slate-400 text-sm relative z-10">{step.desc}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </section>
    );
  };

  const ServicesSection = () => {
    const services = [
        { title: "Logo Designing", icon: <PenTool />, desc: "Memorable logos that represent your mission and values." },
        { title: "Branding Kit", icon: <Palette />, desc: "Color palettes and typography for a unified visual story." },
        { title: "Social Creatives", icon: <ImageIcon />, desc: "Scroll-stopping designs for Instagram, LinkedIn & more." },
        { title: "Web Design", icon: <Layout />, desc: "Visual hierarchy and layout designed to convert visitors." },
        { title: "Print Collateral", icon: <Printer />, desc: "Brochures, cards, and banners that maintain identity offline." }
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                            Core Design Services
                        </h2>
                        <p className="text-slate-400 mb-8">
                            We don’t just design visuals; we design assets that work for your business ecosystem.
                        </p>
                        <div className="space-y-6">
                            {services.map((service, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center text-orange-500 border border-slate-800">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{service.title}</h4>
                                        <p className="text-slate-500">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection delay={0.3}>
                        <div className="grid grid-cols-2 gap-4">
                             <div className="bg-slate-900 rounded-2xl h-64 border border-slate-800 flex items-center justify-center overflow-hidden">
                                
                             </div>
                             <div className="bg-slate-900 rounded-2xl h-64 border border-slate-800 flex items-center justify-center overflow-hidden mt-8">
                                
                             </div>
                             <div className="bg-slate-900 rounded-2xl h-64 border border-slate-800 flex items-center justify-center overflow-hidden -mt-8">
                                
                             </div>
                             <div className="bg-slate-900 rounded-2xl h-64 border border-slate-800 flex items-center justify-center overflow-hidden">
                                
                             </div>
                        </div>
                    </AnimatedSection>
                </div>
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
                        <div className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-2">Case Study</div>
                        <h3 className="text-2xl font-bold text-white mb-4">From Basic to Brand-Worthy</h3>
                        <p className="text-slate-400 mb-6">
                            A Pune construction startup used plain templates. We revamped their identity with a cohesive brand kit and bold ad creatives.
                        </p>
                        <div className="flex gap-8 border-t border-slate-800 pt-6">
                            <div>
                                <div className="text-3xl font-bold text-white">2x</div>
                                <div className="text-xs text-slate-500 uppercase">Social Engagement</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">+40%</div>
                                <div className="text-xs text-slate-500 uppercase">Lead Conversion</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-800 relative min-h-[300px]">
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                            <p className="text-white italic text-sm">"That’s not magic — that’s design rooted in business logic."</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Metrics Bar */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <AnimatedSection delay={0.1}>
                    <div className="text-4xl font-bold text-orange-500 mb-2">90%</div>
                    <p className="text-slate-400">of first impressions are design-based</p>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                    <div className="text-4xl font-bold text-purple-500 mb-2">23%</div>
                    <p className="text-slate-400">faster growth with consistent branding</p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                    <div className="text-4xl font-bold text-green-500 mb-2">45%</div>
                    <p className="text-slate-400">higher CTR on professional ad creatives</p>
                </AnimatedSection>
            </div>
        </div>
    </section>
  );

  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const faqs = [
        { q: "What’s the difference between a freelancer and an agency?", a: "A freelancer focuses on visuals. We tie design to brand strategy, market research, and conversion goals." },
        { q: "How long does a project take?", a: "Logos take 5–7 days. Full brand kits or campaign creatives usually range from 2–3 weeks." },
        { q: "Can you redesign existing logos?", a: "Yes. We specialize in brand revamps — modernizing visuals while keeping your core identity intact." },
        { q: "Do you provide editable files?", a: "Absolutely. We deliver editable source files (AI, PSD, PNG, JPG) for your team." },
        { q: "How do you ensure it matches my brand?", a: "We conduct a brand audit and moodboard session to align visuals with your positioning." }
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">FAQs About Graphics Designing</h2>
                </AnimatedSection>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                                <button 
                                    type="button"
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
                        Ready to Turn Your Visuals Into Your <span className="text-orange-500">Biggest Advantage?</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8">
                        Graphics Designing isn’t a side task; it’s your silent salesperson. Let’s design visuals that don’t just look good, but work for your business.
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mt-8">
                        
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <form onSubmit={handleSubmit} className="bg-black shadow-2xl rounded-2xl p-8 border border-slate-800">
                        <h3 className="text-2xl font-bold mb-6 text-white">Start Your Design Project</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                <input required name="name" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input required name="email" type="email" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="john@company.com" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Service Needed</label>
                            <select name="serviceType" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition">
                                <option value="" className="bg-slate-900">Select a Service</option>
                                <option value="Logo Design">Logo Design</option>
                                <option value="Brand Kit">Full Brand Kit</option>
                                <option value="Social Media">Social Media Creatives</option>
                                <option value="Website Design">Website/Landing Page</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Tell us about your brand</label>
                            <textarea required name="message" onChange={handleInputChange} rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="What is your business goal?"></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 transition transform hover:-translate-y-1 flex items-center justify-center gap-2" style={{ backgroundColor: secondaryAccent }}>
                            <span>Build My Brand</span>
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
              <p className="mb-8">Building Visual Identities That Sell.</p>
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
      <WhyDesignMatters />
      <ProcessSection />
      <ServicesSection />
      <CaseStudy />
      <FAQSection />
      {/* <ContactSection />
      <Footer /> */}
    </div>
  );
};

export default GraphicsDesigning;