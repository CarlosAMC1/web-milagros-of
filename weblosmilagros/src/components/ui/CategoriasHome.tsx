"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import categorias from "@/data/categorias.json";

const CategoriasHome: React.FC = () => {
    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl font-black text-gray-900 mb-2 font-outfit"
                        >
                            Explora por Categorías
                        </motion.h2>
                        <div className="w-16 h-1.5 bg-[var(--secondary)] rounded-full" />
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categorias.map((categoria, index) => (
                        <motion.div
                            key={categoria.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                href={`/productos?categoria=${categoria.slug}`}
                                className="group flex flex-col items-center p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-colors duration-300 shadow-sm hover:shadow-md"
                            >
                                <div className="w-16 h-16 relative mb-3 bg-white rounded-full p-2 shadow-sm group-hover:scale-110 transition-transform">
                                    <Image
                                        src={categoria.imagen || "/placeholder-category.jpg"}
                                        alt={categoria.nombre}
                                        fill
                                        className="object-cover rounded-full"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.parentElement!.innerHTML = '<span class="text-3xl flex items-center justify-center h-full">🛒</span>';
                                        }}
                                    />
                                </div>
                                <h3 className="text-sm font-bold text-gray-800 text-center group-hover:text-white transition-colors">
                                    {categoria.nombre}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriasHome;
