import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'content' | 'exit'>('initial');
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // First phase: Initial black screen
    const contentTimer = setTimeout(() => {
      setAnimationPhase('content');
    }, 300);
    
    // Last phase: Exit animation
    const exitTimer = setTimeout(() => {
      setAnimationPhase('exit');
    }, 3000);
    
    // Final cleanup: Remove component
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3600);
    
    return () => {
      clearTimeout(contentTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black"
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: 1,
              y: animationPhase === 'exit' ? '-100%' : 0 
            }}
            exit={{ y: '-100%' }}
            transition={{ 
              duration: 0.6, 
              ease: [0.65, 0, 0.35, 1] 
            }}
          >
            {/* Minimal background pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 grid-rows-3">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="border-[0.5px] border-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: i * 0.05 }}
                  />
                ))}
              </div>
            </div>

            {animationPhase !== 'initial' && (
              <>
                {/* Main content container */}
                <div className="relative z-10 px-6 w-full max-w-md">
                  <div className="text-center" ref={textRef}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="mb-6 relative"
                    >
                      <h1 className="text-3xl sm:text-4xl font-grotesk font-black text-white leading-tight tracking-wide">
                        <span className="relative inline-block">
                          MANTAPRABHA
                          <motion.span
                            className="absolute -bottom-1 left-0 h-[0.05em] bg-gold w-full"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                              delay: 0.6,
                              duration: 0.8,
                              ease: "easeOut"
                            }}
                          />
                        </span>
                      </h1>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="mb-10 text-white/60 font-grotesk tracking-widest text-[10px] uppercase"
                    >
                      Crafting Digital Experiences
                    </motion.div>

                    {/* Minimal loading indicator */}
                    <motion.div 
                      className="w-20 h-[1px] mx-auto bg-white/5 overflow-hidden mt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    >
                      <motion.div 
                        className="h-full bg-gold/40"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
