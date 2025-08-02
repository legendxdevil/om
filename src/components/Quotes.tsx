import React, { useState } from 'react';



interface QuoteProps {
  text: string;
  source: string;
  translation?: string;
  scripture: string;
}

const quotes: QuoteProps[] = [
  {
    text: "अहम् ब्रह्मास्मि",
    source: "Aham Brahmasmi",
    translation: "I am Brahman (the Ultimate Reality)",
    scripture: "Brihadaranyaka Upanishad"
  },
  {
    text: "तत् त्वम् असि",
    source: "Tat Tvam Asi",
    translation: "That thou art",
    scripture: "Chandogya Upanishad"
  },
  {
    text: "प्रज्ञानम् ब्रह्म",
    source: "Prajnanam Brahma",
    translation: "Consciousness is Brahman",
    scripture: "Aitareya Upanishad"
  },
  {
    text: "अयम् आत्मा ब्रह्म",
    source: "Ayam Atma Brahma",
    translation: "This Self is Brahman",
    scripture: "Mandukya Upanishad"
  },
  {
    text: "सर्वं खल्विदं ब्रह्म",
    source: "Sarvam Khalvidam Brahma",
    translation: "All of this is indeed Brahman",
    scripture: "Chandogya Upanishad"
  },
  {
    text: "एकम् सत् विप्रा बहुधा वदन्ति",
    source: "Ekam Sat Vipra Bahudha Vadanti",
    translation: "Truth is one, the wise call it by many names",
    scripture: "Rig Veda"
  },
  {
    text: "वसुधैव कुटुम्बकम्",
    source: "Vasudhaiva Kutumbakam",
    translation: "The world is one family",
    scripture: "Maha Upanishad"
  },
  {
    text: "सत्यं वद। धर्मं चर।",
    source: "Satyam Vada. Dharmam Chara.",
    translation: "Speak the truth. Abide by the dharma.",
    scripture: "Taittiriya Upanishad"
  }
];

const QuoteCard: React.FC<QuoteProps> = ({ text, source, translation, scripture }) => {
  



  return (
    <div 
      
      className="bg-[#232323] p-6 rounded-lg shadow-lg border border-[#333] hover:border-[#FF9933] flex flex-col transition-all duration-300"
    >
      <p className="text-2xl md:text-3xl font-tiro text-[#FF9933] mb-3 text-center">
        {text}
      </p>
      <p className="text-xl text-white mb-4 text-center font-poppins">
        {source}
      </p>
      {translation && (
        <p className="text-gray-100 italic mb-4 text-center font-poppins">
          "{translation}"
        </p>
      )}
      <p className="text-sm text-gray-300 text-center font-poppins">
        — {scripture}
      </p>
    </div>
  );
};

const Quotes: React.FC = () => {
  const [displayedQuotes, setDisplayedQuotes] = useState<QuoteProps[]>(quotes.slice(0, 4));
  const [currentPage, setCurrentPage] = useState(0);
  const quotesPerPage = 4;

  const handlePageChange = (pageIndex: number) => {
    const startIndex = pageIndex * quotesPerPage;
    setDisplayedQuotes(quotes.slice(startIndex, startIndex + quotesPerPage));
    setCurrentPage(pageIndex);
  };


  return (
    <section 
      id="quotes" 
      
      className="py-12 md:py-16 bg-gradient-to-b from-[#191919] to-[#1e1e1e] relative" aria-label="Quotes section"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 
          
          className="text-3xl md:text-4xl lg:text-5xl font-tiro text-center mb-6 text-white"
        >
          <span className="text-[#FF9933]">॥</span> Timeless Wisdom <span className="text-[#FF9933]">॥</span>
        </h2>
        
        <p 
          
          className="text-lg text-gray-100 text-center max-w-3xl mx-auto mb-16 font-poppins"
        >
          Hindu scriptures contain profound philosophical insights that have inspired seekers of truth for millennia. 
          These timeless quotes reflect the depth and universality of Hindu wisdom.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 overflow-x-auto" aria-label="Quote cards grid">
          {displayedQuotes.map((quote, index) => (
            <div key={index} className="quote-card">
              <QuoteCard {...quote} />
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {quotes.length > quotesPerPage && (
          <div className="flex justify-center space-x-2">
            {Array.from({ length: Math.ceil(quotes.length / quotesPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  currentPage === index 
                    ? 'bg-[#FF9933] text-white' 
                    : 'bg-[#272727] text-gray-300 hover:bg-[#333]'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
        
        <div className="mt-16 p-8 bg-[#1a1a1a] rounded-lg border border-[#333] text-center">
          <h3 className="text-2xl font-tiro text-white mb-6">The Essence of Hindu Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#232323] rounded-lg text-center hover:bg-[#2a2a2a] transition-colors shadow-lg">
              <h4 className="text-[#FF9933] font-tiro text-lg mb-2">अद्वैत</h4>
              <p className="text-white font-semibold mb-2">Advaita</p>
              <p className="text-gray-100 mb-4 font-poppins">
                Non-dualism: The belief that the individual self (Atman) is identical to the ultimate reality (Brahman)
              </p>
            </div>
            <div className="p-6 bg-[#232323] rounded-lg text-center hover:bg-[#2a2a2a] transition-colors shadow-lg">
              <h4 className="text-[#FF9933] font-tiro text-lg mb-2">कर्म</h4>
              <p className="text-white font-semibold mb-2">Karma</p>
              <p className="text-gray-100 mb-4 font-poppins">
                The law of cause and effect: Every action has consequences that shape one's destiny
              </p>
            </div>
            <div className="p-6 bg-[#232323] rounded-lg text-center hover:bg-[#2a2a2a] transition-colors shadow-lg">
              <h4 className="text-[#FF9933] font-tiro text-lg mb-2">मोक्ष</h4>
              <p className="text-white font-semibold mb-2">Moksha</p>
              <p className="text-gray-100 mb-4 font-poppins">
                Liberation: The ultimate goal of freedom from the cycle of birth, death, and rebirth
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#1e1e1e] to-transparent"></div>
    </section>
  );
};

export default Quotes;