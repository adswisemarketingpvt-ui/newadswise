import { motion } from 'framer-motion';
import { Search, PenTool, Share2, Mail, BarChart3, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your organic rankings and drive qualified traffic to your website.',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://image.pollinations.ai/prompt/abstract%20seo%20search%20engine%20optimization%20blue%20tech%20background?width=600&height=400&seed=1'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Engaging content that builds authority and converts visitors into customers.',
      color: 'from-purple-500 to-pink-500',
      image: 'https://image.pollinations.ai/prompt/abstract%20content%20creation%20writing%20art%20purple%20gradient?width=600&height=400&seed=2'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Build a strong presence and engage your audience across all platforms.',
      color: 'from-green-500 to-emerald-500',
      image: 'https://image.pollinations.ai/prompt/abstract%20social%20media%20network%20connection%20green%20digital?width=600&height=400&seed=3'
    },
    {
      icon: Mail,
      title: 'Email Campaigns',
      description: 'Personalized email strategies that nurture leads and drive conversions.',
      color: 'from-orange-500 to-red-500',
      image: 'https://image.pollinations.ai/prompt/abstract%20email%20marketing%20envelope%20orange%20communication?width=600&height=400&seed=4'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Make informed decisions with comprehensive data analysis and reporting.',
      color: 'from-indigo-500 to-blue-500',
      image: 'https://image.pollinations.ai/prompt/abstract%20data%20analytics%20charts%20insights%20indigo%20tech?width=600&height=400&seed=5'
    },
    {
      icon: Megaphone,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted paid campaigns across multiple platforms.',
      color: 'from-yellow-500 to-orange-500',
      image: 'https://image.pollinations.ai/prompt/abstract%20ppc%20advertising%20megaphone%20marketing%20yellow%20digital?width=600&height=400&seed=6'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Our Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovate, strategize, and execute with our comprehensive suite of digital marketing services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700"
            >
              {/* AI Image Background */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              <div className="relative z-10 p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 group-hover:text-blue-100 transition-colors duration-300">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.title.toLowerCase().replace(/\s/g, '-')}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;