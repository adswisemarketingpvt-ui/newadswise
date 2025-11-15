import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, CreditCard, Smartphone, TrendingUp, 
  Package, BarChart3, Globe, Zap, ShieldCheck, 
  Plus, Minus, Send, Store, ShoppingBag 
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface EcommerceDevelopmentProps {
  companyName?: string;
  onContactSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  currentStore?: string;
  platformPreference: string;
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

const EcommerceDevelopment: React.FC<EcommerceDevelopmentProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit
}) => {
  const accentColor = '#FF6B35'; // Adswise Orange
  const profitColor = '#10b981'; // Buy Button Green
  
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', currentStore: '', platformPreference: '', message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Store inquiry received! Let's get you selling.");
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm font-semibold text-green-400 mb-6">
              <ShoppingCart size={16} /> Shopify & WooCommerce Experts
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Launching is Easy. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Selling is Hard.
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              We bridge the gap by creating seamless, conversion-optimized online stores. From local brands to startups, we help you sell smarter and scale faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-green-900/30 transform transition hover:scale-105 hover:bg-green-600" style={{ backgroundColor: profitColor }}>
                Start Selling Online
              </a>
              <a href="#platform" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                View Platforms
              </a>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative hidden lg:block"
          >
             <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-green-900/10 bg-slate-900/50 backdrop-blur-sm p-4">
                 {/* E-com Dashboard UI Mockup */}
                 <div className="bg-black rounded-xl border border-slate-800 p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-white font-bold">Live Store Analytics</h3>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                            <p className="text-slate-400 text-xs uppercase">Total Revenue</p>
                            <p className="text-2xl font-bold text-white">₹12,45,000</p>
                            <p className="text-green-500 text-xs flex items-center mt-1"><TrendingUp size={12} className="mr-1"/> +28%</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                            <p className="text-slate-400 text-xs uppercase">Conversion Rate</p>
                            <p className="text-2xl font-bold text-white">3.8%</p>
                            <p className="text-green-500 text-xs flex items-center mt-1"><TrendingUp size={12} className="mr-1"/> +1.2%</p>
                        </div>
                    </div>
                    {/* Recent Orders List Visual */}
                    <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-800/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-slate-500"><Package size={16}/></div>
                                    <div>
                                        <div className="h-2 w-24 bg-slate-700 rounded mb-1"></div>
                                        <div className="h-2 w-16 bg-slate-800 rounded"></div>
                                    </div>
                                </div>
                                <div className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded">Paid</div>
                            </div>
                        ))}
                    </div>
                 </div>
                 
                 {/* Floating Elements */}
                 <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl">
                    <div className="flex items-center gap-3">
                        <CreditCard className="text-blue-500" />
                        <div>
                            <p className="font-bold text-white">Secure Pay</p>
                            <p className="text-xs text-slate-400">Razorpay / Stripe</p>
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
                        Why E-Commerce is a <span className="text-green-500">Game-Changer</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Consumers don't just buy products; they buy experiences. Friction kills conversion. We blend marketing intelligence with technical expertise to build stores that drive action.
                    </p>
                </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatedSection delay={0.1}>
                    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-green-500/30 transition-all group h-full">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                                <ShoppingBag size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Shopify Experts</h3>
                        </div>
                        <p className="text-slate-400">
                            Best for ease of use, speed, and scalability. We build custom Shopify stores that are ready to handle high traffic and sales volume from day one.
                        </p>
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all group h-full">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                <Store size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">WooCommerce</h3>
                        </div>
                        <p className="text-slate-400">
                            Ideal for deep customization and control. We turn WordPress into a powerhouse e-commerce engine tailored exactly to your business logic.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    </section>
  );

  const ProcessSection = () => {
    const steps = [
      { title: "Discovery", desc: "Understanding products, audience, and platform choice." },
      { title: "Store Setup", desc: "Structuring categories, intuitive navigation, and clean UI." },
      { title: "Integrations", desc: "Secure payment gateways and shipping logic setup." },
      { title: "Optimization", desc: "SEO, speed tuning, and analytics installation." },
      { title: "Launch & Support", desc: "Monitoring performance and fixing bugs post-launch." }
    ];

    return (
      <section id="process" className="py-20 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-white text-center">
                  From Inventory to Income
                </h2>
            </AnimatedSection>

            <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2"></div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {steps.map((step, idx) => (
                        <AnimatedSection key={idx} delay={idx * 0.1} className="relative">
                            <div className="bg-black p-6 rounded-xl border border-slate-800 relative z-10 hover:border-green-500/50 transition-colors h-full flex flex-col justify-between">
                                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white font-bold mb-4 mx-auto">
                                    {idx + 1}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-slate-400 text-sm">{step.desc}</p>
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
    <section className="py-20 bg-black border-y border-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
                <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 flex flex-col md:flex-row shadow-2xl">
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                        <div className="text-green-500 font-bold text-sm uppercase tracking-wider mb-2">Growth Story</div>
                        <h3 className="text-3xl font-bold text-white mb-4">Local Brand Goes National</h3>
                        <p className="text-slate-400 mb-6">
                            A Mumbai skincare startup wanted to expand. We built a fast Shopify store with bundling options and WhatsApp support.
                        </p>
                        <div className="grid grid-cols-2 gap-6 border-t border-slate-800 pt-6">
                            <div>
                                <div className="text-4xl font-bold text-white text-green-400">3.2x</div>
                                <div className="text-xs text-slate-500 uppercase mt-1">Order Growth (45 Days)</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white text-green-400">28%</div>
                                <div className="text-xs text-slate-500 uppercase mt-1">Repeat Purchase Rate</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-black relative flex items-center justify-center overflow-hidden border-l border-slate-800">
                         {/* Abstract Sales Graph */}
                         <div className="w-full h-full p-8 flex items-end justify-center space-x-2">
                             {[20, 35, 30, 45, 60, 55, 75, 90].map((h, i) => (
                                 <motion.div 
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="w-8 bg-gradient-to-t from-green-900 to-green-500 rounded-t"
                                 />
                             ))}
                         </div>
                         <div className="absolute top-6 left-6 bg-slate-800 px-3 py-1 rounded text-xs text-slate-400 border border-slate-700">
                            Live Sales Data
                         </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Features Grid */}
            <AnimatedSection delay={0.2} className="mt-16">
                <h3 className="text-center text-white font-bold text-xl mb-8">Included in Your E-Commerce Build</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                     {[
                        'SEO-Optimized Pages', 'Secure Payment Gateway', 'Automated Emails', 'Inventory Management',
                        'Real-Time Analytics', 'WhatsApp Chatbot', 'Fast Checkout', 'Retargeting Setup'
                     ].map((feat, i) => (
                         <div key={i} className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-slate-300 text-sm font-medium hover:border-green-900 transition-colors">
                             <span className="text-green-500 mr-2">✓</span> {feat}
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
        { q: "Shopify or WooCommerce: Which is better?", a: "It depends. Shopify is best for ease of use and quick scaling; WooCommerce is ideal if you want deep customization and ownership." },
        { q: "How long does it take to build a store?", a: "Typically 3–6 weeks, depending on the number of products, custom features, and integrations." },
        { q: "Will my store be SEO-ready?", a: "Yes. Every store we build is structured for search visibility—optimized URLs, meta tags, and schema markup included." },
        { q: "Can you help with marketing after launch?", a: "Absolutely. We offer full-scale marketing—from paid ads to SEO—to help your store attract and convert customers." },
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 max-w-3xl">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">FAQs About E-Commerce</h2>
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
                        Ready to Turn Products into <span className="text-green-500">Profits?</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8">
                        Your store becomes more than a website—it becomes a high-performing sales machine built for visibility, speed, and growth.
                    </p>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                        <h4 className="text-white font-bold mb-4">Why Choose Adswise?</h4>
                        <div className="flex gap-4 flex-wrap">
                            <div className="flex items-center gap-2 text-slate-300 bg-black px-3 py-1 rounded border border-slate-800">
                                <ShieldCheck size={16} className="text-green-500" /> Secure
                            </div>
                            <div className="flex items-center gap-2 text-slate-300 bg-black px-3 py-1 rounded border border-slate-800">
                                <Smartphone size={16} className="text-green-500" /> Mobile First
                            </div>
                            <div className="flex items-center gap-2 text-slate-300 bg-black px-3 py-1 rounded border border-slate-800">
                                <BarChart3 size={16} className="text-green-500" /> Analytics
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                    <form onSubmit={handleSubmit} className="bg-black shadow-2xl rounded-2xl p-8 border border-slate-800">
                        <h3 className="text-2xl font-bold mb-6 text-white">Start Your Store</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                <input required name="name" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                <input required name="email" type="email" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="john@company.com" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Platform Preference</label>
                            <select name="platformPreference" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition">
                                <option value="" className="bg-slate-900">Select Platform</option>
                                <option value="Shopify">Shopify</option>
                                <option value="WooCommerce">WooCommerce</option>
                                <option value="Not Sure">Not Sure Yet</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Current Store URL (Optional)</label>
                            <input name="currentStore" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="www.mystore.com" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-400 mb-1">Project Details</label>
                            <textarea required name="message" onChange={handleInputChange} rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition" placeholder="What are you selling?"></textarea>
                        </div>
                        <button type="submit" className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg shadow-orange-900/20 hover:shadow-orange-900/40 transition transform hover:-translate-y-1 flex items-center justify-center gap-2" style={{ backgroundColor: accentColor }}>
                            <span>Launch Store</span>
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
              <p className="mb-8">Building Growth Engines for Your Brand.</p>
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
      <WhyItMatters />
      <ProcessSection />
      <CaseStudy />
      <FAQSection />
      {/* <ContactSection />
      <Footer /> */}
    </div>
  );
};

export default EcommerceDevelopment;