"use client"
import BlogPost from "@/components/Blogs/BlogPost";
import ErrorBoundary from "@/components/ErrorBoundary";
import { usePathname } from 'next/navigation';

export default function Blog() {
  const pathname = usePathname();
  const id  = pathname.split("/")[2];
  
  return (
    <ErrorBoundary>
      <main className="min-h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <BlogPost id={id}/>
      </main>
    </ErrorBoundary>
  );
}