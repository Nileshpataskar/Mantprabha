import { motion } from "framer-motion";
import React from "react";

interface ServicesSectionProps {
  servicesRef: React.RefObject<HTMLElement>;
  handleHover: (e: React.MouseEvent<HTMLElement>) => void;
  handleHoverOut: (e: React.MouseEvent<HTMLElement>) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  servicesRef,
  handleHover,
  handleHoverOut,
}) => {
  // Services data
  const services = [
    {
      icon: "✨",
      title: "Branding",
      description:
        "We create distinctive visual identities that capture your brand essence and resonate with your audience, combining strategic thinking with creative excellence.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Our design solutions blend aesthetics with functionality, creating intuitive and engaging interfaces that guide users through seamless digital experiences.",
    },
    {
      icon: "💻",
      title: "Web Development",
      description:
        "We craft responsive, high-performance websites and applications using modern technologies and best practices to deliver exceptional digital products.",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description:
        "Our team develops native and cross-platform mobile applications that offer superior performance, intuitive interfaces, and seamless user experiences.",
    },
    {
      icon: "💡",
      title: "Digital Strategy",
      description:
        "We develop comprehensive digital strategies that align with your business goals, helping you navigate the digital landscape and drive meaningful results.",
    },
    {
      icon: "🚀",
      title: "Content Creation",
      description:
        "From copywriting to multimedia production, we create compelling content that tells your story, engages your audience, and strengthens your brand.",
    },
  ];

  return (
    <section
      ref={servicesRef}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-16 border-t border-[#ddd]/40 dark:border-[#333]/40"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montreal font-medium tracking-tight text-current mb-4 sm:mb-8">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-grotesk max-w-2xl text-current">
            We offer a comprehensive range of digital services designed to
            elevate your brand and drive business growth. From creative design
            to technical development, we deliver solutions that exceed
            expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-x-8 gap-y-8 sm:gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={`service-${index}`}
              className="service-card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.1 + (index % 3) * 0.1, // Staggered by row
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mb-4 sm:mb-6 text-2xl sm:text-3xl">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-montreal font-medium text-current   mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base font-grotesk text-current mb-5 sm:mb-6">
                {service.description}
              </p>
              <motion.button
                className="inline-flex items-center gap-2 group"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                <span className="text-xs sm:text-sm font-montreal uppercase tracking-wider text-purple dark:text-gold border-b border-transparent group-hover:border-purple dark:group-hover:border-gold pb-1 transition-all duration-300">
                  Learn more
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
          ))}
        </div>

        <motion.div
          className="text-center mt-12 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-purple dark:bg-gold text-white dark:text-[#111] px-6 sm:px-8 py-3 sm:py-4 rounded-md sm:rounded-full hover:bg-[#333] dark:hover:bg-white transition-all duration-300"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <span className="text-sm sm:text-base font-montreal">
              View all services
            </span>
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
