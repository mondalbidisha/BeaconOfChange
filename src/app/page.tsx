"use client";

// import MapIframe from "@/components/MapIframe";
// import { FadeIn } from "@/components/FadeIn";
// import GridPattern from "@/components/GridPattern";
// import Header from "@/components/Header";
// import React, { useState, useEffect, useRef } from "react";
// import WAVES from "vanta/dist/vanta.waves.min";
// import * as THREE from "three";
import React, { useEffect, useState } from "react";
import SliderContainer from "@/components/SlidingCarousel/SliderContainer";
import { geminiGenerate } from "@/utils/gemini-generate";
import { sliderData } from "@/constants/sliderData";
import RiseLoader from "react-spinners/RiseLoader";
import { Data } from "@/constants/types";
import ParentLayout from "@/components/ClimateFactsContainer/ParentLayout";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    let slideData: any = []

    const parseGeminiResponse = () => {
      slideData = sliderData.map((element: Data) => {
        const message = `generate 3-4 sentences relevant to ${element.title}, include one similar incident from around the world. Perform web search to fetch latest and most accurate the data.`
        geminiGenerate(message).then((response) => {
          element.description = response
        })
      });
    }

    useEffect(() => {
      parseGeminiResponse()
      if (slideData.length > 0) {
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      }
    }, [])
    
  // const [vantaEffect, setVantaEffect] = useState(0);
  // const vantaRef = useRef(null);

  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       WAVES({
  //         el: vantaRef.current,
  //         THREE: THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 500,
  //         minWidth: 500,
  //         scale: 1.00,
  //         scaleMobile: 1.00
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy();
  //   };
  // }, [vantaEffect]);

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
        </> } 
    </main>
  );
}


