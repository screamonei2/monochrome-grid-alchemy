
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const CV = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

  const skills = {
    strategy: [
      "Team Management",
      "Product Management",
      "Innovation",
      "UX Strategy",
      "Stakeholder Communication"
    ],
    technical: [
      "Design Thinking",
      "User-Centered Design",
      "User Research & Testing",
      "Generative AI",
      "AI Automation",
      "Multi-Agent AI Design",
      "Voice Interaction Design",
      "Financial Visualization",
      "Visual Communication",
      "Real-Time UX",
      "Design Systems",
      "Agile",
      "SaaS Development",
      "Prototyping",
      "Front-End Development",
      "Mobile & Web Design",
      "Inclusive Design",
      "Credit Platform Design",
      "Compliance-Driven UX"
    ],
    tools: [
      "Figma (Auto-Layout, Components, Prototyping)",
      "Framer",
      "Webflow",
      "n8n",
      "Jira",
      "Miro",
      "NodeJS",
      "React",
      "Svelte",
      "Vue",
      "Tailwind",
      "GIT",
      "VSCode",
      "Linear",
      "Origami"
    ]
  };

  const experience = [
    {
      title: "Product Design Lead",
      company: "World Resources Institute",
      location: "Washington, DC, US",
      period: "Jan 2022 — Sep 2024",
      description: "Global NGO driving sustainability research and solutions.",
      accomplishments: [
        "Align UX strategies with global goals, boosting engagement by 25%.",
        "Redesign GFW UI with real-time data visualizations, upping efficiency 30%.",
        "Create scalable B2B upload tools, cutting processing time by 40%.",
        "Lead cross-functional teams, speeding delivery by 20% with user insights."
      ],
      linkText: "VIEW CASE",
      link: "/case/wri"
    },
    {
      title: "Senior Product Designer",
      company: "Klabin",
      location: "PR, Brazil",
      period: "Oct 2021 — Nov 2022",
      description: "Top LATAM pulp/paper firm with innovative eco-solutions.",
      accomplishments: [
        "Redesign loss management UI, increasing adoption by 35% via user testing.",
        "Conduct user research with operators, achieving 100% aligned UX design.",
        "Optimize workflows with Lean UX, reducing errors by 15%.",
        "Accelerate design cycles by 25% in fast-paced agile sprints."
      ]
    },
    {
      title: "Senior Product Designer",
      company: "Ambev",
      location: "São Paulo, SP, Brazil",
      period: "Mar 2021 - Oct 2021",
      description: "Global beer leader in AB InBev, scaling beverage tech.",
      accomplishments: [
        "Design AI-driven beer app with user testing, boosting accuracy 50%.",
        "Lead 5-day sprint, shipping prototype with 20% higher satisfaction.",
        "Streamline UX with real-time flows, cutting task time by 30%.",
        "Integrate scalable app design across 10+ teams with modern branding."
      ]
    },
    {
      title: "Design Manager",
      company: "Finnet",
      location: "São Paulo, SP, Brazil",
      period: "Aug 2020 - Jun 2021",
      description: "Fintech pioneer in payment and credit receivables solutions.",
      accomplishments: [
        "Mentor 5+ designers, enhancing fintech UX and supporting hiring initiatives.",
        "Design scalable payment system with compliance, speeding delivery 20%.",
        "Optimize credit receivables UX with user research, cutting issues 30%.",
        "Build design system for financial tools, boosting efficiency 25%."
      ],
      linkText: "VIEW CASE",
      link: "/case/finnet"
    }
  ];

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
          <div className="flex items-center justify-between mb-12">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              <span className="avant-link">Back to Home</span>
            </Link>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 border border-foreground px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>
          </div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              variants={fadeInUpVariants}
              custom={0}
              className="mb-12"
            >
              <h1 className="text-5xl mb-6">CLAUDINEI SANTOS</h1>
              <h2 className="text-2xl mb-4">PRODUCT DESIGN LEAD</h2>
              <p className="text-lg max-w-2xl">
                Design Specialist with over 20 Years.
                I craft UX/UI for fintech and AI, blending design and data visualization.
                I lead agile teams, driving rapid iteration and modern branding in startups.
                I design AI solutions and workflows, optimizing user research.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariants}
              custom={1}
              className="mb-16"
            >
              <h2 className="text-2xl mb-6 pb-2 border-b border-border">EXPERIENCE</h2>
              
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-3">
                      <p className="text-muted-foreground">{job.period}</p>
                    </div>
                    <div className="md:col-span-9">
                      <h3 className="text-xl mb-1">{job.title}</h3>
                      <div className="mb-2">
                        <span className="text-lg">{job.company}</span>
                        <span className="text-sm text-muted-foreground ml-2">— {job.location}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      <ul className="list-disc pl-5 space-y-2 mb-4">
                        {job.accomplishments.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      
                      {job.link && (
                        <Link 
                          to={job.link}
                          className="inline-flex items-center gap-1 text-sm avant-link mt-2"
                        >
                          {job.linkText}
                          <ArrowLeft size={14} className="rotate-180" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariants}
              custom={2}
              className="mb-16"
            >
              <h2 className="text-2xl mb-6 pb-2 border-b border-border">SKILLS</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl mb-4">STRATEGY & LEADERSHIP</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.strategy.map((skill, index) => (
                      <span key={index} className="px-3 py-1 border border-border rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl mb-4">TECHNICAL</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.technical.map((skill, index) => (
                      <span key={index} className="px-3 py-1 border border-border rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl mb-4">TOOLS</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <span key={index} className="px-3 py-1 border border-border rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariants}
              custom={3}
              className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h2 className="text-2xl mb-6 pb-2 border-b border-border">EDUCATION</h2>
                <h3 className="text-xl mb-1">Information Systems (BSIS)</h3>
                <p>SPEI University</p>
              </div>
              
              <div>
                <h2 className="text-2xl mb-6 pb-2 border-b border-border">LANGUAGES</h2>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl mb-1">English</h3>
                    <p>Fluent (C2)</p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Portuguese</h3>
                    <p>Native</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default CV;
