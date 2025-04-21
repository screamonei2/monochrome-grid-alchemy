
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useEffect } from "react";
import { pageTitles } from "./config/pageTitles";
import Index from "./pages/Index";
import CaseMatrix from "./pages/CaseMatrix";
import Case from "./pages/Case";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import GalleryShowcase from "./pages/GalleryShowcase";

const queryClient = new QueryClient();

const App = () => {
  const LocationWrapper = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    
    useEffect(() => {
      const path = location.pathname;
      let title = "NS/PD";
      
      if (path.startsWith("/case/") && pageTitles["/case/:id"]) {
        const id = path.split("/")[2];
        title = pageTitles["/case/:id"](id);
      } else if (path.startsWith("/gallery/") && pageTitles["/gallery/:id"]) {
        const id = path.split("/")[2];
        title = pageTitles["/gallery/:id"](id);
      } else if (pageTitles[path]) {
        title = typeof pageTitles[path] === 'function' 
          ? pageTitles[path](params) 
          : pageTitles[path];
      } else if (pageTitles["*"]) {
        title = pageTitles["*"];
      }
      
      document.title = title;
    }, [location]);
    
    return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/work" element={<CaseMatrix />} />
        <Route path="/case/:id" element={<Case />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/gallery/:id" element={<GalleryShowcase />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <LocationWrapper />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
