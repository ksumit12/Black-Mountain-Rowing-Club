import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Smartphone, Shield, Clock, Users, Database } from 'lucide-react';

export default function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Monitor,
      title: "Automatic Detection",
      description: "Automatically detect boat location and classify as in-shed or on-water with real-time updates within 5 seconds"
    },
    {
      icon: Clock,
      title: "Real-time Status",
      description: "Provide real-time operational status of each boat with updates visible within 5 seconds of state change"
    },
    {
      icon: Shield,
      title: "System Resilience",
      description: "Implement fail-safe modes to maintain core functionality during network or power interruptions"
    },
    {
      icon: Database,
      title: "Usage Logging",
      description: "Log boat usage data with entry/exit times and duration, accurate to within one second"
    },
    {
      icon: Users,
      title: "Lock-up Notifications",
      description: "Notify designated lock-up role if boats are outside shed at configured closing time"
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Accessible from mobile and desktop platforms supporting recent browser versions"
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
            System Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our digital boat tracking system delivers core functionalities based on prioritized requirements,
            ensuring reliable detection, real-time monitoring, and comprehensive data management.
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
                Functional Flow Block Diagram
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  The Digital Boat Tracker system boundary includes all internal functions responsible for 
                  detecting boats, confirming usage, managing data and power, generating and buffering logs, 
                  storing data, and producing 24-hour reports.
                </p>
                <p>
                  <strong>Core Internal Functions:</strong> Detection, confirmation, power management, 
                  data logging, status checking, and report generation represent the system under our team's control.
                </p>
                <p>
                  <strong>External Interfaces:</strong> The boat (tracked entity), users (system consumers), 
                  and Wi-Fi/Internet connections interface with the system but remain external to our control boundary.
                </p>
                <p>
                  <strong>Data Flow:</strong> BLE beacon signals and sensor data flow into the system, 
                  while usage logs, database entries, and daily reports flow outward to users.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/ffbd.jpg"
                alt="Functional Flow Block Diagram - Digital Boat Tracker System Functions"
                className="w-full h-[300px] lg:h-[400px] object-cover scale-105 rounded-lg shadow-lg border border-gray-200"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
