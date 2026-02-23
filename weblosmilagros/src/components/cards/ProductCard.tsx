"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/formatPrice";
import { Producto } from "@/types";

interface ProductCardProps {
  producto: Producto;
}

const ProductCard: React.FC<ProductCardProps> = ({ producto }) => {
  const hasDiscount = producto.descuento && producto.descuento > 0;
  const finalPrice = hasDiscount
    ? producto.precio * (1 - producto.descuento! / 100)
    : producto.precio;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-xl"
    >
      <Link href={`/productos/${producto.id}`} className="block relative aspect-square overflow-hidden">
        {hasDiscount && (
          <div className="absolute top-4 right-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
            -{producto.descuento}%
          </div>
        )}

        <Image
          src={producto.imagen || "/placeholder-product.jpg"}
          alt={producto.nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
            {producto.categoria}
          </span>
          <span className={`text-xs ${producto.stock && producto.stock > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {producto.stock && producto.stock > 0 ? `Stock: ${producto.stock}` : 'Agotado'}
          </span>
        </div>

        <Link href={`/productos/${producto.id}`}>
          <h3 className="text-lg font-bold text-white mb-3 line-clamp-1 group-hover:text-blue-400 transition-colors">
            {producto.nombre}
          </h3>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-white">
            {formatPrice(finalPrice)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(producto.precio)}
            </span>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <button className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm font-medium py-2 rounded-xl transition-colors">
            Detalles
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors shadow-lg shadow-blue-600/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
