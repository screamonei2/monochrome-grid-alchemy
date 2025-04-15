
import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Copy, Check, MapPin, Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="noise-bg"
    >
      <Header />
      <main className="pt-32 pb-24" id="contact">
        <div className="avant-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.h1 
                variants={fadeInUpVariants}
                custom={0}
                className="text-5xl md:text-6xl"
              >
                LET'S
                <br />
                CONNECT
              </motion.h1>
              
              <motion.p 
                variants={fadeInUpVariants}
                custom={1}
                className="text-lg max-w-md"
              >
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Feel free to reach out through any of the channels below.
              </motion.p>
              
              <motion.div 
                variants={fadeInUpVariants}
                custom={2}
                className="space-y-6"
              >
                <div className="flex items-start gap-4">
                  <Mail size={20} className="mt-1" />
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">EMAIL</h3>
                    <div className="flex items-center gap-2">
                      <a 
                        href="mailto:claudineiramiro@gmail.com" 
                        className="avant-link"
                      >
                        claudineiramiro@gmail.com
                      </a>
                      <button 
                        className="p-1 hover:text-accent-foreground"
                        onClick={() => copyToClipboard('claudineiramiro@gmail.com', 'email')}
                        aria-label="Copy email"
                      >
                        {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone size={20} className="mt-1" />
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">PHONE</h3>
                    <div className="flex items-center gap-2">
                      <a 
                        href="tel:+5541991524276" 
                        className="avant-link"
                      >
                        +55 41 9 9152 4276
                      </a>
                      <button 
                        className="p-1 hover:text-accent-foreground"
                        onClick={() => copyToClipboard('+5541991524276', 'phone')}
                        aria-label="Copy phone"
                      >
                        {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-1" />
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">LOCATION</h3>
                    <p>Based in Brazil, open to remote work worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Linkedin size={20} className="mt-1" />
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">LINKEDIN</h3>
                    <a 
                      href="https://linkedin.com/in/nei-santos" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1"
                    >
                      <span className="avant-link">linkedin.com/in/nei-santos</span>
                      <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUpVariants}
                custom={4}
                className="pt-8"
              >
                <h3 className="mb-4 text-lg">CONNECT ON SOCIAL</h3>
                <div className="flex items-center gap-6">
                  <a 
                    href="https://behance.net/nei-santos" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="avant-link"
                  >
                    BEHANCE
                  </a>
                  <a 
                    href="https://linkedin.com/in/nei-santos" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="avant-link"
                  >
                    LINKEDIN
                  </a>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="gradient-hero blur-[60px] opacity-50">
                <div className="gradient-top"></div>
                <div className="gradient-bottom"></div>
              </div>
              
              <div className="rounded-2xl overflow-hidden fancy-border relative z-10 h-full min-h-[400px] flex flex-col justify-center items-center p-8">
                <h3 className="text-2xl md:text-3xl mb-6 text-center">
                  HAVE A PROJECT IN MIND?
                </h3>
                <p className="text-center text-lg mb-8 max-w-md">
                  I'd love to hear about your project and how we can work together to bring your ideas to life.
                </p>
                <a 
                  href="mailto:claudineiramiro@gmail.com" 
                  className="inline-block border border-foreground py-3 px-8 rounded-full hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  GET IN TOUCH
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Contact;
