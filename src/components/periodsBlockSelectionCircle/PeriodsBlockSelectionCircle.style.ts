import styled from 'styled-components';

type StyledProps = {
  size: string;
  rotationangle: number
};

const StyledPeriodsBlockSelectionCircle = styled.div<StyledProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(50deg);
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border: 1px solid ${(props) => props.theme.colorBlackBlue};
  border-radius: 50%;
  .selection-circle__circle {
  }
`;

export default StyledPeriodsBlockSelectionCircle;
