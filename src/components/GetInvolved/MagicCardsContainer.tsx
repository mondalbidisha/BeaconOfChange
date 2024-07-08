"use client";
import React from "react";
import {
    MagicCard,
    MagicContainer,
  } from "@/components/magicui/magic-card";
import parse from 'html-react-parser'

function MagicCardsContainer(data: any) {
  let cardsData = Array.isArray(data) && data.length > 0 ? data : data.data;

  return (
        <div className="flex items-center text-justify flex-col text-slate-100 gap-2 px-10">
            <MagicContainer className={"flex w-full flex-col gap-4 h-[200px] lg:flex-row"}>
                {cardsData.map((value: any, idx: any) => (
                    <MagicCard
                        key={idx}
                        borderwidth={3}
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-10 shadow-2xl">
                        <p className="z-10 text-md font-medium text-slate-100">
                            {parse(value)}
                        </p>
                        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                    </MagicCard>))}
            </MagicContainer>
        </div>
  );
}

export default MagicCardsContainer;