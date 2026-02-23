"use client";

import React, { useState } from "react";
import ProductCard from "@/components/cards/ProductCard";
import products from "@/data/productos.json";
import { motion } from "framer-motion";

export default function ProductosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(products.map(p => p.categoria)))];

  const filteredProducts = activeCategory === "Todos"
    ? products
    : products.filter(p => p.categoria === activeCategory);

  return (
    <main className="min-h-screen pb-20">
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nuestro Catálogo
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-12">
              Productos frescos, de calidad y al mejor precio de Tacna.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeCategory === cat
                      ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30 font-medium"
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {filteredProducts.map((producto) => (
              <motion.div
                layout
                key={producto.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard producto={producto} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="flex flex-col items-center py-20 text-gray-400">
              <p className="text-lg">No se encontraron productos en esta categoría.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
