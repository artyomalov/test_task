import styled from 'styled-components';

const StyledPediodsBlock = styled.div`
  width: 1320px;
  height: 1080px;
  margin-top: 170px;
  margin-left: 80px;
  position: relative;

  .periods-block__lines-container {
    position: absolute;
    top: -170px;
    width: 100%;
    height: 100%;
  }
  .periods-block__blue-line {
    height: 100%;
    width: 1px;
    background-color: ${(props) => props.theme.colorBlackBlue};
    opacity: 0.3;
    position: absolute;
    left: 49%;
    &:first-of-type {
      left: -80px;
    }
    &:last-of-type {
      left: 99%;
    }
  }

  .periods-block__title-container {
    position: relative;
    text-align: left;
    width: 353px;
    height: 134px;
  }
  .periods-block__title {
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.colorBlackBlue};
    font-size: ${(props) => props.theme.fontSize56};
    font-weight: ${(props) => props.theme.fontWeightBold};
    line-height: 120%;
  }
  .periods-block__gradient-stripe {
    position: absolute;
    left: -80px;
    top: 175px;
    background: linear-gradient(
      top,
      ${(props) => props.theme.colorIris},
      ${(props) => props.theme.colorFuschia}
    );
    background: -moz-linear-gradient(
      top,
      ${(props) => props.theme.colorFuschia},
      ${(props) => props.theme.colorIris}
    );
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(${(props) => props.theme.colorFuschia}),
      to(${(props) => props.theme.colorIris})
    );
    height: 120px;
    width: 5px;
  }

  .periods-block__years {
    width: 973px;
    height: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 96px auto 0 auto;
  }

  .periods-block__circle {
    position: absolute;
    top: 310px;
    left: 642px;
    transform: translate(-50%, -50%);
    z-index: 999;
  }

  .periods-block__arrors {
    margin-top: 137px;
    text-align: left;
  }

  .periods-block__period-counter {
    font-size: ${(props) => props.theme.fontSize14};
    font-weight: ${(props) => props.theme.fontWeightRegular};
    color: ${(props) => props.theme.colorBlackBlue};
    margin-bottom: 20px;
  }
  .periods-block__slider {
    width: 100%;
    margin-top: 56px;
  }

  @media (max-width: 320px) {
    width: 280px;
    height: 495.67px;
    margin-top: 59px;
    margin-left: 20px;
    .periods-block__title-container {
      width: 123px;
      height: 48px;
    }
    .periods-block__title {
      font-size: ${(props) => props.theme.fontSize20};
    }
    .periods-block__years {
      width: 273px;
      height: 72px;
      margin: 56px auto 0 auto;
    }

    .periods-block__slider {
      width: 100%;
      margin-top: 1px;
      overflow: hidden;
    }
    .periods-block__period-counter {
      margin-bottom: 10.67px;
    }
    .periods-block__arror-pagination {
      display: flex;
      width: 183px;
      margin-top: 70px;
      height: fit-content;
      justify-content: space-between;
      align-items: center;
    }
    .periods-block__arrors {
      width: 58.33px;
      height: 49.67;
      margin-top: 0;
    }
    .periods-block__pagination {
      width: 86px;
      height: 6px;
    }
  }
`;

export default StyledPediodsBlock;
