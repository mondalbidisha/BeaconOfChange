"use client";
import React from "react";
import { FadeIn, FadeInStagger } from "../FadeIn";
import Meteors from "@/components/magicui/meteors";
import {
    MagicCard,
    MagicContainer,
  } from "@/components/magicui/magic-card";

function Landing() {
  return (
		<>
			<div className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10 scroll-smooth">
				<Meteors number={40}/>
				<FadeIn>
					<div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
						Combat Climate Change - Act Now
					</div>
				</FadeIn>
				<FadeInStagger />
				<FadeIn>
					<div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
						We make hundreds of thousands of decisions during our lives. The choices we make and the lifestyles we live have a profound impact on our planet. In fact, our lifestyles are responsible for an estimated two thirds of global emissions.
						The wealthiest bear the greatest responsibility: the combined emissions of the richest one percent of the global population are larger than the combined emissions of the poorest 50 percent.
					</div>
				</FadeIn>
				<FadeInStagger />
				<FadeIn>
					<div className="flex items-center text-justify flex-col text-slate-100 gap-2 px-10">
						<MagicContainer className={"flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"}>
							<MagicCard
								borderWidth={3}
								className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-10 shadow-2xl">
								<p className="z-10 text-md font-medium text-slate-100">
									Demand for natural resources is at an all time high and continues to grow. Resource extraction has more than <span className="underline underline-offset-4">tripled since 1970</span>, including a <span className="underline underline-offset-4">45% increase in fossil fuel consumption.</span>
								</p>
								<div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
							</MagicCard>
							<MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-10 shadow-2xl">
								<p className="z-10 text-md font-medium text-slate-100">
									The extraction and processing of materials, fuels and food contribute to <span className="underline underline-offset-4">half of the total global greenhouse gas emissions</span> and over <span className="underline underline-offset-4">90% of biodiversity loss and water stress.</span>
								</p>
								<div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
							</MagicCard>
							<MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-10 shadow-2xl">
								<p className="z-10 text-md font-medium text-slate-100">
									We are using the equivalent of <span className="underline underline-offset-4">1.6 Earths</span> to maintain our current way of life, and <span className="underline underline-offset-4">ecosystems cannot keep up with our consistently growing demands.</span>
								</p>
								<div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
							</MagicCard>
						</MagicContainer>
					</div>
				</FadeIn>
				<FadeInStagger />
				<FadeIn>
					<p className="flex items-center text-justify mt-10 mb-5 flex-col text-slate-100 gap-2 text-xl px-10">
						What happens when millions of people act together for our common future? A LOT!
					</p>
				</FadeIn>
				<FadeInStagger />
				<FadeIn>
					<div className="flex items-center text-justify flex-col text-slate-100 gap-2 text-xl px-10">
						Living sustainably also has the potential to improve health and well-being for all.
					</div>
				</FadeIn>
			</div>
		</>
  );
}

export default Landing;