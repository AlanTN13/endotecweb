'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative py-16 md:py-32 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary text-sm font-bold rounded-full mb-6">
                                Líderes en Tecnología Médica
                            </span>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight">
                                Equipamiento médico de <span className="text-brand-primary">nueva generación</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
                        >
                            Venta, mantenimiento y soporte técnico especializado para equipamiento médico de alta complejidad.
                            Garantizamos la excelencia operativa de su centro de salud.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <Link
                                href="#contacto"
                                className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-center hover:bg-brand-dark transition-all shadow-[0_20px_40px_-15px_rgba(11,94,215,0.4)] hover:-translate-y-1 active:scale-95 text-lg"
                            >
                                Solicitar presupuesto
                            </Link>
                            <Link
                                href="#servicio-tecnico"
                                className="border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-2xl font-bold text-center hover:border-brand-primary hover:text-brand-primary transition-all active:scale-95 text-lg flex items-center justify-center gap-2"
                            >
                                Servicio técnico
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-gray-100">
                            <Image
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
                                alt="Tecnología Endoscópica de Avanzada"
                                fill
                                className="object-cover transform hover:scale-110 transition-transform duration-[3s]"
                                priority
                            />
                            {/* Overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Status Card Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[2rem] shadow-2xl border border-gray-50 flex items-center gap-4 hidden lg:flex"
                        >
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Soporte 24/7</p>
                                <p className="text-xs text-gray-500">Técnicos certificados</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-[-12deg] translate-x-32" />
        </section>
    );
};

export default Hero;
