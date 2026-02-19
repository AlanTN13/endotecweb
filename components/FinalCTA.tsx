'use client';

import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section id="contacto" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-brand-primary rounded-[3rem] p-12 md:p-20 text-center text-white shadow-[0_30px_60px_-15px_rgba(11,94,215,0.5)] relative overflow-hidden"
                >
                    {/* Subtle Design Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-dark/20 rounded-full blur-[80px] -ml-32 -mb-32" />

                    <div className="relative z-10 space-y-10">
                        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                            ¿Listo para optimizar <br />
                            <span className="opacity-80">su centro médico?</span>
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                            Cotizaciones al instante y asesoramiento especializado por ingenieros técnicos certificados.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a
                                href="https://wa.me/5491136427339"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-brand-primary px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-1 active:scale-95"
                            >
                                Solicitar presupuesto
                            </a>
                            <a
                                href="mailto:info@endotec.com.ar"
                                className="border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm"
                            >
                                Enviar Email
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
