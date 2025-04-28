import { motion } from "framer-motion";
import React from "react";

interface HeaderProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  heroSectionRef: React.RefObject<HTMLElement>;
  workSectionRef: React.RefObject<HTMLElement>;
  servicesSectionRef: React.RefObject<HTMLElement>;
  contactSectionRef: React.RefObject<HTMLElement>;
}

const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  heroSectionRef,
  workSectionRef,
  servicesSectionRef,
  contactSectionRef,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 lg:px-16 py-2  backdrop-blur-sm border-b border-[#ddd]/20 dark:border-purple/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-montreal font-medium text-2xl text-[#222] dark:text-[#eee]"
        >
          <img src="/logo.png" alt="logo" className="w-40" />
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection(heroSectionRef)}
            className="font-montreal text-xs  tracking-wider text-purple dark:text-[#ccc] relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple dark:bg-[#ccc] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection(workSectionRef)}
            className="font-montreal text-xs  tracking-wider text-purple dark:text-[#ccc] relative group"
          >
            Work
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple dark:bg-[#ccc] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection(servicesSectionRef)}
            className="font-montreal text-xs  tracking-wider text-purple dark:text-[#ccc] relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple dark:bg-[#ccc] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection(contactSectionRef)}
            className="px-6 py-2 border border-purple dark:border-[#ccc] text-purple dark:text-[#ccc] font-montreal text-xs hover:bg-purple  dark:hover:text-[#111] transition-all duration-300"
          >
            Contact
          </button>
        </nav>

        <button className="md:hidden text-purple dark:text-[#ccc]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
