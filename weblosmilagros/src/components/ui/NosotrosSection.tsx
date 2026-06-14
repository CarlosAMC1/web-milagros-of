'use client';

import { motion } from 'framer-motion';

export default function NosotrosSection() {
  return (
    <section id="nosotros" className="py-16 bg-[var(--background)] border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[var(--secondary)]/20 rounded-3xl transform rotate-3"></div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 shadow-xl">
                {/* Replace with actual store image */}
                <img src="/placeholder-store.jpg" alt="Bodeguita Los Milagros" className="w-full h-full object-cover" onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = '<div class="w-full h-full flex flex-col items-center justify-center bg-[var(--primary)] text-white"><span class="text-6xl mb-4">🏪</span><span class="font-bold">Foto de la Bodega</span></div>';
                }} />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center text-2xl font-black text-black">
                    5+
                </div>
                <div>
                    <p className="font-bold text-gray-900 leading-none">Años</p>
                    <p className="text-sm text-gray-500">Sirviendo al barrio</p>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-outfit">
                Nuestra Historia
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Nacimos con el propósito de llevar a los vecinos del sector Señor de los Milagros productos frescos, variados y a precios accesibles, sin tener que ir lejos de casa.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Hoy, gracias a su preferencia, seguimos creciendo y mejorando nuestro servicio, implementando pedidos por WhatsApp y envíos a domicilio para hacer tu vida más fácil.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
                <div>
                    <div className="text-3xl font-black text-[var(--primary)] mb-1">1000+</div>
                    <div className="text-sm font-bold text-gray-500">Productos</div>
                </div>
                <div>
                    <div className="text-3xl font-black text-[var(--primary)] mb-1">500+</div>
                    <div className="text-sm font-bold text-gray-500">Clientes</div>
                </div>
                <div>
                    <div className="text-3xl font-black text-[var(--primary)] mb-1">100%</div>
                    <div className="text-sm font-bold text-gray-500">Garantía</div>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
