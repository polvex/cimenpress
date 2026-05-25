import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Çimen Press - Yeni Müşteri Talebi");
    const body = encodeURIComponent(
      `Ad Soyad: ${name}\nTelefon: ${phone}\n\nProje Detayı:\n${message}`
    );
    window.open(`mailto:buraktlhcimen@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setName("");
    setPhone("");
    setMessage("");
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-sm font-semibold tracking-widest uppercase text-primary">
                İletişim
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.2] mb-8">
              Projenizi <br className="hidden md:block"/>
              <span className="italic">Hayata Geçirelim</span>
            </h2>

            <p className="text-lg text-foreground/70 mb-12 max-w-md">
              Eviniz veya ofisiniz için hayal ettiğiniz ahşap tasarımları konuşmak üzere atölyemize kahve içmeye bekleriz.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 uppercase tracking-wider text-sm">Telefon</h4>
                  <a href="tel:02363126475" className="block text-foreground/70 font-serif text-xl hover:text-primary transition-colors">
                    (0236) 312 64 75
                  </a>
                  <a href="tel:05358423195" className="block text-foreground/70 font-serif text-xl hover:text-primary transition-colors mt-1">
                    (0535) 842 31 95
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 uppercase tracking-wider text-sm">Adres</h4>
                  <a
                    href="https://www.google.com/maps/search/Selvilitepe,+104.+Sk.+No:47,+45400+Turgutlu/Manisa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 leading-relaxed hover:text-primary transition-colors"
                  >
                    Selvilitepe, 104. Sk. No:47<br/>
                    45400 Turgutlu / Manisa
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border p-8 md:p-12 shadow-sm"
          >
            <h3 className="text-2xl font-serif mb-8 text-foreground">Bize Ulaşın</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2 tracking-wide">Adınız Soyadınız</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="Ahmet Yılmaz"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2 tracking-wide">Telefon Numaranız</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="05XX XXX XX XX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2 tracking-wide">Projeniz Hakkında (İsteğe bağlı)</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                  placeholder="Mutfak dolabı, iç mekan kapıları..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 mt-4 group"
              >
                {sent ? "E-Posta Uygulaması Açıldı" : "Gönder"}
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-foreground/50 text-center mt-4">
                {sent
                  ? "E-posta uygulamanız açıldı — gönder butonuna basmanız yeterli."
                  : "Formu doldurduğunuzda e-posta uygulamanız otomatik açılacak."}
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
