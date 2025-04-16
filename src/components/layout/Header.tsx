
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };

  const links = [
    { text: "HOME", path: "/" },
    { text: "WORK", path: "/work" },
    { text: "CV", path: "/cv" },
    { text: "LET'S TALK!", path: "/contact" },
  ];

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 backdrop-blur-md bg-background/80' : 'py-6 bg-transparent'}`}>
        <div className="avant-container flex justify-between items-center">
          <Link to="/" className="font-medium text-xl tracking-tight z-50 font-mono uppercase">
            <span className="avant-link glitch-text-subtle">NS/ PD</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8 font-mono uppercase">
              {links.map((link) => (
                <Link 
                  key={link.text} 
                  to={link.path}
                  className={`hover:opacity-70 transition-opacity duration-300 avant-link ${location.pathname === link.path ? 'font-medium' : ''}`}
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="md:hidden flex items-center gap-4 z-50">
            <button 
              className="p-1" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col items-center gap-8 text-4xl font-light font-mono uppercase">
              {links.map((link, i) => (
                <motion.div
                  key={link.text}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link 
                    to={link.path}
                    className="avant-link py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
