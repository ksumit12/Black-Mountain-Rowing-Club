import { motion } from 'framer-motion';
import { Mail, ExternalLink, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <h3 className="text-2xl font-bold text-red-500 mb-4 uppercase tracking-wide">
              Digital Boat Tracker
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Modernizing boat tracking systems for the Black Mountain Rowing Club 
              through innovative digital solutions and real-time monitoring capabilities.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Project
                </a>
              </li>
              <li>
                <a href="#project" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-white transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  Project Documentation
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  BMRC Website
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="http://172.20.10.12:5000/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group relative"
                  title="Device must be on the same network as the Raspberry Pi"
                >
                  System Demo
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@digitalboattracker.com" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  <Mail size={12} />
                  Contact Team
                </a>
              </li>
            </ul>
          </motion.div>

          {/* GitHub Repository */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Repository</h4>
            <div className="space-y-4">
              <a 
                href="https://github.com/ksumit12/ENGN8170_group_project" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Github size={20} />
                <div className="text-left">
                  <div className="text-sm font-medium">View on GitHub</div>
                  <div className="text-xs text-gray-300">Project Source Code</div>
                </div>
              </a>
              <p className="text-gray-300 text-sm">
                Access the complete source code, documentation, and project files for the Digital Boat Tracker system.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400">
              © {currentYear} Digital Boat Tracker. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 md:mt-0">
              Built for Black Mountain Rowing Club
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
