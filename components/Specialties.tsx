'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const specialties = [
    {
        id: 'artroscopia',
        title: 'Artroscopia',
        description: 'Sistemas de visualización y herramientas quirúrgicas para articulaciones.',
        image: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=400',
    },
    {
        id: 'cirugia-general',
        title: 'Cirugía General',
        description: 'Soluciones quirúrgicas integrales para diversas especialidades médicas.',
        image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=400',
    },
    {
        id: 'gastroenterologia',
        title: 'Gastroenterología',
        description: 'Equipos diagnósticos especializados para salud digestiva avanzada.',
        image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400',
    },
    {
        id: 'urologia',
        title: 'Urología',
        description: 'Tecnología médica enfocada en tratamientos urológicos de precisión.',
        image: 'https://images.unsplash.com/photo-1530026339112-04ce418e9c16?auto=format&fit=crop&q=80&w=400',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Specialties = () => {
    return (
        <section id="especialidades" className="py-24 bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-4 block">Especialidades</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                            Soluciones Médicas Especializadas
                        </h2>
                        <div className="h-1.5 w-24 bg-brand-primary mx-auto mt-6 rounded-full" />
                    </motion.div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto"
                >
                    {specialties.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100/50 flex flex-col"
                        >
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">{item.description}</p>
                                <Link
                                    href={`#${item.id}`}
                                    className="inline-flex items-center text-brand-primary font-bold text-sm hover:translate-x-1 transition-transform group/link"
                                >
                                    Ficha técnica <ChevronRight size={18} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Specialties;
