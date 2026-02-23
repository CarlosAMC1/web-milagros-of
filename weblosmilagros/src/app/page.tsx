import HeroBanner from "@/components/ui/HeroBanner";
import CategoriasHome from "@/components/ui/CategoriasHome";
import ProductosDestacados from "@/components/ui/ProductosDestacados";
import Testimonios from "@/components/ui/Testimonios";
import Mapa from "@/components/ui/Mapa";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex flex-col gap-24 pb-32">
      <HeroBanner />

      <section className="container mx-auto px-4">
        <CategoriasHome />
      </section>

      <section className="container mx-auto px-4">
        <ProductosDestacados />
      </section>

      <section className="container mx-auto px-4">
        <Testimonios />
      </section>

      <section className="container mx-auto px-4">
        <Mapa />
      </section>

      <WhatsAppButton />
    </main>
  );
}
