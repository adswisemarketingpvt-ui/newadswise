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

function RealEstateCaseStudy() {
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
        title="Real Estate Growth Strategy for Builders and Developers in Pune"
        description="How Adswise Marketing helped Bhumkar Realty build visibility, generate qualified leads, and strengthen trust across digital channels"
        canonical="https://adswisemarketing.com/case-studies/real-estate"
      />

      <div className="pt-20 bg-white font-sans text-[#363636] min-h-screen">
        {/* HERO SECTION */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Real Estate Growth Strategy for Builders and Developers in Pune"
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
                Real Estate Growth Strategy for Builders and Developers in Pune
              </h1>
              <p className="text-xl text-[#D3D3D3] max-w-2xl font-light leading-relaxed">
                However, in a competitive market like Pune’s real estate
                industry, being visible is not enough; buyers want trust, timely
                communication, and reliability before even enquiring.
              </p>
            </motion.div>
          </div>
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
                <Target className="mr-4 text-[#536186]" /> Introduction
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is where Adswise Marketing came in and partnered with
                Bhumkar Realty, a brand for builders and developers who pride
                themselves on quality construction and timely delivery of
                projects in Wakad and Chinchwad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The goal was to develop a performance-driven digital solution
                that could improve lead quality and brand awareness. With the
                help of paid ads, social media, lead gen, SEO, and website
                optimization, Adswise Marketing made online activities produce
                measurable results, which contributed to 400+ clients and laid
                the groundwork for future success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* BACKGROUND SECTION: Client Overview & Content */}
        <section className="bg-[#D3D3D3]/30 border-y border-[#C0C0C0] py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white p-2 shadow-lg relative overflow-hidden group rounded-xl">
                  <img
                    src="https://adswisemarketing.com/public/casestudy/1.jpeg"
                    alt="Bhumkar Realty Website Snapshot"
                    className="w-full h-80 object-contain bg-gray-50 rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#363636]/80 to-transparent flex items-end p-6">
                    <p className="text-white font-medium text-lg">
                      Building visibility and trust across digital channels.
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
                    Bhumkar Realty competes in a competitive real estate market
                    in Pune, where customers compare multiple properties before
                    making a decision, making digital presence a part of the
                    sales strategy.
                  </p>
                  <p>
                    The company's target group includes home seekers, working
                    professionals, and investors who look for reliable options
                    for residential properties. Effective digital marketing
                    strategies help create brand trust and increase visibility,
                    which is important since most customers start their journey
                    on the internet.
                  </p>
                  <p className="font-semibold text-[#536186]">
                    Believe Properties has demonstrated how SEO and website
                    optimization help create brand trust on the internet.
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
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                The real estate market in Pune is a competitive market,
                especially in areas like Wakad and Chinchwad. Bhumkar Realty
                needed more than just exposure; they needed a solution to
                attract the right crowd and generate leads.
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
                Key challenges faced by the brand:
              </h3>
              <ul className="space-y-6">
                {[
                  "Poor quality leads failing to convert effectively.",
                  "A lack of consistent social media presence.",
                  "Low brand visibility in a highly competitive market.",
                  "A poorly optimized website with a bad conversion flow.",
                  "A brand message that failed to convey quality and timely delivery.",
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
              <p className="mt-8 text-lg font-semibold text-[#536186]">
                This led Adswise Marketing to provide a complete digital growth
                solution for Bhumkar Realty.
              </p>
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
              <div className="w-24 h-1 bg-[#B0C4DE] mx-auto opacity-50 mb-8"></div>
              <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">
                The strategy was formulated on a single premise:{" "}
                <span className="font-bold text-[#B0C4DE]">
                  Trust leads to conversions.
                </span>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Targeted Advertising",
                  desc: "The emphasis was on creating qualified leads through targeted ads across Google and Meta platforms.",
                  icon: <Target className="w-8 h-8 text-[#536186]" />,
                },
                {
                  title: "Local Geographic Focus",
                  desc: "A geographical approach was considered for Pune, particularly Wakad and Chinchwad, to create strong buyer intent.",
                  icon: <Globe className="w-8 h-8 text-[#536186]" />,
                },
                {
                  title: "Visibility & Social Trust",
                  desc: "Improving visibility through consistent social media strategy to establish the brand before the first enquiry.",
                  icon: <ImageIcon className="w-8 h-8 text-[#536186]" />,
                },
                {
                  title: "SEO & Website Optimization",
                  desc: "Optimizing the website to achieve conversions quickly and improving organic presence for Believe Properties.",
                  icon: (
                    <MonitorSmartphone className="w-8 h-8 text-[#536186]" />
                  ),
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
                  <p className="text-gray-600 leading-relaxed text-base">
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
                  Paid Campaigns for Bhumkar Realty
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The paid media strategy was to target a high-intent real
                  estate lead generation model. Google Ads were used to target
                  people who were actively looking to buy properties in Pune,
                  whereas Meta Ads targeted people who were looking to buy homes
                  based on their interests.
                </p>
                <div className="bg-[#D3D3D3]/20 rounded-xl p-6">
                  <p className="font-medium text-[#363636] mb-4">
                    The campaigns focused on the value, location, and trust
                    factors, along with segmentation based on intent and
                    behavior.
                  </p>
                  <img
                    src="https://adswisemarketing.com/public/casestudy/campagin1.jpeg"
                    alt="Campaign Results 1"
                    className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-md bg-white p-2"
                  />
                  <br />
                  <img
                    src="https://adswisemarketing.com/public/casestudy/campagin2.jpeg"
                    alt="Campaign Results 1"
                    className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-md bg-white p-2"
                  />
                </div>
              </motion.div>

              {/* Process 2 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="border-l-4 border-[#B0C4DE] pl-8"
              >
                <h3 className="text-2xl font-bold text-[#363636] mb-4">
                  Social Media Management
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Social media helps to establish trust for a real estate brand
                  even before the first enquiry. Adswise Marketing designed the
                  content strategy for Bhumkar Realty.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Adswise Marketing designed the content strategy for Bhumkar
                  Realty. It included project highlights, brand storytelling,
                  lifestyle images, and reels.
                </p>
                <ul className="grid md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Project highlights",
                    "Brand storytelling",
                    "Lifestyle images",
                    "Engaging reels",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#536186] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-medium text-[#536186]">
                  This consistency helped establish the brand as trustworthy and
                  established.
                </p>
                <img
                  src="https://adswisemarketing.com/public/casestudy/realestate-graphics.jpeg"
                  alt="Campaign Results 1"
                  className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-md bg-white p-2 mb-4"
                />
                <img
                  src="https://adswisemarketing.com/public/casestudy/social%20media.jpeg"
                  alt="Campaign Results 1"
                  className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-md bg-white p-2"
                />
              </motion.div>

              {/* Process 3 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="border-l-4 border-[#363636] pl-8"
              >
                <h3 className="text-2xl font-bold text-[#363636] mb-4">
                  SEO and Website Optimization for Believe Properties
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  For Believe Properties, the focus was on website optimization
                  and organic visibility. Adswise Marketing helped improve the
                  site structure and optimized the website’s meta tags.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The company also improved the content for the service and
                  project pages and targeted keywords for location-based
                  searches to improve site visibility.
                </p>
                <div className="bg-[#f8f9fa] p-6 rounded-lg border-dashed border-2 border-[#C0C0C0]">
                  <p className="text-gray-700 font-medium">
                    The intention was not only to improve site visibility but
                    also to improve site relevance by providing a better and
                    more transparent site experience for property seekers.
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
                The strategy resulted in measurable growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-10 text-center shadow-lg border border-[#C0C0C0]/50"
              >
                <TrendingUp className="w-12 h-12 text-[#536186] mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-gray-500 uppercase tracking-wider text-sm mb-2">
                  Bhumkar Realty Clients Generated
                </h3>
                <div className="text-5xl font-black text-[#363636]">400+</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-white rounded-2xl p-10 text-center shadow-lg border border-[#C0C0C0]/50"
              >
                <BarChart className="w-12 h-12 text-[#B0C4DE] mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold text-gray-500 uppercase tracking-wider text-sm mb-2">
                  Inquiries & Site Visits
                </h3>
                <div className="text-3xl font-bold text-[#363636] mt-4">
                  Significant Increase
                </div>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-2xl overflow-hidden shadow-xl border border-[#C0C0C0]/30">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-[#363636] mb-6">
                  Credibility & Conversion
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Bhumkar Realty witnessed increased leads, social media
                  traction, and visibility, making their digital presence more
                  credible and conversion-oriented. Adwise Marketing helped
                  generate 400+ clients in total, which increased inquiries and
                  interest in visiting the site.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  For Believe Properties, increased SEO, and a better website
                  structure resulted in increased organic visibility, content,
                  and trust.
                </p>
              </div>
              <div className="h-full bg-[#f8f9fa] flex flex-col justify-center items-center p-8 border-l border-[#D3D3D3]/50">
                <img
                  src="https://adswisemarketing.com//public/casestudy/1.jpeg"
                  alt="Campaign Results 2"
                  className="w-full h-auto object-contain bg-white p-2 rounded-lg shadow-md mb-4"
                />
                <span className="text-sm font-medium text-gray-500 italic">
                  Performance-driven campaigns leading to real business results.
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
              <p className="text-lg text-gray-600 mt-4">
                This project has also emphasized some of the key learnings for
                real estate brands in Pune.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Digital credibility before conversion cannot be overstated.",
                "Paid ads are most effective with precise targeting and CTAs.",
                "Social media lays the foundation for establishing trust before inquiries.",
                "SEO ensures long-term visibility.",
                "Website optimization has a direct impact on visitors converted into leads.",
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
                The importance of digital credibility before conversion cannot
                be overstated. Paid ads are most effective with precise
                targeting and CTAs, whereas social media is for establishing
                trust before inquiries. SEO is for long-term visibility, and
                website optimization has a direct impact on the number of
                visitors converted into leads.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-white/20 shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#B0C4DE] mb-6">
                Build Your Next Growth Story With Adswise Marketing
              </h2>
              <p className="text-xl text-white mb-10 font-light max-w-2xl mx-auto">
                Seeking to produce qualified leads, establish trust, and boost
                your real estate brand in Pune? Adswise Marketing is here to
                help you achieve your online marketing goals with our
                performance-driven campaigns and optimization strategies that
                drive real business results.
              </p>

              <Link
                to="/contact"
                className="inline-block px-10 py-5 bg-[#B0C4DE] text-[#363636] text-lg font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-[#B0C4DE]/30"
              >
                Let’s Drive Your Results
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default RealEstateCaseStudy;
