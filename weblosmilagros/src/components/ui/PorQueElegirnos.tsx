'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiTag, FiClock, FiSmartphone } from 'react-icons/fi';

const features = [
  {
    icon: <FiMapPin size={32} />,
    title: 'Cerca de ti',
    desc: 'A pasos de tu hogar en Sr. de los Milagros.'
  },
  {
    icon: <FiTag size={32} />,
    title: 'Precios justos',
    desc: 'Los mejores precios para tu canasta básica.'
  },
  {
    icon: <FiClock size={32} />,
    title: 'Horario extendido',
    desc: 'Abiertos de 7:00 AM a 10:00 PM todos los días.'
  },
  {
    icon: <FiSmartphone size={32} />,
    title: 'Pedidos por WhatsApp',
    desc: 'Haz tu lista y te lo llevamos a casa.'
  }
];

export default function PorQueElegirnos() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-black text-gray-900 mb-2 font-outfit inline-block relative"
            >
                ¿Por qué comprar aquí?
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[var(--primary)] rounded-full" />
            </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold font-outfit text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
