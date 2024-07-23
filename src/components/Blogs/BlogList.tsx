'use client';
import React, { useEffect, useState } from 'react';
import Meteors from '@/components/magicui/meteors';
import { Loader } from '../Loader';
import ScrollToTopButton from '../ScrollToTop';
import BlogCard from './BlogCard';
import { useBlogs } from '@/hooks';
import generateLoadingMessage from '@/utils/genericUtils';

function BlogList() {
  const [infiniteScrollRef, setInfiniteScrollRef] = useState<HTMLDivElement | null>(null);
  const { blogs, loading, handleLoadMore } = useBlogs();

  useEffect(() => {
    if (!infiniteScrollRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loading) {
          handleLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    infiniteScrollRef && observer.observe(infiniteScrollRef);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infiniteScrollRef, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center overflow-y-hidden">
        <Loader message={generateLoadingMessage()} />
      </div>
    );
  }

  return (
    <>
      <div className="relative min-h-screen w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800 px-20 pb-20 pt-10 scroll-smooth">
        <Meteors number={40} />
        <div className="flex items-center mb-10 flex-col text-slate-100 gap-2 text-3xl font-medium uppercase tracking-[4px] mt-20">
          Beacon of Change - Blog
        </div>
        <div className="flex flex-col justify-center items-center scroll-smooth py-10 overflow-x-hidden">
          {blogs.length > 0 &&
            blogs.map((blog) => (
              <BlogCard
                key={blog?.id}
                id={blog?.id}
                publishedDate={blog?.publishedDate}
                title={blog.title}
                content={blog.content}
                blogImage={blog.blogImage}
              />
            ))}
          {blogs.length === 0 && !loading && (
            <div className="text-center text-3xl text-slate-300 p-24">No posts found</div>
          )}
        </div>
        {!loading && (
          <div
            ref={(e) => {
              setInfiniteScrollRef(e);
            }}
            style={{ width: '100%', backgroundColor: 'transparent' }}
          />
        )}
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default BlogList;
