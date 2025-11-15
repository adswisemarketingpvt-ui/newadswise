import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
    DollarSign, Target, Zap, Clock, TrendingUp, 
    Users, PieChart, Layers, Send, ChevronDown, 
    ChevronUp, MessageSquare, Briefcase, Film, MapPin , CheckCircle, // <- added
  Search  
} from 'lucide-react';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface MediaBuyingPlanningProps {
    agencyName?: string;
    onContactSubmit?: (formData: ContactFormData) => void;
}

interface ContactFormData {
    name: string;
    email: string;
    industry: string;
    monthlyBudget: string;
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

const MediaBuyingPlanning: React.FC<MediaBuyingPlanningProps> = ({
    agencyName = "Adswise Strategy",
    onContactSubmit
}) => {
    const accentColor = '#8A2BE2'; // Algorithm Violet
    const secondaryColor = '#FFD700'; // Gold for ROI
    
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [formData, setFormData] = useState<ContactFormData>({
        name: '', email: '', industry: '', monthlyBudget: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onContactSubmit) onContactSubmit(formData);
        alert("Strategy request received! We're analyzing your media opportunities.");
    };

    // ============================================================================
    // SUB-COMPONENTS
    // ============================================================================

    const HeroSection = () => (
        <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
            {/* Abstract Data Background */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-900/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]"></div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-sm font-semibold text-yellow-400 mb-6">
                            <DollarSign size={16} /> Predictable ROI Engine
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            Media Buying & Planning: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-indigo-500">
                                Making Every Rupee Count
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            Stop the guesswork. We create strategic media plans that focus on **relevant reach**, ensuring your budget lands exactly where high-intent customers spend their time.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-white text-center shadow-lg shadow-indigo-900/30 transform transition hover:scale-105" style={{ backgroundColor: accentColor }}>
                                Build My Strategy
                            </a>
                            <a href="#core" className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white text-center hover:bg-slate-900 transition">
                                Our Core Focus
                            </a>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Abstract Infographic: Budget -> Audience -> ROI */}
                        <div className="relative p-6 bg-black/50 rounded-2xl border border-slate-800 shadow-xl">
                            <div className="flex justify-around items-center h-48">
                                <div className="text-center">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }} className="w-16 h-16 rounded-full bg-slate-800 border-4 border-indigo-500 flex items-center justify-center mx-auto mb-2">
                                        <DollarSign size={28} className="text-indigo-400" />
                                    </motion.div>
                                    <p className="text-sm text-slate-300">Budget</p>
                                </div>
                                <Clock size={24} className="text-slate-500 mx-4" />
                                <div className="text-center">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, duration: 0.5 }} className="w-16 h-16 rounded-full bg-slate-800 border-4 border-yellow-500 flex items-center justify-center mx-auto mb-2">
                                        <Users size={28} className="text-yellow-400" />
                                    </motion.div>
                                    <p className="text-sm text-slate-300">Audience</p>
                                </div>
                                <Zap size={24} className="text-slate-500 mx-4" />
                                <div className="text-center">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, duration: 0.5 }} className="w-16 h-16 rounded-full bg-slate-800 border-4 border-green-500 flex items-center justify-center mx-auto mb-2">
                                        <TrendingUp size={28} className="text-green-400" />
                                    </motion.div>
                                    <p className="text-sm text-slate-300">Predictable ROI</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    );

    const CoreFocusSection = () => {
        const coreElements = [
            { icon: <Users size={36} className="text-indigo-400" />, title: "Audience Mapping", desc: "We dig deep into behavior patterns, platforms they trust, and buying habits to cut the ad spend fluff." },
            { icon: <PieChart size={36} className="text-yellow-400" />, title: "Budget Allocation", desc: "Structured spending across Awareness, Engagement, and Conversion to stop starving the bottom-funnel." },
            { icon: <Layers size={36} className="text-red-400" />, title: "Creative & Format Selection", desc: "Matching content (video, visual, search text) to the platform ecosystem for maximum engagement." },
            { icon: <Target size={36} className="text-green-400" />, title: "Placement Tactics", desc: "Filtering out noisy placements and focusing budget on high-performing spots where ad costs are efficient." },
        ];

        return (
            <section id="core" className="py-20 bg-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="text-center max-w-4xl mx-auto mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                                The Core of Strong Media Buying & Planning
                            </h2>
                            <p className="text-slate-400 text-lg">
                                Real strategy starts with understanding how humans behave across platforms. We align your budget with these behaviors to prevent campaigns from bleeding quietly.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreElements.map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-full hover:border-indigo-500/30 transition-all">
                                    <div className="mb-4 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const AdvancedStrategySection = () => {
        const advancedSteps = [
            { title: "Funnel-Based Planning", desc: "We map users from 'First Touch' to 'Repeat Purchase,' giving every stage its own budget and targeted message.", icon: <Layers size={24} className="text-yellow-400" /> },
            { title: "Cohort-Based Spending", desc: "Identifying who converts fastest and who drains the budget, shifting resources instantly toward profitable customer clusters.", icon: <Users size={24} className="text-red-400" /> },
            { title: "Cross-Platform Leverage", desc: "Connecting the dots—Instagram to Google to YouTube—so your message follows the user naturally across walled gardens.", icon: <Zap size={24} className="text-indigo-400" /> },
            { title: "ROI Dashboarding and Daily Pivots", desc: "Practical planning: We flag inefficiencies and move budgets fast when performance dips or spikes. No long campaigns running on autopilot.", icon: <TrendingUp size={24} className="text-green-400" /> },
        ];

        return (
            <section className="py-20 bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
                            Advanced Media Buying & Planning for Brands Ready to Scale
                        </h2>
                    </AnimatedSection>
                    
                    <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                        {advancedSteps.map((item, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="bg-black p-6 rounded-xl border border-slate-800 flex gap-4 items-start h-full hover:border-yellow-500/30 transition-colors">
                                    <div className="flex-shrink-0 mt-1">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    const PlatformStrategySection = () => {
        const platforms = [
            { 
                platform: "Meta (Facebook + Instagram)", 
                bestFor: "Awareness, Engagement, Retargeting", 
                strength: "Impulse audiences, visual storytelling",
                optimizations: ["Custom Audiences", "Lookalikes", "Creative Sequencing", "Frequency Control"],
                icon: <MessageSquare size={32} className="text-blue-500" />
            },
            { 
                platform: "Google Ads", 
                bestFor: "High-Intent Users", 
                strength: "Captures urgency via search intent",
                optimizations: ["Search Clarity", "Exact-Match Keywords", "Conversion-Led Landing Pages", "Budget Control"],
                icon: <Search size={32} className="text-red-500" />
            },
            { 
                platform: "OTT (Hotstar, Zee5, etc.)", 
                bestFor: "Broad but Targeted Reach", 
                strength: "Brand lift and trust via video intent",
                optimizations: ["10–20 Second Storytelling", "Prime-Time Scheduling", "Regional Audience Splits", "Retargeting"],
                icon: <Film size={32} className="text-purple-500" />
            },
            { 
                platform: "Local and Hyperlocal", 
                bestFor: "Stores, Clinics, Restaurants", 
                strength: "Action-oriented audiences",
                optimizations: ["Local Search & Maps Ads", "Nearby Interests Targeting", "Vernacular Creatives", "Geo-Fence Optimization"],
                icon: <MapPin size={32} className="text-green-500" />
            },
        ];

        return (
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
                            Media Buying & Planning Across Different Platforms
                        </h2>
                    </AnimatedSection>
                    
                    <div className="grid lg:grid-cols-2 gap-8">
                        {platforms.map((p, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 h-full hover:border-indigo-500/50 transition-colors">
                                    <div className="flex items-center gap-4 mb-4">
                                        {p.icon}
                                        <h3 className="text-2xl font-bold text-white">{p.platform}</h3>
                                    </div>
                                    <p className="text-sm text-slate-400 mb-4 italic">
                                        **Best for:** {p.bestFor} | **Strength:** {p.strength}
                                    </p>
                                    <h4 className="font-semibold text-slate-200 mb-2">We Optimize:</h4>
                                    <ul className="space-y-1 text-slate-400 text-sm">
                                        {p.optimizations.map((opt, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <Target size={14} className="text-yellow-500 flex-shrink-0" /> {opt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        );
    };
    
    const GainSection = () => {
        const gains = [
            'Cleaner Spending', 
            'Lower Cost Per Lead/Sale', 
            'Higher-Quality Audiences', 
            'Stronger Multi-Platform Visibility', 
            'Better ROI Clarity', 
            'More Predictable Scaling', 
            'Faster Learning Cycles', 
            'Less Dependency on "Hit or Miss" Boosting'
        ];

        return (
            <section className="py-20 bg-slate-950 border-t border-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-white">
                            What You Actually Gain From Smart Media Buying
                        </h2>
                    </AnimatedSection>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {gains.map((gain, idx) => (
                            <AnimatedSection key={idx} delay={idx * 0.1}>
                                <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center gap-3 hover:bg-black transition">
                                    <TrendingUp size={20} className="text-green-400 flex-shrink-0" />
                                    <span className="text-slate-200 font-medium text-sm">{gain}</span>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <AnimatedSection delay={0.8} className="mt-12">
                        <blockquote className="text-xl italic text-slate-400 max-w-3xl mx-auto border-l-4 border-indigo-500 pl-4">
                            "The brands that win aren’t the loudest—they’re the ones that know exactly where to speak and how much to spend."
                        </blockquote>
                    </AnimatedSection>
                </div>
            </section>
        );
    };

    const FAQSection = () => {
        const [openFAQ, setOpenFAQ] = useState<number | null>(null);
        const faqs = [
            { q: "Is Media Buying & Planning only for big brands?", a: "Not at all. Smaller brands benefit even more because their budgets can’t afford waste. Strategic planning is crucial for maximizing limited capital." },
            { q: "Will planning guarantee sales?", a: "Planning prevents unnecessary waste and increases your conversion odds drastically. However, product, pricing, and market competition remain key factors." },
            { q: "How long before results show?", a: "Most brands see clarity in their data in 2–4 weeks and scale in 6–12 weeks, depending on the industry and current market saturation." },
            { q: "Do you only plan, or also execute?", a: "We do both—full strategic planning, media buying, continuous optimization, and transparent tracking to ensure end-to-end performance." },
            { q: "Do you include OTT buying for smaller brands?", a: "Yes. OTT (like Hotstar, JioCinema) has become accessible and powerful even for tight budgets, offering excellent targeted reach." },
        ];

        return (
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 max-w-3xl">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">FAQs on Media Strategy</h2>
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
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                            Ready to Plan Smarter and Scale Faster?
                        </h2>
                        <p className="text-lg text-slate-400 mb-8">
                            Let’s build your foundational media strategy and turn your scattered budget into a predictable, high-growth engine. Stop gambling, start scaling.
                        </p>
                        <div className="bg-black p-6 rounded-xl border border-slate-800">
                            <h4 className="text-white font-bold mb-2">Our Planning Promise:</h4>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-indigo-500" /> Data-First Audience Discovery</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-indigo-500" /> Funnel-Optimized Budget Allocation</li>
                                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-indigo-500" /> Daily Oversight and Agile Pivots</li>
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <form onSubmit={handleSubmit} className="bg-black shadow-2xl rounded-2xl p-8 border border-slate-800">
                            <h3 className="text-2xl font-bold mb-6 text-white">Start Your Strategic Review</h3>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                                    <input required name="name" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                                    <input required name="email" type="email" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition" placeholder="business@brand.com" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-slate-400 mb-1">Industry</label>
                                <select required name="industry" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition">
                                    <option value="">Select Industry</option>
                                    <option value="ecom">E-commerce/D2C</option>
                                    <option value="realestate">Real Estate/Builders</option>
                                    <option value="saas">SaaS/Tech</option>
                                    <option value="service">Local Services</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-400 mb-1">Current Monthly Ad Budget (INR)</label>
                                <select required name="monthlyBudget" onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition">
                                    <option value="">Select Range</option>
                                    <option value="<1L">Under ₹1 Lakh</option>
                                    <option value="1L-5L">₹1 Lakh - ₹5 Lakh</option>
                                    <option value="5L-15L">₹5 Lakh - ₹15 Lakh</option>
                                    <option value="15L+">₹15 Lakh+</option>
                                </select>
                            </div>
                            <button type="submit" className="w-full py-4 rounded-lg text-white font-bold text-lg shadow-lg shadow-indigo-900/40 transition transform hover:-translate-y-1 flex items-center justify-center gap-2" style={{ backgroundColor: accentColor }}>
                                <span>Get My Media Plan Blueprint</span>
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
                <p className="mb-8">Maximize ROI. Master the Media Mix.</p>
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
            <CoreFocusSection />
            <AdvancedStrategySection />
            <PlatformStrategySection />
            <GainSection />
            <FAQSection />
            {/* <ContactSection />
            <Footer /> */}
        </div>
    );
};

export default MediaBuyingPlanning;