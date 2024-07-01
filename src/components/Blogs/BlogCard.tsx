import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import 'react-quill/dist/quill.bubble.css';
import { formatDateString, getPlainTextFromHTML } from '@/utils/string';
// import { formatDateString, getPlainTextFromHTML } from '../util/string';
// import Avatar from './Avatar';
// import { Pill } from './Pill';

interface BlogCardProps {
  title: string;
  content: string;
  publishedDate: string;
  id: string;
  fullWidth?: boolean;
}

const BlogCard = ({ title, content, publishedDate, id, fullWidth }: BlogCardProps) => {
  // split and slice combination is added so that the string doesn't get trimmed in middle of a word
  const quillContent = getPlainTextFromHTML(content).split(' ')?.slice(0, 100).join(' ') + '...';

  return (
    <Link
      to={`/blog/${id}`}
      className={`z-index-10 rounded-md bg-gradient-to-b from-slate-950 via-slate-800 to-slate-950 min-h-screen md:min-h-min md:h-min blog-card md:px-4 md:py-8 ${fullWidth ? 'w-full' : 'w-full md:w-4/6'} my-5 bg-indigo-500 shadow-lg shadow-indigo-500/50 flex flex-col justify-between md:grid md:grid-cols-12 md:gap-6 lg:gap-0 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-slate-100 scrollbar-hide`}
    >
      <div className="order-2 flex flex-col md:order-none md:col-span-9 p-4 md:px-4">
        <div className="order-3 md:order-none flex items-center gap-4 text-white">
          {/* <Avatar name={author?.name || ''} imageSrc={author?.profilePic} /> */}
          <div>
            {/* <span>{author?.name}</span> ·{' '} */}
            <span className="text-sm text-slate-300">{formatDateString(publishedDate)}</span>
          </div>
        </div>
        <div className="order-1 md:order-none text-2xl font-bold pt-4 text-white text-wrap">{title}</div>
        <div className="order-2 md:order-none tracking-wide py-4 text-slate-200">
          <ReactQuill value={quillContent} readOnly={true} theme={'bubble'} />
        </div>
      </div>
      {/* <div className="order-1 md:order-none col-span-0 md:col-span-3 md:p-4 flex justify-center items-center">
        <ArticleImage uniqueId={id} />
      </div> */}
      {/* <div className="order-3 md:order-none md:flex col-span-full pb-8 px-2 border-b md:border-none border-gray-100 flex-wrap">
        <div className="flex">
          {tagsOnPost?.slice(0, 2).map((tagWrapper) => {
            return <Pill id={tagWrapper.tag.id} tagName={tagWrapper.tag.tagName} />;
          })}
        </div>
      </div> */}
      <div className="order-3 md:order-none text-gray-300 md:flex col-span-full p-4">{Math.ceil(content.length / 300)} min read</div>
    </Link>
  );
};

export default BlogCard;

// function ArticleImage({ uniqueId }: { uniqueId: string }) {
//   return (
//     <object data={`https://picsum.photos/300/300?random=${uniqueId}`} type="image/jpeg" className="w-full">
//       <div className="bg-gray-50 w-[100%] animate-pulse aspect-square"></div>
//     </object>
//   );
// }