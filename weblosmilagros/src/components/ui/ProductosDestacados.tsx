"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/cards/ProductCard";
import productos from "@/data/productos.json";
import Button from "./Button";
import Link from "next/link";

const ProductosDestacados: React.FC = () => {
    // Tomamos 8 productos para el home para que se vea completo (2 filas de 4)
    const productosDestacados = productos.slice(0, 8);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-3xl font-black text-gray-900 mb-2 font-outfit"
                        >
                            Destacados de la Semana
                        </motion.h2>
                        <div className="w-16 h-1.5 bg-[var(--primary)] rounded-full" />
                    </div>

                    <Link href="/productos">
                        <Button variant="outline" size="md">
                            Ver todo el catálogo
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {productosDestacados.map((producto, index) => (
                        <motion.div
                            key={producto.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <ProductCard producto={producto} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductosDestacados;
