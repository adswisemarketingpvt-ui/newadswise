import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Activity, Heart, ShieldCheck, UserPlus, 
  Stethoscope, Star, Search, Smartphone, 
  Video, Mail, Calendar, CheckCircle2, 
  TrendingUp, ArrowRight, Lock, MapPin,
  FileText, Database
} from 'lucide-react';

// ============================================================================
// ASSETS & CONFIG
// ============================================================================

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop", // Modern Hospital/Tech
  doctor: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop", // Doctor with tablet
  lab: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", // Clean Medical BG
  texture: "https://www.transparenttextures.com/patterns/cubes.png" // Subtle pattern
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
            <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
        </div>
    );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const HealthcarePage = ({
  onContactSubmit
}: { onContactSubmit?: (formData: any) => void }) => {
  
  const [formData, setFormData] = useState({
    name: '', practiceName: '', email: '', phone: '', specialty: '', message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Consultation Request Received. We will analyze your practice's visibility shortly.");
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeartbeatLine = () => (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 opacity-30">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 stroke-sky-500 fill-none">
            <motion.path
                d="M0,60 L200,60 L230,10 L260,110 L290,60 L400,60 L430,20 L460,100 L490,60 L600,60 L630,10 L660,110 L690,60 L1200,60"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
        </svg>
    </div>
  );

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
          <ParallaxImage src={IMAGES.hero} alt="Healthcare Technology" className="w-full h-full" />
          {/* Gradient for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40"></div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/30 rounded-full text-sm font-semibold text-sky-400 mb-8 backdrop-blur-md">
                   <Activity size={16} className="animate-pulse" /> Patient Acquisition Specialists
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                   Care for Patients. <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-400 to-green-400">
                     We Care for Growth.
                   </span>
                </h1>
                <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl font-light">
                   Adswise builds compliant, high-trust digital ecosystems for hospitals and clinics. We transform online searches into booked appointments while ensuring HIPAA/GDPR compliance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                   <button className="px-8 py-4 rounded-lg font-bold text-white shadow-lg shadow-sky-900/30 transform transition hover:scale-105 bg-gradient-to-r from-sky-600 to-teal-600 border border-sky-500/20">
                      Get Practice Audit
                   </button>
                   <div className="flex items-center gap-3 px-4 py-4 bg-slate-900/50 backdrop-blur rounded-lg border border-slate-700">
                       <ShieldCheck className="text-teal-400" /> 
                       <span className="text-sm font-medium text-slate-300">Data Privacy Guaranteed</span>
                   </div>
                </div>
            </motion.div>

            {/* Interactive Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
            >
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/60 backdrop-blur-xl p-6 shadow-2xl shadow-sky-500/10">
                    <div className="flex justify-between items-center border-b border-slate-700 pb-4 mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 ring-2 ring-sky-500/20">
                                <Stethoscope size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">Dr. Sharma's Clinic</h3>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 
                                    <span className="text-xs text-green-400 font-medium">Accepting Patients</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-700">
                             <div className="text-xl font-bold text-white">4.9 <span className="text-yellow-500 text-base">★</span></div>
                             <div className="text-[10px] text-slate-400 uppercase tracking-wider">200+ Reviews</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {/* Simulated Appointment */}
                        <div className="bg-sky-500/10 border-l-4 border-sky-500 p-4 rounded-r-lg flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-sky-500/20 rounded text-sky-400">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <div className="text-sm text-white font-bold">New Booking Request</div>
                                    <div className="text-xs text-sky-200">Dental Checkup • Tomorrow 10:00 AM</div>
                                </div>
                            </div>
                            <button className="px-3 py-1 bg-sky-600 text-white text-xs font-bold rounded shadow hover:bg-sky-500 transition">View</button>
                        </div>

                        {/* Mini Chart */}
                        <div className="bg-slate-950/80 p-4 rounded-lg border border-slate-800">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Patient Volume</span>
                                <span className="text-xs text-green-400 font-bold flex items-center gap-1"><TrendingUp size={12}/> +24%</span>
                            </div>
                            <div className="flex items-end justify-between h-20 gap-1.5">
                                {[30, 45, 40, 60, 75, 50, 85].map((h, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                        className={`w-full rounded-t-sm ${i === 6 ? 'bg-teal-500' : 'bg-slate-700'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
      <HeartbeatLine />
    </header>
  );

  const TrendsSection = () => (
    <section className="py-20 bg-slate-950 border-b border-slate-900 relative">
        <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
                <h2 className="text-3xl font-bold text-center mb-16 text-white">The Digital Health Shift</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { icon: Smartphone, label: "65%", text: "Patients Search on Mobile" },
                    { icon: Star, label: "88%", text: "Trust Online Reviews" },
                    { icon: Video, label: "80%", text: "Prefer Video Content" },
                    { icon: MapPin, label: "40%", text: "Voice Search Growth" },
                ].map((stat, i) => (
                    <AnimatedSection key={i} delay={i * 0.1}>
                        <div className="text-center p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition-all group">
                            <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center text-sky-500 mb-6 group-hover:scale-110 group-hover:bg-sky-500/20 transition-all duration-300 shadow-lg">
                                <stat.icon size={28} />
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">{stat.label}</div>
                            <p className="text-slate-400 text-sm font-medium">{stat.text}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
  );

  const ServicesGrid = () => {
    const services = [
        { title: "Medical SEO", icon: Search, desc: "Ranking for specialty keywords like 'Best Cardiologist' or 'Emergency Dentist'. Schema markup included." },
        { title: "Trust Content", icon: FileText, desc: "Medically accurate blogs and doctor-led videos that answer patient concerns and build authority." },
        { title: "Reputation Mgmt", icon: Star, desc: "Automated systems to collect 5-star reviews and professionally respond to patient feedback." },
        { title: "Patient Ads", icon: TargetIcon, desc: "High-ROI Google Ads for booking appointments. Call-only campaigns for urgent care." },
        { title: "Secure Websites", icon: Lock, desc: "HIPAA-compliant, SSL-encrypted sites with seamless EMR integration and fast mobile loading." },
        { title: "Retention Systems", icon: Heart, desc: "Email & SMS automation for checkup reminders, seasonal health tips, and birthday wishes." }
    ];

    return (
        <section className="py-24 bg-slate-950 relative">
             <div className="container mx-auto px-4">
                <AnimatedSection>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-teal-500 font-bold uppercase tracking-widest text-xs mb-2 block">Our Treatments</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">Comprehensive Digital Care</h2>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1}>
                            <div className="h-full bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:bg-slate-800 hover:border-sky-500/30 transition-all group relative overflow-hidden">
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-slate-950 border border-slate-700 rounded-lg flex items-center justify-center text-sky-500 mb-6 group-hover:text-white group-hover:bg-sky-500 group-hover:border-sky-400 transition-all shadow-lg">
                                        <service.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
             </div>
        </section>
    );
  };

  const FunnelSection = () => (
    <section className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">The Patient Acquisition Funnel</h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-sky-900 via-sky-500 to-sky-900 z-0 opacity-30"></div>

                {[
                    { step: "Awareness", action: "Symptom Search", detail: "SEO & Content" },
                    { step: "Consideration", action: "Doctor Reviews", detail: "Reputation Mgmt" },
                    { step: "Decision", action: "Booking", detail: "UX & Forms" },
                    { step: "Retention", action: "Loyalty", detail: "Email Nurture" }
                ].map((item, i) => (
                    <AnimatedSection key={i} delay={i * 0.2}>
                        <div className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-slate-950 border-4 border-slate-800 flex flex-col items-center justify-center mb-6 shadow-xl group-hover:border-sky-500 transition-all duration-300 relative">
                                <span className="text-sky-500 font-bold text-lg">{i + 1}</span>
                                <div className="absolute inset-0 rounded-full border border-sky-500/0 group-hover:border-sky-500/50 group-hover:scale-110 transition-all duration-500"></div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{item.action}</h3>
                            <div className="px-3 py-1 bg-slate-800 rounded text-xs font-medium text-teal-400 border border-slate-700">{item.detail}</div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    </section>
  );

  const RoiChart = () => (
      <section className="py-24 bg-slate-950">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                  <AnimatedSection>
                      <div className="inline-block p-2 bg-teal-500/10 rounded-lg mb-4 border border-teal-500/20">
                          <Activity className="text-teal-400" size={24} />
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Measured Vital Signs</h2>
                      <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                          We track practice growth like a medical chart. No guesswork—just data. 
                          Our clients see consistent improvement in organic traffic, new patient inquiries, 
                          and reputation scores within 3-6 months.
                      </p>
                      <ul className="space-y-4">
                          {[
                              "45% Increase in Organic Traffic",
                              "30% Reduction in Cost-Per-Lead",
                              "28% More Appointment Bookings",
                              "4.2 → 5.2 Average Star Rating"
                          ].map((stat, i) => (
                              <li key={i} className="flex items-center gap-3 text-slate-300 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                                  <CheckCircle2 className="text-teal-500 shrink-0" size={20} />
                                  <span className="font-medium">{stat}</span>
                              </li>
                          ))}
                      </ul>
                  </AnimatedSection>
              </div>

              <div className="lg:w-1/2 w-full relative">
                  <AnimatedSection delay={0.2}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                          <ParallaxImage src={IMAGES.doctor} alt="Doctor Analysis" className="h-[500px] w-full" />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                          
                          <div className="absolute bottom-8 left-8 right-8">
                              <div className="bg-slate-900/90 backdrop-blur-md p-6 rounded-xl border border-slate-700 shadow-2xl">
                                  <h3 className="text-white font-bold mb-4 border-b border-slate-700 pb-2">Growth Metrics</h3>
                                  <div className="space-y-4">
                                      {[
                                          { label: "Patient Inquiries", val: 35, color: "bg-sky-500" },
                                          { label: "Social Engagement", val: 40, color: "bg-teal-500" },
                                          { label: "Organic Reach", val: 45, color: "bg-blue-600" }
                                      ].map((item, i) => (
                                          <div key={i}>
                                              <div className="flex justify-between text-xs text-slate-400 mb-1 font-bold uppercase">
                                                  <span>{item.label}</span>
                                                  <span className="text-white">+{item.val}%</span>
                                              </div>
                                              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                                  <motion.div 
                                                      initial={{ width: 0 }}
                                                      whileInView={{ width: `${item.val}%` }}
                                                      transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 }}
                                                      className={`h-full rounded-full ${item.color}`}
                                                  ></motion.div>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </AnimatedSection>
              </div>
          </div>
      </section>
  );

  const ContactSection = () => (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="bg-gradient-to-br from-slate-900 to-black p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl flex flex-col md:flex-row gap-12 relative overflow-hidden">
                {/* Decorative Blob */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Schedule Your <br/><span className="text-sky-500">Digital Audit</span></h2>
                    <p className="text-slate-400 mb-8 text-lg">
                        Get a comprehensive report on your practice's visibility, local rankings, and competitor analysis. HIPAA compliant and fully confidential.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-xl border border-slate-800/50">
                            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-teal-500 shrink-0">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Data Privacy Guaranteed</h4>
                                <p className="text-sm text-slate-500">Strict adherence to medical data laws.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-xl border border-slate-800/50">
                            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-teal-500 shrink-0">
                                <Activity size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Growth Roadmap</h4>
                                <p className="text-sm text-slate-500">30, 60, and 90-day execution plans.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4 bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                        <div className="grid grid-cols-2 gap-4">
                            <input 
                                required name="name" onChange={handleInputChange} 
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-sky-500 outline-none transition-colors" 
                                placeholder="Dr. Name" 
                            />
                            <input 
                                required name="practiceName" onChange={handleInputChange} 
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-sky-500 outline-none transition-colors" 
                                placeholder="Clinic Name" 
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <input 
                                required name="email" type="email" onChange={handleInputChange} 
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-sky-500 outline-none transition-colors" 
                                placeholder="Email" 
                            />
                            <input 
                                required name="phone" onChange={handleInputChange} 
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-sky-500 outline-none transition-colors" 
                                placeholder="Phone" 
                            />
                        </div>
                        <select name="specialty" onChange={handleInputChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-sky-500 outline-none transition-colors appearance-none">
                            <option value="">Select Specialty</option>
                            <option value="Dental">Dentistry</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Orthopedic">Orthopedics</option>
                            <option value="Pediatric">Pediatrics</option>
                            <option value="General">General Practice/Hospital</option>
                        </select>
                        <textarea 
                            name="message" rows={3} onChange={handleInputChange} 
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-sky-500 outline-none transition-colors" 
                            placeholder="Current challenges..." 
                        />
                        <button type="submit" className="w-full py-4 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold rounded-lg shadow-lg shadow-sky-900/40 transition-all flex items-center justify-center gap-2">
                            Request Free Audit <ArrowRight size={18} />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
  );

  // Helper for services grid
  const TargetIcon = ({size}: {size: number}) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
      </svg>
  );

  return (
    <div className="font-sans bg-slate-950 text-slate-100 min-h-screen selection:bg-sky-500 selection:text-white overflow-x-hidden">
      <HeroSection />
      <TrendsSection />
      <ServicesGrid />
      <FunnelSection />
      <RoiChart />
      <ContactSection />
    </div>
  );
};

export default HealthcarePage;