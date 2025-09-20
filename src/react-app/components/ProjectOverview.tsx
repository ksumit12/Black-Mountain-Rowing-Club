import { Target, Users, Calendar, Award } from 'lucide-react';

export default function ProjectOverview() {
  const stats = [
    {
      icon: Target,
      title: "Project Goals",
      description: "Developing an innovative solution to address modern challenges"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "5 dedicated team members working across multiple disciplines"
    },
    {
      icon: Calendar,
      title: "Timeline",
      description: "12-week development cycle with iterative milestones"
    },
    {
      icon: Award,
      title: "Expected Impact",
      description: "Potential to benefit thousands of users in our target community"
    }
  ];

  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our project represents a culmination of research, innovation, and collaborative effort 
            to create meaningful impact in our chosen field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Mission Statement
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              To leverage technology and collaborative innovation in creating sustainable solutions 
              that address real-world challenges while fostering learning and growth within our team. 
              Our project aims to bridge the gap between theoretical knowledge and practical application, 
              delivering measurable value to our target audience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white rounded-full text-blue-600 font-medium shadow-sm">
                Innovation
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-teal-600 font-medium shadow-sm">
                Collaboration
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-blue-600 font-medium shadow-sm">
                Impact
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-teal-600 font-medium shadow-sm">
                Excellence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
