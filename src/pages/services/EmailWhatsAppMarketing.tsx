import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Mail,
  Zap,
  CheckCircle,
  Users,
  Compass,
  Code,
  Send,
  Briefcase,
  Minus,
  Plus,
  MessageSquare,
  BarChart2,
  Layers,
  Repeat,
  Target,
  DollarSign,
  ThumbsUp,
  Settings,
  Shield,
  Smartphone,
  TrendingUp,
  MessageCircle,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

// ============================================================================
// COLOR PALETTE CONSTANTS
// ============================================================================
const COLORS = {
  STONE_GRAY: "#536186",
  FOG_GRAY: "#D3D3D3",
  CHARCOAL: "#363636",
  SILVER: "#C0C0C0",
  ASH_GRAY: "#B0C4DE",
  WHITE: "#FFFFFF",
};

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
  platformInterest: string;
  message: string;
}

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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const HeroSection = () => (
    <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white text-[#363636]">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#B0C4DE] rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#536186] rounded-full blur-[120px] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-8 leading-[1.1] text-[#363636]">
              Email Marketing Agency —
              <span style={{ color: COLORS.STONE_GRAY }}>
                Adswise Marketing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#363636]/80 mb-8 leading-relaxed max-w-xl">
              As a specialist email marketing agency, we specialize in the
              design and delivery of email and WhatsApp marketing programs that
              help grow customer value. In the first 100 words: We craft
              targeted email flows, lists, and creative that convert subscribers
              into repeat customers. Whatever your requirement - monthly
              newsletters, lifecycle automation, or conversational WhatsApp
              marketing - our approach is designed to help you drive increases
              in opens, clicks, and sales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button
                className="px-8 py-4 rounded-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: COLORS.STONE_GRAY }}
              >
                Book a Free Audit →
              </button>
              <button
                className="px-8 py-4 border-2 rounded-lg font-bold transition-colors"
                style={{
                  borderColor: COLORS.STONE_GRAY,
                  color: COLORS.STONE_GRAY,
                }}
              >
                View Services
              </button> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="bg-[#363636] p-10 rounded-[2rem] shadow-2xl">
              <div className="h-64 flex items-end justify-center gap-8">
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 120 }}
                    transition={{ duration: 1 }}
                    className="w-16 rounded-t-lg"
                    style={{ backgroundColor: COLORS.SILVER }}
                  />
                  <span className="text-xs text-white/60">Social Feed</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 220 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-16 rounded-t-lg"
                    style={{ backgroundColor: COLORS.STONE_GRAY }}
                  />
                  <span className="text-xs text-white font-bold">
                    Direct Inbox
                  </span>
                </div>
              </div>
              <p className="text-center mt-8 text-white/50 text-sm">
                Revenue attribution via owned channels
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const ServicesSection = () => {
    const services = [
      {
        icon: <Compass size={28} />,
        title: "Strategy Development",
        desc: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Customer journey mapping and revenue-based KPIs.</li>
            <li>
              Segmentation logic: behavioral, transactional, and lifecycle
              segments.
            </li>
            <li>Channel mix planning: email, WhatsApp, and SMS as needed.</li>
            <li>Consent and compliance blueprint for safe scaling.</li>
          </ul>
        ),
      },
      {
        icon: <Settings size={28} />,
        title: "Campaign Management & Automation",
        desc: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Welcome series, cart recovery, post-purchase series, and win
              backs.
            </li>
            <li>
              Promotional calendar management for launches, festivals, and sales
            </li>
            <li>
              WhatsApp templates and conversational flows for confirmations,
              reminders, and support.
            </li>
          </ul>
        ),
      },
      {
        icon: <MessageSquare size={28} />,
        title: "Creative & Copywriting",
        desc: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Engaging subject lines, preview text, and compelling bodies for
              high-conversion
            </li>
            <li>
              Segmentation logic: behavioral, transactional, and lifecycle
              segments.Mobile-first HTML templates & modular blocks for faster
              messaging.
            </li>
            <li>
              Short-form, actionable WhatsApp messages & rich media such as
              images & quick replies.
            </li>
          </ul>
        ),
      },
      {
        icon: <Shield size={28} />,
        title: "Deliverability & Technical Operations",
        desc: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Authentication (SPF, DKIM, DMARC), domain warmup, and inbox
              placement monitoring.
            </li>
            <li>
              CRM & eCommerce integrations (Shopify, Magento, WooCommerce,
              HubSpot)
            </li>
            <li>
              Data hygiene: deduping, suppression lists, & preference centers.
            </li>
          </ul>
        ),
      },
      {
        icon: <BarChart2 size={28} />,
        title: "Analytics, Testing & Reporting",
        desc: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Revenue attribution, cohort analysis, and LTV tracking.</li>
            <li>A/B tests for subject lines, send times, and creative.</li>
            <li>Monthly dashboards and tactical recommendations.</li>
          </ul>
        ),
      },
      {
        icon: <TrendingUp size={28} />,
        title: "Growth & Paid Coordination",
        desc: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Utilize paid channels for testing creatives and scaling up the
              winning creatives in email promotions.
            </li>
            <li>
              Incorporate WhatsApp nudges in paid retargeting ads for higher
              conversion rates.
            </li>
            <li>Experimentation framework for continuous improvement.</li>
          </ul>
        ),
      },
    ];

    return (
      <section
        className="py-20 lg:py-32"
        style={{ backgroundColor: COLORS.FOG_GRAY }}
      >
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-[#363636]">
              Our Email Marketing & WhatsApp Services
            </h2>
            <p className="text-slate-600 leading-relaxed mb-2">
              We provide end-to-end programs that include strategy, creative,
              technical setup, and analytics.
            </p>
            <div
              className="w-20 h-1.5 mx-auto rounded-full"
              style={{ backgroundColor: COLORS.STONE_GRAY }}
            ></div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((svc, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-white border border-[#C0C0C0] hover:shadow-xl transition-all duration-300 h-full">
                  <div className="mb-4 inline-block p-3 rounded-xl bg-[#D3D3D3]/50 text-[#536186] group-hover:bg-[#536186] group-hover:text-white transition-colors">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#363636]">
                    {svc.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#363636]/70">
                    {svc.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ProcessStepsSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#363636]">
            Our 7-Step Execution
          </h2>
        </AnimatedSection>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#C0C0C0]">
          {[
            {
              t: "Audit & Discovery ",
              d: "list health check, review of previous campaigns, and funnel analysis",
            },
            {
              t: "Strategic Roadmap & Planning ",
              d: "Developing a 90-day revenue-focused plan.",
            },
            {
              t: "Build & Integrate",
              d: " templates, triggers, and API integrations.",
            },
            {
              t: "Test & Launch",
              d: "seed test, deliverability test, and launch phase.",
            },
            {
              t: "Analyze & Optimize",
              d: "monitoring revenue, experiments, and continuous optimization.",
            },
            {
              t: "Scale & Automate",
              d: "increasing personalization and adding WhatsApp triggers.",
            },
            {
              t: "Maintain",
              d: "continuous list health, compliancy, and seasonal campaigns",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#536186] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                {i + 1}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-[#D3D3D3]/30 border border-[#C0C0C0]">
                <h4 className="font-bold text-[#363636] mb-1">{step.t}</h4>
                <p className="text-sm text-[#363636]/70">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const BenefitsSection = () => {
    const benefits = [
      "Sooner returns on revenue from welcome and recovery mail flows.",
      "Improved list health and inbox rates for greater open rates.",
      "Customized WhatsApp integrations to supplement email without spamming.",
      "Relevant revenue-based reporting where each activity is linked to a business outcome.",
      "Local expertise in running campaigns (for example, email marketing services in Pune) while maintaining access to global best practices.",
      "Our idea of a successful outcome is not in dollars and behavior, but in vanity metrics.",
    ];

    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#363636] mb-6">
              Benefits of Choosing Our Email Marketing Agency
            </h2>
            <p className="text-slate-600 text-lg">Work with us and receive:</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-start gap-3 p-6 rounded-xl bg-[#F0F2F5] h-full shadow-sm hover:shadow-md transition">
                  <CheckCircle
                    className="text-[#536186] shrink-0 mt-1"
                    size={24}
                  />
                  <p className="text-[#363636]/80">{b}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const IndustriesSection = () => {
    const industries = [
      { icon: <Briefcase size={28} />, name: "D2C & eCommerce brands" },
      {
        icon: <Code size={28} />,
        name: "SaaS and subscription-based businesses",
      },
      {
        icon: <Users size={28} />,
        name: "Education and online course providers",
      },
      {
        icon: <Compass size={28} />,
        name: "Travel, hospitality, and local services",
      },
      { icon: <Heart size={28} />, name: "Healthcare and wellness brands" },
      { icon: <Target size={28} />, name: "B2B and professional services" },
    ];

    return (
      <section className="py-20" style={{ backgroundColor: COLORS.FOG_GRAY }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#363636] mb-6">
              Industries We Serve
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We have helped create scalable owned channel programs for various
              industries, such as:
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-xl border border-[#C0C0C0] text-center hover:shadow-md transition h-full flex flex-col items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4 bg-[#B0C4DE]/30 text-[#536186]">
                    {item.icon}
                  </div>
                  <p className="text-[#363636] font-bold">{item.name}</p>
                  {idx === industries.length - 1 && (
                    <p className="text-sm mt-2 text-[#363636]/60">
                      And many more
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const WhyChooseUsSection = () => {
    const reasons = [
      "Senior strategists who design journeys around revenue.",
      "Deliverability specialists who care about sender reputation.",
      "Creative writers and designers who focus on conversion.",
      "Local execution capabilities for regional campaigns like whatsapp marketing in Pune.",
      "Clear reporting with dashboards that you actually read.",
      "We’re an extension of your marketing team – responsible for delivering results and clear on what we need to do next.",
    ];

    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#363636] mb-6">
              Why Choose Adswise Marketing
            </h2>
            <p className="text-slate-600 text-lg">
              A team that combines strategy, tech, and copy:
            </p>
          </AnimatedSection>

          <div className="space-y-4 max-w-3xl mx-auto">
            {reasons.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-[#C0C0C0] bg-white shadow-sm hover:shadow-md transition">
                  <Zap className="text-[#536186] shrink-0" size={24} />
                  <p className="text-[#363636]/80 font-medium">{r}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const FAQSection = () => {
    const faqs = [
      {
        q: "How soon will I see results from email marketing?",
        a: "Some flows — like welcome and cart recovery — can produce revenue within days. Broader lifecycle improvements compound over weeks to months.",
      },
      {
        q: "Is WhatsApp marketing compliant in India?",
        a: "Yes, when using the WhatsApp Business API with verified templates and proper consent. We help set up template approvals and consent capture to stay compliant.",
      },
      {
        q: "Can you integrate with our Shopify/WooCommerce store?",
        a: "Absolutely — we connect purchase and browsing data to tailor messages and power dynamic product recommendations.",
      },
      {
        q: "How do you protect deliverability?",
        a: "We implement SPF/DKIM/DMARC, warm domains, monitor blacklists, and use seed inbox testing to ensure messages reach recipients.",
      },
      {
        q: "Do you offer localized services like email marketing services in Pune?",
        a: "Yes — we design location-aware campaigns and can run targeted programs for local markets, including email marketing services in pune.",
      },
    ];

    return (
      <section className="py-20" style={{ backgroundColor: COLORS.FOG_GRAY }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#363636]">
              FAQs
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl border border-[#C0C0C0] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition"
                  >
                    <span className="font-bold text-[#363636] pr-4">
                      {faq.q}
                    </span>
                    {openFAQ === index ? (
                      <Minus size={20} className="text-[#536186] shrink-0" />
                    ) : (
                      <Plus size={20} className="text-[#536186] shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="px-6 pb-5 pt-2 border-t border-[#C0C0C0]/50 text-[#363636]/80 text-sm leading-relaxed">
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

  const ConclusionCTASection = () => (
    <section className="py-24" style={{ backgroundColor: COLORS.CHARCOAL }}>
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <AnimatedSection>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            A focused email marketing agency will help you leverage your email
            list to become a reliable revenue generator. Combined with a smart
            approach to using WhatsApp, you will be able to reach customers
            sooner, recover lost sales, and increase the lifetime value of
            customers. If you are looking for a human-centric,
            measurement-driven approach to running email marketing services in
            Pune or scaling up whatsapp marketing services in Pune, let's talk.
            <br />
            <br />
            Book your free email + WhatsApp audit today and receive a tailored
            90-day roadmap with projected revenue impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-full font-black tracking-wide text-sm transition-all hover:brightness-110 active:scale-95 shadow-xl"
              style={{
                backgroundColor: COLORS.STONE_GRAY,
                color: COLORS.WHITE,
              }}
            >
              Contact Us
            </a>

            <a
              href="/case-studies"
              className="px-8 py-4 rounded-full font-black tracking-wide text-sm transition-all border-2 text-white hover:bg-white/10"
              style={{ borderColor: COLORS.SILVER, color: COLORS.SILVER }}
            >
              See Case Studies
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  return (
    <div
      className="min-h-screen font-sans selection:bg-[#536186] selection:text-white"
      style={{ color: COLORS.CHARCOAL }}
    >
      <HeroSection />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What is an Email Marketing Agency?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              An email marketing agency is a company that specializes in the
              development, construction, and enhancement of email marketing
              programs for businesses. We’re not just a newsletter delivery
              company; we’re a company that delivers revenue-generating email
              marketing programs: welcome series, cart recovery series,
              re-engagement series, and performance reports to name a few. A
              full-service email marketing company also provides services such
              as deliverability, legal compliance, and technical integration,
              all of which are necessary for a successful email marketing
              campaign.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-8">
              Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Email still offers some of the highest ROI’s in digital marketing,
              but it all comes down to strategy, segmentation, and trust. As an
              email marketing agency, our approach starts with your customers:
              who they are, what they care about, and when they’re ready to buy.
              From there, everything else flows, from the subject lines that
              drive opens to the content that drives clicks, and the timing that
              drives conversions. <br />
              <br />
              We use WhatsApp to add a quick and personal layer of communication
              to our email strategies. WhatsApp is amazing for confirmations,
              quick reminders, and high intent nudges, and for local businesses,
              running a campaign like whatsapp marketing in Pune works like a
              charm. Our ambition is to create a trusted owned channel engine
              that helps us acquire customers at a lower cost and increase their
              lifetime value.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ServicesSection />
      <ProcessStepsSection />
      <BenefitsSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <FAQSection />
      <ConclusionCTASection />
    </div>
  );
};

export default EmailWhatsAppMarketing;
