import React from 'react';
import StyledPeriodsBlockCircleItem from './PeriodBlockCircleItem.style';

type Props = {
  radius: number;
  theta: number;
  onClickPeriodSelectorHandler: (selectedPeriod: number) => void;
  rotationAngle: number;
  periodId: number;
  periodTitle: string;
  selected: number;
};

const getCircleItemPosition = (theta: number, radius: number) => ({
  x: Math.cos(theta) * radius,
  y: Math.sin(theta) * radius,
});

const PeriodBlockCircleItem: React.FC<Props> = (props) => {
  const newCords = getCircleItemPosition(props.theta, props.radius);

  return (
    <StyledPeriodsBlockCircleItem
      $selected={props.selected}
      $rotation={-props.rotationAngle}
      $positionX={props.radius + newCords.x}
      $positionY={props.radius - newCords.y}
      onClick={() => props.onClickPeriodSelectorHandler(props.periodId)}
    >
      <span className="circle-item__number">{props.periodId + 1}</span>
      <p className="circle-item__title">{props.periodTitle}</p>
    </StyledPeriodsBlockCircleItem>
  );
};

export default PeriodBlockCircleItem;
