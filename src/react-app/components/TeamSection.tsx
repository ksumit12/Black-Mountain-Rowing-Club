import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail } from 'lucide-react';

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teamMembers = [
    {
      name: "Yuge Huang",
      role: "UI/UX & Visual Communication",
      email: "yuge.huang@anu.edu.au",
      image: "https://mocha-cdn.com/0199672f-8c34-7bd3-8d98-c2a941454b67/image.png_7064.png",
      description: "Driven electrical engineering student, passionate about designing reliable monitoring systems. Skilled in technical analysis, Power system design, data-driven decision-making, and effective teamwork."
    },
    {
      name: "Aryan Arora",
      role: "Hardware Development Lead",
      email: "aryan.arora@anu.edu.au", 
      image: "https://mocha-cdn.com/0199672f-8c34-7bd3-8d98-c2a941454b67/image.png_1351.png",
      description: "An inventive mechatronics engineer who fuses hardware and code to create intelligent, high-impact systems. Known for rapid problem-solving, precision execution, and a mindset wired for innovation."
    },
    {
      name: "Sumit Khobragade",
      role: "Technical Lead / Software",
      email: "sumit.khobragade@anu.edu.au",
      image: "https://mocha-cdn.com/0199672f-8c34-7bd3-8d98-c2a941454b67/image.png_8064.png", 
      description: "Mechatronics and robotics engineer with experience in embedded systems, UAVs, and real-time sensor integration. Currently focused on event-based vision and motion prediction, with a passion for building efficient, practical robotic solutions."
    },
    {
      name: "Anusha Yagnik",
      role: "Project Manager & Systems Design",
      email: "anusha.yagnik@anu.edu.au",
      image: "https://mocha-cdn.com/0199672f-8c34-7bd3-8d98-c2a941454b67/image.png_5257.png",
      description: "Aspiring autonomous robotics professional, passionate about AI-driven machines that solve real-world problems independently. Aiming to work with global leaders shaping the future of intelligent automation."
    }
  ];

  return (
    <section id="team" ref={ref} className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-red-400 font-semibold uppercase tracking-wide text-sm mb-4 block">
            OUR TEAM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            A dedicated team of engineering students working together to create 
            innovative solutions for the rowing community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 hover:shadow-lg transition-all duration-300 border border-white/20"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-cover mx-auto md:mx-0"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-red-400 font-medium mb-3 uppercase text-sm tracking-wide">
                    {member.role}
                  </p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-slate-300 hover:text-slate-200 text-sm mb-4 block flex items-center justify-center md:justify-start gap-1"
                  >
                    <Mail size={16} />
                    {member.email}
                  </a>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety and Privacy Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 space-y-8"
        >
          <div className="bg-red-600 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
              Safety First
            </h3>
            <p className="text-red-100">
              For urgent on-water or shed safety matters, please contact the BMRC duty officer/coach on site rather than email.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 text-center border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
              Privacy Note
            </h3>
            <p className="text-slate-200">
              We only track boat status, not people. Please avoid sending personal or sensitive information in emails.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
