import styled from 'styled-components';

type StyledProps = {
  $opacityLeft: number;
  $opacityRight: number;
};

const StyledArrorsContainer = styled.div<StyledProps>`
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .arrors-container__arror-background {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.colorBalckBlueTransparent};
    cursor: pointer;
    &:hover {
      background-color: white;
    }
    position: relative;
    &:first-of-type {
      opacity: ${(props) => props.$opacityLeft};
      pointer-events: ${(props) =>
        props.$opacityLeft === 0.5 ? 'none' : 'all'};
    }
    &:last-of-type {
      opacity: ${(props) => props.$opacityRight};
      pointer-events: ${(props) =>
        props.$opacityRight === 0.5 ? 'none' : 'all'};
    }
  }
  .arrors-container__arror {
    display: block;
    width: 12px;
    height: 12px;
    border-left: 2px solid ${(props) => props.theme.colorBlackBlue};
    border-bottom: 2px solid ${(props) => props.theme.colorBlackBlue};
    position: absolute;
    top: 50%;
    left: 50%;
    transition: ${(props) => props.theme.transitionStyle};
  }
  .arrors-container__arror-left {
    transform: translate(-25%, -50%) rotate(45deg);
  }

  .arrors-container__arror-right {
    transform: translate(-75%, -50%) rotate(225deg);
  }
  @media (max-width: 320px) {
    width: 58.33px;
    height: 25px;
    .arrors-container__arror-background {
      width: 25px;
      height: 25px;
    }
    .arrors-container__arror {
      width: 6.25px;
      height: 6.25px;
    }
  }
`;

export default StyledArrorsContainer;
