import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  PenTool,
  Layers,
  Image as ImageIcon,
  Printer,
  Layout,
  MousePointerClick,
  Eye,
  TrendingUp,
  Zap,
  CheckCircle,
  Plus,
  Minus,
  Send,
  Palette,
  ArrowRight,
  BookOpen,
  MonitorPlay,
  Video,
  Phone,
  ChevronRight,
  Target,
  Award,
  Briefcase,
  BarChart,
  MonitorSmartphone,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface GraphicsDesigningProps {
  companyName?: string;
  onContactSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  website?: string;
  serviceType: string;
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

const GraphicsDesigning: React.FC<GraphicsDesigningProps> = ({
  companyName = "Adswise Marketing",
  onContactSubmit,
}) => {
  // Theme Pallete from user image
  const theme = {
    stone: "#536186",
    fog: "#D3D3D3",
    charcoal: "#363636",
    silver: "#C0C0C0",
    ash: "#B0C4DE",
    white: "#FFFFFF",
    lightBg: "#F8F9FA",
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    website: "",
    serviceType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onContactSubmit) onContactSubmit(formData);
    alert("Thanks! We'll be in touch to build your visual identity.");
  };

  // ============================================================================
  // SUB-COMPONENTS
  // ============================================================================

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#536186] text-white pt-20 mb-10">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#536186] rounded-full blur-[150px] opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B0C4DE] rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D3D3D3] rounded-full blur-[200px] opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#536186]/30 border border-[#536186] rounded-full text-sm font-semibold text-[#B0C4DE] mb-6 flex items-center gap-2 w-max shadow-lg backdrop-blur-sm">
              <Palette size={16} /> Best Graphic Designer
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Best Graphic Designer |{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B0C4DE] to-[#D3D3D3]">
                Adswise Marketing
              </span>
            </h1>
            <p className="text-xl text-[#D3D3D3] mb-8 leading-relaxed max-w-xl">
              Need a brand that looks amazing and converts? The best way to get
              this is by hiring the best graphic designer. At Adswise Marketing,
              we bring together strategy and eye-catching design so that your
              audience cannot ignore it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg font-bold text-white shadow-xl shadow-[#536186]/30 transform transition hover:-translate-y-1 flex items-center justify-center gap-2 group bg-gradient-to-r from-[#536186] to-[#363636] border border-[#536186]"
              >
                Book a Free Design Audit{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/case-studies"
                className="px-8 py-4 border border-[#B0C4DE] rounded-lg font-semibold text-[#B0C4DE] text-center hover:bg-[#B0C4DE]/10 transition"
              >
                See Case Studies: Graphic Design Wins
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#536186] shadow-2xl shadow-[#363636] transform rotate-2 hover:rotate-0 transition duration-700 h-[500px] w-full bg-gradient-to-br from-[#D3D3D3] to-[#C0C0C0]">
              <img
                src="https://i.pinimg.com/736x/03/d1/53/03d1537ce0e0a531146b41b3f4312837.jpg?auto=format&fit=crop&q=80"
                alt="Graphic Designer Workspace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 -right-6 bg-[#D3D3D3] border border-[#C0C0C0] p-4 rounded-xl shadow-2xl animate-pulse">
              <Palette className="text-[#363636]" size={32} />
            </div>

            <div className="absolute -bottom-6 -left-8 bg-[#536186] border border-[#B0C4DE] p-6 rounded-xl shadow-2xl text-white max-w-xs backdrop-blur-md">
              <div className="flex items-center gap-4">
                <CheckCircle className="text-[#B0C4DE]" size={32} />
                <div>
                  <p className="font-bold text-lg leading-tight">
                    Concept to Delivery
                  </p>
                  <p className="text-sm text-[#D3D3D3] mt-1">
                    Strategic visuals that convert.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const IntroSection = () => (
    <section className="py-20 bg-[#F8F9FA] text-[#363636]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold mb-6 text-[#536186]">
              Transforming Ideas into Compelling Visuals
            </h2>
            <div className="text-lg leading-relaxed text-[#363636]/80 space-y-6">
              <p>
                A good visual identity is the fast track to establishing
                credibility. While the best graphic designer does more than
                simply create beautiful visuals, they also understand your
                market, create engaging messages through the power of design,
                and deliver creative solutions that increase engagement. Not
                only does good graphic design shorten the distance between
                attention, trust, and conversion, but it also gets the job done.
              </p>
              <p>
                Are you looking for the best graphic designer, the best graphic
                design company, or simply the value of strategic graphic design?
                Perhaps you're considering the difference between good graphic
                designers and the best graphic designers. Whatever your goal,
                this guide is designed to help you understand the value of good
                graphic designers and how to select the best graphic designer
                for your business.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const DesignerRoleSection = () => {
    const roles = [
      {
        icon: <Target />,
        text: "Interpreting brand strategy through visuals.",
      },
      {
        icon: <Palette />,
        text: "Designing logos, typography, and color systems that extend.",
      },
      {
        icon: <MonitorSmartphone />,
        text: "Developing marketing materials for the web, social, print, and packaging.",
      },
      {
        icon: <Briefcase />,
        text: "Working with product, marketing, and development teams.",
      },
      {
        icon: <BarChart />,
        text: "Evaluating designs based on user testing and performance metrics.",
      },
    ];

    return (
      <section className="py-20 bg-white border-y border-[#D3D3D3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#363636]">
                What Does the{" "}
                <span className="text-[#536186]">Best Graphic Designer</span>{" "}
                Do?
              </h2>
              <p className="text-lg text-[#363636]/80 mb-8">
                The best graphic designer is one who is both an artist and a
                strategist. Design is not decoration, but rather communication.
                The best designer is one who brings beauty and clarity together.
                Their responsibilities include:
              </p>
              <div className="space-y-4">
                {roles.map((role, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center text-[#536186] group-hover:bg-[#536186] group-hover:text-white transition-colors duration-300">
                      {role.icon}
                    </div>
                    <p className="text-[#363636] font-medium pt-2">
                      {role.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#D3D3D3] relative p-8 shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="grid grid-cols-2 gap-4 w-full h-full relative z-10">
                  <div className="rounded-2xl p-6 text-white flex flex-col justify-end shadow-lg transform transition hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="relative z-10">
                      <PenTool size={32} className="mb-4 text-[#B0C4DE]" />
                      <h3 className="font-bold text-lg text-white">
                        Strategy First
                      </h3>
                    </div>
                  </div>
                  <div className="rounded-2xl p-6 text-white flex flex-col justify-end shadow-lg transform transition hover:scale-105 translate-y-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="relative z-10">
                      <Layers size={32} className="mb-4 text-[#C0C0C0]" />
                      <h3 className="font-bold text-lg text-white">
                        Art & Science
                      </h3>
                    </div>
                  </div>
                  <div className="rounded-2xl p-6 text-white flex flex-col justify-end shadow-lg transform transition hover:scale-105 -translate-y-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="relative z-10">
                      <TrendingUp size={32} className="mb-4 text-[#B0C4DE]" />
                      <h3 className="font-bold text-lg text-white">
                        Conversion
                      </h3>
                    </div>
                  </div>
                  <div className="rounded-2xl p-6 text-white flex flex-col justify-end shadow-lg transform transition hover:scale-105 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="relative z-10">
                      <Eye size={32} className="mb-4 text-[#C0C0C0]" />
                      <h3 className="font-bold text-lg text-white">Clarity</h3>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const WhyDesignMatters = () => {
    const benefits = [
      {
        icon: <Eye size={32} />,
        title: "Brand Recognition",
        desc: "Enhanced brand recognition and recall to stay top-of-mind.",
      },
      {
        icon: <TrendingUp size={32} />,
        title: "Premium Positioning",
        desc: "Increased perceived value and ability to charge premium prices.",
      },
      {
        icon: <MousePointerClick size={32} />,
        title: "Higher Engagement",
        desc: "Increased engagement with ads, emails, and social media posts.",
      },
      {
        icon: <Zap size={32} />,
        title: "Clear Communication",
        desc: "Increased understanding of promotions and clarity of calls to action.",
      },
      {
        icon: <Layers size={32} />,
        title: "Unified Integrity",
        desc: "Elimination of confusion with mixed visual branding.",
      },
    ];

    return (
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#363636] mb-6">
                Why Your Business Needs{" "}
                <span className="text-[#536186]">
                  Professional Graphic Design
                </span>
              </h2>
              <p className="text-lg text-[#363636]/80">
                Design is an essential element for all customer touchpoints. You
                may be a new startup or an existing brand, and you need the best
                graphic design services to convert visitors into loyal
                customers. Investing in the best graphic designer will yield
                quantifiable results such as:
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit, idx) => (
              <AnimatedSection
                key={idx}
                delay={idx * 0.1}
                className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
              >
                <motion.div
                  whileHover={{ y: -8, borderColor: "#536186" }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-[#D3D3D3] h-full group transition-all"
                >
                  <div className="mb-6 w-16 h-16 rounded-xl bg-[#F8F9FA] flex items-center justify-center text-[#536186] group-hover:bg-[#536186] group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#363636]">
                    {benefit.title}
                  </h3>
                  <p className="text-[#363636]/70 leading-relaxed">
                    {benefit.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ServicesSection = () => {
    const services = [
      {
        category: "Strategy Development",
        icon: <TrendingUp />,
        items: [
          "Brand audits and visual research.",
          "Positioning workshops and moodboarding.",
          "Visual strategy documents and design systems.",
        ],
      },
      {
        category: "Brand Identity & Logo Design",
        icon: <Palette />,
        items: [
          "Logo concepts, lockups, and responsive marks.",
          "Color palettes, typography, and iconography.",
          "Comprehensive brand guidelines for consistency.",
        ],
      },
      {
        category: "Marketing & Campaign Design",
        icon: <MonitorPlay />,
        items: [
          "Social creative, ad visuals, and motion assets.",
          "Email templates, banners, and landing page visuals.",
          "Print collateral: brochures, posters, and trade show materials.",
        ],
      },
      {
        category: "Packaging & Product Design",
        icon: <Layers />,
        items: [
          "Structural packaging concepts, including dieline.",
          "Label design, point-of-sale, and retail ready files.",
          "Production ready files.",
        ],
      },
      {
        category: "UX Visuals & Product Graphics",
        icon: <MonitorSmartphone />,
        items: [
          "UI asset design, icon systems, and illustrations.",
          "App store visuals and onboarding graphics.",
          "Microcopy and visual affordances for usability.",
        ],
      },
      {
        category: "Content Creation & Motion Graphics",
        icon: <Video />,
        items: [
          "Short-form videos, animated logos, and explainers.",
          "GIFs and motion templates for ads and social media.",
          "Voiceover coordination and basic post-production work.",
        ],
      },
      {
        category: "Analytics & Design Optimization",
        icon: <BarChart />,
        items: [
          "A/B testing of creative variants.",
          "Engagement tracking and performance-based refinements.",
          "Quarterly creative audits tied to campaign KPIs.",
        ],
      },
    ];

    return (
      <section className="py-24 bg-[#363636] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Graphic Design{" "}
                <span className="text-[#B0C4DE]">Services</span>
              </h2>
              <p className="text-[#D3D3D3] text-lg">
                We provide the following creative services to fulfill marketing
                and branding needs:
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-[#536186]/20 border border-[#536186] rounded-2xl p-8 h-full hover:bg-[#536186]/40 transition duration-300">
                  <div className="w-14 h-14 bg-[#536186] text-white rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#B0C4DE]">
                    {service.category}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[#D3D3D3]">
                        <ChevronRight className="flex-shrink-0 w-5 h-5 text-[#C0C0C0]" />
                        <span>{item}</span>
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

  const PlatformsSection = () => {
    const platforms = [
      {
        name: "Instagram & Facebook",
        desc: "Ads, stories, videos, and grid graphics.",
      },
      {
        name: "LinkedIn",
        desc: "Professional graphics and images for content.",
      },
      { name: "YouTube", desc: "Thumbnails, end cards, and branding." },
      {
        name: "Website & Landing Pages",
        desc: "Hero images, icons, and illustrations.",
      },
      {
        name: "Print & Packaging",
        desc: "CMYK designs, dielines, and print-ready files.",
      },
      {
        name: "E-commerce",
        desc: "Product images, banners, and promotional kits.",
      },
    ];

    return (
      <section className="py-20 bg-white border-b border-[#D3D3D3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#363636]">
                Platforms We Work With
              </h2>
              <p className="text-lg text-[#363636]/80 mb-8">
                The design needs to fit in with the location where it will be
                viewed. We create designs that are optimized for each platform's
                unique specifications and audience behavior. Each design is made
                with the limitations and user behaviors of the platform in mind.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {platforms.map((platform, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#F8F9FA] rounded-xl border border-[#D3D3D3]"
                  >
                    <h4 className="font-bold text-[#536186]">
                      {platform.name}
                    </h4>
                    <p className="text-sm text-[#363636]/70 mt-1">
                      {platform.desc}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="relative">
              <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[#D3D3D3] p-10 flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#536186] to-[#363636] opacity-90"></div>
                <div className="relative z-10 w-full flex flex-col gap-6">
                  {/* Abstract multi-device representation */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full max-w-sm mx-auto shadow-2xl shadow-black/20 transform -translate-x-4">
                    <div className="h-4 w-24 bg-white/30 rounded-full mb-4"></div>
                    <div className="h-32 bg-gradient-to-r from-[#B0C4DE] to-[#C0C0C0] rounded-lg"></div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl w-48 mx-auto shadow-2xl shadow-black/20 transform translate-x-12 -translate-y-10">
                    <div className="h-24 bg-gradient-to-r from-[#C0C0C0] to-[#D3D3D3] rounded-md"></div>
                    <div className="h-2 w-16 bg-white/40 rounded-full mt-3"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const ProcessSection = () => {
    const steps = [
      {
        name: "Discover & Research",
        desc: "Interviews with the brand, research of competitors, and research of the audience.",
      },
      {
        name: "Concepting & Ideation",
        desc: "Fast sketching, mood boarding, and direction setting.",
      },
      {
        name: "Design Execution",
        desc: "Polished drafts, refinements, and approvals from stakeholders.",
      },
      {
        name: "Prototyping & Testing",
        desc: "Mockups, A/B creative tests, and user tests.",
      },
      {
        name: "Delivery & Handover",
        desc: "Final files, brand guidelines, and production specifications.",
      },
      {
        name: "Deploy & Monitor",
        desc: "Testing the live creative across channels and tracking results.",
      },
      {
        name: "Iterate & Scale",
        desc: "Scaling the visual assets into campaigns or products.",
      },
    ];

    return (
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#363636]">
                Our Process <span className="text-[#536186]">(7 Steps)</span>
              </h2>
              <p className="text-[#363636]/80 text-lg">
                We have a clear and predictable workflow that is creative and
                fast. Each step has clear objectives and approvals to ensure the
                project is moving forward quickly.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Connecting Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#D3D3D3] -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10">
              {steps.map((step, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="bg-white border-2 border-[#D3D3D3] p-6 rounded-2xl relative h-full hover:border-[#536186] hover:shadow-xl transition-all group flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#F8F9FA] border-2 border-[#D3D3D3] rounded-full flex items-center justify-center font-bold text-[#536186] group-hover:bg-[#536186] group-hover:text-white group-hover:border-[#536186] transition-colors mb-4 text-xl">
                      {idx + 1}
                    </div>
                    <h3 className="text-md font-bold text-[#363636] mb-3">
                      {step.name}
                    </h3>
                    <p className="text-[#363636]/70 text-sm">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const BenefitsSection = () => {
    const benefits = [
      "Strategic visuals that support business goals, rather than just making things look good.",
      "A cohesive brand look that extends beyond the current campaign or touchpoint.",
      "Conversion-oriented creative that's designed to increase engagement and clicks.",
      "Timely delivery with communication at every step of the process.",
      "Data-driven iteration, where performance is used to improve creative direction.",
      "Multidisciplinary talent, including illustrators, motion designers, and art directors.",
      "A beautiful brand that also gets the job done.",
    ];

    return (
      <section className="py-20 bg-[#536186] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden bg-[#363636] p-10 border border-[#B0C4DE]/30 flex flex-col h-full shadow-2xl relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B0C4DE] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                <h3 className="text-2xl font-bold mb-8 relative z-10 text-[#B0C4DE]">
                  Ready to enhance your visual presence?
                </h3>
                <p className="text-[#D3D3D3] mb-10 relative z-10 text-lg">
                  Our creative team brings multidisciplinary talent, speed, and
                  precision to your design needs.
                </p>

                <Link
                  to="/contact"
                  className="mt-auto block w-full bg-white text-[#536186] text-center font-bold py-4 rounded-xl hover:bg-[#D3D3D3] transition shadow-lg relative z-10"
                >
                  Get Your Free Visual Roadmap
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
                Benefits of Choosing Our Graphic Design Agency
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-[#B0C4DE]/20 p-1 rounded-full text-[#B0C4DE] h-max">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-lg text-[#D3D3D3]">{benefit}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const IndustriesAndWhyChooseUs = () => {
    const industries = [
      "Retail and e-commerce",
      "Food and beverage, as well as packaged goods",
      "Technology and SaaS",
      "Healthcare and wellness",
      "Education and non-profit",
      "Hospitality and travel",
      "Professional services and fintech",
    ];

    const reasons = [
      "Experienced creatives with a history of working on top graphic design company projects.",
      "Process-driven delivery with predictable timelines and quality control.",
      "Collaborative approach, working with your marketing and product teams.",
      "Proven results, with measurable increases in CTRs, engagement, and brand metrics.",
      "Transparent pricing and flexible teams for one-off projects or retainer-based work.",
    ];

    return (
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="bg-[#F8F9FA] rounded-3xl p-10 border border-[#D3D3D3] h-full shadow-lg">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#536186] text-white shadow-lg">
                  <Building2 size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#363636]">
                  Industries We Serve
                </h2>
                <p className="text-[#363636]/80 mb-8 border-b border-[#D3D3D3] pb-6">
                  We specialize in design for a wide range of industries. The
                  design approach varies for each, and our team is skilled at
                  creating visual strategies tailored to category expectations.
                </p>
                <ul className="space-y-4">
                  {industries.map((industry, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-[#363636]"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#B0C4DE]"></div>
                      <span className="font-medium">{industry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#363636] rounded-3xl p-10 h-full shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#536186] rounded-full blur-[80px] opacity-40"></div>

                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D3D3D3] text-[#363636] shadow-lg relative z-10">
                  <Award size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white relative z-10">
                  Why Choose Us
                </h2>
                <p className="text-[#D3D3D3] mb-8 border-b border-[#536186] pb-6 relative z-10">
                  Choosing the right creative partner means selecting someone
                  who gets it, someone who gets the brand, the business, and the
                  audience.
                </p>
                <ul className="space-y-5 relative z-10">
                  {reasons.map((reason, idx) => (
                    <li key={idx} className="flex gap-4">
                      <Zap className="flex-shrink-0 text-[#B0C4DE]" size={24} />
                      <span className="text-[#D3D3D3]">{reason}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-[#536186] relative z-10">
                  <p className="text-[#B0C4DE] italic">
                    If you’re looking to hire the best graphic designers or are
                    trying to find the top graphic design company, our portfolio
                    and results are a testament to our abilities.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);
    const faqs = [
      {
        q: "How do I know if I need to hire the best graphic designer or a full agency?",
        a: "If you need strategy, identity systems, and multi-channel execution, an agency offers end-to-end support. For single projects (logo or packaging), a solo best graphic designer can be a great fit. We can help you evaluate scope and budget.",
      },
      {
        q: "How long does a typical brand identity project take?",
        a: "Most brand identity projects run 6–10 weeks, depending on reviews and complexity. Packaging or product systems may take longer due to supplier coordination.",
      },
      {
        q: "Do you provide files ready for print and production?",
        a: "Yes. We deliver production-ready files, dielines, color specs, and vendor-ready assets for print and manufacturing.",
      },
      {
        q: "Can you adapt designs for social advertising and performance campaigns?",
        a: "Absolutely. Our creative process includes producing variants and motion assets optimized for ad platforms to maximize ROAS.",
      },
      {
        q: "Do you work with famous graphic designers or industry specialists?",
        a: "We collaborate with specialist illustrators, typographers, and motion artists — including designers who have worked on internationally recognized projects — to ensure the highest creative standards.",
      },
    ];

    return (
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#363636] mb-4">
                FAQs
              </h2>
              <p className="text-[#363636]/70">
                Common questions about our graphic design and branding services.
              </p>
            </div>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    openFAQ === index
                      ? "border-[#536186] shadow-lg"
                      : "border-[#D3D3D3] hover:border-[#B0C4DE]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span
                      className={`font-bold text-lg pr-8 ${
                        openFAQ === index ? "text-[#536186]" : "text-[#363636]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        openFAQ === index
                          ? "bg-[#536186] text-white"
                          : "bg-[#F8F9FA] text-[#363636]"
                      }`}
                    >
                      {openFAQ === index ? (
                        <Minus size={18} />
                      ) : (
                        <Plus size={18} />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-[#363636]/80 leading-relaxed border-t border-[#F8F9FA] mt-2 pt-4">
                          <span className="font-semibold text-[#536186]">
                            A:{" "}
                          </span>
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

  const CTABanner = () => (
    <section className="py-24 relative overflow-hidden bg-[#536186]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#363636]/80 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Conclusion & <span className="text-[#B0C4DE]">Get Started</span>
            </h2>
            <p className="text-[#D3D3D3] text-xl leading-relaxed mb-6 font-medium">
              Great design inspires people. The best graphic designer is someone
              who has the ability to combine creativity with clarity to create
              designs that capture people's attention, gain their trust, and
              motivate them to take action.
            </p>
            <p className="text-[#D3D3D3] text-lg mb-12">
              If you’re ready to take your brand to the next level with
              effective designs that work, then we’re ready to get to work.
              Schedule your free creative consultation today and get your free
              visual roadmap.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-[#363636] rounded-xl font-bold text-lg hover:bg-[#D3D3D3] transition shadow-2xl flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                <Phone size={22} className="text-[#536186]" /> Schedule Free
                Consultation
              </Link>
              <a
                href="/contact"
                className="px-10 py-5 bg-[#363636] text-white border border-[#B0C4DE]/30 rounded-xl font-bold text-lg hover:bg-[#363636]/80 transition flex items-center justify-center gap-2 transform hover:-translate-y-1"
              >
                <BookOpen size={22} /> Download Brand Style Guide Temp.
              </a>
            </div>
          </AnimatedSection>
          <div className="container mx-auto px-4 mt-20">
            <AnimatedSection>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  Explore More Services
                </h3>
                <div className="w-16 h-1 bg-[#536186] mx-auto rounded-full"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                <Link
                  to="/services"
                  className="text-[#B0C4DE] hover:text-white transition font-medium text-sm sm:text-base hover:underline border-b border-transparent hover:border-white pb-1"
                >
                  Services Overview
                </Link>
                <Link
                  to="/contact"
                  className="text-[#B0C4DE] hover:text-white transition font-medium text-sm sm:text-base hover:underline border-b border-transparent hover:border-white pb-1"
                >
                  Contact / Hire Designer
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  return (
    <div className="font-sans antialiased text-[#363636] min-h-screen selection:bg-[#536186] selection:text-white">
      <SEO
        title="Best Graphic Designer | Expert Graphic Design Services"
        description="Hire top graphic designers to elevate your brand. Creative, strategic designs from concept to delivery — logos, packaging, digital assets, and collateral."
      />
      <HeroSection />
      <IntroSection />
      <DesignerRoleSection />
      <WhyDesignMatters />
      <ServicesSection />
      <PlatformsSection />
      <ProcessSection />
      <BenefitsSection />
      <IndustriesAndWhyChooseUs />
      <FAQSection />
      <CTABanner />
    </div>
  );
};

export default GraphicsDesigning;
