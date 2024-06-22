"use client";
import React, { useEffect, useState } from "react";
import SliderContainer from "@/components/SlidingCarousel/SliderContainer";
import { geminiGenerate } from "@/utils/gemini-generate";
import { sliderData } from "@/constants/sliderData";
import ParentLayout from "@/components/ClimateFactsContainer/ParentLayout";
import { slideDataPrompt } from "@/constants/promptTemplates";
import NewsLayout from "@/components/ClimateNewsContainer/NewsLayout";
import { Loader } from "./Loader";

export default function HomepageLayout() {
    const [isLoading, setIsLoading] = useState(true);
    const [slideData, setSlideData] = useState([]);

    const parseGeminiResponse = () => {
      const titles: string[] = sliderData.map((data: any) => data.title);
        const message = `generate 4 sentences relevant to each ${titles.join(",")}, include one similar incident from around the world. Perform web search to fetch latest and most accurate the data.`
        geminiGenerate(message, slideDataPrompt).then((response) => {
          try {
            let responseData: any = response?.replaceAll("\n", "");
            responseData = responseData?.replaceAll("```json", "");
            modifySliderData(JSON.parse(responseData));
          } catch(err: any) {
            console.log(JSON.stringify(err))
          }
        })
    }

    const modifySliderData = (geminiData: any) => {
      if(geminiData.length > 0) {
        const modifiedSlides:any = geminiData.map((data: any) => {
          let slideObj: any = sliderData.filter((slide: any) => 
            data.title.toLowerCase() === slide.title.toLowerCase());
          if (slideObj.length) {
            slideObj[0].description = data.details;
            return slideObj[0];
          }
        });
        setSlideData(modifiedSlides);
      }  
    }

    useEffect(() => {
      if (slideData.length > 0) {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      } else {
        parseGeminiResponse()
      }
    }, [slideData.length])

  return (
    <div className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
      {isLoading ?
        <Loader 
          message={"Hang tight, unwrapping some sustainable magic..."}
        /> :
        <>
          <SliderContainer />
          <ParentLayout />
          <NewsLayout />
        </> } 
    </div>
  );
}


