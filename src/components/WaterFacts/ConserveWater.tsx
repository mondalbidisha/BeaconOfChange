'use client';
import React, { useEffect, useState } from 'react';
import Meteors from '../magicui/meteors';
import { FadeIn } from '../FadeIn';
import { NewsListLayout } from '../ClimateNewsContainer/NewsListLayout';
import { geminiGenerate } from '@/utils/gemini-generate';
import { waterSaverPrompt } from '@/constants/promptTemplates';
import Image from 'next/image';

export default function ConserveWater() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const parseGeminiResponse = () => {
    const message = `generate 1-2 sentences relevant to saving water to combat climate change. Perform web search to fetch latest and most accurate data.`;
    try {
      geminiGenerate(message, waterSaverPrompt)
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
    <div className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 pb-20 pt-10">
      <Meteors number={40} />
      <FadeIn>
        <div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
          Water Conservation
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex items-center text-center mb-5 flex-col text-slate-100 gap-2 text-lg px-10">
          Using water smartly can help us ensure a steady flow of clean, safe water.
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
          You can save water by taking shorter showers, turning off the tap when brushing your teeth, installing a
          low-flow toilet, and many other ways.
        </div>
      </FadeIn>
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
    </div>
  );
}
