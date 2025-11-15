import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'E-commerce Growth Strategy',
      client: 'Fashion Retailer',
      industry: 'Retail',
      challenge: 'Low conversion rates and declining sales',
      solution: 'Implemented comprehensive SEO strategy, optimized product pages, and launched targeted PPC campaigns',
      results: [
        { metric: '250%', label: 'Increase in organic traffic' },
        { metric: '180%', label: 'Revenue growth' },
        { metric: '3.2x', label: 'ROAS improvement' }
      ],
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'SaaS Lead Generation',
      client: 'B2B Software Company',
      industry: 'Technology',
      challenge: 'High customer acquisition costs and low lead quality',
      solution: 'Developed content marketing strategy, implemented marketing automation, and optimized conversion funnels',
      results: [
        { metric: '400%', label: 'Increase in qualified leads' },
        { metric: '45%', label: 'Reduction in CAC' },
        { metric: '65%', label: 'Improvement in lead quality' }
      ],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Restaurant Chain Expansion',
      client: 'Multi-Location Restaurant',
      industry: 'Food & Beverage',
      challenge: 'Low brand awareness in new markets',
      solution: 'Executed local SEO strategy, social media campaigns, and influencer partnerships',
      results: [
        { metric: '320%', label: 'Growth in social engagement' },
        { metric: '150%', label: 'Increase in foot traffic' },
        { metric: '90%', label: 'Improvement in brand recall' }
      ],
      image: 'https://images.pexels.com/photos/3184193/pexels-photo-3184193.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Healthcare Practice Growth',
      client: 'Medical Clinic',
      industry: 'Healthcare',
      challenge: 'Limited online presence and patient inquiries',
      solution: 'Built responsive website, implemented local SEO, and launched patient education content',
      results: [
        { metric: '280%', label: 'Increase in website traffic' },
        { metric: '200%', label: 'Growth in new patients' },
        { metric: '4.8/5', label: 'Average online rating' }
      ],
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Financial Services Rebrand',
      client: 'Investment Firm',
      industry: 'Finance',
      challenge: 'Outdated brand image and low client engagement',
      solution: 'Complete brand refresh, content strategy, and thought leadership campaign',
      results: [
        { metric: '360%', label: 'Increase in content engagement' },
        { metric: '175%', label: 'Growth in new clients' },
        { metric: '85%', label: 'Client retention improvement' }
      ],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Real Estate Digital Transformation',
      client: 'Property Developer',
      industry: 'Real Estate',
      challenge: 'Slow property sales and limited online visibility',
      solution: 'Virtual tours, targeted advertising, and lead nurturing automation',
      results: [
        { metric: '220%', label: 'Increase in qualified leads' },
        { metric: '45%', label: 'Faster sales cycle' },
        { metric: '95%', label: 'Customer satisfaction' }
      ],
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  // Animation variants for the hero section
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <>
      <SEO
        title="Case Studies - Proven Marketing Success Stories"
        description="Explore our successful digital marketing campaigns and the results we've achieved for our clients across various industries."
      />
      {/* Main container with black background and light text */}
      <div className="pt-20 bg-black text-gray-200">
        
        {/* Hero Section */}
        {/* <section className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.h1 
                variants={heroItemVariants}
                className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              >
                Case Studies
              </motion.h1>
              <motion.p 
                variants={heroItemVariants}
                className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
              >
                Real results from real clients. See how we've helped businesses grow.
              </motion.p>
            </motion.div>
          </div>
        </section> */}

        {/* Case Studies List Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
                  className={`grid md:grid-cols-2 gap-12 items-center bg-slate-900 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden border border-slate-700 group ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={study.image}
                      alt={study.title}
                      loading="lazy"
                      className="rounded-lg md:rounded-l-none md:rounded-r-lg w-full h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="inline-block px-4 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4">
                      {study.industry}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{study.title}</h2>
                    <p className="text-lg text-gray-400 mb-4">
                      <span className="font-semibold text-gray-300">Client:</span> {study.client}
                    </p>
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-200 mb-2">Challenge:</h3>
                      <p className="text-gray-400">{study.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-200 mb-2">Solution:</h3>
                      <p className="text-gray-400">{study.solution}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {study.results.map((result, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.1, y: -5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                          className="bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-700"
                        >
                          <div className="flex items-center justify-center mb-2">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                          </div>
                          <div className="text-2xl font-bold text-white text-center">{result.metric}</div>
                          <div className="text-sm text-gray-400 text-center mt-1">{result.label}</div>
                        </motion.div>
                      ))}
                    </div>
                    {/* <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group/link">
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </a> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CaseStudiesPage;