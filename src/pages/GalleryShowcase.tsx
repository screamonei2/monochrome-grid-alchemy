import { useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GalleryShowcase = () => {
    const { id } = useParams();

    const galleryItems = {
        "allegiant": {
            title: "Allegiant, a Free Font by Nei Santos",
            category: "Typography / Font Design",
            embed: "<iframe src=\"https://www.behance.net/embed/project/51143051?ilo0=1\" height=\"316\" width=\"404\" allowfullscreen lazyload frameborder=\"0\" allow=\"clipboard-write\" refererPolicy=\"strict-origin-when-cross-origin\"></iframe>"
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <span className="avant-link">Back to Gallery</span>
                    </Link>

                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl mb-2">{galleryItems[id]?.title}</h1>
                        <p className="text-muted-foreground">{galleryItems[id]?.category}</p>
                    </div>

                    <div
                        className="w-full aspect-video bg-muted flex items-center justify-center"
                        dangerouslySetInnerHTML={{ __html: galleryItems[id]?.embed }}
                    />
                </div>
            </main>
            <Footer />
        </motion.div>
    );
};

export default GalleryShowcase;