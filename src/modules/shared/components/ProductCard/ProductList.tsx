/* eslint-disable react/jsx-key */
import { useContext } from 'react';
import { ProductContext } from '../../store/ProductContext';
import { ProductCard } from './ProductCard';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { useSwiper } from '../../swiper/useSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ProductList = () => {
  const { products } = useContext(ProductContext);
  const { onSwiperInit } = useSwiper();

  return (
    <>
      <Swiper
        onSwiper={onSwiperInit}
        spaceBetween={16}
        slidesPerView={4}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {products &&
          products.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} key={product.id} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
