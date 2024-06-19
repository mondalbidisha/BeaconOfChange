"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
import { motion } from "framer-motion";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>
(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex justify-center border-2 rounded-xl shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function UniDirectionalBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[750px] items-center justify-center overflow-hidden rounded-lg"
      ref={containerRef}>
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <Circle ref={div1Ref}>
						<div
							className={cn(
							"group relative flex flex-col justify-between overflow-hidden rounded-xl",
							// light styles
							"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
							// dark styles
							"transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
							)}>
							<motion.img 
								alt="water pump image" 
								className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
								src={"/water-pump.jpeg"} />
							<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300">
									<h3 className="text-2xl mb-5 font-semibold text-neutral-700 dark:text-neutral-300">
											1980
									</h3>
									<p className="max-w-[150px] text-wrap text-base text-neutral-100">Since the 1980's world water usage has grown by 1% every year</p>
							</div>
						</div>
          </Circle>
          <Circle ref={div2Ref}>
						<div
							className={cn(
							"group relative flex flex-col justify-between overflow-hidden rounded-xl",
							// light styles
							"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
							// dark styles
							"transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
							)}>
							<motion.img 
								alt="water tap image" 
								className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
								src={"/water-tap.jpeg"} />
							<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300">
									<h3 className="text-2xl mb-5 font-semibold text-neutral-700 dark:text-neutral-300">
											NOW
									</h3>
									<p className="max-w-[150px] text-wrap text-base text-neutral-100">World freshwater withdrawals have tripled over the last 50 years</p>
							</div>
						</div>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        pathWidth={12}
        duration={3}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
    </div>
  );
}
