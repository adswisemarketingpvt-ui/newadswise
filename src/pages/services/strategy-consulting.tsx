import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Target, TrendingUp, Users, Zap, BarChart2, 
  CheckCircle, Eye, Plus, Minus, 
  Send
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface StrategyConsultingProps {
  companyName?: string;
  onContactSubmit?: (formData: FormData) => void;
  initialBudgetAllocation?: BudgetAllocation;
}

interface FormData {
  name: string;
  email: string;
  website?: string;
  budget: string;
  message: string;
}

interface BudgetAllocation {
  seo: number;
  paid: number;
  social: number;
  other: number;
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

const StrategyConsulting: React.FC<StrategyConsultingProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit,
  initialBudgetAllocation = { seo: 30, paid: 40, social: 20, other: 10 }
}) => {
  const accentColor = '#FF6B35'; // Adswise Orange
  
  const [budget, setBudget] = useState<BudgetAllocation>(initialBudgetAllocation);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', website: '', budget: '', message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Thanks! We'll be in touch regarding your strategy roadmap.");
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full blur-[120px] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-sm font-semibold text-orange-400 mb-6">
              Strategic Business Consultation
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turning Business Goals into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Measurable Growth
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Every business has a dream, but few have a map. At {companyName}, we build the data-driven blueprint that connects your ambition with execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-orange-900/20 transform transition hover:scale-105 hover:bg-orange-600" style={{ backgroundColor: accentColor }}>
                Get Your Roadmap
              </a>
              <a href="#case-study" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                View Results
              </a>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
          >
             <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-900/20">
                 
             </div>
             
             <div className="absolute -bottom-8 -left-8 bg-slate-900 border border-slate-700 p-6 rounded-xl shadow-xl text-white max-w-xs animate-bounce">
                <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" />
                    <div>
                        <p className="font-bold text-lg">Data-Backed</p>
                        <p className="text-sm text-slate-400">No guesswork involved.</p>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const WhyStrategy = () => {
    const reasons = [
      { icon: <Target size={32} />, title: "Clear Direction", desc: "Every move stems from a unified goal — not random guesswork." },
      { icon: <BarChart2 size={32} />, title: "Data Over Assumptions", desc: "We rely on keyword research, user behavior, and conversion trends." },
      { icon: <TrendingUp size={32} />, title: "Better Budget Utilization", desc: "Allocate funds where they truly deliver — Meta ads, SEO, or remarketing." },
      { icon: <Zap size={32} />, title: "Adaptability", desc: "Markets shift fast. We help you pivot messaging and targeting to stay relevant." }
    ];

    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
              Why Businesses Can’t Skip Strategy
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -8, backgroundColor: '#1e293b' }} 
                  className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 h-full border-t-4" 
                  style={{ borderTopColor: accentColor }}
                >
                  <div className="mb-4 text-orange-400">{reason.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{reason.title}</h3>
                  <p className="text-slate-400 text-sm">{reason.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const MethodologyRoadmap = () => {
    const steps = [
      { title: "Deep-Dive Research", desc: "Analyzing audience habits, spending behavior, and search intent." },
      { title: "Competitor Benchmarking", desc: "Studying top 5 competitors to identify your edge and exploit gaps." },
      { title: "Crafting the Roadmap", desc: "Designing target personas, channel mix, and budget allocation." },
      { title: "Execution Support", desc: "Helping your team implement strategies and measure progress." },
      { title: "Continuous Optimization", desc: "Monthly reviews to adjust targeting and refresh creatives." }
    ];

    return (
      <section id="methodology" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <AnimatedSection>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                      How {companyName} Delivers Real Strategy
                    </h2>
                    <p className="text-slate-400 mb-8">Our approach isn’t built on jargon; it’s built on results.</p>
                </AnimatedSection>
                <div className="space-y-8">
                    {steps.map((step, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.1}>
                        <div className="flex gap-4 group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform" style={{ backgroundColor: accentColor }}>
                                {idx + 1}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                <p className="text-slate-400 text-sm mt-1">{step.desc}</p>
                            </div>
                        </div>
                    </AnimatedSection>
                    ))}
                </div>
            </div>
            <AnimatedSection delay={0.3} className="hidden lg:block">
 
  <div className="rounded-xl overflow-hidden w-full h-[80%]">
    <img
      src="https://i.pinimg.com/736x/46/d9/a7/46d9a785a86ce6f725f86f83641fdb82.jpg"
      alt="Adswise Marketing Strategy"
      className="w-full h-auto object-cover "
      loading="lazy"
    />
  </div>


</AnimatedSection>

          </div>
        </div>
      </section>
    );
  };

  const CaseStudy = () => (
    <section id="case-study" className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 left-1/2 w-full h-full bg-blue-500/5 blur-[150px] -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
                <div className="bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-12 flex flex-col justify-center">
                        <span className="text-orange-400 font-bold tracking-wider text-sm uppercase mb-2">Real-World Example</span>
                        <h3 className="text-3xl font-bold mb-6 text-white">How a Local Fashion Brand Scaled 3x</h3>
                        <p className="text-slate-300 mb-6">A Pune-based fashion brand approached us with stagnant sales. We found 70% of their audience was abandoning carts on mobile.</p>
                        <div className="space-y-4">
                            {['Restructured Ad Funnel', 'WhatsApp Retargeting Added', 'Optimized Mobile UX'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-green-400" size={20} />
                                    <span className="text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 p-12 flex items-center justify-center bg-black/40 relative border-l border-slate-700">
                         
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-slate-700">
                                <h4 className="text-6xl font-bold text-white">300%</h4>
                                <p className="text-orange-400 font-medium uppercase tracking-widest mt-2">Revenue Increase</p>
                                <p className="text-sm text-slate-400 mt-1">in just 3 months</p>
                            </div>
                         </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    </section>
  );

  const KPIAndBudget = () => {
    const handleSliderChange = (channel: keyof BudgetAllocation, value: number) => {
      const diff = value - budget[channel];
      const others = Object.keys(budget).filter(k => k !== channel) as (keyof BudgetAllocation)[];
      const adjustment = diff / others.length;
      const newBudget = { ...budget };
      newBudget[channel] = value;
      others.forEach(key => {
        newBudget[key] = Math.max(0, Math.min(100, newBudget[key] - adjustment));
      });
      setBudget(newBudget);
    };

    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
            <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">KPI Framework & Budget</h2>
            </AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <AnimatedSection className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-lg">
                    <h3 className="text-xl font-bold mb-6 text-white">Interactive Budget Allocator</h3>
                    {Object.entries(budget).map(([key, value]) => (
                        <div key={key} className="mb-6">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-bold uppercase text-slate-400">{key}</label>
                                <span className="font-bold" style={{ color: accentColor }}>{Math.round(value)}%</span>
                            </div>
                            <input 
                                type="range" min="0" max="100" value={value} 
                                onChange={(e) => handleSliderChange(key as keyof BudgetAllocation, parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                            />
                        </div>
                    ))}
                    <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg text-sm text-orange-300">
                        <strong>Note:</strong> Proper Strategy Consulting ensures you allocate funds where they truly deliver ROI.
                    </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2} className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-6 text-white">What We Track (KPIs)</h3>
                    <div className="grid grid-cols-1 gap-4">
                        {['CAC (Customer Acquisition Cost)', 'LTV (Lifetime Value)', 'ROAS (Return on Ad Spend)', 'Engagement & Retention Rates'].map((kpi, i) => (
                            <div key={i} className="flex items-center p-4 bg-slate-900 shadow-sm rounded-lg border border-slate-800 hover:border-orange-500/50 transition-colors">
                                <Eye className="mr-4 text-orange-400" size={20} />
                                <span className="font-medium text-slate-200">{kpi}</span>
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
      q: "What’s the difference between marketing consulting and strategy consulting?",
      a: "Marketing consulting focuses on execution (ads, SEO, etc.), while Strategy Consulting builds the blueprint that guides every marketing move.",
    },
    {
      q: "How long does Strategy Consulting take?",
      a: "For MSMEs, a full consulting plan typically takes 2–4 weeks — including research, analysis, and roadmap presentation.",
    },
    {
      q: "Is it worth investing if I already have a marketing team?",
      a: "Absolutely. Your team executes; a strategy consultant ensures they’re heading in the right direction with maximum ROI.",
    },
    {
      q: "Can I see measurable results?",
      a: "Yes. Every strategy comes with defined KPIs and reporting checkpoints, ensuring tangible outcomes.",
    },
    {
      q: "What industries benefit the most?",
      a: "We’ve worked with real estate, education, e-commerce, healthcare, and B2B service providers — any business aiming for structured, scalable growth.",
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            FAQs About Strategy Consulting
          </h2>
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
                  {openFAQ === index ? (
                    <Minus size={20} color={accentColor} />
                  ) : (
                    <Plus size={20} color={accentColor} />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {openFAQ === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-slate-400 pt-2 border-t border-slate-800">
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



  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  return (
    <div className="font-sans bg-black text-slate-100 min-h-screen">
      <HeroSection />
      <WhyStrategy />
      <MethodologyRoadmap />
      <CaseStudy />
      <KPIAndBudget />
      <FAQSection />
      
    </div>
  );
};

export default StrategyConsulting;