export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-border/60 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-2">
            <h2 className="text-4xl font-display tracking-widest text-foreground mb-6">Çimen Press</h2>
            <p className="text-foreground/70 leading-relaxed max-w-sm mb-6">
              CNC teknolojisi ile MDF, sunta ve laminant kullanarak ölçüye özel kapı modelleri ve dolap sistemleri üretiyoruz.
            </p>
            <div className="space-y-2 text-foreground/60 text-sm">
              <p>
                <a href="tel:02363126475" className="hover:text-primary transition-colors">
                  (0236) 312 64 75
                </a>
              </p>
              <p>
                <a href="tel:05358423195" className="hover:text-primary transition-colors">
                  (0535) 842 31 95
                </a>
              </p>
              <p>Selvilitepe, 104. Sk. No:47, 45400 Turgutlu / Manisa</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Hızlı Menü</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="text-foreground/70 hover:text-primary transition-colors">Koleksiyon</a></li>
              <li><a href="#process" className="text-foreground/70 hover:text-primary transition-colors">Üretim Süreci</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Sosyal Medya</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/cimenpress/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} Çimen Press Tüm hakları saklıdır.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Gizlilik Politikası</a>
            <a href="#" className="hover:text-foreground">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
