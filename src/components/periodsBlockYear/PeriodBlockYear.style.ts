import styled from 'styled-components';

type StyledProps = {
  $color: string;
};

const StyledPeriodBlockYear = styled.div<StyledProps>`
  color: ${(props) => {
    if (props.$color === 'iris') return props.theme.colorIris;
    if (props.$color === 'fuschia') return props.theme.colorFuschia;
    return props.theme.colorBalckBlue;
  }};
  font-size: ${(props) => props.theme.fontSize200};
  font-weight: ${(props) => props.theme.fontWeightBold};
  line-height: 160px;
  letter-spacing: -0.02em;
  @media (max-width: 320px) {
    font-size: ${(props) => props.theme.fontSize56};
  }
`;

export default StyledPeriodBlockYear;
