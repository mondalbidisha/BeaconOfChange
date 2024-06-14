import { PromptTemplate } from "langchain/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const geminiGenerate = async (message: string): Promise<string | null> => {
  const instruction = "Follow instructions as closely as possible. Donot make something up. All data provided by you should be correct and verifiable.";

  const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    maxOutputTokens: 2048,
    apiKey: "AIzaSyCMjGZC37WP_gWMG8Y30RRdAvDeDSh1xzk",
  });

  const promptTemplate = PromptTemplate.fromTemplate(
    `Prompt:
      You are supposed to act as a climate scientist with sufficient knowledge of global climate change and its impact all over the world.
      Your primary task is to generate content on some of the most pressing climate change issues. 
      You are supposed to generate 3-4 sentences only. Do not use verbose language. 
      Your response should be concise, easy to understand and should clearly express why it is such a pressing matter today. 
      Include a relevant example of a recent event that occured due to climate change. USE DATA FROM WEB SEARCH. 
      This message should resonate with all types of audiences. Target audience is common man. 
      Response should only contain the content relevant to each point. DONOT include anything extra.
      DONOT use the word "example" anywhere in the response
      Please provide only the generated or enhanced message, without any additional explanations or suggestions.

        Instruction:
        {instruction}
        
        Original Message:
        {message}
        
        Generated or Enhanced Message:
    `
  );

  const chain = promptTemplate.pipe(model);

    const result = await chain.invoke({
        instruction: instruction,
        message: message,
    });

  return result.text;
};