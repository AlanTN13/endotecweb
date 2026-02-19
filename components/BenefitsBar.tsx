'use client';

import { Zap, ShieldCheck, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

const BenefitsBar = () => {
    const { t } = useLanguage();

    const benefits = [
        { icon: <Zap size={22} />, text: t.benefits.quickResponse },
        { icon: <ShieldCheck size={22} />, text: t.benefits.guaranteed },
        { icon: <Headphones size={22} />, text: t.benefits.support },
    ];

    return (
        <div className="bg-brand-primary relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center py-6 space-y-4 md:space-y-0 text-white font-black tracking-[0.15em] text-xs">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="flex items-center space-x-4 group cursor-default"
                        >
                            <div className="bg-white/10 p-2 rounded-xl group-hover:bg-white/20 transition-colors">
                                {benefit.icon}
                            </div>
                            <span className="group-hover:translate-x-1 transition-transform">{benefit.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BenefitsBar;
