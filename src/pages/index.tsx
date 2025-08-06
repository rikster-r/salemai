import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Pricing from '@/components/sections/Pricing';
import Spheres from '@/components/sections/Spheres';
import Services from '@/components/sections/Services';
import Footer from '@/components/Footer';
import localFont from 'next/font/local';
import Head from 'next/head';
import ContactModal from '@/components/ContactModal';
import { useState } from 'react';

const firsNeue = localFont({
  src: [
    {
      path: '../assets/fonts/TTFirsNeue-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue-ExtraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue-DemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../assets/fonts/TTFirsNeue-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTFirsNeue-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-firs-neue',
  fallback: ['system-ui', 'arial', 'sans-serif'],
  adjustFontFallback: false,
});

export default function Home() {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const openContactModal = (plan?: string) => {
    if (plan) {
      setSelectedPlan(plan);
    }
    setContactModalOpen(true);
  };

  return (
    <>
      <Head>
        <title>SalemAI</title>
      </Head>
      <div className={`min-h-screen ${firsNeue.className} relative`}>
        <Header openContactModal={openContactModal} />
        <main className="w-full">
          <Hero openContactModal={openContactModal} />
          <Spheres />
          <Services />
          <Pricing openContactModal={openContactModal} />
        </main>
        <Footer />
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setContactModalOpen(false)}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        />
      </div>
    </>
  );
}
