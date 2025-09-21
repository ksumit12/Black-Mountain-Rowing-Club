import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-slate-700/95 backdrop-blur-sm border-b border-slate-600 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/logo.jpg"
              alt="Digital Boat Tracker Logo"
              className="h-8 w-8 mr-3"
            />
            <h1 className="text-2xl font-bold text-red-500">
              DIGITAL BOAT TRACKER
            </h1>
            <span className="ml-4 text-sm text-red-400 hidden md:block">
              BLACK MOUNTAIN ROWING CLUB
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-200 hover:text-red-400 transition-colors font-medium uppercase text-sm tracking-wide"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('project')}
                className="text-slate-200 hover:text-red-400 transition-colors font-medium uppercase text-sm tracking-wide"
              >
                The Project
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-slate-200 hover:text-red-400 transition-colors font-medium uppercase text-sm tracking-wide"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium uppercase text-sm tracking-wide"
              >
                Location
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-200 hover:text-red-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-600 border-t border-slate-500"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-slate-200 hover:text-red-400 transition-colors font-medium uppercase text-sm tracking-wide"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('project')}
                className="block w-full text-left px-3 py-2 text-slate-200 hover:text-red-400 transition-colors font-medium uppercase text-sm tracking-wide"
              >
                The Project
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium uppercase text-sm tracking-wide"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium uppercase text-sm tracking-wide"
              >
                Location
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
