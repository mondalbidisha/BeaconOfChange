"use client";
import React, { useEffect, useState } from "react";
import { FadeIn, FadeInStagger } from "../FadeIn";
import Meteors from "@/components/magicui/meteors";
import { NewsListLayout } from "./NewsListLayout";
import { newsDataPrompt } from "@/constants/promptTemplates";
import { geminiGenerate } from "@/utils/gemini-generate";

function NewsLayout() {
	const [notificationData, setNotificationData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const parseGeminiResponse = () => {
		const message = `generate 3-4 sentences relevant to climate change news affecting the world. Perform web search to fetch latest and most accurate data. Include citations for all sources.`
		geminiGenerate(message, newsDataPrompt).then((response) => {
			let data: any = response?.replaceAll("\n", "");
			data = data?.replaceAll("```json", "");
			setNotificationData(JSON.parse(data));
		})
	}

	useEffect(() => {
		if (notificationData.length == 5) {
			setIsLoading(false)
		} else {
			parseGeminiResponse()
		}
	}, [notificationData.length])

  return (
		<>
			{isLoading ? <></> : <div className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10 scroll-smooth">
				<Meteors number={40}/>
				<FadeIn>
					<div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
						Latest Climate Change News - Stay Informed
					</div>
				</FadeIn>
				<FadeIn>
					<div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
						Stay updated on the impact of climate change worldwide and latest developments. Understanding the problem is the first step toward recognizing the need for necessary action for a sustainable future.
					</div>
				</FadeIn>
				<FadeInStagger />
				<FadeIn>
					<div className="flex items-center flex-col h-[70vh]">
						<NewsListLayout notificationData={notificationData}/>
					</div>
				</FadeIn>
			</div>}
		</>
  );
}

export default NewsLayout;