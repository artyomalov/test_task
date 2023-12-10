import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import StyledSlider from './PeriodBlockSlider.style';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PeriodEventsType } from '../../types';
import ScreenWidthComponentSelector from '../../serviceComponents/ScreenWidthComponentSelector';

type Props = {
  eventsList: PeriodEventsType[];
  currentWindowWidth: number;
  breakpoint: number;
  periodTitle: string;
};

const PeriodBlockSlider: React.FC<Props> = (props) => {
  const [visible, setVisible] = React.useState<number>(1);
  const [eventsList, setEventsList] = React.useState<PeriodEventsType[]>(
    props.eventsList
  );
  const [periodTitle, setPeriodTitle] = React.useState<string>('');
  React.useEffect(() => {
    setVisible(0);
    const eventsTimeout = setTimeout(() => {
      setEventsList(props.eventsList);
    }, 440);
    const titleTimeout = setTimeout(() => {
      setPeriodTitle(props.periodTitle);
    }, 440);
    const visibleTimeout = setTimeout(() => {
      setVisible(1);
    }, 500);

    return () => {
      clearTimeout(eventsTimeout);
      clearTimeout(visibleTimeout);
      clearTimeout(titleTimeout);
    };
  }, [props.eventsList, props.periodTitle]);
  return (
    <StyledSlider $visible={visible}>
      <ScreenWidthComponentSelector
        currentWindowWidth={props.currentWindowWidth}
        breakpoint={props.breakpoint}
      >
        <></>
        <>
          <p className="periods-block__period-title">{periodTitle}</p>
          <div className="periods-block__horisontal-line"></div>
        </>
      </ScreenWidthComponentSelector>
      <Swiper
        modules={[Navigation, FreeMode, Pagination]}
        spaceBetween={50}
        slidesPerView={props.currentWindowWidth > props.breakpoint ? 3 : 1.4}
        navigation={{ nextEl: '.slider__next', prevEl: '.slider__prev' }}
        freeMode={{
          enabled: true,
          sticky: true,
          momentumBounce: false,
          momentumVelocityRatio: 0.5,
        }}
        speed={1000}
      >
        {eventsList.map((event) => (
          <SwiperSlide key={event.key}>
            <div className="slider__data-container">
              <h5 className="slider__title">{event.year}</h5>
              <p className="slider__text">{event.eventDescription}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ScreenWidthComponentSelector
        currentWindowWidth={props.currentWindowWidth}
        breakpoint={props.breakpoint}
      >
        <>
          <div className="slider__prev">
            <span className="slider__prev-arror"></span>
          </div>
          <div className="slider__next">
            <span className="slider__next-arror"></span>
          </div>
        </>
        <></>
      </ScreenWidthComponentSelector>
    </StyledSlider>
  );
};

export default PeriodBlockSlider;
