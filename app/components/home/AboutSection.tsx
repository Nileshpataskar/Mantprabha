import { motion } from "framer-motion";
import React from "react";

interface AboutSectionProps {
  aboutRef: React.RefObject<HTMLElement>;
  handleHover: (e: React.MouseEvent<HTMLElement>) => void;
  handleHoverOut: (e: React.MouseEvent<HTMLElement>) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  aboutRef,
  handleHover,
  handleHoverOut,
}) => {
  return (
    <section
      ref={aboutRef}
      className="py-24 px-6 lg:px-16 border-t border-[#ddd]/40 dark:border-[#333]/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-montreal font-medium tracking-tight text-[#111] dark:text-[#f5f5f5] mb-8">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-[#444] dark:text-[#bbb] font-grotesk">
              <p>
                Manta Prabha is a premium creative agency founded in 2018 with a mission to transform brands through exceptional design and innovative digital experiences.
              </p>
              <p>
                Our multidisciplinary team combines strategic thinking with creative excellence to deliver results that elevate brands and drive business growth. We believe in the power of thoughtful design and purposeful technology.
              </p>
              <p>
                Based in Bangalore, we work with clients globally, bringing a unique perspective and collaborative approach to every project we undertake.
              </p>
            </div>

            <motion.button
              className="mt-10 inline-flex items-center gap-3 group"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
            >
              <span className="text-lg font-montreal uppercase tracking-wider text-[#111] dark:text-[#f5f5f5] border-b border-transparent group-hover:border-[#111] dark:group-hover:border-[#f5f5f5] pb-1 transition-all duration-300">
                Our approach
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

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montreal font-medium text-[#111] dark:text-[#f5f5f5] mb-3">
                  Our Vision
                </h3>
                <p className="text-[#444] dark:text-[#bbb] font-grotesk">
                  To be the catalyst for brands seeking to make a meaningful impact through exceptional design and innovation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montreal font-medium text-[#111] dark:text-[#f5f5f5] mb-3">
                  Our Values
                </h3>
                <ul className="list-disc list-inside space-y-2 text-[#444] dark:text-[#bbb] font-grotesk">
                  <li>Excellence in execution</li>
                  <li>Strategic thinking</li>
                  <li>Creative courage</li>
                  <li>Client collaboration</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-montreal font-medium text-[#111] dark:text-[#f5f5f5] mb-3">
                  Experience
                </h3>
                <p className="text-[#444] dark:text-[#bbb] font-grotesk">
                  With over a decade of combined experience, our team has worked with brands across industries, from startups to established enterprises.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-montreal font-medium text-[#111] dark:text-[#f5f5f5] mb-3">
                  Approach
                </h3>
                <p className="text-[#444] dark:text-[#bbb] font-grotesk">
                  We blend strategic thinking with creative excellence, ensuring every aspect of our work contributes to meaningful outcomes for our clients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 