import React from "react";
import HomepageLayout from "@/components/HomepageLayout";
import AppLayout from "@/components/AppLayout";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {

  return (
    <ErrorBoundary>
        <AppLayout>
          <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
            <HomepageLayout />
          </main>
      </AppLayout>
    </ErrorBoundary>
  );
}


