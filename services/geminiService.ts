import { GoogleGenAI } from "@google/genai";

// Always use process.env.API_KEY directly when initializing the GoogleGenAI client instance.
// Using 'gemini-flash-lite-latest' (Gemini 2.5 series) as it supports the Google Maps tool.
const getAIClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTripInsights = async (origin: string, destination: string, latLng?: { latitude: number; longitude: number }) => {
  try {
    const ai = getAIClient();
    const config: any = {
      tools: [{ googleMaps: {} }],
    };

    // Include geolocation if provided to improve local recommendations
    if (latLng) {
      config.toolConfig = {
        retrievalConfig: {
          latLng: latLng
        }
      };
    }

    const response = await ai.models.generateContent({
      model: "gemini-flash-lite-latest",
      contents: `Proporciona consejos de viaje amigables ("MateTips") para un viaje de ${origin} a ${destination}. 
      Sugiere específicamente 2 o 3 paradas de descanso, miradores o lugares icónicos reales donde los viajeros puedan parar a tomar un mate. 
      Usa la herramienta de Google Maps para encontrar estos lugares exactos. 
      Responde en español con un tono aventurero y cálido.`,
      config: config,
    });

    const text = response.text || "¡Un buen mate hace cualquier viaje mejor! Disfruta el camino.";
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return {
      text,
      grounding: groundingChunks
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return { 
      text: "¡El camino te espera! No olvides llevar agua caliente para el termo. ¡Buen viaje!", 
      grounding: [] 
    };
  }
};

export const validateLocation = async (query: string) => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: "gemini-flash-lite-latest",
      contents: `Busca la ubicación "${query}" en Argentina. Devuelve su nombre oficial completo y una descripción de una oración.`,
      config: {
        tools: [{ googleMaps: {} }],
      },
    });
    return response.text || query;
  } catch (error) {
    console.error("Location validation error:", error);
    return query;
  }
};