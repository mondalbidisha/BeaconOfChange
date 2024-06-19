"use client";
import React from "react";
import Meteors from "@/components/magicui/meteors";
import MagicCardsContainer from "./MagicCardsContainer";
import InvolvementCards from "./InvolvementCards";

function Landing() {

  return (
		<>
			<div className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10 scroll-smooth">
				<Meteors number={40}/>
				<div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
					Combat Climate Change - Act Now
				</div>
				<div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
					We make hundreds of thousands of decisions during our lives. The choices we make and the lifestyles we live have a profound impact on our planet. In fact, our lifestyles are responsible for an estimated two thirds of global emissions.
					The wealthiest bear the greatest responsibility: the combined emissions of the richest one percent of the global population are larger than the combined emissions of the poorest 50 percent.
				</div>
				{/* <MagicCardsContainer /> */}
				<p className="flex items-center text-justify mt-10 mb-5 flex-col text-slate-100 gap-2 text-xl px-10">
					What happens when millions of people act together for our common future? A LOT!
				</p>
				<div className="flex items-center text-justify flex-col text-slate-100 gap-2 text-xl px-10">
					Living sustainably also has the potential to improve health and well-being for all.
				</div>
				<div className="flex items-center mt-10 mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
					Here’s where every one of us can make a difference
				</div>
				<InvolvementCards />
			</div>
		</>
  );
}

export default Landing;