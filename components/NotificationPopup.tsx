import React, { useState, useEffect } from 'react';

const names = [
  "Maria S.", "Ana P.", "Fernanda R.", "Lucas M.", "Juliana C.", 
  "Beatriz L.", "Carla D.", "Patrícia B.", "Roberta F.", "Camila S."
];

const NotificationPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    // Initial delay before first popup
    const startTimeout = setTimeout(() => {
      showNotification();
    }, 4000);

    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setCurrentName(randomName);
      setVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setVisible(false);
      }, 4000);
    };

    // Cycle every 15 seconds
    const interval = setInterval(() => {
      showNotification();
    }, 15000);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-2 right-2 md:top-4 md:right-4 z-50 animate-fade-in-down">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-out;
        }
      `}</style>
      <div className="bg-white rounded-lg shadow-xl p-3 border-l-4 border-green-500 flex items-center gap-3 max-w-[250px] md:max-w-xs">
        <div className="flex-shrink-0 bg-green-100 rounded-full p-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800">
            {currentName}
          </p>
          <p className="text-[10px] text-gray-500 leading-tight">
            acabou de receber o RETRATO
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;