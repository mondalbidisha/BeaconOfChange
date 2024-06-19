"use client";
import React from "react";
import Meteors from "../magicui/meteors";
import { FadeIn, FadeInStagger } from "../FadeIn";
import { UniDirectionalBeam } from "../UniDirectionalBeam";
import { motion } from "framer-motion";
import { StatsWithIcon } from "../StatsWithIcon";

export default function WaterFactsLayout() {
  return (
    <main className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10">
        <Meteors number={40}/>
        <FadeIn>
            <div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
                Water
            </div>
        </FadeIn>
        <FadeIn>
            <div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
                Water is a precious resource: Less than 3% of the world’s water is fresh (drinkable), of which 2.5% is frozen in the Antarctica, Arctic and glaciers. And humans are misusing and polluting water faster than nature can recycle and purify water in rivers and lakes.
            </div>
        </FadeIn>
        <FadeInStagger />
        <FadeIn>
            <div className="flex items-center text-center mt-10 flex-col text-slate-100 gap-2 text-lg px-10">
                <UniDirectionalBeam />
            </div>
        </FadeIn>
        
        <FadeIn>
            <div className="flex flex-row mt-20 text-slate-100 gap-4 text-lg px-10">
                <motion.div>
                    <motion.img 
                        alt="water comsumption chart image" 
                        className="w-[90%]"
                        src={"/water-chart.png"} />
                </motion.div>
                <motion.div>
                    <StatsWithIcon />
                </motion.div>
            </div>
        </FadeIn>
    </main>
  );
}