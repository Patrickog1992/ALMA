import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="border-b border-gray-200 py-6">
      <h4 className="text-xl font-bold text-gray-900 mb-3">{question}</h4>
      <div className="text-gray-700 leading-relaxed text-base">
        {answer}
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">FAQs</h3>
      
      <div className="flex flex-col">
        <FAQItem 
          question="Como funcionam meus desenhos?" 
          answer={
            <>
              <p className="mb-2">Os esboços são baseados em leituras energéticas intuitivas. Embora eu não te conheça pessoalmente, conecto-me às energias e vibrações associadas a você no momento da solicitação. Essas energias me guiam na visualização e no esboço do que pode ser uma representação da sua alma gêmea em potencial.</p>
              <p>É uma mistura de intuição, visão espiritual e expressão artística. Para muitos, esses desenhos são uma exploração divertida e intrigante de possibilidades, enquanto para outros podem ter uma ressonância mais profunda. De qualquer forma, esta experiência foi criada para ser positiva e edificante para você.</p>
            </>
          } 
        />
        
        <FAQItem 
          question="Sou cético(a) em relação a isso, por que eu deveria confiar em você?" 
          answer="Sou Ana Velasco, uma vidente com um dom único que aperfeiçoei desde a infância. Minhas habilidades foram desenvolvidas em uma família profundamente enraizada em práticas espirituais e psíquicas, e passei anos aperfeiçoando minha arte. Eu não apenas desenho; conecto-me às energias e emoções em um nível que não é visível a olho nu. Essa conexão me permite criar uma representação da sua alma gêmea." 
        />

        <FAQItem 
          question="Sou mais velho(a), ainda pode haver alguém para mim?" 
          answer={
            <>
              <p className="mb-2">Absolutamente, ainda pode haver alguém para você, independentemente da sua idade. O amor e a conexão não conhecem limites no tempo. A idade muitas vezes traz sabedoria, profundidade e um rico conjunto de experiências — todas qualidades belas que podem atrair uma alma gêmea.</p>
              <p>Lembre-se: nunca é tarde demais para o amor encontrar o caminho até a sua vida!</p>
            </>
          } 
        />

        <FAQItem 
          question="Em quanto tempo posso esperar receber meu desenho?" 
          answer="Seu desenho será enviado por e-mail dentro de 24 horas. Em casos raros, quando a demanda é alta, a entrega pode levar até 48 horas. No entanto, você tem a opção de se beneficiar de uma entrega rápida em 6 horas." 
        />

        <FAQItem 
          question="O que está incluído no meu esboço?" 
          answer={
            <>
              <p className="mb-2">Além do desenho da sua alma gêmea, incluí um arquivo sobre “como atrair sua alma gêmea mais rapidamente”, que contém informações espirituais e práticas valiosas.</p>
              <p>Você também pode optar por receber uma descrição detalhada das características e qualidades dela para ajudá-lo(a) a reconhecê-la no momento certo. Essa opção adicional pode ser marcada na página de pagamento. Pagamento adicional necessário.</p>
            </>
          } 
        />

        <FAQItem 
          question="Reconhecerei minha alma gêmea graças ao esboço?" 
          answer="Muitas pessoas descobriram que o desenho se parecia com alguém que já conheciam, como um parceiro atual, uma pessoa que admiram ou alguém por quem têm sentimentos." 
        />

        <FAQItem 
          question="O que posso esperar do serviço?" 
          answer="Você pode esperar um trabalho de alta qualidade e um esboço genuíno das visões recebidas ao me conectar com a energia infinita do universo, com garantia de satisfação." 
        />
      </div>
    </div>
  );
};

export default FAQ;