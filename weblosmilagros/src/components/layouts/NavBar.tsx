'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMenu, FiShoppingBag, FiSearch, FiUser } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show the main navbar in the admin area
  if (pathname.startsWith('/admin')) return null;

  const navLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'PRODUCTOS', href: '/productos' },
    { name: 'NOSOTROS', href: '/#nosotros' },
    { name: 'CONTACTO', href: '/contacto' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/10 py-3'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
              M
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tighter text-white">BODEGUITA</span>
              <span className="text-[10px] font-bold text-blue-400 tracking-[0.2em]">LOS MILAGROS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-bold tracking-widest transition-all hover:text-blue-400 ${pathname === link.href ? 'text-blue-400' : 'text-gray-300'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons & Actions */}
          <div className="flex items-center gap-6">
            <button className="text-gray-300 hover:text-white transition-colors">
              <FiSearch size={20} />
            </button>
            <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
              <FiUser size={20} />
            </Link>
            <button className="relative text-gray-300 hover:text-white transition-colors">
              <FiShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 text-[10px] font-bold rounded-full flex items-center justify-center text-white">
                0
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white p-2 bg-white/5 rounded-lg border border-white/10"
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-2xl lg:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">M</div>
                <span className="font-bold text-white uppercase tracking-widest">Milagros</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 bg-white/5 rounded-lg border border-white/10 text-white"
              >
                <FiX size={26} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-4xl font-bold text-white hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-10 border-t border-white/10 flex flex-col gap-8">
              <div className="flex gap-6">
                <Link href="/login" className="flex-1 bg-white/5 border border-white/10 py-4 rounded-2xl text-center font-bold text-white hover:bg-white/10 transition-all">
                  ADMIN
                </Link>
                <Link href="/contacto" className="flex-1 bg-blue-600 py-4 rounded-2xl text-center font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                  PEDIDOS
                </Link>
              </div>
              <p className="text-center text-gray-500 text-sm">
                &copy; 2026 Bodeguita Los Milagros
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
