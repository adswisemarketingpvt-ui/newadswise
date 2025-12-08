import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Video, Play, Film, Camera, Mic, Scissors, 
  MonitorPlay, Smartphone, BarChart2, TrendingUp, 
  Users, CheckCircle, Plus, Minus, Send, Clapperboard 
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface VideoProductionProps {
  companyName?: string;
  onContactSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  videoType: string;
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

const VideoProduction: React.FC<VideoProductionProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit
}) => {
  const accentColor = '#FF6B35'; // Adswise Orange
  const recColor = '#ef4444'; // Recording Red
  
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', videoType: '', message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Cut! That's a wrap. We'll be in touch shortly.");
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-12 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-sm font-semibold tracking-widest text-slate-400 uppercase">Now Recording</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turning Your Brand Story into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                Visual Conversions
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              People don’t read online, they watch. We create videos that don’t just look cinematic — they perform. From reels to brand films, we drive measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-red-900/30 transform transition hover:scale-105 hover:bg-red-600" style={{ backgroundColor: recColor }}>
                <div className="flex items-center justify-center gap-2">
                    <Play size={20} fill="currentColor" /> Start Production
                </div>
              </a>
              <a href="#portfolio" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                View Showreel
              </a>
            </div>
          </motion.div>
          
          {/* Video Visual - Fully Responsive */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative w-full mt-8 lg:mt-0"
          >
             <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-red-900/10 bg-slate-900">
                 
                 {/* Video Container with Aspect Ratio */}
                 <div className="aspect-video relative w-full h-full flex items-center justify-center overflow-hidden">
                    
                    {/* The Background Video */}
                    <video 
                      className="absolute inset-0 w-full h-full object-cover opacity-90"
                      src="https://adswisemarketing.com//Animated_Logo.mp4"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    />

                    {/* Camera UI Overlays (Kept on top of video) */}
                    <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div> {/* Slight darkening for text readability */}
                    <div className="absolute inset-0 border-[10px] sm:border-[20px] border-black/20 pointer-events-none z-20"></div>
                    
                    <div className="absolute top-6 right-6 lg:top-8 lg:right-8 text-green-500 font-mono text-xs z-30 font-bold bg-black/50 px-2 rounded">BAT 98%</div>
                    <div className="absolute top-6 left-6 lg:top-8 lg:left-8 text-white font-mono text-xs z-30 font-bold bg-black/50 px-2 rounded">ISO 800</div>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:bottom-8 text-white font-mono text-xs z-30 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        REC 00:00:14
                    </div>
                 </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-2 lg:-right-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl z-40">
                <div className="flex items-center gap-3">
                    <MonitorPlay className="text-orange-500" />
                    <div>
                        <p className="font-bold text-white text-sm lg:text-base">4K Ready</p>
                        <p className="text-xs lg:text-sm text-slate-400">Cinema Quality</p>
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const StatsSection = () => (
      <section className="py-12 bg-slate-950 border-y border-slate-900">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <AnimatedSection delay={0.1}>
                      <div className="text-5xl font-bold text-white mb-2">95%</div>
                      <p className="text-slate-400 uppercase tracking-wider text-sm">Message Retention (vs 10% text)</p>
                  </AnimatedSection>
                  <AnimatedSection delay={0.2}>
                      <div className="text-5xl font-bold text-red-500 mb-2">1200%</div>
                      <p className="text-slate-400 uppercase tracking-wider text-sm">More Shares than Text + Image</p>
                  </AnimatedSection>
                  <AnimatedSection delay={0.3}>
                      <div className="text-5xl font-bold text-orange-500 mb-2">80%</div>
                      <p className="text-slate-400 uppercase tracking-wider text-sm">Higher Conversion on Landing Pages</p>
                  </AnimatedSection>
              </div>
          </div>
      </section>
  );

  const WhyVideoMatters = () => {
    const benefits = [
      { icon: <Users size={32} />, title: "Builds Trust Instantly", desc: "It humanizes your brand. Seeing your team and process builds authenticity faster than text." },
      { icon: <TrendingUp size={32} />, title: "Boosts Engagement", desc: "Algorithms love video. More views mean more reach, and more reach means more leads." },
      { icon: <Film size={32} />, title: "Simplifies Ideas", desc: "Got a complex product? A short, well-scripted explainer video does the job in seconds." },
      { icon: <CheckCircle size={32} />, title: "Converts Better", desc: "Product videos and testimonials nudge people closer to buying. Proof, not promises." }
    ];

    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
              Why Business Needs <span className="text-red-500">Video Now</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -8, backgroundColor: '#1e293b' }} 
                  className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 h-full group"
                >
                  <div className="mb-4 text-slate-400 group-hover:text-white transition-colors">{benefit.icon}</div>
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
      { icon: <Users />, title: "Discovery", desc: "Defining goals, audience, and platform." },
      { icon: <Film />, title: "Scripting", desc: "Crafting storylines that connect emotionally." },
      { icon: <Camera />, title: "Production", desc: "Lights, camera, audio. Professional 4K filming." },
      { icon: <Scissors />, title: "Editing", desc: "Sound design, transitions, and platform optimization." },
      { icon: <BarChart2 />, title: "Performance", desc: "Tracking engagement, watch time, and ROI." }
    ];

    return (
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-center">
                  The Adswise Production Process
                </h2>
                <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
                    We don’t shoot and hope. We strategize, script, and produce with ROI in mind.
                </p>
            </AnimatedSection>

            <div className="flex flex-col md:flex-row justify-between items-start gap-4 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>

                {steps.map((step, idx) => (
                    <AnimatedSection key={idx} delay={idx * 0.1} className="w-full md:w-1/5">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-black border-2 border-slate-800 flex items-center justify-center text-red-500 mb-4 shadow-lg z-10">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-slate-400 text-sm">{step.desc}</p>
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
        { title: "Brand Videos", desc: "Cinematic origin stories that showcase your mission.", tag: "Homepage" },
        { title: "Product Demos", desc: "Demonstrate features and handle objections visually.", tag: "SaaS/E-com" },
        { title: "Testimonials", desc: "Real clients, real stories. Social proof in motion.", tag: "Trust" },
        { title: "Reels/Shorts", desc: "Vertical videos that capture attention in 2 seconds.", tag: "Viral" },
        { title: "Corporate", desc: "Training and internal comms that engage your team.", tag: "Internal" }
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white text-center">
                        Types of Videos We Create
                    </h2>
                </AnimatedSection>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl h-full hover:border-red-500/50 transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-slate-800 px-3 py-1 rounded-bl-lg text-xs font-mono text-slate-400 group-hover:text-white">{service.tag}</div>
                                <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white mb-4">
                                    <Play size={16} fill="white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-slate-400 text-sm">{service.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                    
                    {/* CTA Card */}
                    <AnimatedSection delay={0.5}>
                        <div className="bg-gradient-to-br from-red-900/20 to-black border border-red-500/30 p-6 rounded-xl h-full flex flex-col justify-center items-center text-center">
                            <h3 className="text-xl font-bold text-white mb-2">Need something custom?</h3>
                            <p className="text-slate-400 text-sm mb-4">We adapt to your specific vision.</p>
                            <a href="#contact" className="text-red-500 font-bold hover:text-red-400 flex items-center gap-2">
                                Discuss Project <Plus size={16} />
                            </a>
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
                <div className="max-w-5xl mx-auto bg-black rounded-3xl overflow-hidden border border-slate-800 flex flex-col md:flex-row shadow-2xl">
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                        <div className="text-red-500 font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> Live Result
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">From Invisible to Unforgettable</h3>
                        <p className="text-slate-400 mb-6">
                            A Pune tech startup needed to explain their product. We replaced tech jargon with a human story about saving time.
                        </p>
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                            <p className="text-white font-bold text-lg">The Outcome:</p>
                            <p className="text-slate-400 text-sm mt-1">
                                A 2-minute explainer video on LinkedIn generated <span className="text-green-500 font-bold">40% more qualified leads</span> in the first month.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-slate-800 relative min-h-[300px] flex items-center justify-center overflow-hidden">
                         {/* Visual Rep of Video Player */}
                         <div className="w-full h-full bg-cover bg-center opacity-50 scale-105 blur-sm" style={{backgroundImage: "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')"}}></div>
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                <Play size={32} fill="white" className="text-white ml-1" />
                            </div>
                         </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    </section>
  );

  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const faqs = [
        { q: "What’s included in a typical project?", a: "Scriptwriting, shooting, editing, voiceover, and optimization for social/web." },
        { q: "Do you do on-site shoots?", a: "Yes, anywhere in Maharashtra. We also offer remote editing if you have footage." },
        { q: "How long does delivery take?", a: "Depending on scope, usually 10–20 working days from concept to final edit." },
        { q: "Can you create social media ads?", a: "Yes, we specialize in performance-based short videos optimized for conversions." },
        { q: "Do you handle post-production only?", a: "Absolutely. We can edit, color grade, and fix audio on your existing footage." }
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">FAQs About Video</h2>
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
                        Ready to make your brand <span className="text-red-500">unforgettable?</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8">
                        Video Production bridges the gap between your message and your market. Let’s create something worth watching.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-4">
                            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-black"></div>
                            <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-black"></div>
                            <div className="w-12 h-12 rounded-full bg-slate-600 border-2 border-black"></div>
                        </div>
                        <p className="text-slate-400 text-sm">Join 50+ brands growing with video.</p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <form onSubmit={handleSubmit} className="bg-black shadow-2xl rounded-2xl p-8 border border-slate-800">
                        <h3 className="text-2xl font-bold mb-6 text-white">Start Your Project</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                <input required name="name" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition" placeholder="Producer Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input required name="email" type="email" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition" placeholder="studio@company.com" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Video Type</label>
                            <select name="videoType" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition">
                                <option value="" className="bg-slate-900">Select Type</option>
                                <option value="Brand Film">Brand Film</option>
                                <option value="Product Demo">Product Demo</option>
                                <option value="Social Reels">Social Reels</option>
                                <option value="Corporate">Corporate/Training</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Project Details</label>
                            <textarea required name="message" onChange={handleInputChange} rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition" placeholder="Tell us your vision..."></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg shadow-orange-900/20 hover:shadow-orange-900/40 transition transform hover:-translate-y-1 flex items-center justify-center gap-2" style={{ backgroundColor: accentColor }}>
                            <span>Action!</span>
                            <Clapperboard size={20} />
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
              <p className="mb-8">Your Story. Our Lens. Real Results.</p>
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
      <StatsSection />
      <WhyVideoMatters />
      <ProcessSection />
      <ServicesSection />
      <CaseStudy />
      <FAQSection />
      {/* <ContactSection />
      <Footer /> */}
    </div>
  );
};

export default VideoProduction;