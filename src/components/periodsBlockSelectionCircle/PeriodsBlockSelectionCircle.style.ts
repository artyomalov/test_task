import styled from 'styled-components';

type StyledProps = {
  $size: string;
  $rotationAngle: number;
};

const StyledPeriodsBlockSelectionCircle = styled.div<StyledProps>`
  position: relative;
  transform: rotate(${(props) => props.$rotationAngle - 60 + 'deg'});
  height: ${(props) => props.$size};
  width: ${(props) => props.$size};
  border: 1px solid ${(props) => props.theme.colorBalckBlueTransparent};
  border-radius: 50%;
  transition: ${(props) => props.theme.transitionStyle};
`;

export default StyledPeriodsBlockSelectionCircle;
