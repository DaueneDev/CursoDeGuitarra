import React from 'react';
import { MusicIcon, UsersIcon, AwardIcon, BookOpenIcon } from 'lucide-react';
export const FeaturesSection = () => {
  const lessons = [{
    icon: <MusicIcon className="h-8 w-8 text-[#e8b05c]" />,
    title: 'Aulas Personalizadas',
    description: 'Currículo personalizado baseado no seu nível, objetivos e estilos musicais favoritos.'
  }, {
    icon: <UsersIcon className="h-8 w-8 text-[#e8b05c]" />,
    title: 'Instrução 1-a-1',
    description: 'Receba atenção individual de instrutores experientes focados nas suas necessidades específicas.'
  }, {
    icon: <AwardIcon className="h-8 w-8 text-[#e8b05c]" />,
    title: 'Professores Profissionais',
    description: 'Aprenda com instrutores certificados com anos de experiência em ensino e performance.'
  }, {
    icon: <BookOpenIcon className="h-8 w-8 text-[#e8b05c]" />,
    title: 'Horário Flexível',
    description: 'Agende aulas em horários que funcionem para você, com opções presenciais ou online.'
  }];
  return <section id="lessons" className="py-16 bg-[#f9f3e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3c2415] mb-4">
            Nossas Aulas de Guitarra
          </h2>
          <p className="text-xl text-[#6b5240] max-w-3xl mx-auto">
            Seja você iniciante ou buscando aprimorar suas habilidades, temos a
            aula perfeita para você.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lessons.map((lesson, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-[#e8b05c]">
              <div className="mb-4">{lesson.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[#3c2415]">
                {lesson.title}
              </h3>
              <p className="text-[#6b5240]">{lesson.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};