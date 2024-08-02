'use client';
import Meteors from '../magicui/meteors';
import { FadeIn } from '../FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { BentoGrid, BentoCard } from '../magicui/bento-grid';
import { motion } from 'framer-motion';
import { Fact } from '@/constants/types';

export default function WasteFactsLayout() {
  const wasteFacts: Fact[] = [
    {
      name: 'Global Waste and Recycling',
      description:
        'Every year, an estimated 11.2 billion tonnes of solid waste is collected worldwide, contributing about 5% of global greenhouse gas emissions from organic waste decay. Recycling one tonne of paper saves 17 trees and 50% of water, highlighting the resource savings from recycling.',
      className: 'col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="global waste and recycling image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/global-waste-recycle.jpg'}
        />
      ),
    },
    {
      name: 'Employment and Recycling',
      description:
        'The recycling sector employs 12 million people in Brazil, China, and the United States alone. However, only 9% of all plastic waste ever produced has been recycled, with 12% incinerated and 79% accumulating in landfills, dumps, or the natural environment.',
      className: 'col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="employment and recycling image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/recycle-waste.jpg'}
        />
      ),
    },
    {
      name: 'Plastic Waste Reduction',
      description:
        'Using refillable bottles, reusable bags, and avoiding plastic straws helps reduce plastic waste. Globally, one million plastic drinking bottles are purchased every minute, and up to 5 trillion single-use plastic bags are used annually. Half of all plastic produced is designed for single use and then discarded.',
      className: 'col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="plastic waste reduction image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/plastic-waste-reduction.jpg'}
        />
      ),
    },
    {
      name: 'E-Waste Growth and Recycling',
      description:
        'From 2010 to 2019, global e-waste generation grew from 5.3 to 7.3 kilograms per capita annually. Meanwhile, environmentally sound recycling of e-waste increased at a slower pace, from 0.8 to 1.3 kilograms per capita annually.',
      className: 'col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="e-waste growth and recycling image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/waste.jpeg'}
        />
      ),
    },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10">
      <Meteors number={40} />
      <div className="w-10 h-10 flex items-center justify-center">
        <Link href={'/learn'}>
          <IoChevronBackCircleOutline className="text-4xl text-white cursor-pointer" />
        </Link>
      </div>
      <FadeIn>
        <div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase opacity-90 tracking-[4px]">
          Waste
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Approximately 2.12 billion tonnes of waste are dumped into landfills globally each year, significantly
          impacting soil and groundwater quality. It is estimated that by 2050, there will be more plastic than fish in
          the oceans by weight, leading to severe disruptions in marine ecosystems.
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Some hard hitting statistics that outline the alarming impact waste production has on our ecosystem are stated
          below -
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col items-center px-20">
          <BentoGrid>
            {wasteFacts.map((feature: Fact, idx: number) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </FadeIn>
    </main>
  );
}
