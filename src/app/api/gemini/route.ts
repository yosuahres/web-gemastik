import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  PROMPT_LOW_ANXIETY,
  PROMPT_MEDIUM_ANXIETY,
  PROMPT_HIGH_ANXIETY,
} from "../../../lib/prompts";
import { AnxietyLevel } from "@/types/api";

export async function POST(req: Request) {
  const {
    message,
    anxietyLevel,
  }: { message: string; anxietyLevel: AnxietyLevel } = await req.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  let prompt = "";
  switch (anxietyLevel) {
    case "LOW":
      prompt = PROMPT_LOW_ANXIETY;
      break;
    case "MEDIUM":
      prompt = PROMPT_MEDIUM_ANXIETY;
      break;
    case "HIGH":
      prompt = PROMPT_HIGH_ANXIETY;
      break;
  }

  try {
    const chat = model.startChat({
      history: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        maxOutputTokens: 200,
      },
    });

    const result = await chat.sendMessage(message);
    const response = result.response;
    const text = response.text();

    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (_error) {
    // console.error('Error calling Gemini API:', error);
    return new Response(
      JSON.stringify({ error: "Failed to get response from AI" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
