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
      <p className="mb-6 text-center max-w-md">Seu pagamento foi confirmado com sucesso. Em breve entraremos em contato com você.</p>
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        onClick={onBack}
      >
        Voltar para o início
      </button>
    </div>
  );
}
