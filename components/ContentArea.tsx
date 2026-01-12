
import React from 'react';
import { Chapter } from '../types';
import { CheckCircle2, Image as ImageIcon } from 'lucide-react';

interface ContentAreaProps {
  chapter: Chapter;
}

export const ContentArea: React.FC<ContentAreaProps> = ({ chapter }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-8">
      <div className="mb-8">
        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Chapter {chapter.id}</span>
        <h2 className="text-4xl font-extrabold text-slate-900 mt-2">{chapter.title}</h2>
      </div>

      <div className="prose prose-slate max-w-none mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 leading-relaxed text-slate-700 whitespace-pre-wrap">
          {chapter.content}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
          <CheckCircle2 className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            Key Learning Points
          </h3>
          <ul className="space-y-3">
            {chapter.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-blue-100">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-800 text-slate-300 p-6 rounded-2xl shadow-lg border border-slate-700">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
            <ImageIcon className="w-5 h-5 text-slate-400" />
            Relevant Figures
          </h3>
          <div className="space-y-4">
             <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                <p className="text-xs font-semibold text-slate-400">Fig {chapter.id}.1</p>
                <p className="text-sm text-slate-200 mt-1 italic">Diagnostic criteria for {chapter.title} anomalies.</p>
             </div>
             <div className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                <p className="text-xs font-semibold text-slate-400">Fig {chapter.id}.2</p>
                <p className="text-sm text-slate-200 mt-1 italic">Comparison of normal vs pathological findings.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
