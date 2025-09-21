import asyncHandler from "../utils/asyncHandler.js";
import { GoogleGenAI } from "@google/genai";

// initialize client
const client = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

// controller function
const chat = asyncHandler(async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
    prompt = "Hello, how are you?";

  }

  try {
    // call Gemini model
    const result = await client.models.generateContent({
      model: "gemini-2.5-flash", // choose model
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    // extract text response
    console.log(result);
    
    const text =
  result.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated";
    res.status(200).json({
      success: true,
      prompt,
      response: text,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

export { chat };
