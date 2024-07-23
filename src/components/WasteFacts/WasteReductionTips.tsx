'use client';
import React, { useEffect, useState } from 'react';
import Meteors from '../magicui/meteors';
import { FadeIn, FadeInStagger } from '../FadeIn';
import { geminiGenerate } from '@/utils/gemini-generate';
import { NewsListLayout } from '../ClimateNewsContainer/NewsListLayout';
import { wasteFactsPrompt } from '@/constants/promptTemplates';
import Image from 'next/image';

export default function WasteReductionTips() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const parseGeminiResponse = () => {
    const message = `generate 1-2 sentence relevant to sustainable waste management and recycling choices that will help combat climate change. Perform web search to fetch latest and most accurate data.`;
    geminiGenerate(message, wasteFactsPrompt).then((response: any) => {
      try {
        let responseData: any = response?.replaceAll('\n', '');
        responseData = responseData?.replaceAll('```json', '');
        setData(JSON.parse(responseData));
      } catch (err: any) {
        console.log(JSON.stringify(err));
      }
    });
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
          Waste Reduction
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify my-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Where waste cannot be avoided, recycling leads to substantial resource savings. Recycling materials like
          paper, plastic, glass, and metals reduces the need for raw materials, conserving natural resources such as
          timber, water, and minerals. Reducing waste helps decrease the extraction of raw materials, preserving natural
          habitats and biodiversity.
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify my-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Encouraging recycling and waste reduction promotes a circular economy, where products and materials are kept
          in use for as long as possible, extracting maximum value before recovery and regeneration. This shift supports
          sustainable production and consumption patterns, reducing the environmental footprint of human activities.
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify mt-10 mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          We as individuals can each do our bit to plateau the impact. Here&apos;s how each one of us can reduce waste
          ...
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
