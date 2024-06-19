"use client";
import React, { useEffect, useState } from "react";
import Meteors from "../magicui/meteors";
import { FadeIn, FadeInStagger } from "../FadeIn";
import { NewsListLayout } from "../ClimateNewsContainer/NewsListLayout";
import { geminiGenerate } from "@/utils/gemini-generate";
import { transportFactsPrompt } from "@/constants/promptTemplates";
import MagicCardsContainer from "../GetInvolved/MagicCardsContainer";
import { wasteFacts } from "@/constants/Data";

export default function WasteFactsLayout() {
    // const [data, setData] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);

	// const parseGeminiResponse = () => {
	// 	const message = `generate 1 sentence relevant to sustainable transportation choice that will help combat climate change. Perform web search to fetch latest and most accurate data.`
	// 	geminiGenerate(message, transportFactsPrompt).then((response: any) => {
    //         try {
    //             let responseData: any = response?.replaceAll("\n", "");
    //             responseData = responseData?.replaceAll("```json", "");
    //             setData(JSON.parse(responseData));
    //         } catch(err: any) {
    //             console.log(JSON.stringify(err))
    //         }
	// 	})
	// }

	// useEffect(() => {
	// 	if (data.length == 10) {
	// 		setIsLoading(false)
	// 	} else {
	// 		parseGeminiResponse()
	// 	}
	// }, [data.length])
    
  return (
    <main className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10">
        <Meteors number={40}/>
        <FadeIn>
            <div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
                Waste
            </div>
        </FadeIn>
        <FadeIn>
            <div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
                Every year, an estimated 11.2 billion tonnes of solid waste is collected worldwide, and decay of the organic proportion of solid waste is contributing about 5% of global greenhouse gas emissions.
            </div>
        </FadeIn>
        <FadeIn>
            <div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
                Where waste cannot be avoided, recycling leads to substantial resource savings. For every tonne of paper recycled, 17 trees and 50% of water can be saved.
                Recycling also creates jobs: the recycling sector employs 12 million people in Brazil, China and United States alone.
            </div>
        </FadeIn>
        <FadeInStagger />
        <FadeIn>
            <MagicCardsContainer data={wasteFacts}/> 
        </FadeIn>
        {/* <FadeInStagger />
        <FadeIn>
            <div className="flex items-center flex-col h-[70vh]">
                {isLoading ? <></> : <NewsListLayout data={data}/>}
            </div>
        </FadeIn> */}
    </main>
  );
}