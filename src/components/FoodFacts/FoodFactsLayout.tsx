"use client";
import React, { useEffect, useState } from "react";
import Meteors from "../magicui/meteors";
import { FadeIn, FadeInStagger } from "../FadeIn";
import { NewsListLayout } from "../ClimateNewsContainer/NewsListLayout";
import Image from "next/image";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";
import { Fact } from "@/constants/types";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";

export default function FoodFactsLayout() {

    const foodFacts: Fact[] = [
		{
			name: "Global Food System Impact",
			description: "Food systems generate one-third of all greenhouse gas emissions and are responsible for up to 80% of biodiversity loss. Three billion people cannot afford a healthy diet, while two billion are overweight or obese.",
			className: "col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
						alt="humans are responsible for climate change image" 
						className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
						src={"/food-waste.jpg"} />
			),
		},
		{
			name: "Food Waste",
			description: "17% of all food available at consumer levels is wasted. This waste squanders resources like land, water, energy, and other inputs, leading to unnecessary greenhouse gas emissions. Reducing food waste can save money, cut emissions, and preserve resources for future generations.",
			className: "col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
						alt="humans are responsible for climate change image" 
						className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
						src={"/plant-based-food.jpg"} />
			),
		},
		{
			name: "Benefits of Plant-Based Diets",
			description: "Shifting to a diet higher in plant-based foods (vegetables, fruits, whole grains, legumes, nuts, and seeds) and lower in animal-based foods can significantly reduce environmental impacts, including greenhouse gas emissions and energy, land, and water use.",
			className: "col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
						alt="melting icebergs to denote rising temperatures image" 
						className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
						src={"/veg-food.jpg"} />
			),
		},
		{
			name: "Environmental Impact of Meat and Dairy",
			description: "Meat and dairy provide only 18% of consumed calories but use 83% of global farmland and contribute 60% of agriculture’s greenhouse gas emissions.",
			className: "col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
				alt="threat to life because of climate change temperatures image" 
				className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
				src={"/meat-and-dairy.jpg"} />
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
                Food
            </div>
        </FadeIn>
        <FadeIn>
            <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
							The agriculture, meat, and dairy industries are major consumers of global resources and significant contributors to climate change. 
							Agriculture alone generates one-third of all greenhouse gas emissions, with the meat and dairy sectors being particularly impactful.
            </div>
        </FadeIn>
        <FadeInStagger />
        <FadeIn>
            <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
							Additionally, these industries are responsible for extensive water and energy consumption, further straining the planet's resources. 
							The environmental cost is compounded by the loss of biodiversity, as vast tracts of land are cleared for grazing and feed crops, leading to habitat destruction and ecosystem imbalances.
            </div>
        </FadeIn>
        <FadeInStagger />
				<FadeIn>
					<div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
						Some alarming statistics that emphasize the alarming rate at which resources are being consumed by the food industry the effect it has on our ecosystem are discussed here as follows -
					</div>
				</FadeIn>
				<FadeInStagger />
        <FadeIn>
						<div className="flex flex-col items-center px-20">
							<BentoGrid>
								{foodFacts.map((feature: Fact, idx: number) => (
										<BentoCard key={idx} {...feature} />
								))}
							</BentoGrid>
						</div>
        </FadeIn>
    </main>
  );
}