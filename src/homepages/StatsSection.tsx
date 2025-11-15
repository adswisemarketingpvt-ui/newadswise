import React, { useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

// --- Helper Component: Animated Counter ---
const Counter = ({
  value,
  direction = "up",
}: {
  value: number;
  direction?: "up" | "down";
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [isInView, motionValue, direction, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

// --- Helper Component: Typewriter Effect ---
const TypewriterText = ({ text }: { text: string }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter}
        </motion.span>
      ))}
      {/* Blinking Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 text-orange-500"
      >
        |
      </motion.span>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-medium text-gray-200 mb-2">
              Your Brand Deserves More
            </h3>
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 h-20 md:h-24 pb-3 flex ">
              <TypewriterText text="Recognition" />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed text-lg text-justify"
          >
            At <strong className="text-white">Adswise Marketing</strong>, we
            believe your brand deserves more than just visibility — it deserves
            real, measurable growth. We combine creativity, strategic thinking,
            and modern technology to build campaigns that truly connect with the
            right audience. Every solution we create is powered by data-driven
            insights, innovative ideas, and a deep understanding of how people
            behave online. From boosting engagement to increasing brand
            recognition, we ensure your business stands out in today’s
            competitive digital world.
            <br />
            With <strong className="text-white">Adswise Marketing as your partner, success isn’t just a target
            — it becomes a predictable, consistent result.</strong>
          </motion.p>
        </div>

        {/* RIGHT COLUMN: Statistics Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {/* Stat 1 */}
          <div className="flex flex-col">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 flex items-baseline">
              <Counter value={3} />
              <span>+</span>
            </div>
            <p className="text-orange-500 text-lg md:text-xl font-medium">
              Years of Experience
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 flex items-baseline">
              <Counter value={700} />
              <span>+</span>
            </div>
            <p className="text-orange-500 text-lg md:text-xl font-medium">
              Successful Projects
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 flex items-baseline">
              <Counter value={450} />
              <span>+</span>
            </div>
            <p className="text-orange-500 text-lg md:text-xl font-medium">
              Brands Transformed
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 flex items-baseline">
              <Counter value={1010} />
              <span>+</span>
            </div>
            <p className="text-orange-500 text-lg md:text-xl font-medium">
              Campaigns Launched
            </p>
          </div>
        </div>
      </div>

      {/* Optional: Simple arrow at bottom right like the image */}
      <div className="flex justify-end w-full max-w-7xl mx-auto mt-8">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
