"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import categorias from "@/data/categorias.json";

const CategoriasHome: React.FC = () => {
    return (
        <section className="py-12">
            <div className="flex flex-col items-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-white mb-4"
                >
                    Nuestras Categorías
                </motion.h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categorias.map((categoria, index) => (
                    <motion.div
                        key={categoria.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            href={`/productos?categoria=${categoria.slug}`}
                            className="group relative block aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                            <Image
                                src={categoria.imagen || "/placeholder-category.jpg"}
                                alt={categoria.nombre}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                            />

                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-end p-6">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {categoria.nombre}
                                </h3>
                                <span className="text-sm text-gray-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    Ver productos →
                                </span>
                            </div>

                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-all duration-500 z-30" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CategoriasHome;
