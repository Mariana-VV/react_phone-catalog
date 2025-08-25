/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './PhoneDetailsSlider.module.scss';
import { Pagination } from 'swiper/modules';

type Props = {
  images: [] | undefined;
  productName: string | undefined;
};

export const ProductDetailsSlider: FC<Props> = ({ images, productName }) => {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={1}
      className={s.swiper}
      wrapperClass={s.swiperWrapper}
      loop={true}
      modules={[Pagination]}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          const bulletImage = `${images[index]}`;

          return `
                  <div class=${className} style={{ width: '100%' }}>
                    <img src=${bulletImage} alt=${productName}  class=${s.bulletImage}/>
                  </div>
               `;
        },
        bulletClass: s.bullet,
        bulletActiveClass: s.activeBullet,
        horizontalClass: s.pagination,
      }}
    >
      {images.map(image => (
        <SwiperSlide key={image}>
          <img alt={productName} src={`${image}`} className={s.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
