'use client';
import React, { useEffect, useState } from 'react';
import Meteors from '../magicui/meteors';
import { FadeIn, FadeInStagger } from '../FadeIn';
import { geminiGenerate } from '@/utils/gemini-generate';
import { NewsListLayout } from '../ClimateNewsContainer/NewsListLayout';
import { sustainableFashionPrompt } from '@/constants/promptTemplates';
import Image from 'next/image';

export default function SustainableFashionTips() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const parseGeminiResponse = () => {
    const message = `generate 1-2 sentence relevant sustainable fashion choices to help combat climate change. 
				         Perform web search to fetch latest and most accurate data.`;
    try {
      geminiGenerate(message, sustainableFashionPrompt)
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
          Sustainable Fashion
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify mt-10 mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Given its size and global reach, unsustainable practices within the fashion sector have important impacts on
          environmental development indicators. Without a major change to consumption patterns in fashion, the social
          and environmental costs of this sector will continue to mount and wreck havoc on our ecosystem and natural
          resources.
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify mt-10 mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          By choosing sustainable fashion options, such as buying fewer clothes, shopping second-hand, and supporting
          brands that use eco-friendly materials and practices, we can significantly reduce the carbon footprint
          associated with clothing production and disposal.
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex items-center text-justify mt-10 mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          We as individuals can each do our bit to plateau the impact. Here&apos;s how each one of us can make
          sustainable fashion choices ...
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
