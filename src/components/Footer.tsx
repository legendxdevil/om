import React from 'react';

const Footer: React.FC = () => {

  return (
    <footer className="bg-[#121212] pt-16 pb-8 border-t border-[#333]" aria-label="Footer section">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-[#FFD700] mr-2 text-3xl">
</div>
              <h3 className="text-white font-tiro text-xl">Divine Essence</h3>
            </div>
            <p className="text-gray-400 font-poppins mb-6">
              Exploring the timeless wisdom and spiritual traditions of Hinduism, connecting ancient knowledge with modern understanding.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-tiro text-lg mb-4">Explore</h4>
            <ul className="space-y-2 font-poppins">
              <li>
                <a href="#introduction" className="text-gray-400 hover:text-[#FF9933] transition-colors">Introduction</a>
              </li>
              <li>
                <a href="#deities" className="text-gray-400 hover:text-[#FF9933] transition-colors">Divine Manifestations</a>
              </li>
              <li>
                <a href="#rituals" className="text-gray-400 hover:text-[#FF9933] transition-colors">Sacred Rituals</a>
              </li>
              <li>
                <a href="#festivals" className="text-gray-400 hover:text-[#FF9933] transition-colors">Sacred Celebrations</a>
              </li>
              <li>
                <a href="#scriptures" className="text-gray-400 hover:text-[#FF9933] transition-colors">Sacred Scriptures</a>
              </li>
              <li>
                <a href="#quotes" className="text-gray-400 hover:text-[#FF9933] transition-colors">Timeless Wisdom</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-tiro text-lg mb-4">Resources</h4>
            <ul className="space-y-2 font-poppins">
              <li>
  <a href="https://www.goodreads.com/shelf/show/hinduism" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF9933] transition-colors">
    Recommended Books on Hinduism
  </a>
  <span className="block text-xs text-gray-500">Curated list of essential Hinduism books on Goodreads</span>
</li>
<li>
  <a href="https://www.tourmyindia.com/blog/top-30-famous-temples-in-india/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF9933] transition-colors">
    Temples & Sacred Sites
  </a>
  <span className="block text-xs text-gray-500">Explore India's most famous Hindu temples and pilgrimage sites</span>
</li>
<li>
  <a href="https://www.mindful.org/how-to-meditate/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF9933] transition-colors">
    Meditation Practices
  </a>
  <span className="block text-xs text-gray-500">Simple guide to meditation for beginners and daily practice</span>
</li>
<li>
  <a href="https://www.himalayanyogainstitute.com/spiritual-side-yoga-means-achieve/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF9933] transition-colors">
    Yoga & Spirituality
  </a>
  <span className="block text-xs text-gray-500">Understand the spiritual side and holistic benefits of Yoga</span>
</li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF9933] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-[#333] text-center">
          <p className="text-gray-500 text-sm font-poppins">
            &copy; {new Date().getFullYear()} Divine Essence of Hinduism. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2 font-poppins">
            <span className="text-[#FF9933] font-tiro">ॐ</span> शान्तिः शान्तिः शान्तिः <span className="text-[#FF9933] font-tiro">ॐ</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;