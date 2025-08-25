/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import hero from './Hero.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useSwiper } from '../../../shared/swiper/useSwiper';

export const Hero = () => {
  const { handlePrevSlide, handleNextSlide, onSwiperInit } = useSwiper();

  return (
    <section className={hero.hero}>
      <div className="container">
        <h1 className={hero.title}>Welcome to Nice Gadgets store!</h1>

        <Swiper
          onSwiper={onSwiperInit}
          autoHeight={true}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <button onClick={handlePrevSlide} className={hero.prev}>
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
                d="M10.4715 3.52864C10.2111 3.26829 9.78903 3.26829 9.52868 3.52864L5.52868 7.52864C5.26833 7.78899 5.26833 8.2111 5.52868 8.47145L9.52868 12.4714C9.78903 12.7318 10.2111 12.7318 10.4715 12.4714C10.7318 12.2111 10.7318 11.789 10.4715 11.5286L6.94289 8.00004L10.4715 4.47145C10.7318 4.2111 10.7318 3.78899 10.4715 3.52864Z"
                fill="#313237"
              />
            </svg>
          </button>
          <SwiperSlide>
            <div className={`${hero.bg} ${hero.bg__1}`}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${hero.bg} ${hero.bg__2}`}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${hero.bg} ${hero.bg__3}`}></div>
          </SwiperSlide>

          <button onClick={handleNextSlide} className={hero.next}>
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
                d="M5.52876 3.52864C5.78911 3.26829 6.21122 3.26829 6.47157 3.52864L10.4716 7.52864C10.7319 7.78899 10.7319 8.2111 10.4716 8.47145L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00004L5.52876 4.47145C5.26841 4.2111 5.26841 3.78899 5.52876 3.52864Z"
                fill="#313237"
              />
            </svg>
          </button>
        </Swiper>
      </div>
    </section>
  );
};
