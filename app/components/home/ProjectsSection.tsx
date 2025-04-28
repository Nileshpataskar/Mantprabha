import { motion } from "framer-motion";
import React from "react";

interface ProjectsSectionProps {
  projectsRef: React.RefObject<HTMLElement>;
  handleHover: (e: React.MouseEvent<HTMLElement>) => void;
  handleHoverOut: (e: React.MouseEvent<HTMLElement>) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projectsRef,
  handleHover,
  handleHoverOut,
}) => {
  // Projects data
  const projects = [
    {
      title: "Luxe Interiors",
      category: "Web Design & Development",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2400&auto=format&fit=crop",
      year: "2023",
    },
    {
      title: "Momentum App",
      category: "UI/UX & Mobile Development",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2400&auto=format&fit=crop",
      year: "2023",
    },
    {
      title: "Eco Alliance",
      category: "Branding & Strategy",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2400&auto=format&fit=crop",
      year: "2022",
    },
    {
      title: "Culinary Ventures",
      category: "Web Design & Development",
      image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2400&auto=format&fit=crop",
      year: "2022",
    },
  ];

  return (
    <section
      ref={projectsRef}
      className="py-24 px-6 lg:px-16 text-current "
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montreal font-medium tracking-tight text-[#111] dark:text-[#f5f5f5] mb-8">
            Selected Work
          </h2>
          <p className="text-lg md:text-xl font-grotesk max-w-2xl text-[#444] dark:text-[#bbb]">
            Explore our portfolio of selected projects showcasing our expertise in design, development, and branding. Each project represents our commitment to excellence and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              className="group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="py-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl md:text-2xl font-montreal font-medium text-[#111] dark:text-[#f5f5f5]">
                    {project.title}
                  </h3>
                  <span className="text-sm font-grotesk text-[#666] dark:text-[#999]">
                    {project.year}
                  </span>
                </div>
                <p className="text-[#444] dark:text-[#bbb] font-grotesk">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            className="inline-flex items-center gap-3 group"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <span className="text-lg font-montreal uppercase tracking-wider text-[#111] dark:text-[#f5f5f5] border-b border-transparent group-hover:border-[#111] dark:group-hover:border-[#f5f5f5] pb-1 transition-all duration-300">
              View all projects
            </span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 