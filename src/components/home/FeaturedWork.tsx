
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
  slug: string;
}

export function FeaturedWork() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Global Forest Watch Pro, a WRI Product",
      category: "UX Research / Product Design",
      image: "../world-resources-institute-global-forest-watch-pro.png",
      year: "2022 - 2024",
      slug: "wri"
    },
    {
      id: 2,
      title: "Antecipag, a Finnet Product",
      category: "UX Research / Team Leadership",
      image: "../finnet-antecipag.png",
      year: "2020 - 2021",
      slug: "finnet"
    }/* ,
    {
      id: 3,
      title: "Allegiant, a Free Font by Nei Santos",
      category: "Art Direction / Font Design",
      image: "../allegiant-a-free-font-by-nei-santos.png",
      year: "2018"
    },
    {
      id: 4,
      title: "GraphixTV, Brand Study Case",
      category: "Art Direction / Brand Identity",
      image: "../graphixtv-brand-study-case.png",
      year: "2017"
    } */
  ];

  return (
    <section id="work" className="py-24 md:py-32" ref={containerRef}>
      <div className="avant-container">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-md mt-4 md:mt-0">
            Exploring the intersection of design, technology, and art through unconventional digital experiences.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-10 md:gap-16"
          style={{ y }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link 
                to={`/case/${project.slug}`} 
                className="group block"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
                  <div className="md:col-span-7">
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
                  </div>
                  <div className="md:col-span-5 flex flex-col">
                    <div className="mb-auto flex items-start justify-between">
                      <span className="text-sm text-muted-foreground">{project.category}</span>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex items-center justify-between">
                      <h3 className="text-2xl md:text-3xl font-medium tracking-tight">{project.title}</h3>
                      <div className="w-10 h-10 flex items-center justify-center border border-muted transition-all duration-300 group-hover:border-foreground">
                        <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link 
            to="/work" 
            className="inline-flex items-center gap-2 text-lg md:text-xl hover:opacity-70 transition-opacity duration-300 group"
          >
            <span className="avant-link">View All Projects</span>
            <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
