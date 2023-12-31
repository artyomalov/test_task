import React from 'react';
import StyledPeriodCircleTitle from './periodCircleTitle.style';
import { isVisible } from '@testing-library/user-event/dist/utils';

type Props = {
  titleText: string;
  isVisible: number;
};

const PeriodCircleTitle: React.FC<Props> = React.memo((props) => {
  // const [visible, setVisible] = React.useState<number>(0);

  // React.useEffect(() => {
  //   setVisible(0);
  //   const timeout = setTimeout(() => {
  //     setVisible(props.isVisible);
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, [props.isVisible]);

  return (
    <StyledPeriodCircleTitle $visible={props.isVisible ? 1 : 0}>
      {props.titleText}
    </StyledPeriodCircleTitle>
  );
});

export default PeriodCircleTitle;
