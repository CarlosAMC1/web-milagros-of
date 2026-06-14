'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiClock } from 'react-icons/fi';

export default function Mapa() {
  return (
    <section className="bg-white py-16 px-4 border-b border-gray-100">
      <div className="container mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-black text-gray-900 mb-2 font-outfit inline-block relative"
            >
                Encuéntranos Aquí
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-[var(--primary)] rounded-full" />
            </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Mapa interactivo */}
          <div className="lg:w-2/3 w-full rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.056789!2d-70.2554567!3d-18.0089123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acf8aa1ff41bb%3A0x42327c374e75be96!2sBodeguita%20%22Los%20Milagros%22!5e0!3m2!1ses!2spe!4v1620000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Información de contacto */}
          <div className="lg:w-1/3 w-full bg-[var(--primary)] text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold font-outfit mb-6 text-[var(--secondary)]">Información</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl text-[var(--secondary)]">
                    <FiMapPin size={24} />
                </div>
                <div>
                  <p className="font-bold">Dirección</p>
                  <p className="text-white/80 text-sm mt-1">Manzana D Lote 15, Sr. de los Milagros<br/>Tacna, Perú</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl text-[var(--secondary)]">
                    <FiPhone size={24} />
                </div>
                <div>
                  <p className="font-bold">Teléfono / WhatsApp</p>
                  <p className="text-white/80 text-sm mt-1">+51 923 550 243</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-xl text-[var(--secondary)]">
                    <FiClock size={24} />
                </div>
                <div>
                  <p className="font-bold">Horario de Atención</p>
                  <p className="text-white/80 text-sm mt-1">Lunes a Domingo<br/>7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="mt-8 space-y-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Bodeguita+Los+Milagros,Tacna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[var(--secondary)] hover:opacity-90 text-black px-4 py-4 rounded-xl font-bold transition-all shadow-lg"
              >
                <FiMapPin />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}