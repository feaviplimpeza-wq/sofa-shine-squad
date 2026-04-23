import { Instagram, Phone, MapPin, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-8">
      <div className="container grid md:grid-cols-3 gap-12 mb-14">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="F&A Higienizações" className="h-14 w-14 rounded-full" />
            <div>
              <p className="font-display text-2xl">F&amp;A</p>
              <p className="text-[11px] tracking-[0.25em] uppercase text-primary-glow font-semibold">Higienizações</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-secondary-foreground/70 leading-relaxed max-w-xs">
            Higienização profissional de estofados a domicílio, com 5 anos de experiência na Grande Recife.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5 text-primary-glow">Contato</h4>
          <ul className="space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
              <a href="https://wa.me/5581968607690" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-smooth">
                (81) 96860-7690
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Instagram className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
              <a href="https://instagram.com/fahigienizacoes" target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow transition-smooth">
                @fahigienizacoes
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary-glow shrink-0" />
              <span>Região Metropolitana do Recife — PE</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5 text-primary-glow">Áreas atendidas</h4>
          <p className="text-sm text-secondary-foreground/70 leading-relaxed">
            Recife · Olinda · Jaboatão · Camaragibe · Paulista · Abreu e Lima · São Lourenço · Igarassu · Itapissuma · Itamaracá
          </p>
          <Link
            to="/termo-garantia"
            className="mt-6 inline-flex items-center gap-2 text-sm text-primary-glow hover:text-primary transition-smooth font-semibold"
          >
            <FileText className="h-4 w-4" /> Termo de garantia dos serviços
          </Link>
        </div>
      </div>

      <div className="container border-t border-secondary-foreground/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/60">
        <p>© {new Date().getFullYear()} F&amp;A Higienizações Ltda · CNPJ 46.649.584/0001-21 · Todos os direitos reservados.</p>
        <p>Feito com cuidado para tecidos como os seus.</p>
      </div>
    </footer>
  );
};

export default Footer;
