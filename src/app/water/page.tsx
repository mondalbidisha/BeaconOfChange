'use client';
import React from 'react';
import WaterFactsLayout from '@/components/WaterFacts/WaterFactsLayout';
import ConserveWater from '@/components/WaterFacts/ConserveWater';

export default function Water() {
  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
      <WaterFactsLayout />
      <ConserveWater />
    </main>
  );
}
