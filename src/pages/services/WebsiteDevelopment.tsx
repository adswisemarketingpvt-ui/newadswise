import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Code, Layout, Smartphone, Globe, Zap, Brain, 
  Search, Lock, BarChart, CheckCircle, ArrowRight, 
  Plus, Minus, Send, Monitor 
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface WebsiteDevelopmentProps {
  companyName?: string;
  onContactSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  currentWebsite?: string;
  projectType: string;
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

const WebsiteDevelopment: React.FC<WebsiteDevelopmentProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit
}) => {
  const accentColor = '#FF6B35'; // Adswise Orange
  const techColor = '#06b6d4'; // Cyan/Teal for Code/Tech vibes
  
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', currentWebsite: '', projectType: '', message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Project inquiry received! We'll analyze your digital presence shortly.");
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900/20 rounded-full blur-[120px]"></div>
      
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm font-semibold text-cyan-400 mb-6">
              <Code size={16} /> Full-Stack Web Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Website is Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-500">
                24/7 Salesperson
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              A website isn’t just a digital brochure. We build psychology-driven, SEO-ready websites that convert clicks into clients. Fast, secure, and built for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-cyan-900/30 transform transition hover:scale-105 hover:bg-cyan-600" style={{ backgroundColor: techColor }}>
                Build My Site
              </a>
              <a href="#portfolio" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                View Portfolio
              </a>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
          >
             <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-cyan-900/10 bg-slate-900/80 backdrop-blur-md p-2">
                 {/* Mockup Window */}
                 <div className="bg-black rounded-xl border border-slate-800 overflow-hidden">
                    <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 px-3 py-1 bg-slate-800 rounded text-xs text-slate-500 flex-1 text-center font-mono">
                            www.yourbusiness.com
                        </div>
                    </div>
                    <div className="p-8 relative h-80 bg-slate-950">
                        {/* Wireframe Content */}
                        <div className="w-3/4 h-8 bg-slate-800 rounded mb-4 animate-pulse"></div>
                        <div className="w-1/2 h-4 bg-slate-800 rounded mb-8 animate-pulse"></div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-32 bg-slate-900 rounded border border-slate-800"></div>
                            <div className="h-32 bg-slate-900 rounded border border-slate-800"></div>
                            <div className="h-32 bg-slate-900 rounded border border-slate-800"></div>
                        </div>
                        
                        {/* Floating Badge */}
                        <div className="absolute bottom-6 right-6 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold backdrop-blur-md">
                            <Zap size={16} /> Speed: 99/100
                        </div>
                    </div>
                 </div>
             </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const WhyItMatters = () => (
    <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                        Why Development Matters <span className="text-cyan-500">More Than Ever</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        When someone hears about your business, the first thing they do is Google you. If your website feels outdated, slow, or confusing, they’ll bounce before you even know they were there.
                    </p>
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <AnimatedSection delay={0.1}>
                    <div className="text-5xl font-bold text-white mb-2">70%</div>
                    <p className="text-slate-400 uppercase tracking-wider text-sm">Of Audience Visits From Mobile</p>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                    <div className="text-5xl font-bold text-red-500 mb-2">&lt; 3s</div>
                    <p className="text-slate-400 uppercase tracking-wider text-sm">Load Time to Retain Visitors</p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                    <div className="text-5xl font-bold text-cyan-500 mb-2">24/7</div>
                    <p className="text-slate-400 uppercase tracking-wider text-sm">Availability for Lead Gen</p>
                </AnimatedSection>
            </div>
        </div>
    </section>
  );

  const Differentiation = () => {
    const pillars = [
      { icon: <Brain />, title: "Psychology Design", desc: "We design for action. Colors, CTAs, and scroll depth are engineered to convert." },
      { icon: <Search />, title: "SEO Architecture", desc: "Clean code and schema markup ensure you rank on Google from day one." },
      { icon: <Smartphone />, title: "Mobile-First", desc: "Responsive sites that adapt beautifully to every screen size." },
      { icon: <Globe />, title: "Local Optimization", desc: "Map embedding and local keywords to drive traffic in Pune & Mumbai." },
      { icon: <Zap />, title: "Hyper Speed", desc: "We compress and cache to ensure load times under 2.5 seconds." }
    ];

    return (
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white text-center">
                    The {companyName} Difference
                </h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {pillars.map((item, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.1}>
                        <div className="bg-black p-6 rounded-xl border border-slate-800 h-full hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group">
                            <div className="mb-4 bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </section>
    );
  };

  const ProcessSection = () => {
    const steps = [
      { title: "Discovery", desc: "Understanding goals, audience, and purpose." },
      { title: "Wireframing", desc: "Mapping user journeys and UX flow." },
      { title: "Development", desc: "Coding robust backends with clean architecture." },
      { title: "Testing", desc: "Rigorous checks across devices and browsers." },
      { title: "Maintenance", desc: "Ongoing security updates and performance tracking." }
    ];

    return (
      <section id="process" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-white text-center">
                  Our Development Process
                </h2>
            </AnimatedSection>

            <div className="relative">
                {/* Horizontal Line for Desktop */}
                <div className="hidden md:block absolute top-6 left-0 w-full h-1 bg-slate-900">
                     <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-cyan-900 to-cyan-500"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {steps.map((step, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1} className="relative">
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-12 h-12 rounded-full bg-black border-4 border-slate-900 flex items-center justify-center text-cyan-500 font-bold z-10 group-hover:border-cyan-500 transition-colors shadow-lg">
                                    {idx + 1}
                                </div>
                                <div className="mt-6 p-6 bg-slate-900 rounded-xl border border-slate-800 w-full hover:-translate-y-2 transition-transform duration-300">
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-slate-400 text-xs">{step.desc}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </div>
      </section>
    );
  };

  const CaseStudy = () => (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="max-w-5xl mx-auto bg-black rounded-3xl overflow-hidden border border-slate-700 flex flex-col md:flex-row shadow-2xl">
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                        <div className="text-cyan-500 font-bold text-sm uppercase tracking-wider mb-2">Transformation Story</div>
                        <h3 className="text-3xl font-bold text-white mb-4">Pune Architecture Firm Revamp</h3>
                        <p className="text-slate-400 mb-6">
                            Their old site had low engagement and poor load speed. We built a fast, mobile-optimized portfolio site with local SEO integration.
                        </p>
                        <div className="grid grid-cols-2 gap-6 border-t border-slate-800 pt-6">
                            <div>
                                <div className="text-4xl font-bold text-white text-green-400">+58%</div>
                                <div className="text-xs text-slate-500 uppercase mt-1">Organic Traffic</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white text-green-400">2x</div>
                                <div className="text-xs text-slate-500 uppercase mt-1">Lead Inquiries</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-950 relative flex items-center justify-center overflow-hidden border-l border-slate-800">
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                         <div className="relative z-10 text-center">
                            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 mb-4 opacity-50 scale-90">
                                <p className="text-red-500 text-xs font-mono">Error: Slow Load Time</p>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-xl border border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                                <p className="text-cyan-400 text-lg font-bold font-mono">Status: Optimized</p>
                                <p className="text-white text-sm mt-2">Performance Grade: A+</p>
                            </div>
                         </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Features Grid */}
            <AnimatedSection delay={0.2} className="mt-16">
                <h3 className="text-center text-white font-bold text-xl mb-8">Everything You Need to Grow</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                     {[
                        'Conversion-Driven Layouts', 'SEO Integration', 'Secure SSL Hosting', 'Easy CMS Access',
                        'Analytics Setup', 'Chatbot Automation', 'Fast Load Time', 'Multi-Language Support'
                     ].map((feat, i) => (
                         <div key={i} className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-slate-300 text-sm font-medium hover:border-cyan-900 transition-colors">
                             {feat}
                         </div>
                     ))}
                </div>
            </AnimatedSection>
        </div>
    </section>
  );

  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const faqs = [
        { q: "How long does it take to build a website?", a: "Typically, 2–6 weeks depending on complexity, features, and revisions." },
        { q: "Do you handle content writing and SEO?", a: "Yes. We provide SEO-optimized content and on-page optimization as part of the development process." },
        { q: "Can you redesign an existing website?", a: "Absolutely. We can rebuild outdated layouts from the ground up for better conversion performance." },
        { q: "Is maintenance included?", a: "We offer monthly maintenance packages to ensure your site stays fast, safe, and updated." },
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">FAQs About Web Dev</h2>
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

 

  

  return (
    <div className="font-sans bg-black text-slate-100 min-h-screen">
      <HeroSection />
      <WhyItMatters />
      <Differentiation />
      <ProcessSection />
      <CaseStudy />
      <FAQSection />
    
    </div>
  );
};

export default WebsiteDevelopment;