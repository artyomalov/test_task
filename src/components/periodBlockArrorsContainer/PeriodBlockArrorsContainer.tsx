import React, { Dispatch, SetStateAction } from 'react';
import StyledArrorsContainer from './PeriodBlockArrorsContainer.style';

type Props = {
  onClickArrorHandler: (changeValue: number) => void;
};

const PeriodBlockSelectPeriodArrorsContainer: React.FC<Props> = (props) => {
  return (
    <StyledArrorsContainer>
      <div onClick={() => props.onClickArrorHandler(-1)}>
        {'<<<<<<<<<<<<<<<'}
      </div>
      <div onClick={() => props.onClickArrorHandler(1)}>{'>>>>>>>>>>>>>'}</div>
    </StyledArrorsContainer>
  );
};

export default PeriodBlockSelectPeriodArrorsContainer;
