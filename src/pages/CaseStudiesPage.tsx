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

  return (
    <>
      <SEO
        title="Case Studies - Proven Marketing Success Stories"
        description="Explore our successful digital marketing campaigns and the results we've achieved for our clients across various industries."
      />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Real results from real clients. See how we've helped businesses grow.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <img
                      src={study.image}
                      alt={study.title}
                      loading="lazy"
                      className="rounded-xl shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                      {study.industry}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{study.title}</h2>
                    <p className="text-lg text-gray-600 mb-4">
                      <span className="font-semibold">Client:</span> {study.client}
                    </p>
                    <div className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Challenge:</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Solution:</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-white rounded-lg p-4 shadow-md">
                          <div className="flex items-center justify-center mb-2">
                            <TrendingUp className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900 text-center">{result.metric}</div>
                          <div className="text-sm text-gray-600 text-center mt-1">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
                      Read Full Case Study
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
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
