'use client';
import React, { useEffect, useState } from 'react';
import Meteors from '../magicui/meteors';
import { FadeIn, FadeInStagger } from '../FadeIn';
import { geminiGenerate } from '@/utils/gemini-generate';
import { NewsListLayout } from '../ClimateNewsContainer/NewsListLayout';
import { foodSaverPrompt } from '@/constants/promptTemplates';
import Image from 'next/image';

export default function SustainableFoodTips() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const parseGeminiResponse = () => {
    const message = `generate 1-2 sentences relevant to sustainable food choices that will help combat combat climate change. Perform a web search to fetch latest and most accurate data.`;
    try {
      geminiGenerate(message, foodSaverPrompt)
        .then((response: any) => {
          const jsonString = response.replace('```json\n', '').replace('\n```', '');
          setData(JSON.parse(jsonString));
        })
        .catch((error: any) => {
          console.log(JSON.stringify(error));
        });
    } catch (error: any) {
      console.log(JSON.stringify(error));
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false);
    } else {
      parseGeminiResponse();
    }
  }, [data.length]);

  return (
    <main className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10">
      <Meteors number={40} />
      <FadeIn>
        <div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
          Sustainable Food Choices
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          As individuals we need to collectively work towards mitigating these impacts. Introduction of significant
          changes in food production and consumption are necessary. One effective strategy is shifting dietary patterns
          toward plant-based foods, which have a lower environmental footprint. Additionally, reducing food waste at
          consumer and production levels can conserve resources and lower emissions.
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify mt-10 mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          By embracing sustainable agricultural practices, promoting plant-based diets, and minimizing food waste, we
          can significantly reduce the environmental impact of our food systems and contribute to the fight against
          climate change.
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify mt-10 mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Each one us can do our bit to plateau the impact. Here&apos;s how each one of us can make sustainable food
          choices ...
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center flex-col h-[70vh]">
          {isLoading ? (
            <div className="w-full flex flex-row justify-center mt-5">
              <Image src={'/loader.svg'} width={150} height={150} alt="Loading..." />
            </div>
          ) : (
            <NewsListLayout data={data} />
          )}
        </div>
      </FadeIn>
    </main>
  );
}
