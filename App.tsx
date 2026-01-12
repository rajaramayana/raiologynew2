
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { QuizModule } from './components/QuizModule';
import { TutorChat } from './components/TutorChat';
import { chapters } from './bookContent';
import { Chapter } from './types';
import { GraduationCap, Book, PencilLine } from 'lucide-react';

const App: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState<Chapter>(chapters[0]);
  const [mode, setMode] = useState<'study' | 'quiz'>('study');

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar 
        currentChapterId={currentChapter.id} 
        onSelectChapter={(chapter) => {
          setCurrentChapter(chapter);
          setMode('study');
        }} 
      />

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <h1 className="font-bold text-slate-800">Patel Radiology Interactive</h1>
          </div>
          
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setMode('study')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                mode === 'study' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Book className="w-4 h-4" />
              Study
            </button>
            <button
              onClick={() => setMode('quiz')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                mode === 'quiz' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <PencilLine className="w-4 h-4" />
              Test
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-[#F8FAFC]">
          {mode === 'study' ? (
            <ContentArea chapter={currentChapter} />
          ) : (
            <div className="max-w-4xl mx-auto py-12 px-8">
              <div className="mb-8">
                <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Self Assessment</span>
                <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Chapter {currentChapter.id}: {currentChapter.title}</h2>
              </div>
              <QuizModule chapter={currentChapter} />
            </div>
          )}
        </main>
      </div>

      <TutorChat chapter={currentChapter} />
    </div>
  );
};

export default App;
