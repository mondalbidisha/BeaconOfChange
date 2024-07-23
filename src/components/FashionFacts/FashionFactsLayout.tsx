'use client';
import Meteors from '../magicui/meteors';
import { FadeIn, FadeInStagger } from '../FadeIn';
import Link from 'next/link';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { BentoGrid, BentoCard } from '../magicui/bento-grid';
import { motion } from 'framer-motion';
import { Fact } from '@/constants/types';

export default function FashionFactsLayout() {
  const fashionFacts: Fact[] = [
    {
      name: 'Textile Waste',
      description:
        '85% of textiles end up in landfills or are incinerated, despite the potential for reuse. Every second, the equivalent of one garbage truck full of textiles is landfilled or burned.',
      className: 'col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="humans are responsible for climate change image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/landfill.jpg'}
        />
      ),
    },
    {
      name: 'Fashion and Waste Reduction',
      description:
        'Buying fewer clothes, shopping second-hand, or upcycling old clothes into new ones helps save water and reduce waste. Clothing production has doubled in the last 15 years, but garments are worn 36% less before being discarded.',
      className: 'col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="humans are responsible for climate change image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/thrifting.jpg'}
        />
      ),
    },
    {
      name: 'Environmental Impact of Fashion',
      description:
        'he fashion industry, including clothing and footwear, produces over 8% of global greenhouse gases and 20% of global wastewater annually. Making a single pair of jeans requires about 7,500 liters of water.',
      className: 'col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="melting icebergs to denote rising temperatures image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/fashion-impact.jpg'}
        />
      ),
    },
    {
      name: 'Water Consumption',
      description:
        'The fashion industry uses approximately 93 billion cubic meters of water annually, enough to meet the consumption needs of five million people.',
      className: 'col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100',
      background: (
        <motion.img
          alt="threat to life because of climate change temperatures image"
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={'/water-waste.jpg'}
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
          Fashion
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Being stylish does not mean being wasteful. Buying fewer clothes, shopping second-hand, or upcycling, i.e.
          creating new clothes out of old ones, helps save water and reduce waste. The fashion industry is responsible
          for more carbon emissions than international flights and maritime shipping combined.
        </div>
      </FadeIn>
      <FadeInStagger />
      <FadeIn>
        <div className="flex items-center text-justify mb-10 flex-col text-slate-100 gap-2 text-lg px-20">
          Fast fashion has led to an estimated 60% increase in the number of garments purchased over the past 15 years,
          but each item is kept for half as long. Only 1% of clothing is recycled into new garments, with most recycled
          textiles being downcycled into lower-value products.
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col items-center px-20">
          <BentoGrid>
            {fashionFacts.map((feature: Fact, idx: number) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </FadeIn>
      <FadeInStagger />
    </main>
  );
}
