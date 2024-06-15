import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Fact } from "@/constants/types";
import { motion } from "framer-motion";

const climateChangeFacts: Fact[] = [
  {
    name: "Climate change IS happening",
    description: "Climate change is already affecting every region on Earth. Changes in rainfall patterns, rising sea levels, melting glaciers, a warming ocean, and more frequent and intense extreme weather events are just some of the changes already impacting millions of people.",
    className: "col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100",
    background: (
      <motion.img 
          alt="humans are responsible for climate change image" 
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={"/climate-change-is-happening.jpeg"} />
    ),
  },
  {
    name: "Scientists agree that HUMANS ARE RESPONSIBLE for climate change",
    description: "Multiple independent studies over the past 19 years have found that between 90 and 100 per cent of scientists agree that humans are responsible for climate change, with most of the studies finding a 97 per cent consensus. The Synthesis Report by the Intergovernmental Panel on Climate Change (IPCC), released in March 2023, categorically confirmed that human activity is the overwhelming cause of climate change.",
    className: "col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100",
    background: (
      <motion.img 
          alt="humans are responsible for climate change image" 
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={"/population.jpeg"} />
    ),
  },
  {
    name: "Every FRACTION of a degree of warming MATTERS",
    description: "With every increment of global warming, extreme heat and rainfall events become more frequent and more intense. We have already crossed the 1.1°C mark and if global warming exceeds 1.5°C above pre-industrial levels, there will be more heat waves, longer warm seasons and shorter cold seasons.",
    className: "col-span-3 lg:col-span-2 hover:outline outline-2 outline-offset-2 outline-slate-100",
    background: (
      <motion.img 
          alt="melting icebergs to denote rising temperatures image" 
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={"/melting-icebergs.jpeg"} />
    ),
  },
  {
    name: "Climate change is a MAJOR THREAT to people’s HEALTH",
    description: "The main cause of climate change – the burning of coal, oil and gas – also causes air pollution which in turn can lead to respiratory diseases, strokes, and heart attacks. More than 8.7 million people currently die every year due to outdoor air pollution.",
    className: "col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100",
    background: (
      <motion.img 
      alt="threat to life because of climate change temperatures image" 
      className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
      src={"/air-pollution.jpeg"} />
    ),
  },
  {
    name: "Renewable energy is CHEAPER than fossil fuels",
    description: "In most parts of the world, electricity from new renewable-energy plants, such as wind or solar, is now cheaper than power from new fossil fuel plants.",
    className: "col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100",
    background: (
      <motion.img 
        alt="renewable energy for climate change image" 
        className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
        src={"/renewable-energy.jpeg"} />
    ),
  },
  {
    name: "The transition to clean energy will CREATE MILLIONS OF JOBS",
    description: "The transition to net-zero emissions is projected to lead to an overall increase in jobs in the energy sector: about 5 million jobs in fossil fuel production could be lost by 2030, but an estimated 14 million new jobs would be created in clean energy, resulting in a net gain of 9 million jobs globally.",
    className: "col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100",
    background: (
      <motion.img 
        alt="transition to clean energy will create employment image" 
        className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
        src={"/solar-panels.jpeg"} />
    ),
  },
  {
    name: "We can still LIMIT climate change, if WE ACT NOW!",
    description: "The choices we make today will determine the changes in the climate we will experience in the future. If we act now, we can limit climate change and preserve a livable planet.",
    className: "col-span-3 lg:col-span-1 hover:outline outline-2 outline-offset-2 outline-slate-100",
    background: (
        <motion.img 
          alt="act now to limit climate change image" 
          className="absolute left-0 top-0 h-full w-full object-cover brightness-40"
          src={"/climate-change-act-now.jpeg"} />
    ),
  },
];

export function BentoGridLayout() {
  return (
    <BentoGrid>
      {climateChangeFacts.map((feature: Fact, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
