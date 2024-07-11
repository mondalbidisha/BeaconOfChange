import React from "react";
import FashionFactsLayout from "@/components/FashionFacts/FashionFactsLayout";
import SustainableFashionTips from "@/components/FashionFacts/SustainableFashionTips";

export default function Fashion() {

  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
      <FashionFactsLayout />
      <SustainableFashionTips />
    </main>
  );
}