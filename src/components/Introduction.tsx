import React from 'react';



const Introduction: React.FC = () => {
  return (
    <section 
      id="introduction" 
      className="py-16 md:py-20 bg-gradient-to-b from-[#1e1e1e] to-[#121212] relative" aria-label="Introduction section"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-tiro text-center mb-16 text-white">
          <span className="text-[#FF9933]">॥</span> The Essence of Hinduism <span className="text-[#FF9933]">॥</span>
        </h2>
        <div className="space-y-8 text-white font-poppins drop-shadow-md">
  {/* Oral Tradition Illustration */}
  <div className="flex justify-center mb-8">
    <img 
      src="https://unsplash.com/photos/9pw4TKvT3po/download?force=true" 
      alt="Oral tradition storytelling illustration" 
      className="w-full max-w-md rounded-lg shadow-lg object-cover border border-[#333]"
      style={{maxHeight: 260}}
    />
  </div>
          <p className="text-lg leading-relaxed text-white font-medium drop-shadow-md">
            Hinduism, known as <span className="text-[#FF9933] font-tiro">सनातन धर्म</span> (Sanātana Dharma) or "the eternal way," 
            is one of the world's oldest living religions with roots dating back more than 4,000 years. Unlike many other faiths, 
            Hinduism has no single founder, no single scripture, and no commonly agreed set of teachings.
          </p>
          <p className="text-lg leading-relaxed text-white font-medium drop-shadow-md">
            At its core, Hinduism embraces the concept of <span className="text-[#FF9933] font-tiro">ब्रह्मन</span> (Brahman) - the ultimate reality 
            that transcends all existence. The divine is believed to reside in all beings as <span className="text-[#FF9933] font-tiro">आत्मन</span> (Atman), 
            or the eternal soul, creating a profound spiritual connection between all living entities.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-[#FF9933] transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-[#FF9933]">Core Beliefs</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>The divine exists in all beings (Atman)</li>
                <li>Karma - actions have consequences</li>
                <li>Dharma - righteous duty and cosmic order</li>
                <li>Moksha - liberation from the cycle of rebirth</li>
                <li>Respect for all living beings</li>
              </ul>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333] hover:border-[#138808] transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-[#138808]">Philosophical Schools</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Vedanta - knowledge of the ultimate reality</li>
                <li>Yoga - union with the divine</li>
                <li>Samkhya - enumeration of cosmic principles</li>
                <li>Nyaya - logical analysis and reasoning</li>
                <li>Vaisheshika - atomic theory and naturalism</li>
              </ul>
            </div>
          </div>
          <p className="text-lg leading-relaxed mt-8">
            Hinduism celebrates diversity in thought and practice, allowing followers to connect with the divine through various paths: 
            <span className="text-[#FF9933] font-tiro"> ज्ञान योग</span> (knowledge), <span className="text-[#FF9933] font-tiro">भक्ति योग</span> (devotion), 
            <span className="text-[#FF9933] font-tiro"> कर्म योग</span> (selfless action), and <span className="text-[#FF9933] font-tiro">राज योग</span> (meditation). 
            This inclusive approach has allowed Hinduism to evolve and adapt throughout millennia while maintaining its spiritual essence.
          </p>
        </div>
        <div className="flex justify-center mt-12">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-glow">
            <circle cx="40" cy="40" r="36" stroke="#FF9933" strokeWidth="4" fill="#181818" />
            <circle cx="40" cy="40" r="28" stroke="#138808" strokeWidth="2" fill="none" />
            <g>
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1={40}
                  y1={12}
                  x2={40}
                  y2={22}
                  stroke="#FF9933"
                  strokeWidth="2"
                  transform={`rotate(${i * 30} 40 40)`}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#121212] to-transparent"></div>
    </section>
  );
};

export default Introduction;