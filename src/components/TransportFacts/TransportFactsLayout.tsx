"use client";
import React, { useEffect, useState } from "react";
import Meteors from "../magicui/meteors";
import { FadeIn, FadeInStagger } from "../FadeIn";
import { NewsListLayout } from "../ClimateNewsContainer/NewsListLayout";
import { geminiGenerate } from "@/utils/gemini-generate";
import { transportFactsPrompt } from "@/constants/promptTemplates";

export default function TransportFactsLayout() {
    const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const parseGeminiResponse = () => {
		const message = `generate 1 sentence relevant to sustainable transportation choice that will help combat climate change. Perform web search to fetch latest and most accurate data.`
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
                Transport
            </div>
        </FadeIn>
        <FadeIn>
            <div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
            In most high-income countries, personal transport is the lifestyle domain with the largest contribution to the overall lifestyle footprint.
            The world’s roadways are clogged with vehicles, most of them burning fossil fuels like petrol, diesel, gasoline etc. Fossil fuels power the ships that carry trade and the airplanes that allow us to travel.
            </div>
        </FadeIn>
        <FadeInStagger />
        {/* <FadeIn>
            <div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
                In the last 15 years, clothing production has doubled while the number of times a garment is worn before being discarded has decreased by 36%.
            </div>
        </FadeIn>
        <FadeIn>
            <MagicCardsContainer data={fashionFacts}/> 
        </FadeIn>
        <FadeInStagger />
        <FadeIn>
            <div className="flex items-center text-center mt-10 mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
                Given its size and global reach, unsustainable practices within the fashion sector have important impacts on environmental development indicators.
            </div>
        </FadeIn>
        <div className="flex items-center text-center mt-10 mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
            Without a major change to consumption patterns in fashion, the social and environmental costs of the sector will continue to mount. We as individuals can each do our bit to plateau the impact.
        </div> */}
        <FadeIn>
            <div className="flex items-center flex-col h-[70vh]">
                {isLoading ? <></> : <NewsListLayout data={data}/>}
            </div>
        </FadeIn>
    </main>
  );
}