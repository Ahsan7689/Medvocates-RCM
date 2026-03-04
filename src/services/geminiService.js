import { GoogleGenAI } from "@google/genai";
import { MODEL_NAME, SYSTEM_INSTRUCTION } from "./chatConstants.js";

let chatSession = null;

/**
 * Send a message to Gemini and get a response
 * @param {Array} history - Previous messages
 * @param {string} newMessage - New user message
 * @returns {Promise<string>} - AI response text
 */
export const sendMessageToGemini = async (history, newMessage) => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyAUSNA8V64s1f1uQV7fQXnSo5GG1O-BYLs";

    const ai = new GoogleGenAI({ apiKey });

    // Map message history to Gemini API format (skip the initial greeting id)
    const apiHistory = history
      .filter((msg) => msg.id !== "init-0")
      .map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }));

    if (!chatSession) {
      chatSession = ai.chats.create({
        model: MODEL_NAME,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: apiHistory,
      });
    }

    const result = await chatSession.sendMessage({ message: newMessage });
    return result.text || "I'm sorry, I couldn't process that response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to get response from MedVocates Assistant.");
  }
};

export const resetChatSession = () => {
  chatSession = null;
};