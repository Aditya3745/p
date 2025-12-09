import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-display font-bold mb-12 text-center text-glow">
          <span className="text-white">Selected</span> <span className="text-secondary">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card 
                className="bg-card/40 border-white/10 overflow-hidden backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-display text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                </CardContent>
                
                <CardFooter className="flex flex-wrap gap-2 pt-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <Badge key={t} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-0">
                      {t}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="outline" className="text-muted-foreground">+{project.tech.length - 3}</Badge>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-black/95 border-primary/20 max-w-3xl text-white backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-display text-primary">{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 space-y-6">
            <div className="relative aspect-video rounded-md overflow-hidden border border-white/10">
              <img 
                src={selectedProject?.image} 
                alt={selectedProject?.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              {selectedProject?.description}
            </p>
            
            <div>
              <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map((t) => (
                  <Badge key={t} className="bg-white/5 hover:bg-white/10 text-white border-primary/30">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/80 text-white gap-2">
                <ExternalLink size={16} /> Live Demo
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-white gap-2">
                <Github size={16} /> Source Code
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
