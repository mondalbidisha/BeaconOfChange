"use client";
import React, { useEffect, useState } from "react";
import Meteors from "../magicui/meteors";
import { FadeIn, FadeInStagger } from "../FadeIn";
import { geminiGenerate } from "@/utils/gemini-generate";
import { NewsListLayout } from "../ClimateNewsContainer/NewsListLayout";
import { transportFactsPrompt } from "@/constants/promptTemplates";
import Image from "next/image";

export default function TransportTips() {

    const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const parseGeminiResponse = () => {
		const message = `generate 1-2 sentence relevant to sustainable transportation choice that will help combat climate change. Perform web search to fetch latest and most accurate data.`
		geminiGenerate(message, transportFactsPrompt).then((response: any) => {
            try {
                let responseData: any = response?.replaceAll("\n", "");
                responseData = responseData?.replaceAll("```json", "");
                setData(JSON.parse(responseData));
            } catch(err: any) {
                console.log(JSON.stringify(err))
            }
		})
	}

	useEffect(() => {
		if (data.length > 0) {
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
                Efficient Transportation
            </div>
        </FadeIn>
		<FadeInStagger />
		<FadeIn>
			<div className="flex items-center text-justify my-10 flex-col text-slate-100 gap-2 text-lg px-20">
                Implementing fuel-efficient technologies in vehicles and aircraft can significantly reduce emissions. 
                For example, improving vehicle fuel efficiency by just 10% globally could prevent millions of tons of CO2 from entering the atmosphere annually.
			</div>
		</FadeIn>
		<FadeInStagger />
        <FadeIn>
            <div className="flex items-center text-justify my-10 flex-col text-slate-100 gap-2 text-lg px-20">
            Transitioning to alternative fuels like biofuels, hydrogen, or electric power for vehicles and aircraft can further reduce carbon emissions. 
            These alternatives offer promising pathways to decarbonize transport and mitigate its impact on climate change.
            </div>
        </FadeIn>
		<FadeInStagger />
        <FadeIn>
            <div className="flex items-center text-justify mt-10 mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
                We as individuals can each do our bit to plateau the impact. Here&apos;s how each one of us can reduce waste ...
            </div>
        </FadeIn>
        <FadeInStagger />
        <FadeIn>
            <div className="flex items-center flex-col h-[70vh]">
                {isLoading ? 
                        <div className="w-full flex flex-row justify-center mt-5">
                                <Image src={"/loader.svg"} width={150} height={150} alt="Loading..." />
                        </div>
                    : 
                        <NewsListLayout data={data}/>
                }
            </div>
        </FadeIn>
    </main>
  );
}