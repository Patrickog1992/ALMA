import React from 'react';

const images = [
  "https://i.imgur.com/9CBR6qz.jpeg",
  "https://i.imgur.com/gXnbaix.jpeg",
  "https://i.imgur.com/9EJGm8n.jpeg",
  // Duplicate for smooth loop
  "https://i.imgur.com/9CBR6qz.jpeg",
  "https://i.imgur.com/gXnbaix.jpeg",
  "https://i.imgur.com/9EJGm8n.jpeg"
];

const Carousel: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-100 py-10">
      <h3 className="text-center text-xl md:text-2xl font-semibold mb-6 text-gray-800">
        Veja alguns casais que consegui unir
      </h3>
      
      <div className="relative w-full">
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
            width: max-content;
          }
        `}</style>
        
        <div className="flex animate-scroll">
          {images.map((src, index) => (
            <div key={index} className="px-4 flex-shrink-0">
              <img 
                src={src} 
                alt={`Casal unido ${index + 1}`} 
                className="h-96 md:h-[500px] w-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;