"use client"
import React, { useEffect, useState } from "react";
import Meteors from "@/components/magicui/meteors";
import { InfoBox } from "../InfoBox";
import { geminiGenerate } from "@/utils/gemini-generate";
import { sustainableShoppingPrompt } from "@/constants/promptTemplates";
import { Item } from "@/constants/types";
import Image from "next/image";

function ShopSustainableLayout(location: any) {
    const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const parseGeminiResponse = () => {
		const message = `give me sustainable B2C businesses based on ${JSON.stringify(location)} location. Perform web search to fetch latest and most accurate data.`
		geminiGenerate(message, sustainableShoppingPrompt).then((response: any) => {
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
		if (data.length && Object.values(location).length) {
			setIsLoading(false)
		} else {
			parseGeminiResponse()
		}
	}, [data.length, location])

  return (
		<>
			<div className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10 scroll-smooth">
				<Meteors number={40}/>
				<div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase tracking-[4px]">
					Shop Sustainably
				</div>
				<div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
					Shopping sustainably can be a powerful tool to combat climate change. Sustainable businesses often reduce their carbon footprint through renewable energy, recycled materials, and efficient transport.
					This translates to fewer greenhouse gasses being released.
				</div>
				<div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
					As a customer, there are profound benefits to choosing sustainable businesses.  
					Shopping sustainably offers a sense of well-being and personal satisfcation about aligning your values with your purchases. 
					Sustainable practices can often lead to higher quality, more durable products. 
					Many sustainable businesses are transparent about their practices, fostering trust and allowing you to make informed choices.
					Next time you think about buying something, however big or small consider purchasing from sustainable businesses !! 
				</div>
				<div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
					Next time you think about buying something, however big or small consider purchasing from sustainable businesses !! 
				</div>
				<div className="flex items-center text-center mb-10 flex-col text-slate-100 font-bold gap-2 text-2xl px-10">
					Even small shifts in your shopping habits can contribute to a positive environmental impact. 
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

export default ShopSustainableLayout;