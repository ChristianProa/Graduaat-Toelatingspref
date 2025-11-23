
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Section, type Answers, type MultipleChoiceQuestion, type TextFillQuestion, type ReadingText, type Question } from './types';
import { WOORDENSCHAT_QUESTIONS, BEGRIJPEND_LEZEN_TEXTS, REKENEN_QUESTIONS, NUMERIEK_REDENEREN_QUESTIONS, CORRECT_ANSWERS, EXPLANATIONS } from './constants';

const SECTION_CONFIG = {
  [Section.Woordenschat]: { time: 15 * 60, next: Section.BegrijpendLezen, questions: WOORDENSCHAT_QUESTIONS },
  [Section.BegrijpendLezen]: { time: 35 * 60, next: Section.Rekenen, questions: BEGRIJPEND_LEZEN_TEXTS.flatMap(t => t.questions) },
  [Section.Rekenen]: { time: 30 * 60, next: Section.NumeriekRedeneren, questions: REKENEN_QUESTIONS },
  [Section.NumeriekRedeneren]: { time: 20 * 60, next: Section.Resultaat, questions: NUMERIEK_REDENEREN_QUESTIONS },
};

const QUESTIONS_BY_SECTION = {
    [Section.Woordenschat]: WOORDENSCHAT_QUESTIONS,
    [Section.BegrijpendLezen]: BEGRIJPEND_LEZEN_TEXTS.flatMap(t => t.questions),
    [Section.Rekenen]: REKENEN_QUESTIONS,
    [Section.NumeriekRedeneren]: NUMERIEK_REDENEREN_QUESTIONS,
};


type CalculatedResults = {
  totalCorrect: number;
  totalQuestions: number;
  scorePercentage: number;
  passed: boolean;
  sectionScores: Record<string, { correct: number; total: number }>;
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
  const handleInputChange = (questionId: string, index: number, value: string, placeholders: number) => {
    // Ensure we retrieve an array, and if it doesn't exist, initialize it with empty strings matching the placeholders
    const existingAnswer = answers[questionId];
    const currentAnswers = Array.isArray(existingAnswer) 
        ? [...existingAnswer] 
        : Array(placeholders).fill('');
    
    // Guard against existing arrays that might be shorter than placeholders (legacy data)
    while(currentAnswers.length < placeholders) {
        currentAnswers.push('');
    }

    currentAnswers[index] = value;
    onAnswerChange(questionId, currentAnswers);
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
                  onChange={(e) => handleInputChange(q.id, i, e.target.value, q.placeholders)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const ResultaatComponent: React.FC<{ results: CalculatedResults | null; answers: Answers; restartQuiz: () => void }> = ({ results, answers, restartQuiz }) => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  useEffect(() => {
    // Scroll to top when the section view changes to ensure the user sees the content from the start.
    window.scrollTo(0, 0);
  }, [selectedSection]);

  if (!results) {
    return (
      <div className="text-center bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-slate-800">Resultaten worden berekend...</h1>
      </div>
    );
  }

  const { passed, scorePercentage, totalCorrect, totalQuestions, sectionScores } = results;
  const sectionsForReview = Object.keys(QUESTIONS_BY_SECTION) as Section[];
  
  const questionsToReview = selectedSection ? QUESTIONS_BY_SECTION[selectedSection] : [];

  const renderReviewContent = () => (
    <div className="space-y-4">
      {questionsToReview.map((q, index) => {
        const userAnswer = answers[q.id];
        const correctAnswer = CORRECT_ANSWERS[q.id];
        const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
        const explanation = EXPLANATIONS[q.id];
        
        // Check if there is any actual content in the answer (not just empty strings in an array)
        const hasAnswer = Array.isArray(userAnswer) 
            ? userAnswer.some(a => a && a.trim() !== '') 
            : userAnswer && userAnswer.trim() !== '';

        const formatAnswer = (ans: string | string[]) => {
             if (Array.isArray(ans)) {
                 return ans.map(a => a || '-').join(', ');
             }
             return ans;
        }

        return (
          <div key={q.id} className={`p-4 rounded-lg border-l-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
            <p className="font-semibold text-slate-700">{index + 1}. {q.text}</p>
            <p className={`mt-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              <span className="font-bold">Uw antwoord:</span> {hasAnswer ? formatAnswer(userAnswer) : 'Niet beantwoord'}
            </p>
            {!isCorrect && (
              <>
                <p className="mt-1 text-slate-800">
                  <span className="font-bold">Correct antwoord:</span> {Array.isArray(correctAnswer) ? correctAnswer.join(', ') : correctAnswer}
                </p>
                {explanation && (
                  <div className="mt-3 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                    <h4 className="font-bold text-yellow-800">Uitleg:</h4>
                    <p className="text-slate-700 whitespace-pre-wrap">{explanation}</p>
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg w-full">
      {!selectedSection ? (
        <>
          <h1 className={`text-3xl sm:text-4xl font-bold mb-2 text-center ${passed ? 'text-green-600' : 'text-red-600'}`}>
            {passed ? 'Gefeliciteerd, u bent geslaagd!' : 'Helaas, niet geslaagd'}
          </h1>
          <p className="text-center text-slate-600 text-lg mb-8">
            U behaalde een score van <span className="font-bold">{scorePercentage}%</span> ({totalCorrect} / {totalQuestions} correct)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {Object.keys(sectionScores).map((sectionName) => {
              const score = sectionScores[sectionName as keyof typeof sectionScores];
              return (
                <div key={sectionName} className="border rounded-lg p-4 bg-slate-50">
                  <h3 className="font-bold text-slate-800">{sectionName}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-slate-600">{score.correct} / {score.total} correct</p>
                    <p className="font-semibold text-blue-600">{Math.round((score.correct / score.total) * 100)}%</p>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5 mt-2">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(score.correct / score.total) * 100}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="border-t pt-6 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Antwoordenoverzicht</h2>
            <p className="text-slate-600 mb-4">Kies een sectie om uw antwoorden te bekijken.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {sectionsForReview.map(section => (
                <button 
                  key={section} 
                  onClick={() => setSelectedSection(section)}
                  className={`font-semibold py-2 px-4 rounded-lg transition-colors bg-slate-200 text-slate-700 hover:bg-slate-300`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <nav className="md:w-64" aria-label="Sectie Navigatie">
            <div className="sticky top-6">
              <h3 className="text-lg font-bold text-slate-800 mb-3 px-2">Navigeer</h3>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => setSelectedSection(null)}
                    className="w-full flex items-center gap-3 text-left font-semibold py-2 px-4 rounded-lg transition-colors bg-slate-200 text-slate-700 hover:bg-slate-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 10l1.293-1.293z" clipRule="evenodd" />
                    </svg>
                    <span>Overzicht</span>
                  </button>
                </li>
                 <li className="pt-2">
                  <hr className="mb-2"/>
                 </li>
                {sectionsForReview.map(section => (
                  <li key={section}>
                    <button 
                      onClick={() => setSelectedSection(section)}
                      className={`w-full text-left font-semibold py-2 px-4 rounded-lg transition-colors ${selectedSection === section ? 'bg-blue-600 text-white' : 'hover:bg-blue-100 text-slate-700'}`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Details: {selectedSection}</h2>
            {renderReviewContent()}
          </div>
        </div>
      )}

      <div className="mt-10 text-center">
        <button onClick={restartQuiz} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
          Opnieuw Beginnen
        </button>
      </div>
    </div>
  );
};


// --- MAIN APP COMPONENT ---

function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.Intro);
  const [answers, setAnswers] = useState<Answers>({});
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [results, setResults] = useState<CalculatedResults | null>(null);
  
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

  const calculateResults = useCallback(() => {
      const sectionScores: Record<string, { correct: number; total: number }> = {};
      let totalCorrect = 0;

      Object.entries(SECTION_CONFIG).forEach(([sectionName, config]) => {
          let correctInSection = 0;
          const questions = config.questions as Question[];
          questions.forEach(q => {
              const userAnswer = answers[q.id];
              const correctAnswer = CORRECT_ANSWERS[q.id];
              if (JSON.stringify(userAnswer) === JSON.stringify(correctAnswer)) {
                  correctInSection++;
              }
          });
          sectionScores[sectionName] = { correct: correctInSection, total: questions.length };
          totalCorrect += correctInSection;
      });

      const totalQuestions = Object.values(sectionScores).reduce((sum, s) => sum + s.total, 0);
      const scorePercentage = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
      
      setResults({
          totalCorrect,
          totalQuestions,
          scorePercentage,
          passed: scorePercentage >= 55,
          sectionScores,
      });
  }, [answers]);

  useEffect(() => {
    if (currentSection === Section.Resultaat && !results) {
        calculateResults();
    }
    
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
  }, [currentSection, handleNextSection, calculateResults, results]);

  const handleAnswerChange = (questionId: string, answer: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };
  
  const restartQuiz = () => {
      setAnswers({});
      setResults(null);
      setCurrentSection(Section.Intro);
  }

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
        return <ResultaatComponent results={results} answers={answers} restartQuiz={restartQuiz} />;
      default:
        return null;
    }
  };
  
  const isTestActive = currentSection !== Section.Intro && currentSection !== Section.Resultaat;
  const config = isTestActive ? SECTION_CONFIG[currentSection as keyof typeof SECTION_CONFIG] : null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        {isTestActive && (
          <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm p-4 mb-6 rounded-xl shadow-md flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-blue-800">{currentSection}</h1>
              <p className="text-sm text-slate-500">{config?.questions.length} vragen</p>
            </div>
            <Timer timeLeft={timeLeft} />
          </header>
        )}
        
        <main className={`${
          currentSection === Section.Intro
            ? 'flex items-center justify-center h-[80vh]'
            : isTestActive
            ? 'bg-slate-50 p-6 rounded-xl shadow-inner'
            : ''
        }`}>
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
