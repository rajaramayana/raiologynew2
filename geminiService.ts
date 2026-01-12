
import { GoogleGenAI, Type } from "@google/genai";
import { Question, Chapter } from "./types";

export class RadiologyTutorService {
  private ai: any;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateQuiz(chapter: Chapter): Promise<Question[]> {
    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 3 multiple choice questions for MBBS students about "${chapter.title}" based on the following text: ${chapter.content}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { type: Type.ARRAY, items: { type: Type.STRING } },
              correctAnswer: { type: Type.INTEGER, description: "Index of the correct option (0-3)" },
              explanation: { type: Type.STRING }
            },
            required: ["question", "options", "correctAnswer", "explanation"]
          }
        }
      }
    });

    try {
      return JSON.parse(response.text);
    } catch (e) {
      console.error("Failed to parse quiz JSON", e);
      return [];
    }
  }

  async askTutor(query: string, chapter: Chapter): Promise<string> {
    const response = await this.ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a Radiology Professor tutoring an MBBS student. 
      Use the context of this chapter: ${chapter.title} - ${chapter.content}.
      The student asks: ${query}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  }
}
