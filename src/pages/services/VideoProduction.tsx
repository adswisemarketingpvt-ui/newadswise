import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Video,
  Play,
  Film,
  Camera,
  Mic,
  Scissors,
  MonitorPlay,
  Smartphone,
  BarChart2,
  TrendingUp,
  Users,
  CheckCircle,
  Plus,
  Minus,
  Send,
  Clapperboard,
  ArrowRight,
  Target,
  LayoutTemplate,
  Share2,
  Search,
  Zap,
  Settings,
  MapPin,
  Award,
  Store,
  Rocket,
  HeartHandshake,
  Link as LinkIcon,
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

export default function VideoProduction() {
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
    alert("Free Video Strategy Consultation Request received!");
  };

  const HeroSection = () => (
    <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#363636] text-[#D3D3D3] pt-24 pb-20 bg-[#536186]">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#536186]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C0C0C0]/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#536186] border border-[#C0C0C0]/20 rounded-full text-sm font-semibold text-[#B0C4DE] mb-6 shadow-sm shadow-[#536186]">
              <Video size={16} /> Professional Video Production
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Video Production Company <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B0C4DE] to-[#C0C0C0]">
                | Adswise Marketing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-[#C0C0C0] mb-8 leading-relaxed max-w-3xl mx-auto">
              A compelling video has the ability to alter how your audience
              thinks about your brand. We specialize in developing top-notch
              video content that communicates your message, captures attention,
              and delivers measurable marketing success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg font-bold text-[#363636] bg-[#B0C4DE] hover:bg-[#D3D3D3] transition-all shadow-lg shadow-[#536186]/30 flex items-center justify-center gap-2"
              >
                Get Free Video Strategy <ArrowRight size={20} />
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 border border-[#536186] rounded-lg font-semibold text-[#D3D3D3] hover:bg-[#536186]/50 transition-all flex items-center justify-center"
              >
                View Our Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );

  const IntroductionSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363636] mb-6">
              The Power of Video in Digital Marketing
            </h2>
            <p className="text-[#363636]/80 mb-6 text-lg leading-relaxed">
              In today's digital world, one of the most powerful tools for
              business growth is the use of videos. Whether it is social media,
              websites, or advertising campaigns, videos are helping businesses
              communicate their message more effectively than ever before.
            </p>
            <p className="text-[#363636]/80 mb-8 text-lg leading-relaxed">
              With the help of a professional video production company, you
              ensure your video content represents your brand's identity and
              drives business forward. As a trusted digital marketing agency in
              Pune, we produce high-quality videos that grab attention and
              encourage action.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-3 items-center p-3 bg-[#D3D3D3]/20 rounded-lg">
                <TrendingUp className="text-[#536186]" size={24} />
                <span className="text-[#363636] font-medium text-sm">
                  Increased Engagement
                </span>
              </div>
              <div className="flex gap-3 items-center p-3 bg-[#D3D3D3]/20 rounded-lg">
                <Target className="text-[#536186]" size={24} />
                <span className="text-[#363636] font-medium text-sm">
                  Higher Conversions
                </span>
              </div>
              <div className="flex gap-3 items-center p-3 bg-[#D3D3D3]/20 rounded-lg">
                <Users className="text-[#536186]" size={24} />
                <span className="text-[#363636] font-medium text-sm">
                  Brand Awareness
                </span>
              </div>
              <div className="flex gap-3 items-center p-3 bg-[#D3D3D3]/20 rounded-lg">
                <Share2 className="text-[#536186]" size={24} />
                <span className="text-[#363636] font-medium text-sm">
                  Social Reach
                </span>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="relative">
            <div className="absolute inset-0 bg-[#B0C4DE]/30 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Professional Video Production Set"
              className="rounded-3xl shadow-xl w-full h-auto object-cover border border-[#C0C0C0]/30"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-[#C0C0C0]/20 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#536186] rounded-full flex items-center justify-center text-white">
                <Play size={20} fill="currentColor" />
              </div>
              <div>
                <div className="font-bold text-[#363636]">
                  Top-Notch Strategy
                </div>
                <div className="text-sm text-[#536186]">Measurable Results</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const WhatIsSection = () => (
    <section className="py-20 bg-[#D3D3D3]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#363636] mb-6">
              What is Video Production?
            </h2>
            <p className="text-[#363636]/80 text-lg">
              Video production is the entire process of creating, editing, and
              distributing videos, which are used in marketing, branding, and
              communication. It aligns with your company's objectives.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <LayoutTemplate />,
              title: "Concept Development & Scriptwriting",
            },
            { icon: <Film />, title: "Storyboarding & Creative Planning" },
            { icon: <Camera />, title: "Filming & On-Location Production" },
            { icon: <Scissors />, title: "Video Editing & Motion Graphics" },
            { icon: <Mic />, title: "Sound Design & Color Grading" },
            {
              icon: <MonitorPlay />,
              title: "Final Video Delivery Optimized for Internet",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C0C0C0]/30 hover:shadow-md hover:border-[#536186]/50 transition-all h-full flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 bg-[#536186]/10 text-[#536186] rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#363636]">{item.title}</h3>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );

  const WhyNeedSection = () => (
    <section className="py-20 bg-[#536186] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Your Business Needs Video Production
            </h2>
            <p className="text-[#D3D3D3] text-lg">
              Companies that use professional video content tend to achieve more
              with their marketing efforts, helping businesses communicate more
              effectively and reach out to their audience on an emotional level.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Engagement",
              desc: "More interaction on social media platforms",
            },
            {
              title: "Conversions",
              desc: "Higher rates on landing pages or ads",
            },
            {
              title: "Storytelling",
              desc: "More effective narrative for the company's brand",
            },
            {
              title: "Trust",
              desc: "Authentic representation builds customer trust",
            },
            {
              title: "Visibility",
              desc: "Better Search Engine Optimization (SEO) results",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-[#363636]/40 p-6 rounded-xl border border-[#C0C0C0]/20 h-full text-center">
                <CheckCircle
                  className="mx-auto text-[#B0C4DE] mb-4"
                  size={32}
                />
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[#C0C0C0] text-sm">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#363636] mb-6">
              Our Video Production Services
            </h2>
            <p className="text-[#363636]/80 text-lg">
              We offer full service video production solutions that cater to the
              growth of your brand, as well as the performance of your digital
              marketing.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="p-8 rounded-3xl bg-[#D3D3D3]/20 border border-[#C0C0C0]/30 h-full">
              <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#536186] mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#363636] mb-4">
                Strategy & Campaign Management
              </h3>
              <p className="text-[#363636]/80 mb-6 border-b border-[#C0C0C0]/30 pb-4">
                We formulate a strategy before production. As the best digital
                marketing agency in Pune, we ensure video campaigns align with
                your goals.
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                <div className="flex gap-2 items-center text-sm font-medium text-[#536186]">
                  <CheckCircle size={16} /> Target Audience
                </div>
                <div className="flex gap-2 items-center text-sm font-medium text-[#536186]">
                  <CheckCircle size={16} /> Format Selection
                </div>
                <div className="flex gap-2 items-center text-sm font-medium text-[#536186]">
                  <CheckCircle size={16} /> Product Launches
                </div>
                <div className="flex gap-2 items-center text-sm font-medium text-[#536186]">
                  <CheckCircle size={16} /> Channel Management
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="p-8 rounded-3xl bg-[#536186] text-white h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#B0C4DE]/20 rounded-full blur-[40px]"></div>
              <div className="w-14 h-14 bg-[#363636]/50 border border-[#C0C0C0]/20 rounded-xl flex items-center justify-center text-[#B0C4DE] mb-6 relative z-10">
                <Camera size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                Content Creation
              </h3>
              <p className="text-[#D3D3D3] mb-6 border-b border-[#C0C0C0]/20 pb-4 relative z-10">
                Our team of creatives produces a wide range of high-quality
                video formats tailored to your specific needs.
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 relative z-10">
                {[
                  "Brand Intros",
                  "Product Demos",
                  "Social Reels",
                  "Corporate Videos",
                  "Testimonials",
                  "Event Videos",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-2 items-center text-sm font-medium text-[#E2E8F0]"
                  >
                    <Play
                      size={14}
                      fill="currentColor"
                      className="text-[#B0C4DE]"
                    />{" "}
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="p-8 rounded-3xl bg-white border border-[#C0C0C0]/30 shadow-sm h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#363636] mb-4 flex items-center gap-3">
                <BarChart2 className="text-[#536186]" /> Analytics & Reporting
              </h3>
              <p className="text-[#363636]/80 mb-6">
                Video performance should always be measurable. We help track and
                refine.
              </p>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-[#D3D3D3] pb-2 text-[#536186] text-sm">
                  <span>Video views & watch time</span> <TrendingUp size={16} />
                </li>
                <li className="flex justify-between border-b border-[#D3D3D3] pb-2 text-[#536186] text-sm">
                  <span>Engagement & Retention</span> <Users size={16} />
                </li>
                <li className="flex justify-between border-b border-[#D3D3D3] pb-2 text-[#536186] text-sm">
                  <span>Conversion Impact</span> <Target size={16} />
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="p-8 rounded-3xl bg-[#363636] text-white h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Zap className="text-[#B0C4DE]" /> Paid Ads Integration
              </h3>
              <p className="text-[#C0C0C0] mb-6">
                Maximize your reach. Optimize your videos for highly targeted
                paid advertising campaigns.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-[#536186]/50 rounded text-sm text-[#D3D3D3]">
                  YouTube Ads
                </span>
                <span className="px-3 py-1 bg-[#536186]/50 rounded text-sm text-[#D3D3D3]">
                  Meta (FB/Insta)
                </span>
                <span className="px-3 py-1 bg-[#536186]/50 rounded text-sm text-[#D3D3D3]">
                  Social Ads
                </span>
                <span className="px-3 py-1 bg-[#536186]/50 rounded text-sm text-[#D3D3D3]">
                  Remarketing
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const PlatformsSection = () => (
    <section className="py-20 bg-[#D3D3D3]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#363636] mb-6">
              Platforms We Work With
            </h2>
            <p className="text-[#363636]/80 text-lg">
              Optimizing videos to perform best on each specific platform to
              reach the audience in the best possible way.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-8">
          <div className="bg-white border text-center border-[#C0C0C0]/50 p-6 rounded-2xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]">
            <div className="font-bold text-[#536186] text-xl mb-2">
              Instagram
            </div>
            <div className="text-sm text-[#363636]/80">
              Reels, Stories & Promos
            </div>
          </div>
          <div className="bg-white border text-center border-[#C0C0C0]/50 p-6 rounded-2xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]">
            <div className="font-bold text-[#536186] text-xl mb-2">
              Facebook
            </div>
            <div className="text-sm text-[#363636]/80">Ads & Corporate</div>
          </div>
          <div className="bg-white border text-center border-[#C0C0C0]/50 p-6 rounded-2xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]">
            <div className="font-bold text-[#536186] text-xl mb-2">
              LinkedIn
            </div>
            <div className="text-sm text-[#363636]/80">
              B2B & Corporate Stories
            </div>
          </div>
          <div className="bg-white border text-center border-[#C0C0C0]/50 p-6 rounded-2xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]">
            <div className="font-bold text-[#536186] text-xl mb-2">YouTube</div>
            <div className="text-sm text-[#363636]/80">
              Tutorials & Long-form
            </div>
          </div>
          <div className="bg-[#536186] text-white border-none text-center p-6 rounded-2xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]">
            <div className="font-bold text-xl mb-2">Websites</div>
            <div className="text-sm text-[#D3D3D3]">Home & Landing Pages</div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProcessSection = () => {
    const steps = [
      {
        t: "Discovery & Planning",
        d: "Getting to know your brand, objectives, and audience.",
      },
      {
        t: "Creative Concept Development",
        d: "Developing the concept, storyline, and script.",
      },
      { t: "Pre-Production", d: "Organizing location, equipment, crew, etc." },
      { t: "Production", d: "Actual shooting using quality equipment." },
      {
        t: "Post-Production",
        d: "Editing, visual effects to create the final product.",
      },
      {
        t: "Optimization & Delivery",
        d: "Preparing the video in different formats.",
      },
      {
        t: "Performance Monitoring",
        d: "Evaluating the performance of the video.",
      },
    ];

    return (
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#363636] mb-6">
                Our Process
              </h2>
              <p className="text-[#363636]/80 text-lg">
                We use a systematic production process to guarantee the
                execution of the project.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-6 mb-8 relative">
                  {i !== steps.length - 1 && (
                    <div className="absolute top-12 left-6 bottom-[-2rem] w-0.5 bg-[#B0C4DE]/50"></div>
                  )}
                  <div className="w-12 h-12 bg-[#536186] rounded-full flex items-center justify-center font-bold text-white shrink-0 z-10 shadow-lg border-2 border-white">
                    {i + 1}
                  </div>
                  <div className="bg-[#D3D3D3]/10 p-6 rounded-2xl border border-[#C0C0C0]/30 shadow-sm w-full transition-all hover:bg-white hover:border-[#536186]/50">
                    <h3 className="text-xl font-bold text-[#363636] mb-2">
                      {step.t}
                    </h3>
                    <p className="text-[#363636]/80">{step.d}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const DoubleInfoSection = () => (
    <section className="py-20 bg-[#363636] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-[#B0C4DE]">
              Benefits of Choosing Our Agency
            </h2>
            <ul className="space-y-4">
              {[
                "Creative storytelling that fits your marketing strategy",
                "Professional filming and editing standards",
                "Marketing-oriented video strategies",
                "Optimized video formats for the web",
                "End-to-end production management",
                "Scalable solutions for businesses of all sizes",
              ].map((b, i) => (
                <li key={i} className="flex gap-3 text-[#D3D3D3]">
                  <Award className="text-[#B0C4DE] shrink-0 mt-1" size={20} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-[#536186]/30 border border-[#536186] rounded-lg text-sm text-[#C0C0C0]">
              Our team's combined experience enables us to create videos that
              don't just look good, but also work well.
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl font-bold mb-8 text-[#B0C4DE]">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "E-commerce and retail",
                "Real estate & property",
                "Health and wellness",
                "Education and training",
                "Hospitality and tourism",
                "Technology and SaaS",
              ].map((ind, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center text-[#D3D3D3] font-medium p-3 bg-[#536186]/20 border border-[#536186]/50 rounded-lg"
                >
                  <Store size={16} className="text-[#B0C4DE]" />
                  <span className="text-sm">{ind}</span>
                </div>
              ))}
            </div>
            <p className="text-[#C0C0C0]">
              All industries require a distinct approach to storytelling, and we
              adapt our video production strategies to meet those needs.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const WhyChooseUsSection = () => (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-[#D3D3D3]/20 rounded-3xl p-8 md:p-12 border border-[#C0C0C0]/30 shadow-lg text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#363636] mb-6">
              Why Choose Us?
            </h2>
            <p className="text-[#536186] font-medium mb-8">
              The key is finding the right production company that connects with
              your audience.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
              <div className="flex gap-3">
                <CheckCircle size={20} className="text-[#536186] shrink-0" />{" "}
                <span className="text-[#363636]/80 text-sm">
                  Creative video + digital marketing skills
                </span>
              </div>
              <div className="flex gap-3">
                <CheckCircle size={20} className="text-[#536186] shrink-0" />{" "}
                <span className="text-[#363636]/80 text-sm">
                  Support for full marketing campaigns
                </span>
              </div>
              <div className="flex gap-3">
                <CheckCircle size={20} className="text-[#536186] shrink-0" />{" "}
                <span className="text-[#363636]/80 text-sm">
                  High-quality production & messaging
                </span>
              </div>
              <div className="flex gap-3">
                <CheckCircle size={20} className="text-[#536186] shrink-0" />{" "}
                <span className="text-[#363636]/80 text-sm">
                  Transparent project management
                </span>
              </div>
              <div className="flex gap-3 col-span-1 sm:col-span-2">
                <CheckCircle size={20} className="text-[#536186] shrink-0" />{" "}
                <span className="text-[#363636]/80 text-sm">
                  Complements SEO, social media & ad campaigns
                </span>
              </div>
            </div>
            <p className="font-bold text-[#363636] text-lg">
              Looking for a digital marketing agency in pune that can offer
              quality video production services?
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const FAQSection = () => {
    const faqs = [
      {
        q: "How long does it take to produce a marketing video?",
        a: "The timeline depends on the project complexity. Simple social media videos may take a few days, while larger brand videos may require several weeks including planning, filming, and editing.",
      },
      {
        q: "Do you provide scriptwriting and concept development?",
        a: "Yes. Our team develops creative concepts, scripts, and storyboards before filming begins.",
      },
      {
        q: "Can videos be optimized for social media platforms?",
        a: "Absolutely. We produce videos specifically designed for platforms like Instagram, YouTube, and LinkedIn to maximize engagement.",
      },
      {
        q: "Do you offer video marketing along with production?",
        a: "Yes. As a best digital marketing agency in pune, we integrate video production with digital marketing campaigns.",
      },
      {
        q: "What types of businesses benefit from video marketing?",
        a: "Almost every industry benefits from video, including retail, technology, education, healthcare, and real estate.",
      },
    ];
    const [open, setOpen] = useState<number | null>(null);

    return (
      <section className="py-20 bg-[#D3D3D3]/10 border-y border-[#C0C0C0]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#363636] mb-12">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-[#C0C0C0]/40 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className="font-bold text-[#536186]">{faq.q}</span>
                    {open === i ? (
                      <Minus className="text-[#536186]" />
                    ) : (
                      <Plus className="text-[#536186]" />
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
                        <div className="px-6 pb-5 text-[#363636]/80 border-t border-[#D3D3D3] pt-4">
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className=" gap-16 items-center">
          <AnimatedSection>
            {/* <h3 className="text-xl font-bold text-[#363636] mb-6 flex items-center gap-2">
              <LinkIcon size={20} className="text-[#B0C4DE]" /> Internal Links
            </h3> */}
            {/* <div className="flex flex-col gap-3 p-6 bg-[#D3D3D3]/10 rounded-xl border border-[#C0C0C0]/30">
              {[
                { l: "/services", text: "Services Overview" },
                {
                  l: "/services/video-production",
                  text: "Video Production Services",
                },
                {
                  l: "/services/digital-marketing",
                  text: "Digital Marketing Services",
                },
                { l: "/case-studies", text: "Case Studies" },
                { l: "/contact", text: "Contact Page" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.l}
                  className="text-[#536186] hover:text-[#363636] hover:underline font-medium flex items-center gap-2"
                >
                  <ArrowRight size={14} /> {link.text}
                </a>
              ))}
            </div> */}
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="bg-[#536186] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#B0C4DE]/20 rounded-full blur-[40px]"></div>

            <p className="text-[#D3D3D3] mb-8 text-sm leading-relaxed">
              Video is considered to be one of the strongest means to
              communicate your brand story. Working with a professional video
              production company guarantees engaging videos to support growth.
              If you are looking for a reliable digital marketing agency in pune
              who can offer video production, Adswise Marketing is here to help.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-[#B0C4DE] hover:bg-[#C0C0C0] text-[#363636] font-bold rounded-lg text-center transition shadow-lg"
              >
                Get Free Video Strategy
              </a>
              <a
                href="/services"
                className="px-6 py-3 border border-[#B0C4DE] hover:bg-[#363636]/30 text-white font-medium rounded-lg text-center transition"
              >
                Request Quote
              </a>
              <Link
                to="/case-studies"
                className="px-6 py-3 text-[#D3D3D3] hover:text-white font-medium text-center transition"
              >
                View Portfolio →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Helmet>
        <title>Video Production Company | Professional Marketing Videos</title>
        <meta
          name="description"
          content="Work with a professional video production company to create engaging marketing videos that increase brand awareness, conversions, and audience engagement."
        />
      </Helmet>

      <div className="font-sans min-h-screen text-[#363636]">
        <HeroSection />
        <IntroductionSection />
        <WhatIsSection />
        <WhyNeedSection />
        <ServicesSection />
        <PlatformsSection />
        <ProcessSection />
        <DoubleInfoSection />
        <WhyChooseUsSection />
        <FAQSection />
        <LinksAndCTA />

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-[#C0C0C0]/50 z-50 md:hidden flex justify-center shadow-2xl">
          <a
            href="/contact"
            className="w-full max-w-md py-3 bg-[#536186] text-white font-bold rounded-lg text-center shadow-lg"
          >
            Start Your Video Project Today
          </a>
        </div>
      </div>
    </>
  );
}
