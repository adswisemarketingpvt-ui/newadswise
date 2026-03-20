import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ShoppingCart,
  CreditCard,
  Smartphone,
  TrendingUp,
  Package,
  BarChart3,
  Globe,
  Zap,
  ShieldCheck,
  Plus,
  Minus,
  Send,
  Store,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  MapPin,
  Clock,
  Search,
  Award,
  Target,
  Rocket,
  Settings,
  HeartHandshake,
  Link as LinkIcon,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
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

export default function EcommerceDevelopment() {
  const accentColor = "#FF6B35";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Free Consultation Request received!");
  };

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#536186] text-white pt-24 pb-20">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#536186]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#536186]/20 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D3D3D3] border border-[#D3D3D3] rounded-full text-sm font-semibold text-[#363636] mb-6">
              <ShoppingCart size={16} /> Conversion-Focused E-commerce Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Ecommerce Web <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B0C4DE] to-[#C0C0C0]">
                Development Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#D3D3D3] mb-8 leading-relaxed">
              In today's highly competitive online market, selecting the correct
              ecommerce web development services can create an instant impact on
              your business. We focus on speed, security, and conversions to
              help grow your business, providing you with assistance from
              platform selection through to checkout optimisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg font-bold text-[#363636] bg-[#B0C4DE] hover:bg-[#D3D3D3] transition-all shadow-lg shadow-[#536186]/30 flex items-center justify-center gap-2"
              >
                Get Free Consultation <ArrowRight size={20} />
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-white hover:bg-slate-800 transition-all flex items-center justify-center"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const WhatIsSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What are Ecommerce Web Development Services?
            </h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              Ecommerce website development services include full-cycle
              development of an eCommerce website, which includes creating a
              strategy, UX/UI design, backend/frontend website creation,
              integrating other applications, performing testing, and developing
              a plan for site growth after launch.
            </p>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Excellent ecommerce website development services combine technical
              excellence with marketing savvy so that your eCommerce website
              performs well in search engines, has a fast load speed, and
              converts visitors into customers.
            </p>
            <div className="space-y-4">
              {[
                "Responsive Design with Mobile-First Focus and Accessible UX.",
                "Safe Checkout Procedures and PCI Compliance.",
                "SEO Friendly Website Structure, Metadata, and Structured Data.",
                "Fast Hosting Initially and Optimizing Website for Core Web Vitals.",
                "Integration of Inventory, Order Management and ERP/CRM Systems.",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle2
                    className="text-[#536186] shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-[#536186] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="relative">
            <div className="absolute inset-0 bg-green-100 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Ecommerce Analytics"
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const WhyNeedSection = () => (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why Your Business Needs These Services
            </h2>
            <p className="text-slate-600 text-lg">
              A slow store, difficult to use and not working properly with
              search, means you are leaving dollars behind. E-commerce web
              development services are a key driver of growth and enhancing ROI.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <TrendingUp />,
              title: "Increase Conversions",
              desc: "Improve the User Experience and the Checkout Process.",
            },
            {
              icon: <Search />,
              title: "Technical SEO",
              desc: "Work with SEO Best Practices to improve Organic Search Visibility.",
            },
            {
              icon: <Zap />,
              title: "Faster Load Times",
              desc: "Reducing page load times and improving Core Web Vitals.",
            },
            {
              icon: <ShieldCheck />,
              title: "Security & Compliance",
              desc: "Data Security and laying down plans so your Customers trust you.",
            },
            {
              icon: <Layers />,
              title: "Seamless Integrations",
              desc: "Automate your fulfilment and marketing processes effortlessly.",
            },
            {
              icon: <Target />,
              title: "Scalable Growth",
              desc: "Whether starting out or a large Enterprise retailer, we drive ROI.",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-[#D3D3D3]/20 text-[#536186] rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );

  const OurServicesSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Ecommerce Web Development Services
            </h2>
            <p className="text-slate-600 text-lg">
              We provide comprehensive e-commerce development services designed
              for long-term profitability.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {[
            {
              title: "Strategic Planning",
              icon: <Target size={24} />,
              items: [
                "Thorough market analysis & competitor research",
                "Provide buyer personas",
                "Platform selection (hosted vs self-hosted)",
                "CRO analysis for high conversion rates",
              ],
            },
            {
              title: "Design & User Experience",
              icon: <Smartphone size={24} />,
              items: [
                "Wireframes and High-Defined Prototypes",
                "Mobile 1st Product Pages and Checkout",
                "Accessibility & Trust elements",
                "Smooth Page-persuading Elements",
              ],
            },
            {
              title: "Development & Integration",
              icon: <Settings size={24} />,
              items: [
                "Custom-built Stores, Theme & Plugin Dev",
                "Headless Commerce, PWA, API-based",
                "ERP/CRM/Inventory Integrations",
                "Payment & Shipping Integrations",
              ],
            },
            {
              title: "SEO Strategy and Content",
              icon: <Search size={24} />,
              items: [
                "SEO valued product descriptions & categories",
                "Internal linking strategy",
                "Structured data (Schemas) for rich snippets",
                "Planning collections and blogs",
              ],
            },
            {
              title: "Analytics and Reporting",
              icon: <BarChart3 size={24} />,
              items: [
                "Enhanced Ecommerce Google Analytics GA4",
                "Conversion mapping & KPI reports",
                "A/B Testing UX",
                "Iterative Experiments",
              ],
            },
            {
              title: "Advertising & Growing",
              icon: <Rocket size={24} />,
              items: [
                "Shopping & marketplace feed optimization",
                "Dynamic retargeting & PLA campaigns",
                "Automated marketing (Email/SMS)",
                "ROAS-driven media strategies",
              ],
            },
          ].map((srv, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-green-200 transition-colors">
                <div className="w-14 h-14 shrink-0 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center text-slate-800">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {srv.title}
                  </h3>
                  <ul className="space-y-2">
                    {srv.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-slate-600 items-start"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#536186] mt-1 shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );

  const TechnologiesSection = () => (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Platforms & Technologies
            </h2>
            <p className="text-slate-400 text-lg">
              We take a "Best of Class" approach when integrating or building on
              leading platforms & tools that support modern commerce.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Shopify",
            "WooCommerce",
            "Magento / Adobe Commerce",
            "BigCommerce",
            "Headless React/Next.js",
            "Payment Gateways",
            "Amazon/Flipkart Integrations",
            "GraphQL",
          ].map((tech, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-full text-slate-200 font-medium flex items-center gap-2">
                <Zap size={16} className="text-[#536186]" /> {tech}
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.4}>
          <p className="text-center mt-12 text-slate-400 max-w-2xl mx-auto">
            We will advise you on the right technology stack for your e-commerce
            business based on catalog size, anticipated traffic level, and
            long-term growth potential.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );

  const ProcessTimelineSection = () => {
    const steps = [
      {
        t: "Discovery & Audit",
        d: "Business goals, technical audit, Benchmark KPIs.",
      },
      {
        t: "Strategy & Roadmap",
        d: "Platform decision, Sprint Plan, Success Metrics.",
      },
      {
        t: "Design & Prototype",
        d: "Wireframes, Usability Testing, and Approvals.",
      },
      {
        t: "Development Sprint",
        d: "Agile development, Integration, and QA Cycles.",
      },
      {
        t: "Launch & Monitor",
        d: "Staged Roll-out, Performance Tuning, Monitoring.",
      },
      {
        t: "Grow & Optimize",
        d: "CRO, Content Marketing, and Paid Campaigns.",
      },
      { t: "Support & Scale", d: "Maintenance, Updates, Feature Roadmaps." },
    ];

    return (
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Process — How We Build Winning Stores
              </h2>
              <p className="text-slate-600 text-lg">
                A Dedicated Project Manager, Milestone Demos, and Transparent
                Reporting are Available Throughout Your Engagement.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6 mb-8 relative">
                  {i !== steps.length - 1 && (
                    <div className="absolute top-12 left-6 bottom-[-2rem] w-0.5 bg-[#536186]/20"></div>
                  )}
                  <div className="w-12 h-12 bg-[#536186] rounded-full flex items-center justify-center font-bold text-white shrink-0 z-10 shadow-lg">
                    {i + 1}
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm w-full">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {step.t}
                    </h3>
                    <p className="text-slate-600">{step.d}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const AdditionalInfoSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Benefits */}
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Benefits of Choosing Our Agency
            </h2>
            <ul className="space-y-4">
              {[
                "Established record of building successful, high-conversion stores.",
                "Performance-driven development to minimize bounce.",
                "PCI compliant security with regular checkout audits.",
                "Scalable web architecture supporting huge catalogs and B2B pricing.",
                "Development engineered for scaling with marketing & PPC alignment.",
                "We measure success based on revenue generated, not just code lines.",
              ].map((b, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                  <Award className="text-[#536186] shrink-0 mt-1" size={20} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Local Expertise */}
          <AnimatedSection delay={0.2}>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 h-full">
              <div className="w-12 h-12 bg-[#536186]/20 rounded-full flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Local Expertise — Ecommerce in Pune
              </h2>
              <p className="text-slate-600 mb-4">
                If you need an ecommerce website designed in Pune, we can assist
                you with discovery sessions to gain insight on local shopping
                habits.
              </p>
              <p className="text-slate-600 mb-4">
                We integrate local payment gateways designed specifically for
                Indian consumers, and partner with major Indian shipping
                carriers.
              </p>
              <p className="text-slate-600">
                Collaborate remotely or face-to-face to get your site up quickly
                and expand globally.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          {/* Tech Specs */}
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Performance & Security Specs
            </h2>
            <div className="space-y-4">
              <div className="p-4 border border-slate-100 rounded-xl flex gap-4 items-center bg-slate-50">
                <Clock className="text-[#536186] shrink-0" />
                <p className="text-slate-700 font-medium">
                  Page load time targets of &lt; 2.5s on product pages.
                </p>
              </div>
              <div className="p-4 border border-slate-100 rounded-xl flex gap-4 items-center bg-slate-50">
                <Zap className="text-[#536186] shrink-0" />
                <p className="text-slate-700 font-medium">
                  Core Web Vitals & Lighthouse optimization processes.
                </p>
              </div>
              <div className="p-4 border border-slate-100 rounded-xl flex gap-4 items-center bg-slate-50">
                <ShieldCheck className="text-[#536186] shrink-0" />
                <p className="text-slate-700 font-medium">
                  HTTPS, CSP headers, automated vulnerability scans.
                </p>
              </div>
              <div className="p-4 border border-slate-100 rounded-xl flex gap-4 items-center bg-slate-50">
                <Users className="text-[#536186] shrink-0" />
                <p className="text-slate-700 font-medium">
                  RBAC, logging mechanisms, backup & rollback policies.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Industries */}
          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Fashion & Clothing",
                "Health & Beauty",
                "Consumer Electronics",
                "Furniture & Home",
                "Grocery & FMCG",
                "B2B Wholesale & D2C",
              ].map((ind, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center text-slate-700 font-medium p-3 bg-white border border-slate-200 rounded-lg"
                >
                  <Store size={16} className="text-[#536186]" />
                  {ind}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const CaseStudiesAndMetricsSection = () => (
    <section id="case-studies" className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Case Studies & Results
            </h2>
            <p className="text-slate-400 text-lg">
              We measure success by revenue growth and conversions.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <AnimatedSection delay={0.1}>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 h-full">
              <div className="text-[#536186] font-bold mb-2">Fashion D2C</div>
              <div className="text-4xl font-bold mb-4">48%</div>
              <p className="text-slate-400">
                lift in conversion rate after custom checkout redesign.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 h-full">
              <div className="text-[#536186] font-bold mb-2">
                Electronics Retailer
              </div>
              <div className="text-4xl font-bold mb-4">60%</div>
              <p className="text-slate-400">
                faster page loads with 35% organic traffic growth.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 h-full">
              <div className="text-[#536186] font-bold mb-2">B2B Supplier</div>
              <div className="text-4xl font-bold mb-4">3x</div>
              <p className="text-slate-400">
                average order value increase via custom catalog rules.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h3 className="text-2xl font-bold mb-6">Metrics We Monitor</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <BarChart3 className="text-[#536186]" /> Conversion Rate &
                Checkouts
              </li>
              <li className="flex gap-3">
                <ShoppingBag className="text-[#536186]" /> Average Order Value
                (AOV) & Repeat Purchases
              </li>
              <li className="flex gap-3">
                <Users className="text-[#536186]" /> CAC vs CLV & Retention Rate
              </li>
              <li className="flex gap-3">
                <Zap className="text-[#536186]" /> Page Speed & Core Web Vitals
              </li>
              <li className="flex gap-3">
                <TrendingUp className="text-[#536186]" /> Revenue Growth & ROAS
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-6">Pricing Models</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3 items-start">
                <DollarSign className="text-[#536186] shrink-0" />{" "}
                <div>
                  <strong>Set Fee:</strong> For a well-defined project scope.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <DollarSign className="text-[#536186] shrink-0" />{" "}
                <div>
                  <strong>Monthly Retainer:</strong> Ongoing arrangement for
                  expansion & enhancements.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <DollarSign className="text-[#536186] shrink-0" />{" "}
                <div>
                  <strong>Hourly Support:</strong> Short-term maintenance &
                  rapid issue resolution.
                </div>
              </li>
            </ul>
            <p className="mt-6 text-slate-400 italic">
              Our billing uses a defined milestone structure with an established
              budget, eliminating surprises.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const FAQSection = () => {
    const faqs = [
      {
        q: "What are ecommerce web development services and why do I need them?",
        a: "Ecommerce web development services build the technical and design foundation of your online store — improving conversions, security, and scalability.",
      },
      {
        q: "How long does a typical ecommerce build take?",
        a: "Depending on complexity, 8–12 weeks is common for mid-sized stores. Enterprise or highly customized builds may take longer.",
      },
      {
        q: "Can you migrate our store to a new platform with zero data loss?",
        a: "Yes — we carefully migrate products, customers, and order history with staging and rollback strategies to minimize disruption.",
      },
      {
        q: "Do you provide post-launch ecommerce support and marketing?",
        a: "Yes. Our offerings include maintenance, CRO, SEO, and paid advertising to grow traffic and sales after launch.",
      },
      {
        q: "How do you price ecommerce web development projects?",
        a: "We offer fixed-price projects, retainers, and hourly support. Pricing depends on catalog size, integrations, and custom features.",
      },
    ];

    const [open, setOpen] = useState<number | null>(null);

    return (
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-slate-800">{faq.q}</span>
                    {open === i ? (
                      <Minus className="text-green-500" />
                    ) : (
                      <Plus className="text-green-500" />
                    )}
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-slate-600 border-t border-slate-100 pt-4">
                          {faq.a}
                        </div>
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

  const LinksAndCTA = () => (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className=" gap-16 items-center">
          <AnimatedSection
            delay={0.2}
            className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-[40px]"></div>
            <h3 className="text-2xl font-bold mb-4">
              Ready to convert more visitors into customers?
            </h3>
            <p className="text-slate-300 mb-8">
              Our ecommerce web development services combine strategy, design,
              and engineering to build fast, secure, and profitable stores.
            </p>
            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-green-500 hover:bg-green-400 text-slate-950 font-bold rounded-lg text-center transition"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/case-studies"
                className="px-6 py-3 border border-slate-600 hover:bg-slate-800 text-white font-bold rounded-lg text-center transition"
              >
                View Case Studies
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 text-slate-300 hover:text-white font-medium text-center transition"
              >
                Request Pricing →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const ConclusionAndContact = () => (
    <section
      id="contact"
      className="py-20 bg-slate-50 border-t border-slate-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-slate-600 text-lg">
              The e-commerce website development services we offer are rapid,
              secure, and conversion orientated. We develop e-commerce websites
              with a proven process, established experience, and local knowledge
              (in addition to e-commerce website development in Pune) to provide
              you with a partner who will be focused on achieving results.
              Contact our e-commerce web development agency to discuss a store
              that will convert!
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Start a Project — Free Audit
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            />
            <input
              required
              type="tel"
              name="phone"
              placeholder="Your Phone (+91-XXXXXXXXXX)"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            />
            <textarea
              required
              name="message"
              rows={4}
              placeholder="Tell us about your project/store requirement"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition shadow-lg flex items-center justify-center gap-2"
            >
              <Send size={18} /> Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Helmet>
        <title>Ecommerce Web Development Services | Convert Sales</title>
        <meta
          name="description"
          content="Fast, secure ecommerce web development for conversion-focused stores. Custom, scalable solutions — free consultation."
        />
      </Helmet>

      <div className="font-sans min-h-screen text-slate-800">
        <HeroSection />
        <WhatIsSection />
        <WhyNeedSection />
        <OurServicesSection />
        <TechnologiesSection />
        <ProcessTimelineSection />
        <AdditionalInfoSection />
        <CaseStudiesAndMetricsSection />
        <FAQSection />
        <LinksAndCTA />
        <ConclusionAndContact />

        {/* Sticky Footer CTA for Mobile */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50 md:hidden flex justify-center shadow-2xl">
          <a
            href="#contact"
            className="w-full max-w-md py-3 bg-green-500 text-slate-950 font-bold rounded-lg text-center shadow-lg"
          >
            Start a Project — Free Audit
          </a>
        </div>
      </div>
    </>
  );
}
