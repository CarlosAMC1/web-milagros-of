import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/lib/formatPrice";

export default function ProductCard({ product }: any) {
  return (
    <Link
      href={`/productos/${product.id}`}
      className="border rounded-lg overflow-hidden hover:shadow-lg transition bg-white"
    >
      <div className="relative w-full h-40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-green-800">{product.name}</h3>

        <p className="text-green-700 font-bold">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
