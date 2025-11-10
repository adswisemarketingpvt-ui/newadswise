import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Zap, BarChart, Shield } from 'lucide-react';

function Features() {
  const features = [
    {
      icon: Target,
      title: 'Targeted Strategies',
      description: 'Precise campaigns tailored to your audience and business goals.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Proven methodologies that drive sustainable business growth.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success.'
    },
    {
      icon: Zap,
      title: 'Fast Results',
      description: 'See measurable improvements in weeks, not months.'
    },
    {
      icon: BarChart,
      title: 'Data-Driven',
      description: 'Decisions backed by comprehensive analytics and insights.'
    },
    {
      icon: Shield,
      title: 'Transparent Reporting',
      description: 'Clear, honest communication about campaign performance.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine creativity, technology, and data to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 group-hover:bg-white rounded-lg flex items-center justify-center mb-6 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-white group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-blue-50 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
