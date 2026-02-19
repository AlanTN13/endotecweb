'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { specialtiesData } from '@/lib/specialtiesData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLanguage } from '@/context/LanguageContext';

export default function SpecialtyDetail() {
    const params = useParams();
    const id = params.id as string;
    const { language, t } = useLanguage();

    // Safety check for language as key
    const langKey = (language === 'pt' ? 'pt' : 'es') as 'es' | 'pt';
    const data = specialtiesData[langKey][id];

    if (!data) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gray-50">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover opacity-10 blur-[2px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
                </div>

                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            href="/#especialidades"
                            className="inline-flex items-center text-brand-primary font-bold text-sm mb-8 hover:-translate-x-1 transition-transform group"
                        >
                            <ArrowLeft size={16} className="mr-2" /> {t.specialtyPage.back}
                        </Link>
                        <span className="text-brand-primary font-bold text-sm tracking-widest uppercase mb-4 block">{t.specialtyPage.tag}</span>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl leading-relaxed">
                            {data.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-10"
                        >
                            <div className="prose prose-lg max-w-none">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">{t.specialtyPage.aboutTitle}</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {data.description}
                                </p>
                            </div>

                            <div className="bg-brand-primary/5 p-8 md:p-10 rounded-[2.5rem] border border-brand-primary/10">
                                <h3 className="text-2xl font-bold text-brand-primary mb-6">{t.specialtyPage.featuresTitle}</h3>
                                <ul className="space-y-4">
                                    {data.features.map((feature: string, index: number) => (
                                        <li key={index} className="flex items-start gap-4 text-gray-700 font-medium">
                                            <CheckCircle2 className="text-brand-primary flex-shrink-0 mt-1" size={24} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="sticky top-32"
                        >
                            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10 text-white">
                                    <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">{t.specialtyPage.commitmentTag}</p>
                                    <h4 className="text-2xl font-bold italic">
                                        "{data.benefits}"
                                    </h4>
                                </div>
                            </div>

                            <div className="mt-10 bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">{t.specialtyPage.quoteCta}</h3>
                                <a
                                    href={`https://wa.me/5491125793777?text=Hola! Me interesa recibir más información sobre ${data.title}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-brand-primary text-white w-full py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-brand-primary/20 transition-all active:scale-95"
                                >
                                    {t.specialtyPage.infoBtn} <ChevronRight size={20} className="ml-2" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
