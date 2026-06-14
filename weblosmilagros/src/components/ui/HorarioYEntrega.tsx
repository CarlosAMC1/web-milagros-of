'use client';

import { motion } from 'framer-motion';
import { FiTruck, FiClock, FiCheckCircle } from 'react-icons/fi';

export default function HorarioYEntrega() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
            >
                <div className="w-12 h-12 bg-[var(--primary)]/10 text-[var(--primary)] rounded-xl flex items-center justify-center mb-6">
                    <FiTruck size={24} />
                </div>
                <h3 className="text-2xl font-bold font-outfit text-gray-900 mb-4">Zona de Reparto</h3>
                <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-600">
                        <FiCheckCircle className="text-green-500" /> Sector Sr. de los Milagros
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                        <FiCheckCircle className="text-green-500" /> Viñani (hasta 3ra etapa)
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                        <FiCheckCircle className="text-green-500" /> Gregorio Albarracín (zonas céntricas)
                    </li>
                </ul>
                <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-xl text-sm font-bold">
                    ¡Envío GRATIS por compras mayores a S/ 50!
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[var(--primary)] text-white p-8 rounded-3xl border border-[var(--primary)] shadow-xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="w-12 h-12 bg-[var(--secondary)] text-black rounded-xl flex items-center justify-center mb-6 relative z-10">
                    <FiClock size={24} />
                </div>
                <h3 className="text-2xl font-bold font-outfit text-[var(--secondary)] mb-4 relative z-10">Horario de Atención</h3>
                <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                        <span className="font-bold">Lunes a Sábado</span>
                        <span className="text-white/80">7:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                        <span className="font-bold">Domingos y Feriados</span>
                        <span className="text-white/80">8:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <span className="font-bold">Delivery por WhatsApp</span>
                        <span className="text-white/80">8:00 AM - 8:00 PM</span>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}
