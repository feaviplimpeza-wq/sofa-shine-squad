import { motion } from "framer-motion";
import { Sofa, BedDouble, Armchair, Car, Layers, Droplets, Sparkles, Shield } from "lucide-react";

const services = [
  { icon: Sofa, title: "Sofás e Poltronas", desc: "Limpeza profunda que elimina ácaros, manchas e odores, devolvendo o aspecto de novo." },
  { icon: BedDouble, title: "Colchões", desc: "Higienização que remove ácaros, fungos e bactérias para um sono mais saudável." },
  { icon: Armchair, title: "Cadeiras", desc: "Cadeiras de sala de jantar e escritório limpas, sem encardidos e sem resíduos." },
  { icon: Layers, title: "Tapetes e Carpetes", desc: "Lavagem técnica que recupera a cor, o toque e a maciez originais." },
  { icon: Car, title: "Bancos de Automóvel", desc: "Higienização completa do estofado interno do seu carro, com perfume duradouro." },
  { icon: Droplets, title: "Impermeabilização", desc: "Proteção contra líquidos e manchas — seu estofado preservado por mais tempo." },
  { icon: Sparkles, title: "Hidratação de Couro", desc: "Devolve maciez, brilho e elasticidade aos seus estofados em couro." },
  { icon: Shield, title: "Higienização para casas com bichinhos", desc: "Tratamento específico para remover pelos, odores e marcas dos seus animais de estimação." },
];

const WHATSAPP = "https://wa.me/5581968607690";

const Services = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">Nossos serviços</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 text-foreground">
            Cuidado <span className="text-gold-gradient">artesanal</span> para cada peça
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Trabalhamos com produtos profissionais de alta qualidade e técnicas específicas para cada tipo de tecido.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-7 rounded-3xl bg-card border border-border/60 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gold-gradient opacity-0 group-hover:opacity-15 blur-2xl transition-smooth" aria-hidden />
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gold-soft flex items-center justify-center text-primary mb-5 group-hover:bg-gold-gradient group-hover:text-primary-foreground transition-smooth">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-13 px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft"
          >
            Solicite seu orçamento personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
