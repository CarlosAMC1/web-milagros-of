'use client';

import { FiMessageCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const numero = '923550243'; // cambia por el número real (sin '+')
  const mensaje = encodeURIComponent('Hola, quiero hacer un pedido desde la web de Los Milagros');

  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={`https://wa.me/${numero}?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[var(--primary)] text-white rounded-full p-4 shadow-2xl transition-all animate-pulse-gold border-2 border-[var(--secondary)]"
    >
      <FiMessageCircle className="w-8 h-8" />
    </motion.a>
  );
}
