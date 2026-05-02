import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Video,
  Globe,
  TrendingUp,
  PenTool,
  ArrowRight,
  Briefcase,
  Zap,
  Target,
  Users,
  Award,
  Lightbulb,
  Star,
  Heart,
} from "lucide-react";

export default function CarrierPage() {
  const googleFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSeN_Ckm6tRWFsevqufDkzc4KgwxY4gC3JwaZWg7jiEFZnX7nQ/viewform?usp=publish-editor";

  const opportunities = [
    {
      title: "Graphics Designer",
      icon: <Palette className="w-6 h-6" />,
      desc: "Craft visually compelling designs and brand assets. Bring our clients' visions to life through innovative graphics.",
    },
    {
      title: "Video Editor",
      icon: <Video className="w-6 h-6" />,
      desc: "Create engaging video content and dynamic visual stories. Edit and produce high-quality marketing reels and videos.",
    },
    {
      title: "Website Developer",
      icon: <Globe className="w-6 h-6" />,
      desc: "Build responsive, high-performance websites and web apps. Turn designs into seamless digital experiences.",
    },
    {
      title: "Digital Marketer",
      icon: <TrendingUp className="w-6 h-6" />,
      desc: "Execute ROI-driven campaigns, manage ad spends, and lead digital growth strategies.",
    },
    {
      title: "Content Writer",
      icon: <PenTool className="w-6 h-6" />,
      desc: "Write persuasive copy that converts, educates, and engages audiences across multiple platforms.",
    },
  ];

  // Animation variants for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-[#D3D3D3] pt-28 pb-20 px-4 md:px-8 font-sans selection:bg-[#536186] selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section Split Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div
            className="lg:col-span-7"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/60 border border-white/80 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-sm">
              <Briefcase className="w-4 h-4 text-[#536186]" />
              <span className="text-xs font-bold text-[#363636] uppercase tracking-wider">
                Join Adswise
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#363636] mb-6 tracking-tight leading-[1.1]">
              Build Your Career With{" "}
              <span className="text-[#536186]">Adswise</span>
            </h1>
            <p className="text-lg md:text-xl text-[#363636] max-w-xl opacity-90 font-medium leading-relaxed mb-8">
              At Adswise Marketing, we are constantly pushing the boundaries of
              creativity and digital innovation. Whether you're seeking
              Full-Time roles or Work-From-Home setups, we offer highly
              adaptable environments for your growth.
            </p>
            <a
              href="#opportunities"
              className="inline-flex items-center bg-[#363636] hover:bg-[#536186] text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg group"
            >
              Browse Openings
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* New Image Visual Container */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-[#536186] opacity-10 rounded-[2.5rem] rotate-3 scale-105"></div>
            <div className="absolute inset-0 bg-[#363636] opacity-5 rounded-[2.5rem] -rotate-3 scale-105"></div>
            <img
              src="https://i.pinimg.com/736x/30/bc/6a/30bc6a3da8610c3a16a8e753f8982418.jpg?auto=format&fit=crop&q=80&w=1000"
              alt="Workspace collaboration at Adswise"
              className="relative rounded-[2.5rem] shadow-2xl h-[400px] w-full object-cover border-4 border-white/50"
            />
          </motion.div>
        </div>

        {/* Why Build Your Career Here (Perks & Benefits) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#363636] mb-3">
              Why Work With Us?
            </h2>
            <div className="w-16 h-1 bg-[#536186] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#363636]/80 max-w-2xl mx-auto">
              We focus on building not just great campaigns, but a great
              workplace where our team can thrive, learn, and grow continuously.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Fast-Paced Growth",
                desc: "Work on diverse, high-impact projects that accelerate your learning curve.",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Remote Flexibility",
                desc: "Choose between full-time office or robust work-from-home (WFH) setups.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Collaborative Culture",
                desc: "Join a team of passionate, creative, and supportive individuals.",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Skill Development",
                desc: "Continuous learning with access to premium tools and mentorship.",
              },
            ].map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-sm border border-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#536186]/10 text-[#536186] rounded-xl flex items-center justify-center mb-4">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-[#363636] mb-2">
                  {perk.title}
                </h3>
                <p className="text-[#363636]/70 text-sm leading-relaxed">
                  {perk.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Opportunities Grid */}
        <div id="opportunities" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#363636] mb-3">
              Open Positions
            </h2>
            <div className="w-16 h-1 bg-[#536186] mx-auto rounded-full"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {opportunities.map((job, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-xl p-8 border border-white/80 hover:border-[#536186]/30 group transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                {/* Subtle glass effect in card bg */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#536186]/5 rounded-bl-full -z-0"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-[#363636]/5 text-[#363636] group-hover:bg-[#536186] group-hover:text-white rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                    {job.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[#363636] mb-3 group-hover:text-[#536186] transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-[#363636]/80 mb-6 text-sm leading-relaxed flex-grow">
                    {job.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-3 py-1 bg-[#536186]/10 text-[#536186] text-xs font-bold rounded-lg uppercase tracking-wider">
                      Full Time
                    </span>
                    <span className="px-3 py-1 bg-[#363636]/10 text-[#363636] text-xs font-bold rounded-lg uppercase tracking-wider">
                      Remote / On-site
                    </span>
                  </div>

                  <a
                    href={googleFormLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center border-2 border-[#363636] text-[#363636] group-hover:bg-[#363636] group-hover:text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-sm"
                  >
                    Apply Now
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Our Core Values */}
        <div className="mb-24 bg-white/40 rounded-[2.5rem] p-10 md:p-16 border border-white shadow-sm">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#363636] mb-6">
                What We Look For
              </h2>
              <p className="text-[#363636]/80 text-lg mb-8 leading-relaxed">
                Skill sets can be taught, but a great mindset is what truly sets
                our top performers apart. We are looking for people who embody
                our core values and are ready to tackle challenges head-on.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#363636] text-white p-2 rounded-lg">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#363636] text-lg">
                      Innovation-First
                    </h4>
                    <p className="text-[#363636]/70 text-sm">
                      Always looking for creative ways to solve complex digital
                      problems.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#363636] text-white p-2 rounded-lg">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#363636] text-lg">
                      Ownership
                    </h4>
                    <p className="text-[#363636]/70 text-sm">
                      Taking full responsibility for your projects and driving
                      them to success.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#363636] text-white p-2 rounded-lg">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#363636] text-lg">
                      Passion for Data & Design
                    </h4>
                    <p className="text-[#363636]/70 text-sm">
                      A balanced love for aesthetic creativity and data-driven
                      performance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-full min-h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Adswise Team Culture"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-xl border-4 border-white"
              />
              <div className="absolute inset-0 bg-[#536186]/10 rounded-3xl mix-blend-multiply"></div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#363636] to-[#242424] rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#D3D3D3]">
              Ready to Accelerate Your Journey?
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed text-[#D3D3D3]/80">
              If you have the drive to create impact, solve challenges, and
              deliver exceptional value, we want you on our team. Apply now and
              let’s craft brilliant digital experiences together.
            </p>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D3D3D3] text-[#363636] hover:bg-white font-black py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(211,211,211,0.2)] transition-all uppercase tracking-widest"
            >
              Fill Out Application Form
            </motion.a>
          </div>

          {/* Modern abstract geometry instead of blobs for branding consistency */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#536186] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 border-t border-l border-white/10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
        </motion.div>
      </div>
    </div>
  );
}
