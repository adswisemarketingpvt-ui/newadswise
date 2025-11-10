import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SEO from '../components/SEO';

function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '999',
      description: 'Perfect for small businesses getting started',
      features: [
        'Social Media Management',
        'Basic SEO Optimization',
        'Monthly Reports',
        'Email Support',
        '2 Campaigns per Month',
        'Content Calendar'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: '2,499',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced SEO Strategy',
        'PPC Campaign Management',
        'Weekly Reports',
        'Priority Support',
        '5 Campaigns per Month',
        'A/B Testing',
        'Conversion Optimization'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: [
        'Everything in Professional',
        'Dedicated Account Manager',
        'Custom Strategy Development',
        'Unlimited Campaigns',
        '24/7 Support',
        'Advanced Analytics',
        'Multi-Channel Attribution',
        'Custom Integrations'
      ],
      highlighted: false
    }
  ];

  return (
    <>
      <SEO
        title="Pricing - Marketing Solutions for Every Budget"
        description="Transparent pricing for our digital marketing services. Choose the plan that fits your business needs."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`rounded-2xl p-8 ${
                    plan.highlighted
                      ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-2xl scale-105 md:scale-110'
                      : 'bg-white shadow-lg'
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
                    {plan.price !== 'Custom' && <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>/month</span>}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-blue-600'}`} />
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
          </div>
        </section>
      </div>
    </>
  );
}

export default PricingPage;
