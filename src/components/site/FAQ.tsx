import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como faço meu orçamento?",
    a: "É super simples! Basta clicar em qualquer botão de WhatsApp do site e nos enviar uma mensagem com fotos do estofado. Respondemos em poucos minutos.",
  },
  {
    q: "O atendimento é realmente em casa?",
    a: "Sim! Todo o serviço é feito a domicílio. Nossos técnicos levam todos os equipamentos e produtos necessários. Você não precisa sair de casa.",
  },
  {
    q: "Quanto tempo demora a higienização?",
    a: "Em média, de 1 a 2 horas, dependendo do tamanho e tipo do estofado. O secamento varia de 5 a 12 horas conforme o clima e a ventilação do local.",
  },
  {
    q: "A limpeza tira todas as manchas?",
    a: "Conseguimos remover a grande maioria. Algumas manchas antigas, no entanto, podem ter penetrado nas fibras e tornar-se permanentes — mesmo nesses casos, costumam ficar bem mais discretas.",
  },
  {
    q: "De quanto em quanto tempo devo higienizar?",
    a: "Recomendamos a cada 6 meses. Se o seu estofado for impermeabilizado, o intervalo pode ser de até 1 ano.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Aceitamos PIX, dinheiro e cartão. Confirme as opções com o nosso atendimento no momento do orçamento.",
  },
  {
    q: "A impermeabilização é inflamável?",
    a: "Não. Usamos produtos à base de água, seguros, sem cheiro forte e sem qualquer risco de inflamabilidade — pode ficar tranquilo dentro de casa.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.25em] uppercase text-primary font-semibold">Perguntas frequentes</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-4 text-foreground">
            Tudo que você precisa <span className="text-gold-gradient">saber</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border/60 rounded-2xl px-6 shadow-soft hover:shadow-card transition-smooth"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
