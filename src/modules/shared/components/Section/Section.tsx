/* eslint-disable max-len */
import s from './Section.module.scss';
import { useSwiper } from '../../../shared/swiper/useSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import React from 'react';
import { ProductCard } from '../../../shared/components/ProductCard/ProductCard';
import { Product } from '../../types/Product';

type Props = {
  title: string;
  products: Product[];
};

export const Section: React.FC<Props> = ({ title, products }) => {
  const { handlePrevSlide, handleNextSlide, onSwiperInit } = useSwiper();

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.content}>
          <h2 className="section__title">{title}</h2>
          <div className={s.buttons}>
            <button className={s.prev__btn} onClick={handlePrevSlide}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4715 3.52864C10.2111 3.26829 9.789 3.26829 9.52865 3.52864L5.52865 7.52864C5.2683 7.78899 5.2683 8.2111 5.52865 8.47145L9.52865 12.4714C9.789 12.7318 10.2111 12.7318 10.4715 12.4714C10.7318 12.2111 10.7318 11.789 10.4715 11.5286L6.94286 8.00004L10.4715 4.47145C10.7318 4.2111 10.7318 3.78899 10.4715 3.52864Z"
                  fill="#313237"
                />
              </svg>
            </button>
            <button className={s.next__btn} onClick={handleNextSlide}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.52864 3.52864C5.78899 3.26829 6.2111 3.26829 6.47145 3.52864L10.4714 7.52864C10.7318 7.78899 10.7318 8.2111 10.4714 8.47145L6.47145 12.4714C6.2111 12.7318 5.78899 12.7318 5.52864 12.4714C5.26829 12.2111 5.26829 11.789 5.52864 11.5286L9.05723 8.00004L5.52864 4.47145C5.26829 4.2111 5.26829 3.78899 5.52864 3.52864Z"
                  fill="#313237"
                />
              </svg>
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={onSwiperInit}
          spaceBetween={16}
          slidesPerView={1.3}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
