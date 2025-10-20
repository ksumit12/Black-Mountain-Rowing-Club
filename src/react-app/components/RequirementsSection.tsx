import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Code, Database, Shield, Clock, Smartphone, FileText, DollarSign } from 'lucide-react';

export default function RequirementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const requirements = [
    {
      id: 1,
      title: "Automatic Location Detection",
      description: "BLE beacon scanning with IN_SHED/OUT_SHED events",
      implementation: "ble_scanner.py, api_server.py",
      icon: CheckCircle,
      category: "Core Detection"
    },
    {
      id: 2,
      title: "Real-time Status Display", 
      description: "Dashboard updates every 1 second",
      implementation: "boat_tracking_system.py",
      icon: Clock,
      category: "Real-time"
    },
    {
      id: 3,
      title: "Boat Usage Logging",
      description: "Entry/exit times and duration logging",
      implementation: "database_models.py",
      icon: Database,
      category: "Data Management"
    },
    {
      id: 4,
      title: "Lock-up Notifications",
      description: "Overdue banner alerts on dashboard",
      implementation: "boat_tracking_system.py",
      icon: Shield,
      category: "Safety"
    },
    {
      id: 5,
      title: "Profile Management",
      description: "3-click beacon registration process",
      implementation: "boat_tracking_system.py",
      icon: Smartphone,
      category: "User Experience"
    },
    {
      id: 6,
      title: "Network Resilience",
      description: "Local SQLite database, works offline",
      implementation: "database_models.py",
      icon: Shield,
      category: "Reliability"
    },
    {
      id: 7,
      title: "Multiple Boat Profiles",
      description: "Create/update/deactivate boats via API",
      implementation: "api_server.py",
      icon: Database,
      category: "Management"
    },
    {
      id: 8,
      title: "Secure Data Storage",
      description: "HTTPS + database encryption",
      implementation: "enable_security.sh",
      icon: Shield,
      category: "Security"
    },
    {
      id: 9,
      title: "Data Retention",
      description: "90+ days storage, no auto-deletion",
      implementation: "shed_events table",
      icon: Database,
      category: "Compliance"
    },
    {
      id: 10,
      title: "User Documentation",
      description: "README, setup guides, calibration docs",
      implementation: "README.md, docs/",
      icon: FileText,
      category: "Documentation"
    },
    {
      id: 11,
      title: "Cost-effective Design",
      description: "RPi + BLE beacons = ~$150 total",
      implementation: "Hardware specification",
      icon: DollarSign,
      category: "Economics"
    },
    {
      id: 12,
      title: "Historical Analytics",
      description: "Reports with date filters & CSV export",
      implementation: "boat_tracking_system.py",
      icon: FileText,
      category: "Reporting"
    },
    {
      id: 13,
      title: "Multi-platform Access",
      description: "Responsive web design (mobile + desktop)",
      implementation: "CSS responsive design",
      icon: Smartphone,
      category: "Accessibility"
    },
    {
      id: 14,
      title: "Privacy Protection",
      description: "No personal data, only boat/beacon IDs",
      implementation: "Database schema design",
      icon: Shield,
      category: "Privacy"
    },
    {
      id: 15,
      title: "No System Interference",
      description: "Standard BLE, no system modifications",
      implementation: "ble_scanner.py",
      icon: CheckCircle,
      category: "Compatibility"
    }
  ];

  const categories = [
    { name: "Core Detection", count: 1, color: "bg-red-100 text-red-700" },
    { name: "Real-time", count: 1, color: "bg-blue-100 text-blue-700" },
    { name: "Data Management", count: 2, color: "bg-green-100 text-green-700" },
    { name: "Safety", count: 1, color: "bg-yellow-100 text-yellow-700" },
    { name: "User Experience", count: 1, color: "bg-purple-100 text-purple-700" },
    { name: "Reliability", count: 1, color: "bg-orange-100 text-orange-700" },
    { name: "Management", count: 1, color: "bg-teal-100 text-teal-700" },
    { name: "Security", count: 2, color: "bg-indigo-100 text-indigo-700" },
    { name: "Compliance", count: 1, color: "bg-pink-100 text-pink-700" },
    { name: "Documentation", count: 1, color: "bg-gray-100 text-gray-700" },
    { name: "Economics", count: 1, color: "bg-emerald-100 text-emerald-700" },
    { name: "Reporting", count: 1, color: "bg-cyan-100 text-cyan-700" },
    { name: "Accessibility", count: 1, color: "bg-violet-100 text-violet-700" },
    { name: "Privacy", count: 1, color: "bg-rose-100 text-rose-700" },
    { name: "Compatibility", count: 1, color: "bg-amber-100 text-amber-700" }
  ];

  return (
    <section id="requirements" ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm mb-4 block">
            REQUIREMENTS IMPLEMENTATION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            System Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our Digital Boat Tracker system implements all 15 software requirements with 100% compliance.
            Hardware requirements (IP65+ weather resistance, rodent resistance) are procurement specifications.
          </p>
          
          {/* Score Badge */}
          <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 rounded-full text-lg font-semibold">
            <CheckCircle className="w-6 h-6" />
            Software Requirements: 15/15 = 100% ✅
          </div>
        </motion.div>

        {/* Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Requirements by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} px-4 py-3 rounded-lg text-center font-medium`}
              >
                <div className="text-sm font-semibold">{category.name}</div>
                <div className="text-xs opacity-75">{category.count} requirement{category.count !== 1 ? 's' : ''}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirements.map((req, index) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 text-green-700 rounded-lg flex-shrink-0">
                  <req.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-gray-500">R{req.id}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {req.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {req.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {req.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Code className="w-3 h-3" />
                    <span className="font-mono">{req.implementation}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Scripts Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white/90 backdrop-blur-sm p-8 border border-gray-200 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Implementation Scripts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">ble_scanner.py</h4>
              <p className="text-sm text-gray-600">Scans for BLE beacons, posts detections</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 text-green-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Database className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">api_server.py</h4>
              <p className="text-sm text-gray-600">Processes detections, logs events, manages API</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 text-purple-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">boat_tracking_system.py</h4>
              <p className="text-sm text-gray-600">Web dashboard, reports, admin functions</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 text-orange-700 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">enable_security.sh</h4>
              <p className="text-sm text-gray-600">Enables HTTPS + encryption</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
