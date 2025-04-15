
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function HeroSection() {
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

  return (
    <section className="relative min-h-screen flex flex-col justify-center noise-bg" id="home">
      <div className="gradient-hero blur-[80px]">
        <div className="gradient-top"></div>
        <div className="gradient-bottom"></div>
      </div>
      
      <div className="avant-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-0 left-0 right-0 pt-36 md:pt-40 overflow-hidden"
          ref={marqueeRef}
        >
          <div className="marquee-container">
            <div className="marquee-content text-[180px] md:text-[250px] font-medium tracking-tight opacity-[0.03] whitespace-nowrap">
              CLAUDINEI SANTOS CLAUDINEI SANTOS&nbsp;
            </div>
          </div>
        </motion.div>
        
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
            <h2 className="text-lg md:text-xl font-normal md:leading-normal max-w-xs">
              PRODUCT DESIGN LEAD
            </h2>
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
            className="text-5xl md:text-7xl lg:text-8xl mt-8 md:mt-16 tracking-tight max-w-5xl"
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
