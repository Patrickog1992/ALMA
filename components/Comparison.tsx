import React from 'react';

const Comparison: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Alguns exemplos do meu trabalho
      </h3>

      <div className="space-y-4 w-full">
        {/* Pair 1 */}
        <div className="grid grid-cols-2 gap-2">
          <img 
            src="https://i.imgur.com/oPHCYEg.jpeg" 
            alt="Desenho 1" 
            className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
          />
          <img 
            src="https://i.imgur.com/Wngqny1.jpeg" 
            alt="Foto Real 1" 
            className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
          />
        </div>

        {/* Pair 2 */}
        <div className="grid grid-cols-2 gap-2">
          <img 
            src="https://i.imgur.com/8LXp23b.jpeg" 
            alt="Desenho 2" 
            className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
          />
          <img 
            src="https://i.imgur.com/Tiib3XO.jpeg" 
            alt="Foto Real 2" 
            className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Comparison;