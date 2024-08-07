'use client';
import React, { useEffect, useState } from 'react';
import Meteors from '../magicui/meteors';
import { FadeIn, FadeInStagger } from '../FadeIn';
import { geminiGenerate } from '@/utils/gemini-generate';
import { NewsListLayout } from '../ClimateNewsContainer/NewsListLayout';
import { homeEnergyFactsPrompt } from '@/constants/promptTemplates';
import Image from 'next/image';

export default function HomeEnergyTips() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const parseGeminiResponse = () => {
    const message = `generate 1-2 sentence relevant saving water to combat climate change. Perform web search to fetch latest and most accurate data.`;
    geminiGenerate(message, homeEnergyFactsPrompt).then((response: any) => {
      try {
        let data: any = response?.replaceAll('\n', '');
        data = data?.replaceAll('```json', '');
        setData(JSON.parse(data));
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
          Energy Conservation
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify mt-10 mb-5 flex-col text-slate-100 gap-2 text-lg px-20">
          Globally, residential and commercial buildings, consume over half of all electricity.
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Switching to renewable energy sources for home energy use can significantly reduce the carbon footprint of
          residential buildings. Renewable energy sources such as solar, wind, or hydroelectric power produce less
          pollution and can also create new and better jobs. As individuals we can collectively work towards reducing
          the environmental impact of home energy use and help combat climate change.
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify mt-10 mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Each one us can do our bit to plateau the impact. Here&apos;s how each one of us can collectively optimise
          energy usage ...
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
