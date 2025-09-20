import { Code, Database, Globe, Smartphone, Shield, Zap } from 'lucide-react';

export default function ProjectDetails() {
  const features = [
    {
      icon: Code,
      title: "Modern Architecture",
      description: "Built with cutting-edge technologies and best practices for scalability and maintainability."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Robust data handling with secure storage and efficient retrieval mechanisms."
    },
    {
      icon: Globe,
      title: "Web Platform",
      description: "Cross-platform compatibility ensuring accessibility across all devices and browsers."
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Optimized user experience on mobile devices with touch-friendly interfaces."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Implementation of industry-standard security measures to protect user data."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized for speed with efficient algorithms and minimal resource usage."
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", 
    "Docker", "AWS", "Git", "Jest", "Figma"
  ];

  return (
    <section id="details" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into the technical aspects, features, and implementation details 
            that make our project unique and effective.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Project Description */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Project Description
          </h3>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Our project addresses the growing need for digital solutions that combine 
              functionality with exceptional user experience. Through extensive research 
              and iterative development, we've created a platform that not only meets 
              current market demands but anticipates future requirements.
            </p>
            <p>
              The development process involved comprehensive user research, prototyping, 
              and testing phases. We employed agile methodologies to ensure continuous 
              improvement and stakeholder feedback integration throughout the development cycle.
            </p>
            <p>
              Key challenges overcome during development include scalability optimization, 
              cross-platform compatibility, and implementing advanced security measures 
              while maintaining intuitive user interactions.
            </p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Technologies Used
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
