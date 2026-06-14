'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

interface Testimonio {
  nombre: string;
  mensaje: string;
  foto: string;
}

export default function Testimonios() {
  const [testimonios, setTestimonios] = useState<Testimonio[]>([]);

  useEffect(() => {
    fetch('/testimonios.json')
      .then((res) => res.json())
      .then((data) => setTestimonios(data))
      .catch(() => {
        // Fallback data
        setTestimonios([
            { nombre: "María Gonzales", mensaje: "Excelente servicio y siempre tienen lo que necesito. La entrega es rapidísima.", foto: "/clientes/default.png" },
            { nombre: "Carlos Rivera", mensaje: "Los precios son justos y la fruta siempre llega fresca. Recomendado al 100%.", foto: "/clientes/default.png" },
            { nombre: "Ana Pérez", mensaje: "Mi bodega salvavidas. Pido por WhatsApp y en 15 minutos ya está en mi puerta.", foto: "/clientes/default.png" }
        ]);
      });
  }, []);

  return (
    <section id="testimonios" className="bg-[var(--background)] py-16 px-4 border-b border-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-black text-gray-900 mb-2 font-outfit inline-block relative"
            >
                Clientes Felices
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[var(--secondary)] rounded-full" />
            </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonios.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 transition-all border-l-4 border-l-[var(--primary)] flex flex-col h-full relative"
            >
              <div className="absolute top-6 right-6 text-gray-100">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="flex text-[var(--secondary)] mb-4">
                  {[1,2,3,4,5].map(star => <FiStar key={star} className="fill-current" />)}
              </div>
              <p className="text-gray-600 italic mb-6 relative z-10 flex-1">“{t.mensaje}”</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img
                    src={t.foto}
                    alt={t.nombre}
                    className="w-12 h-12 rounded-full object-cover bg-gray-100"
                    onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/clientes/default.png';
                    }}
                />
                <div>
                    <h4 className="text-gray-900 font-bold font-outfit">{t.nombre}</h4>
                    <span className="text-xs text-gray-500">Cliente verificado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
