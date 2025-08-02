import React from 'react'; // Animation and refs removed

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#181818] via-[#232323] to-[#121212] px-4"
      aria-label="Hero section"
    >
      <div className="hero-content text-center px-4 max-w-4xl mx-auto mb-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-tiro text-white mb-6 leading-tight">
          <span className="text-[#FF9933]">सनातन धर्म</span>
          <span className="block mt-2">The Eternal Way of Life</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 font-poppins">
          Explore the divine essence of Hinduism - a timeless tradition that embraces cosmic truth, 
          spiritual wisdom, and the eternal connection between all living beings.
        </p>
        <div className="scroll-indicator text-white opacity-90 absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center flex flex-col items-center pointer-events-none select-none">
          <p className="text-base md:text-lg mb-2 font-poppins font-semibold tracking-wide drop-shadow-lg animate-pulse" aria-label="Scroll to explore">Scroll to explore</p>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#FF9933" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mx-auto animate-bounce-slow drop-shadow-glow"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;