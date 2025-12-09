import { motion } from "framer-motion";
import { skills, education, experience, personalDetails } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Code, User } from "lucide-react";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-16"
      >
        {/* Profile Section */}
        <motion.section variants={item} className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
           <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 z-10 box-glow group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={personalDetails.avatar} 
                  alt={personalDetails.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Glitch Overlay */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 opacity-0 group-hover:opacity-100 animate-ping z-0" />
           </div>

           <div className="flex-1 space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary text-glow flex items-center justify-center md:justify-start gap-3">
                <User className="w-8 h-8" /> About Me
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-secondary pl-6 bg-secondary/5 py-2 rounded-r-lg">
                  {personalDetails.bio}
                </p>
              </div>
           </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section variants={item}>
          <div className="flex items-center gap-4 mb-8">
            <Code className="text-accent h-8 w-8" />
            <h3 className="text-2xl font-display font-bold text-white">Tech Arsenal</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-card/50 p-4 border border-white/5 rounded-none hover:border-accent/50 transition-colors"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-white">{skill.name}</span>
                  <span className="text-accent">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary/10 w-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.section variants={item}>
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="text-secondary h-8 w-8" />
              <h3 className="text-2xl font-display font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-8 border-l border-white/10 ml-3 pl-8 relative">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-secondary border-4 border-background" />
                  <Card className="bg-card/30 border-white/5 hover:border-secondary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">{exp.role}</CardTitle>
                      <div className="text-sm text-secondary font-mono">{exp.company} | {exp.year}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={item}>
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-primary h-8 w-8" />
              <h3 className="text-2xl font-display font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-8 border-l border-white/10 ml-3 pl-8 relative">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background" />
                  <Card className="bg-card/30 border-white/5 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg text-white">{edu.degree}</CardTitle>
                      <div className="text-sm text-primary font-mono">{edu.institution} | {edu.year}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
