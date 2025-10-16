import React from 'react';
import { motion } from 'framer-motion';

const SimulationResultsSection: React.FC = () => {
  const simulationResults = [
    {
      id: 't1',
      title: 'Beacon Behavior Analysis',
      description: 'Real-time tracking data captured from actual beacon devices, showing precise location patterns and signal strength variations during rowing sessions.',
      image: '/t1.jpeg',
      insights: [
        'Signal strength consistency across different weather conditions',
        'Location accuracy within 2-meter radius',
        'Battery life performance over extended sessions'
      ]
    },
    {
      id: 't2',
      title: 'Simulation Performance Metrics',
      description: 'Comprehensive performance analysis showing system response times, data processing efficiency, and tracking accuracy under various simulated conditions.',
      image: '/t2.jpeg',
      insights: [
        'Sub-second response time for location updates',
        '99.8% data transmission success rate',
        'Optimal performance in challenging water conditions'
      ]
    },
    {
      id: 't3',
      title: 'Real-World Validation Results',
      description: 'Field testing results demonstrating the system\'s effectiveness in actual rowing environments, including distance tracking and safety monitoring capabilities.',
      image: '/t3.jpeg',
      insights: [
        'Accurate distance measurement up to 5km range',
        'Reliable emergency alert system activation',
                'Seamless integration with existing rowing club infrastructure'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Simulation Results & Real-World Validation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our beacon tracking system has been rigorously tested using real data captured from actual devices. 
            These results demonstrate the system's reliability and performance in authentic rowing environments.
          </p>
        </motion.div>

        <div className="space-y-16">
          {simulationResults.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-slate-50 rounded-lg p-8 border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {result.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {result.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Key Insights:</h4>
                    <ul className="space-y-2">
                      {result.insights.map((insight, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-slate-600">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-slate-50 rounded-lg shadow-lg p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">99.8%</div>
            <div className="text-slate-600">Data Transmission Success Rate</div>
          </div>
          <div className="text-center bg-slate-50 rounded-lg shadow-lg p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">&lt;1s</div>
            <div className="text-slate-600">Average Response Time</div>
          </div>
          <div className="text-center bg-slate-50 rounded-lg shadow-lg p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">2m</div>
            <div className="text-slate-600">Location Accuracy Radius</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready for Real-World Implementation
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Our simulation results confirm the system's readiness for deployment at the Black Mountain Rowing Club.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Field Tested
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Performance Validated
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                Ready for Deployment
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimulationResultsSection;
