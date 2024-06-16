"use client";
import React, { useEffect, useState } from "react";
import SliderContainer from "@/components/SlidingCarousel/SliderContainer";
import { geminiGenerate } from "@/utils/gemini-generate";
import { sliderData } from "@/constants/sliderData";
import RiseLoader from "react-spinners/RiseLoader";
import { Data } from "@/constants/types";
import ParentLayout from "@/components/ClimateFactsContainer/ParentLayout";
import { slideDataPrompt } from "@/constants/promptTemplates";
import NewsLayout from "@/components/ClimateNewsContainer/NewsLayout";

export default function HomepageLayout() {
    const [isLoading, setIsLoading] = useState(true);
    let slideData: any = []

    const parseGeminiResponse = () => {
      slideData = sliderData.map((element: Data) => {
        const message = `generate 3-4 sentences relevant to ${element.title}, include one similar incident from around the world. Perform web search to fetch latest and most accurate the data.`
        geminiGenerate(message, slideDataPrompt).then((response) => {
          element.description = response
        })
      });
    }

    useEffect(() => {
      if (slideData.length == 5) {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      } else {
        parseGeminiResponse()
      }
    }, [])

  const override: any = {
    display: "block",
    margin: "0 auto",
    position: "fixed",
    top: "40vh",
    left: "32vw",
  };

  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
      {isLoading ?
        <RiseLoader
          color={"#36d7b7"}
          loading={isLoading}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> :
        <>
          <SliderContainer />
          <ParentLayout />
          <NewsLayout />
        </> } 
    </main>
  );
}


