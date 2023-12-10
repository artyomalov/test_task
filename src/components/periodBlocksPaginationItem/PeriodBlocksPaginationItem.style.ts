import styled from 'styled-components';

type StyledProps = {
  $opacity: number;
};

const StyledPeriodBlocksPaginationItem = styled.span<StyledProps>`
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: ${(props) => props.theme.colorBlackBlue};
  border-radius: 50%;
  transition: ${(props) => props.theme.transitionStyle};
  opacity: ${(props) => props.$opacity};
  cursor: pointer;
`;

export default StyledPeriodBlocksPaginationItem;
