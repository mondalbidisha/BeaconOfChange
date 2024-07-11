"use client";
import React, { useEffect, useState } from "react";
import { FadeIn, FadeInStagger } from "../FadeIn";
import Meteors from "@/components/magicui/meteors";
import { NewsListLayout } from "./NewsListLayout";
import { newsDataPrompt } from "@/constants/promptTemplates";
import { geminiGenerate } from "@/utils/gemini-generate";
import ShimmerButton from "../magicui/shimmer-button";
import Link from "next/link";
import { Loader } from "../Loader";
import generateLoadingMessage from "@/utils/genericUtils";

function NewsLayout() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const parseGeminiResponse = () => {
		const message = `generate 3-4 sentences relevant to climate change news affecting the world. Perform web search to fetch latest and most accurate data. Include citations for all sources.`;
		try {
			geminiGenerate(message, newsDataPrompt).then((response: any) => {
				const jsonString = response.replace('```json\n', '').replace('\n```', '');
				setData(JSON.parse(jsonString));
			}).catch((error: any) => {
				console.log(JSON.stringify(error));
			})
		} catch(error: any) {
			console.log(JSON.stringify(error));
		}
	}

	useEffect(() => {
		if (data.length > 0) {
			setIsLoading(false)
		} else {
			parseGeminiResponse()
		}
	}, [data.length])

  return (
		<>
			{
				isLoading 
				? 
					<Loader 
						message={generateLoadingMessage()}
					/> 
				: 
					<div className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10 scroll-smooth">
						<Meteors number={40}/>
						<FadeIn>
							<div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
								Latest Climate Change News - Stay Informed
							</div>
						</FadeIn>
						<FadeIn>
							<div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
								Stay updated on the impact of climate change worldwide and latest developments. Understanding the problem is the first step toward recognizing the need for necessary action for a sustainable future.
							</div>
						</FadeIn>
						<FadeInStagger />
						<FadeIn>
							<div className="flex items-center flex-col h-[70vh]">
								<NewsListLayout data={data}/>
							</div>
						</FadeIn>
						<FadeInStagger />
						<div className="flex items-center text-center mt-10 mb-10 flex-col text-slate-100 gap-2 text-xl px-10">
							Sounds concerning right? IT IS !! Here&apos;s how you can do your bit and get involved. 
						</div>
						<div className="flex items-center text-center mt-10 flex-col text-slate-100 gap-2">
							<Link href="/learn">
								<ShimmerButton 
									className="shadow-3xl">
									<span className="whitespace-pre-wrap gap-2 p-[5px] text-center text-sm font-medium leading-none tracking-[2px] text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
										Learn More
									</span>
								</ShimmerButton>
							</Link>
						</div>
					</div>
			}
		</>
  );
}

export default NewsLayout;