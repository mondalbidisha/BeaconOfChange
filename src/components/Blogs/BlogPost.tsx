"use client"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { Loader } from '../Loader';
import Meteors from '../magicui/meteors';
import { useBlog } from '@/hooks';
import generateLoadingMessage from '@/utils/genericUtils';
import Link from 'next/link';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import ArticleImage from '../ArticleImage';

const BlogPost = (props: any) => {
  const { id } = props;
  const { blog, loading } = useBlog({
    id: id || '',
  });

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center p-4 md:px-10 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800">
        <Loader 
            message={generateLoadingMessage()}
            hideBackground={true}
          />
      </div>
    );
  }

  return (
    <div className="md:p-20 w-full flex flex-col bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800">
      <Meteors number={50}/>
      <div className="w-10 h-10 flex items-center justify-center">
        <Link href={'/blog'}>
            <IoChevronBackCircleOutline className="text-4xl text-white cursor-pointer" />
        </Link>
      </div>
      <div className="relative min-h-screen flex flex-col justify-center items-center p-4">
        <div className="p-4 max-w-[70%]">
          <div className="text-xl md:text-5xl font-extrabold py-4 line-clamp-4 text-white">{blog?.title}</div>
          <div className="mt-5 flex justify-center items-center">
            <ArticleImage imageProps={blog.blogImage} isFull={true}/>
          </div>
          <div className="py-4 text-slate-200 text-xl full-blog-post-preview">
            <ReactQuill value={blog?.content} readOnly={true} theme={'bubble'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;