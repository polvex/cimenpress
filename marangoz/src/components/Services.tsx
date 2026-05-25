import { motion } from "framer-motion";
import doorClassic from "@/assets/door-classic.png";
import doorModern from "@/assets/door-modern.png";
import wardrobe from "@/assets/wardrobe.png";

export function Services() {
  const services = [
    {
      id: "doors",
      title: "CNC Kapı Modelleri",
      desc: "CNC makinelerimizle üretilen modern ve şık kapı modelleri. MDF üzerine işlenen özel desenler, laminant veya PVC kaplama seçenekleri. İç mekan kapılarında geniş model yelpazesi.",
      image: doorClassic,
      imageAlt: "CNC Kapı Modelleri",
    },
    {
      id: "wardrobes",
      title: "Şık Dolap Sistemleri",
      desc: "Sunta ve MDF tabanlı, laminant kaplamalı gömme ve bağımsız dolap sistemleri. Yatak odası gardıroplarından mutfak dolaplarına, her alana özel ölçü üretim.",
      image: wardrobe,
      imageAlt: "Modern Dolap Sistemi",
    },
    {
      id: "custom",
      title: "Özel Sipariş Üretim",
      desc: "Projenizi bizimle paylaşın, en uygun malzeme ve model seçeneklerini birlikte belirleyelim. Bireysel konutlardan kurumsal projelere kadar her ölçekte üretim kapasitesi.",
      image: doorModern,
      imageAlt: "Özel Sipariş Üretim",
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Koleksiyonumuz
            </span>
            <div className="h-[1px] w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.2] mb-6">
            Teknoloji ile Tasarımın <br />
            <span className="italic">Buluştuğu Nokta</span>
          </h2>
          <p className="text-lg text-foreground/70">
            CNC hassasiyeti ve geniş malzeme seçenekleriyle her mekana özel üretim yapıyoruz.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 aspect-[4/5] lg:aspect-auto lg:h-[600px] overflow-hidden"
                >
                  <img 
                    src={service.image} 
                    alt={service.imageAlt} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <span className="text-6xl font-serif text-border/50 block mb-6 leading-none">
                    0{index + 1}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <button 
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group flex items-center gap-4 text-sm font-semibold tracking-widest uppercase text-primary"
                  >
                    Detaylı Bilgi İste
                    <span className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all duration-300" />
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
