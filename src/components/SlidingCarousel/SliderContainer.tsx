"use client";
import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "./BackgroundImage";
import Slides from "./Slides";
import SlideInfo from "./SlideInfo";
import Controls from "./Controls";
import { CurrentSlideData, Data } from "@/constants/types";
import { sliderData } from "@/constants/sliderData";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export default function SliderContainer() {
  const slidesInfo = sliderData.slice(1)
  const [data, setData] = React.useState<Data[]>(slidesInfo);
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  
  const initData = sliderData[0];

  const [currentSlideData, setCurrentSlideData] = React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <div
      className={`
      ${inter.className}
       relative min-h-screen select-none overflow-hidden text-white antialiased`}> 
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          <Header />
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
          <div className="t-10 scroll-down">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}


