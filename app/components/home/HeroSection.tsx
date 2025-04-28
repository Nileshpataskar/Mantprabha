import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLElement>;
  workRef: React.RefObject<HTMLElement>;
  handleHover: (e: React.MouseEvent<HTMLElement>) => void;
  handleHoverOut: (e: React.MouseEvent<HTMLElement>) => void;
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroRef,
  workRef,
  handleHover,
  handleHoverOut,
  scrollToSection,
}) => {
  const [, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Split text animation setup
  const titleWords = ["Crafting", "Experiences"];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] px-4 sm:px-6 lg:px-16 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full pt-20 md:pt-24 pb-12 md:pb-16 md:py-0">
        <div className="mb-10 md:mb-16">
          <div className="overflow-hidden mb-2">
            <motion.p
              className="text-base md:text-lg font-grotesk tracking-wide text-purple dark:text-gold mb-3 md:mb-5"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Design Studio & Creative Agency
            </motion.p>
          </div>

          <div className="overflow-hidden">
            {titleWords.map((word, index) => (
              <motion.div
                key={index}
                className="overflow-hidden"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1 * index,
                  ease: [0.25, 1, 0.5, 1],
                }}
              >
                <motion.h1
                  className="text-5xl sm:text-5xl md:text-9xl font-black font-montreal tracking-tight leading-none relative"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.25, 1, 0.5, 1],
                    delay: 0.2 + 0.1 * index,
                  }}
                >
                  <span
                    className={`block mb-1 ${
                      index === 0
                        ? "text-blue-500"
                        : "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple to-gold"
                    }`}
                  >
                    {word}
                    {index === 1 && (
                      <motion.span
                        className="absolute -bottom-2 md:-bottom-4 left-0 h-0.5 md:h-1 bg-gradient-to-r from-purple via-gold to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: "9rem", maxWidth: "50%" }}
                        transition={{
                          duration: 1.5,
                          delay: 1.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    )}
                  </span>
                </motion.h1>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-base sm:text-lg md:text-3xl text-purple font-grotesk max-w-4xl mt-8 md:mt-12 dark:text-[#bbb]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            We are a creative design studio specializing in digital experiences
            that captivate, inspire, and deliver results for ambitious brands.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col w-full sm:flex-row gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={() => scrollToSection(workRef)}
            className="relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple to-blue-500 dark:from-gold dark:to-purple text-white dark:text-[#111] rounded-md overflow-hidden group w-full sm:w-auto"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <span className="text-sm font-montreal uppercase tracking-widest relative z-10 group-hover:text-white dark:group-hover:text-[#111]">
              View our work
            </span>
            <motion.span
              className="inline-block relative z-10"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
            <motion.span
              className="absolute inset-0 bg-[#333] dark:bg-white z-0"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </button>

          <button
            className="relative inline-flex items-center justify-center gap-3 group w-full sm:w-auto px-6 py-3 sm:py-4"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <span className="text-sm font-montreal uppercase tracking-widest">
              Get in touch
            </span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
            <span className="block w-0 h-px bg-gradient-to-r from-purple to-gold dark:from-gold dark:to-purple absolute bottom-0 left-0 group-hover:w-full transition-all duration-300" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
