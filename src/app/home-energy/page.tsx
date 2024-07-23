import HomeEnergyLayout from '@/components/HomeEnergy/HomeEnergyLayout';
import HomeEnergyTips from '@/components/HomeEnergy/HomeEnergyTips';
import React from 'react';

export default function HomeEnergy() {
  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
      <HomeEnergyLayout />
      <HomeEnergyTips />
    </main>
  );
}
