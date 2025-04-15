
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="avant-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-foreground/30"></div>
              <span className="text-lg font-light">Get in touch</span>
              <div className="w-8 h-[1px] bg-foreground/30"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-10">
              Let's create something unique together
            </h2>
            
            <a 
              href="mailto:hello@studioavant.com" 
              className="inline-block text-xl md:text-2xl border-b-2 border-foreground pb-1 hover:opacity-70 transition-opacity duration-300 group"
            >
              <div className="flex items-center gap-2">
                <span>hello@studioavant.com</span>
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
