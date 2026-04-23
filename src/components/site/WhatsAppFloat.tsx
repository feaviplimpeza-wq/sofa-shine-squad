import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/5581968607690?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-smooth animate-pulse-gold"
  >
    <MessageCircle className="h-7 w-7" fill="currentColor" />
  </a>
);

export default WhatsAppFloat;
