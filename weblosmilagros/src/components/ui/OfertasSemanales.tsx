'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/cards/ProductCard';
import productos from '@/data/productos.json';

export default function OfertasSemanales() {
  const ofertas = productos.filter(p => p.descuento && p.descuento > 0).slice(0, 4);

  if (ofertas.length === 0) return null;

  return (
    <section id="ofertas" className="py-16 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-black text-gray-900 mb-2 font-outfit inline-block relative"
            >
                Ofertas de la Semana
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-red-500 rounded-full" />
            </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {ofertas.map((producto, index) => (
            <motion.div
                key={producto.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
            >
                <ProductCard producto={producto} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
