import React from 'react';
import StyledPeriodBlockYear from './PeriodBlockYear.style';

type Props = {
  year: number;
  color: string;
};

const PeriodBlockYear: React.FC<Props> = (props) => {
  const [year, setYear] = React.useState<number>(props.year - 5);

  const yearRef = React.useRef<number>(year);
  const propsYearRef = React.useRef<number>(props.year);
  if (propsYearRef.current !== props.year) {
    propsYearRef.current = props.year;

    yearRef.current = props.year - 5;
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (yearRef.current >= props.year - 1) {
        clearInterval(interval);
      }
      yearRef.current = yearRef.current + 1;
      setYear(yearRef.current);
    }, 100);
    return () => clearInterval(interval);
  }, [props.year]);

  return (
    <StyledPeriodBlockYear $color={props.color}>{year}</StyledPeriodBlockYear>
  );
};

export default PeriodBlockYear;
