'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.specialties, href: '/#especialidades' },
    { name: t.nav.techService, href: '/#servicio-tecnico' },
    { name: t.nav.about, href: '/#nosotros' },
    { name: t.nav.contact, href: '/#contacto' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg h-16' : 'bg-white h-24'
        } border-b border-gray-100 items-center flex`}
    >
      <div className="max-w-6xl mx-auto px-4 w-full flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className={`font-black tracking-tighter text-brand-primary transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-3xl'
            }`}>
            ENDOTEC SALUD
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-brand-primary font-bold text-sm transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center space-x-3 border-l border-gray-100 pl-8">
            <button
              onClick={() => setLanguage('es')}
              className={`flex items-center space-x-1.5 group transition-all ${language === 'es' ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
            >
              <span className={`text-xl transition-transform ${language === 'es' ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'}`}>🇦🇷</span>
            </button>
            <button
              onClick={() => setLanguage('pt')}
              className={`flex items-center space-x-1.5 group transition-all ${language === 'pt' ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
            >
              <span className={`text-xl transition-transform ${language === 'pt' ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'}`}>🇧🇷</span>
            </button>
          </div>

          <Link
            href="/#contacto"
            className="bg-brand-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-dark transition-all shadow-[0_10px_20px_-5px_rgba(11,94,215,0.4)] active:scale-95 text-sm uppercase tracking-wider"
          >
            {t.nav.budget}
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 absolute top-full w-full left-0 overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col p-6 space-y-4">
              <div className="flex items-center space-x-6 pb-4 border-b border-gray-50">
                <button
                  onClick={() => { setLanguage('es'); setIsOpen(false); }}
                  className={`flex items-center space-x-2 ${language === 'es' ? 'opacity-100' : 'opacity-50 grayscale'}`}
                >
                  <span className="text-2xl">🇦🇷</span>
                </button>
                <button
                  onClick={() => { setLanguage('pt'); setIsOpen(false); }}
                  className={`flex items-center space-x-2 ${language === 'pt' ? 'opacity-100' : 'opacity-50 grayscale'}`}
                >
                  <span className="text-2xl">🇧🇷</span>
                </button>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-900 font-bold py-3 text-lg border-b border-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contacto"
                className="bg-brand-primary text-white px-6 py-4 rounded-2xl font-bold text-center text-lg shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.budget}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
