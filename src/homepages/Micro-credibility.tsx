import React from "react";
import { motion } from "framer-motion";

const MicroCredibility = () => {
  const stats = [
    { label: "Projects delivered", value: "150+" },
    { label: "Industries served", value: "12+" },
    { label: "Campaigns launched", value: "500+" },
  ];

  return (
    <section className="bg-[#D3D3D3] py-10 px-6 md:px-12 border-t border-[#708238]/20">
      <div className="max-auto max-w-7xl">
        {/* Sub-heading / Context */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#536186] font-medium tracking-[0.2em] uppercase text-sm mb-4 text-center mx-auto"
        >
          Proven Expertise
        </motion.p>

        {/* Main Heading with Custom Leading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#363636] leading-[1.05] tracking-tight mb-12 max-w-4xl text-center mx-auto"
        >
          HELPING B2B COMPANIES WIN IN COMPETITIVE MARKETS FOR{" "}
          <span className="text-[#536186]">10 YEARS</span>
        </motion.h2>

        {/* Stats Grid */}
        <div className="relative mt-16 rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image for Stats Grid */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <img
              src="https://i.pinimg.com/1200x/9d/ae/66/9dae6645a7acf4092d2a2c2cda19e269.jpg"
              alt="Stats Background"
              className="w-full h-full object-cover"
            />
            {/* Overlay to assure text readability */}
            <div className="absolute inset-0 bg-[#536186]/80 backdrop-blur-[2px]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 lg:p-12 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md group hover:bg-white/20 transition-all cursor-default text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[#D3D3D3] text-sm md:text-base uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroCredibility;
