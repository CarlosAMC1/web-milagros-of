"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import products from "@/data/productos.json";
import { notFound } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const producto = products.find((p) => p.id.toString() === resolvedParams.id);

  if (!producto) return notFound();

  const phoneRaw = "51923550243"; // De siteConfig o hardcoded si es necesario
  const waLink = buildWhatsAppLink({
    phone: phoneRaw,
    productName: producto.nombre
  });

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link
          href="/productos"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al catálogo
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Gallery Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5"
          >
            {producto.descuento && producto.descuento > 0 && (
              <div className="absolute top-6 right-6 z-20 bg-red-500 text-white font-bold px-4 py-2 rounded-xl text-lg shadow-lg">
                -{producto.descuento}%
              </div>
            )}
            <Image
              src={producto.imagen || "/placeholder-product.jpg"}
              alt={producto.nombre}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-blue-400 font-medium tracking-wider uppercase mb-2">
              {producto.categoria}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {producto.nombre}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold text-white">
                {formatPrice(producto.precio * (1 - (producto.descuento || 0) / 100))}
              </span>
              {producto.descuento && producto.descuento > 0 && (
                <span className="text-2xl text-gray-500 line-through">
                  {formatPrice(producto.precio)}
                </span>
              )}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-2">Descripción del producto</h3>
              <p className="text-gray-400 leading-relaxed">
                {producto.descripcion || "Este producto es parte de nuestra selección premium. Calidad garantizada para tu hogar."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="primary" size="lg" className="w-full">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43 0 9.856-4.426 9.858-9.855.002-2.63-1.023-5.103-2.887-6.968-1.863-1.865-4.334-2.89-6.967-2.891-5.432 0-9.858 4.426-9.86 9.856-.001 2.189.633 4.067 1.696 5.889l-1.104 4.037 4.148-1.087zm12.533-7.045c-.307-.154-1.817-.897-2.098-1-.282-.103-.487-.154-.69.155-.205.308-.795 1-1.012 1.233-.217.234-.435.263-.742.11-.307-.154-1.298-.478-2.472-1.525-.913-.814-1.53-1.82-1.71-2.129-.18-.309-.02-.477.135-.63.14-.136.31-.362.463-.541.155-.181.206-.309.309-.515.103-.206.051-.387-.025-.541-.077-.155-.69-1.668-.946-2.285-.248-.601-.5-.52-.69-.53h-.59c-.205 0-.538.077-.82.385-.282.309-1.077 1.053-1.077 2.57s1.103 2.981 1.257 3.187c.154.205 2.17 3.313 5.253 4.643.733.316 1.306.505 1.751.646.736.234 1.407.201 1.937.122.59-.088 1.817-.743 2.074-1.463.256-.72.256-1.336.179-1.463-.077-.127-.282-.204-.59-.358z" />
                  </svg>
                  Pedir por WhatsApp
                </Button>
              </a>
              <Button variant="secondary" size="lg">
                Agregar al carrito
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 border-t border-white/10 pt-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Stock: {producto.stock || 0} unidades
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Entrega rápida
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
