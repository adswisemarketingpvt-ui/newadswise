import { motion } from 'framer-motion';
import { Search, PenTool, Share2, Mail, BarChart3, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your organic rankings and drive qualified traffic to your website.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Engaging content that builds authority and converts visitors into customers.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Build a strong presence and engage your audience across all platforms.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Campaigns',
      description: 'Personalized email strategies that nurture leads and drive conversions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Make informed decisions with comprehensive data analysis and reporting.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Megaphone,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted paid campaigns across multiple platforms.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to grow your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center group-hover:translate-x-2 transition-transform duration-300">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
