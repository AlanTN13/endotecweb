'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    return (
        <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            href="https://wa.me/5491136427339" // Updated to a more realistic sample or the one provided in earlier steps if any
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-shadow group overflow-visible"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle size={32} fill="currentColor" className="text-white relative z-10" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 py-2 px-4 rounded-xl shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap border border-gray-100">
                ¿En qué podemos ayudarte?
                <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-r border-t border-gray-100"></span>
            </span>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        </motion.a>
    );
};

export default WhatsAppButton;
