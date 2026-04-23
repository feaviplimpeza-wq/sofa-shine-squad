import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Antes & Depois", href: "#antes-depois" },
  { label: "Áreas atendidas", href: "#areas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
];

const WHATSAPP = "https://wa.me/5581968607690?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento.";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/85 backdrop-blur-lg shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logo} alt="F&A Higienizações" className="h-12 w-12 rounded-full shadow-soft" />
          <div className="leading-tight">
            <p className="font-display text-lg text-foreground">F&amp;A</p>
            <p className="text-[11px] tracking-[0.2em] text-primary uppercase font-semibold">Higienizações</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold-gradient text-primary-foreground text-sm font-semibold shadow-gold hover:-translate-y-0.5 transition-smooth"
        >
          Orçamento grátis
        </a>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 rounded-full hover:bg-primary/10 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-float-up">
          <nav className="container flex flex-col py-6 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/90 py-2 border-b border-border/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-gold-gradient text-primary-foreground text-sm font-semibold shadow-gold"
            >
              Orçamento grátis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
