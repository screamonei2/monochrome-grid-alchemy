
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowUpRight, Plus } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  featured?: boolean;
}

const Work = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Monochrome Elegance",
      category: "UI Design / Development",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      year: "2024",
      featured: true
    },
    {
      id: 2,
      title: "Architectural Perspectives",
      category: "Brand Identity / Web Design",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      year: "2023",
      featured: true
    },
    {
      id: 3,
      title: "Minimalist Contrast",
      category: "Art Direction / Photography",
      image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      year: "2023",
      featured: true
    },
    {
      id: 4,
      title: "Brutalist Typography",
      category: "Web Design / Development",
      image: "https://images.unsplash.com/photo-1507149214576-19e82e31f2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      year: "2023"
    },
    {
      id: 5,
      title: "Negative Space",
      category: "Brand Identity / Print",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      year: "2022"
    },
    {
      id: 6,
      title: "Geometric Forms",
      category: "UI Design / Art Direction",
      image: "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
      year: "2022"
    }
  ];

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
      className="noise-bg"
    >
      <Header />
      <main className="pt-32 pb-24">
        <div className="avant-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24"
          >
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight">
              Our Work
            </h1>
            <p className="text-muted-foreground max-w-md mt-4 md:mt-0">
              A collection of our selected projects, showcasing our experimental approach to design and digital experiences.
            </p>
          </motion.div>

          <div className="mb-20">
            <h2 className="text-2xl font-medium tracking-tight mb-8">Cases</h2>
            <motion.div 
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            >
              {projects.filter(p => p.featured).map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group block"
                >
                  <Link to={`/`} className="block">
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
                          className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                          style={{
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'grayscale(100%)'
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-medium">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div>
            <h2 className="text-2xl font-medium tracking-tight mb-8">All Projects</h2>
            <motion.div 
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 gap-10"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="border-t border-border py-6 group"
                >
                  <Link to="/" className="block">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <span className="md:col-span-1 text-muted-foreground">{project.year}</span>
                      <h3 className="md:col-span-4 text-xl font-medium">{project.title}</h3>
                      <p className="md:col-span-5 text-muted-foreground">{project.category}</p>
                      <div className="md:col-span-2 flex justify-end">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-muted transition-all duration-300 group-hover:border-foreground">
                          <Plus size={18} className="rotate-0 transition-transform duration-300 group-hover:rotate-90" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-24 md:mt-32 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
              Interested in working with us?
            </h2>
            <a 
              href="mailto:hello@studioavant.com" 
              className="inline-flex items-center gap-2 text-lg hover:opacity-70 transition-opacity duration-300 group"
            >
              <span className="avant-link">Get in touch</span>
              <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Work;
