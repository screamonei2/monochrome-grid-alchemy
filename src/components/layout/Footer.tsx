
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <footer className="py-20 border-t border-border">
      <div className="avant-container">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-medium tracking-tight">Studio Avant</h3>
            <p className="text-muted-foreground max-w-md">
              An experimental design studio focused on creating unique digital experiences.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-medium tracking-tight">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@studioavant.com" className="text-muted-foreground hover:text-foreground transition-colors avant-link">
                  hello@studioavant.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-foreground transition-colors avant-link">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-medium tracking-tight">Socials</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="avant-link">Instagram</span>
                  <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="avant-link">Twitter</span>
                  <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="https://dribbble.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="avant-link">Dribbble</span>
                  <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-20 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Studio Avant. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-foreground transition-colors avant-link">Privacy</Link>
            <Link to="/" className="hover:text-foreground transition-colors avant-link">Terms</Link>
            <Link to="/" className="hover:text-foreground transition-colors avant-link">Sitemap</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
