import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/3d/HeroScene";
import { personalDetails } from "@/data/portfolio";
import { ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="relative h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <HeroScene />

      {/* Content Overlay */}
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-secondary font-mono tracking-widest mb-4 text-sm md:text-base uppercase">
              Hello World, I am
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 text-glow tracking-tighter leading-tight">
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
            <h3 className="text-2xl md:text-4xl text-muted-foreground mb-8 font-light">
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
                className="border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary font-bold tracking-wide rounded-none box-glow-secondary transition-all duration-300 hover:scale-105"
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
