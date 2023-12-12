import styled from 'styled-components';

type StyledProps = {
  $positionX: number;
  $positionY: number;
  $rotation: number;
  $selected: number;
};

const StyledPeriodsBlockCircleItem = styled.div<StyledProps>`
  width: ${(props) => (props.$selected === 0 ? '6px' : '56px')};
  height: ${(props) => (props.$selected === 0 ? '6px' : '56px')};
  position: absolute;
  left: ${(props) => props.$positionX + 'px'};
  top: ${(props) => props.$positionY + 'px'};
  transform: translate(-50%, -50%)
    rotate(${(props) => props.$rotation + 60 + 'deg'});
  background-color: ${(props) =>
    props.$selected === 0
      ? props.theme.colorBlackBlue
      : props.theme.colorBackground};
  border: ${(props) =>
    props.$selected === 0 ? 'none' : `1px solid ${props.theme.colorBlackBlue}`};
  border-radius: 50%;
  padding-top: ${(props) => (props.$selected === 0 ? '0px' : '13px')};
  transition: ${(props) => props.theme.transitionStyle};
  /* text-align: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    width: 56px;
    height: 56px;
    transform: translate(-50%, -50%)
      rotate(${(props) => props.$rotation + 60 + 'deg'});
    background-color: ${(props) => props.theme.colorBackground};
    border: 1px solid ${(props) => props.theme.colorBlackBlue};
    cursor: pointer;
    padding-top: 13px;
  }
  .circle-item__number {
    display: inline-block;
    opacity: ${(props) => props.$selected};
    font-size: ${(props) => props.theme.fontSize20};
    font-weight: ${(props) => props.theme.fontWeightRegular};
    line-height: 30px;
    position: relative;
    top: -6px;
    transition: ${(props) => props.theme.transitionStyle};
    transform: scale(${(props) => (props.$selected === 1 ? '100%' : '0')});
  }
  &:hover .circle-item__number {
    opacity: 1;
    transform: scale(100%);
  }

  .circle-item__title {
    opacity: ${(props) => props.$selected};
    position: absolute;
    font-weight: ${(props) => props.theme.fontWeightBold};
    font-weight: ${(props) => props.theme.fontSize20};
    color: ${(props) => props.theme.colorBlackBlue};
    left: 76px;
    bottom: 20px;
    transition: ${(props) =>
      props.$selected === 0
        ? props.theme.transitionStyleFast
        : props.theme.transitionStyle};
    transition-delay: ${(props) => (props.$selected === 0 ? 0 : '0.5s')};
  }
`;

export default StyledPeriodsBlockCircleItem;
