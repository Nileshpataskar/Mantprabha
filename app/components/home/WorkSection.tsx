import { motion } from "framer-motion";
import React from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

interface WorkSectionProps {
  workRef: React.RefObject<HTMLElement>;
  handleHover: (e: React.MouseEvent<HTMLElement>) => void;
  handleHoverOut: (e: React.MouseEvent<HTMLElement>) => void;
}

const WorkSection: React.FC<WorkSectionProps> = ({
  workRef,
  handleHover,
  handleHoverOut,
}) => {
  // Sample projects data
  const projects: Project[] = [
    {
      id: "proj-1",
      title: "Luxury Brand Website",
      category: "Web Development",
      imageUrl: "/images/project1.jpg",
      description: "A premium website for a high-end fashion brand with bespoke animations and exclusive design elements.",
    },
    {
      id: "proj-2",
      title: "Editorial Experience",
      category: "UI/UX Design",
      imageUrl: "/images/project2.jpg",
      description: "An immersive digital magazine with rich media integration and innovative navigation patterns.",
    },
    {
      id: "proj-3",
      title: "E-commerce Platform",
      category: "Web Development",
      imageUrl: "/images/project3.jpg",
      description: "A seamless shopping experience with sophisticated product visualization and personalization.",
    },
  ];

  return (
    <section
      ref={workRef}
      className="py-24 px-6 lg:px-16 bg-[#f9f9f7] dark:bg-[#111]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-montreal font-medium tracking-tight text-[#111] dark:text-[#f5f5f5] mb-4">
            Selected Work
          </h2>
          <p className="text-lg font-grotesk max-w-2xl text-[#444] dark:text-[#bbb]">
            Explore our latest projects showcasing our commitment to innovative design, 
            thoughtful user experience, and technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <div className="project-image-container h-[300px] md:h-[400px] overflow-hidden mb-4 relative bg-[#eee] dark:bg-[#1a1a1a]">
                <div className="absolute inset-0 flex items-center justify-center text-[#777] dark:text-[#555] font-montreal text-sm">
                  Image Placeholder
                </div>
                {/* Uncomment when images are available */}
                {/* <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                /> */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="block text-sm font-grotesk mb-1">{project.category}</span>
                  <h3 className="text-xl font-montreal">{project.title}</h3>
                </motion.div>
              </div>
              <div className="project-info">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-montreal text-[#111] dark:text-[#f5f5f5]">
                    {project.title}
                  </h3>
                  <motion.span 
                    className="text-xl"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.span>
                </div>
                <span className="text-sm font-grotesk text-[#555] dark:text-[#999] block mb-3">
                  {project.category}
                </span>
                <p className="text-base font-grotesk text-[#444] dark:text-[#bbb]">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            className="inline-flex items-center gap-2 px-7 py-4 font-montreal bg-[#111] dark:bg-[#f5f5f5] text-white dark:text-[#111] rounded-full overflow-hidden relative group"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <span className="text-sm uppercase tracking-wider relative z-10">
              View all projects
            </span>
            <motion.span
              className="inline-block relative z-10"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
            <motion.span
              className="absolute inset-0 bg-[#333] dark:bg-[#ddd] z-0"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection; 