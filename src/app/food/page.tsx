import FoodFactsLayout from "@/components/FoodFacts/FoodFactsLayout";
import SustainableFoodTips from "@/components/FoodFacts/SustainableFoodTips";
import React from "react";

export default function Food() {

  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
      <FoodFactsLayout />
      <SustainableFoodTips />
    </main>
  );
}