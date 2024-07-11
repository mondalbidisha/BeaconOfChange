import WasteFactsLayout from "@/components/WasteFacts/WasteFactsLayout";
import WasteReductionTips from "@/components/WasteFacts/WasteReductionTips";
import React from "react";

export default function Waste() {

  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
        <WasteFactsLayout />
        <WasteReductionTips />
    </main>
  );
}