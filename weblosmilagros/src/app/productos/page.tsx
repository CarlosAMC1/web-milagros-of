import ProductCard from "@/components/cards/ProductCard";
import products from "@/data/productos.json";

export const metadata = {
  title: "Productos | Bodeguita Los Milagros",
  description: "Explora nuestro catálogo completo de productos a precios accesibles."
};

export default function ProductosPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-green-800">
        Todos los productos
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
