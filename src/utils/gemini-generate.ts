import { PromptTemplate } from "langchain/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const geminiGenerate = async (message: string, prompt: string): Promise<string | null> => {
  const instruction = `Follow instructions as closely as possible. Donot make anything up. All data provided by you should be correct and verifiable.
  Perform web search and get the latest information available.`;

  const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    maxOutputTokens: 2048,
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const promptTemplate = PromptTemplate.fromTemplate(prompt);

  const chain = promptTemplate.pipe(model);

  const result = await chain.invoke({
      instruction: instruction,
      message: message,
  });

  const responseText = await result.text;

  return responseText;
};