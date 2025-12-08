import { motion } from "framer-motion";
import { personalDetails } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TorusKnot } from "@react-three/drei";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function ContactShape() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#FF0055" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#00F0FF" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      <TorusKnot args={[1, 0.3, 100, 16]} scale={1.5}>
         <meshStandardMaterial 
            color="#2b2b2b" 
            roughness={0.1} 
            metalness={0.8}
            emissive="#B026FF"
            emissiveIntensity={0.2}
            wireframe
         />
      </TorusKnot>
    </Canvas>
  );
}

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side: Contact Info & Form */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4 text-white text-glow">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-card/30 border-white/5 p-4 flex items-center gap-4 hover:border-primary/30 transition-colors">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="text-sm font-mono text-white">{personalDetails.email}</p>
              </div>
            </Card>
            
            <Card className="bg-card/30 border-white/5 p-4 flex items-center gap-4 hover:border-secondary/30 transition-colors">
              <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                <p className="text-sm font-mono text-white">{personalDetails.contact}</p>
              </div>
            </Card>
          </div>

          <Card className="bg-black/40 border-white/10 backdrop-blur-md p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Cyber Punk" 
                          {...field} 
                          className="bg-white/5 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-white" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="punk@cyber.net" 
                          {...field} 
                          className="bg-white/5 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-white" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          {...field} 
                          className="bg-white/5 border-white/10 focus:border-primary focus:ring-1 focus:ring-primary text-white min-h-[120px]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold tracking-wide"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </Card>
        </div>

        {/* Right Side: 3D Element */}
        <div className="h-[400px] lg:h-[600px] w-full relative">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10 pointer-events-none" />
           <ContactShape />
        </div>
      </motion.div>
    </div>
  );
}
