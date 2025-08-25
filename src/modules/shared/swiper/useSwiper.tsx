import { useState } from 'react';
import { SwiperClass } from 'swiper/react';

export const useSwiper = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handlePrevSlide = () => {
    if (!swiper) {
      return;
    }

    swiper.slidePrev();
  };

  const handleNextSlide = () => {
    if (!swiper) {
      // console.log('not');

      return;
    }

    swiper.slideNext();
  };

  const onSwiperInit = (_swiper: SwiperClass) => setSwiper(_swiper);

  return { handlePrevSlide, handleNextSlide, onSwiperInit };
};
