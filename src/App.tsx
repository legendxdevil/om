import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Deities from './components/Deities';
import Rituals from './components/Rituals';
import Festivals from './components/Festivals';
import Scriptures from './components/Scriptures';
import Quotes from './components/Quotes';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';
import ParallaxBackground from './components/ParallaxBackground';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId: number;
    const updateScroll = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(updateScroll);
    };
    rafId = requestAnimationFrame(updateScroll);

    return () => {
      // Cancel animation frame to prevent memory leaks
      cancelAnimationFrame(rafId);
      
      // Clean up Lenis
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app relative overflow-hidden">
      <ParallaxBackground />
      <Navbar />
      <BackgroundMusic />
      <main>
        <Hero />
        <Introduction />
        <Deities />
        <Rituals />
        <Festivals />
        <Scriptures />
        <Quotes />
      </main>
      <Footer />
    </div>
  );
};

export default App;