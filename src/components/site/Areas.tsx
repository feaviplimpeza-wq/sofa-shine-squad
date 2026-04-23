import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  "Recife", "Olinda", "Jaboatão dos Guararapes", "Camaragibe",
  "Paulista", "Abreu e Lima", "São Lourenço da Mata", "Igarassu",
  "Itapissuma", "Itamaracá",
];

const Areas = () => {
  return (
    <section id="areas" className="py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">Onde atendemos</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-4 text-foreground">
              Toda a Grande <span className="text-gold-gradient">Recife</span>, na sua casa.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Levamos nossos serviços de higienização a domicílio em 10 cidades da região metropolitana.
              Sem você sair de casa, sem trânsito, sem complicação.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gold-soft border border-primary/20">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Atendimento 100% domiciliar</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {cities.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative px-5 py-4 rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-card hover:border-primary/40 transition-smooth"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gold-gradient group-hover:scale-150 transition-smooth" />
                  <span className="text-sm font-semibold text-foreground">{c}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Areas;
