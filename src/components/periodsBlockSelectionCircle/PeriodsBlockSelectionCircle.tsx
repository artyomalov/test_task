import React from 'react';
import StyledPeriodsBlockSelectionCircle from './PeriodsBlockSelectionCircle.style';
import PeriodBlockCircleItem from '../periodBlockCircleItem/PeriodBlockCircleItem';
import { Console } from 'console';
import createRange from '../../services/createRange';
import { useAppSelector } from '../../store/typedHooks';
import {
  selectPeriodsQuantity,
  selectSelectedPeriod,
} from '../../store/selectors';
type Props = {
  circleSize: number;
};

const PeriodsBlockSelectionCircle: React.FC<Props> = (props) => {
  const radius = props.circleSize / 2;
  const periodsQuantity = useAppSelector(selectPeriodsQuantity);
  const angle = 360 / periodsQuantity;
  const theta = (Math.PI * radius * angle) / 180;
  const currentPeriod = useAppSelector(selectSelectedPeriod);
  
  const onClickPeriodSelectorHandler = (selectedPeriod: number) => {
    const periodDifferense = currentPeriod - selectedPeriod;
    const rotationAngle = periodDifferense * angle;
  };

  return (
    <StyledPeriodsBlockSelectionCircle size={`${props.circleSize}px`}>
      <div className="selection-circle__circle">
        {createRange(0, periodsQuantity).map((item) => (
          <PeriodBlockCircleItem
            key={item}
            radius={radius}
            theta={theta * item + 3}
          />
        ))}
      </div>
    </StyledPeriodsBlockSelectionCircle>
  );
};

export default PeriodsBlockSelectionCircle;
