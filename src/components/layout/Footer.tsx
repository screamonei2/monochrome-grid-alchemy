
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const targetId = hash.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);

    if (location.pathname !== "/") {
      // If not on the homepage, navigate first, then scroll
      navigate("/");
      // Use setTimeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const elementAfterNavigation = document.getElementById(targetId);
        if (elementAfterNavigation) {
          elementAfterNavigation.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Adjust delay if needed
    } else {
      // If already on the homepage, just scroll
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
            <h3 className="text-xl tracking-tight">CLAUDINEI SANTOS</h3>
            <p className="text-muted-foreground max-w-md">
              20 years making some good stuff!
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl tracking-tight">CONTACT</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:claudineiramiro@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors avant-link">
                  claudineiramiro@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl tracking-tight">SOCIALS</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://linkedin.com/in/nei-santos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="avant-link">LINKEDIN</span>
                  <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="https://behance.net/nei-santos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="avant-link">BEHANCE</span>
                  <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/screamonei2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="avant-link">GITHUB</span>
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
          <p>&copy; {currentYear} NS/ PD. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0 font-mono uppercase">
            <a
              href="#top"
              onClick={handleBackToTop}
              className="hover:text-foreground transition-colors avant-link"
            >
              BACK TO TOP
            </a>
            {/* <Link to="/" className="hover:text-foreground transition-colors avant-link">HOME</Link> */}
            <Link to="/work" className="hover:text-foreground transition-colors avant-link">WORK</Link>
            <a
              href="#about"
              onClick={(e) => handleHashLinkClick(e, '#about')}
              className="hover:text-foreground transition-colors avant-link"
            >
              ABOUT ME
            </a>
            <Link to="/cv" className="hover:text-foreground transition-colors avant-link">CV</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors avant-link">LET'S TALK!</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
