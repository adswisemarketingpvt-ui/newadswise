import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '999',
      description: 'Perfect for small businesses',
      features: [
        'Social Media Management',
        'Basic SEO',
        'Monthly Reports',
        'Email Support'
      ]
    },
    {
      name: 'Professional',
      price: '2,499',
      description: 'For growing businesses',
      features: [
        'Everything in Starter',
        'Advanced SEO',
        'PPC Campaigns',
        'Weekly Reports',
        'Priority Support'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Dedicated Manager',
        'Custom Strategy',
        'Unlimited Campaigns',
        '24/7 Support'
      ]
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl scale-105'
                  : 'bg-white shadow-lg border border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-5xl font-bold">
                  {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                </span>
                {plan.price !== 'Custom' && (
                  <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>/month</span>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.highlighted ? 'text-white' : 'text-blue-600'}`} />
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
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
            to="/pricing"
            className="inline-block text-blue-600 font-semibold hover:text-blue-700 text-lg"
          >
            View Detailed Pricing →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
