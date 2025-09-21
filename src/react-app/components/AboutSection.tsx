import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-br from-slate-100 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-red-600 font-semibold uppercase tracking-wide text-sm">
                ABOUT // MISSION
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Digital Boat Tracker is a modern solution for
              <span className="text-teal-600"> boat management, safety monitoring and efficient operations.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button className="text-red-600 font-semibold uppercase tracking-wide text-sm hover:text-red-700 transition-colors flex items-center gap-2">
                Learn More About The Project
                <span>→</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/IMG_3712.jpg"
                alt="Digital tracking dashboard and boat management system"
                className="w-full h-[400px] lg:h-[500px] object-contain bg-gray-50"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
