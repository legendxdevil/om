import React from 'react';



interface DeityProps {
  name: string;
  sanskritName: string;
  description: string;
  imageUrl: string;
  attributes: string[];
}

const deities: DeityProps[] = [
  {
    name: "Brahma",
    sanskritName: "ब्रह्मा",
    description: "The creator of the universe and all beings. He is depicted with four faces and four arms, holding various items including the Vedas.",
    imageUrl: "https://unsplash.com/photos/zzVpNG3Gdgc/download?force=true", // Brahma: statue
    attributes: ["Creator", "Knowledge", "Vedas", "Cosmic Origins"]
  },
  {
    name: "Vishnu",
    sanskritName: "विष्णु",
    description: "The preserver and protector of the universe. He descends as avatars to restore dharma whenever it declines in the world.",
    imageUrl: "https://unsplash.com/photos/16j699_WrWQ/download?force=true", // Vishnu: statue
    attributes: ["Preserver", "Protector", "Avatars", "Dharma"]
  },
  {
    name: "Shiva",
    sanskritName: "शिव",
    description: "The destroyer and transformer. He represents the cycle of death and rebirth, and is often depicted in deep meditation.",
    imageUrl: "https://images.unsplash.com/photo-1558659616-7742131dcfbb?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Shiva: statue
    attributes: ["Destroyer", "Transformer", "Meditation", "Cosmic Dance"]
  },
  {
    name: "Lakshmi",
    sanskritName: "लक्ष्मी",
    description: "The goddess of wealth, fortune, and prosperity. She is depicted seated on a lotus, symbolizing purity amid materiality.",
    imageUrl: "https://unsplash.com/photos/IzOKY8YqiAA/download?force=true", // Lakshmi: statue
    attributes: ["Wealth", "Fortune", "Prosperity", "Abundance"]
  },
  {
    name: "Ganesha",
    sanskritName: "गणेश",
    description: "The remover of obstacles and the god of beginnings. He is recognized by his elephant head and is one of the most worshipped deities.",
    imageUrl: "https://images.unsplash.com/photo-1709985774319-bac2214db83b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ganesha: figurine
    attributes: ["Remover of Obstacles", "Beginnings", "Wisdom", "Intelligence"]
  },
  {
    name: "Saraswati",
    sanskritName: "सरस्वती",
    description: "The goddess of knowledge, music, arts, and learning. She is depicted holding a veena and is often associated with the color white.",
    imageUrl: "https://unsplash.com/photos/Haa-xBjLzWA/download?force=true", // Saraswati: statue
    attributes: ["Knowledge", "Music", "Arts", "Learning"]
  }
];

const DeityCard: React.FC<DeityProps> = ({ name, sanskritName, description, imageUrl, attributes }) => {
  



  return (
    <div 
      
      className="bg-[#232323] p-6 rounded-lg shadow-lg border border-[#333] hover:border-[#FF9933] flex flex-col transition-all duration-300"
    >
      <div className="min-h-[192px] bg-[#232323] rounded overflow-hidden flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={name + ' deity illustration'} 
          className="w-full h-full object-cover rounded transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-tiro text-white mb-1">
          {name}
        </h3>
        <p className="text-white font-tiro text-xl mb-4 drop-shadow-md">{sanskritName}</p>
        <p className="text-white mb-4 font-poppins font-medium drop-shadow-md">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {attributes.map((attribute, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-[#272727] text-sm text-gray-200 rounded-full"
            >
              {attribute}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Deities: React.FC = () => {
  return (
    <section 
      id="deities" 
      
      className="py-20 md:py-28 bg-gradient-to-b from-[#121212] to-[#1e1e1e] relative"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 
          
          className="text-3xl md:text-4xl lg:text-5xl font-tiro text-center mb-6 text-white"
        >
          <span className="text-[#FF9933]">॥</span> Divine Manifestations <span className="text-[#FF9933]">॥</span>
        </h2>
        
        <p 
          
          className="text-lg text-gray-100 text-center max-w-3xl mx-auto mb-16 font-poppins"
        >
          Hinduism celebrates the divine in countless forms, each representing different aspects of the ultimate reality. 
          These deities embody cosmic forces and virtues that guide humanity on the path to spiritual enlightenment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 overflow-x-auto" aria-label="Deity cards grid">
          {deities.map((deity, index) => (
            <DeityCard key={index} {...deity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deities;