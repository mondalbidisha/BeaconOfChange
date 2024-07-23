import React from 'react';

type Props = {
  curIndex: number;
  length: number;
};

function Progress({ curIndex, length }: Props) {
  return (
    <>
      <div className="flex h-[3px] flex-1 items-center rounded-full bg-white bg-opacity-50">
        <div
          style={{
            width: (((curIndex + 1) / length) * 100).toString() + '%',
          }}
          className={`h-[3px] rounded-full bg-yellow-400 bg-opacity-50`}
        ></div>
      </div>
    </>
  );
}

export default Progress;
