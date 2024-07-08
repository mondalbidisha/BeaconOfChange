"use client"
import React, { useEffect, useState } from "react";
import Meteors from "@/components/magicui/meteors";
import { InfoBox } from "../InfoBox";
import { geminiGenerate } from "@/utils/gemini-generate";
import { campaignsPrompt } from "@/constants/promptTemplates";
import { Item } from "@/constants/types";
import Image from "next/image";

function CampaignLayout(location: any) {
  	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const parseGeminiResponse = () => {
		const message = `give me climate change campaigns based on ${JSON.stringify(location)} location. Perform web search to fetch latest and most accurate data.`
		try {
			geminiGenerate(message, campaignsPrompt).then((response: any) => {
				const jsonString = response.replace('```json\n', '').replace('\n```', '');
				setData(JSON.parse(jsonString));
			}).catch((error: any) => {
				console.log(JSON.stringify(error))
			})
		} catch(error: any) {
			console.log(JSON.stringify(error))
		}
	}

	useEffect(() => {
		if (data.length && location) {
			setIsLoading(false)
		} else {
			parseGeminiResponse()
		}
	}, [data.length, location])

  return (
		<>
			<div className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10 scroll-smooth">
				<Meteors number={40}/>
				<div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase tracking-[4px] mt-20">
					Be a Beacon of Change
				</div>
				<div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
					Participating in climate change campaigns is a powerful way to make a tangible difference in the fight against global warming. It raises awareness and drives collective action, which can lead to significant policy changes and widespread adoption of sustainable practices. 
				</div>
				<div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
					The benefits are profound -- we not only gain a deep sense of purpose but also get to connect with a community of like-minded advocates, and actively contribute to safeguarding the planet for future generations. 
					Moreover, such involvement can foster personal growth, equipping us with valuable skills in advocacy, leadership, and community organizing, all while making a positive impact on the world.
				</div>
				<div className="flex items-center text-center mb-10 flex-col text-slate-100 font-bold gap-2 text-2xl px-10">
					Be a Beacon of Change and inspire others to follow your lead !!
				</div>
				<div className="px-20">
					{isLoading ? 
						<div className="w-full flex flex-row justify-center mt-5">
							<Image src={"/loader.svg"} width={150} height={150} alt="Loading..." />
						</div> 
					 :
						data.map((item: Item, idx: any) => (
							/* eslint-disable react/jsx-key */
							<div className="my-5">
								<InfoBox {...item} key={idx} />
							</div>
						))
					}
				</div>
			</div>
		</>
  );
}

export default CampaignLayout;