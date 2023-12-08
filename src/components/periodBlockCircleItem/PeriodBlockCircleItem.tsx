import React from 'react';
import StyledPeriodsBlockCircleItem from './PeriodBlockCircleItem.style';

type Props = {
  radius: number;
  theta: number;
};

const getCircleItemPosition = (theta: number, radius: number) => ({
  x: Math.cos(theta) * radius,
  y: Math.sin(theta) * radius,
});

const PeriodBlockCircleItem: React.FC<Props> = (props) => {
  const newCords = getCircleItemPosition(props.theta, props.radius);

  return (
    <StyledPeriodsBlockCircleItem
      positionx={props.radius + newCords.x}
      positiony={props.radius - newCords.y}
    >
      1
    </StyledPeriodsBlockCircleItem>
  );
};

export default PeriodBlockCircleItem;
