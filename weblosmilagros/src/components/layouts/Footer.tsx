'use client';

import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail, FiMapPin, FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8 border-t-4 border-[var(--secondary)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: About */}
          <div>
            <div className="flex flex-col leading-none mb-6">
              <span className="text-2xl font-black tracking-tight text-white font-outfit">BODEGUITA</span>
              <span className="text-xs font-bold text-[var(--secondary)] tracking-widest uppercase">Los Milagros</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Tu bodega de confianza en Tacna. Ofrecemos los mejores productos con la mejor atención y entrega rápida.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-outfit mb-6 text-[var(--secondary)]">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="text-[var(--secondary)]">▸</span> Inicio</Link></li>
              <li><Link href="/productos" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="text-[var(--secondary)]">▸</span> Productos</Link></li>
              <li><Link href="/#ofertas" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="text-[var(--secondary)]">▸</span> Ofertas</Link></li>
              <li><Link href="/#nosotros" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="text-[var(--secondary)]">▸</span> Nosotros</Link></li>
            </ul>
          </div>

          {/* Col 3: Categorias */}
          <div>
            <h4 className="text-lg font-bold font-outfit mb-6 text-[var(--secondary)]">Categorías</h4>
            <ul className="space-y-3">
              <li><Link href="/productos?categoria=abarrotes" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="text-[var(--secondary)]">▸</span> Abarrotes</Link></li>
              <li><Link href="/productos?categoria=bebidas" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="text-[var(--secondary)]">▸</span> Bebidas</Link></li>
              <li><Link href="/productos?categoria=limpieza" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="text-[var(--secondary)]">▸</span> Limpieza</Link></li>
              <li><Link href="/productos?categoria=snacks" className="text-white/70 hover:text-white transition-colors flex items-center gap-2"><span className="text-[var(--secondary)]">▸</span> Snacks</Link></li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h4 className="text-lg font-bold font-outfit mb-6 text-[var(--secondary)]">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[var(--secondary)] mt-1 shrink-0" size={18} />
                <span className="text-white/70">Manzana D Lote 15, Sr. de los Milagros, Tacna</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[var(--secondary)] shrink-0" size={18} />
                <span className="text-white/70">+51 923 550 243</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[var(--secondary)] shrink-0" size={18} />
                <span className="text-white/70">hola@bodeguitalosmilagros.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Bodeguita Los Milagros. Todos los derechos reservados.
          </p>
          <p className="text-white/50 text-sm flex items-center gap-1">
            Hecho con <FiHeart className="text-red-500 fill-current" /> en Tacna
          </p>
        </div>
      </div>
    </footer>
  );
}