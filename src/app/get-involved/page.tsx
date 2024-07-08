import React from "react";
import Landing from "@/components/GetInvolved/Landing";
import AppLayout from "@/components/AppLayout";

export default function GetInvolved() {
  return (
    <AppLayout>
      <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
        <Landing />
      </main>
    </AppLayout>
    
  );
}


