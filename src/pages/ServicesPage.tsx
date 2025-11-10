import { motion } from 'framer-motion';
import { Target, TrendingUp, Megaphone, BarChart3, Mail, Share2 } from 'lucide-react';
import SEO from '../components/SEO';

function ServicesPage() {
  const services = [
    {
      icon: Target,
      title: 'Strategy & Planning',
      description: 'Comprehensive marketing strategies tailored to your business goals and target audience.',
      features: ['Market Analysis', 'Competitor Research', 'Goal Setting', 'KPI Definition']
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic with proven SEO techniques.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO']
    },
    {
      icon: Megaphone,
      title: 'Content Marketing',
      description: 'Create compelling content that engages your audience and builds brand authority.',
      features: ['Content Strategy', 'Blog Writing', 'Video Production', 'Copywriting']
    },
    {
      icon: BarChart3,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted paid advertising campaigns across multiple platforms.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Management', 'A/B Testing']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Build and nurture customer relationships through strategic email campaigns.',
      features: ['Campaign Design', 'List Management', 'Automation', 'Analytics']
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Grow your brand presence and engagement across all major social platforms.',
      features: ['Content Creation', 'Community Management', 'Paid Social', 'Influencer Marketing']
    }
  ];

  return (
    <>
      <SEO
        title="Our Services - Digital Marketing Solutions"
        description="Comprehensive digital marketing services including SEO, PPC, content marketing, social media, and more."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive digital marketing solutions to grow your business
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServicesPage;
