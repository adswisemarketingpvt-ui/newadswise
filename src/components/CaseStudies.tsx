import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
// Import Link as RouterLink to avoid naming conflicts
import { Link as RouterLink } from 'react-router-dom';

// Create a motion-enabled Link component
const MotionLink = motion(RouterLink);

function CaseStudies() {
  const caseStudies = [
    {
      title: 'E-commerce Revenue Growth',
      client: 'Fashion Retailer',
      results: '250% increase in organic traffic',
      // AI-generated image
      image: 'https://image.pollinations.ai/prompt/abstract%20ecommerce%20analytics%20growth%20chart%20blue%20pink?width=600&height=400&seed=20',
      category: 'SEO & Content',
      link: '/case-studies/ecommerce-growth' // Example link
    },
    {
      title: 'B2B Lead Generation',
      client: 'SaaS Company',
      results: '400% growth in qualified leads',
      image: 'https://image.pollinations.ai/prompt/abstract%20b2b%20saas%20dashboard%20leads%20tech%20indigo?width=600&height=400&seed=21',
      category: 'PPC & Marketing',
      link: '/case-studies/b2b-leads' // Example link
    },
    {
      title: 'Brand Social Engagement',
      client: 'Multi-Location Restaurant',
      results: '320% boost in engagement',
      image: 'https://image.pollinations.ai/prompt/abstract%20social%20media%20network%20food%20restaurant%20orange?width=600&height=400&seed=22',
      category: 'Social Media',
      link: '/case-studies/social-engagement' // Example link
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <div
              className="text-center mb-4 md:mb-5 animate-fadeIn"
              style={{ animationDelay: "0s" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold text-white mb-4">
                Success <span className="text-yellow-500">Stories</span>
              </h1>
              <p className="text-gray-500 text-sm md:text-lg">
                Real results from real businesses. See how we've helped our clients achieve their goals.
              </p>
            </div>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <MotionLink
              key={index}
              to={study.link} // The entire card is now a link
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group bg-neutral-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 border border-neutral-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  loading="lazy"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-cyan-900 text-cyan-300 text-sm font-semibold rounded-full mb-3">
                  {study.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-400 mb-4">{study.client}</p>
                <div className="flex items-center text-green-400 font-semibold mb-4">
                  <TrendingUp className="w-5 h-5 mr-2 flex-shrink-0" />
                  {study.results}
                </div>
                {/* Replaced button with styled text, as card is the link */}
                <div className="mt-6 inline-flex items-center text-cyan-400 font-semibold">
                  Read Case Study
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </MotionLink>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          {/* Use RouterLink for the non-motion Link */}
          <RouterLink
            to="/case-studies"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Case Studies
          </RouterLink>
        </motion.div>
      </div>
    </section>
  );
}

export default CaseStudies;