import React from "react";
import Landing from "@/components/GetInvolved/Landing";
import AppLayout from "@/components/AppLayout";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function GetInvolved() {
  return (
    <ErrorBoundary>
        <AppLayout>
          <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
            <Landing />
          </main>
        </AppLayout>
    </ErrorBoundary>
  );
}


