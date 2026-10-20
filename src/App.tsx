import { useState } from 'react';
import { Academic } from './components/Academic';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LegalDialog, type LegalDoc } from './components/LegalDialog';
import { Navbar } from './components/Navbar';
import { Pillars } from './components/Pillars';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const [legal, setLegal] = useState<LegalDoc | null>(null);
  useReveal();

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Pillars />
        <Services />
        <Process />
        <Projects />
        <Academic />
        <FinalCta />
      </main>
      <Footer onOpenLegal={setLegal} />
      <WhatsAppFloat />
      <LegalDialog doc={legal} onClose={() => setLegal(null)} />
    </>
  );
}
