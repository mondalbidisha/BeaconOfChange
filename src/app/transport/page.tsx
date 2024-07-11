import TransportFactsLayout from "@/components/TransportFacts/TransportFactsLayout";
import TransportTips from "@/components/TransportFacts/TransportTips";
import React from "react";

export default function Transport() {

  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
        <TransportFactsLayout />
        <TransportTips />
    </main>
  );
}