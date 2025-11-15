import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Bot, MessageCircleQuestion, BrainCircuit, Sparkles, Layers, 
  CheckCheck, Mic, Award, Target, FileText, Code, Users, // <-- Changed UserVoice to Award
  Building, Activity, Shield, Plus, Minus, Send, AlertTriangle
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface AEOptimizationProps {
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

const AEOptimization: React.FC<AEOptimizationProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit
}) => {
  const accentColor = '#FF6B35'; // Adswise Orange
  const secondaryAccent = '#A855F7'; // AI Purple
  
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
    alert("Thanks! Let's make your brand the #1 answer.");
    setFormData({ name: '', email: '', website: '', serviceType: '', message: '' });
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
              <Bot size={16} /> Answer Engine Optimization (AEO)
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Don't Just Be on Google. Be{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500">
                The Answer.
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              People now "ask" instead of "search." If your brand isn't structured to be the answer for AI tools like ChatGPT and Google AI, you're invisible. AEO shapes your content to be the one AI systems trust and pick.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-purple-900/40 transform transition hover:scale-105 hover:bg-purple-700" style={{ backgroundColor: secondaryAccent }}>
                Be The Answer
              </a>
              <a href="#process" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                How It Works
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-purple-900/20 transform -rotate-2 hover:rotate-0 transition duration-500 p-4 bg-slate-950 min-h-[300px] flex items-center justify-center text-slate-600">
              [Image: "Search Engines vs. Answer Engines" infographic]
            </div>
            
            <div className="absolute top-10 -right-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl animate-pulse">
                <div className="flex items-center gap-3">
                    <Sparkles className="text-purple-500" />
                    <div>
                        <p className="font-bold text-lg text-white">AI-Ready</p>
                        <p className="text-sm text-slate-400">Content structured for AI.</p>
                    </div>
                </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-slate-900 border border-slate-700 p-6 rounded-xl shadow-xl text-white max-w-xs">
              <div className="flex items-center gap-3">
                <MessageCircleQuestion className="text-orange-500" />
                <div>
                  <p className="font-bold text-lg">Direct Answers</p>
                  <p className="text-sm text-slate-400">Winning snippets & voice.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const WhatIsAEOSection = () => (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              What Exactly Is <span className="text-purple-500">Answer Engine Optimization?</span>
            </h2>
            <p className="text-slate-400 mb-4">
              It’s not just another SEO buzzword. AEO is the practical, ground-level process of rewriting, restructuring, and enriching your content so AI systems interpret it correctly.
            </p>
            <p className="text-slate-400 mb-8">
              Think of it as giving your website a translator — one who speaks fluently with AI models that prefer clarity, structure, and context. Instead of chasing algorithms, you focus on creating content that directly answers user questions in clean, digestible formats. That’s what makes AI pick it.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center min-h-[250px] text-center">
              <BrainCircuit size={48} className="text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">From Links to Answers</h3>
              <p className="text-slate-400">
                Traditional SEO gets you links. AEO gets your content chosen, summarized, and presented as the definitive answer.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const WhyAEOSection = () => {
    return (
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
              Why Your Business Needs AEO <span className="text-orange-500">Right Now</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text-center text-lg text-slate-400 max-w-3xl mx-auto mb-16">
              Buyers are shifting fast. They trust AI summaries, recommendations, and instant answers. If you’re missing from those answers, you’re losing business without even knowing it. AEO ensures your brand enters the AI conversation early, consistently, and authentically.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto bg-black rounded-3xl overflow-hidden border border-slate-800 flex flex-col md:flex-row">
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <div className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-2">Real-Life Example</div>
                <h3 className="text-2xl font-bold text-white mb-4">Local AEO Success</h3>
                <p className="text-slate-400 mb-6">
                  A restaurant in Pune revamped its website with AEO-friendly FAQs, clear location cues, and structured recipes.
                </p>
                <div className="border-t border-slate-800 pt-6">
                  <div className="text-3xl font-bold text-white">Top 3 Answer</div>
                  <div className="text-xs text-slate-500 uppercase">For "best breakfast near me" on AI tools</div>
                </div>
              </div>
              <div className="md:w-1/2 bg-slate-800 relative min-h-[300px] flex items-center justify-center text-slate-600">
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <p className="text-white italic text-sm">"This is something regular SEO never achieved."</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  };

  const ProcessSection = () => {
    const steps = [
      { num: "01", title: "Identify Real Questions", desc: "We pull actual user queries from AI tools, voice searches, and long-tail patterns." },
      { num: "02", title: "Create Answer-Friendly Formats", desc: "AI loves structure: bullets, short paragraphs, direct statements, and clean sections." },
      { num: "03", title: "Add Context for AI", desc: "This includes schema, entities, relationships, and crisp definitions so AI understands meaning." },
      { num: "04", title: "Strengthen Trust Signals", desc: "AI prioritizes credibility. We boost mentions, author expertise, clear citations, and local relevance." },
      { num: "05", title: "Test How AI Responds", desc: "We check if ChatGPT, Claude, and Perplexity recognize and pull your content as the answer." },
      { num: "06", title: "Monitor and Refine", desc: "Answer engines evolve daily. We ensure your content evolves with them." }
    ];

    return (
      <section id="process" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">
                    How Answer Engine Optimization Works
                </h2>
                <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                    This entire cycle sits at the heart of effective Answer Engine Optimization.
                </p>
            </AnimatedSection>
            
            <AnimatedSection className="mb-12">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-center min-h-[200px] text-slate-500">
                    
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.1}>
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg relative h-full hover:border-purple-500/50 transition-colors">
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

  const BenefitsSection = () => {
    const benefits = [
        { icon: <CheckCheck />, title: "Win 'People Also Ask'", desc: "Your content gets selected for PAA boxes, capturing high-intent users." },
        { icon: <Mic />, title: "Dominate Voice Search", desc: "Your content gets summarized by voice assistants, making you the default answer." },
        { icon: <Bot />, title: "Get Picked by AI", desc: "AI tools pull your information more often because you’re clear and trustworthy." },
        { icon: <Award />, title: "Become the Default", desc: "Your brand becomes the default recommendation instead of an afterthought." }
    ];
    
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">
                        Win Snippets, Voice Search, and AI Answers
                    </h2>
                    <p className="text-slate-400 text-center mb-16 max-w-3xl mx-auto">
                        Zero-click searches, featured snippets, and voice answers are the new battlegrounds. AEO makes your brand discoverable even when users never open a browser.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <motion.div 
                                whileHover={{ y: -8, backgroundColor: '#1e293b' }}
                                className="bg-black border border-slate-800 p-6 rounded-xl relative h-full transition-colors group"
                            >
                                <div className="mb-4 text-purple-400">{React.cloneElement(item.icon, { size: 32 })}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
  };
  
  const ElementsSection = () => {
    const elements = [
        { icon: <MessageCircleQuestion />, title: "Question-First Content", desc: "Your customers ask questions. Your content must answer them directly." },
        { icon: <Code />, title: "Structured Data & Schema", desc: "This helps AI engines interpret meaning, not just read text." },
        { icon: <Building />, title: "Entity Building", desc: "We establish who you are, where you operate, and what you specialize in." },
        { icon: <Target />, title: "Local & Product Context", desc: "AI tools don’t guess. We give them clean, clear signals." },
        { icon: <FileText />, title: "AEO-Optimized FAQs", desc: "Short, clear, and crafted specifically for AI interpretation." },
        { icon: <Activity />, title: "AI Testing and Tuning", desc: "We literally ask AI tools questions your customers ask and check if you appear." },
    ];
    
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                            Key Elements in Every AEO Project
                        </h2>
                        <p className="text-slate-400 mb-8 text-lg">
                            We go beyond keywords to build a foundation of trust and clarity that AI systems are programmed to look for.
                        </p>
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex items-center justify-center min-h-[200px] text-slate-500">
                           
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection delay={0.2}>
                        <div className="space-y-4">
                            {elements.map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                                    className="flex items-start gap-4 p-4 bg-slate-900 rounded-lg border border-slate-800"
                                >
                                    <div className="text-purple-400 flex-shrink-0 mt-1">{React.cloneElement(item.icon, { size: 20 })}</div>
                                    <div>
                                        <h4 className="text-white font-semibold">{item.title}</h4>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
  };
  
  const WhoBenefitsSection = () => {
    const industries = [
        "Service Providers (Lawyers, Hospitals)", "Local Businesses", "E-commerce Brands",
        "Coaches & Institutes", "Real Estate", "Tourism & Hospitality", "Startups"
    ];
    
    return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
                        Who Benefits Most from AEO?
                    </h2>
                    <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                        Here’s the blunt truth: if your business depends on high-intent discovery, you need AEO. If people ask questions in your domain, Answer Engine Optimization puts you in the answer.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="flex flex-wrap justify-center gap-4">
                        {industries.map((industry, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-full text-slate-300 font-medium"
                            >
                                {industry}
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
  };

  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const faqs = [
      { q: "Does AEO replace SEO?", a: "No. SEO gets you visibility in search engines. AEO gets you visibility in AI answers. You need both, but AEO is becoming the frontline." },
      { q: "How long does AEO take to show results?", a: "Some improvements appear within weeks because AI tools update quickly. Deeper authority signals take a bit longer." },
      { q: "Is AEO only for big companies?", a: "Not at all. In fact, small businesses benefit faster because they’re more focused and specific." },
      { q: "What do AI tools look for when choosing answers?", a: "Clarity, structure, accuracy, local cues, and trust signals." },
      { q: "Can AEO work for multilingual content?", a: "Yes. It works even better because AI systems pull regional answers for regional queries." }
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
                        Want Your Brand to Be the <span className="text-purple-500">Answer AI Picks First?</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8">
                        The shift from search engines to answer engines isn’t coming — it’s already here. When someone asks a question your business can solve, you need to show up. We’ll guide you through every step.
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mt-8 min-h-[250px] bg-slate-900 flex items-center justify-center text-slate-600">
                        

[Image of AI chat UI]

                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <form onSubmit={handleSubmit} className="bg-black shadow-2xl rounded-2xl p-8 border border-slate-800">
                        <h3 className="text-2xl font-bold mb-6 text-white">Start Your AEO Strategy</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input required name="email" value={formData.email} type="email" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Your Website (Optional)</label>
                            <input name="website" value={formData.website} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="https://yourcompany.com" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-400 mb-1">What questions should AI answer about you?</label>
                            <textarea required name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition" placeholder="e.g., 'Who is the best lawyer in Pune for...?'"></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg shadow-purple-900/40 hover:shadow-purple-900/60 transition transform hover:-translate-y-1 flex items-center justify-center gap-2" style={{ backgroundColor: secondaryAccent }}>
                            <span>Make Me The Answer</span>
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
              <p className="mb-8">Shaping the Answers of Tomorrow.</p>
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
      <WhatIsAEOSection />
      <WhyAEOSection />
      <ProcessSection />
      <BenefitsSection />
      <ElementsSection />
      <WhoBenefitsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AEOptimization;