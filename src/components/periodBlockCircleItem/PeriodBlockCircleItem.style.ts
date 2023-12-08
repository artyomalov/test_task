import styled from 'styled-components';

type StyledProps = {
  positionx: number;
  positiony: number;
};

const StyledPeriodsBlockCircleItem = styled.div<StyledProps>`
  position: absolute;
  left: ${(props) => props.positionx + 'px'};
  top: ${(props) => props.positiony + 'px'};
  transform: translate(-50%, -50%) rotate(-50deg);
  width: 6px;
  height: 6px;
  background-color: ${(props) => props.theme.colorBlackBlue};
  border-radius: 50%;
  transition: ${(props) => props.theme.transitionStyle};

  &:hover {
    width: 56px;
    background-color: transparent;
    height: 56px;
    background-color: white;
    border: 1px solid ${(props) => props.theme.colorBlackBlue};
    cursor: pointer;
  }
`;

export default StyledPeriodsBlockCircleItem;
