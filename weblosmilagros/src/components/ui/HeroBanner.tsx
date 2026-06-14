'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiMessageCircle, FiShoppingBag, FiStar } from 'react-icons/fi';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-12 lg:py-24 border-b border-gray-100">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--secondary)]/20 text-[var(--primary)] font-bold text-sm mb-6">
              <FiStar className="text-[var(--secondary)]" /> 
              La bodega de confianza de tu barrio
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-[var(--foreground)] font-outfit mb-6">
              Frescura y calidad a la <span className="text-[var(--primary)]">puerta de tu casa</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Encuentra tus abarrotes, bebidas, snacks y productos de primera necesidad al mejor precio. 
              Pide por WhatsApp y recíbelo en minutos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/productos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-[var(--primary)] hover:opacity-90 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[var(--primary)]/30 transition-all text-lg"
                >
                  <FiShoppingBag />
                  Comprar ahora
                </motion.button>
              </Link>

              <a href="https://wa.me/51923550243" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 hover:border-[var(--secondary)] hover:text-[var(--primary)] rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm transition-all text-lg"
                >
                  <FiMessageCircle />
                  Pedir por WhatsApp
                </motion.button>
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm font-semibold text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">✓</div>
                Envío rápido
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✓</div>
                Precios bajos
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Background Blob/Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--primary)]/10 to-[var(--secondary)]/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl" />
            
            <div className="relative w-full aspect-square max-w-lg mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '0s' }}>
                  <span className="text-6xl drop-shadow-lg">🥑</span>
                </div>
                <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-6xl drop-shadow-lg">🍞</span>
                </div>
                <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-7xl drop-shadow-lg">🥤</span>
                </div>
                <div className="absolute bottom-10 right-20 animate-float" style={{ animationDelay: '3s' }}>
                  <span className="text-5xl drop-shadow-lg">🍫</span>
                </div>
                
                <div className="z-10 text-center">
                    <div className="w-32 h-32 mx-auto bg-[var(--primary)] text-[var(--secondary)] rounded-3xl flex items-center justify-center font-bold text-6xl shadow-xl mb-4 rotate-12 hover:rotate-0 transition-transform duration-500">
                        M
                    </div>
                    <h2 className="text-2xl font-black text-[var(--primary)] font-outfit">Los Milagros</h2>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
