import React from "react";
import { BentoGridLayout } from "./BentoGridLayout";
import { FadeIn, FadeInStagger } from "../FadeIn";
import Meteors from "@/components/magicui/meteors";

function ParentLayout() {

  return (
		<>
			<div className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10 scroll-smooth">
				<Meteors number={40}/>
				<FadeIn>
					<div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
							Climate Change Facts
					</div>
				</FadeIn>
				<FadeInStagger />
				<FadeIn>
					<BentoGridLayout />
				</FadeIn>
			</div>
		</>
  );
}

export default ParentLayout;