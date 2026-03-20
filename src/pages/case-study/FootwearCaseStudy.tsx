import { motion } from "framer-motion";
import {
  ArrowLeft,
  TrendingUp,
  CheckCircle,
  Target,
  BarChart,
  Globe,
  Zap,
  Image as ImageIcon,
  Briefcase,
  Lightbulb,
  Rocket,
  MonitorSmartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

function FootwearCaseStudy() {
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
        title="E-commerce Growth Strategy for Footwear | Adswise Marketing"
        description="Adswise Marketing grew a handcrafted footwear brand: +250% organic traffic, 180% revenue, 3.2x ROAS. Learn how."
      />

      {/* 
        Color Palette mapping:
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
              src="/images/case-studies/footwear/hero-banner.png"
              alt="250% increase in organic traffic, 180% revenue growth, 3.2x ROAS."
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
                How We Tripled Revenue for a Premium Handcrafted Footwear Brand
              </h1>
              <p className="text-xl text-[#D3D3D3] max-w-2xl font-light">
                Transformational growth in 6 months.
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
                250%
              </span>
              <span className="text-sm md:text-base tracking-wide font-medium">
                Organic Traffic
              </span>
            </motion.div>
            <motion.div variants={fadeIn} className="flex flex-col">
              <span className="text-4xl md:text-5xl font-bold text-[#B0C4DE] mb-2">
                180%
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
                3.2x
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
            <span>D2C + Wholesale</span>
            <span className="text-[#B0C4DE]">•</span>
            <span>India</span>
          </motion.div>
        </section>

        {/* SNAPSHOT TEXT */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-[#363636] mb-8 flex items-center">
                <Target className="mr-4 text-[#536186]" /> Snapshot
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When DTK approached us, their handcrafted footwear brand had
                strong legacy value and product quality but lacked a
                professional, conversion-focused digital presence to support
                their direct-to-consumer growth. Despite their experience in the
                wholesale space, the absence of a well-structured website
                limited their ability to attract, engage, and convert online
                customers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This transformation enabled DTK to establish a strong digital
                presence, effectively showcase their products, enhance user
                experience, and support long-term online growth.
              </p>
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
                <div className="bg-white p-2 shadow-lg relative overflow-hidden group">
                  <img
                    src="/images/case-studies/footwear/client-overview.png"
                    alt="Handcrafted leather shoes product showcase."
                    className="w-full h-80 object-contain rounded-xl transition-transform duration-500 group-hover:scale-105 bg-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#363636]/80 to-transparent flex items-end p-6">
                    <p className="text-white font-medium">
                      Hand-stitched leather — premium value.
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
                    Our client, a boutique manufacturer of handcrafted leather
                    shoes, had built a strong wholesale presence over three
                    decades, offering premium products priced between ₹1500 to
                    ₹12,000. Known for full-grain leather and traditional
                    craftsmanship, they catered to both retailers and direct
                    consumers seeking high-quality, uniquely designed footwear.
                  </p>
                  <p>
                    However, their digital presence did not reflect this premium
                    positioning. The e-commerce website struggled to communicate
                    their brand value and relied mainly on branded searches from
                    existing customers, with limited visibility and traction
                    among new audiences.
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
              <p className="text-xl text-[#536186]">
                When Mr. Dnyandev Kamble, the founder, approached us, he
                highlighted a key challenge: despite creating high-quality,
                long-lasting footwear, the brand had no proper digital presence
                to showcase its value or reach online customers.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#B0C4DE]/10 border border-[#B0C4DE]/50 rounded-2xl p-8 md:p-12 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#363636] mb-8 pb-4 border-b border-[#C0C0C0]">
                Real customer pain points we identified:
              </h3>
              <ul className="space-y-6">
                {[
                  "No existing website to showcase product details like sizing, leather type, or maintenance.",
                  "No digital platform to communicate the brand's craftsmanship and premium positioning.",
                  "No mobile-optimized experience to capture online users effectively.",
                  "Lack of content storytelling to justify premium pricing.",
                  "No Google Business optimization, limiting local search visibility.",
                  "Overall, the brand lacked a digital experience that matched the quality of its products.",
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
              <div className="w-24 h-1 bg-[#B0C4DE] mx-auto opacity-50"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "1. Technical SEO Foundation",
                  desc: "Since there was no existing website, we built the entire platform from scratch with a strong technical and SEO foundation. This included a well-structured architecture, optimized internal linking, mobile responsiveness, fast page speed, and implementation of essential elements like schema markup—ensuring long-term visibility, performance, and scalability.",
                  icon: (
                    <MonitorSmartphone className="w-8 h-8 text-[#536186]" />
                  ),
                },
                {
                  title: "2. Content & Product Page Optimization",
                  desc: "We rewrote all product descriptions to incorporate the craftsmanship story. We also added detailed product specifications to each shoe page.",
                  icon: <ImageIcon className="w-8 h-8 text-[#536186]" />,
                },
                {
                  title: "3. Local Search Dominance",
                  desc: "We optimized the Google My Business listing with professional photos, posts, reviews, and local keyword targeting for 'near me' searches.",
                  icon: <Globe className="w-8 h-8 text-[#536186]" />,
                },
                {
                  title: "4. Targeted Paid Advertising",
                  desc: "We developed segmented Meta Ads targeting different customer segments: premium shoe buyers, gift buyers, corporate bulk buyers, etc. We created engaging ads that told the story of craftsmanship.",
                  icon: <Target className="w-8 h-8 text-[#536186]" />,
                },
                {
                  title: "5. Conversion Rate Optimization",
                  desc: "We implemented A/B testing for product pages, checkout optimization, trust badges, customer reviews, and cart abandonment recovery.",
                  icon: <TrendingUp className="w-8 h-8 text-[#536186]" />,
                },
              ].map((strategy, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="bg-white text-[#363636] rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-[#B0C4DE]/30 rounded-xl flex items-center justify-center mb-6">
                    {strategy.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{strategy.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {strategy.desc}
                  </p>
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
                <p className="text-lg text-gray-700 leading-relaxed">
                  We built the SEO foundation from scratch, optimizing the
                  website for speed and performance, reducing page load time
                  from 8.2 seconds to 2.1 seconds. Structured data for products,
                  reviews, and business details was implemented to improve
                  search visibility. Additionally, we identified high-intent
                  keywords such as <strong>“handcrafted leather shoes,”</strong>{" "}
                  <strong>“premium formal shoes India,”</strong> and{" "}
                  <strong>“durable leather footwear,”</strong> and optimized
                  content and meta tags to effectively target these
                  opportunities.
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
                  Product Page Optimization
                </h3>
                <div className="bg-[#D3D3D3]/20 rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-lg text-[#363636] mb-4 border-b border-[#C0C0C0] pb-2">
                    Transformed product pages from basic listings into
                    story-driven experiences:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {[
                      "Added high-quality product photography highlighting craftsmanship",
                      "Included detailed specifications and size charts for better clarity",
                      "Wrote narrative descriptions showcasing the craftsmanship process",
                      "Integrated customer reviews to build trust and credibility",
                      "Implemented related product recommendations for better engagement",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-[#536186] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 font-medium text-[#536186]">
                    The result was a more compelling e-commerce experience that
                    justified premium pricing and increased customer confidence.
                  </p>
                </div>
                <div className="mt-6 flex flex-col space-y-2">
                  <img
                    src="/images/case-studies/footwear/product-page-before-after.png"
                    alt="Before and after product page optimization for handcrafted shoes."
                    className="rounded-lg shadow-md max-h-[500px] object-contain w-full"
                  />
                  <span className="text-sm text-center text-gray-500 italic">
                    Product page optimization improved conversion.
                  </span>
                </div>
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
                  Paid Advertising
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We completely overhauled the paid advertising strategy.
                  Instead of broad-based campaigns like "shop shoes," we built
                  audience-specific campaigns:
                </p>

                <div className="grid gap-6">
                  {/* Cards for campaigns */}
                  <div className="bg-white border border-[#D3D3D3] rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#536186] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#363636] mb-2">
                        Premium Buyers
                      </h4>
                      <p className="text-gray-600">
                        Targeting high-value professionals with carousel ads on
                        craftsmanship process, resulting in{" "}
                        <strong>4x ROAS</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D3D3D3] rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#B0C4DE] text-[#363636] flex items-center justify-center font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#363636] mb-2">
                        Gift Shoppers
                      </h4>
                      <p className="text-gray-600">
                        Running seasonal campaigns for festivals and occasions,
                        focusing on durability and premium packaging, resulting
                        in <strong>2.8x ROAS</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-[#D3D3D3] rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#363636] text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#363636] mb-2">
                        Corporate Bulk
                      </h4>
                      <p className="text-gray-600">
                        Retargeting wholesale customers with bulk pricing and
                        customization options, Monthly Budget - LEAD AD -
                        6000/-, resulting in <strong>3.5x ROAS</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-[#f8f9fa] p-6 rounded-lg border-dashed border-2 border-[#C0C0C0]">
                  <p className="text-gray-700 font-medium text-center">
                    We used dynamic product ads for users who viewed products,
                    along with lookalike audiences for high-value customer
                    profiles.
                  </p>
                </div>
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
                The transformation was remarkable and data-driven:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  label: "Organic Traffic",
                  value: "+250%",
                  icon: (
                    <TrendingUp className="w-12 h-12 text-[#536186] mb-4 mx-auto" />
                  ),
                  bg: "bg-white",
                },
                {
                  label: "Revenue Growth",
                  value: "+180%",
                  icon: (
                    <BarChart className="w-12 h-12 text-[#B0C4DE] mb-4 mx-auto" />
                  ),
                  bg: "bg-white",
                },
                {
                  label: "Paid Ad ROAS",
                  value: "3.2×",
                  icon: (
                    <Target className="w-12 h-12 text-[#363636] mb-4 mx-auto" />
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

            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl overflow-hidden shadow-xl border border-[#C0C0C0]/30">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#363636] mb-6">
                  Attribution to specific actions:
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The increase in organic traffic correlated very well with the
                  technical SEO improvements and content publication schedule.
                  The revenue increases correlated well with the optimization of
                  product pages and paid campaign launches. The local traffic
                  increased significantly after GMB optimization.
                </p>
              </div>
              <div className="h-full bg-[#f8f9fa] flex flex-col justify-center items-center p-8 border-l border-[#D3D3D3]/50">
                <div className="grid grid-cols-2 gap-2 w-full mb-4 overflow-hidden rounded-lg shadow-md bg-white p-2">
                  <img src="/images/case-studies/footwear/gmb-1.jpg" alt="GMB performance" className="w-full h-auto object-contain col-span-2" />
                  <img src="/images/case-studies/footwear/gmb-2.jpg" alt="GMB ranking" className="w-full h-24 object-contain" />
                  <img src="/images/case-studies/footwear/gmb-3.jpg" alt="GMB reviews" className="w-full h-24 object-contain" />
                  <img src="/images/case-studies/footwear/gmb-4.png" alt="GMB traffic" className="w-full h-24 object-contain" />
                  <img src="/images/case-studies/footwear/gmb-5.png" alt="GMB visibility" className="w-full h-24 object-contain" />
                </div>
                <span className="text-sm font-medium text-gray-500 italic">
                  Local visibility improved via GMB optimization.
                </span>
              </div>
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
                "1. Technical Excellence Enables Growth",
                "2. Product Pages Are Your Sales Team",
                "3. Local + National Strategy Wins",
                "4. Segmentation Beats Generic Advertising",
                "5. Data-Driven Iteration Compounds Growth",
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
                We don’t just execute marketing tactics—we build sustainable
                growth systems driven by e-commerce expertise, data, and
                continuous optimization. Instead of using a one-size-fits-all
                approach, we create customized strategies tailored to each
                business’s model, customer behavior, and competitive landscape.
                Every decision is backed by data, testing, and precise
                measurement, enabling us to deliver scalable, consistent, and
                performance-driven growth for e-commerce brands ready to scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-white/20 shadow-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#B0C4DE] mb-6">
                Ready to Transform Your E-commerce Performance?
              </h2>
              <p className="text-xl text-white mb-10 font-light max-w-2xl mx-auto">
                Get a free growth audit and discover your untapped revenue
                potential. We'll analyze your site, identify quick wins, and
                show you exactly how we'd grow your business—no obligation
                required.
              </p>

              <Link
                to="/contact"
                className="inline-block px-10 py-5 bg-[#B0C4DE] text-[#363636] text-lg font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#B0C4DE]/30"
              >
                Schedule Your Free Strategy Session
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FootwearCaseStudy;
