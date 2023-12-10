import React, { Dispatch, SetStateAction } from 'react';
import StyledPeriodBlocksPaginationItem from './PeriodBlocksPaginationItem.style';

type Props = {
  selectedPeriod: number;
  setPeriod: Dispatch<SetStateAction<number>>;
  periodIndex: number;
};

const PeriodBlocksPaginationItem: React.FC<Props> = (props) => {
  const [opacity, setOpacity] = React.useState<number>(0.1);

  const onClickPaginationBulletHandler = () => {
    props.setPeriod(props.selectedPeriod);
  };

  React.useEffect(() => {
    if (props.selectedPeriod !== props.periodIndex) {
      setOpacity(0.5);
      return;
    }

    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 250);
    return () => clearTimeout(timeout);
  }, [props.selectedPeriod, props.periodIndex]);

  return (
    <StyledPeriodBlocksPaginationItem
      $opacity={opacity}
      onClick={onClickPaginationBulletHandler}
    ></StyledPeriodBlocksPaginationItem>
  );
};

export default PeriodBlocksPaginationItem;
