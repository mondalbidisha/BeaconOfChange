"use client";
import Meteors from "../magicui/meteors";
import { FadeIn, FadeInStagger } from "../FadeIn";
import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Fact } from "@/constants/types";
import { BentoGrid, BentoCard } from "../magicui/bento-grid";

export default function TransportFactsLayout() {

    const transportFacts: Fact[] = [
		{
			name: "Transport Sector's Carbon Impact",
			description: "Personal transport in high-income countries constitutes the largest portion of the lifestyle footprint, primarily due to fossil fuel-powered vehicles contributing significantly to greenhouse gas emissions.",
			className: "col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
						alt="humans are responsible for climate change image" 
						className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
						src={"/transport-sector.jpg"} />
			),
		},
		{
			name: "Global Impact of Fossil Fuels",
			description: "Fossil fuels power a majority of vehicles, ships, and airplanes globally, leading to a doubling of greenhouse gas emissions from the transport sector since 1970, with road vehicles accounting for about 80% of this increase.",
			className: "col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
						alt="humans are responsible for climate change image" 
						className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
						src={"/fossil-fuel-burn.jpg"} />
			),
		},
		{
			name: "Transition to Electric Vehicles",
			description: "Transitioning to electric cars can mitigate emissions, improve air quality, and promote green job growth, particularly when powered by renewable energy sources. Achieving a significant share of battery-electric and plug-in hybrid vehicles on the road could potentially save over 60 billion tons of CO2 by 2050.",
			className: "col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
						alt="melting icebergs to denote rising temperatures image" 
						className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
						src={"/electric-vehicle.jpg"} />
			),
		},
		{
			name: "Alternative Transportation Options",
			description: "Encouraging alternatives such as walking, biking, urban public transit, and trains can reduce air pollution and greenhouse gas emissions, offering sustainable choices for daily commuting and travel.",
			className: "col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100",
			background: (
				<motion.img 
				alt="threat to life because of climate change temperatures image" 
				className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
				src={"/cycling.jpg"} />
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
						Transport
					</div>
        </FadeIn>
        <FadeIn>
					<div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
						Transport is a major contributor to climate change, responsible for around 24% of global CO2 emissions from direct fuel combustion. This includes emissions from cars, trucks, ships, and airplanes.
						Aviation alone accounts for about 2-3% of global CO2 emissions. The growth in air travel contributes significantly to this figure, with each passenger's flight releasing considerable CO2 into the atmosphere.
					</div>
        </FadeIn>
        <FadeInStagger />
				<FadeIn>
					<div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
						Some distressing statistics that outline the alarming impact transport industry has on our ecosystem are stated below -
					</div>
				</FadeIn>
        <FadeIn>
					<div className="flex flex-col items-center px-20">
						<BentoGrid>
							{transportFacts.map((feature: Fact, idx: number) => (
									<BentoCard key={idx} {...feature} />
							))}
						</BentoGrid>
					</div>
        </FadeIn>
    </main>
  );
}