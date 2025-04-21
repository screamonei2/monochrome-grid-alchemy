import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronRight, Download, Play, X } from "lucide-react"; // Import Play and X icons

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
  process?: {
    title: string;
    description: string;
    steps: {
      name: string;
      icon?: string;
      description: string;
      details?: string[];
    }[];
  };
  outcomes?: {
    stats: { value: string; label: string }[];
  };
  results: string[];
  images: string[];
  next?: string;
  nexttitle?: string;
}

const caseStudies: Record<string, CaseStudy> = {
  "allegiant": {
    id: "allegiant",
    title: "Allegiant, a Free Font",
    client: "Personal Project",
    role: "Art Direction / Font Design",
    timeline: "2018",
    location: "São Paulo, Brazil",
    description: "ALLEGIANT is a striking, free display typeface crafted with meticulous geometric precision and infused with a vibrant, expressive personality. Designed to stand out in bold headlines, logos, and creative branding, it offers a unique blend of structured clarity and dynamic flair, making it ideal for modern design projects.",
    challenge: "The challenge was to develop a versatile display font that harmonizes the strict discipline of geometric forms with the warmth and individuality of organic expressiveness. The goal was to create a typeface that feels both contemporary and approachable, adaptable across diverse design contexts without losing its distinctive character.",
    approach: "The design process merged a systematic, grid-based construction to ensure clean lines and balanced proportions with subtle hand-drawn imperfections to inject personality and warmth. This fusion of mathematical precision and organic nuance results in a typeface that feels both structured and lively, offering designers a bold yet versatile tool for creative expression.",
    images: [
      "/allegiant/1.jpg",
      "/allegiant/2.jpg",
      "/allegiant/3.jpg",
      "/allegiant/4.jpg",
      "/allegiant/5.jpg",
      "/allegiant/6.jpg"
    ],
    results: [
      "Featured on Behance's Typography gallery",
      "Featured on Graphic Pear's Typography gallery and free download",
      "Over 50,000 downloads worldwide",
      "Used in various commercial and personal projects"
    ],
    next: "wri",
    nexttitle: "Global Forest Watch Pro"
  },
  "wri": {
    id: "wri",
    title: "Global Forest Watch Pro, a Global Forest Monitoring Platform",
    client: "World Resources Institute",
    role: "Product Design Lead",
    timeline: "Jan 2022 — Sep 2024",
    location: "Washington, DC, US",
    description: "Global Forest Watch Pro (GFW Pro) is a dynamic online platform that empowers people everywhere to better manage and protect forest landscapes. The platform needed a complete redesign to better visualize complex geospatial data and improve usability across diverse user groups.",
    challenge: "Users needed to monitor farms, commodities, deforestation, and restoration across multiple locations. The existing options allowed only CSV uploads of up to 1,000 locations, representing over 100,000 objects, like large cooperatives and farmers.",
    approach: "I led a comprehensive UX redesign focusing on real-time data visualization and intuitive navigation. Through a 5-day design sprint, we identified key pain points and developed new interaction models that simplified the process for handling large-scale location data uploads.",
    process: {
      title: "Design Sprint",
      description: "To address the challenges and enhance the user experience, the team adopted the Design Sprint methodology. This structured approach allowed for rapid ideation, prototyping, and testing within a short timeframe.",
      steps: [
        {
          name: "Map",
          icon: "map",
          description: "Conducted user research to identify needs and set clear project goals",
          details: [
            "Conducted user research to identify needs",
            "Set up map points related to large-scale location data uploads",
            "Interviewed relevant stakeholders to define the problem and set clear project goals"
          ]
        },
        {
          name: "Sketch",
          icon: "sketch",
          description: "Sketched potential solutions for simplifying the upload process",
          details: [
            "Sketched potential solutions for simplifying the upload process",
            "Considered various data input methods: CSV uploads, polygon drawing, and manual coordinate entry"
          ]
        },
        {
          name: "Decide",
          icon: "decide",
          description: "Selected the most feasible and impactful design ideas",
          details: [
            "Reviewed and selected the most feasible and impactful design ideas",
            "Mapped out a cohesive workflow for the unified interface"
          ]
        },
        {
          name: "Prototype",
          icon: "prototype",
          description: "Developed a low-fidelity prototype of the unified upload interface",
          details: [
            "Developed a low-fidelity prototype of the unified upload interface",
            "Ensured the prototype could handle large-scale data uploads and provide an intuitive user experience"
          ]
        },
        {
          name: "Test",
          icon: "test",
          description: "Conducted usability tests with real users to gather feedback",
          details: [
            "Conducted usability tests with real users to gather feedback",
            "Identified and addressed design issues to meet user needs effectively"
          ]
        }
      ]
    },
    outcomes: {
      stats: [
        { value: "45%", label: "Reduced user effort" },
        { value: "38%", label: "Increased user satisfaction" },
        { value: "63%", label: "Reduced upload time" }
      ]
    },
    results: [
      "25% increase in user engagement metrics across all user segments",
      "30% improvement in data processing efficiency and visualization clarity",
      "40% reduction in processing time for bulk data uploads",
      "20% faster delivery cycles through effective cross-functional collaboration"
    ],
    images: [
      "../world-resources-institute-global-forest-watch-pro.png",
      "../global-forest-watch-pro-2.png",
      "../global-forest-watch-pro-1.png"
    ],
    next: "finnet",
    nexttitle: "Antecipag, a Receivables Anticipation System"
  },
  "finnet": {
    id: "finnet",
    title: "Antecipag, a Receivables Anticipation System",
    client: "Finnet",
    role: "Design Manager",
    timeline: "Aug 2020 - Jun 2021",
    location: "São Paulo, SP, Brazil",
    description: "Finnet, a pioneering fintech startup, needed a complete redesign of their payment processing and credit receivables platform to serve a rapidly growing client base while maintaining regulatory compliance. The Anticipcip project focused on creating a receivables anticipation tool that enables businesses to access future credit with control, improving their cash flow and financial flexibility.",
    challenge: "Businesses required an efficient solution for anticipating credit receivables to improve cash flow. The existing processes were complex, time-consuming, and lacking in transparency, challenging for users unfamiliar with financial systems. The system suffered from significant usability issues and couldn't scale to meet increased demand.",
    approach: "Leading a team of 5 designers, I implemented a user-centered Lean UX process with extensive research involving both operators and end-users. We developed a comprehensive design system for financial tools, focusing on simplifying the receivables anticipation process and incorporating compliance requirements directly into the UX patterns.",
    process: {
      title: "Lean UX Process",
      description: "To address complexity in financial transactions and create an intuitive experience, we implemented a Lean UX process to rapidly ideate, prototype, and validate solutions through iterative cycles. This approach allowed us to gather continuous feedback and make incremental improvements.",
      steps: [
        {
          name: "Empathy",
          icon: "empathy",
          description: "Created empathy maps to understand user needs and pain points",
          details: [
            "Identified key user frustrations with financial system complexity",
            "Recognized that speed of accessing receivables was crucial for users",
            "Discovered users needed better transparency throughout the process"
          ]
        },
        {
          name: "Journey",
          icon: "journey",
          description: "Mapped the user journey to identify critical touchpoints",
          details: [
            "Analyzed onboarding, receivables exploration, and transaction processes",
            "Documented user pain points at each journey stage",
            "Identified opportunities for experience improvement"
          ]
        },
        {
          name: "Hypothesize",
          icon: "hypothesize",
          description: "Generated design hypotheses based on user insights",
          details: [
            "Formulated hypothesis that simplifying selection flow would improve experience",
            "Developed validation metrics to measure impact of design changes",
            "Prioritized design assumptions to address most critical user needs"
          ]
        },
        {
          name: "Prototype",
          icon: "prototype",
          description: "Developed interactive prototypes to test core functionality",
          details: [
            "Created clickable prototypes simulating the main transaction flow",
            "Limited design complexity to focus on functional testing",
            "Built a three-step process: select receivables, choose amount, confirm"
          ]
        },
        {
          name: "Test",
          icon: "test",
          description: "Validated solutions with real users and gathered feedback",
          details: [
            "Conducted usability tests with small to medium business owners",
            "Observed user interactions with the prototype workflow",
            "Collected actionable feedback for design iterations"
          ]
        }
      ]
    },
    outcomes: {
      stats: [
        { value: "30%", label: "Reduced transaction time" },
        { value: "45%", label: "Increased user satisfaction" },
        { value: "50%", label: "Reduced support inquiries" }
      ]
    },
    results: [
      "30% reduction in transaction time through simplified receivables selection flow",
      "45% increase in user satisfaction ratings through improved interface clarity",
      "50% reduction in support inquiries related to the anticipation process",
      "25% efficiency increase in design team output through the new design system",
      "Successfully scaled the platform to handle 2x transaction volume"
    ],
    images: [
      "../antecipag-1.png",
      "../finnet-antecipag.png",
      "../antecipag-2.png"
      
    ],
    next: "wri",
    nexttitle: "Global Forest Watch Pro, a Global Forest Monitoring Platform"
  }
};

const CaseStudyPage = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudies[id] : null;
  const [activeSection, setActiveSection] = useState("overview");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [prototypeUrl, setPrototypeUrl] = useState<string | null>(null); // State for prototype URL

  // Function to open the modal with a specific URL
  const openModal = (url: string) => {
    setPrototypeUrl(url);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setPrototypeUrl(null); // Reset URL on close
  };

  // Sections for sidebar navigation
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "approach", label: "Approach" },
    { id: "process", label: "Process", hidden: !caseStudy?.process },
    { id: "outcomes", label: "Outcomes", hidden: !caseStudy?.outcomes },
    { id: "results", label: "Results" },
    { id: "gallery", label: "Gallery" }
  ].filter(section => !section.hidden);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sectionElements = sections.map(section => {
        const element = document.getElementById(section.id);
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        return {
          id: section.id,
          top: rect.top,
          bottom: rect.bottom
        };
      }).filter(Boolean);

      const currentSection = sectionElements.find(section =>
        section.top <= 100 && section.bottom > 100
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling, sections]);

  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    setActiveSection(sectionId);

    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const yOffset = -80; // Adjust based on your header height
      const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      setTimeout(() => setIsScrolling(false), 800);
    } else {
      setIsScrolling(false);
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
        <div className="avant-container relative">
          <div className="flex items-center justify-between mb-12">
            <Link to="/work" className="inline-flex items-center gap-2 group">
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              <span className="avant-link">Back to Work</span>
            </Link>

            {caseStudy && caseStudy.id === 'allegiant' && (
              <a
                href="https://www.graphicpear.com/allegiant-typeface/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                <Download size={16} />
                <span>Free Download</span>
              </a>
            )}
            {/* Add Prototype Button for WRI case */} 
            {caseStudy && caseStudy.id === 'wri' && (
              <button
                onClick={() => openModal('https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbFAR1MB90d6kNQP8phXEcb%2F%25F0%259F%2594%2584-WIP--Work-in-Progress-%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26node-id%3D465-3426%26page-id%3D13%253A84561%26scaling%3Dscale-down-width%26starting-point-node-id%3D465%253A3426%26embed-host%3Dshare')}
                className="inline-flex items-center gap-2 border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                <Play size={16} />
                <span>Open Prototype</span>
              </button>
            )}
            {/* Add Prototype Button for Finnet case */} 
            {caseStudy && caseStudy.id === 'finnet' && (
              <button
                onClick={() => openModal('https://xd.adobe.com/embed/8a6ee4a7-a416-4b2b-a996-625b4941426c-df3d/')}
                className="inline-flex items-center gap-2 border border-foreground px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                <Play size={16} />
                <span>Open Prototype</span>
              </button>
            )}
          </div>


          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-32">
                <div className="border-l border-border pl-4 mb-8">
                  <h2 className="text-lg font-medium mb-2">Case Study</h2>
                  <p className="text-sm text-muted-foreground">{caseStudy.client}</p>
                </div>

                <nav className="border-l border-border">
                  <ul className="space-y-2">
                    {sections.map(section => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-center pl-4 py-1 w-full text-left text-sm transition-colors relative ${activeSection === section.id
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-primary"
                            }`}
                        >
                          {activeSection === section.id && (
                            <motion.span
                              layoutId="activeSection"
                              className="absolute left-0 w-[2px] h-5 bg-primary"
                            />
                          )}
                          {section.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-8 border-l border-border pl-4">
                  <h3 className="text-sm text-muted-foreground mb-1">CLIENT</h3>
                  <p className="text-sm mb-4">{caseStudy.client}</p>

                  <h3 className="text-sm text-muted-foreground mb-1">ROLE</h3>
                  <p className="text-sm mb-4">{caseStudy.role}</p>

                  <h3 className="text-sm text-muted-foreground mb-1">TIMELINE</h3>
                  <p className="text-sm mb-4">{caseStudy.timeline}</p>

                  <h3 className="text-sm text-muted-foreground mb-1">LOCATION</h3>
                  <p className="text-sm">{caseStudy.location}</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainerVariants}
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                variants={fadeInUpVariants}
                custom={0}
                className="text-5xl md:text-6xl mb-12 max-w-4xl"
              >
                {caseStudy.title}
              </motion.h1>

              <motion.div
                variants={fadeInUpVariants}
                custom={1}
                className="mb-16"
              >
                <div
                  className="w-full aspect-[21/9] bg-muted mb-4 overflow-hidden"
                  style={{
                    backgroundImage: `url(${caseStudy.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <p className="text-sm text-muted-foreground italic text-center">
                  Main interface view for {caseStudy.client}
                </p>
              </motion.div>

              <section id="overview" className="scroll-mt-24 mb-16">
                <motion.h2
                  variants={fadeInUpVariants}
                  custom={2}
                  className="text-3xl mb-6 font-medium"
                >
                  Overview
                </motion.h2>
                <motion.p
                  variants={fadeInUpVariants}
                  custom={3}
                  className="text-lg leading-relaxed"
                >
                  {caseStudy.description}
                </motion.p>
              </section>

              <section id="challenge" className="scroll-mt-24 mb-16">
                <motion.h2
                  variants={fadeInUpVariants}
                  custom={4}
                  className="text-3xl mb-6 font-medium"
                >
                  Challenge
                </motion.h2>
                <motion.p
                  variants={fadeInUpVariants}
                  custom={5}
                  className="text-lg leading-relaxed"
                >
                  {caseStudy.challenge}
                </motion.p>
              </section>

              <section id="approach" className="scroll-mt-24 mb-16">
                <motion.h2
                  variants={fadeInUpVariants}
                  custom={6}
                  className="text-3xl mb-6 font-medium"
                >
                  Approach
                </motion.h2>
                <motion.p
                  variants={fadeInUpVariants}
                  custom={7}
                  className="text-lg leading-relaxed"
                >
                  {caseStudy.approach}
                </motion.p>
              </section>

              {caseStudy.process && (
                <section id="process" className="scroll-mt-24 mb-16">
                  <motion.h2
                    variants={fadeInUpVariants}
                    custom={8}
                    className="text-3xl mb-6 font-medium"
                  >
                    Process
                  </motion.h2>

                  <motion.div
                    variants={fadeInUpVariants}
                    custom={9}
                    className="mb-12"
                  >
                    <h3 className="text-2xl mb-4">{caseStudy.process.title}</h3>
                    <p className="text-lg mb-8 leading-relaxed">{caseStudy.process.description}</p>

                    <div className="bg-muted/20 p-6 border border-border mb-8">
                      <div className="flex items-center justify-between mb-6">
                        {caseStudy.process.steps.map((step, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-2">
                              <span className="font-medium">{index + 1}</span>
                            </div>
                            <span className="text-sm">{step.name}</span>
                          </div>
                        ))}
                      </div>
                      <div className="h-1 bg-border w-full relative mb-6">
                        <div className="absolute top-0 left-0 h-1 bg-primary w-full"></div>
                      </div>
                      <p className="text-sm text-center text-muted-foreground">
                        {caseStudy.id === "wri" ? "5 days session" : "Lean UX cycle"}
                      </p>
                    </div>

                    <div className="space-y-12">
                      {caseStudy.process.steps.map((step, index) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-6">
                          <div className="shrink-0 sm:w-48">
                            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-2">
                              <span className="font-medium">{index + 1}</span>
                            </div>
                            <h4 className="text-xl font-medium mb-1">{step.name}</h4>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                          </div>

                          <div className="flex-1 bg-muted/20 p-6 border border-border">
                            <ul className="space-y-2">
                              {step.details?.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start gap-2">
                                  <ChevronRight size={18} className="shrink-0 mt-1 text-primary" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </section>
              )}

              {caseStudy.outcomes && (
                <section id="outcomes" className="scroll-mt-24 mb-16">
                  <motion.h2
                    variants={fadeInUpVariants}
                    custom={10}
                    className="text-3xl mb-8 font-medium"
                  >
                    Outcomes
                  </motion.h2>

                  <motion.div
                    variants={fadeInUpVariants}
                    custom={11}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                  >
                    {caseStudy.outcomes.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="bg-muted/20 p-6 border border-border text-center"
                      >
                        <h3 className="text-4xl font-medium mb-2">{stat.value}</h3>
                        <p className="text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </motion.div>
                </section>
              )}

              <section id="results" className="scroll-mt-24 mb-16">
                <motion.h2
                  variants={fadeInUpVariants}
                  custom={12}
                  className="text-3xl mb-6 font-medium"
                >
                  Results
                </motion.h2>

                <motion.ul
                  variants={fadeInUpVariants}
                  custom={13}
                  className="space-y-4 mb-12"
                >
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="text-xs font-medium">{index + 1}</span>
                      </div>
                      <p className="text-lg">{result}</p>
                    </li>
                  ))}
                </motion.ul>
              </section>

              <section id="gallery" className="scroll-mt-24 mb-16">
                <motion.h2
                  variants={fadeInUpVariants}
                  custom={14}
                  className="text-3xl mb-8 font-medium"
                >
                  Gallery
                </motion.h2>

                <motion.div
                  variants={fadeInUpVariants}
                  custom={15}
                  className="grid grid-cols-1 gap-8"
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
                          backgroundPosition: 'center'
                        }}
                      ></div>
                    </div>
                  ))}
                </motion.div>
              </section>
            </motion.div>
          </div>

          {caseStudy.next && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border-t border-border pt-12 mt-16"
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

      {/* Modal for Prototype */} 
      <AnimatePresence>
        {isModalOpen && prototypeUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4"
            onClick={closeModal} // Close modal on backdrop click
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background overflow-hidden w-full max-w-6xl h-[90vh] relative shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10 bg-background/50 p-1"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <iframe
                className="w-full h-full border-0"
                src={prototypeUrl} // Use the dynamic prototype URL
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CaseStudyPage;