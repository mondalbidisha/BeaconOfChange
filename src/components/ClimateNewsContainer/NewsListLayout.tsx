"use client";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Item } from "@/constants/types";
import { InfoBox } from "../InfoBox";

export function NewsListLayout(data: any) {
	let sourceData = Array.isArray(data) && data.length > 0 ? data : data.data;

  return (
    <div className="relative flex h-full w-full max-w-[90%] flex-col overflow-hidden rounded-lg border bg-background p-10 shadow-lg">
      <AnimatedList>
        {sourceData.map((item: Item, idx: any) => (
          <InfoBox {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
