import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  BookOpen, GraduationCap, Users, Search, 
  Video, BarChart3, Globe, Mail, 
  CheckCircle2, ArrowRight, TrendingUp, 
  Lightbulb, Target, Smartphone, Laptop,
  Award, MousePointerClick, Zap
} from 'lucide-react';

// ============================================================================
// ASSETS & CONFIG
// ============================================================================

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop", 
  student: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop", 
  library: "https://images.unsplash.com/photo-1507842217121-ad763adcd762?q=80&w=2070&auto=format&fit=crop", 
  digitalClass: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
  texture: "https://www.transparenttextures.com/patterns/cubes.png" 
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
            <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply"></div>
        </div>
    );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const EducationPage = ({
  onContactSubmit
}: { onContactSubmit?: (formData: any) => void }) => {
  
  const [formData, setFormData] = useState({
    name: '', institutionName: '', email: '', phone: '', type: '', message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Admissions Inquiry Received. We will analyze your institution's digital presence shortly.");
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white pt-20">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
          <ParallaxImage src={IMAGES.hero} alt="Education Campus" className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-blue-900/30"></div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#facc15 1px, transparent 1px), linear-gradient(90deg, #facc15 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center max-w-5xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-sm font-semibold text-blue-300 mb-8 backdrop-blur-md">
               <GraduationCap size={18} /> Education Marketing Specialists
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-serif tracking-tight">
               Transform Your Institution's <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                 Growth & Enrollment.
               </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
               Empowering schools, colleges, and EdTech platforms with data-driven strategies. We combine SEO, social media, and performance marketing to attract prospective students and build a lasting academic brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-bold text-slate-900 bg-yellow-400 hover:bg-yellow-300 shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2"
               >
                  Boost Enrollments <ArrowRight size={18} />
               </motion.button>
               <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-semibold text-white border border-slate-600 hover:bg-slate-800 transition flex items-center justify-center gap-2"
               >
                  View Case Studies
               </motion.button>
            </div>
        </motion.div>
      </div>
    </header>
  );

  const TrendsSection = () => (
    <section className="py-24 bg-slate-950 border-b border-slate-900 relative">
        <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Digital-Native Student Journey</h2>
                    <p className="text-slate-400">
                        78% of students research courses online before applying. Your digital presence isn't optional—it's essential.
                    </p>
                </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: Smartphone, title: "Mobile First", desc: "Students apply via smartphones. Is your site ready?" },
                    { icon: Video, title: "Video Engagement", desc: "Campus tours & Reels drive 1200% more shares." },
                    { icon: Search, title: "Voice Search", desc: "Optimizing for 'colleges near me' voice queries." },
                    { icon: Target, title: "Personalization", desc: "Data-driven communication for Gen Z applicants." },
                ].map((trend, i) => (
                    <AnimatedSection key={i} delay={i * 0.1}>
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="p-8 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all group h-full relative overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 relative z-10">
                                <trend.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 relative z-10">{trend.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed relative z-10">{trend.desc}</p>
                        </motion.div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
  );

  const ServicesSection = () => {
    const services = [
        { title: "SEO & Answer Engines", icon: Search, desc: "Ranking for 'best MBA college Pune' and 'online courses'. We optimize for Google's Knowledge Graph." },
        { title: "Social & Influencer", icon: Users, desc: "Engaging content telling your campus story. Collaborations with student ambassadors & alumni." },
        { title: "Content & Video", icon: Video, desc: "Blogs, webinars, and campus tour videos that answer student queries and build topical authority." },
        { title: "Performance Ads", icon: Target, desc: "Targeted Google & Meta ads. We optimize for Cost Per Application (CPA) and ROAS." },
        { title: "Enrollment Portals", icon: Globe, desc: "Fast, mobile-friendly websites with integrated application forms and scholarship finders." },
        { title: "Lead Nurturing", icon: Mail, desc: "Automated email drips for every stage: Application Started -> Submitted -> Enrolled." }
    ];

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
             {/* Abstract Background Shapes */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
             
             <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection>
                    <div className="mb-16">
                        <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-2 block">Comprehensive Solutions</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Digital Excellence for Education</h2>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="h-full bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-yellow-500/50 transition-all group relative overflow-hidden flex flex-col"
                            >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/5 rounded-full blur-xl group-hover:bg-yellow-500/10 transition-colors"></div>
                                
                                <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-all shadow-lg">
                                    <service.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                                    {service.desc}
                                </p>
                                <div className="mt-6 pt-6 border-t border-slate-800 flex items-center text-sm font-semibold text-blue-400 group-hover:text-yellow-400 transition-colors cursor-pointer">
                                    Learn More <ArrowRight size={16} className="ml-2" />
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
             </div>
        </section>
    );
  };

  const ResearchSection = () => (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Research-Driven Framework</h2>
                    <p className="text-slate-600">
                        We don't guess. We analyze deep market dynamics to ensure your campaign is rooted in reality.
                    </p>
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <AnimatedSection delay={0.2}>
                        <div className="space-y-6">
                            {[
                                { title: "Market Analysis", desc: "Assessing sector trends & emerging opportunities." },
                                { title: "Competitor Benchmarking", desc: "Identifying gaps in pricing & digital presence." },
                                { title: "Student Personas", desc: "Profiling ideal candidates based on psychographics." },
                                { title: "Performance Tracking", desc: "Continuous refinement of CPA & conversion rates." }
                            ].map((step, i) => (
                                <motion.div 
                                    whileHover={{ x: 10 }}
                                    key={i} 
                                    className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-default"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm border border-blue-200">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-slate-900">{step.title}</h4>
                                        <p className="text-slate-600 text-sm">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
                <div className="order-1 md:order-2 h-[400px] relative rounded-2xl overflow-hidden shadow-2xl group">
                    <ParallaxImage src={IMAGES.student} alt="Student Research" className="w-full h-full" />
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-colors duration-500"></div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-xl max-w-xs border border-white/50"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-1 bg-yellow-100 rounded">
                                <Lightbulb size={16} className="text-yellow-600" />
                            </div>
                            <span className="font-bold text-sm text-slate-900">Insight</span>
                        </div>
                        <p className="text-xs text-slate-700 font-medium">"Data-backed decisions reduce marketing waste by 40%."</p>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );

  const SEOChecklist = () => (
      <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
              <AnimatedSection>
                  <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
                      <div className="text-center mb-10">
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">Technical SEO Checklist</h3>
                          <p className="text-slate-500 text-sm">Critical elements we optimize for higher rankings.</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                          {[
                              "Mobile-First Indexing Optimization",
                              "Core Web Vitals (Speed < 2.5s)",
                              "Schema Markup (Course, Event, Org)",
                              "Local SEO (GMB & Citations)",
                              "Voice Search Readiness",
                              "Secure HTTPS Protocol"
                          ].map((item, i) => (
                              <motion.div 
                                  key={i} 
                                  whileHover={{ x: 5 }}
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                              >
                                  <div className="flex-shrink-0 text-green-500">
                                      <CheckCircle2 size={20} />
                                  </div>
                                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                              </motion.div>
                          ))}
                      </div>
                  </div>
              </AnimatedSection>
          </div>
      </section>
  );

  const ResultsSection = () => (
      <section className="py-24 bg-slate-950 border-t border-slate-900 relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Measurable Impact</h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                      { val: "50%", label: "Organic Traffic Growth", sub: "in 6 months", icon: TrendingUp, color: "text-green-400" },
                      { val: "40%", label: "Lead Cost Reduction", sub: "via optimization", icon: Target, color: "text-blue-400" },
                      { val: "25%", label: "Enrollment Uplift", sub: "year-over-year", icon: GraduationCap, color: "text-yellow-400" },
                      { val: "35%", label: "Social Engagement", sub: "brand advocacy", icon: Users, color: "text-purple-400" }
                  ].map((stat, i) => (
                      <AnimatedSection key={i} delay={i * 0.1}>
                          <motion.div 
                              whileHover={{ y: -10 }}
                              className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center hover:border-blue-500/30 transition-all shadow-lg hover:shadow-blue-500/10"
                          >
                              <div className="flex justify-center mb-4">
                                  <div className={`p-3 rounded-full bg-slate-800 ${stat.color}`}>
                                      <stat.icon size={24} />
                                  </div>
                              </div>
                              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>{stat.val}</div>
                              <div className="text-white font-bold mb-1">{stat.label}</div>
                              <div className="text-slate-500 text-xs uppercase tracking-wide">{stat.sub}</div>
                          </motion.div>
                      </AnimatedSection>
                  ))}
              </div>
          </div>
      </section>
  );

  const ContactSection = () => (
    <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 md:p-16 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-16 relative overflow-hidden text-white border border-slate-800">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your <br/><span className="text-yellow-400">Student Enrollment?</span></h2>
                    <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                        Get your Free Digital Marketing Audit today. Discover untapped opportunities, competitor gaps, and your roadmap to education marketing success.
                    </p>
                    
                    <div className="space-y-4">
                        {[
                            "Current Visibility Assessment",
                            "Competitive Benchmarking",
                            "Quick-Win Opportunities",
                            "Custom Growth Roadmap"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                <CheckCircle2 className="text-yellow-400 shrink-0" size={20} />
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl relative">
                        <div className="absolute -top-4 -right-4 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            Free Audit
                        </div>
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Zap size={20} className="text-yellow-400" /> Request Consultation
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs text-slate-400 ml-1">Your Name</label>
                                <input 
                                    required name="name" onChange={handleInputChange} 
                                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all" 
                                    placeholder="John Doe" 
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-slate-400 ml-1">Institution</label>
                                <input 
                                    required name="institutionName" onChange={handleInputChange} 
                                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all" 
                                    placeholder="University/School" 
                                />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                             <div className="space-y-1">
                                <label className="text-xs text-slate-400 ml-1">Email</label>
                                <input 
                                    required name="email" type="email" onChange={handleInputChange} 
                                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all" 
                                    placeholder="john@edu.com" 
                                />
                             </div>
                             <div className="space-y-1">
                                <label className="text-xs text-slate-400 ml-1">Phone</label>
                                <input 
                                    required name="phone" onChange={handleInputChange} 
                                    className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all" 
                                    placeholder="+91..." 
                                />
                             </div>
                        </div>
                        
                        <div className="space-y-1">
                            <label className="text-xs text-slate-400 ml-1">Type</label>
                            <select name="type" onChange={handleInputChange} className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all appearance-none cursor-pointer">
                                <option value="" className="text-slate-500">Select Institution Type</option>
                                <option value="School">School (K-12)</option>
                                <option value="College">College/University</option>
                                <option value="Coaching">Coaching Institute</option>
                                <option value="EdTech">EdTech Platform</option>
                            </select>
                        </div>
                        
                        <div className="space-y-1">
                            <label className="text-xs text-slate-400 ml-1">Goals</label>
                            <textarea 
                                name="message" rows={3} onChange={handleInputChange} 
                                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-500 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all resize-none" 
                                placeholder="Describe your enrollment targets..." 
                            />
                        </div>
                        
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit" 
                            className="w-full py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                        >
                            Get Free Audit <ArrowRight size={18} />
                        </motion.button>
                    </form>
                </div>

            </div>
        </div>
    </section>
  );

  return (
    <div className="font-sans bg-slate-900 text-slate-100 min-h-screen selection:bg-yellow-400 selection:text-slate-900 overflow-x-hidden">
      <HeroSection />
      <TrendsSection />
      <ServicesSection />
      <ResearchSection />
      <SEOChecklist />
      <ResultsSection />
      <ContactSection />
    </div>
  );
};

export default EducationPage;