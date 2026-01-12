
import React, { useState } from 'react';
import { Chapter, Question } from '../types';
import { RadiologyTutorService } from '../geminiService';
import { Loader2, HelpCircle, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

interface QuizModuleProps {
  chapter: Chapter;
}

export const QuizModule: React.FC<QuizModuleProps> = ({ chapter }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const startQuiz = async () => {
    setLoading(true);
    setSubmitted(false);
    setUserAnswers({});
    const service = new RadiologyTutorService();
    const newQuestions = await service.generateQuiz(chapter);
    setQuestions(newQuestions);
    setLoading(false);
  };

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (submitted) return;
    setUserAnswers({ ...userAnswers, [qIdx]: oIdx });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-3xl border border-slate-200 shadow-sm">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <p className="text-slate-600 font-medium italic">Gemini is generating MBBS board-style questions...</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 shadow-sm">
        <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-800">Ready to test your knowledge?</h3>
        <p className="text-slate-500 mt-2 mb-6">Generated based on Chapter {chapter.id} of Patel's Radiology.</p>
        <button
          onClick={startQuiz}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md active:scale-95"
        >
          Generate Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {questions.map((q, qIdx) => (
        <div key={qIdx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
          <h4 className="text-lg font-bold text-slate-800 mb-6 flex gap-3">
            <span className="bg-slate-100 text-slate-500 w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0">{qIdx + 1}</span>
            {q.question}
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {q.options.map((option, oIdx) => {
              const isSelected = userAnswers[qIdx] === oIdx;
              const isCorrect = q.correctAnswer === oIdx;
              let classes = "w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between ";
              
              if (submitted) {
                if (isCorrect) classes += "bg-green-50 border-green-500 text-green-700";
                else if (isSelected) classes += "bg-red-50 border-red-500 text-red-700";
                else classes += "bg-slate-50 border-slate-100 opacity-50";
              } else {
                classes += isSelected ? "bg-blue-50 border-blue-600 text-blue-700 shadow-inner" : "bg-white border-slate-200 hover:bg-slate-50";
              }

              return (
                <button key={oIdx} onClick={() => handleSelect(qIdx, oIdx)} className={classes}>
                  {option}
                  {submitted && isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {submitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                </button>
              );
            })}
          </div>
          {submitted && (
            <div className="mt-6 p-4 bg-slate-50 rounded-xl border-l-4 border-blue-500 animate-in fade-in duration-700">
              <p className="text-xs font-bold text-blue-700 uppercase mb-1 tracking-tighter">Explanation</p>
              <p className="text-sm text-slate-600">{q.explanation}</p>
            </div>
          )}
        </div>
      ))}

      <div className="flex gap-4 sticky bottom-8 justify-center pb-8">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            className="bg-slate-900 text-white px-12 py-4 rounded-full font-bold shadow-xl hover:bg-black transition-all transform active:scale-95"
            disabled={Object.keys(userAnswers).length !== questions.length}
          >
            Submit Quiz
          </button>
        ) : (
          <button
            onClick={startQuiz}
            className="bg-white border-2 border-slate-900 text-slate-900 px-12 py-4 rounded-full font-bold shadow-lg hover:bg-slate-50 transition-all flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            New Questions
          </button>
        )}
      </div>
    </div>
  );
};
