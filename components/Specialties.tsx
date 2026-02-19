'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

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
    const { t } = useLanguage();

    const specialtiesItems = [
        {
            id: 'artroscopia',
            title: t.specialties.items.artroscopia.title,
            description: t.specialties.items.artroscopia.description,
            image: '/images/specialties/artroscopia_v2.jpg',
        },
        {
            id: 'cirugia-general',
            title: t.specialties.items.cirugiaGeneral.title,
            description: t.specialties.items.cirugiaGeneral.description,
            image: '/images/specialties/cirugia-general.jpg',
        },
        {
            id: 'gastroenterologia',
            title: t.specialties.items.gastroenterologia.title,
            description: t.specialties.items.gastroenterologia.description,
            image: '/images/specialties/gastroenterologia_v2.webp',
        },
        {
            id: 'urologia',
            title: t.specialties.items.urologia.title,
            description: t.specialties.items.urologia.description,
            image: '/images/specialties/urologia_v2.jpg',
        },
    ];

    return (
        <section id="especialidades" className="py-24 bg-gray-50/50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-4 block">{t.specialties.tag}</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                            {t.specialties.title} <span className="text-brand-primary">{t.specialties.titleAccent}</span>
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
                    {specialtiesItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100/50 flex flex-col"
                        >
                            <div className="p-4 pb-0">
                                <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">{item.description}</p>
                                <Link
                                    href={`/especialidades/${item.id}`}
                                    className="inline-flex items-center text-brand-primary font-bold text-sm hover:translate-x-1 transition-transform group/link"
                                >
                                    {t.specialties.viewDetails} <ChevronRight size={18} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
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
