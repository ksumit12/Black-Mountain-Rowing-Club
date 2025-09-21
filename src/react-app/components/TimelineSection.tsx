import React from 'react';
import { motion } from 'framer-motion';

const TimelineSection: React.FC = () => {
  const timelineData = [
    {
      week: 1,
      title: "Project Kick-off & Planning",
      description: "Team formation, project brief review, brainstorming initial concepts, and defining objectives and scope.",
      deliverables: ["ConOps V1.0 draft", "Individual responsibilities outline"],
      status: "completed"
    },
    {
      week: 2,
      title: "Technology Research & Requirement Analysis",
      description: "Research RFID modules, microcontrollers, and communication methods. Document functional and non-functional requirements.",
      deliverables: ["Requirements document", "System block diagram draft"],
      status: "completed"
    },
    {
      week: 3,
      title: "ConOps Finalization, PMP & Audit 1",
      description: "Finalize Concept of Operations, complete Project Management Plan, and deliver Audit 1 presentation.",
      deliverables: ["ConOps V1.0", "PMP", "Audit 1 presentation"],
      status: "completed"
    },
    {
      week: 4,
      title: "System Design & Technology Comparison",
      description: "Refine system design, compare viable technologies, and develop system engineering framework.",
      deliverables: ["System design documentation", "Technology comparison", "System engineering framework"],
      status: "completed"
    },
    {
      week: 5,
      title: "System Architecture & Hardware Selection",
      description: "Finalize system design, select hardware components (RFID, microcontrollers, power), and plan interfaces.",
      deliverables: ["System architecture document", "Hardware specification list", "Interface planning"],
      status: "completed"
    },
    {
      week: 6,
      title: "Procurement, Backend Development & Audit 2",
      description: "Procure hardware parts, develop backend server infrastructure, create database, and conduct Audit 2.",
      deliverables: ["Hardware procurement", "Backend system", "Database setup", "Audit 2 presentation"],
      status: "completed"
    },
    {
      week: 7,
      title: "Backend Development Extension & Documentation",
      description: "Continue backend and UI development, refine database structure, and begin documentation preparation.",
      deliverables: ["Enhanced backend system", "Updated frontend", "Documentation drafts", "User manual V1"],
      status: "completed"
    },
    {
      week: 8,
      title: "System Integration & Internal Testing Plan",
      description: "Prepare integration plan, describe hardware-software interfaces, and develop testing strategies.",
      deliverables: ["Integration strategy", "Testing plan", "Simulation strategies"],
      status: "completed"
    },
    {
      week: 9,
      title: "Simulation Setup & Initial Testing",
      description: "Develop simulation environment, design test scenarios, and conduct initial performance validation.",
      deliverables: ["Simulation setup", "Test case design", "Preliminary results"],
      status: "completed"
    },
    {
      week: 10,
      title: "Simulation Execution & Performance Analysis",
      description: "Execute full simulation testing, analyze performance, and document findings and improvements.",
      deliverables: ["Simulation results report", "Performance analysis", "System optimizations"],
      status: "completed"
    },
    {
      week: 11,
      title: "Showcase Preparation & Poster Development",
      description: "Create professional project poster, prepare for showcase event, and finalize documentation.",
      deliverables: ["Showcase poster", "Final documentation", "Presentation preparation"],
      status: "completed"
    },
    {
      week: 12,
      title: "Showcase Poster Submission",
      description: "Submit finalized showcase poster and prepare for the official Showcase Event.",
      deliverables: ["Finalized poster submission", "Showcase event preparation"],
      status: "completed"
    },
    {
      week: 13,
      title: "Draft Handover Submission & Audit 3",
      description: "Compile comprehensive handover document and deliver Audit 3 presentation to stakeholders.",
      deliverables: ["Draft handover document", "Audit 3 presentation"],
      status: "completed"
    },
    {
      week: 14,
      title: "Final Showcase Event and Project Submission",
      description: "Participate in official Showcase Event and submit complete project repository and documentation.",
      deliverables: ["Showcase event participation", "Final project submission", "Complete documentation"],
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-500';
      case 'upcoming':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'upcoming':
        return 'Upcoming';
      default:
        return 'Planned';
    }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Project Timeline
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive 14-week development journey from concept to completion, 
            showcasing our systematic approach to building the Digital Boat Tracker.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>
          
          <div className="space-y-12">
            {timelineData.map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-slate-300 rounded-full shadow-lg">
                  <span className="text-lg font-bold text-slate-700">
                    {phase.week}
                  </span>
                </div>

                {/* Content card */}
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-500">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900">
                        Week {phase.week}: {phase.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(phase.status)}`}>
                        {getStatusText(phase.status)}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {phase.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Key Deliverables:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-slate-600 text-sm">
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">14</div>
            <div className="text-slate-600">Weeks Duration</div>
          </div>
          <div className="text-center bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">3</div>
            <div className="text-slate-600">Audit Milestones</div>
          </div>
          <div className="text-center bg-white rounded-lg shadow-lg p-6">
            <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
            <div className="text-slate-600">Project Completion</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
