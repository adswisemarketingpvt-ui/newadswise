
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-[#D3D3D3] py-16 md:py-24 overflow-hidden">
      <div className="px-6 md:px-12 mb-12 md:mb-16 max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#536186] font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 mx-auto text-center"
        >
          Wall of Love
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-black leading-[1.05] tracking-tight max-w-4xl mx-auto text-center"
        >
          Hear directly from the <span className="text-[#536186]">B2B brands </span><br /> 
  we’ve helped grow.
        </motion.h2>
      </div>

      {/* SociableKit Google Reviews Widget */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 min-h-[400px]">
        <div className="sk-ww-google-reviews" data-embed-id="25663233"></div>
      </div>

      <div className="mt-12 md:mt-16 text-center px-6">
        <p className="text-black/60 font-medium italic text-sm md:text-base">
          Join 100+ businesses scaling with Adswise Marketing Agency.
        </p>
      </div>
    </section>
  );
};

export default Reviews;