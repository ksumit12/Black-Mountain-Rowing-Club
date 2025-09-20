import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://mocha-cdn.com/0199672f-8c34-7bd3-8d98-c2a941454b67/IMG_8595.JPG)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-800/80"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-white">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight uppercase tracking-wide"
          >
            DIGITAL BOAT
            <br />
            <span className="text-red-500">TRACKER</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Revolutionizing boat management for the Black Mountain Rowing Club
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-slate-200 max-w-2xl mx-auto mb-12"
          >
            Replacing manual whiteboard tracking with modern digital solutions
          </motion.p>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide rounded-lg shadow-lg"
        >
          Discover More
          <ArrowDown size={20} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
