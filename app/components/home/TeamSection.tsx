import React, { forwardRef } from "react";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface TeamSectionProps {
  teamRef: React.RefObject<HTMLElement>;
  handleHover: () => void;
  handleHoverOut: () => void;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Aditya Sharma",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Rahul Kapoor",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Meera Joshi",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=387&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Ananya Reddy",
    role: "UX Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop"
  }
];

const TeamSection = forwardRef<HTMLElement, TeamSectionProps>(({ teamRef, handleHover, handleHoverOut }, ref) => {
  return (
    <section ref={teamRef} className="py-16 sm:py-20 md:py-24 bg-white dark:bg-[#111] border-t border-[#ddd]/40 dark:border-[#333]/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-montreal font-medium mb-4 text-[#111] dark:text-[#f5f5f5]">Meet Our Team</h2>
          <p className="text-base sm:text-lg text-[#444] dark:text-[#bbb] font-grotesk max-w-2xl mx-auto">
            The talented individuals behind our exceptional creative work. Each member brings a unique 
            perspective and specialized expertise to our projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
              className="group"
            >
              <div className="overflow-hidden mb-4">
                <div 
                  className="w-full h-[250px] sm:h-[350px] md:h-[450px] bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-montreal font-medium mb-1 text-[#111] dark:text-[#f5f5f5]">{member.name}</h3>
              <p className="text-sm text-[#666] dark:text-[#999] font-montreal">{member.role}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <motion.div 
            className="inline-block px-6 sm:px-8 py-3 border border-purple dark:border-gold text-purple dark:text-gold hover:bg-purple hover:dark:bg-gold hover:text-white hover:dark:text-[#111] transition-colors duration-300 cursor-pointer font-montreal text-sm sm:text-base"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
            whileHover={{ scale: 1.02 }}
          >
            Join Our Team
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

TeamSection.displayName = "TeamSection";

export default TeamSection; 