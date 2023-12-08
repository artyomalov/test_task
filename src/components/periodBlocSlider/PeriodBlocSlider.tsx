import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {
  eventsList: { key: number; year: number; eventDescription: string }[];
};

const PeriodBlocSlider: React.FC<Props> = (props) => {
  return (
    <Swiper
      modules={[Navigation, FreeMode]}
      spaceBetween={50}
      slidesPerView={3}
      freeMode={{
        enabled: true,
        sticky: true,
        momentumBounce: false,
        momentumVelocityRatio: 0.5,
      }}
      speed={1000}
      navigation
      onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper: any) => console.log(swiper)}
    >
      {props.eventsList.map((event) => (
        <SwiperSlide key={event.key}>
          <h5>{event.year}</h5>
          <p>{event.eventDescription}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PeriodBlocSlider;
