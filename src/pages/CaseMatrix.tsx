
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowUpRight, Filter, Tags } from "lucide-react";

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  year: string;
  featured?: boolean;
  methodologies?: string[];
}

const CaseMatrix = () => {
  const [selectedMethodologies, setSelectedMethodologies] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  const projects: Project[] = [
    {
      id: "wri",
      title: "Global Forest Watch Redesign",
      client: "World Resources Institute",
      category: "UI Design / Data Visualization",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      year: "2022-2024",
      featured: true,
      methodologies: ["User-Centered Design", "Design Thinking", "Data Visualization"]
    },
    {
      id: "klabin",
      title: "Loss Management Interface",
      client: "Klabin",
      category: "UX Research / UI Design",
      image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      year: "2021-2022",
      featured: true,
      methodologies: ["Lean UX", "User Testing", "Design Sprint"]
    },
    {
      id: "ambev",
      title: "AI-Driven Beer Quality App",
      client: "Ambev",
      category: "AI Design / Mobile UX",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      year: "2021",
      featured: true,
      methodologies: ["Design Sprint", "AI Workflow Design", "Rapid Prototyping"]
    },
    {
      id: "finnet",
      title: "Payment System Redesign",
      client: "Finnet",
      category: "Fintech / UX Design",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      year: "2020-2021",
      methodologies: ["Design Systems", "Financial UX", "User Research"]
    }
  ];

  const methodologies = [
    "Design Thinking",
    "Lean UX",
    "Design Sprint",
    "User-Centered Design",
    "Rapid Prototyping",
    "AI Workflow Design",
    "Data Visualization",
    "User Research",
    "User Testing",
    "Design Systems",
    "Financial UX"
  ];
  
  // Filter projects based on selected methodologies
  useEffect(() => {
    if (selectedMethodologies.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.methodologies?.some(method => 
          selectedMethodologies.includes(method)
        )
      );
      setFilteredProjects(filtered);
    }
  }, [selectedMethodologies]);
  
  // Handle methodology filter toggle
  const toggleMethodology = (methodology: string) => {
    setSelectedMethodologies(prev => {
      if (prev.includes(methodology)) {
        return prev.filter(m => m !== methodology);
      } else {
        return [...prev, methodology];
      }
    });
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedMethodologies([]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative" // Removed noise-bg class
    >
      <Header />
      <main className="pt-32 pb-24" id="work">
        <div className="avant-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24"
          >
            <div>
              <h1 className="text-5xl md:text-6xl mb-4">
                WORK
              </h1>
              <p className="text-muted-foreground max-w-md">
                A selection of my work showcasing product design, UX research methodologies,
                and data visualization projects.
              </p>
            </div>
            
            <div className="mt-8 md:mt-0 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Filter size={16} />
                  <span className="text-sm">FILTER BY METHODOLOGY</span>
                </div>
                
                {selectedMethodologies.length > 0 && (
                  <button 
                    onClick={clearFilters}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Clear ({selectedMethodologies.length})
                  </button>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {methodologies.map((methodology, index) => (
                  <button 
                    key={index}
                    onClick={() => toggleMethodology(methodology)}
                    className={`px-3 py-1 text-xs border rounded-full transition-colors ${
                      selectedMethodologies.includes(methodology) 
                        ? 'bg-foreground text-background border-foreground' 
                        : 'border-border hover:bg-accent'
                    }`}
                  >
                    {methodology}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {filteredProjects.filter(p => p.featured).length > 0 && (
            <div className="mb-20">
              <h2 className="text-2xl mb-8">FEATURED PROJECTS</h2>
              <motion.div 
                variants={staggerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              >
                {filteredProjects.filter(p => p.featured).map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="group block fancy-border"
                  >
                    <Link to={`/case/${project.id}`} className="block h-full">
                      <div className="overflow-hidden">
                        <div 
                          className="aspect-[4/3] overflow-hidden"
                          style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'grayscale(100%)'
                          }}
                        >
                          <div 
                            className="w-full h-full transition-transform duration-700 group-hover:scale-105 relative"
                            style={{
                              backgroundImage: `url(${project.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              filter: 'grayscale(100%)'
                            }}
                          >
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/50 to-transparent">
                              <span className="text-white text-sm">
                                {project.client}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl">{project.title}</h3>
                          <span className="text-sm text-muted-foreground">{project.year}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
                        
                        {project.methodologies && (
                          <div className="flex items-center gap-2 mt-4">
                            <Tags size={14} className="text-muted-foreground" />
                            <div className="flex flex-wrap gap-1">
                              {project.methodologies.slice(0, 2).map((method, idx) => (
                                <span key={idx} className="text-xs text-muted-foreground">
                                  {method}{idx < Math.min(2, project.methodologies!.length) - 1 ? "," : ""} 
                                </span>
                              ))}
                              {project.methodologies.length > 2 && (
                                <span className="text-xs text-muted-foreground">+{project.methodologies.length - 2} more</span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
          
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <h3 className="text-xl mb-2">No projects match the selected filters</h3>
              <p className="text-muted-foreground mb-4">Try selecting different methodologies or clear the filters</p>
              <button 
                onClick={clearFilters}
                className="px-4 py-2 border border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl mb-8">ALL PROJECTS</h2>
              <motion.div 
                variants={staggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 gap-10"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="border-t border-border py-6 group"
                  >
                    <Link to={`/case/${project.id}`} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <span className="md:col-span-1 text-muted-foreground">{project.year.split("-")[0]}</span>
                      <h3 className="md:col-span-3 text-xl">{project.title}</h3>
                      <p className="md:col-span-3 text-muted-foreground">{project.client}</p>
                      <p className="md:col-span-3 text-muted-foreground">{project.category}</p>
                      <div className="md:col-span-2 flex justify-end">
                        <ArrowUpRight size={18} className="opacity-50 transition-opacity group-hover:opacity-100" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
          
          <motion.div 
            className="mt-24 md:mt-32 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl mb-6">
              WANT TO SEE MORE?
            </h2>
            <a 
              href="https://behance.net/nei-santos" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg group"
            >
              <span className="avant-link">VIEW PORTFOLIO ON BEHANCE</span>
              <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default CaseMatrix;
