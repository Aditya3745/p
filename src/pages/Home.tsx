import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalDetails } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";

export default function Home() {
  // Generate stable positions for floating elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: (i * 37) % 100, // Pseudo-random but stable
      top: (i * 23) % 100,
      duration: 10 + (i % 10),
      delay: (i * 0.3) % 5,
    }));
  }, []);

  return (
    <div className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-950/20 to-background" />
        
        {/* Animated Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
        
        {/* Floating Code-like Elements */}
        <div className="absolute inset-0">
          {floatingElements.map((el) => (
            <div
              key={el.id}
              className="absolute text-primary/10 font-mono text-xs"
              style={{
                left: `${el.left}%`,
                top: `${el.top}%`,
                animation: `float ${el.duration}s ease-in-out infinite`,
                animationDelay: `${el.delay}s`,
              }}
            >
              {'<>'}
            </div>
          ))}
        </div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-secondary font-mono tracking-widest mb-4 text-sm md:text-base uppercase font-bold text-glow">
              Building Digital Dreams
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tighter leading-tight drop-shadow-2xl">
              <span className="text-white glitch-effect" data-text={personalDetails.name}>
                {personalDetails.name}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-4xl text-gray-200 mb-8 font-light drop-shadow-lg">
              {personalDetails.title}
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <Link href="/projects">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80 text-white font-bold tracking-wide rounded-none border border-primary/50 box-glow transition-all duration-300 hover:scale-105"
              >
                View Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary font-bold tracking-wide rounded-none box-glow-secondary transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
