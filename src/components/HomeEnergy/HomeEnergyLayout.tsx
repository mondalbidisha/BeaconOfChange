"use client";
import React from "react";
import Meteors from "../magicui/meteors";
import { FadeIn, FadeInStagger } from "../FadeIn";
import MagicCardsContainer from "../GetInvolved/MagicCardsContainer";
import { homeEnergyFacts } from "@/constants/Data";

export default function HomeEnergyLayout() {
  return (
    <main className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10">
        <Meteors number={40}/>
        <FadeIn>
            <div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
                Home Energy
            </div>
        </FadeIn>
        <FadeIn>
            <div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
                Electricity drives our lifestyles. Although some 750 million people in the world still lack access to electricity, for the rest, everything from a computer to a television to a refrigerator needs energy. 
            </div>
        </FadeIn>
        <FadeInStagger />
        <FadeIn>
            <div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
                The energy supply sector (electricity, heat, and other energy) is the largest contributor to global greenhouse gas emissions, responsible for approx. 35% of total emissions.
                Globally, residential and commercial buildings, consume over half of all electricity. 
            </div>
        </FadeIn>
        <FadeInStagger />
        <FadeIn>
            <MagicCardsContainer data={homeEnergyFacts}/> 
        </FadeIn>
        <FadeInStagger />
        <FadeIn>
            <div className="flex items-center text-center mt-10 mb-5 flex-col text-slate-100 gap-2 text-lg px-10">
                Globally, residential and commercial buildings, consume over half of all electricity.
            </div> 
        </FadeIn>
            <div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
                Switching to renewable energy sources, such as solar, wind or hydroelectric power, also means less pollution and new and better jobs. 
                Currently, around 80% of global energy and 66% of electrical generation are supplied from fossil fuels.
            </div>
    </main>
  );
}