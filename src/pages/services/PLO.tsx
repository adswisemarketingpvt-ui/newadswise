import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
    Search, TrendingUp, Zap, Image, CheckCircle, 
    Layers, Package, ClipboardList, Star, ChevronDown, 
    ChevronUp, Send, Target 
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface PLOProps {
    agencyName?: string;
    onContactSubmit?: (formData: ContactFormData) => void;
}

interface ContactFormData {
    name: string;
    email: string;
    marketplace: string;
    skuCount: string;
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

const PLO: React.FC<PLOProps> = ({
    agencyName = "Adswise Ecom",
    onContactSubmit
}) => {
    const accentColor = '#50E3C2'; // Ecom Teal/Mint
    const secondaryColor = '#7B68EE'; // Algorithm Purple
    
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [formData, setFormData] = useState<ContactFormData>({
        name: '', email: '', marketplace: '', skuCount: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onContactSubmit) onContactSubmit(formData);
        alert("Optimization request received! We'll start your marketplace visibility analysis.");
    };

    // ============================================================================
    // SUB-COMPONENTS
    // ============================================================================

    const HeroSection = () => (
        <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm font-semibold text-teal-400 mb-6">
                            <TrendingUp size={16} /> Marketplace Profit Optimization
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            Platform Listing & Optimization: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">
                                Rank Higher, Sell More
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            When you’re selling on Amazon, Flipkart, or Meesho, you’re competing with an entire country. We ensure your product is **visible, attractive, and convincing** enough to win the click and the sale.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-black text-center shadow-lg shadow-teal-900/30 transform transition hover:scale-105" style={{ backgroundColor: accentColor }}>
                                Start Your Audit
                            </a>
                            <a href="#process" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                                See Our Process
                            </a>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-purple-900/10 bg-slate-900/50 backdrop-blur-sm p-4">
                            {/* Abstract Journey Representation */}
                            <div className="bg-black rounded-xl p-6 border border-slate-800">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Search size={24} className="text-purple-400 flex-shrink-0" />
                                        <div className="h-2 w-full bg-slate-800 rounded-full">
                                            <motion.div initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-purple-500 rounded-full"></motion.div>
                                        </div>
                                        <span className="text-sm font-semibold text-white">Visibility</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Image size={24} className="text-teal-400 flex-shrink-0" />
                                        <div className="h-2 w-full bg-slate-800 rounded-full">
                                            <motion.div initial={{ width: '0%' }} animate={{ width: '85%' }} transition={{ duration: 1.5, delay: 0.7 }} className="h-full bg-teal-500 rounded-full"></motion.div>
                                        </div>
                                        <span className="text-sm font-semibold text-white">Click-Through</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle size={24} className="text-green-400 flex-shrink-0" />
                                        <div className="h-2 w-full bg-slate-800 rounded-full">
                                            <motion.div initial={{ width: '0%' }} animate={{ width: '92%' }} transition={{ duration: 1.5, delay: 0.9 }} className="h-full bg-green-500 rounded-full"></motion.div>
                                        </div>
                                        <span className="text-sm font-semibold text-white">Conversion</span>
                                    </div>
                                </div>
                                <div className="text-center mt-6 text-slate-400 text-sm">
                                    Visibility → Click → Conversion → Repeat Buyer
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    );

    const ProblemSection = () => (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                            Why **Platform Listing & Optimization** Decides Whether You Sell or Stay Invisible
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Marketplace success is rarely about the product alone. It’s about how well that product is **presented, structured, priced, positioned, and optimized** every single week. If you’re not near the top, you may as well not exist.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <AnimatedSection delay={0.1}>
                        <div className="p-8 rounded-xl border border-slate-800 bg-black/50 h-full">
                            <Layers size={36} className="text-red-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">The Algorithm Crush</h3>
                            <p className="text-slate-400">Poorly structured listings are ignored by Amazon, Flipkart, & Meesho search algorithms, burying your product.</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className="p-8 rounded-xl border border-slate-800 bg-black/50 h-full">
                            <Package size={36} className="text-yellow-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">High Ad Cost, Low ROI</h3>
                            <p className="text-slate-400">Bad listings lead to low conversions. You spend more on ads only to get fewer sales.</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <div className="p-8 rounded-xl border border-slate-800 bg-black/50 h-full">
                            <Zap size={36} className="text-blue-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Customer Confusion</h3>
                            <p className="text-slate-400">Incomplete or confusing information increases returns and negative reviews. **Clarity = Trust**.</p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );

    const CoreElementsSection = () => {
        const elements = [
            { icon: <Search size={28} className="text-purple-400" />, title: "Search-Friendly Product Titles", desc: "Helps you rank and tells the buyer exactly what they’re about to click. (SEO + User Clarity)" },
            { icon: <Image size={28} className="text-teal-400" />, title: "High-Quality Images That Answer Questions", desc: "Clear photos reduce hesitation. Show scale, texture, packaging, and real usage to build customer confidence." },
            { icon: <ClipboardList size={28} className="text-orange-400" />, title: "Descriptions That Sell, Not Confuse", desc: "A good description is clarity and trust. It’s a compelling 'here’s why this product is worth your money.'" },
            { icon: <Target size={28} className="text-red-400" />, title: "Bullet Points That Address Real Problems", desc: "Most buyers scan. Bullets help them understand benefits quickly and contribute significantly to marketplace SEO." },
            { icon: <Layers size={28} className="text-yellow-400" />, title: "Backend Keywords and Tags", desc: "These unseen fields decide whether your product appears in relevant searches. We maximize their potential." },
            { icon: <Star size={28} className="text-green-400" />, title: "Review and Rating Management", desc: "We manage follow-ups, smart review requests, issue resolution, and compliant negative feedback suppression." },
        ];

        return (
            <section className="py-20 bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
                            Core Elements That Make PLO Work
                        </h2>
                    </AnimatedSection>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {elements.map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="bg-black p-6 rounded-xl border border-slate-800 hover:border-teal-500/30 transition-all h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    </div>
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
            { title: "Deep Marketplace Audit", desc: "A comprehensive check of current listings, competitor analysis, and market gap identification.", icon: <Search size={24} /> },
            { title: "Keyword & SEO Strategy", desc: "Identifying high-volume, low-competition keywords for titles, bullets, and backend tags.", icon: <Target size={24} /> },
            { title: "Content & Creative Refinement", desc: "Writing compelling copy and advising on high-conversion photography/A+ content.", icon: <Image size={24} /> },
            { title: "Launch & Re-indexing", desc: "Implementing the new content and ensuring the marketplace re-indexes your product with the new, optimized data.", icon: <Zap size={24} /> },
            { title: "Monitor & Protect", desc: "Continuous tracking of ranking changes, conversion rate, and review management to maintain performance.", icon: <TrendingUp size={24} /> }
        ];

        return (
            <section id="process" className="py-20 bg-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white">
                            How Platform Listing & Optimization Works Step-by-Step
                        </h2>
                    </AnimatedSection>
                    
                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Connector Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-800 hidden md:block"></div>

                        {steps.map((step, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1} className={`flex items-center mb-12 relative ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 text-left' : 'md:pl-16 text-right'}`}>
                                    <div className="flex items-center gap-4 mb-2 md:block">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-sm border border-teal-500/30">
                                            {idx + 1}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                                    </div>
                                    <p className="text-slate-400 mt-2">{step.desc}</p>
                                </div>
                                
                                {/* Center Icon & Dot */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-black border-4 border-teal-500 flex items-center justify-center shadow-lg shadow-teal-900/50">
                                    {step.icon}
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const CaseStudySnippet = () => (
        <section className="py-20 bg-slate-900 border-y border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="max-w-5xl mx-auto bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 flex flex-col md:flex-row shadow-2xl">
                        <div className="md:w-1/2 p-10 flex flex-col justify-center">
                            <div className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-2">Quick Win Example</div>
                            <h3 className="text-3xl font-bold text-white mb-4">Fixing the Foundation: Home Decor Brand</h3>
                            <p className="text-slate-400 mb-6">
                                **The Problem:** A client selling home décor complained that ads weren’t converting. The problem wasn't the ads; the listings were incomplete, poorly structured, and confusing.
                            </p>
                            <div className="bg-black p-6 rounded-xl border border-slate-800 flex gap-8">
                                <div>
                                    <div className="text-3xl font-bold text-white">2x</div>
                                    <div className="text-xs text-slate-500 uppercase mt-1">Conversion Rate</div>
                                </div>
                                <div className="w-px bg-slate-700"></div>
                                <div>
                                    <div className="text-3xl font-bold text-white">#1 Rank</div>
                                    <div className="text-xs text-slate-500 uppercase mt-1">For Primary Keyword</div>
                                </div>
                            </div>
                            <p className="text-teal-400 text-sm italic mt-4">
                                Result achieved within 45 days, **without touching the ad budget.**
                            </p>
                        </div>
                        <div className="md:w-1/2 bg-slate-900 p-10 flex items-center justify-center border-l border-slate-800 relative overflow-hidden">
                            {/* Abstract Comparison Graphic */}
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="p-4 bg-red-900/30 rounded-lg border border-red-700/50 text-center">
                                    <p className="text-red-400 font-bold text-lg mb-1">Before PLO</p>
                                    <p className="text-3xl font-extrabold text-white">3.2%</p>
                                    <p className="text-xs text-red-300">Conversion Rate</p>
                                </div>
                                <div className="p-4 bg-teal-900/30 rounded-lg border border-teal-700/50 text-center">
                                    <p className="text-teal-400 font-bold text-lg mb-1">After PLO</p>
                                    <p className="text-3xl font-extrabold text-white">6.4%</p>
                                    <p className="text-xs text-teal-300">Conversion Rate</p>
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
            { q: "Is PLO the same as SEO?", a: "No. PLO (Platform Listing Optimization) is SEO specialized for e-commerce marketplaces (Amazon, Flipkart). The algorithm rules and keyword priorities are different from Google's." },
            { q: "What marketplaces do you cover?", a: "We specialize in the major Indian marketplaces: Amazon India, Flipkart, and Meesho, focusing on their specific regional and algorithmic requirements." },
            { q: "How quickly can I see ranking changes?", a: "Initial visibility improvements can be seen within 7-14 days after implementation, but significant rank shifts usually take 30-60 days of consistent optimization." },
            { q: "What is A+ Content, and do you handle it?", a: "A+ Content (or Enhanced Brand Content) is premium media on the product page. Yes, we design, write, and implement A+ content that drastically increases conversion rates." },
        ];

        return (
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 max-w-3xl">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">Marketplace Optimization FAQs</h2>
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
                                        {openFAQ === index ? <ChevronUp size={20} color={accentColor} /> : <ChevronDown size={20} color={accentColor} />}
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
                            Stop Being Invisible. Start Winning.
                        </h2>
                        <p className="text-lg text-slate-400 mb-8">
                            Fill out the form to get a **Free 5-Point Marketplace Listing Audit** for one of your best-selling SKUs. We’ll pinpoint the silent gaps that are killing your conversions.
                        </p>
                        <div className="bg-black p-6 rounded-xl border border-slate-800">
                            <h4 className="text-white font-bold mb-2">Why Optimize Now?</h4>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-teal-500" /> **90%** of traffic goes to the first page.</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-teal-500" /> Optimized listings cut Ad ACOS by driving organic sales.</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-teal-500" /> Our strategies are built for the Indian consumer.</li>
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <form onSubmit={handleSubmit} className="bg-black shadow-2xl rounded-2xl p-8 border border-slate-800">
                            <h3 className="text-2xl font-bold mb-6 text-white">Request Your Free Audit</h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                    <input required name="name" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                    <input required name="email" type="email" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition" placeholder="business@seller.com" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-slate-400 mb-1">Primary Marketplace</label>
                                <select required name="marketplace" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition">
                                    <option value="">Select Platform</option>
                                    <option value="Amazon">Amazon India</option>
                                    <option value="Flipkart">Flipkart</option>
                                    <option value="Meesho">Meesho</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-400 mb-1">Number of SKUs</label>
                                <select required name="skuCount" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition">
                                    <option value="">Select Range</option>
                                    <option value="1-50">1 - 50</option>
                                    <option value="50-200">50 - 200</option>
                                    <option value="200+">200+</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full py-4 rounded-lg text-black font-bold text-lg shadow-lg shadow-teal-900/20 hover:shadow-teal-900/40 transition transform hover:-translate-y-1 flex items-center justify-center gap-2" style={{ backgroundColor: accentColor }}>
                                <span>Get My Free Audit & Strategy</span>
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
                <h2 className="text-white text-2xl font-bold mb-4">{agencyName}</h2>
                <p className="mb-8">Visibility is the new currency of E-commerce.</p>
                <div className="text-sm">
                    © {new Date().getFullYear()} {agencyName}. All rights reserved.
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
            <ProblemSection />
            <CoreElementsSection />
            <ProcessSection />
            <CaseStudySnippet />
            <FAQSection />
            {/* <ContactSection />
            <Footer /> */}
        </div>
    );
};

export default PLO;