import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Always set menu opacity to 1 before animating for safety
    const menu = document.querySelector('.mobile-menu') as HTMLElement | null;
    if (menu) menu.style.opacity = '1';
    if (!isMenuOpen) {
      gsap.fromTo(
        '.mobile-menu',
        { y: -20, opacity: 0, pointerEvents: 'none' },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', pointerEvents: 'auto' }
      );
    } else {
      gsap.fromTo(
        '.mobile-menu',
        { y: 0, opacity: 1, pointerEvents: 'auto' },
        { y: -20, opacity: 0, duration: 0.5, ease: 'power3.in', pointerEvents: 'none' }
      );
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMenuOpen) toggleMenu();
    }
  };

  return (
    <nav aria-label="Main navigation" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1e1e1e]/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-[#FFD700] mr-2 text-3xl">ॐ</div>
          <h1 className="text-white font-tiro text-xl md:text-2xl">Divine Essence</h1>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {['introduction', 'deities', 'rituals', 'festivals', 'scriptures', 'quotes'].map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-[#FF9933] transition-colors capitalize font-poppins"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className="mobile-menu absolute top-full left-0 w-full bg-[#1e1e1e]/95 backdrop-blur-md py-4 opacity-0 -translate-y-5 pointer-events-none transition-all md:hidden">
        <ul className="flex flex-col space-y-4 px-4">
          {['introduction', 'deities', 'rituals', 'festivals', 'scriptures', 'quotes'].map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-[#FF9933] transition-colors capitalize font-poppins w-full text-left py-2"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;