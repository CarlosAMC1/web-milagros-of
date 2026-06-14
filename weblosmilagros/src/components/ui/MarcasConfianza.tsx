'use client';

import { motion } from 'framer-motion';

export default function MarcasConfianza() {
  const marcas = [
    { name: "Gloria", logo: "🥛" },
    { name: "Inca Kola", logo: "🥤" },
    { name: "Primor", logo: "🌻" },
    { name: "Costeño", logo: "🌾" },
    { name: "Bolívar", logo: "🧼" },
    { name: "San Luis", logo: "💧" },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Encuentra tus marcas favoritas
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            {marcas.map((marca, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    className="flex items-center gap-2 text-2xl font-black text-gray-400 hover:text-[var(--primary)] transition-all cursor-pointer"
                >
                    <span>{marca.logo}</span>
                    <span className="font-outfit">{marca.name}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
