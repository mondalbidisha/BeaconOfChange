// "use client"

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { Loader } from '../Loader';
import Meteors from '../magicui/meteors';
import { useBlog } from '@/hooks';

const BlogPost = (props: any) => {
  const { id } = props;
  const { blog, loading } = useBlog({
    id: id || '',
  });

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center p-4 md:px-10 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800">
        <Loader 
            message={"Scanning for tech brilliance..."}
            hideBackground={true}
          />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-4 md:p-20 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-800">
      <Meteors number={50}/>
      <div className="p-4 max-w-[70%]">
        <div className="text-xl md:text-5xl font-extrabold py-4 line-clamp-4 text-white">{blog?.title}</div>
        <div className="py-4 text-slate-200 text-xl full-blog-post-preview">
          <ReactQuill value={blog?.content} readOnly={true} theme={'bubble'} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;