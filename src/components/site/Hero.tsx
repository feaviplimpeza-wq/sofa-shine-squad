import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, MapPin } from "lucide-react";
import hero from "@/assets/hero-cleaning.jpg";

const WHATSAPP = "https://wa.me/5581968607690?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-hero">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="h-3.5 w-3.5" /> 5 anos higienizando estofados
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-6 leading-[1.05] text-foreground">
            Seu sofá como
            <span className="block text-gold-gradient">novo de novo.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Higienização profissional a domicílio de sofás, colchões, cadeiras, tapetes e poltronas.
            Atendemos toda a região metropolitana do Recife com cuidado e qualidade.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-gold-gradient text-primary-foreground font-semibold shadow-gold hover:-translate-y-0.5 transition-smooth"
            >
              Pedir orçamento no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full border-2 border-primary/30 text-foreground font-semibold hover:border-primary hover:bg-primary/5 transition-smooth"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Garantia de satisfação</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Atendimento a domicílio</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> Produtos profissionais</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gold-gradient opacity-20 blur-3xl rounded-full" aria-hidden />
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-white/40">
            <img
              src="/user-uploads/b17709a4-e0d4-4475-91b4-d3ef12dfb8c3.png"
              alt="Técnico realizando higienização profissional de sofá"
              width={1600}
              height={1200}
              className="w-full h-[460px] lg:h-[560px] object-cover"
            />
            <div className="absolute top-5 left-5 right-5 p-4 rounded-2xl bg-background/85 backdrop-blur-md shadow-card flex-row gap-[16px] border-0 flex items-center justify-start">
              <div className="h-12 w-12 rounded-full bg-gold-gradient flex items-center justify-center text-primary-foreground font-display text-lg shadow-gold pl-0">
                +9000
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">+ de 9.000 Clientes atendidos!</p>
                <p className="text-xs text-muted-foreground">na Grande Recife com nota máxima</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
