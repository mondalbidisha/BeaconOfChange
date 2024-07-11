"use client";
import React from "react";
import Meteors from "../magicui/meteors";
import { FadeIn, FadeInStagger } from "../FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Fact } from "@/constants/types";
import { BentoGrid, BentoCard } from "../magicui/bento-grid";

export default function WaterFactsLayout() {
    const waterFacts: Fact[] = [
		{
			name: "Limited Freshwater Resources",
			description: "Less than 3% of the world&apos;s water is freshwater, and much of it is inaccessible due to being frozen in polar regions and glaciers.",
			className: "col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
						alt="humans are responsible for climate change image" 
						className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
						src={"/fresh-water.jpg"} />
			),
		},
		{
			name: "Agricultural Water Use",
			description: "Agriculture accounts for 72% of global water withdrawals annually. Transitioning to a plant-based diet can help conserve water resources by reducing the water-intensive practices associated with livestock farming.",
			className: "col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
						alt="humans are responsible for climate change image" 
						className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
						src={"/irrigation.jpg"} />
			),
		},
		{
			name: "Human Impact on Water",
			description: "Human activities are depleting and polluting freshwater sources faster than they can naturally replenish, posing a threat to ecosystems and human health. The over-extraction of groundwater and contamination from industrial and agricultural runoff further exacerbate these challenges, leading to water scarcity and degraded water quality in many regions globally.",
			className: "col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
						alt="melting icebergs to denote rising temperatures image" 
						className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
						src={"/water-pollution.jpg"} />
			),
		},
		{
			name: "Water Conservation Options",
			description: "Simple actions like taking shorter showers, turning off taps when not in use, and installing water-efficient fixtures can significantly reduce water consumption at home.",
			className: "col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
				alt="threat to life because of climate change temperatures image" 
				className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
				src={"/water-conservation.jpg"} />
			),
		},
	];
  return (
    <main className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10">
        <Meteors number={40}/>
        <div className="w-10 h-10 flex items-center justify-center">
            <Link href={'/learn'}>
                <IoChevronBackCircleOutline className="text-4xl text-white cursor-pointer" />
            </Link>
        </div>
        <FadeIn>
            <div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
                Water
            </div>
        </FadeIn>
        <FadeIn>
            <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
                Since the 1980's, world water use has grown by 1%. World freshwater withdrawals have tripled over the last 50 years.
								Currently over 2 billion people live in areas of high water stress. 
								80% of diseases in developing countries are associated with water causing 3 million early deaths each year. 
            </div>
        </FadeIn>
        <FadeInStagger />
				<FadeIn>
            <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
                Agriculture and industry account for 90% of all water consumption worldwide.
								Excessive water consumption for agriculture and industry can lead to ecosystem degradation, affecting biodiversity, wetlands, and aquatic habitats. 
								Conservation efforts are crucial to preserve these vital ecosystems and their services for future generations.
								By 2050, an extimated 7 billion people will face water stress or scarcity conditions globally.
            </div>
        </FadeIn>
				<FadeInStagger />
				<FadeIn>
					<div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
						Enumerated below are distressing statistics that outline the alarming impact of over consumption and pollution of the limited water resources that we have -
					</div>
				</FadeIn>
				<FadeInStagger />
        <FadeIn>
					<div className="flex flex-col items-center px-20">
						<BentoGrid>
							{waterFacts.map((feature: Fact, idx: number) => (
									<BentoCard key={idx} {...feature} />
							))}
						</BentoGrid>
					</div>
        </FadeIn>
    </main>
  );
}