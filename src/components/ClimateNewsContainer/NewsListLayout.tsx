'use client';
import { AnimatedList } from '@/components/magicui/animated-list';
import { Item } from '@/constants/types';
import { InfoBox } from '../InfoBox';

export function NewsListLayout(props: any) {
  const { data } = props;

  const onClickHandler = (item: any) => {
    const query = item.title;
    const url = 'http://www.google.com/search?q=' + query;
    window.open(url, '_blank');
  };

  return (
    <div className="relative flex h-full w-full max-w-[90%] flex-col overflow-hidden rounded-lg border bg-background p-10 shadow-lg">
      <AnimatedList>
        {data.map((item: Item, idx: any) => (
          <InfoBox {...item} key={idx} clickHandler={() => onClickHandler(item)} />
        ))}
      </AnimatedList>
    </div>
  );
}
