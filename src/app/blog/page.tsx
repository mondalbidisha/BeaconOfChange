import BlogList from "@/components/Blogs/BlogList";
import React from "react";

export default function Blog() {

  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
        <BlogList />
    </main>
  );
}