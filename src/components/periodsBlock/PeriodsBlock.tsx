import React from 'react';
import StyledPediodsBlock from './PeriodsBlock.style';
import PeriodBlockYear from '../periodsBlockYear/PeriodBlockYear';
import PeriodBlocSlider from '../periodBlocSlider/PeriodBlocSlider';
import PeriodBlockSelectPeriodArrorsContainer from '../periodBlockArrorsContainer/PeriodBlockArrorsContainer';
import PeriodsBlockSelectionCircle from '../periodsBlockSelectionCircle/PeriodsBlockSelectionCircle';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { selectPeriods, selectSelectedPeriod } from '../../store/selectors';
import { changeSelectedPeriod } from '../../store/periodSlice';

const PeriodsBlock: React.FC = () => {
  // const [periodIndex, setPeriodIndex] = React.useState<number>(0);
  const periodList = useAppSelector(selectPeriods);
  const selectedPeriodId = useAppSelector(selectSelectedPeriod);
  const dispatch = useAppDispatch();
  const periodListLength = periodList.length;
  const selectedPeriod = periodList[selectedPeriodId];
  const onClickArrorHandler = (changeValue = 1) => {
    if (
      (selectedPeriodId >= periodListLength - 1 && changeValue === 1) ||
      (selectedPeriodId <= 0 && changeValue === -1)
    ) {
      return;
    }
    dispatch(changeSelectedPeriod(selectedPeriodId + changeValue));
    // setPeriodIndex((prev) => {
    //   return prev + changeValue;
    // });
  };
  return (
    <StyledPediodsBlock>
      <PeriodsBlockSelectionCircle circleSize={530} />

      <h2>Исторические даты</h2>

      <PeriodBlockYear year={selectedPeriod.years.start} />
      <PeriodBlockYear year={selectedPeriod.years.end} />
      <div>
        <p>
          0{selectedPeriodId + 1}/0{periodListLength}
        </p>
        <PeriodBlockSelectPeriodArrorsContainer
          onClickArrorHandler={onClickArrorHandler}
        />
      </div>
      <PeriodBlocSlider
        eventsList={periodList[selectedPeriodId].periodEvents}
      />
    </StyledPediodsBlock>
  );
};

export default PeriodsBlock;
