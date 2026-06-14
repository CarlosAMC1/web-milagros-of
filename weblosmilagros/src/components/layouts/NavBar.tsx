'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMenu, FiShoppingBag, FiSearch, FiUser, FiPhone, FiClock } from 'react-icons/fi';
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

  if (pathname.startsWith('/admin')) return null;

  const navLinks = [
    { name: 'INICIO', href: '/' },
    { name: 'PRODUCTOS', href: '/productos' },
    { name: 'OFERTAS', href: '/#ofertas' },
    { name: 'NOSOTROS', href: '/#nosotros' },
  ];

  return (
    <>
      {/* Top Bar - Shopify Style */}
      <div className="bg-[var(--primary)] text-white text-xs py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><FiClock /> Lun - Dom: 7:00 AM - 10:00 PM</span>
            <span className="flex items-center gap-2"><FiPhone /> +51 923 550 243</span>
          </div>
          <div>
            <span className="font-semibold text-[var(--secondary)]">¡Envío gratis a todo Tacna por compras mayores a S/ 50!</span>
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-3'
            : 'bg-white py-5 border-b border-gray-100'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu size={24} />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[var(--primary)] text-[var(--secondary)] rounded-xl flex items-center justify-center font-bold text-2xl group-hover:scale-105 transition-transform shadow-md">
              M
            </div>
            <div className="flex flex-col leading-none hidden sm:flex">
              <span className="text-xl font-black tracking-tight text-[var(--primary)] font-outfit">BODEGUITA</span>
              <span className="text-[10px] font-bold text-[var(--secondary)] tracking-widest uppercase">Los Milagros</span>
            </div>
          </Link>

          {/* Desktop Navigation & Search */}
          <div className="hidden lg:flex flex-1 justify-center px-8">
            <div className="flex gap-8 items-center mr-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold tracking-wide transition-all hover:text-[var(--secondary)] ${
                    pathname === link.href ? 'text-[var(--primary)]' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {/* Search Bar */}
            <div className="relative w-full max-w-md hidden xl:block">
              <input 
                type="text" 
                placeholder="Busca productos, marcas o categorías..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 px-5 pl-12 text-sm focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Icons & Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="text-gray-600 hover:text-[var(--primary)] transition-colors xl:hidden">
              <FiSearch size={22} />
            </button>
            <Link href="/login" className="text-gray-600 hover:text-[var(--primary)] transition-colors hidden sm:block">
              <FiUser size={22} />
            </Link>
            <button className="relative text-gray-600 hover:text-[var(--primary)] transition-colors flex items-center gap-2">
              <FiShoppingBag size={22} />
              <span className="hidden sm:block text-sm font-bold">S/ 0.00</span>
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[var(--secondary)] text-[10px] font-bold rounded-full flex items-center justify-center text-white shadow-sm border-2 border-white">
                0
              </span>
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
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden flex"
          >
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[var(--background)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--primary)] text-[var(--secondary)] rounded-xl flex items-center justify-center font-bold text-xl">M</div>
                  <div className="flex flex-col leading-none">
                    <span className="font-black text-[var(--primary)] font-outfit">BODEGUITA</span>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-800 bg-gray-100 rounded-full"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="p-6 border-b border-gray-100">
                <div className="relative w-full">
                  <input 
                    type="text" 
                    placeholder="Buscar..." 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 pl-10 text-sm focus:outline-none"
                  />
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>

              <nav className="flex flex-col p-4 flex-1 overflow-y-auto">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 px-4 text-lg font-bold text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex flex-col gap-3">
                  <Link href="/login" className="w-full bg-white border border-gray-200 py-3 rounded-xl text-center font-bold text-gray-700 shadow-sm flex items-center justify-center gap-2">
                    <FiUser /> Mi Cuenta
                  </Link>
                  <Link href="/contacto" className="w-full bg-[var(--primary)] py-3 rounded-xl text-center font-bold text-white shadow-md flex items-center justify-center gap-2 hover:opacity-90">
                    <FiPhone /> Soporte / Pedidos
                  </Link>
                </div>
              </div>
            </motion.div>
            <div className="flex-1" onClick={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
