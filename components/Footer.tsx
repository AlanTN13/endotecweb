'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <img
                                src="/images/logo-endotec.png"
                                alt="Endotec"
                                className="h-10"
                            />
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                            {t.footer.description}
                        </p>
                    </div>

                    {/* Column 2: Nav */}
                    <div>
                        <h4 className="text-gray-900 font-bold text-lg mb-8 tracking-tight">{t.footer.navTitle}</h4>
                        <ul className="space-y-4 text-xs font-semibold text-gray-500">
                            <li><Link href="/" className="hover:text-brand-primary transition-colors">{t.nav.about}</Link></li>
                            <li><Link href="#especialidades" className="hover:text-brand-primary transition-colors">{t.nav.specialties}</Link></li>
                            <li><Link href="#servicio-tecnico" className="hover:text-brand-primary transition-colors">{t.nav.techService}</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-gray-900 font-bold text-lg mb-8 tracking-tight">{t.footer.contactTitle}</h4>
                        <ul className="space-y-6 text-xs text-gray-500 font-medium">
                            <li className="flex items-start space-x-4">
                                <MapPin size={18} className="text-brand-primary flex-shrink-0 mt-0.5" />
                                <span className="leading-tight">Puerto Madero, CABA,<br /><span className="text-xs text-gray-400">Buenos Aires, Argentina</span></span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone size={18} className="text-brand-primary flex-shrink-0" />
                                <a href={t.contact.phoneHref} className="hover:text-brand-primary transition-colors">
                                    {t.contact.phone}
                                </a>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail size={18} className="text-brand-primary flex-shrink-0" />
                                <a href={t.contact.emailHref} className="hover:text-brand-primary transition-colors break-all">
                                    {t.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/Brand Note */}
                    <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                        <h4 className="text-gray-900 font-bold text-lg mb-4">{t.footer.supportTitle}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {t.footer.supportDesc}
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">{t.footer.systemStatus}</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 space-y-6 md:space-y-0 uppercase tracking-[0.2em] font-black">
                    <p>{t.footer.rights}</p>
                    <a
                        href="https://www.nexopstech.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 transition-all hover:opacity-80"
                    >
                        <span className="text-gray-400">Powered by</span>
                        <div className="flex items-center gap-2 group-hover:scale-105 transition-transform">
                            <img
                                src="/images/logo-nexops.png"
                                alt="NexOps Tech"
                                className="h-6"
                            />
                            <span className="text-gray-900 text-sm font-black tracking-tight normal-case">NexOps</span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
