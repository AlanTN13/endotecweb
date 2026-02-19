'use client';

import { Shield, Users, Layers, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

const Differentials = () => {
    const items = [
        {
            icon: <Microscope size={32} />,
            title: 'Especialización técnica real',
            description: 'Personal capacitado en las fábricas de origen con certificación internacional.',
        },
        {
            icon: <Users size={32} />,
            title: 'Atención personalizada',
            description: 'Acompañamiento en cada etapa de su compra o servicio técnico.',
        },
        {
            icon: <Layers size={32} />,
            title: 'Equipos testeados',
            description: 'Controles de calidad rigurosos antes de cada entrega bajo normas ISO.',
        },
        {
            icon: <Shield size={32} />,
            title: 'Garantía y trazabilidad',
            description: 'Historia completa de mantenimiento y repuestos de cada equipo.',
        },
    ];

    return (
        <section id="nosotros" className="py-24 bg-gray-50/30">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex flex-col items-center text-center space-y-6 group"
                        >
                            <div className="w-20 h-20 bg-white rounded-3xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_-10px_rgba(11,94,215,0.3)]">
                                {item.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentials;
