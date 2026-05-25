import { motion } from "framer-motion";
import grainImg from "@/assets/grain.png";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Ölçü & Tasarım",
      desc: "Mekanınızın ölçüleri alınır. Model, renk ve malzeme seçimleri (MDF, sunta, laminant) birlikte belirlenir."
    },
    {
      num: "02",
      title: "CNC Kesim",
      desc: "Onaylanan tasarım bilgisayar ortamına aktarılır. CNC makinelerimiz her parçayı milimetrik hassasiyetle keser ve işler."
    },
    {
      num: "03",
      title: "Kaplama & Boya",
      desc: "Kesilen parçalara laminant veya PVC kaplama uygulanır, boya ve yüzey işlemleri tamamlanır."
    },
    {
      num: "04",
      title: "Montaj & Teslimat",
      desc: "Tüm parçalar yerinde monte edilir, kontroller yapılır. Temiz ve zamanında teslim garantisi."
    }
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative text-white">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={grainImg} 
          alt="Dark wood grain background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/85 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-[1px] w-8 bg-primary/70" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary/90">
              Nasıl Çalışıyoruz?
            </span>
            <div className="h-[1px] w-8 bg-primary/70" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif leading-[1.2] mb-6">
            Mükemmellik Ayrıntılarda <br />
            <span className="italic text-white/70">Gizlidir</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-6xl font-serif text-white/10 absolute -top-10 -left-4 z-0 pointer-events-none">
                {step.num}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-[1px] bg-primary mb-6" />
                <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
