'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiClock, FiArrowRight } from 'react-icons/fi';

export default function PromoBanner() {
  return (
    <section className="bg-[var(--primary)] text-white py-12 px-4 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-gold"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

        <div className="container mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-lg shadow-red-500/30">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                        </span>
                        Oferta Relámpago
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black font-outfit mb-4 leading-tight">
                        ¡Fin de semana de locura en <span className="text-[var(--secondary)]">abarrotes</span>!
                    </h2>
                    <p className="text-white/80 text-lg mb-6">
                        Hasta 30% de descuento en arroz, aceite, fideos y conservas. Solo válido hasta este domingo.
                    </p>
                    
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl w-fit mb-8 border border-white/20">
                        <FiClock size={24} className="text-[var(--secondary)]" />
                        <div className="flex gap-4 font-mono font-bold text-xl">
                            <div className="text-center">
                                <div>02</div>
                                <div className="text-[10px] uppercase font-sans font-normal opacity-70">Días</div>
                            </div>
                            <div>:</div>
                            <div className="text-center">
                                <div>14</div>
                                <div className="text-[10px] uppercase font-sans font-normal opacity-70">Hrs</div>
                            </div>
                            <div>:</div>
                            <div className="text-center">
                                <div>45</div>
                                <div className="text-[10px] uppercase font-sans font-normal opacity-70">Min</div>
                            </div>
                        </div>
                    </div>

                    <Link href="/productos?categoria=abarrotes" className="inline-flex items-center gap-2 bg-[var(--secondary)] text-black px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-[var(--secondary)]/50">
                        Ver Ofertas <FiArrowRight />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative w-full md:w-1/3 aspect-square"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-full animate-spin-slow"></div>
                    <img src="/productos/arroz-costeno.jpg" alt="Promo" className="absolute inset-0 w-[80%] h-[80%] m-auto object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder-product.jpg' }} />
                </motion.div>
            </div>
        </div>
    </section>
  );
}
