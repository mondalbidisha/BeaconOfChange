"use client";
import React from "react";
import {
    MagicCard,
    MagicContainer,
  } from "@/components/magicui/magic-card";

function MagicCardsContainer() {
  return (
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
  );
}

export default MagicCardsContainer;