
import React, { useState, useEffect, useCallback } from 'react';
import { Section, type Answers, type MultipleChoiceQuestion, type TextFillQuestion, type ReadingText } from './types';
import { WOORDENSCHAT_QUESTIONS, BEGRIJPEND_LEZEN_TEXTS, REKENEN_QUESTIONS, NUMERIEK_REDENEREN_QUESTIONS } from './constants';

const SECTION_CONFIG = {
  [Section.Woordenschat]: { time: 15 * 60, next: Section.BegrijpendLezen, questions: WOORDENSCHAT_QUESTIONS.length },
  [Section.BegrijpendLezen]: { time: 35 * 60, next: Section.Rekenen, questions: BEGRIJPEND_LEZEN_TEXTS.reduce((acc, t) => acc + t.questions.length, 0) },
  [Section.Rekenen]: { time: 30 * 60, next: Section.NumeriekRedeneren, questions: REKENEN_QUESTIONS.length },
  [Section.NumeriekRedeneren]: { time: 20 * 60, next: Section.Resultaat, questions: NUMERIEK_REDENEREN_QUESTIONS.length },
};

// --- HELPER COMPONENTS (defined outside App to prevent re-renders) ---

interface TimerProps {
  timeLeft: number;
}
const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return (
    <div className="text-xl font-bold text-slate-700">
      Tijd over: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </div>
  );
};

interface SectionProps {
  answers: Answers;
  onAnswerChange: (questionId: string, answer: string | string[]) => void;
}

const WoordenschatComponent: React.FC<SectionProps> = ({ answers, onAnswerChange }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-slate-800">Deel 1: Woordenschat</h2>
    <p className="mb-6 text-slate-600">Kies het woord dat (bijna) volledig dezelfde betekenis heeft als het vetgedrukte woord.</p>
    <div className="space-y-6">
      {WOORDENSCHAT_QUESTIONS.map((q, index) => (
        <div key={q.id} className="p-4 border rounded-lg bg-white shadow-sm">
          <p className="font-semibold text-lg mb-2">{index + 1}. <span className="font-bold">{q.text}</span></p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {q.options.map(opt => (
              <label key={opt.id} className={`p-2 border rounded-md cursor-pointer text-center transition-colors ${answers[q.id] === opt.text ? 'bg-blue-500 text-white border-blue-500' : 'bg-slate-50 hover:bg-blue-100'}`}>
                <input type="radio" name={q.id} value={opt.text} checked={answers[q.id] === opt.text} onChange={(e) => onAnswerChange(q.id, e.target.value)} className="sr-only" />
                {opt.text}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const BegrijpendLezenComponent: React.FC<SectionProps> = ({ answers, onAnswerChange }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-slate-800">Deel 2: Begrijpend Lezen</h2>
    <p className="mb-6 text-slate-600">Lees de teksten aandachtig en beantwoord de vragen. Er is steeds slechts één antwoord volledig juist.</p>
    {BEGRIJPEND_LEZEN_TEXTS.map(textItem => (
      <div key={textItem.id} className="mb-8 p-4 border rounded-lg bg-white shadow-sm">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">{textItem.title}</h3>
        {textItem.paragraphs.map((p, i) => <p key={i} className="mb-3 text-slate-700">{p}</p>)}
        <div className="mt-6 space-y-4">
          {textItem.questions.map((q, index) => (
            <div key={q.id} className="p-3 border-t">
              <p className="font-semibold mb-2">{index + 1}. {q.text}</p>
              <div className="flex flex-col space-y-2">
                {q.options.map(opt => (
                  <label key={opt.id} className={`p-2 border rounded-md cursor-pointer transition-colors ${answers[q.id] === opt.text ? 'bg-blue-500 text-white border-blue-500' : 'bg-slate-50 hover:bg-blue-100'}`}>
                    <input type="radio" name={q.id} value={opt.text} checked={answers[q.id] === opt.text} onChange={(e) => onAnswerChange(q.id, e.target.value)} className="mr-2" />
                    {opt.text}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const RekenenComponent: React.FC<SectionProps> = ({ answers, onAnswerChange }) => (
   <div>
    <h2 className="text-2xl font-bold mb-4 text-slate-800">Deel 3: Rekenen</h2>
    <p className="mb-6 text-slate-600">Los de oefeningen op. Je mag een standaard zakrekenmachine (zonder haakjes) en een kladblad gebruiken.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {REKENEN_QUESTIONS.map((q, index) => (
        <div key={q.id} className="p-4 border rounded-lg bg-white shadow-sm">
          <p className="font-semibold text-lg mb-3">{index + 1}. {q.text}</p>
          <div className="flex flex-col space-y-2">
            {q.options.map(opt => (
              <label key={opt.id} className={`p-2 border rounded-md cursor-pointer transition-colors ${answers[q.id] === opt.text ? 'bg-blue-500 text-white border-blue-500' : 'bg-slate-50 hover:bg-blue-100'}`}>
                <input type="radio" name={q.id} value={opt.text} checked={answers[q.id] === opt.text} onChange={(e) => onAnswerChange(q.id, e.target.value)} className="mr-2" />
                {opt.text}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const NumeriekRedenerenComponent: React.FC<SectionProps> = ({ answers, onAnswerChange }) => {
  const handleInputChange = (questionId: string, index: number, value: string) => {
    const currentAnswers = (answers[questionId] as string[]) || [];
    const newAnswers = [...currentAnswers];
    newAnswers[index] = value;
    onAnswerChange(questionId, newAnswers);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Deel 4: Numeriek Redeneren</h2>
      <p className="mb-6 text-slate-600">Zoek de regel in de getallenreeks en vul de twee ontbrekende getallen in.</p>
      <div className="space-y-6">
        {NUMERIEK_REDENEREN_QUESTIONS.map((q, index) => (
          <div key={q.id} className="p-4 border rounded-lg bg-white shadow-sm flex items-center gap-4 flex-wrap">
            <p className="font-semibold text-lg">{index + 1}. {q.text.split('?').slice(0, -1).join('?')}</p>
            <div className="flex gap-2">
              {Array.from({ length: q.placeholders }).map((_, i) => (
                 <input
                  key={i}
                  type="text"
                  className="w-16 p-2 border rounded-md text-center"
                  value={((answers[q.id] as string[]) || [])[i] || ''}
                  onChange={(e) => handleInputChange(q.id, i, e.target.value)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// --- MAIN APP COMPONENT ---

function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.Intro);
  const [answers, setAnswers] = useState<Answers>({});
  const [timeLeft, setTimeLeft] = useState<number>(0);
  
  const handleNextSection = useCallback(() => {
    if(currentSection === Section.Intro) {
      setCurrentSection(Section.Woordenschat);
      return;
    }
    const next = SECTION_CONFIG[currentSection as keyof typeof SECTION_CONFIG]?.next;
    if (next) {
      setCurrentSection(next);
    }
  }, [currentSection]);

  useEffect(() => {
    if (currentSection !== Section.Intro && currentSection !== Section.Resultaat) {
      const config = SECTION_CONFIG[currentSection as keyof typeof SECTION_CONFIG];
      setTimeLeft(config.time);

      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleNextSection();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSection, handleNextSection]);

  const handleAnswerChange = (questionId: string, answer: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const renderSection = () => {
    switch (currentSection) {
      case Section.Intro:
        return (
          <div className="text-center bg-white p-10 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-slate-800">Toelatingsproef Graduaatsopleidingen</h1>
            <p className="text-xl mb-6 text-slate-600">Simulatie-examen</p>
            <p className="max-w-2xl mx-auto mb-8 text-slate-700">Dit is een oefentoets om u voor te bereiden op de echte proef. Het examen bestaat uit 4 onderdelen met een totale duur van 100 minuten. De moeilijkheidsgraad neemt per onderdeel toe. Klik op 'Start Examen' om te beginnen met het eerste onderdeel.</p>
            <button onClick={handleNextSection} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
              Start Examen
            </button>
          </div>
        );
      case Section.Woordenschat:
        return <WoordenschatComponent answers={answers} onAnswerChange={handleAnswerChange} />;
      case Section.BegrijpendLezen:
        return <BegrijpendLezenComponent answers={answers} onAnswerChange={handleAnswerChange} />;
      case Section.Rekenen:
        return <RekenenComponent answers={answers} onAnswerChange={handleAnswerChange} />;
      case Section.NumeriekRedeneren:
        return <NumeriekRedenerenComponent answers={answers} onAnswerChange={handleAnswerChange} />;
      case Section.Resultaat:
        return (
          <div className="text-center bg-white p-10 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-green-600">Examen Voltooid!</h1>
            <p className="max-w-2xl mx-auto mb-8 text-slate-700">U heeft de simulatietoets afgerond. Uw antwoorden zijn opgeslagen. In een echte applicatie zou u nu uw resultaten kunnen bekijken.</p>
             <button onClick={() => { setCurrentSection(Section.Intro); setAnswers({}); }} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
              Opnieuw Beginnen
            </button>
          </div>
        );
      default:
        return null;
    }
  };
  
  const isTestActive = currentSection !== Section.Intro && currentSection !== Section.Resultaat;
  const config = isTestActive ? SECTION_CONFIG[currentSection as keyof typeof SECTION_CONFIG] : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl mx-auto">
        {isTestActive && (
          <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm p-4 mb-6 rounded-xl shadow-md flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-blue-800">{currentSection}</h1>
              <p className="text-sm text-slate-500">{config?.questions} vragen</p>
            </div>
            <Timer timeLeft={timeLeft} />
          </header>
        )}
        
        <main className={`${!isTestActive ? 'flex items-center justify-center h-[80vh]' : 'bg-slate-50 p-6 rounded-xl shadow-inner'}`}>
          {renderSection()}
        </main>
        
        {isTestActive && (
           <footer className="mt-6 flex justify-end">
             <button onClick={handleNextSection} className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">
              {currentSection === Section.NumeriekRedeneren ? 'Verstuur Examen' : 'Volgende Sectie'}
             </button>
           </footer>
        )}
      </div>
    </div>
  );
}

export default App;
