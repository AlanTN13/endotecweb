'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitsBar from '@/components/BenefitsBar';
import Specialties from '@/components/Specialties';
import WhatsAppButton from '@/components/WhatsAppButton';
import TechService from '@/components/TechService';
import Differentials from '@/components/Differentials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BenefitsBar />
      <Specialties />
      <TechService />
      <Differentials />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
