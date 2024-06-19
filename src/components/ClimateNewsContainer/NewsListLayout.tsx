"use client";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { BorderBeam } from "../magicui/border-beam";

interface Item {
  title?: string;
  details: string;
	source?: string;
}

const Notification = ({ title, details, source }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full min-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4 hover:outline outline-2 outline-offset-2 outline-slate-100",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white">
            <span className="text-md font-semibold sm:text-lg mb-5">{title}</span>
          </figcaption>
          <p className="text-base font-normal text-white/60 mb-5">
            {details}
          </p>
          {source ? <p className="text-sm font-normal text-white/60">
						Source - <span className="font-bold">{source}</span>
					</p> : <></>}
        </div>
      </div>
      <BorderBeam duration={12} delay={9} />
    </figure>
  );
};

export function NewsListLayout(data: any) {

	let sourceData = Array.isArray(data) && data.length > 0 ? data : data.data;

  return (
    <div className="relative flex h-full w-full max-w-[90%] flex-col overflow-hidden rounded-lg border bg-background p-10 shadow-lg">
      <AnimatedList>
        {sourceData.map((item: Item, idx: any) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
