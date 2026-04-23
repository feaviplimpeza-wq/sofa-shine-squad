import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import BeforeAfter from "@/components/site/BeforeAfter";
import Areas from "@/components/site/Areas";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <Areas />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
