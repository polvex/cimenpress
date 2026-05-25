import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Yeni evimizin kapıları için Çimen Press ile çalıştık. İşçilikteki özen ve ahşabın kokusu evi bir anda yuvaya dönüştürdü. Her misafirimiz kapıları soruyor.",
      author: "Elif & Can Y.",
      role: "Ev Sahibi",
    },
    {
      quote: "Mimarlık ofisi olarak projelerimizde her zaman güvenle tercih ediyoruz. Verilen ölçülere milimetrik uyum ve zamanında teslimat harika.",
      author: "Kerem A.",
      role: "İç Mimar",
    },
    {
      quote: "Tüm dairenin dolap sistemini Çimen Press'e yaptırdık. CNC kesimin hassasiyeti sayesinde her köşe tastamam oturdu, ölçü hatası sıfır.",
      author: "Ayşe B.",
      role: "Müşteri",
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Müşteri Deneyimleri
            </span>
            <div className="h-[1px] w-8 bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.2]">
            Ahşabın Sıcaklığını <br />
            <span className="italic">Yaşayanlar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-10 border border-border/50 relative group hover:border-primary/50 transition-colors"
            >
              <div className="text-5xl text-primary/20 font-serif absolute top-6 left-6 leading-none pointer-events-none">
                "
              </div>
              <p className="text-foreground/80 leading-relaxed relative z-10 mt-6 mb-8 italic">
                {item.quote}
              </p>
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">{item.author}</p>
                <p className="text-sm text-primary tracking-wide uppercase mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
