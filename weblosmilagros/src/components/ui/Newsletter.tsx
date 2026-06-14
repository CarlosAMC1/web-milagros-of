'use client';

import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

export default function Newsletter() {
  return (
    <section className="py-20 bg-[var(--primary)] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="absolute top-10 left-10 text-6xl opacity-20 rotate-12">💸</div>
        <div className="absolute bottom-10 right-10 text-6xl opacity-20 -rotate-12">🛒</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-black font-outfit mb-6"
            >
                Recibe <span className="text-[var(--secondary)]">Ofertas Exclusivas</span> en tu WhatsApp
            </motion.h2>
            <p className="text-lg text-white/80 mb-8">
                Suscríbete y sé el primero en enterarte de nuestros descuentos especiales, combos de fin de semana y nuevos productos.
            </p>

            <motion.form 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("¡Gracias por suscribirte! Pronto recibirás nuestras ofertas.");
                }}
            >
                <input 
                    type="tel" 
                    placeholder="Tu número de celular" 
                    required
                    className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-[var(--secondary)]/50 transition-all font-bold"
                />
                <button 
                    type="submit"
                    className="px-8 py-4 bg-[var(--secondary)] text-black rounded-xl font-black hover:opacity-90 flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    <FiSend />
                    Suscribirme
                </button>
            </motion.form>
            <p className="text-xs text-white/50 mt-4">
                No enviaremos spam, solo ofertas relevantes 1 o 2 veces por semana.
            </p>
        </div>
      </div>
    </section>
  );
}
