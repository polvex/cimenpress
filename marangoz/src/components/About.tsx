import { motion } from "framer-motion";
import craftsmanImg from "@/assets/craftsman.png";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10 w-[85%]">
              <img 
                src={craftsmanImg} 
                alt="Master carpenter working on wood" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative block behind image */}
            <div className="absolute top-10 right-0 bottom-[-40px] w-3/4 bg-muted z-0" />
            <div className="absolute -bottom-6 left-6 z-20 bg-background p-6 border-l-2 border-primary max-w-[250px] shadow-lg">
              <p className="text-4xl font-serif text-primary mb-2">500+</p>
              <p className="text-sm text-foreground/70 font-medium uppercase tracking-wider">Tamamlanan Proje</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                Hikayemiz
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.2] mb-8">
              Atölyemizde Zaman <br className="hidden md:block"/>
              <span className="italic">Yavaş Akar</span>
            </h2>

            <div className="space-y-6 text-foreground/75 leading-relaxed">
              <p>
                Çimen Press olarak yılların deneyimini CNC teknolojisiyle birleştirdik. Geleneksel üretimin sınırlarını aşarak, bilgisayar destekli tasarım ve hassas kesim makineleriyle her projeyi bir adım öteye taşıyoruz.
              </p>
              <p>
                MDF, sunta ve laminant gibi modern malzemeleri en verimli şekilde kullanarak hem dayanıklı hem de estetik ürünler ortaya koyuyoruz. İster tek bir kapı, ister tüm bir dairenin dolap sistemi olsun; CNC makinelerimiz aynı hassasiyetle her işi tamamlar.
              </p>
              <p className="font-medium text-foreground">
                Teknoloji ve tasarımı birleştirerek yaşam alanlarınızı değiştiriyoruz.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border/60">
              <p className="font-serif text-2xl italic text-foreground/90">
                "Doğru teknoloji ve doğru malzeme ile her tasarım mümkündür."
              </p>
              <p className="mt-2 text-sm text-primary tracking-wide uppercase font-semibold">Enver Çimen, Kurucu</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
