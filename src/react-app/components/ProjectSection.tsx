import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Smartphone, Shield, Clock, Users, Database } from 'lucide-react';

export default function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Monitor,
      title: "Digital Dashboard",
      description: "Real-time tracking interface replacing manual whiteboard systems"
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Track boats from anywhere with responsive mobile design"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Enhanced safety monitoring and alert systems for all vessels"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Instant status updates and tracking information"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user roles and permission systems"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Historical data and usage analytics for better decision making"
    }
  ];

  return (
    <section id="project" ref={ref} className="py-20 bg-gradient-to-br from-red-50 to-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-semibold uppercase tracking-wide text-sm mb-4 block">
            THE PROJECT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our digital boat tracking system modernizes the traditional whiteboard approach
            with real-time updates, safety features, and comprehensive analytics.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-red-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 text-teal-700 mb-4 rounded-lg">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/90 backdrop-blur-sm p-8 md:p-12 border border-red-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                Project Description
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  The Digital Boat Tracker project addresses the inefficiencies of manual 
                  boat tracking systems used by rowing clubs. Our solution replaces the 
                  traditional whiteboard approach with a modern, digital platform.
                </p>
                <p>
                  The system provides real-time tracking of boat locations, user assignments, 
                  and safety status. It includes features for member management, booking 
                  systems, and comprehensive reporting tools.
                </p>
                <p>
                  Developed using modern web technologies, the platform ensures reliability, 
                  scalability, and ease of use for rowing club administrators and members.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://mocha-cdn.com/0199672f-8c34-7bd3-8d98-c2a941454b67/IMG_3712.jpg"
                alt="Digital tracking dashboard"
                className="w-full h-[300px] lg:h-[400px] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
