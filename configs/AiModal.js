import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY,
});

export const response = ai.models.generateContent({
  model: "gemini-2.0-flash",
  contents: "Explain how AI works in a few words",
});
console.log(response.text);
