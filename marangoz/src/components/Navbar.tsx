import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hakkımızda", href: "#about" },
    { name: "Hizmetlerimiz", href: "#services" },
    { name: "Süreç", href: "#process" },
    { name: "İletişim", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-3xl tracking-widest text-foreground z-50 relative"
        >
          Çimen Press
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-none text-sm font-medium hover:bg-primary/90 transition-colors tracking-wide"
          >
            Teklif Alın
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background pt-24 px-6 z-40 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-2xl font-serif text-left border-b border-border/50 pb-4 text-foreground/90 hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-primary text-primary-foreground px-6 py-4 rounded-none text-lg font-medium hover:bg-primary/90 transition-colors mt-4 w-full"
            >
              Teklif Alın
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
