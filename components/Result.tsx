import React, { useState, useEffect } from 'react';

// Define the interface locally if importing from Quiz causes circular dependencies or structure issues
// in a simple setup, though importing from Quiz is cleaner if supported.
// To be safe with the "no src/" instruction, I'll redefine or just use a compatible type.
interface QuizData {
  interest: string;
  ageRange: string;
  ethnicity: string;
  zodiac: string;
  name: string;
}

interface ResultProps {
  onCheckout: () => void;
  quizData: QuizData | null;
}

const Result: React.FC<ResultProps> = ({ onCheckout, quizData }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [userLocation, setUserLocation] = useState("seu estado");

  useEffect(() => {
    // Busca a localização exata do usuário via IP
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipwho.is/');
        const data = await response.json();
        
        if (data.success) {
          // Alterado para mostrar APENAS o estado/região conforme solicitado
          // data.region retorna o nome do estado (Ex: São Paulo, Bahia, etc)
          if (data.region) {
            setUserLocation(data.region);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar localização:", error);
        // Mantém o fallback "seu estado" caso falhe
      }
    };

    fetchLocation();

    // Simula o processo de desenho
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); 
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getInterestLabel = (interest: string) => {
    if (interest === 'Eu gosto de homem') return 'Homem';
    if (interest === 'Eu gosto de mulheres') return 'Mulher';
    return 'Pessoa';
  };

  const getUserSummary = () => {
    if (!quizData) return "Perfil compatível";
    const parts = [
      getInterestLabel(quizData.interest),
      quizData.ageRange,
      quizData.ethnicity,
    ];
    if (quizData.zodiac) {
      parts.push(`compatível com ${quizData.zodiac}`);
    }
    return parts.join(', ');
  };

  return (
    <div className="min-h-screen bg-white font-poppins flex flex-col items-center justify-center p-4">
      {loading ? (
        <div className="text-center w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 animate-pulse">
            Estou desenhando sua alma gemea...
          </h2>
          
          <div className="w-full bg-gray-200 rounded-full h-6 mb-4 overflow-hidden shadow-inner">
             <div 
               className="bg-purple-600 h-6 rounded-full transition-all duration-200 ease-out flex items-center justify-end pr-2"
               style={{ width: `${progress}%` }}
             >
             </div>
          </div>
          <p className="text-gray-600 font-medium text-lg">{progress}%</p>
          
          <p className="mt-8 text-gray-500 italic animate-bounce">
            Conectando com a energia universal...
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center max-w-2xl w-full animate-fade-in">
           <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900 leading-tight">
             O desenho da sua alma gêmea está pronto!
           </h2>
           
           <div className="flex items-center gap-2 mb-8 bg-green-50 px-6 py-4 rounded-xl border border-green-100 shadow-sm text-center">
             <span className="text-green-600 text-xl hidden md:inline">📍</span>
             <p className="text-green-900 font-medium text-sm md:text-base leading-relaxed">
               Achamos a sua alma gêmea ({getUserSummary()}) está agora em <strong>{userLocation}</strong>
             </p>
           </div>
           
           <div className="relative w-full max-w-md mb-10 overflow-hidden rounded-xl shadow-2xl border-4 border-purple-100 bg-gray-100">
             <img 
               src="https://assets.cdn.filesafe.space/QVeFNMx7IYaKSk5wkdEM/media/6926df31f394db78f47dba1d.png" 
               alt="Alma Gêmea Borrada" 
               className="w-full h-auto object-cover"
               style={{ filter: 'blur(20px)', transform: 'scale(1.1)' }} 
             />
             <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-5xl">?</span>
                </div>
             </div>
           </div>

           <style>{`
            @keyframes pulse-green-shadow {
              0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
              70% { transform: scale(1.02); box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); }
              100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
            }
            .animate-pulse-green { animation: pulse-green-shadow 2s infinite; }
            .animate-fade-in { animation: fadeIn 1s ease-in; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          `}</style>

           <button 
             onClick={onCheckout}
             className="bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-8 rounded-lg shadow-xl text-2xl uppercase w-full md:w-auto animate-pulse-green transition-all cursor-pointer"
           >
             REVELAR AGORA
           </button>
           
           <p className="mt-6 text-sm text-gray-500 text-center max-w-md">
             Clique acima para desbloquear o desenho e descobrir quem é a sua alma gêmea.
           </p>
        </div>
      )}
    </div>
  );
};

export default Result;