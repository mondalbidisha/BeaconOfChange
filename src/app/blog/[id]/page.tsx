"use client"

import BlogPost from "@/components/Blogs/BlogPost";
import { usePathname } from 'next/navigation';

export default function Blog() {
  const pathname = usePathname();
  const id  = pathname.split("/")[2];
  
  return (
    <main className="min-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
      <BlogPost id={id}/>
    </main>
  );
}