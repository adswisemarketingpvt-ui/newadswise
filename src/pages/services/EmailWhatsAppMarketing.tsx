import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageCircle,
  DollarSign,
  Zap,
  Target,
  CheckCircle,
  Users,
  Compass,
  Code,
  Send,
  Briefcase,
  Minus,
  Plus,
  MessageSquare,
  TrendingUp,
  BarChart2,
  Layers,
  Repeat,
} from "lucide-react";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface EmailWhatsAppMarketingProps {
  companyName?: string;
  onContactSubmit?: (formData: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  website?: string;
  platformInterest: string; // Used for "Preferred Channel"
  message: string;
}

// ============================================================================
// ANIMATED SECTION WRAPPER
// ============================================================================

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
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

const EmailWhatsAppMarketing: React.FC<EmailWhatsAppMarketingProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit,
}) => {
  // Theme Colors adapted for Direct Marketing
  const accentColor = "#3B82F6"; // Blue for Email
  const secondaryColor = "#10B981"; // Green for WhatsApp
  const directGradient = "from-blue-500 via-blue-600 to-green-500";

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    website: "",
    platformInterest: "Email",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Thanks! We'll analyze your needs and get back to you with a personalized strategy.");
  };

  // ========================================================================
  // SUB-COMPONENTS
  // ========================================================================

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/connected.png')]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600 rounded-full blur-[150px] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div
              className={`inline-block px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-sm font-semibold mb-6 flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${directGradient}`}
            >
              <Mail size={16} className="text-blue-500" /> Email & WhatsApp Marketing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Quietly{" "}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${directGradient}`}>Profitable</span>{" "}
              Sales Machine
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Boost conversions with smart Email and WhatsApp marketing. Automated, personalized campaigns that nurture leads, increase engagement, and reduce acquisition costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className={`px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-blue-900/40 transform transition hover:scale-105`}
                style={{ background: `linear-gradient(to right, ${accentColor}, ${secondaryColor})` }}
              >
                Start Your Nurturing Flow
              </a>
              <a href="#effectiveness" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                See Effectiveness
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
            {/* Placeholder for Infographic: Social Media Reach vs Direct Inbox Reach */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl flex flex-col gap-6">
              <div className="text-center text-lg font-semibold text-white">Direct Inbox Reach vs Social Media Feed</div>
              <div className="flex items-end justify-around h-64">
                <div className="text-center">
                  <motion.div initial={{ height: 0 }} animate={{ height: 180 }} transition={{ duration: 1, delay: 0.5 }} className="w-16 bg-red-600/70 rounded-t-lg mx-auto" style={{ height: "180px" }} />
                  <p className="text-sm text-slate-400 mt-2">Social Feed (Avg. 5%)</p>
                </div>
                <div className="text-center">
                  <motion.div initial={{ height: 0 }} animate={{ height: 240 }} transition={{ duration: 1, delay: 0.7 }} className="w-16 rounded-t-lg mx-auto" style={{ background: `linear-gradient(to top, ${accentColor}, ${secondaryColor})`, height: "240px" }} />
                  <p className="text-sm text-white font-bold mt-2">Inbox (Avg. 80% Check Rate)</p>
                </div>
              </div>
              <p className="text-center text-xs text-slate-500">The inbox is a guaranteed visit. The feed is a gamble.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const WhyStillBeats = () => (
    <section id="effectiveness" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">
            Why Email & WhatsApp Marketing <span className="text-green-500">Still Beats</span> Every Other Channel
          </h2>
          <p className="text-center text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
            Organic reach is unstable, paid ads get expensive, and algorithms love changing their mind. But <strong>Email & WhatsApp Marketing</strong> stays steady. If you control your list, you control your pipeline.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1} className="p-8 bg-black rounded-xl border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="text-blue-500" /> Reliability & Control
            </h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>No Algorithm Dependency:</strong> Your message delivery isn't throttled by a changing social algorithm.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Direct Inbox:</strong> People check their messages multiple times a day—guaranteed visibility.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><strong>Owned Asset:</strong> Your list is your property, not a rented space from a platform.</span>
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="p-8 bg-black rounded-xl border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="text-green-500" /> Real-World Success
            </h3>
            <p className="text-slate-400 mb-4 italic">
              A coaching institute in Pune built a simple three-step WhatsApp nurturing flow paired with weekly email tips.
            </p>
            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-slate-700">
              <div>
                <div className="text-4xl font-bold text-white">2X</div>
                <div className="text-sm text-slate-500">Conversion Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">~40%</div>
                <div className="text-sm text-slate-500">Cost Reduction</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm mt-4">Leads that earlier went cold started converting at double the rate — all because messages reached them exactly when they were ready.</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const EffectivenessPillars = () => {
    const pillars = [
      { icon: <MessageCircle size={32} />, title: "Direct Access to Attention", desc: "These aren’t channels people 'might' check. They will check them—multiple times a day." },
      { icon: <Users size={32} />, title: "High Intent & Trust", desc: "When someone gives you their number or email, they’ve already shown interest. Half the funnel is handled." },
      { icon: <Code size={32} />, title: "Personalization at Scale", desc: "You can send thousands of messages while still making each one feel like a 1-to-1 conversation." },
      { icon: <Repeat size={32} />, title: "Perfect for Lead Nurturing", desc: "Most people don’t buy on the first touch. These channels warm them up until they do." },
      { icon: <DollarSign size={32} />, title: "Low Cost, High ROI", desc: "Compared to ads, your cost per conversion drops significantly once your flows are in place." },
      { icon: <MessageSquare size={32} />, title: "Behavior-Driven Communication", desc: "Messages are sent based on actions (or inaction), making the communication feel intuitive, not promotional." },
    ];

    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">What Makes This Strategy So Effective?</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div whileHover={{ y: -8, backgroundColor: "#0f172a" }} className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 h-full group transition-all">
                  <div className="mb-4 text-slate-400 group-hover:text-blue-500 transition-colors">{pillar.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm">{pillar.desc}</p>
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
      { title: "1. Understand Audience Behavior", icon: <Compass size={24} />, desc: "We analyze what your users want, their objections, and their most active times. This shapes every message." },
      { title: "2. Build Segments That Make Sense", icon: <Layers size={24} />, desc: "We divide your list by interest level, purchase stage, lead source, and engagement patterns. Segmentation is key." },
      { title: "3. Create Messages That Sound Human", icon: <MessageSquare size={24} />, desc: "No robotic templates. Just natural, convincing communication that focuses on value, not a cringe sales tone." },
      { title: "4. Set Up Automation That Feels Alive", icon: <Zap size={24} />, desc: "We build behavior-based triggers for actions like: Viewed services but didn’t enquire, or started chat but went silent." },
      { title: "5. Run Tests and Iterate", icon: <BarChart2 size={24} />, desc: "We don’t just 'send and pray.' We test send times, message flow, CTA wording, and audience fatigue. This is optimization." },
      { title: "6. Build Long-Term Sequences", icon: <TrendingUp size={24} />, desc: "Newsletters, drip sequences, re-engagement campaigns, flash sales—everything moves the prospect closer to the finish line." },
    ];

    return (
      <section id="process" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-white text-center">How Email & WhatsApp Marketing Works Step-by-Step</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-black border border-slate-800 p-6 rounded-xl h-full flex flex-col hover:shadow-2xl hover:shadow-blue-900/20 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full text-white" style={{ background: `linear-gradient(to right, ${accentColor}, ${secondaryColor})` }}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const CoreElements = () => {
    const elements = [
      { title: "Smart Copywriting That Converts", desc: "Words matter. Messages are crafted to hit emotion and logic together." },
      { title: "Automated Lead Nurturing", desc: "Leads receive the appropriate message at the appropriate moment, without manual effort." },
      { title: "Strong Visual Templates for Email", desc: "Clean, responsive layouts that highlight your offer without overwhelming the reader." },
      { title: "Click-Ready WhatsApp Flows", desc: "Short, punchy messages that feel like a natural conversation — not a broadcast." },
      { title: "List Health Management", desc: "We clean, prune, and organize your list so your deliverability and open rates stay strong." },
      { title: "Analytics and Reporting", desc: "Open rates, click rates, conversions, drop-off points — we track it all to show ROI." },
    ];

    return (
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white text-center">The Core Elements We Include</h2>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-6">
            {elements.map((el, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.08} className="w-full md:w-[45%] lg:w-[30%]">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl h-full transition hover:border-blue-500/50">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-400" /> {el.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{el.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const WhoShouldUse = () => {
    const industries = [
      { icon: <BriefcaseIconPlaceholder />, name: "MSMEs" },
      { icon: <Users size={28} />, name: "Coaches & Trainers" },
      { icon: <Mail size={28} />, name: "Real Estate Teams" },
      { icon: <Plus size={28} />, name: "Healthcare Providers" },
      { icon: <DollarSign size={28} />, name: "E-commerce Brands" },
      { icon: <Send size={28} />, name: "Educational Institutes" },
    ];

    return (
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">Who Should Use This Marketing Engine?</h2>
            <p className="text-center text-lg text-slate-400 mb-12 max-w-3xl mx-auto">Honestly? Anyone serious about conversions. If your customers compare options before buying, this keeps your brand in front of them until they choose you.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-black p-6 rounded-xl border border-slate-800 text-center hover:shadow-md hover:shadow-blue-500/20 transition-all">
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full mb-3 text-white" style={{ background: `linear-gradient(to right, ${secondaryColor}, ${accentColor})` }}>
                    {item.icon}
                  </div>
                  <p className="text-white font-semibold">{item.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // small placeholder for Briefcase icon (to avoid adding another lucide import); replace with Briefcase from lucide-react if you prefer
  function BriefcaseIconPlaceholder() {
    return <Briefcase size={28} />;
  }

  const FAQSection = () => {
    const faqs = [
      { q: "Is Email & WhatsApp Marketing only for large lists?", a: "Not at all. Even a list of a few hundred can outperform paid ads if your messaging is good and hyper-personalized." },
      { q: "Do WhatsApp campaigns irritate customers?", a: "Bad ones do. Good ones don’t. When messages are relevant, valuable, and well-timed (behavior-based), people engage, not get irritated." },
      { q: "How often should campaigns be sent?", a: "It depends entirely on your industry and audience fatigue. We aim for consistency without being pushy, focusing on quality over volume." },
      { q: "Can these platforms really increase conversions?", a: "Absolutely. When combined, they create multiple, low-friction touchpoints that guide users toward action more effectively than a single ad exposure." },
      { q: "What tools do you use?", a: "We are platform-agnostic, using best-in-class tools: Email tools like Brevo, Mailchimp, and Klaviyo; WhatsApp tools like AiSensy, Wati, and Interakt." },
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
                    type="button"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-slate-800 transition"
                  >
                    <span className="font-semibold text-slate-200">{faq.q}</span>
                    {openFAQ === index ? <Minus size={20} color={secondaryColor} /> : <Plus size={20} color={secondaryColor} />}
                  </button>

                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4">
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
              Build Your <span className={`text-transparent bg-clip-text bg-gradient-to-r ${directGradient}`}>Predictable</span> Revenue Engine
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Your warmest leads are sitting in your contact list, waiting for just one good nudge. The sooner you start building your list and automations, the sooner your sales stabilize.
            </p>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: `linear-gradient(to right, ${accentColor}, ${secondaryColor})` }}>
                <Zap size={24} />
              </div>
              <div>
                <p className="text-white font-bold">Start Converting More</p>
                <p className="text-slate-500 text-sm">A predictable system that nurtures, re-engages, and converts.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-black shadow-2xl rounded-2xl p-8 border border-slate-800">
              <h3 className="text-2xl font-bold mb-6 text-white">Let’s Set Up Your Flows</h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                  <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                  <input required name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="john@company.com" />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-400 mb-1">Primary Channel Focus</label>
                <select name="platformInterest" value={formData.platformInterest} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition">
                  <option value="Email" className="bg-slate-900">Email Marketing</option>
                  <option value="WhatsApp" className="bg-slate-900">WhatsApp Marketing</option>
                  <option value="Both" className="bg-slate-900">Combined Strategy (Recommended)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-400 mb-1">Your Website (Optional)</label>
                <input name="website" value={formData.website} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="https://yourwebsite.com" />
              </div>

              <button type="submit" className={`w-full px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-blue-900/40 transform transition hover:scale-[1.02]`} style={{ background: `linear-gradient(to right, ${accentColor}, ${secondaryColor})` }}>
                Get Started Today
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-black font-sans">
      <HeroSection />
      <WhyStillBeats />
      <EffectivenessPillars />
      <ProcessSection />
      <CoreElements />
      <WhoShouldUse />
      <FAQSection />
      {/* <ContactSection /> */}
    </div>
  );
};

export default EmailWhatsAppMarketing;
