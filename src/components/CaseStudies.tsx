import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const MotionLink = motion(RouterLink);

function CaseStudies() {
  const caseStudies = [
    {
      title: 'E-commerce Revenue Growth',
      client: 'Fashion Retailer',
      results: '250% increase in organic traffic',
      image: 'https://image.pollinations.ai/prompt/abstract%20ecommerce%20analytics%20growth%20chart%20blue%20pink?width=600&height=400&seed=20',
      category: 'SEO & Content',
      link: '/case-studies/ecommerce-growth'
    },
    {
      title: 'B2B Lead Generation',
      client: 'SaaS Company',
      results: '400% growth in qualified leads',
      image: 'https://image.pollinations.ai/prompt/abstract%20b2b%20saas%20dashboard%20leads%20tech%20indigo?width=600&height=400&seed=21',
      category: 'PPC & Marketing',
      link: '/case-studies/b2b-leads'
    },
    {
      title: 'Brand Social Engagement',
      client: 'Multi-Location Restaurant',
      results: '320% boost in engagement',
      image: 'https://image.pollinations.ai/prompt/abstract%20social%20media%20network%20food%20restaurant%20orange?width=600&height=400&seed=22',
      category: 'Social Media',
      link: '/case-studies/social-engagement'
    }
  ];

  return (
    /* Main Background: Fog Gray #D3D3D3 */
    <section className="py-20 bg-[#D3D3D3] text-[#363636]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <div className="text-center mb-4 md:mb-5 animate-fadeIn">
              {/* Heading: Charcoal Gray #363636 | Accent: Stone Gray #536186 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#363636] mb-4 tracking-tight">
                Success <span className="text-[#536186]">Stories</span>
              </h1>
              {/* Subtext: Stone Gray #536186 for readability */}
              <p className="text-[#536186] text-sm md:text-lg font-medium max-w-2xl mx-auto">
                Real results from real businesses. See how we've helped our clients achieve their goals.
              </p>
            </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <MotionLink
              key={index}
              to={study.link}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              /* Card: White base for contrast against Fog Gray | Border: Silver #C0C0C0 */
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[#536186]/20 border border-[#C0C0C0] hover:border-[#536186] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  loading="lazy"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay: Charcoal Gray tint */}
                <div className="absolute inset-0 bg-[#363636]/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              
              <div className="p-6">
                {/* Category Badge: Stone Gray background */}
                <span className="inline-block px-3 py-1 bg-[#536186]/10 text-[#536186] text-sm font-bold rounded-full mb-3 uppercase tracking-wider">
                  {study.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-2 text-[#363636] group-hover:text-[#536186] transition-colors">
                  {study.title}
                </h3>
                <p className="text-[#536186] font-medium mb-4 opacity-80">{study.client}</p>
                
                {/* Results: Sharp contrast with Charcoal Gray */}
                <div className="flex items-center text-[#363636] font-bold mb-4">
                  <TrendingUp className="w-5 h-5 mr-2 flex-shrink-0 text-[#536186]" />
                  {study.results}
                </div>

                <div className="mt-6 inline-flex items-center text-[#536186] font-bold group-hover:translate-x-1 transition-transform">
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
          {/* Main Button: Charcoal Gray #363636 with Stone Gray hover */}
          <RouterLink
            to="/case-studies"
            className="inline-block px-10 py-4 bg-[#363636] text-[#D3D3D3] rounded-xl font-black text-lg hover:bg-[#536186] hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-tighter"
          >
            View All Case Studies
          </RouterLink>
        </motion.div>
      </div>
    </section>
  );
}

export default CaseStudies;