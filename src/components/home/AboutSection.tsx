
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
    <section id="about" className="py-24 md:py-32 noise-bg" ref={containerRef}>
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
              Product Designer & Strategist | UX, AI & Innovation Expert
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
                    backgroundImage: 'url(../nei-santos.png)',
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
                  backgroundImage: 'url(../washington-dc.jpg)',
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
                Hi, my name is <i>Nei Santos,</i> and I am a Product Designer who blends UX, strategy, and emerging technology to create impactful experiences. Known for transforming complex challenges into intuitive, user-centered solutions that drive innovation.
              </p>
              <p className="text-muted-foreground text-lg">
                With over 20 years as a Designer, and 10 years of experience in digital products, I lead cross-functional teams and help shape products for startups and large enterprises alike.
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
                    <li>World Resources Institute</li>
                    <li>Klabin</li>
                    <li>AmBev</li>
                    <li>Finnet</li>
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
