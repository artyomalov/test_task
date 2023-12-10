import React from 'react';
import StyledPeriodsBlockSelectionCircle from './PeriodsBlockSelectionCircle.style';
import PeriodBlockCircleItem from '../periodBlockCircleItem/PeriodBlockCircleItem';
import createRange from '../../services/createRange';
import { PeriodType } from '../../types';

type Props = {
  periodsQuantity: number;
  currentPeriodIndex: number;
  radius: number;
  theta: number;
  rotationAngle: number;
  onClickPeriodSelectorHandler: (selectedPeriod: number) => void;
  periodList: PeriodType[];
};

const PeriodsBlockSelectionCircle: React.FC<Props> = (props) => {
  return (
    <StyledPeriodsBlockSelectionCircle
      $size={`${props.radius * 2}px`}
      $rotationAngle={props.rotationAngle}
    >
      <div className="selection-circle__circle">
        {createRange(0, props.periodsQuantity - 1).map((item) => (
          <PeriodBlockCircleItem
            key={item}
            radius={props.radius}
            theta={props.theta * item}
            onClickPeriodSelectorHandler={props.onClickPeriodSelectorHandler}
            rotationAngle={props.rotationAngle}
            periodId={item}
            periodTitle={props.periodList[item].title}
            selected={props.currentPeriodIndex === item ? 1 : 0}
          />
        ))}
      </div>
    </StyledPeriodsBlockSelectionCircle>
  );
};

export default PeriodsBlockSelectionCircle;
