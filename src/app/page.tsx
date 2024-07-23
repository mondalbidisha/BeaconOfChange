'use client';
import React from 'react';
import HomepageLayout from '@/components/HomepageLayout';
import AppLayout from '@/components/AppLayout';
import ErrorBoundary from '@/components/ErrorBoundary';
import Link from 'next/link';
import ShimmerButton from '@/components/magicui/shimmer-button';
import { useClientMediaQuery } from '@/hooks/useClientMediaQuery';

export default function Home() {
  const isMobile = useClientMediaQuery('(max-width: 600px)');

  return (
    <ErrorBoundary>
      {isMobile ? (
        <div className="min-h-screen min-w-screen overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800">
          <div className="text-center flex items-center m-10 flex-col text-slate-100">
            <div className="text-lg">
              For the best experience, please visit our website on a desktop or laptop. Some features may not be fully
              available on mobile devices.
            </div>
            <div className="text-md my-10">You can also visit our mobile friendly site !!</div>
            <Link href="https://eco-verse-nine.vercel.app/" target="_blank">
              <ShimmerButton className="shadow-3xl">
                <span className="whitespace-pre-wrap gap-2 p-[5px] text-center text-sm font-bold leading-none tracking-[2px] text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  EcoVerse
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      ) : (
        <AppLayout>
          <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
            <HomepageLayout />
          </main>
        </AppLayout>
      )}
    </ErrorBoundary>
  );
}
