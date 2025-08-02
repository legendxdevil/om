import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ParallaxBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make sure GSAP is properly initialized
    if (typeof gsap === 'undefined' || !ScrollTrigger) {
      console.error('GSAP or ScrollTrigger not loaded properly');
      return;
    }

    // Create context to isolate animations
    const ctx = gsap.context(() => {
      if (backgroundRef.current && starsRef.current) {
        // Create parallax effect for the main background
        gsap.to(backgroundRef.current, {
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
          },
          y: '30%',
          ease: 'none'
        });

        // Create parallax effect for the stars layer
        gsap.to(starsRef.current, {
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1
          },
          y: '15%',
          ease: 'none'
        });
      }
    });

    return () => {
      // Clean up context
      ctx.revert();
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden" aria-hidden="true">
      {/* Main background with temple silhouette */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1544473246-4efa20378631?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          filter: 'brightness(0.7) saturate(0.8)',
          transform: 'scale(1.1)'
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] via-transparent to-[#0f0f0f] opacity-40"
      ></div>
      
      {/* Stars layer */}
      <div 
        ref={starsRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          opacity: 0.4,
          mixBlendMode: 'screen'
        }}
      ></div>
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 150px rgba(0,0,0,0.9)',
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)'
        }}
      ></div>
      
      {/* Animated particles/dust - using CSS animations instead of inline styles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 rounded-full bg-white animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDuration: `${Math.random() * 4 + 2}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Add a subtle golden glow in the center */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,215,0,0.1) 0%, transparent 50%)'
        }}
      ></div>
    </div>
  );
};

export default ParallaxBackground;