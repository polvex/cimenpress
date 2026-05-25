import { motion } from "framer-motion";
import heroImg from "@/assets/hero.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/60 sm:bg-background/40 md:bg-gradient-to-r md:from-background md:via-background/80 md:to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImg}
          alt="Carpentry workshop"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              CNC Üretim & Modern Tasarım
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] mb-8"
          >
            CNC ile <br />
            <span className="italic text-primary/90">Şekillenen</span> <br />
            Modern Yaşam
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-10 max-w-xl"
          >
            CNC makinelerimizle milimetrik hassasiyette üretilen şık kapı modelleri, MDF ve laminant dolaplar. Seri üretimin ötesinde, ölçüye özel çözümler sunuyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide hover:bg-primary/90 transition-all uppercase"
            >
              Hemen İletişime Geçin
            </button>
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-background/80 backdrop-blur border border-border text-foreground px-8 py-4 text-sm font-semibold tracking-wide hover:bg-muted transition-all uppercase"
            >
              Koleksiyonu İncele
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/60 font-medium">Keşfet</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-primary/50 relative overflow-hidden"
        >
          <motion.div 
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
