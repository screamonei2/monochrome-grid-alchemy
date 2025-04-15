import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

// Array of roles for the glitch animation
const roles = [
  "PRODUCT DESIGN LEAD",
  "UX DESIGNER",
  "UI DESIGNER",
  "PRODUCT DESIGNER",
  "DESIGN MANAGER"
];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [nameGlitch, setNameGlitch] = useState(false);
  
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!marqueeRef.current) return;
      const scrollY = window.scrollY;
      marqueeRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Role glitch animation loop
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        
        setTimeout(() => {
          setIsGlitching(false);
        }, 300);
      }, 200);
    }, 4000);
    
    // Name glitch animation at different intervals
    const nameGlitchInterval = setInterval(() => {
      setNameGlitch(true);
      setTimeout(() => setNameGlitch(false), 300);
    }, 7000);
    
    return () => {
      clearInterval(glitchInterval);
      clearInterval(nameGlitchInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center" id="home">
      <div className="gradient-hero blur-[80px]">
        <div className="gradient-top"></div>
        <div className="gradient-bottom"></div>
      </div>
      
      <div className="avant-container">
        <div className="relative z-10 pt-40 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="flex flex-wrap md:flex-nowrap items-start gap-4 md:gap-6"
          >
            <div className="text-lg md:text-xl font-normal md:leading-normal max-w-xs relative overflow-hidden">
              <div 
                className={`${isGlitching ? 'glitch-text' : 'transition-all duration-300'}`}
                aria-label={roles[currentRoleIndex]}
              >
                {roles[currentRoleIndex]}
              </div>
            </div>
            <div className="w-28 h-[1px] mt-3 bg-foreground/30"></div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`text-5xl md:text-7xl lg:text-8xl mt-8 md:mt-16 tracking-tight max-w-5xl ${nameGlitch ? 'name-glitch' : ''}`}
          >
            CLAUDINEI
            <br />SANTOS
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mt-8 text-lg md:text-xl max-w-xl"
          >
            Design Specialist with over 20 Years crafting UX/UI for fintech and AI, 
            blending design and data visualization.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mt-12 md:mt-20"
          >
            <a 
              href="#work" 
              className="inline-flex items-center gap-2 text-lg md:text-xl hover:opacity-70 transition-opacity duration-300 group"
            >
              <span className="avant-link">View Work</span>
              <ArrowDownRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-12 left-0 right-0 flex justify-center"
      >
        <div className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center animate-pulse">
          <ArrowDownRight size={18} className="text-foreground/60" />
        </div>
      </motion.div>
    </section>
  );
}
