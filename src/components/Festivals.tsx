import React from 'react';



interface FestivalProps {
  name: string;
  sanskritName: string;
  description: string;
  imageUrl: string;
  when: string;
  significance: string;
}

const festivals: FestivalProps[] = [
  {
    name: "Diwali",
    sanskritName: "दीपावली",
    description: "The festival of lights celebrating the victory of light over darkness and good over evil. Homes are decorated with oil lamps, candles, and colorful rangoli patterns.",
    imageUrl: "https://unsplash.com/photos/GardauGN-HU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZGl3YWxpJTIwZmVzdGl2YWx8ZW58MHx8fHwxNzUzNjMyNDcwfDA&force=true", // Diwali: Unsplash free image
    when: "October/November",
    significance: "Commemorates Lord Rama's return to Ayodhya after defeating Ravana and symbolizes the triumph of light over darkness."
  },
  {
    name: "Holi",
    sanskritName: "होली",
    description: "The festival of colors where people throw colored powders and water at each other, celebrating the arrival of spring and the victory of good over evil.",
    imageUrl: "https://unsplash.com/photos/D0ONyzGkc6w/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUzNzI4Nzk3fA&force=true", // Holi: Unsplash free image
    when: "February/March",
    significance: "Celebrates the divine love of Radha and Krishna, and the triumph of devotee Prahlada over the demoness Holika."
  },
  {
    name: "Navaratri",
    sanskritName: "नवरात्रि",
    description: "A nine-night festival dedicated to the worship of the divine feminine. Each night honors a different form of Goddess Durga with prayers, dance, and music.",
    imageUrl: "https://unsplash.com/photos/AWgwYtpgULo/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUzNzI4Nzk3fA&force=true", // Navaratri: Unsplash free image
    when: "September/October",
    significance: "Honors the divine feminine power (Shakti) and celebrates the victory of Goddess Durga over the demon Mahishasura."
  },
  {
    name: "Janmashtami",
    sanskritName: "जन्माष्टमी",
    description: "Celebrates the birth of Lord Krishna with fasting, devotional songs, dance performances, and the tradition of Dahi Handi (breaking a pot of yogurt).",
    imageUrl: "https://unsplash.com/photos/-jeARsrDO1c/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8a3Jpc2huYSUyMGphbm1hc2h0YW1pfGVufDB8fHx8MTc1MzYyNjA1NHww&force=true",
    when: "August/September",
    significance: "Commemorates the birth of Lord Krishna, who is considered the eighth avatar of Lord Vishnu."
  },
  {
    name: "Maha Shivratri",
    sanskritName: "महाशिवरात्रि",
    description: "The great night of Shiva, observed with fasting, all-night vigils, and offerings of bael leaves to Shiva lingas.",
    imageUrl: "https://unsplash.com/photos/LFWUgQ9NvTQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWFoYSUyMHNoaXZhcmF0cml8ZW58MHx8fHwxNzUzNzI4Nzk4fDA&force=true",
    when: "February/March",
    significance: "Honors Lord Shiva and commemorates the night when he performed the cosmic dance of creation, preservation, and destruction."
  }
];

const FestivalCard: React.FC<FestivalProps> = ({ name, sanskritName, description, imageUrl, when, significance }) => {
  



  return (
    <div 
      
      className="bg-[#232323] p-6 rounded-lg shadow-lg border border-[#333] hover:border-[#FF9933] flex flex-col transition-all duration-300"
    >
      <div className="min-h-[192px] bg-[#232323] rounded overflow-hidden flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={name + ' festival illustration'} 
          className="w-full h-full object-cover rounded transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-tiro text-white mb-1">
              {name}
            </h3>
            <p className="text-[#FF9933] font-tiro text-xl">{sanskritName}</p>
          </div>
          <span className="px-3 py-1 bg-[#272727] text-sm text-gray-300 rounded-full">
            {when}
          </span>
        </div>
        <p className="text-gray-100 mb-4 font-poppins">{description}</p>
        <div className="mt-4">
          <h4 className="text-[#138808] font-semibold mb-2 font-poppins">Significance:</h4>
          <p className="text-gray-300 italic font-poppins">{significance}</p>
        </div>
      </div>
    </div>
  );
};

const Festivals: React.FC = () => {
  return (
    <section 
      id="festivals" 
      
      className="py-12 md:py-16 bg-gradient-to-b from-[#191919] to-[#1e1e1e] relative" aria-label="Festivals section"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 
          
          className="text-3xl md:text-4xl lg:text-5xl font-tiro text-center mb-6 text-white"
        >
          <span className="text-[#FF9933]">॥</span> Sacred Celebrations <span className="text-[#FF9933]">॥</span>
        </h2>
        
        <p 
          
          className="text-lg text-gray-100 text-center max-w-3xl mx-auto mb-16 font-poppins"
        >
          Hindu festivals are vibrant celebrations that bring communities together in devotion, joy, and spiritual renewal. 
          These sacred occasions connect people with divine energies and preserve cultural traditions across generations.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 overflow-x-auto" aria-label="Festival cards grid">
          {festivals.map((festival, index) => (
            <FestivalCard key={index} {...festival} />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-[#232323] p-6 rounded-lg border border-[#333] shadow-lg text-center">
          <h3 className="text-2xl font-tiro text-white mb-6">The Cyclical Nature of Time</h3>
          <p className="text-gray-100 font-poppins mb-8">
            Hindu festivals follow both solar and lunar calendars, reflecting the cyclical nature of time in Hindu cosmology. 
            Each celebration connects the present moment with timeless divine stories, creating a continuous thread of 
            spiritual tradition throughout the ages.
          </p>
          <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
            {/* Outer Green Circle */}
            <div className="absolute w-64 h-64 rounded-full border-4 border-[#138808] flex items-center justify-center"></div>
            {/* Middle Orange Circle */}
            <div className="absolute w-56 h-56 rounded-full border-4 border-[#FF9933] flex items-center justify-center"></div>
            {/* Inner White Circle with Center Text */}
            <div className="absolute w-40 h-40 rounded-full border-4 border-white flex items-center justify-center z-10">
              <div className="text-center">
                <span className="text-[#FF9933] font-tiro block text-2xl mb-1">काल</span>
                <span className="block text-white text-xl font-tiro">Time</span>
              </div>
            </div>
            {/* Sanskrit Labels Around the Circle */}
            <span className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] px-2 text-[#FF9933] font-tiro text-lg">उत्सव</span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#1a1a1a] px-2 text-[#FF9933] font-tiro text-lg">चक्र</span>
            <span className="absolute left-2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] px-2 text-[#FF9933] font-tiro text-lg">ऋतु</span>
            <span className="absolute right-2 top-1/2 translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] px-2 text-[#FF9933] font-tiro text-lg">पर्व</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Festivals;