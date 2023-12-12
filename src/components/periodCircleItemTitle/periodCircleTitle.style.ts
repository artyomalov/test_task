import styled from 'styled-components';

type StyledProps = {
  $visible: number;
};

const StyledPeriodCircleTitle = styled.p<StyledProps>`
  opacity: ${(props) => props.$visible};
  position: absolute;
  font-weight: ${(props) => props.theme.fontWeightBold};
  font-weight: ${(props) => props.theme.fontSize20};
  color: ${(props) => props.theme.colorBlackBlue};
  left: 76px;
  bottom: 20px;
  transition: ${(props) =>
    props.$visible === 0
      ? props.theme.transitionStyleFast
      : props.theme.transitionStyle};
  transition-delay: ${(props) => (props.$visible === 0 ? 0 : '0.5s')};

`;

export default StyledPeriodCircleTitle;
