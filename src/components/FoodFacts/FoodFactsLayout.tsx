"use client";
import React, { useEffect, useState } from "react";
import Meteors from "../magicui/meteors";
import { FadeIn, FadeInStagger } from "../FadeIn";
import { geminiGenerate } from "@/utils/gemini-generate";
import { NewsListLayout } from "../ClimateNewsContainer/NewsListLayout";
import { foodSaverPrompt } from "@/constants/promptTemplates";

export default function FoodFactsLayout() {
    const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const parseGeminiResponse = () => {
		const message = `generate 1 sentence relevant saving water to combat climate change. Perform web search to fetch latest and most accurate data.`
		geminiGenerate(message, foodSaverPrompt).then((response) => {
            try {
                let data: any = response?.replaceAll("\n", "");
                data = data?.replaceAll("```json", "");
                setData(JSON.parse(data));
            } catch(err: any) {
                console.log(JSON.stringify(err))
            }
		})
	}

	useEffect(() => {
		if (data.length == 10) {
			setIsLoading(false)
		} else {
			parseGeminiResponse()
		}
	}, [data.length])
    
  return (
    <main className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10">
        <Meteors number={40}/>
        <FadeIn>
            <div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
                Food
            </div>
        </FadeIn>
        <FadeIn>
            <div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
                Three billion people cannot afford a healthy diet. Two billion are overweight or obese. Food systems generate one-third of all greenhouse gas emissions and are responsible for up to 80% of biodiversity loss.
            </div>
        </FadeIn>
        <FadeInStagger />
        <FadeIn>
            <div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
                Every year almost 1.3 Billion Tonnes of food is lost or wasted that is 1/3 of all food produced for human comsumption.
                You can contribute to a food-secure future. Your choices will not only prevent food and resource wastage, but also help combat world hunger problems.
            </div>
        </FadeIn>
        <FadeInStagger />
        <FadeIn>
            <div className="flex items-center flex-col h-[70vh]">
                {isLoading ? <></> : <NewsListLayout data={data}/>}
            </div>
        </FadeIn>
    </main>
  );
}