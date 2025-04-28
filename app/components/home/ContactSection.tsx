import { motion } from "framer-motion";
import React from "react";

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLElement>;
  handleHover: (e: React.MouseEvent<HTMLElement>) => void;
  handleHoverOut: (e: React.MouseEvent<HTMLElement>) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  contactRef,
  handleHover,
  handleHoverOut,
}) => {
  return (
    <section
      ref={contactRef}
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-16 border-t border-[#ddd]/40 dark:border-[#333]/40"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 sm:mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montreal font-medium tracking-tight text-[#111] dark:text-[#f5f5f5] mb-4 sm:mb-8">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg max-w-2xl text-[#444] dark:text-[#bbb] font-grotesk">
            Ready to discuss your project? Fill out the form below or reach out 
            directly. We're excited to hear about your vision and explore how we 
            can bring it to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <form className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-montreal text-[#333] dark:text-[#aaa] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-b border-[#ddd] dark:border-[#333] py-2 sm:py-3 outline-none text-[#111] dark:text-[#f5f5f5] font-grotesk focus:border-purple dark:focus:border-gold transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-montreal text-[#333] dark:text-[#aaa] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent border-b border-[#ddd] dark:border-[#333] py-2 sm:py-3 outline-none text-[#111] dark:text-[#f5f5f5] font-grotesk focus:border-purple dark:focus:border-gold transition-colors duration-300"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-montreal text-[#333] dark:text-[#aaa] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-transparent border-b border-[#ddd] dark:border-[#333] py-2 sm:py-3 outline-none text-[#111] dark:text-[#f5f5f5] font-grotesk focus:border-purple dark:focus:border-gold transition-colors duration-300"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-montreal text-[#333] dark:text-[#aaa] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full bg-transparent border-b border-[#ddd] dark:border-[#333] py-2 sm:py-3 outline-none text-[#111] dark:text-[#f5f5f5] font-grotesk focus:border-purple dark:focus:border-gold transition-colors duration-300"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-purple dark:bg-gold text-white dark:text-[#111] px-6 sm:px-8 py-3 text-sm sm:text-base font-montreal uppercase tracking-wider rounded-md sm:rounded-none"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverOut}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Send Message
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-8 sm:space-y-10 mt-8 lg:mt-0"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-montreal font-medium text-[#111] dark:text-[#f5f5f5] mb-4">
                Contact Information
              </h3>
              <ul className="space-y-4 sm:space-y-6 font-grotesk">
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 text-lg sm:text-xl text-purple dark:text-gold">📍</div>
                  <div>
                    <p className="text-sm sm:text-base text-[#111] dark:text-[#f5f5f5] font-medium">Address</p>
                    <p className="text-sm text-[#666] dark:text-[#999]">
                      123 Creative Avenue, Bangalore, Karnataka, India
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 text-lg sm:text-xl text-purple dark:text-gold">📧</div>
                  <div>
                    <p className="text-sm sm:text-base text-[#111] dark:text-[#f5f5f5] font-medium">Email</p>
                    <a 
                      href="mailto:hello@mantaprabha.com"
                      className="text-sm text-[#666] dark:text-[#999] hover:text-purple dark:hover:text-gold transition-colors duration-300"
                    >
                      hello@mantaprabha.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 text-lg sm:text-xl text-purple dark:text-gold">📞</div>
                  <div>
                    <p className="text-sm sm:text-base text-[#111] dark:text-[#f5f5f5] font-medium">Phone</p>
                    <a 
                      href="tel:+919876543210"
                      className="text-sm text-[#666] dark:text-[#999] hover:text-purple dark:hover:text-gold transition-colors duration-300"
                    >
                      +91 9876 543 210
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-montreal font-medium text-[#111] dark:text-[#f5f5f5] mb-4">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-[#ddd] dark:border-[#333] text-[#666] dark:text-[#999] hover:text-purple dark:hover:text-gold hover:border-purple dark:hover:border-gold transition-colors duration-300"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  <span>IG</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-[#ddd] dark:border-[#333] text-[#666] dark:text-[#999] hover:text-purple dark:hover:text-gold hover:border-purple dark:hover:border-gold transition-colors duration-300"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  <span>TW</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-[#ddd] dark:border-[#333] text-[#666] dark:text-[#999] hover:text-purple dark:hover:text-gold hover:border-purple dark:hover:border-gold transition-colors duration-300"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  <span>LI</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-[#ddd] dark:border-[#333] text-[#666] dark:text-[#999] hover:text-purple dark:hover:text-gold hover:border-purple dark:hover:border-gold transition-colors duration-300"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                >
                  <span>BE</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 