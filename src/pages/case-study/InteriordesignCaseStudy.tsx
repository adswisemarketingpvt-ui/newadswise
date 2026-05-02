import { motion } from "framer-motion";
import {
  ArrowLeft,
  TrendingUp,
  Target,
  BarChart,
  Globe,
  Zap,
  Image as ImageIcon,
  Briefcase,
  Lightbulb,
  Rocket,
  MonitorSmartphone,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function InteriordesignCaseStudy() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <SEO
        title="Interior Design Marketing Case Study | Adswise Marketing"
        description="How Adswise Marketing doubled leads for a Pune interior design studio with SEO, ads, and local marketing strategies."
        canonical="https://adswisemarketing.com/case-studies/interior-design"
      />

      {/* 
        Color Palette mapping (Old Theme):
        #536186 (Stone Gray) - Headings, Accents
        #D3D3D3 (Fog Gray) - Alternate sections, borders
        #363636 (Charcoal Gray) - Primary Dark Text, Strong Elements
        #C0C0C0 (Silver) - Soft backgrounds, subtle accents
        #B0C4DE (Ash Gray) - Highlights, specific blocks
      */}

      <div className="pt-20 bg-white font-sans text-[#363636] min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://adswisemarketing.com/logo%20(3).png"
              alt="200% increase in organic traffic and 120% revenue growth."
              className="w-full h-full object-cover"
            />
            {/* Elegant dark overlay */}
            <div className="absolute inset-0 bg-[#363636]/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-[#D3D3D3] hover:text-white font-semibold mb-8 group transition-colors"
            >
              <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-4xl"
            >
              <div className="inline-block px-4 py-1 bg-[#B0C4DE]/20 text-[#B0C4DE] rounded-full text-sm font-semibold mb-6 backdrop-blur-md border border-[#B0C4DE]/30 uppercase tracking-wider">
                Case Study
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                How We Doubled Leads for a Premium Pune Interior Design Studio
              </h1>
              <p className="text-xl text-[#D3D3D3] max-w-2xl font-light">
                Interior design studio growth in just 6 months.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SNAPSHOT & STATS BAR */}
        <section className="bg-[#536186] text-white py-12 relative -mt-10 z-20 max-w-6xl mx-auto rounded-2xl shadow-2xl mx-4 sm:mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center px-4"
          >
            <motion.div variants={fadeIn} className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold text-[#B0C4DE] mb-2">
                200%
              </span>
              <span className="text-sm md:text-base tracking-wide font-medium">
                Organic Traffic
              </span>
            </motion.div>
            <motion.div variants={fadeIn} className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold text-[#B0C4DE] mb-2">
                120%
              </span>
              <span className="text-sm md:text-base tracking-wide font-medium">
                Revenue Growth
              </span>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col md:col-span-1 col-span-2"
            >
              <span className="text-4xl md:text-5xl font-bold text-[#B0C4DE] mb-2">
                3.0x
              </span>
              <span className="text-sm md:text-base tracking-wide font-medium">
                ROAS
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-4 text-[#D3D3D3] text-sm uppercase tracking-widest font-semibold"
          >
            <span>6 Months</span>
            <span className="text-[#B0C4DE]">•</span>
            <span>Interior Design Studio</span>
            <span className="text-[#B0C4DE]">•</span>
            <span>Pune</span>
          </motion.div>
        </section>

        {/* SNAPSHOT TEXT & TRUST BADGE CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="md:pr-64"
            >
              <h2 className="text-3xl font-bold text-[#363636] mb-8 flex items-center">
                <Target className="mr-4 text-[#536186]" /> Quick Snapshot
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                Despite completing 500+ premium interior projects over 10 years,
                Space Them Upp had no digital presence and struggled to generate
                new leads. Within six months of implementing our strategy, their
                online visibility transformed—organic traffic grew by 200%,
                leads doubled, revenue increased by 120%, and Meta ads delivered
                a strong 3.0× ROAS.
              </p>
            </motion.div>

            {/* Sticky/Fixed right CTA for desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 hidden md:block w-56 mt-16"
            >
              <div className="sticky top-24 bg-[#f8f9fa] border border-[#D3D3D3] rounded-2xl p-6 text-center shadow-md">
                <span className="text-xs font-bold text-[#536186] uppercase tracking-wider mb-2 block border-b border-[#C0C0C0] pb-2">
                  Trusted by 100+ Brands
                </span>
                <p className="text-gray-700 text-sm mb-4 mt-4">
                  Ready to transform your studio?
                </p>
                <Link
                  to="/contact"
                  className="inline-block w-full py-3 bg-[#363636] text-white text-sm font-bold rounded-lg hover:bg-[#536186] transition-colors"
                >
                  Get a Free Growth Audit
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BACKGROUND SECTION: Client Overview & Content */}
        <section className="bg-[#D3D3D3] py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white shadow-lg relative overflow-hidden group">
                  <img
                    src="https://adswisemarketing.com//public/spacethemupp.png"
                    alt="Space Them Upp Interior Design Studio portfolio showcase."
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#363636]/90 via-[#363636]/40 to-transparent flex items-end p-6">
                    <p className="text-white font-medium text-lg">
                      Luxury interiors designed with precision and creativity.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-[#363636] mb-6 flex items-center">
                  <Briefcase className="mr-4 text-[#536186]" /> Client Overview
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Space Them Upp Interior Design Studio is a leading interior
                    design firm in Pune with over a decade of experience,
                    specializing in luxury residential, commercial, and turnkey
                    projects. Their services include design consultation, 3D
                    visualization, project management, custom furniture, and
                    end-to-end solutions—focused on creating spaces that reflect
                    the client’s story.
                  </p>
                  <p>
                    Catering to premium clients investing ₹15–50 lakhs, along
                    with businesses and developers, they operate in a highly
                    competitive Pune–Mumbai market. In such a space, strong
                    digital presence is essential to stand out and attract the
                    right audience at the right time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CHALLENGE SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#363636] mb-6">
                The Challenge
              </h2>
              <p className="text-xl text-[#536186] font-medium max-w-3xl mx-auto mb-10">
                When we first performed the audit, we could immediately see the
                problems. The studio’s website only got a maximum of 100
                visitors each month, with most of those visitors being existing
                clients checking in.
              </p>

              <div className="rounded-xl overflow-hidden border border-[#D3D3D3] shadow-lg max-w-4xl mx-auto inline-block relative">
                <img
                  src="https://i.pinimg.com/736x/8a/17/84/8a1784e4d12abfbf1de0cfb500b742fb.jpg"
                  alt="Website analytics showing low traffic and conversion rates before Adswise intervention."
                  className="w-full object-cover max-h-[400px]"
                />
                <div className="p-4 bg-[#f8f9fa] border-t border-[#D3D3D3]">
                  <p className="text-sm font-medium text-gray-600 italic">
                    Website traffic and lead generation before optimization.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 bg-[#B0C4DE]/10 border border-[#B0C4DE]/50 rounded-2xl p-8 md:p-12 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#363636] mb-8 pb-4 border-b border-[#C0C0C0]">
                The core problems we identified:
              </h3>
              <ul className="grid md:grid-cols-2 gap-6">
                {[
                  "Poor Online Visibility: Barely 100 maximum visitors each month.",
                  "Inconsistent Lead Generation: Very few inquiries coming organically.",
                  "Weak Local Search Presence: GMB was barely optimized with only 2 reviews.",
                  "Portfolio Not Optimized for Conversion: Social handles filled with great work but lacked engagement triggers.",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeIn}
                    className="flex items-start"
                  >
                    <Zap className="w-6 h-6 text-[#536186] mr-4 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* OUR STRATEGY */}
        <section className="py-20 bg-[#536186] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-16 md:text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Strategy
              </h2>
              <div className="w-24 h-1 bg-[#B0C4DE] mx-auto opacity-50 mb-6"></div>
              <p className="text-lg text-[#D3D3D3] max-w-3xl mx-auto">
                We crafted a comprehensive interior design lead generation
                strategy that covers every conversion bottleneck:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1. Technical SEO Foundation",
                  icon: (
                    <MonitorSmartphone className="w-8 h-8 text-[#536186]" />
                  ),
                },
                {
                  title: "2. Content & Portfolio Optimization",
                  icon: <ImageIcon className="w-8 h-8 text-[#536186]" />,
                },
                {
                  title: "3. Local SEO Dominance",
                  icon: <Globe className="w-8 h-8 text-[#536186]" />,
                },
                {
                  title: "4. Targeted Paid Advertising",
                  icon: <Target className="w-8 h-8 text-[#536186]" />,
                },
                {
                  title: "5. Social Media Showcase Strategy",
                  icon: <TrendingUp className="w-8 h-8 text-[#536186]" />,
                },
              ].map((strategy, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className={`bg-white text-[#363636] rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300 ${idx === 3 || idx === 4 ? "md:col-span-1.5" : ""}`}
                >
                  <div className="w-16 h-16 bg-[#B0C4DE]/30 rounded-xl flex items-center justify-center mb-6">
                    {strategy.icon}
                  </div>
                  <h3 className="text-xl font-bold">{strategy.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION PROCESS */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#363636] mb-6 flex items-center">
                <Rocket className="mr-4 text-[#536186]" /> Implementation
                Process
              </h2>
            </motion.div>

            <div className="space-y-16">
              {/* Process 1 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="border-l-4 border-[#536186] pl-8"
              >
                <h3 className="text-2xl font-bold text-[#363636] mb-4">
                  SEO Optimization
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We built the website’s SEO architecture from the ground up,
                  creating a fast, scalable, and search-engine-friendly
                  structure with a load time of under 2 seconds. Structured data
                  for services and organization details was implemented to
                  enhance search visibility.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through in-depth keyword research, we identified high-intent
                  search terms such as
                  <strong>
                    {" "}
                    “interior designers in Pune,” “luxury interior designers,”
                  </strong>{" "}
                  and
                  <strong> “turnkey interior solutions.”</strong> Based on this,
                  we developed dedicated, SEO-optimized landing pages for each
                  core service to improve targeting, relevance, and ranking
                  potential.
                </p>
              </motion.div>

              {/* Process 2 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="border-l-4 border-[#B0C4DE] pl-8"
              >
                <h3 className="text-2xl font-bold text-[#363636] mb-6">
                  Website & Portfolio Optimization
                </h3>

                <div className="my-8">
                  <img
                    src="https://adswisemarketing.com//public/casestudy/spaceportfolio.jpeg"
                    alt="Before and after interior design transformation."
                    className="w-full object-cover rounded-xl shadow-md border border-[#D3D3D3]"
                  />
                  <p className="text-center text-sm text-gray-500 italic mt-3">
                    Project transformation showcasing interior design expertise.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed bg-[#f8f9fa] p-6 rounded-lg border border-[#C0C0C0]/50">
                  The portfolio was designed as a visually engaging,
                  easy-to-navigate showcase with a clean grid layout, category
                  filters, and high-quality project images. It highlights key
                  project types, maintains consistent branding, and offers a
                  smooth browsing experience—helping users quickly explore
                  projects, understand capabilities, and move toward taking
                  action.
                </p>
              </motion.div>

              {/* Process 3 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="border-l-4 border-[#363636] pl-8"
              >
                <h3 className="text-2xl font-bold text-[#363636] mb-6">
                  Paid Advertising Campaigns
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We created audience-specific ad campaigns targeting the
                  different client segments:
                </p>

                <div className="grid gap-6">
                  {/* Cards for campaigns */}
                  <div className="bg-white border border-[#D3D3D3] rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#536186] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#363636] mb-2">
                        Homeowners Renovating
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Targeting the audience of Pune city between the age
                        group of 30-55 years with homeownership interest.
                      </p>
                      <span className="inline-block bg-[#536186]/10 text-[#536186] font-bold px-3 py-1 rounded">
                        ROAS: 3x
                      </span>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D3D3D3] rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#B0C4DE] text-[#363636] flex items-center justify-center font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#363636] mb-2">
                        Premium Property Buyers
                      </h4>
                      <p className="text-gray-600 mb-2">
                        Targeting the audience of recent property buyers of
                        high-end residential properties.
                      </p>
                      <span className="inline-block bg-[#B0C4DE]/30 text-[#363636] font-bold px-3 py-1 rounded">
                        ROAS: 2.8x
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-[#f8f9fa] p-6 rounded-lg border-dashed border-2 border-[#C0C0C0]">
                  <p className="text-gray-700 font-medium text-center">
                    Dynamic retargeting campaigns were used to target the
                    audience who visited the website and saw specific portfolio
                    projects. Lookalike audiences were used to target the
                    audience similar to the existing high-value client segments.
                  </p>
                </div>
              </motion.div>

              {/* Process 4 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="border-l-4 border-[#C0C0C0] pl-8"
              >
                <h3 className="text-2xl font-bold text-[#363636] mb-6">
                  Local SEO & Reputation Management
                </h3>

                <div className="my-8">
                  <img
                    src="https://adswisemarketing.com//public/casestudy/spacethemm.jpeg"
                    alt="Google Business Profile insights showing increased inquiries."
                    className="w-full object-cover rounded-xl shadow-md border border-[#D3D3D3] max-h-[400px]"
                  />
                  <p className="text-center text-sm text-gray-500 italic mt-3">
                    Local search visibility improved through GMB optimization.
                  </p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We optimized their Google Business Profile with professional
                  project images, keyword-rich service descriptions, and a
                  structured review collection strategy.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Regular weekly posts featuring projects, tips, and
                  testimonials improved activity and visibility. Additionally,
                  we targeted premium Pune locations like
                  <span className="font-semibold">
                    {" "}
                    Koregaon Park, Kalyani Nagar, Baner, Aundh, and Viman Nagar
                  </span>{" "}
                  to strengthen local search presence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* RESULTS & PERFORMANCE */}
        <section className="py-20 bg-[#D3D3D3]/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#363636] mb-4">
                Results & Performance Growth
              </h2>
              <p className="text-xl text-[#536186]">
                The transformation exceeded even our optimistic projections:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  label: "Organic Traffic",
                  value: "+200%",
                  icon: (
                    <TrendingUp className="w-12 h-12 text-[#536186] mb-4 mx-auto" />
                  ),
                  bg: "bg-white",
                },
                {
                  label: "Qualified Inquiries",
                  value: "2×",
                  icon: (
                    <CheckCircle className="w-12 h-12 text-[#B0C4DE] mb-4 mx-auto" />
                  ),
                  bg: "bg-white",
                },
                {
                  label: "Revenue Growth",
                  value: "+120%",
                  icon: (
                    <BarChart className="w-12 h-12 text-[#363636] mb-4 mx-auto" />
                  ),
                  bg: "bg-white",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`${stat.bg} rounded-2xl p-10 text-center shadow-lg border border-[#C0C0C0]/50`}
                >
                  {stat.icon}
                  <h3 className="text-2xl font-semibold text-gray-500 uppercase tracking-wider text-sm mb-2">
                    {stat.label}
                  </h3>
                  <div className="text-5xl font-black text-[#363636]">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-[#C0C0C0]/30 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#363636] mb-6 border-b border-[#D3D3D3] pb-4">
                Direct Attribution
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Organic traffic growth directly correlates with technical SEO
                fixes and content publication. Inquiry volume spikes correlate
                with the rollout of portfolio optimization and paid campaigns.
                Local search visibility exploded after GMB optimization.
              </p>
            </div>
          </div>
        </section>

        {/* KEY TAKEAWAYS */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#363636] flex items-center justify-center">
                <Lightbulb className="mr-4 text-[#B0C4DE] w-10 h-10" /> Key
                Takeaways
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "1. Portfolio-Driven SEO Generates Qualified Leads",
                "2. Local Search Visibility Captures Premium Inquiries",
                "3. Before-After Content Delivers More Conversions Than Anything Else",
                "4. Review Collection Fuels a Compounding Effect",
                "5. Targeted Advertising Delivers Better ROI Than General Ads",
              ].map((takeaway, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 rounded-xl font-semibold text-lg ${idx === 4 ? "md:col-span-2 text-center" : ""} bg-[#536186] text-white shadow-md hover:bg-[#363636] transition-colors`}
                >
                  {takeaway}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ADS-WISE & CTA */}
        <section className="bg-[#363636] text-white py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B0C4DE] rounded-full blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#536186] rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Adswise Marketing
              </h2>
              <p className="text-xl text-[#D3D3D3] leading-relaxed max-w-3xl mx-auto">
                We specialize in growing service-based and creative businesses
                through SEO, paid ads, and conversion-focused strategies.
                Understanding the importance of portfolios, trust, and local SEO
                in interior design, we build tailored growth systems that
                generate predictable leads, strengthen reputation, and drive
                consistent business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-white/20 shadow-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#B0C4DE] mb-6">
                Ready to Transform Your Interior Design Studio's Growth?
              </h2>
              <p className="text-xl text-white mb-10 font-light max-w-2xl mx-auto">
                Looking to grow your interior design studio with proven digital
                marketing strategies? We'll analyze your current digital
                presence, identify quick wins, and show you exactly how we'd
                double your design inquiries.
              </p>

              <Link
                to="/contact"
                className="inline-block px-10 py-5 bg-[#B0C4DE] text-[#363636] text-lg font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#B0C4DE]/30"
              >
                Schedule Your Free Growth Audit
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default InteriordesignCaseStudy;
