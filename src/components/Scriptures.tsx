import React from 'react';



interface ScriptureProps {
  name: string;
  sanskritName: string;
  description: string;
  imageUrl: string;
  keyTeachings: string[];
}

const scriptures: ScriptureProps[] = [
  {
    name: "Vedas",
    sanskritName: "वेद",
    description: "The oldest sacred texts of Hinduism, composed in Vedic Sanskrit. They are a large body of religious texts originating in ancient India and constitute the oldest layer of Sanskrit literature.",
    imageUrl: "https://unsplash.com/photos/dLFUIBdNOko/download?force=true", // Ancient manuscript for Vedas
    keyTeachings: [
      "Rituals and sacrifices for cosmic harmony",
      "Hymns to various deities",
      "Philosophical inquiries about existence",
      "Understanding of the self and universe"
    ]
  },
  {
    name: "Upanishads",
    sanskritName: "उपनिषद्",
    description: "Philosophical texts that form the theoretical basis for Hindu religion. They explore the nature of ultimate reality (Brahman) and the self (Atman), and their relationship.",
    imageUrl: "https://unsplash.com/photos/U-8pVp66LOQ/download?force=true", // Ancient palm leaf for Upanishads
    keyTeachings: [
      "The identity of Atman and Brahman",
      "The nature of consciousness",
      "The path to spiritual liberation",
      "The concept of karma and rebirth"
    ]
  },
  {
    name: "Bhagavad Gita",
    sanskritName: "भगवद्गीता",
    description: "A 700-verse Hindu scripture that is part of the epic Mahabharata. It contains a conversation between Prince Arjuna and Lord Krishna on a variety of philosophical issues.",
    imageUrl: "https://unsplash.com/photos/JBRGhVtB4hI/download?force=true", // Bhagavad Gita book
    keyTeachings: [
      "Karma Yoga (selfless action)",
      "Bhakti Yoga (devotion)",
      "Jnana Yoga (knowledge)",
      "Dharma (righteous duty)"
    ]
  },
  {
    name: "Puranas",
    sanskritName: "पुराण",
    description: "Ancient texts that narrate the history of the universe from creation to destruction, genealogies of kings, heroes, sages, and demigods, and descriptions of Hindu cosmology, philosophy, and geography.",
    imageUrl: "https://unsplash.com/photos/3OWW1ya-CEY/download?force=true", // Ancient illustrated text for Puranas
    keyTeachings: [
      "Stories of divine incarnations",
      "Creation and dissolution of cosmos",
      "Genealogies of deities and sages",
      "Moral and ethical teachings"
    ]
  }
];

const ScriptureCard: React.FC<ScriptureProps> = ({ name, sanskritName, description, imageUrl, keyTeachings }) => {
  



  return (
    <div 
      
      className="bg-[#232323] p-6 rounded-lg shadow-lg border border-[#333] hover:border-[#FF9933] flex flex-col transition-all duration-300"
    >
      <div className="min-h-[192px] bg-[#232323] rounded overflow-hidden flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={name + ' scripture illustration'} 
          className="w-full h-full object-cover rounded transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-tiro text-white mb-1">
          {name}
        </h3>
        <p className="text-[#FF9933] font-tiro text-xl mb-4">{sanskritName}</p>
        <p className="text-gray-100 mb-4 font-poppins">{description}</p>
        <div className="mt-4">
          <h4 className="text-[#138808] font-semibold mb-2 font-poppins">Key Teachings:</h4>
          <ul className="list-disc list-inside space-y-1">
            {keyTeachings.map((teaching, index) => (
              <li key={index} className="text-gray-200 font-poppins">{teaching}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Scriptures: React.FC = () => {
  return (
    <section 
      id="scriptures" 
      
      className="py-12 md:py-16 bg-gradient-to-b from-[#181818] to-[#121212] relative" aria-label="Sacred Scriptures section"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 
          
          className="text-3xl md:text-4xl lg:text-5xl font-tiro text-center mb-6 text-white"
        >
          <span className="text-[#FF9933]">॥</span> Sacred Scriptures <span className="text-[#FF9933]">॥</span>
        </h2>
        
        <p 
          
          className="text-lg text-gray-200 text-center max-w-3xl mx-auto mb-16 font-poppins"
        >
          Hindu scriptures are among the world's oldest and most diverse sacred texts. They contain profound 
          spiritual wisdom, philosophical inquiries, and practical guidance for living a dharmic life in 
          harmony with cosmic order.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 overflow-x-auto" aria-label="Scripture cards grid">
          {scriptures.map((scripture, index) => (
            <ScriptureCard key={index} {...scripture} />
          ))}
        </div>
        
        <div 
          
          className="p-6 bg-[#232323] rounded-lg border border-[#333] shadow-lg text-center"
        >
          <h3 className="text-2xl font-tiro text-white mb-6">The Oral Tradition</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto rounded-full border-4 border-[#FF9933] overflow-hidden min-h-[200px] bg-[#232323]">
                <img 
                  src="data:image/jpeg;base64,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" 
                  alt="Veda Vyasa, compiler of the Vedas and author of Mahabharata" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[#FF9933] font-tiro text-xl mt-4">वेद व्यास</p>
              <p className="text-white font-semibold">Veda Vyasa</p>
              <p className="text-gray-300 text-sm font-poppins mt-2">
                The sage credited with compiling the Vedas and authoring the Mahabharata
              </p>
            </div>
            <div className="md:w-2/3 text-left">
              <p className="text-gray-200 font-poppins mb-4">
                For thousands of years, Hindu scriptures were primarily transmitted through an elaborate oral tradition. 
                The Vedas were memorized verbatim, with precise pronunciation and intonation, and passed down from 
                teacher to student through generations.
              </p>
              <p className="text-gray-200 font-poppins mb-4">
                This oral tradition, known as <span className="text-[#FF9933] font-tiro">श्रुति</span> (Shruti) or "that which is heard," 
                was eventually written down, but the emphasis on proper recitation remains important in Hindu practice today.
              </p>
              <p className="text-gray-200 font-poppins">
                The written tradition, known as <span className="text-[#FF9933] font-tiro">स्मृति</span> (Smriti) or "that which is remembered," 
                includes texts like the Puranas, epics, and various philosophical treatises that elaborate on the fundamental 
                truths revealed in the Shruti texts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scriptures;