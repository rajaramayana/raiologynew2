
export interface Chapter {
  id: number;
  title: string;
  content: string;
  keyPoints: string[];
}

export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
