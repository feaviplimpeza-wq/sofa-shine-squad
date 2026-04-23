import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import logo from "@/assets/logo.png";

const TermoGarantia = () => {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="container py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="F&A Higienizações" className="h-11 w-11 rounded-full" />
            <div>
              <p className="font-display text-lg leading-none text-foreground">F&amp;A</p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-primary font-semibold">Higienizações</p>
            </div>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-smooth"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar ao site
          </Link>
        </div>
      </header>

      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
              <ShieldCheck className="h-3.5 w-3.5" /> Compromisso e transparência
            </span>
            <h1 className="font-display text-4xl lg:text-5xl mt-5 text-foreground">
              Termo de <span className="text-gold-gradient">Garantia</span> dos Serviços
            </h1>
            <p className="mt-4 text-muted-foreground">
              F&amp;A Higienizações Ltda · CNPJ 46.649.584/0001-21
            </p>
          </div>

          <article className="prose-content space-y-10 text-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">1. Objeto da Garantia</h2>
              <p className="text-muted-foreground">
                A F&amp;A Higienizações garante a qualidade dos serviços de higienização e limpeza de
                estofados, colchões, tapetes e demais itens tratados, pelo prazo de{" "}
                <strong className="text-foreground">3 (três) dias úteis</strong>, contados a partir da
                data de execução do serviço, exclusivamente para casos de falhas comprovadas na execução.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">2. Cobertura da Garantia</h2>
              <p className="text-muted-foreground mb-3">
                A garantia cobre apenas situações em que for constatado que:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                <li>Alguma área do estofado não recebeu o procedimento completo de higienização;</li>
                <li>Houve falha técnica ou operacional na aplicação dos produtos ou na extração;</li>
                <li>
                  Ocorreu formação de manchas diretamente relacionadas ao processo de limpeza (desde que
                  devidamente comprovado por análise técnica da empresa).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">
                3. Observação importante sobre remoção de manchas
              </h2>
              <p className="text-muted-foreground mb-3">
                A F&amp;A Higienizações atua exclusivamente com serviços de limpeza e higienização
                profissional. Não realizamos remoção de manchas como serviço principal, uma vez que a
                eliminação total dessas manchas depende de fatores que fogem ao controle do processo,
                como:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5 mb-3">
                <li>Tipo de substância que originou a mancha;</li>
                <li>Tempo em que a mancha permaneceu no tecido;</li>
                <li>Tipo e sensibilidade do material;</li>
                <li>
                  Interações químicas prévias causadas por limpezas anteriores ou produtos domésticos.
                </li>
              </ul>
              <p className="text-muted-foreground">
                A remoção parcial ou total de manchas é uma consequência natural do processo de
                higienização, porém <strong className="text-foreground">não é garantida em 100% dos casos</strong>,
                pois cada tecido reage de forma diferente. Nosso objetivo é proporcionar máxima
                descontaminação e melhoria estética possível, sem comprometer a integridade do material.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">4. Exclusões da Garantia</h2>
              <p className="text-muted-foreground mb-3">A garantia não cobre:</p>
              <ul className="space-y-2 text-muted-foreground list-[lower-alpha] pl-5">
                <li>Novas manchas, sujeiras, odores ou danos causados após a conclusão do serviço;</li>
                <li>
                  Situações decorrentes de mau uso, derramamento de líquidos, alimentos, urina, fezes,
                  vômito, tinta ou outros agentes externos após a limpeza;
                </li>
                <li>
                  Manchas pré-existentes que não foram removidas, quando previamente informadas ao
                  cliente como de difícil ou impossível remoção (ex.: mofo preto, oxidação, tingimento
                  ou desgaste do tecido);
                </li>
                <li>
                  Alterações de cor, brilho ou textura decorrentes da idade do tecido, uso de produtos
                  domésticos ou limpezas anteriores mal executadas;
                </li>
                <li>
                  Problemas decorrentes de secagem inadequada do ambiente ou recontaminação por
                  umidade.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">
                5. Condições para acionamento da garantia
              </h2>
              <p className="text-muted-foreground mb-3">
                O cliente deverá entrar em contato com a F&amp;A Higienizações dentro do prazo de{" "}
                <strong className="text-foreground">3 (três) dias úteis</strong> após o serviço,
                informando o ocorrido e, se possível, enviando fotos ou vídeos do local afetado.
              </p>
              <p className="text-muted-foreground">
                Após a análise técnica, sendo constatada falha de execução, a empresa realizará o
                retorno sem custo adicional, em data previamente agendada.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-foreground mb-3">6. Disposições finais</h2>
              <p className="text-muted-foreground mb-3">
                A F&amp;A Higienizações utiliza produtos profissionais e equipamentos adequados,
                operados por técnicos capacitados, buscando sempre a melhor entrega possível dentro das
                condições apresentadas.
              </p>
              <p className="text-muted-foreground">
                Este termo tem como objetivo garantir transparência, responsabilidade e segurança na
                relação com nossos clientes, reafirmando o compromisso da empresa com a satisfação e
                qualidade dos serviços prestados.
              </p>
            </section>

            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-card mt-12">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">F&amp;A Higienizações Ltda</strong>
                <br />
                CNPJ: 46.649.584/0001-21
                <br />
                Atendimento: (81) 96860-7690 — Região Metropolitana do Recife
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default TermoGarantia;
