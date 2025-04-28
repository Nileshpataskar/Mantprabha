import { Link } from "@remix-run/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Header from "~/components/home/Header";
import HeroSection from "~/components/home/HeroSection";
// import WorkSection from "~/components/home/WorkSection";
import ServicesSection from "~/components/home/ServicesSection";
import AboutSection from "~/components/home/AboutSection";
import ProjectsSection from "~/components/home/ProjectsSection";
import ContactSection from "~/components/home/ContactSection";
import { motion } from "framer-motion";

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Handle cursor follow animation
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Set up GSAP animations for cursor
  useEffect(() => {
    if (!cursorRef.current || !cursorDotRef.current) return;

    gsap.to(cursorRef.current, {
      x: mousePos.x - cursorRef.current.offsetWidth / 2,
      y: mousePos.y - cursorRef.current.offsetHeight / 2,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(cursorDotRef.current, {
      x: mousePos.x - cursorDotRef.current.offsetWidth / 2,
      y: mousePos.y - cursorDotRef.current.offsetHeight / 2,
      duration: 0.1,
    });
  }, [mousePos]);

  // Parallax effect setup
  useEffect(() => {
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll("[data-parallax]");
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute("data-speed") || "0.1");
        const y = window.scrollY * speed;
        gsap.to(element, {
          y: y,
          duration: 0.5,
          ease: "power1.out",
        });
      });
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Cursor variants
  const variants = {
    default: {
      width: 24,
      height: 24,
      backgroundColor: "rgba(138, 43, 226, 0.3)",
      mixBlendMode: "difference" as const,
      borderWidth: "0px",
    },
    text: {
      width: 120,
      height: 120,
      backgroundColor: "rgba(138, 43, 226, 0.1)",
      mixBlendMode: "difference" as const,
      borderWidth: "1px",
    },
    link: {
      width: 60,
      height: 60,
      backgroundColor: "rgba(255, 215, 0, 0.3)",
      borderWidth: "1px",
    },
  };

  const handleHover = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    if (target.tagName === "BUTTON" || target.tagName === "A") {
      setCursorVariant("link");
    } else if (target.tagName === "H1" || target.tagName === "P") {
      setCursorVariant("text");
    }
  };

  const handleHoverOut = () => {
    setCursorVariant("default");
  };

  // Section refs for navigation
  const heroSectionRef = useRef(null);
  const workSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const [servicesActive, setServicesActive] = useState(false);
  // When ServicesSection is at least 50% in view, flip the background
  useEffect(() => {
    if (!servicesSectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => setServicesActive(entry.intersectionRatio >= 0.5),
      { threshold: [0.5] }
    );
    obs.observe(servicesSectionRef.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div className="min-h-screen text-purple   ">
      {/* Custom cursors */}
      <motion.div
        ref={cursorRef}
        className="fixed rounded-full pointer-events-none z-50 hidden md:block mix-blend-difference"
        animate={cursorVariant}
        variants={variants}
        initial="default"
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      <motion.div
        ref={cursorDotRef}
        className="fixed w-3 h-3 bg-purple dark:bg-gold rounded-full pointer-events-none z-50 hidden md:block mix-blend-difference"
      />

      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-[10%] right-[20%] w-64 h-64 rounded-full border border-purple/40 dark:border-gold/30"
          data-parallax
          data-speed="0.05"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[10%] w-96 h-96 rounded-full border border-purple/30 dark:border-gold/20"
          data-parallax
          data-speed="0.08"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <Header
        scrollToSection={scrollToSection}
        heroSectionRef={heroSectionRef}
        workSectionRef={workSectionRef}
        servicesSectionRef={servicesSectionRef}
        contactSectionRef={contactSectionRef}
      />
      <div
        className={`transition-colors duration-500 ${
          servicesActive
            ? "bg-purple text-white"
            : "bg-transparent text-current"
        }`}
      >
        <HeroSection
          heroRef={heroSectionRef}
          workRef={workSectionRef}
          handleHover={handleHover}
          handleHoverOut={handleHoverOut}
          scrollToSection={scrollToSection}
        />

        {/* <WorkSection
        workRef={workSectionRef}
        handleHover={handleHover}
        handleHoverOut={handleHoverOut}
      /> */}

        <ServicesSection
          servicesRef={servicesSectionRef}
          handleHover={handleHover}
          handleHoverOut={handleHoverOut}
        />
      </div>

      <ProjectsSection
        projectsRef={projectsSectionRef}
        handleHover={handleHover}
        handleHoverOut={handleHoverOut}
      />

      <AboutSection
        aboutRef={aboutSectionRef}
        handleHover={handleHover}
        handleHoverOut={handleHoverOut}
      />

      <ContactSection
        contactRef={contactSectionRef}
        handleHover={handleHover}
        handleHoverOut={handleHoverOut}
      />

      {/* Newsletter Section with improved animation */}
      <section className="px-6 lg:px-16 py-20 border-t border-[#ddd]/40 dark:border-[#333]/40 bg-[#f5f5f3] dark:bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-purple/40 via-gold/40 to-blue-500/40"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <h3 className="text-xl font-montreal relative">
              Our Seasonal Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-purple dark:bg-gold"></span>
            </h3>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 border-t border-l border-b border-[#333]/20 dark:border-[#ccc]/20 bg-transparent w-full md:w-60 focus:outline-none focus:border-[#333]/50 dark:focus:border-[#ccc]/50 font-grotesk transition-colors duration-300"
              />
              <button
                className="px-6 py-3 border border-[#333] dark:border-[#ccc] bg-[#333] dark:bg-[#ccc] text-[#f9f9f7] dark:text-[#111] font-montreal hover:bg-[#222] dark:hover:bg-white transition-all duration-300 relative overflow-hidden group"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                <span className="relative z-10">Subscribe</span>
                <span className="absolute inset-0 w-full h-full bg-purple dark:bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with animation enhancements */}
      <footer className="px-6 lg:px-16 py-20 border-t border-[#ddd]/40 dark:border-[#333]/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-20">
            <div>
              <h2 className="text-3xl font-montreal font-medium mb-6 relative inline-block">
                MANTA PRABHA
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-purple dark:bg-gold"></span>
              </h2>
              <p className="font-grotesk max-w-md">
                A digital-first design agency creating lasting first
                impressions. We specialize in creating e-commerce solutions,
                websites, visual identities, and apps.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-montreal mb-4 relative inline-block">
                Links
                <span className="absolute -bottom-1 left-0 w-6 h-0.5 bg-purple/40 dark:bg-gold/40"></span>
              </h4>
              <Link
                to="/services"
                className="font-grotesk relative overflow-hidden group"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                <span>Services</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-purple dark:bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/work"
                className="font-grotesk relative overflow-hidden group"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                <span>Work</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-purple dark:bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/about"
                className="font-grotesk relative overflow-hidden group"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                <span>About</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-purple dark:bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/contact"
                className="font-grotesk relative overflow-hidden group"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                <span>Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-purple dark:bg-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-montreal mb-4 relative inline-block">
                Social
                <span className="absolute -bottom-1 left-0 w-6 h-0.5 bg-purple/40 dark:bg-gold/40"></span>
              </h4>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-grotesk relative overflow-hidden group"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                <span>Instagram</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-purple dark:bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-grotesk relative overflow-hidden group"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                <span>LinkedIn</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-purple dark:bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-grotesk relative overflow-hidden group"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                <span>Twitter</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-purple dark:bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-grotesk relative overflow-hidden group"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
              >
                <span>Facebook</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-purple dark:bg-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>

          <div className="mt-20 flex flex-col md:flex-row justify-between items-center">
            <div className="font-grotesk text-sm text-black/60 dark:text-white/60">
              © Manta Prabha {new Date().getFullYear()}
            </div>
            <div className="font-grotesk text-sm text-black/60 dark:text-white/60">
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
