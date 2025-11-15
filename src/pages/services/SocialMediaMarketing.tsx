import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Share2, Heart, Users, MessageCircle, 
  BarChart2, TrendingUp, Repeat, Globe, Plus, Minus, 
  Send, ThumbsUp, Video
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface SocialMediaMarketingProps {
  companyName?: string;
  onContactSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  website?: string;
  platformInterest: string;
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

const SocialMediaMarketing: React.FC<SocialMediaMarketingProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit
}) => {
  const accentColor = '#FF6B35'; // Adswise Orange
  const socialGradient = 'from-pink-500 via-purple-500 to-indigo-500'; // Social Media Vibe
  
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', website: '', platformInterest: '', message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Thanks! We'll analyze your social presence and get back to you.");
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/connected.png')]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-600 rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`inline-block px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-sm font-semibold mb-6 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${socialGradient}`}>
              <Smartphone size={16} className="text-pink-500" /> Social Media Marketing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where Creativity Meets{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${socialGradient}`}>
                Strategy
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              It’s not about random reels or boosted posts. We design AI-powered and psychology-driven strategies that turn attention into trust and followers into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-pink-900/40 transform transition hover:scale-105 hover:bg-pink-700" style={{ background: 'linear-gradient(to right, #ec4899, #8b5cf6)' }}>
                Start Growing Today
              </a>
              <a href="#process" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                Our Approach
              </a>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
          >
             <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-900/20">
                
             </div>
             
             {/* Floating Notification Elements */}
             <div className="absolute top-20 -left-8 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-500/20 rounded-full text-pink-500"><Heart size={20} fill="currentColor" /></div>
                    <div>
                        <p className="font-bold text-white">High Engagement</p>
                        <p className="text-xs text-slate-400">+230% Increase</p>
                    </div>
                </div>
             </div>
             
             <div className="absolute bottom-20 -right-8 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-full text-blue-500"><Users size={20} /></div>
                    <div>
                        <p className="font-bold text-white">New Leads</p>
                        <p className="text-xs text-slate-400">Qualified & Verified</p>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const WhatIsSMM = () => (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                  Psychology + Analytics = <span className="text-pink-500">Viral Growth</span>
                </h2>
                <p className="text-slate-400 mb-6">
                  Social Media Marketing isn't just about posting more; it's about posting smart. It is the art of using platforms like Meta, LinkedIn, and YouTube to reach and engage your audience.
                </p>
                <p className="text-slate-400 mb-6">
                  Think of it as a mix of psychology and analytics. What makes your audience stop scrolling? What captions trigger curiosity? Adswise Marketing builds your social playbook using data, emotion, and brand storytelling.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <div className="flex -space-x-4">
                        {[1,2,3].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-black flex items-center justify-center text-xs text-white">User</div>
                        ))}
                    </div>
                    <div className="text-sm text-slate-400">
                        Building real relationships, not just vanity metrics.
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-black rounded-xl border border-slate-800 text-center">
                        <Share2 className="mx-auto text-blue-500 mb-2" />
                        <h4 className="text-white font-bold">Meta</h4>
                        <p className="text-xs text-slate-500">Community & Scale</p>
                    </div>
                    <div className="p-4 bg-black rounded-xl border border-slate-800 text-center">
                        <Heart className="mx-auto text-pink-500 mb-2" />
                        <h4 className="text-white font-bold">Instagram</h4>
                        <p className="text-xs text-slate-500">Visual & Viral</p>
                    </div>
                    <div className="p-4 bg-black rounded-xl border border-slate-800 text-center">
                        <Users className="mx-auto text-blue-400 mb-2" />
                        <h4 className="text-white font-bold">LinkedIn</h4>
                        <p className="text-xs text-slate-500">B2B Authority</p>
                    </div>
                    <div className="p-4 bg-black rounded-xl border border-slate-800 text-center">
                        <Video className="mx-auto text-red-500 mb-2" />
                        <h4 className="text-white font-bold">YouTube</h4>
                        <p className="text-xs text-slate-500">Search & Story</p>
                    </div>
                </div>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const WhyIgnore = () => {
    const benefits = [
      { icon: <ThumbsUp size={32} />, title: "Builds Authority", desc: "Consistent content makes your brand recognizable. Trust comes from authenticity, not just ads." },
      { icon: <TrendingUp size={32} />, title: "Drives Leads", desc: "We treat every post as part of a funnel. Driving form fills, DMs, and traffic tied to ROI." },
      { icon: <MessageCircle size={32} />, title: "Relationships", desc: "Timely replies and conversations build relationships that last longer than a single campaign." },
      { icon: <BarChart2 size={32} />, title: "Real-Time Feedback", desc: "Unlike traditional ads, social gives instant insights on what works and how your audience feels." }
    ];

    return (
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
              Why It’s Not Optional Anymore
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -8, backgroundColor: '#1e293b' }} 
                  className="bg-black p-6 rounded-xl shadow-lg border border-slate-800 h-full group"
                >
                  <div className="mb-4 text-slate-400 group-hover:text-pink-500 transition-colors">{benefit.icon}</div>
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
      { title: "Psychology & Research", desc: "Using AI and observation to identify behaviors that guide creative decisions." },
      { title: "Platform Strategy", desc: "Tailoring content—LinkedIn for authority, Instagram for visuals, Facebook for community." },
      { title: "Conversion Content", desc: "Designing visuals and copy that stop the scroll and lead somewhere." },
      { title: "Execution & Optimization", desc: "AI-powered dashboards track engagement and refine content weekly." },
      { title: "ROI Reporting", desc: "No vanity metrics. We show inquiries, traffic, and lead quality." }
    ];

    return (
      <section id="process" className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-white text-center">
                  Adswise Marketing’s Approach
                </h2>
            </AnimatedSection>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-0 bottom-0 w-1 bg-slate-800"></div>

                <div className="space-y-12">
                    {steps.map((step, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <div className="flex gap-8 group">
                                <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg border-2 border-black bg-slate-900 group-hover:bg-gradient-to-br ${socialGradient} transition-all`}>
                                    {idx + 1}
                                </div>
                                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex-1 hover:border-pink-500/30 transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-slate-400">{step.desc}</p>
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

  const CampaignTypes = () => {
      const campaigns = [
          { title: "Awareness", desc: "Perfect for startups. Introduce your brand and build recall." },
          { title: "Engagement", desc: "Contests, polls, and interactive posts that build community." },
          { title: "Lead Gen", desc: "Targeted Meta/LinkedIn ads with optimized forms and tracking." },
          { title: "Retargeting", desc: "Remarketing to keep your brand top of mind until they buy." },
          { title: "Employer Branding", desc: "Showcase culture to attract talent and trust on LinkedIn." }
      ];

      return (
        <section className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white text-center">
                        Campaigns We Run
                    </h2>
                </AnimatedSection>
                <div className="flex flex-wrap justify-center gap-6">
                    {campaigns.map((camp, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1} className="w-full md:w-[30%]">
                            <div className="bg-black border border-slate-800 p-6 rounded-xl h-full hover:shadow-lg hover:shadow-purple-900/20 transition-all">
                                <h3 className="text-lg font-bold text-white mb-2">{camp.title}</h3>
                                <p className="text-slate-400 text-sm">{camp.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
      );
  };

  const CaseStudy = () => (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-black to-slate-900 rounded-3xl overflow-hidden border border-slate-700 flex flex-col md:flex-row shadow-2xl">
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                        <div className="text-pink-500 font-bold text-sm uppercase tracking-wider mb-2">Success Story</div>
                        <h3 className="text-3xl font-bold text-white mb-4">Zero Engagement to Real Conversions</h3>
                        <p className="text-slate-400 mb-6">
                            A Pune-based real estate client was frustrated—hundreds of posts, zero leads. We restructured their entire plan from visual identity to objectives.
                        </p>
                        <div className="grid grid-cols-2 gap-6 border-t border-slate-800 pt-6">
                            <div>
                                <div className="text-4xl font-bold text-white">230%</div>
                                <div className="text-xs text-slate-500 uppercase mt-1">Rise in Engagement</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white">20+</div>
                                <div className="text-xs text-slate-500 uppercase mt-1">Qualified Leads/Week</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-800 relative min-h-[300px] flex items-center justify-center">
                        
                        <div className="absolute bottom-6 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-slate-600">
                            <p className="text-white text-sm font-semibold">"That’s not luck. That’s structured strategy."</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 4 Key Pillars */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                 {['Consistency', 'Storytelling', 'Visual Identity', 'Data Analysis'].map((item, i) => (
                     <AnimatedSection key={i} delay={0.3 + (i * 0.1)}>
                         <div className="bg-black p-4 rounded-lg border border-slate-800 text-slate-300 font-semibold">
                             {item}
                         </div>
                     </AnimatedSection>
                 ))}
            </div>
        </div>
    </section>
  );

  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const faqs = [
        { q: "What platforms do you specialize in?", a: "We handle Meta (Facebook & Instagram), LinkedIn, YouTube, and emerging platforms depending on your business goals." },
        { q: "How long before I see results?", a: "Typically, engagement improves within 30 days, and solid lead generation happens between 60–90 days." },
        { q: "Do you create organic and paid campaigns?", a: "Yes. We design organic strategies for reach/brand building, and paid campaigns for conversion/scaling." },
        { q: "How do you measure ROI?", a: "We track KPIs like CTR, CPL, lead quality, and website traffic — all linked to your business outcomes." },
        { q: "Can small businesses afford this?", a: "Absolutely. We have flexible packages for MSMEs that fit budgets without compromising strategy." }
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">FAQs About Social Media</h2>
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
                        Let’s Build Your <span className={`text-transparent bg-clip-text bg-gradient-to-r ${socialGradient}`}>Brand Story</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8">
                        Adswise Marketing’s approach blends human psychology with AI precision. If you’re ready to turn your social presence into a revenue engine, we are ready to help.
                    </p>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-center gap-4">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-green-500">
                            <Globe size={24} />
                        </div>
                        <div>
                            <p className="text-white font-bold">Pan-India Service</p>
                            <p className="text-slate-500 text-sm">Serving Pune, Mumbai, and beyond.</p>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <form onSubmit={handleSubmit} className="bg-black shadow-2xl rounded-2xl p-8 border border-slate-800">
                        <h3 className="text-2xl font-bold mb-6 text-white">Get Your Social Audit</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                <input required name="name" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input required name="email" type="email" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition" placeholder="john@company.com" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Primary Platform of Interest</label>
                            <select name="platformInterest" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition">
                                <option value="" className="bg-slate-900">Select a Platform</option>
                                <option value="Instagram/Facebook">Instagram & Facebook</option>
                                <option value="LinkedIn">LinkedIn (B2B)</option>
                                <option value="YouTube">YouTube</option>
                                <option value="All">Full Social Suite</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Current Challenges</label>
                            <textarea required name="message" onChange={handleInputChange} rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition" placeholder="Low engagement? No leads? Tell us..."></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg shadow-pink-900/40 hover:shadow-pink-900/60 transition transform hover:-translate-y-1 flex items-center justify-center gap-2" style={{ background: accentColor }}>
                            <span>Analyze My Brand</span>
                            <Send size={20} />
                        </button>
                    </form>
                </AnimatedSection>
            </div>
        </div>
    </section>
  );

  const Footer = () => (
      <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-white text-2xl font-bold mb-4">Adswise Marketing</h2>
              <p className="mb-8">From Engagement to Conversion.</p>
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
      <WhatIsSMM />
      <WhyIgnore />
      <ProcessSection />
      <CampaignTypes />
      <CaseStudy />
      <FAQSection />
      {/* <ContactSection />
      <Footer /> */}
    </div>
  );
};

export default SocialMediaMarketing;