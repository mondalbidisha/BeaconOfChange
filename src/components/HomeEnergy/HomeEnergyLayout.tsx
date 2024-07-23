'use client';
import React from 'react';
import Meteors from '../magicui/meteors';
import { FadeIn, FadeInStagger } from '../FadeIn';
import Link from 'next/link';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Fact } from '@/constants/types';
import { BentoGrid, BentoCard } from '../magicui/bento-grid';

export default function HomeEnergyLayout() {
  const homeEnergyFacts: Fact[] = [
    {
      name: 'Major Emissions Source',
      description:
        'The energy supply sector (electricity, heat, and other energy) is the largest contributor to global greenhouse gas emissions, responsible for approximately 35% of total emissions. Globally, residential and commercial buildings consume over half of all electricity.',
      className: 'col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="humans are responsible for climate change image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/power-plant.jpg'}
        />
      ),
    },
    {
      name: 'Transitioning Home Heating',
      description:
        'Phasing out fossil fuels for home heating is crucial. For instance, banning new gas-fired boilers and introducing electric heat pumps can significantly reduce emissions. Increasing the thermostat setting from 24°C to 28°C during the cooling season can reduce annual cooling energy use by more than a factor of three for a typical office building in Zurich, Switzerland.',
      className: 'col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="humans are responsible for climate change image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/thermal-plant.jpg'}
        />
      ),
    },
    {
      name: 'Growing Cooling Demand',
      description:
        'Energy demand for cooling is the fastest growing end-use in buildings, with ten air conditioners expected to be sold every second over the next 30 years. Emissions from air conditioning and refrigeration are expected to rise 90% from 2017 levels by 2050.',
      className: 'col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="melting icebergs to denote rising temperatures image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/air-conditioner.jpg'}
        />
      ),
    },
    {
      name: 'Benefits of Renewable Energy',
      description:
        'Switching to renewable energy sources, such as solar, wind, or hydroelectric power, means less pollution and the creation of new and better jobs. Currently, around 80% of global energy and 66% of electrical generation are supplied from fossil fuels.',
      className: 'col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="threat to life because of climate change temperatures image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/windmill-energy.jpg'}
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
          Home Energy
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Home energy use significantly impacts climate change due to the large amount of energy consumed in residential
          settings for heating, cooling, lighting, and appliances. As homes rely heavily on electricity and other energy
          sources, often derived from fossil fuels, the carbon footprint of household energy use contributes notably to
          greenhouse gas emissions.
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Heating and cooling are significant components of home energy use and have a substantial impact on emissions.
          Oqing to global warming the demand for cooling is the fastest-growing end-use in residential buildings. Over
          the next 30 years, it is expected that ten air conditioners will be sold every second, leading to a
          significant rise in emissions.
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Some hard hitting statistics that outline the alarming rate at which energy is being consumed and the effect
          it has on our ecosystem are discussed here as follows -
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex flex-col items-center px-20">
          <BentoGrid>
            {homeEnergyFacts.map((feature: Fact, idx: number) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </FadeIn>
    </main>
  );
}
