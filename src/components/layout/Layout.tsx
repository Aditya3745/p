import { ReactNode } from "react";
import Navbar from "./Navbar";
import CustomCursor from "./CustomCursor";
import NoiseOverlay from "./NoiseOverlay";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
      <CustomCursor />
      <NoiseOverlay />
      <Navbar />
      
      <main className="pt-20 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "anticipate" }}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-20">
        <p>© {new Date().getFullYear()} Aditya Mohan. Built with React & Three.js</p>
      </footer>
    </div>
  );
}
