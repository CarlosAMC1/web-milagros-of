"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/formatPrice";
import { Producto } from "@/types";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

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
      whileHover={{ y: -5 }}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[var(--secondary)] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 p-4">
        {hasDiscount && (
          <div className="absolute top-3 left-3 z-20 bg-[var(--primary)] text-white text-[10px] uppercase font-black px-2.5 py-1 rounded-md shadow-sm">
            Oferta -{producto.descuento}%
          </div>
        )}
        
        <button className="absolute top-3 right-3 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:shadow-md transition-all">
            <FiHeart size={16} />
        </button>

        <Link href={`/productos/${producto.id}`} className="block w-full h-full relative">
            <Image
              src={producto.imagen || "/placeholder-product.jpg"}
              alt={producto.nombre}
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl"><span class="text-4xl text-gray-300">📦</span></div>';
              }}
            />
        </Link>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            {producto.categoria}
          </span>
          <span className={`text-[10px] font-bold ${producto.stock && producto.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {producto.stock && producto.stock > 0 ? `Stock: ${producto.stock}` : 'Agotado'}
          </span>
        </div>

        <Link href={`/productos/${producto.id}`}>
          <h3 className="text-sm font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[var(--primary)] transition-colors min-h-[40px]">
            {producto.nombre}
          </h3>
        </Link>

        <div className="mt-auto">
            <div className="flex items-end gap-2 mb-4">
              <span className="text-xl font-black text-[var(--primary)]">
                {formatPrice(finalPrice)}
              </span>
              {hasDiscount && (
                <span className="text-xs text-gray-400 line-through mb-1">
                  {formatPrice(producto.precio)}
                </span>
              )}
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-100 hover:border-[var(--primary)] text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 text-sm font-bold py-2.5 rounded-xl transition-all">
              <FiShoppingCart size={16} />
              Agregar
            </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
