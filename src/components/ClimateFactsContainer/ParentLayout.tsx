import React from "react";
import { BentoGridLayout } from "./BentoGridLayout";
import { FadeIn, FadeInStagger } from "../FadeIn";
import Meteors from "@/components/magicui/meteors";
import GradualSpacing from "@/components/magicui/gradual-spacing";

function ParentLayout() {

  return (
		<>
			<div className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10 scroll-smooth">
				<Meteors number={40}/>
				<FadeIn>
					<div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase tracking-[4px]">
						Climate Change - Myth Busters
					</div>
				</FadeIn>
				<FadeIn>
					<div className="flex items-center text-center mb-10 flex-col text-slate-100 gap-2 text-lg px-10">
						Climate change is a pressing issue, often clouded by myths and misinformation. Discover essential facts here to share, discuss, and combat falsehoods, while fostering support for urgent climate action.
					</div>
				</FadeIn>
				<FadeInStagger />
				<FadeIn>
					<div className="mt-10">
						<BentoGridLayout />
					</div>
				</FadeIn>
			</div>
		</>
  );
}

export default ParentLayout;