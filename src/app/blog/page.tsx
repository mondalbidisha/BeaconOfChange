"use client"
import AppLayout from "@/components/AppLayout";
// import BlogList from "@/components/Blogs/BlogList";
import ErrorBoundary from "@/components/ErrorBoundary";
import dynamic from "next/dynamic";
import React from "react";

const BlogListDynamicComponent = dynamic(() => import('@/components/Blogs/BlogList'), {
  ssr: false
});

export default function Blog() {

  return (
    <ErrorBoundary>
      <AppLayout>
        <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
          <BlogListDynamicComponent />
        </main>
      </AppLayout>
    </ErrorBoundary>
  );
}