import { motion } from "framer-motion";
import { galleryImages } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Gallery() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-display font-bold mb-4 text-glow">
          <span className="text-white">Visual</span> <span className="text-accent">Playground</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of digital art, setups, and aesthetic inspirations. Hover to interact.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
            className="relative group"
          >
            <Card className="overflow-hidden border-0 bg-transparent relative aspect-[4/5] md:aspect-square">
              {/* Neon Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 z-20 pointer-events-none rounded-xl box-glow" />
              
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <Badge className="self-start mb-2 bg-secondary text-black font-bold border-0">
                  {image.category}
                </Badge>
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {image.title}
                </h3>
              </div>
              
              {/* Glitch Overlay Effect */}
              <div className="absolute inset-0 bg-primary/20 mix-blend-color-dodge opacity-0 group-hover:opacity-20 transition-opacity duration-100 pointer-events-none" />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
