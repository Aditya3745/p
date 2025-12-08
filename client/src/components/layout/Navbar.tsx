import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-display font-bold tracking-wider text-white relative group cursor-pointer block">
            ADITYA<span className="text-primary">.DEV</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                className={`font-sans text-sm uppercase tracking-widest hover:text-primary transition-colors relative cursor-pointer ${
                  location === link.href ? "text-primary" : "text-gray-400"
                }`}
              >
                {link.name}
                {location === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary shadow-[0_0_10px_var(--color-primary)]"
                  />
                )}
              </span>
            </Link>
          ))}
          {/* Easter Egg Link - Hidden in plain sight/Subtle */}
          <Link href="/secret">
            <span 
              className="text-xs font-mono text-muted-foreground/30 hover:text-accent cursor-pointer transition-colors"
              title="???"
            >
              π
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-border"
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span
                onClick={() => setIsOpen(false)}
                className={`text-lg font-display tracking-widest cursor-pointer ${
                  location === link.href ? "text-primary" : "text-gray-400"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Link href="/secret">
             <span onClick={() => setIsOpen(false)} className="text-sm font-mono text-muted-foreground mt-4 cursor-pointer">
               Discover Secret
             </span>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
