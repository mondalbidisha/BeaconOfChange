"use client";
import React from "react";
import {
    MagicCard,
    MagicContainer,
  } from "@/components/magicui/magic-card";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'

function InvolvementCards() {
  const router = useRouter();

  return (
        <>
            <div className="flex items-center text-justify flex-col text-slate-100 gap-2 px-10 mb-10">
                <MagicContainer className={"flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"}>
                    <MagicCard
                        borderWidth={3}
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-10 shadow-2xl hover:outline outline-2 outline-offset-2 outline-slate-100"
                        onClick={() => router.push('/food')}>
                        <motion.img
                            alt="Food Image"
                            src={"/food.jpeg"}
                            className="absolute h-full w-full object-cover brightness-40"
                        />
                        <p className="z-10 text-4xl font-medium text-slate-50">
                            Food
                        </p>
                    </MagicCard>
                    <MagicCard 
                        borderWidth={3}
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-10 shadow-2xl hover:outline outline-2 outline-offset-2 outline-slate-100"
                        onClick={() => router.push('/water')}>
                        <motion.img
                            alt="Water Image"
                            src={"/water.jpeg"}
                            className="absolute h-full w-full object-cover brightness-40"
                        />
                        <p className="z-10 text-4xl font-medium text-slate-50">
                            Water
                        </p>
                    </MagicCard>
                    <MagicCard 
                        borderWidth={3}
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-10 shadow-2xl hover:outline outline-2 outline-offset-2 outline-slate-100">
                        <motion.img
                            alt="Fashion and Clothes Image"
                            src={"/fashion.jpeg"}
                            className="absolute h-full w-full object-cover brightness-40"
                        />
                        <p className="z-10 text-4xl font-medium text-slate-50">
                            Fashion
                        </p>
                    </MagicCard>
                </MagicContainer>
            </div>
            <div className="flex items-center text-justify flex-col text-slate-100 gap-2 px-[15%] mt-10">
                <MagicContainer className={"flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"}>
                    <MagicCard
                        borderWidth={3}
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-10 shadow-2xl hover:outline outline-2 outline-offset-2 outline-slate-100">
                        <motion.img
                            alt="Transport Image"
                            src={"/transport.jpeg"}
                            className="absolute h-full w-full object-cover brightness-40"
                        />
                        <p className="z-10 text-4xl font-medium text-slate-50">
                            Transport
                        </p>
                    </MagicCard>
                    <MagicCard 
                        borderWidth={3}
                        className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-10 shadow-2xl hover:outline outline-2 outline-offset-2 outline-slate-100">
                        <motion.img
                            alt="Waste Image"
                            src={"/waste.jpeg"}
                            className="absolute h-full w-full object-cover brightness-40"
                        />
                        <p className="z-10 text-4xl font-medium text-slate-50">
                            Waste
                        </p>
                    </MagicCard>
                </MagicContainer>
            </div>
        </>
  );
}

export default InvolvementCards;