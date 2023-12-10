import React, { Dispatch, SetStateAction } from 'react';
import StyledPagination from './periodsBlockPagination.style';
import createRange from '../../services/createRange';
import PeriodBlocksPaginationItem from '../periodBlocksPaginationItem/PeriodBlocksPaginationItem';

type Props = {
  indexPeriodLimit: number;
  setPeriod: Dispatch<SetStateAction<number>>;
  periodIndex: number;
};

const PeriodsBlockPagination: React.FC<Props> = (props) => {
  return (
    <StyledPagination>
      {createRange(0, props.indexPeriodLimit).map((item) => (
        <PeriodBlocksPaginationItem
          key={item}
          selectedPeriod={item}
          setPeriod={props.setPeriod}
          periodIndex={props.periodIndex}
        />
      ))}
    </StyledPagination>
  );
};

export default PeriodsBlockPagination;
