import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { BlogResponse } from '../types/blog';
import { Post } from '../types/post';

const PAGE_SIZE = 10;

export const useBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<BlogResponse[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const resetPage = () => {
    setPage(1);
  };
  const fetchBlogs = async () => {
    setLoading(true);
    setData([]);

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/api/v1/blog/bulk?page=${page}&pageSize=${PAGE_SIZE}`
    );

    setData((prev) => {
      const dataExists = prev.find((item) => item.page === page);
      if (dataExists) {
        const updatedPayload = prev.map((item) => {
          if (item.page === page) {
            return response.data;
          } else {
            return item;
          }
        });
        return updatedPayload;
      } else {
        return [...prev, response?.data || {}];
      }
    });
    setTotalPage(response?.data?.totalPages);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const blogs = useMemo(() => {
    return data.flatMap((item) => item?.posts ?? []);
  }, [data]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    if (nextPage <= totalPage) {
      setPage(nextPage);
    }
  };

  return {
    loading,
    blogs,
    handleLoadMore,
    resetPage,
  };
};

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Post>({
    id: '',
    title: '',
    content: '',
    publishedDate: '',
    published: true,
    blogImage: '',
  });

  async function fetchBlog() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/api/v1/blog/${id}`);
    setBlog(response.data.post);
    setLoading(false);
  }

  useEffect(() => {
    fetchBlog();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return {
    loading,
    blog,
  };
};
