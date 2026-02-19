'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

const WhatsAppButton = () => {
    const { t } = useLanguage();

    return (
        <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            href="https://wa.me/5491125793777"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow group overflow-visible"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} fill="currentColor" className="text-white relative z-10" />

            <div className="absolute right-0 bottom-full mb-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                <div className="bg-white rounded-[1.5rem] shadow-2xl border border-gray-100 overflow-hidden w-72">
                    {/* Header del "Modal" */}
                    <div className="bg-[#25D366] p-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <MessageCircle size={20} className="text-white" />
                        </div>
                        <div className="text-white">
                            <p className="text-xs opacity-90 font-medium tracking-wide">WhatsApp</p>
                            <p className="text-sm font-bold">En línea</p>
                        </div>
                    </div>
                    {/* Cuerpo del "Modal" */}
                    <div className="p-5 space-y-4 bg-gray-50/50">
                        <div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm border border-gray-100">
                            <p className="text-gray-600 text-[13px] leading-snug">
                                {t.whatsapp.welcome} <span className="text-[#25D366] font-bold">ENDOTEC SALUD</span>
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-2xl rounded-tr-none shadow-sm border border-gray-100">
                            <p className="text-gray-600 text-[13px] leading-snug font-medium">
                                {t.whatsapp.action}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        </motion.a>
    );
};

export default WhatsAppButton;
