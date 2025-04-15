
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  role: string;
  timeline: string;
  location: string;
  description: string;
  challenge: string;
  approach: string;
  results: string[];
  images: string[];
  next?: string;
  nexttitle?: string;
}

const caseStudies: Record<string, CaseStudy> = {
  "wri": {
    id: "wri",
    title: "Reimagining Global Forest Watch",
    client: "World Resources Institute",
    role: "Product Design Lead",
    timeline: "Jan 2022 — Sep 2024",
    location: "Washington, DC, US",
    description: "Global Forest Watch (GFW) is a dynamic online platform that empowers people everywhere to better manage and protect forest landscapes. The platform needed a complete redesign to better visualize complex geospatial data and improve usability across diverse user groups.",
    challenge: "GFW users range from government officials and NGOs to casual environmentalists, all with different technical abilities. The challenge was to create an interface that could present complex geospatial data in an intuitive way while catering to both advanced and basic users.",
    approach: "I led a comprehensive UX redesign focusing on real-time data visualization and intuitive navigation. Through extensive user testing across 15 countries, we identified key pain points and developed new interaction models. The project involved close collaboration with data scientists to ensure accurate representation of complex environmental metrics.",
    results: [
      "25% increase in user engagement metrics across all user segments",
      "30% improvement in data processing efficiency and visualization clarity",
      "40% reduction in processing time for bulk data uploads",
      "20% faster delivery cycles through effective cross-functional collaboration"
    ],
    images: [
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    ],
    next: "finnet",
    nexttitle: "Finnet Payment System"
  },
  "finnet": {
    id: "finnet",
    title: "Finnet Payment System",
    client: "Finnet",
    role: "Design Manager",
    timeline: "Aug 2020 - Jun 2021",
    location: "São Paulo, SP, Brazil",
    description: "Finnet, a pioneering fintech startup, needed a complete redesign of their payment processing and credit receivables platform to serve a rapidly growing client base while maintaining regulatory compliance.",
    challenge: "The existing system suffered from usability issues and couldn't scale to meet increased demand. The design needed to balance complex financial functionality with an intuitive interface while meeting strict financial regulatory requirements.",
    approach: "Leading a team of 5 designers, I implemented a user-centered design approach with extensive research involving both operators and end-users. We developed a comprehensive design system for financial tools, incorporating compliance requirements directly into the UX patterns.",
    results: [
      "25% efficiency increase in design team output through the new design system",
      "30% reduction in support issues through improved UX",
      "20% faster delivery cycles with newly implemented agile design methodology",
      "Successfully scaled the platform to handle 2x transaction volume"
    ],
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    next: "wri",
    nexttitle: "Reimagining Global Forest Watch"
  }
};

const Case = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudies[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Case study not found.</p>
        <Link to="/work" className="ml-4 underline">Back to Work</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="noise-bg"
    >
      <Header />
      <main className="pt-32 pb-24">
        <div className="avant-container">
          <Link to="/work" className="inline-flex items-center gap-2 mb-12 group">
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            <span className="avant-link">Back to Work</span>
          </Link>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="mb-16"
          >
            <motion.h1 
              variants={fadeInUpVariants}
              custom={0}
              className="text-5xl md:text-6xl mb-8 max-w-4xl"
            >
              {caseStudy.title}
            </motion.h1>
            
            <motion.div 
              variants={fadeInUpVariants}
              custom={1}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">CLIENT</h3>
                <p>{caseStudy.client}</p>
                <p className="text-sm text-muted-foreground mt-1">{caseStudy.location}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">ROLE</h3>
                <p>{caseStudy.role}</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground mb-1">TIMELINE</h3>
                <p>{caseStudy.timeline}</p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariants}
              custom={2}
              className="mb-16"
            >
              <div 
                className="w-full aspect-[21/9] bg-muted mb-4"
                style={{
                  backgroundImage: `url(${caseStudy.images[0]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(100%)'
                }}
              ></div>
              <p className="text-sm text-muted-foreground italic text-center">
                Main interface view for {caseStudy.client}
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariants}
              custom={3}
              className="max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-2xl md:text-3xl mb-6">Overview</h2>
              <p className="text-lg mb-8">{caseStudy.description}</p>
              
              <h2 className="text-2xl md:text-3xl mb-6">The Challenge</h2>
              <p className="text-lg mb-8">{caseStudy.challenge}</p>
              
              <h2 className="text-2xl md:text-3xl mb-6">The Approach</h2>
              <p className="text-lg mb-8">{caseStudy.approach}</p>
              
              <h2 className="text-2xl md:text-3xl mb-6">Results</h2>
              <ul className="list-disc pl-5 space-y-2 mb-12">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="text-lg">{result}</li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariants}
              custom={4}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
            >
              {caseStudy.images.slice(1).map((image, index) => (
                <div 
                  key={index}
                  className="aspect-[4/3] bg-muted overflow-hidden"
                >
                  <div
                    className="w-full h-full hover:scale-105 transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'grayscale(100%)'
                    }}
                  ></div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {caseStudy.next && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border-t border-border pt-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">NEXT CASE STUDY</p>
                  <h3 className="text-2xl">{caseStudy.nexttitle}</h3>
                </div>
                <Link 
                  to={`/case/${caseStudy.next}`} 
                  className="mt-4 md:mt-0 inline-flex items-center gap-2 group"
                >
                  <span className="avant-link">View Case</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Case;
