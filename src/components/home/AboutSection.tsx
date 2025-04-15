
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section className="py-24 md:py-32 noise-bg" ref={containerRef}>
      <div className="avant-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div 
            style={{ y: y1 }}
            className="flex flex-col justify-between space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-wrap items-start gap-4">
                <h2 className="text-lg font-light md:leading-normal">About</h2>
                <div className="w-10 h-[1px] mt-3 bg-foreground/30"></div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-medium mt-6 tracking-tight">
                Design studio focused on experimental digital interfaces
              </h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="aspect-square bg-muted overflow-hidden">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%)'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            style={{ y: y2 }}
            className="flex flex-col justify-between space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="aspect-square bg-muted overflow-hidden"
            >
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(100%)'
                }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <p className="text-muted-foreground text-lg">
                Studio Avant is an experimental design studio that combines cutting-edge technology with unconventional design approaches. We create digital experiences that challenge conventions and redefine user interactions.
              </p>
              <p className="text-muted-foreground text-lg">
                Founded in 2023, our team of designers and developers work at the intersection of art, technology, and design to push the boundaries of what's possible in the digital space.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div>
                  <h4 className="text-sm text-muted-foreground mb-2">Services</h4>
                  <ul className="space-y-2">
                    <li>Art Direction</li>
                    <li>Brand Identity</li>
                    <li>UI/UX Design</li>
                    <li>Web Development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-2">Clients</h4>
                  <ul className="space-y-2">
                    <li>Noir Gallery</li>
                    <li>Monochrome Labs</li>
                    <li>Arc Studios</li>
                    <li>Contrast Design</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
