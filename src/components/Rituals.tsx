import React from 'react';



interface RitualProps {
  name: string;
  sanskritName: string;
  description: string;
  imageUrl: string;
  significance: string;
}

const rituals: RitualProps[] = [
  {
    name: "Puja",
    sanskritName: "पूजा",
    description: "A devotional worship ritual performed to honor deities, usually involving offerings of flowers, food, and incense.",
    imageUrl: "https://unsplash.com/photos/H4ilfu3vftk/download?force=true", // Puja: diya ritual
    significance: "Establishes a personal connection with the divine and invites blessings into one's life."
  },
  {
    name: "Aarti",
    sanskritName: "आरती",
    description: "A ritual of worship in which light from wicks soaked in ghee or camphor is offered to deities, accompanied by songs.",
    imageUrl: "https://unsplash.com/photos/2QQ-UeTsT8k/download?force=true", // Aarti: Ganga Aarti flame
    significance: "Symbolizes the removal of darkness (ignorance) through divine light (knowledge)."
  },
  {
    name: "Havan",
    sanskritName: "हवन",
    description: "A fire ritual where offerings are made into a consecrated fire while reciting Vedic mantras.",
    imageUrl: "https://unsplash.com/photos/zoU-VxqDM6M/download?force=true", // Havan: fire ritual
    significance: "Purifies the environment, brings positive energy, and carries offerings to the divine realm."
  },
  {
    name: "Abhishekam",
    sanskritName: "अभिषेकम्",
    description: "A ritual bathing of deity idols with various substances like milk, yogurt, honey, and water.",
    imageUrl: "https://unsplash.com/photos/evtL96IfR2E/download?force=true", // Abhishekam: ritual pouring
    significance: "Symbolizes purification and devotional surrender to the divine."
  }
];

const RitualCard: React.FC<RitualProps> = ({ name, sanskritName, description, imageUrl, significance }) => {
  



  return (
    <div 
      
      className="flex flex-col bg-[#232323] p-6 rounded-lg shadow-lg border border-[#333] hover:border-[#FF9933] transition-all duration-300"
    >
      <div className="min-h-[192px] bg-[#232323] rounded overflow-hidden flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={name + ' ritual illustration'} 
          className="w-full h-full object-cover rounded transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-tiro text-white mb-1">
          {name}
        </h3>
        <p className="text-[#FF9933] font-tiro text-xl mb-4">{sanskritName}</p>
        <p className="text-gray-100 font-poppins">{description}</p>
        <div className="mt-4">
          <h4 className="text-[#138808] font-semibold mb-2 font-poppins">Significance:</h4>
          <p className="text-gray-300 italic font-poppins">{significance}</p>
        </div>
      </div>
    </div>
  );
};

const Rituals: React.FC = () => {
  return (
    <section 
      id="rituals" 
      
      className="py-20 md:py-28 bg-gradient-to-b from-[#1e1e1e] to-[#121212] relative"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 
          
          className="text-3xl md:text-4xl lg:text-5xl font-tiro text-center mb-6 text-white"
        >
          <span className="text-[#FF9933]">॥</span> Sacred Rituals <span className="text-[#FF9933]">॥</span>
        </h2>
        
        <p 
          
          className="text-lg text-gray-100 text-center max-w-3xl mx-auto mb-16 font-poppins"
        >
          Hindu rituals are sacred practices that connect the individual with the divine through symbolic acts, 
          offerings, and devotional expressions. These timeless traditions create a bridge between the physical 
          and spiritual realms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 overflow-x-auto" aria-label="Ritual cards grid">
          {rituals.map((ritual, index) => (
            <RitualCard key={index} {...ritual} />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-[#1a1a1a] rounded-lg border border-[#333]">
          <h3 className="text-2xl font-tiro text-white mb-6 text-center">Daily Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-4 bg-[#272727] rounded-lg text-center hover:bg-[#2a2a2a] transition-colors">
              <h4 className="text-[#FF9933] font-tiro text-lg mb-2">संध्या वंदनम्</h4>
              <p className="text-white font-semibold mb-1">Sandhya Vandanam</p>
              <p className="text-gray-300 text-sm font-poppins">Daily prayers at sunrise, noon, and sunset</p>
            </div>
            <div className="p-4 bg-[#272727] rounded-lg text-center hover:bg-[#2a2a2a] transition-colors">
              <h4 className="text-[#FF9933] font-tiro text-lg mb-2">जप</h4>
              <p className="text-white font-semibold mb-1">Japa</p>
              <p className="text-gray-300 text-sm font-poppins">Meditative repetition of mantras or divine names</p>
            </div>
            <div className="p-4 bg-[#272727] rounded-lg text-center hover:bg-[#2a2a2a] transition-colors">
              <h4 className="text-[#FF9933] font-tiro text-lg mb-2">ध्यान</h4>
              <p className="text-white font-semibold mb-1">Dhyana</p>
              <p className="text-gray-300 text-sm font-poppins">Focused meditation to connect with the divine</p>
            </div>
            <div className="p-4 bg-[#272727] rounded-lg text-center hover:bg-[#2a2a2a] transition-colors">
              <h4 className="text-[#FF9933] font-tiro text-lg mb-2">प्राणायाम</h4>
              <p className="text-white font-semibold mb-1">Pranayama</p>
              <p className="text-gray-300 text-sm font-poppins">Breath control techniques for spiritual purification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rituals;