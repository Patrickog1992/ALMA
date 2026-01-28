import React from 'react';

interface CTAButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, className = '', onClick }) => {
  return (
    <>
      <style>{`
        @keyframes pulse-green-shadow {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            transform: scale(1.02);
            box-shadow: 0 0 0 15px rgba(34, 197, 94, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }
        .animate-pulse-green {
          animation: pulse-green-shadow 2s infinite;
        }
      `}</style>
      <button 
        onClick={onClick}
        className={`bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg text-lg uppercase w-full md:w-auto max-w-2xl text-center leading-tight animate-pulse-green cursor-pointer ${className}`}
      >
        {text}
      </button>
    </>
  );
};

export default CTAButton;