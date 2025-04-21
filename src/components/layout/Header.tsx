
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu if open
  };



  // Refactored navigation logic to handle closing menu consistently
  const navigateAndScroll = (targetId: string) => {
    navigate("/");
    const checkElementAfterNav = (retries = 10) => {
      const elementAfterNavigation = document.getElementById(targetId);
      if (elementAfterNavigation) {
        elementAfterNavigation.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      } else if (retries > 0) {
        requestAnimationFrame(() => checkElementAfterNav(retries - 1));
      } else {
        console.error(`Element with ID "${targetId}" not found after navigating to homepage.`);
        setIsOpen(false);
      }
    };
    // Start checking after a short delay for navigation
    setTimeout(() => requestAnimationFrame(() => checkElementAfterNav()), 100);
  };

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const targetId = hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const elementAfterNavigation = document.getElementById(targetId);
        if (elementAfterNavigation) {
          elementAfterNavigation.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

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

  const navLinks = [
    // Home/Start/BackToTop is handled dynamically
    { text: "WORK", path: "/work" },
    { text: "ABOUT ME", path: "#about" },
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
              {/* Dynamic First Link */}
              {scrolled ? (
                <a
                  href="#top"
                  onClick={handleBackToTop}
                  className="hover:opacity-70 transition-opacity duration-300 avant-link"
                >
                  BACK TO TOP
                </a>
              ) : (
                <Link
                  to="/"
                  className={`hover:opacity-70 transition-opacity duration-300 avant-link ${location.pathname === '/' && !location.hash ? 'font-medium' : ''}`}
                >
                  START
                </Link>
              )}

              {/* Other Links */}
              {navLinks.map((link) => (
                link.path.startsWith('#') ? (
                  <a
                    key={link.text}
                    href={link.path}
                    onClick={(e) => handleHashLinkClick(e, link.path)}
                    className="hover:opacity-70 transition-opacity duration-300 avant-link"
                  >
                    {link.text}
                  </a>
                ) : (
                  <Link
                    key={link.text}
                    to={link.path}
                    className={`hover:opacity-70 transition-opacity duration-300 avant-link ${location.pathname === link.path ? 'font-medium' : ''}`}
                  >
                    {link.text}
                  </Link>
                )
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
              {/* Dynamic First Link - Mobile */}
              <motion.div
                custom={0} // Assign index 0
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {scrolled ? (
                  <a
                    href="#top"
                    className="avant-link py-2"
                    onClick={handleBackToTop}
                  >
                    BACK TO TOP
                  </a>
                ) : (
                  <Link
                    to="/"
                    className="avant-link py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    START
                  </Link>
                )}
              </motion.div>

              {/* Other Links - Mobile */}
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.text}
                  custom={i + 1}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {link.path.startsWith('#') ? (
                    <a
                      href={link.path}
                      className="avant-link py-2"
                      onClick={(e) => handleHashLinkClick(e, link.path)}
                    >
                      {link.text}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="avant-link py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.text}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
