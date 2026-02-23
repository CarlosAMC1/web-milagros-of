"use client";

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/cards/ProductCard";
import productos from "@/data/productos.json";
import Button from "./Button";
import Link from "next/link";

const ProductosDestacados: React.FC = () => {
    // Solo mostramos los primeros 4 productos para el home
    const productosDestacados = productos.slice(0, 4);

    return (
        <section className="py-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        Productos Destacados
                    </motion.h2>
                    <div className="w-20 h-1 bg-blue-600 rounded-full" />
                </div>

                <Link href="/productos">
                    <Button variant="outline" size="md">
                        Ver todo el catálogo
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {productosDestacados.map((producto, index) => (
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
        </section>
    );
};

export default ProductosDestacados;
