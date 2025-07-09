import { CheckCircleIcon } from 'lucide-react';
export const HeroSection = () => {
  return <section className="bg-[url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')] bg-cover text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#3c2415]">
              Aulas de Guitarra
            </h1>
            <p className="text-xl mb-8 text-white">
              Aprenda a tocar guitarra no seu próprio ritmo com nossas vídeo aulas
              personalizadas para iniciantes e avançados. Assiste pelo celular, tablet ou computador.
            </p>
            <div className="bg-[#e8b05c] inline-block px-6 py-2 mb-8 relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 -mt-3 -mr-2 rounded">
                APENAS HOJE
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#3c2415] text-lg line-through">
                  1997 MT
                </span>
                <span className="text-[#3c2415] text-3xl font-bold">
                  249 MT
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/258844948189"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.031 16.617c-.272.85-1.473 1.786-2.414 1.984-.644.136-1.482.163-2.456-.042-1.122-.24-2.212-.621-3.257-1.331-2.632-1.78-4.473-4.904-4.79-5.435-.317-.53-2.59-3.494-2.59-6.617s1.571-4.712 2.134-5.356c.56-.644 1.221-.807 1.63-.807s.817.042 1.177.042c.36 0 .841-.042 1.284.98.446 1.02 1.517 3.537 1.651 3.793.133.255.224.552.044.895-.178.342-.802 1.237-.802 1.237s-.178.255-.044.51c.133.255.6 1.02 1.29 1.763.836.895 1.539 1.39 1.762 1.543.223.153.355.128.487-.063.133-.191.58-.678.773-.91.193-.23.386-.153.643-.043.258.111 1.649.776 1.931.92.282.142.47.213.538.33.067.117.067.678-.205 1.331z" fillRule="nonzero" />
                </svg>
                Contactar via WhatsApp
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-[#e8b05c]" />
                <span>Primeira aula grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-[#e8b05c]" />
                <span>Todos os níveis</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white p-2 rounded-lg shadow-xl">
                <img src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Estudante aprendendo a tocar guitarra" className="rounded w-full h-auto" />
              </div>
              <div className="absolute -bottom-4 -right-4 transform rotate-12">
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 18V9.93a8 8 0 0 1-3 .93v-2c.93-.19 1.69-.51 2.3-.97.61-.46 1.08-1.01 1.42-1.66.34-.65.5-1.43.5-2.33h2v14h-3.18z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};