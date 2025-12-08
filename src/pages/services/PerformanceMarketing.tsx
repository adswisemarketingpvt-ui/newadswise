import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  BarChart2, Target, Zap, MousePointer, PieChart, 
  TrendingUp, Activity, Layers, CheckCircle, 
  Plus, Minus, DollarSign, Search 
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface PerformanceMarketingProps {
  companyName?: string;
  onContactSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  website?: string;
  monthlyBudget: string;
  message: string;
}

// ============================================================================
// ANIMATED SECTION WRAPPER
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

const PerformanceMarketing: React.FC<PerformanceMarketingProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit
}) => {
  const accentColor = '#FF6B35'; // Adswise Orange
  const growthColor = '#10b981'; // ROI Green
  
  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white py-20 lg:py-0">
      {/* Abstract Data Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
      
      {/* Responsive Background Blobs */}
      <div className="absolute top-0 right-0 w-3/4 md:w-[600px] h-[600px] bg-green-900/20 rounded-full blur-[80px] md:blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-3/4 md:w-[600px] h-[600px] bg-orange-900/20 rounded-full blur-[80px] md:blur-[120px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-xs sm:text-sm font-semibold text-green-400 mb-6 mx-auto lg:mx-0">
              <TrendingUp size={16} /> ROI-Focused Advertising
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Making Every Rupee <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-500">
                Accountable
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Performance Marketing isn’t just about running ads—it’s about results. We turn marketing into an investment, not an expense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-green-900/30 transform transition hover:scale-105 hover:bg-green-600" style={{ backgroundColor: growthColor }}>
                Scale With Us
              </a>
              <a href="#process" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                Our Strategy
              </a>
            </div>
          </motion.div>
          
          {/* Right Content - Dashboard Graphic (NOW VISIBLE ON MOBILE) */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative mt-8 lg:mt-0 w-full max-w-md mx-auto lg:max-w-full"
          >
             <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-green-900/10 bg-slate-900/50 backdrop-blur-sm p-2 sm:p-3">
                 {/* Dashboard Abstract Representation */}
                 <div className="bg-black rounded-xl p-4 sm:p-6 border border-slate-800">
                    <div className="flex justify-between items-center mb-6 sm:mb-8">
                        <div>
                            <div className="text-slate-400 text-xs sm:text-sm">Total Conversions</div>
                            <div className="text-2xl sm:text-3xl font-bold text-white">1,248</div>
                        </div>
                        <div className="px-2 sm:px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1">
                            <TrendingUp size={12} /> +45%
                        </div>
                    </div>
                    {/* Chart Lines */}
                    <div className="flex items-end gap-1 sm:gap-2 h-32 sm:h-40">
                        {[40, 65, 45, 70, 55, 85, 75, 95, 100].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className="flex-1 bg-gradient-to-t from-green-900/50 to-green-500 rounded-t-sm"
                            ></motion.div>
                        ))}
                    </div>
                 </div>
             </div>
             
             {/* Floating KPI Cards - Adjusted for Mobile to avoid overflow */}
             <div className="absolute -bottom-4 left-4 right-4 sm:-bottom-6 sm:-left-6 sm:right-auto bg-slate-900 border border-slate-700 p-3 sm:p-4 rounded-xl shadow-xl z-20 mx-auto w-max sm:w-auto">
                <div className="flex items-center gap-3">
                    <Target className="text-orange-500" size={20} />
                    <div>
                        <p className="font-bold text-white text-sm sm:text-base">Precision Targeting</p>
                        <p className="text-[10px] sm:text-xs text-slate-400">Psychographic & Geo</p>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const ConceptSection = () => (
    <section className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
                    What is <span className="text-green-500">Performance Marketing?</span>
                </h2>
                <p className="text-slate-400 text-base sm:text-lg">
                    Simply put, you pay for what delivers. It removes the guesswork and ensures every rupee creates business growth.
                </p>
            </div>
        </AnimatedSection>
        
        

[Image of digital marketing performance funnel diagram]


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
                { icon: <CheckCircle className="text-green-500" />, title: "High-Quality Leads", desc: "Not just traffic, but actual potential customers." },
                { icon: <Activity className="text-blue-500" />, title: "Real-Time ROI", desc: "Track every rupee spent versus revenue generated." },
                { icon: <Layers className="text-orange-500" />, title: "Scalability", desc: "Scale up profitably with automation and insights." },
                { icon: <BarChart2 className="text-purple-500" />, title: "Data-Focused", desc: "Decisions based on hard analytics, not assumptions." }
            ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                    <div className="bg-slate-900 p-5 sm:p-6 rounded-xl border border-slate-800 h-full hover:border-green-500/30 transition-all group">
                        <div className="mb-4 bg-black w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );

  const ProcessSection = () => {
    const steps = [
      { title: "Smart Targeting", desc: "Using psychographic data to find users most likely to convert." },
      { title: "Compelling Creatives", desc: "Visuals and copy that connect emotionally and drive action." },
      { title: "Continuous Testing", desc: "A constant cycle of A/B testing to ensure budget works harder." },
      { title: "Conversion Analytics", desc: "Tracking the story behind every click using heatmaps and data." },
      { title: "Transparent Reporting", desc: "Clear reports showing Cost Per Lead (CPL) and overall ROI." }
    ];

    return (
      <section id="process" className="py-16 sm:py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
                <AnimatedSection>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
                      How {companyName} Makes Performance Count
                    </h2>
                    <p className="text-slate-400 mb-8 text-sm sm:text-base">
                        We don't throw ads at everyone. We use a methodical, 5-step process to ensure efficiency.
                    </p>
                    <div className="space-y-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold text-sm border border-green-500/30">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base sm:text-lg">{step.title}</h4>
                                    <p className="text-slate-500 text-sm">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2} className="relative mt-8 lg:mt-0">
                    {/* Abstract Flowchart Graphic */}
                    <div className="bg-black p-6 sm:p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px]"></div>
                        <div className="space-y-4 relative z-10">
                            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                                <span className="text-white font-bold text-sm sm:text-base">Targeting</span>
                                <Target size={20} className="text-slate-500" />
                            </div>
                            <div className="h-6 w-0.5 bg-slate-700 mx-auto"></div>
                            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                                <span className="text-white font-bold text-sm sm:text-base">Testing</span>
                                <Zap size={20} className="text-orange-500" />
                            </div>
                            <div className="h-6 w-0.5 bg-slate-700 mx-auto"></div>
                            <div className="bg-slate-900 p-4 rounded-xl border border-green-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center justify-between">
                                <span className="text-white font-bold text-sm sm:text-base">Conversion</span>
                                <DollarSign size={20} className="text-green-500" />
                            </div>
                            <div className="h-6 w-0.5 bg-slate-700 mx-auto"></div>
                             <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                                <span className="text-white font-bold text-sm sm:text-base">Reporting</span>
                                <PieChart size={20} className="text-blue-500" />
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
      </section>
    );
  };

  const PlatformsSection = () => (
      <section className="py-16 sm:py-20 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-white text-center">
                    Platforms We Dominate
                </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <AnimatedSection delay={0.1}>
                    <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors h-full">
                        <Search size={32} className="text-blue-500 mb-4 sm:mb-6" />
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Google Ads</h3>
                        <p className="text-slate-400 text-sm sm:text-base">From search to display, we help you own the top spots. Keyword research ensures ads show when users are ready to buy.</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                    <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-blue-400/50 transition-colors h-full">
                        <MousePointer size={32} className="text-blue-400 mb-4 sm:mb-6" />
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Meta Ads</h3>
                        <p className="text-slate-400 text-sm sm:text-base">Facebook & Instagram. We blend psychology and data to turn scrolls into sales with captivating visuals.</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                    <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-blue-700/50 transition-colors h-full">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded bg-blue-700 flex items-center justify-center text-white font-bold mb-4 sm:mb-6">in</div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">LinkedIn Ads</h3>
                        <p className="text-slate-400 text-sm sm:text-base">Gold for B2B. We design ad funnels that attract decision-makers and industry professionals.</p>
                    </div>
                </AnimatedSection>
            </div>
          </div>
      </section>
  );

  const CaseStudy = () => (
    <section className="py-16 sm:py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="max-w-5xl mx-auto bg-black rounded-3xl overflow-hidden border border-slate-800 flex flex-col md:flex-row shadow-2xl">
                    <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
                        <div className="text-green-500 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">Case Study</div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Turning Clicks into Clients</h3>
                        <p className="text-slate-400 mb-6 text-sm sm:text-base">
                            A Pune-based home interior brand needed qualified leads. We refined their audience targeting and ad creatives.
                        </p>
                        <div className="bg-slate-900 p-4 sm:p-6 rounded-xl border border-slate-800 flex gap-4 sm:gap-8">
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-white">-45%</div>
                                <div className="text-[10px] sm:text-xs text-slate-500 uppercase mt-1">Cost Per Lead</div>
                            </div>
                            <div className="w-px bg-slate-700"></div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-white">2x</div>
                                <div className="text-[10px] sm:text-xs text-slate-500 uppercase mt-1">Conversions (30 Days)</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-950 p-6 sm:p-10 flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-800 relative overflow-hidden h-64 md:h-auto">
                         {/* Graph Visualization */}
                         <div className="w-full h-full relative">
                             <div className="absolute bottom-0 left-0 w-full h-px bg-slate-700"></div>
                             <div className="absolute top-0 left-0 h-full w-px bg-slate-700"></div>
                             
                             {/* Downward Trend (Cost) */}
                             <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                <path d="M0,50 Q150,50 300,150" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="5,5" />
                             </svg>
                             <div className="absolute bottom-4 right-4 text-red-400 text-xs font-bold">Cost</div>

                             {/* Upward Trend (Leads) */}
                             <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                                <path d="M0,150 Q150,150 300,20" fill="none" stroke="#10b981" strokeWidth="3" />
                             </svg>
                             <div className="absolute top-4 right-4 text-green-400 text-xs font-bold">Leads</div>
                         </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Budget Approach */}
            <AnimatedSection delay={0.2} className="mt-12 sm:mt-16 text-center max-w-3xl mx-auto">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Our Budget Philosophy</h3>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {['Test Small', 'Scale Fast', 'Reinvest Profits', 'Kill Bad Ads'].map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs sm:text-sm font-semibold">
                            {tag}
                        </span>
                    ))}
                </div>
            </AnimatedSection>
        </div>
    </section>
  );

  const FAQSection = () => {
    // Note: State must be handled in the parent component or this component needs to be extracted
    // For this single-file format, we'll keep state in the main component and pass it, or just use it here if it were a separate file.
    // However, since we are inside the main component function scope, we need a separate state variable for this if it's not extracted.
    // For simplicity in this snippet, I am using the state defined in the main component.
    
    // Using local state logic here to simulate isolated component behavior for clarity
    const [localOpenFAQ, setLocalOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
        q: "Difference between performance and traditional marketing?",
        a: "Traditional marketing focuses on visibility (branding). Performance marketing focuses on measurable results—leads, clicks, or sales.",
        },
        {
        q: "Can small businesses afford this?",
        a: "Yes. It’s ideal for MSMEs because you only pay for measurable outcomes, not vague impressions.",
        },
        {
        q: "How long before I see results?",
        a: "Most clients start seeing meaningful metrics within 3–4 weeks, depending on campaign type and optimization speed.",
        },
        {
        q: "What’s included in the service?",
        a: "Strategy, creative design, audience targeting, campaign setup, live monitoring, reporting, and ongoing optimization.",
        },
    ];

    return (
        <section className="py-16 sm:py-20 bg-black">
        <div className="container mx-auto px-4 max-w-3xl">
            <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
                FAQs About Performance Marketing
            </h2>
            </AnimatedSection>

            <div className="space-y-4">
            {faqs.map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                    <button
                    type="button"
                    onClick={() =>
                        setLocalOpenFAQ(localOpenFAQ === index ? null : index)
                    }
                    className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-slate-800 transition"
                    >
                    <span className="font-semibold text-slate-200 text-sm sm:text-base pr-4">
                        {faq.q}
                    </span>

                    {localOpenFAQ === index ? (
                        <Minus size={20} color={accentColor} className="flex-shrink-0" />
                    ) : (
                        <Plus size={20} color={accentColor} className="flex-shrink-0" />
                    )}
                    </button>

                    <AnimatePresence>
                    {localOpenFAQ === index && (
                        <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-4 sm:px-6 pb-4"
                        >
                        <p className="text-slate-400 text-sm sm:text-base pt-2 border-t border-slate-800">
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
  
  return (
    <div className="font-sans bg-black text-slate-100 min-h-screen">
      <HeroSection />
      <ConceptSection />
      <ProcessSection />
      <PlatformsSection />
      <CaseStudy />
      <FAQSection />
    </div>
  );
};

export default PerformanceMarketing;