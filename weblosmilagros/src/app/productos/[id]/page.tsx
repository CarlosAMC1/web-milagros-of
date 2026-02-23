import Image from "next/image";
import products from "@/data/productos.json";
import { notFound } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id.toString() }));
}

export function generateMetadata({ params }: any) {
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) return {};

  return {
    title: `${product.name} | Bodeguita Los Milagros`,
    description: product.description ?? "Producto disponible en tienda",
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image]
    }
  };
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return notFound();

  const waLink = buildWhatsAppLink({
    phone: siteConfig.whatsappNumber,
    productName: product.name
  });

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10">

        {/* Imagen */}
        <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden border">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold text-green-800 mb-4">
            {product.nombre}
          </h1>

          <p className="text-gray-700 text-lg mb-4">
            {product.description}
          </p>

          <p className="text-2xl font-semibold text-green-700 mb-6">
            {formatPrice(product.price)}
          </p>

          <a
            href={waLink}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition"
          >
            Comprar por WhatsApp
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Stock disponible: {product.stock}
          </p>
        </div>

      </div>
    </main>
  );
}
