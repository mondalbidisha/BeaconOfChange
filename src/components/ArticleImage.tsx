// ArticleImage.tsx
import React from 'react';

interface ArticleImageProps {
    imageProps: string | undefined;
    isFull?: boolean | undefined;
}

const ArticleImage: React.FC<ArticleImageProps> = ({ imageProps, isFull }) => {
  return (
    <object data={imageProps} type="image/jpeg" className={`w-full ${isFull && "h-[400px]"}`}>
      <div className="bg-gray-50 w-[100%] animate-pulse aspect-square"></div>
    </object>
  );
};

export default ArticleImage;