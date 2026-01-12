
import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import { chapters } from '../bookContent';
import { Chapter } from '../types';

interface SidebarProps {
  currentChapterId: number;
  onSelectChapter: (chapter: Chapter) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentChapterId, onSelectChapter }) => {
  return (
    <div className="w-72 bg-white border-r border-slate-200 h-full flex flex-col">
      <div className="p-6 border-b border-slate-100 bg-slate-900 text-white">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-400" />
          RadNotes
        </h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">MBBS Radiology Tutor</p>
      </div>
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => onSelectChapter(chapter)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              currentChapterId === chapter.id
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <span className="truncate">{chapter.id}. {chapter.title}</span>
            <ChevronRight className={`w-4 h-4 transition-transform ${currentChapterId === chapter.id ? 'translate-x-1' : ''}`} />
          </button>
        ))}
        <div className="pt-4 px-4">
            <div className="p-3 bg-slate-100 rounded-lg text-[10px] text-slate-500 font-mono">
                SOURCE: Pradip R. Patel, Lecture Notes: Radiology, 3rd Edition.
            </div>
        </div>
      </div>
    </div>
  );
};
