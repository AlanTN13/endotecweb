'use client';

import { useState } from 'react';
import { CheckCircle2, MessageSquare, Info, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const TechService = () => {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="servicio-tecnico" className="relative py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-primary font-bold text-sm uppercase tracking-[0.3em] mb-4 block">
                                {t.techService.tag}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                                {t.techService.title} <br />
                                <span className="text-brand-primary italic">{t.techService.titleAccent}</span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-xl text-gray-600 leading-relaxed font-light"
                        >
                            {t.techService.description}
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {t.techService.services.map((service, idx) => (
                                <motion.div
                                    key={service}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (idx * 0.1) }}
                                    className="flex items-center space-x-4 text-gray-800 font-semibold bg-gray-50 p-4 rounded-2xl hover:bg-blue-50 transition-colors"
                                >
                                    <div className="bg-brand-primary/10 p-1.5 rounded-lg">
                                        <CheckCircle2 size={18} className="text-brand-primary flex-shrink-0" />
                                    </div>
                                    <span className="text-[15px]">{service}</span>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-5 pt-6"
                        >
                            <a
                                href="https://wa.me/5491125793777"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:shadow-[0_20px_40px_-10px_rgba(37,211,102,0.3)] transition-all active:scale-95 text-lg"
                            >
                                <MessageSquare size={22} fill="currentColor" />
                                <span>{t.techService.cta}</span>
                            </a>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="border-2 border-gray-100 text-gray-700 px-10 py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:border-brand-primary hover:text-brand-primary transition-all active:scale-95 text-lg bg-white"
                            >
                                <Info size={22} />
                                <span>{t.techService.warranty}</span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Column (Visual) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "backOut" }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-[#0B5ED7] to-[#052C3E] h-[500px] md:h-[650px] rounded-[3rem] p-16 flex items-center justify-center text-center shadow-[0_50px_100px_-30px_rgba(11,94,215,0.3)] relative overflow-hidden group">
                            {/* Abstract Shapes */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                            {/* Inner Border Animation */}
                            <div className="absolute inset-8 border border-white/10 rounded-[2.5rem] pointer-events-none group-hover:inset-6 transition-all duration-700" />

                            <div className="relative z-10 space-y-8">
                                <div className="w-32 h-32 bg-white/10 backdrop-blur-xl rounded-[2.5rem] mx-auto flex items-center justify-center mb-8 border border-white/20 shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-inner flex items-center justify-center">
                                        <div className="w-8 h-8 bg-brand-primary animate-pulse rounded-full" />
                                    </div>
                                </div>
                                <h3 className="text-white text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">
                                    {t.techService.labName}<br />
                                    <span className="text-brand-primary text-2xl tracking-[0.2em] font-light">{t.techService.labSub}</span>
                                </h3>
                                <p className="text-white/40 text-sm max-w-[240px] mx-auto font-medium tracking-widest leading-relaxed">
                                    {t.techService.cert}
                                </p>
                            </div>
                        </div>

                        {/* Soft decorative blur */}
                        <div className="absolute -z-10 -bottom-20 -right-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px]" />
                    </motion.div>
                </div>
            </div>

            {/* Warranty Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white w-full max-w-xl rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 max-h-[90vh] flex flex-col"
                        >
                            <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-50 rounded-full z-10"
                                >
                                    <X size={24} />
                                </button>

                                <div className="space-y-6 md:space-y-8">
                                    <div>
                                        <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-4 md:mb-6">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <p className="text-brand-primary font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
                                            {t.techService.warrantyModal.subtitle}
                                        </p>
                                        <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-none">
                                            {t.techService.warrantyModal.title}
                                        </h3>
                                    </div>

                                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                                        {t.techService.warrantyModal.content}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                        {t.techService.warrantyModal.points.map((point: string) => (
                                            <div key={point} className="flex items-center space-x-3 text-gray-700 font-bold bg-gray-50 p-4 rounded-xl md:rounded-2xl">
                                                <div className="bg-brand-primary text-white p-1 rounded-full flex-shrink-0">
                                                    <Check size={12} />
                                                </div>
                                                <span className="text-[12px] md:text-[13px] leading-tight">{point}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="w-full bg-brand-primary text-white py-5 md:py-6 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand-primary/20 active:scale-95 uppercase tracking-widest"
                                    >
                                        {t.techService.warrantyModal.close}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TechService;
