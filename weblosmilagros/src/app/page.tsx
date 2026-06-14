import HeroBanner from "@/components/ui/HeroBanner";
import PromoBanner from "@/components/ui/PromoBanner";
import CategoriasHome from "@/components/ui/CategoriasHome";
import ProductosDestacados from "@/components/ui/ProductosDestacados";
import PorQueElegirnos from "@/components/ui/PorQueElegirnos";
import OfertasSemanales from "@/components/ui/OfertasSemanales";
import NosotrosSection from "@/components/ui/NosotrosSection";
import MarcasConfianza from "@/components/ui/MarcasConfianza";
import Testimonios from "@/components/ui/Testimonios";
import HorarioYEntrega from "@/components/ui/HorarioYEntrega";
import Mapa from "@/components/ui/Mapa";
import Newsletter from "@/components/ui/Newsletter";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroBanner />
      <PromoBanner />
      <CategoriasHome />
      <ProductosDestacados />
      <PorQueElegirnos />
      <OfertasSemanales />
      <NosotrosSection />
      <MarcasConfianza />
      <Testimonios />
      <HorarioYEntrega />
      <Mapa />
      <Newsletter />
      <WhatsAppButton />
    </main>
  );
}
