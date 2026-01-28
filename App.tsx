import React, { useState } from 'react';
import CTAButton from './components/CTAButton';
import Carousel from './components/Carousel';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import Quiz, { QuizData } from './components/Quiz';
import Result from './components/Result';
import NotificationPopup from './components/NotificationPopup';

type ViewState = 'landing' | 'quiz' | 'result';

function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const today = new Date().toLocaleDateString('pt-BR');

  const handleStartQuiz = () => {
    setView('quiz');
    window.scrollTo(0, 0);
  };

  const handleQuizFinish = (data: QuizData) => {
    setQuizData(data);
    setView('result');
    window.scrollTo(0, 0);
  };

  const handleCheckout = () => {
    // Redirect to PerfectPay checkout
    window.location.href = 'https://go.perfectpay.com.br/PPU38CQ6MU2';
  };

  if (view === 'quiz') {
    return (
      <>
        <Quiz onFinish={handleQuizFinish} />
      </>
    );
  }

  if (view === 'result') {
    return (
      <>
        <Result onCheckout={handleCheckout} quizData={quizData} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-poppins selection:bg-purple-200 selection:text-purple-900">
      <NotificationPopup />
      
      {/* Top Banner */}
      <div className="w-full bg-red-600 text-white text-center py-3 px-4 text-sm md:text-base font-bold">
        Você acabou de ganhar 70% de desconto para revelar a sua alma gemea no dia <span className="text-yellow-300">{today}</span>
      </div>

      {/* Hero Section */}
      <header className="flex flex-col items-center px-4 pt-8 pb-4 max-w-5xl mx-auto text-center">
        <p className="text-red-600 font-bold text-sm md:text-base mb-2 uppercase tracking-wide">
          Esse é o meu verdadeiro site .. cuidado com imitadores !
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
          Como é a sua alma gêmea?
        </h1>
        <h2 className="text-lg md:text-2xl font-medium text-gray-700 mb-8 max-w-3xl">
          Vou desenhar o rosto da sua alma gêmea usando minhas capacidades psíquicas.
        </h2>

        <div className="w-full max-w-2xl mb-8">
          <img 
            src="https://assets.cdn.filesafe.space/QVeFNMx7IYaKSk5wkdEM/media/6926df31f394db78f47dba1d.png" 
            alt="Esboço de alma gêmea" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 shadow-sm max-w-2xl">
          <p className="text-sm md:text-base font-bold text-gray-800">
            JUNTE-SE ÀS ⏳2373... PESSOAS QUE JÁ VIRAM O ROSTO DA SUA ALMA GÊMEA COM A MINHA AJUDA! 👇
          </p>
        </div>

        <div className="w-full max-w-2xl mb-12 text-center">
          <p className="text-gray-800 font-semibold mb-2 text-lg">
            Ana tem um recado rápido para você clique e escute
          </p>
          <video 
            className="w-full rounded-lg shadow-lg" 
            controls 
            playsInline
            poster="https://i.imgur.com/siyHxpL.jpeg"
          >
            <source src="https://i.imgur.com/zNRQyrV.mp4" type="video/mp4" />
            Seu navegador não suporta este vídeo.
          </video>
        </div>

        {/* Removed the first CTA Button as requested to force scrolling */}
        
      </header>

      {/* Artist Image Section */}
      <section className="w-full flex justify-center px-4 bg-gray-50 py-12">
        <div className="max-w-3xl w-full">
           <img 
             src="https://i.imgur.com/J4PHiwA.jpeg" 
             alt="Vidente desenhando" 
             className="w-full h-auto rounded-xl shadow-lg"
           />
        </div>
      </section>

      {/* Carousel Section */}
      <section className="w-full">
        <Carousel />
      </section>

      {/* Middle CTA & Angelica Video */}
      <div className="flex flex-col items-center px-4 py-8 space-y-8 bg-gray-50">
        <div className="w-full max-w-2xl text-center">
            <p className="text-gray-900 font-bold mb-4 text-xl">
              Veja o vídeo da Angélica comparando o retrato com o marido
            </p>
            <video 
              className="w-full rounded-lg shadow-xl border-4 border-white" 
              controls 
              playsInline
              poster="https://i.imgur.com/U3wmO2w.jpeg"
            >
              <source src="https://i.imgur.com/7AXCVta.mp4" type="video/mp4" />
              Seu navegador não suporta este vídeo.
            </video>
        </div>

        <CTAButton 
          text="SIM, EU QUERO O DESENHO DA MINHA ALMA GÊMEA ➜" 
          onClick={handleStartQuiz}
        />
      </div>

      {/* Comparison Section */}
      <section className="bg-white">
        <Comparison />
        <div className="flex justify-center px-4 pb-12 pt-4">
          <CTAButton 
            text="QUERO DESCOBRIR AGORA" 
            // Removed custom purple class so it defaults to green defined in CTAButton component
            onClick={handleStartQuiz}
          />
        </div>
      </section>

      {/* Value/Pricing Section */}
      <section className="w-full bg-white px-4 py-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Qual o valor disso?
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Um desenho psíquico personalizado da sua alma gêmea não é algo comum.
            </p>
            <p>
              Normalmente, uma leitura energética completa com interpretação espiritual, conexão intuitiva e produção artística personalizada custa facilmente mais de R$ 197,00, justamente pelo tempo, concentração e habilidade envolvidos no processo.
            </p>
            <p>
              Cada desenho é feito individualmente, conectado à sua energia no momento do pedido.<br/>
              Não existe modelo pronto, não existe repetição e não existe automação.
            </p>
            <p className="font-semibold text-gray-900">
              É um trabalho exclusivo, sensível e altamente detalhado.
            </p>
            <p>
              Mas, devido ao grande interesse e para permitir que mais pessoas tenham acesso a essa experiência, hoje você não vai pagar esse valor completo.
            </p>

            <div className="my-8 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm text-left">
              <p className="font-bold text-gray-900 mb-6 text-lg">
                Somente hoje, ao solicitar o Desenho da Sua Alma Gêmea com Ana Velasco, você receberá gratuitamente:
              </p>
              
              <ul className="space-y-6">
                <li className="flex flex-col">
                  <span className="font-bold text-gray-900 text-lg">BÔNUS 1 (R$29) ✔️ Guia de Conexão Energética</span>
                  <span className="text-gray-700">Aprenda como se alinhar energeticamente com sua alma gêmea para aumentar as chances de reconhecimento, conexão imediata e sincronicidades no encontro.</span>
                </li>
                
                <li className="flex flex-col">
                  <span className="font-bold text-gray-900 text-lg">BÔNUS 2 (R$19) ✔️ Técnica de Visualização Guiada</span>
                  <span className="text-gray-700">Uma prática simples para ativar sua intenção amorosa e fortalecer o vínculo emocional antes mesmo do encontro acontecer.</span>
                </li>
                
                <li className="flex flex-col">
                  <span className="font-bold text-gray-900 text-lg">BÔNUS 3 (R$39) ✔️ Arquivo Especial: Como Atrair Sua Alma Gêmea Mais Rápido</span>
                  <span className="text-gray-700">Orientações espirituais e práticas para acelerar o alinhamento do seu caminho com o amor verdadeiro.</span>
                </li>

                <li className="flex flex-col">
                  <span className="font-bold text-gray-900 text-lg">BÔNUS 4 (R$27) ✔️ Checklist de Reconhecimento da Alma Gêmea</span>
                  <span className="text-gray-700">Ajuda você a identificar sinais comportamentais, emocionais e energéticos para reconhecer a pessoa certa quando ela surgir.</span>
                </li>

                <li className="flex flex-col">
                  <span className="font-bold text-gray-900 text-lg">BÔNUS 5 (R$23) ✔️ Áudio de Ativação Emocional</span>
                  <span className="text-gray-700">Um áudio curto para fortalecer autoconfiança, abertura emocional e eliminar bloqueios inconscientes que impedem relacionamentos.</span>
                </li>
              </ul>

              <div className="mt-8 bg-white border-2 border-green-500 rounded-lg p-4 shadow-md">
                <p className="text-xl font-bold text-gray-900 mb-1">🎁 Valor total dos bônus: R$137</p>
                <p className="text-xl font-bold text-green-600">👉 Hoje: incluídos gratuitamente no seu pedido</p>
              </div>

              <p className="mt-4 text-xs md:text-sm text-gray-500 italic">
                Esses bônus são disponibilizados apenas enquanto Ana Velasco mantém vagas abertas para novos pedidos. Quando a capacidade diária for atingida, os bônus poderão ser removidos sem aviso.
              </p>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 my-8 text-center">
              <p className="font-medium mb-2">
                Por tempo limitado, o desenho da sua alma gêmea está disponível com 70% de desconto.
              </p>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                De <span className="line-through text-red-500 text-xl">R$ 197</span> por apenas <span className="text-green-600 text-4xl">R$ 27</span>.
              </div>
            </div>

            <p>Ou seja, você recebe:</p>
            
            <ul className="space-y-3 pl-2">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Um desenho psíquico exclusivo da sua alma gêmea</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Conexão energética personalizada</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Envio IMEDIATO</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Arquivo bônus com orientações para atrair sua alma gêmea mais rapidamente</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Garantia de satisfação</span>
              </li>
            </ul>

            <p>
              Tudo isso por menos do que o valor de um jantar fora — mas com um impacto que pode marcar a sua vida para sempre.
            </p>
            <p className="italic text-gray-600">
              Essa condição especial não é permanente.
            </p>
            <p>
              Assim que o volume de pedidos atingir o limite diário, o valor retorna ao preço normal.
            </p>
            <p>
              Se você sente curiosidade, conexão ou simplesmente deseja descobrir quem pode estar destinado(a) a caminhar ao seu lado…
            </p>
            <p className="font-bold text-gray-900">
              Este é o melhor momento para aproveitar.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <CTAButton 
              text="SIM, EU QUERO O DESENHO DA MINHA ALMA GÊMEA ➜" 
              onClick={handleStartQuiz}
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="w-full bg-gray-50 px-4 py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-green-600 shadow-lg">
                <span className="text-5xl">🛡️</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Garantia de Satisfação</h2>
          <h3 className="text-xl font-semibold text-green-700 mb-6 uppercase tracking-wide">Selo de Garantia</h3>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-4 mb-8">
            <p>
              Confiamos tanto na experiência do Desenho da Sua Alma Gêmea que oferecemos uma garantia total.
            </p>
            <p>
              Se você sentir que o desenho não trouxe clareza, conexão ou não atendeu suas expectativas, basta enviar um e-mail no <strong className="text-gray-900">contato@almagemea.com.br</strong> dentro do prazo de 72 horas após a compra solicitando o cancelamento.
            </p>
            <p className="text-xl font-bold text-gray-900">
              👉 Você será 100% reembolsado, sem perguntas.
            </p>
            <ul className="font-medium text-gray-600 space-y-1">
              <li>Sem burocracia.</li>
              <li>Sem complicação.</li>
              <li>Sem risco para você.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <CTAButton 
              text="SIM, EU QUERO O DESENHO DA MINHA ALMA GÊMEA ➜" 
              onClick={handleStartQuiz}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white border-t border-gray-100">
        <FAQ />
      </section>

      {/* Footer CTA - Static */}
      <div className="w-full bg-white border-t border-gray-200 p-4 flex justify-center pb-8 md:pb-24">
        <CTAButton 
          text="SIM, EU QUERO O DESENHO DA MINHA ALMA GÊMEA ➜" 
          className="text-sm md:text-lg py-3 md:py-4" 
          onClick={handleStartQuiz}
        />
      </div>

    </div>
  );
}

export default App;