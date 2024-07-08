import AppLayout from "@/components/AppLayout";
import BlogList from "@/components/Blogs/BlogList";
import React from "react";

export default function Blog() {

  return (
    <AppLayout>
      <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
        <BlogList />
      </main>
    </AppLayout>
    
  );
}