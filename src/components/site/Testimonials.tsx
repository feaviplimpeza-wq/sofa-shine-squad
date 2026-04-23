import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";
import dep3 from "@/assets/depoimentos/depoimento-3.png";
import dep4 from "@/assets/depoimentos/depoimento-4.png";
import dep5 from "@/assets/depoimentos/depoimento-5.png";
import dep6 from "@/assets/depoimentos/depoimento-6.png";
import dep7 from "@/assets/depoimentos/depoimento-7.png";
import dep8 from "@/assets/depoimentos/depoimento-8.png";
import dep9 from "@/assets/depoimentos/depoimento-9.png";

const testimonials = [
  {
    img: dep5,
    nota: "Sofá impecável",
    resumo:
      "“Gostaria de expressar minha total satisfação com o serviço. O trabalho foi entregue com extrema excelência, superando minhas expectativas.”",
    canal: "WhatsApp",
  },
  {
    img: dep3,
    nota: "Estofado em estado de novo",
    resumo:
      "“Passando pra agradecer a lavagem do meu estofado, ficou perfeitinho em estado de novo! Até as manchas mais difíceis saíram. Super indico!”",
    canal: "Instagram",
  },
  {
    img: dep8,
    nota: "Trabalho excelente",
    resumo:
      "“Parabéns, adorei o trabalho dos meninos, eles fizeram um excelente trabalho. Estão de parabéns. Já indiquei para meu cunhado.”",
    canal: "WhatsApp",
  },
  {
    img: dep7,
    nota: "Ficou muito bom",
    resumo:
      "“Bom dia, passando para te agradecer e dizer que o serviço ficou muito bom.”",
    canal: "WhatsApp",
  },
  {
    img: dep6,
    nota: "Amei o trabalho",
    resumo:
      "“Ótimo trabalho 👏 Amei o trabalho da sua equipe 💯”",
    canal: "WhatsApp",
  },
  {
    img: dep4,
    nota: "Equipe educada e dedicada",
    resumo:
      "“Tinha esquecido de falar com vocês, mas passando pra agradecer pelo trabalho, adorei o resultado. Os rapazes muito educados e simpáticos também.”",
    canal: "WhatsApp",
  },
  {
    img: dep9,
    nota: "Muito satisfeito",
    resumo:
      "“Obrigado mais uma vez. Muito satisfeito com o serviço de vocês.”",
    canal: "WhatsApp",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-muted/40">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">
            Quem já viveu
          </span>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 text-foreground">
            Elogios <span className="text-gold-gradient">reais</span> de quem confiou
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Mensagens espontâneas de clientes da Grande Recife. Por respeito à privacidade,
            os últimos dígitos dos números aparecem com desfoque.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative rounded-3xl bg-card border border-border/60 shadow-card hover:shadow-elegant transition-smooth overflow-hidden flex flex-col"
            >
              <div className="relative bg-muted/60 overflow-hidden">
                <img
                  src={t.img}
                  alt={`Depoimento de cliente — ${t.nota}`}
                  loading="lazy"
                  className="w-full h-[420px] object-cover object-top group-hover:scale-[1.02] transition-smooth duration-700"
                />
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/85 backdrop-blur text-[11px] font-semibold text-foreground shadow-soft">
                  <MessageCircle className="h-3 w-3 text-primary" /> {t.canal}
                </span>
              </div>
              <figcaption className="p-6 flex-1 flex flex-col">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-display text-lg text-foreground mb-2">{t.nota}</p>
                <blockquote className="text-sm text-muted-foreground leading-relaxed">
                  {t.resumo}
                </blockquote>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
