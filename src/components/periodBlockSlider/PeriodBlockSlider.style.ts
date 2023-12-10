import styled from 'styled-components';

type StyledProps = {
  $visible: number;
};

const StyledSlider = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 100%;
  height: 135px;
  margin-left: 0px;
  opacity: ${(props) => props.$visible};
  transition: ${(props) => props.theme.transitionStyle};

  .slider__prev,
  .slider__next {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    background-color: white;
    z-index: 600;
  }

  .slider__next {
    right: 40px;
    transform: translate(50%, -50%);
  }
  .slider__prev {
    left: -40px;
    transform: translate(-50%, -50%);
  }

  .slider__prev-arror,
  .slider__next-arror {
    display: block;
    width: 10px;
    height: 10px;
    border-left: 2px solid ${(props) => props.theme.colorSliderYear};
    border-bottom: 2px solid ${(props) => props.theme.colorSliderYear};
    position: absolute;
    top: 50%;
    left: 50%;
    transition: ${(props) => props.theme.transitionStyle};
  }

  .slider__prev-arror {
    transform: translate(-25%, -50%) rotate(45deg);
  }

  .slider__next-arror {
    transform: translate(-75%, -50%) rotate(225deg);
  }

  .slider__data-container {
    width: 320px;
    height: 135px;
    margin-right: 80px;
    overflow: hidden;
    text-align: start;
  }
  .slider__title {
    color: ${(props) => props.theme.colorSliderYear};
    font-family: 'Bebas Neue', sans-serif;
    font-size: ${(props) => props.theme.fontSize25};
    font-weight: ${(props) => props.theme.fontWeightRegular};
  }
  .slider__text {
    font-size: ${(props) => props.theme.fontSize20};
    font-weight: ${(props) => props.theme.fontWeightRegular};
    margin-top: 15px;
    line-height: 30px;
  }

  .swiper-button-disabled {
    display: none;
  }

  @media (max-width: 320px) {
    height: 145px;
    display: block;
    .periods-block__period-title {
      margin-top: 42px;
      font-size: ${(props) => props.theme.fontSize14};
      font-weight: ${(props) => props.theme.fontWeightBold};
      color: ${(props) => props.theme.colorBlackBlue};
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: -0.03em;
      text-align: left;
    }
    .periods-block__horisontal-line {
      margin-top: 25px;
      margin-bottom: 20px;
      width: 100%;
      height: 1px;
      background-color: ${(props) => props.theme.colorStripe};
    }
    .slider__data-container {
      width: 166px;
      height: 80px;
    }
    .slider__title {
      color: ${(props) => props.theme.colorSliderYear};
      font-family: 'Bebas Neue', sans-serif;
      font-size: ${(props) => props.theme.fontSize16};
      font-weight: ${(props) => props.theme.fontWeightRegular};
    }
    .slider__text {
      color: ${(props) => props.theme.colorBlackBlue};
      margin-top: 15px;
      font-weight: ${(props) => props.theme.fontWeightRegular};
      line-height: 145%;
      font-size: ${(props) => props.theme.fontSize14};
    }
    .swiper-slide {
      width: 166px !important;
    }
  }
`;

export default StyledSlider;
