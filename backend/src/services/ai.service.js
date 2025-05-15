import pkg from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const { GoogleGenAI } = pkg;

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

export default async function generateContent(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  return response.text;
}
