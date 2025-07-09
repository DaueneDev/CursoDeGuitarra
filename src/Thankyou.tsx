import React from 'react';

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export function Thankyou({ onBack }: { onBack: () => void }) {
  React.useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Purchase');
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-2xl font-bold mb-4">Obrigado pelo pagamento!</h2>
      <p className="mb-6 text-center max-w-md">Seu pagamento foi confirmado com sucesso. Volte para a conversa pelo WhatsApp para receber o Acesso ao Curso. Boas Aulas!!!</p>
      <a
        href="https://wa.me/258844948189"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition text-center mt-2"
      >
        Voltar para o WhatsApp
      </a>
    </div>
  );
}
