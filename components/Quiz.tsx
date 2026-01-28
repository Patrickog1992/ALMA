import React, { useState, useEffect } from 'react';

export interface QuizData {
  interest: string;
  ageRange: string;
  ethnicity: string;
  zodiac: string;
  name: string;
}

interface QuizProps {
  onFinish: (data: QuizData) => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish }) => {
  const [formData, setFormData] = useState<QuizData>({
    interest: '',
    ageRange: '',
    ethnicity: '',
    zodiac: '',
    name: ''
  });

  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleChange = (field: keyof QuizData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const zodiacSigns = [
    "Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", 
    "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"
  ];

  const ethnicities = [
    "Asiático",
    "Africanos/Afro-americanos",
    "Brasileiro",
    "Americano",
    "Prefiro não especificar"
  ];

  const handleSubmit = () => {
    window.scrollTo(0, 0);
    onFinish(formData);
  };

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-900 py-8 px-4 md:py-12">
      <div className="max-w-2xl mx-auto bg-white">
        
        <div className="text-center mb-4">
          <p className="text-red-600 font-bold text-xl md:text-2xl uppercase tracking-wider">
            Isso vai expirar em : {formatTime(timeLeft)}
          </p>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10 leading-tight">
          Responda algumas perguntas simples para que eu possa desenhar a sua alma gêmea com precisão...
        </h1>

        <div className="space-y-8">
          {/* Question 1 */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Quem te interessa?</h2>
            <div className="space-y-3">
              {["Eu gosto de homem", "Eu gosto de mulheres", "Eu gosto de ambos"].map((opt) => (
                <label key={opt} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition">
                  <input 
                    type="radio" 
                    name="interest" 
                    value={opt} 
                    onChange={(e) => handleChange('interest', e.target.value)}
                    className="w-5 h-5 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <span className="text-lg">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Selecione a faixa etária que te interessa</h2>
            <div className="space-y-3">
              {["18-34 anos", "35-55 anos", "+ de 55 anos"].map((opt) => (
                <label key={opt} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition">
                  <input 
                    type="radio" 
                    name="ageRange" 
                    value={opt} 
                    onChange={(e) => handleChange('ageRange', e.target.value)}
                    className="w-5 h-5 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <span className="text-lg">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Escolha a origem étnica de sua preferência</h2>
            <div className="space-y-3">
              {ethnicities.map((opt) => (
                <label key={opt} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition">
                  <input 
                    type="radio" 
                    name="ethnicity" 
                    value={opt} 
                    onChange={(e) => handleChange('ethnicity', e.target.value)}
                    className="w-5 h-5 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <span className="text-lg">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Qual é o seu signo astrológico?</h2>
            <select 
              className="w-full p-4 border border-gray-300 rounded-lg bg-white text-lg focus:ring-2 focus:ring-purple-500 outline-none"
              onChange={(e) => handleChange('zodiac', e.target.value)}
              value={formData.zodiac}
            >
              <option value="" disabled>Selecione seu signo...</option>
              {zodiacSigns.map((sign) => (
                <option key={sign} value={sign}>{sign}</option>
              ))}
            </select>
          </div>

          {/* Question 5 */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold mb-4">Qual o seu nome?</h2>
            <input 
              type="text" 
              placeholder="Digite seu nome aqui..."
              className="w-full p-4 border border-gray-300 rounded-lg bg-white text-lg focus:ring-2 focus:ring-purple-500 outline-none"
              onChange={(e) => handleChange('name', e.target.value)}
              value={formData.name}
            />
          </div>
        </div>

        {/* Submit Section */}
        <div className="mt-12 text-center pb-12">
            <style>{`
            @keyframes pulse-green-shadow {
              0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
              70% { transform: scale(1.02); box-shadow: 0 0 0 15px rgba(34, 197, 94, 0); }
              100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
            }
            .animate-pulse-green { animation: pulse-green-shadow 2s infinite; }
          `}</style>
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-xl uppercase w-full md:w-auto animate-pulse-green transition-all"
            onClick={handleSubmit}
          >
            COMEÇAR A DESENHAR MINHA ALMA GÊMEA
          </button>
          <p className="mt-4 text-purple-700 font-medium text-lg">
            Agora vou me conectar com a sua energia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;