import React from 'react';
import { motion } from 'framer-motion';
import OtherInfo from './OtherInfo';
import { Data, CurrentSlideData } from '@/constants/types';

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function SlideInfo({ transitionData, currentSlideData }: Props) {
  return (
    <>
      <motion.span layout className="mb-2 h-1 w-5 rounded-full bg-white" />
      <OtherInfo data={transitionData ? transitionData : currentSlideData.data} />
    </>
  );
}

export default SlideInfo;
