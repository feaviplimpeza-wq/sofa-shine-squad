import { motion } from "framer-motion";
import almofadaAntes from "@/assets/antes-depois/almofada-antes.jpg";
import almofadaDepois from "@/assets/antes-depois/almofada-depois.jpg";
import sofaAntesDepois from "@/assets/antes-depois/sofa-antes-depois.jpeg";

type Item =
  | { tipo: "par"; antes: string; depois: string; label: string; nota: string }
  | { tipo: "unica"; img: string; label: string; nota: string };

const items: Item[] = [
  {
    tipo: "par",
    antes: almofadaAntes,
    depois: almofadaDepois,
    label: "Almofada de sofá",
    nota: "Higienização profunda",
  },
  {
    tipo: "unica",
    img: sofaAntesDepois,
    label: "Sofá de tecido",
    nota: "Lavagem técnica",
  },
];

const BeforeAfter = () => {
  return (
    <section id="antes-depois" className="py-24 lg:py-32 bg-muted/40">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">
            Resultados reais
          </span>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 text-foreground">
            O <span className="text-gold-gradient">antes</span> e o depois fala por si.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Trabalhos feitos por nós, na casa de clientes da Grande Recife. Tecidos restaurados,
            ambientes mais saudáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[2rem] overflow-hidden shadow-card hover:shadow-elegant transition-smooth bg-card"
            >
              {it.tipo === "par" ? (
                <div className="grid grid-cols-2 relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={it.antes}
                      alt={`Antes — ${it.label}`}
                      loading="lazy"
                      className="w-full h-[320px] lg:h-[420px] object-cover group-hover:scale-105 transition-smooth duration-700"
                    />
                    <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur text-xs font-semibold text-foreground shadow-soft">
                      Antes
                    </span>
                  </div>
                  <div className="relative overflow-hidden border-l-4 border-background">
                    <img
                      src={it.depois}
                      alt={`Depois — ${it.label}`}
                      loading="lazy"
                      className="w-full h-[320px] lg:h-[420px] object-cover group-hover:scale-105 transition-smooth duration-700"
                    />
                    <span className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-gold-gradient text-primary-foreground text-xs font-semibold shadow-gold">
                      Depois
                    </span>
                  </div>
                </div>
              ) : (
                <div className="overflow-hidden">
                  <img
                    src={it.img}
                    alt={`Antes e depois — ${it.label}`}
                    loading="lazy"
                    className="w-full h-[320px] lg:h-[420px] object-cover group-hover:scale-105 transition-smooth duration-700"
                  />
                </div>
              )}

              <figcaption className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-xs font-semibold text-foreground shadow-soft">
                  {it.label}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-gold-gradient text-primary-foreground text-xs font-semibold shadow-gold">
                  {it.nota}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
