import React from 'react';
import StyledPediodsBlock from './PeriodsBlock.style';
import PeriodBlockYear from '../periodsBlockYear/PeriodBlockYear';
import PeriodBlockSlider from '../periodBlockSlider/PeriodBlockSlider';
import PeriodBlockSelectPeriodArrorsContainer from '../periodBlockArrorsContainer/PeriodBlockArrorsContainer';
import PeriodsBlockSelectionCircle from '../periodsBlockSelectionCircle/PeriodsBlockSelectionCircle';
import createRange from '../../services/createRange';
import ScreenWidthComponentSelector from '../../serviceComponents/ScreenWidthComponentSelector';
import PeriodsBlockPagination from '../periodsBlockPagination/PeriodsBlockPagination';
import { PeriodType } from '../../types';

type Props = {
  periodsList: PeriodType[];
  circleRadius: number;
};

const PeriodsBlock: React.FC<Props> = (props) => {
  const [windowWidth, setWindowWidth] = React.useState<number>(
    window.innerWidth
  );
  React.useEffect(() => {
    const handleResizeWindow = () => setWindowWidth(window.outerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);
  const [periodIndex, setPeriodIndex] = React.useState<number>(0);
  const [rotationAngle, setRotationAngle] = React.useState<number>(0);
  const breakpoint = 320;
  const periodsQuantity = props.periodsList.length;
  const selectedPeriod = props.periodsList[periodIndex];
  const angle = 360 / periodsQuantity;
  const periodsBlocInitialData = React.useMemo<{
    indexPeriodLimit: number;
    theta: number;
  }>(() => {
    const indexPeriodLimit = periodsQuantity - 1;
    const angle = 360 / periodsQuantity;
    const theta = (Math.PI * props.circleRadius * angle) / -180;
    return {
      indexPeriodLimit,
      theta,
    };
  }, [periodsQuantity, props.circleRadius]);
  let hasNextatLeft = true;
  let hasNextatRight = true;
  if (periodIndex === periodsBlocInitialData.indexPeriodLimit)
    hasNextatRight = false;
  if (periodIndex === 0) hasNextatLeft = false;
  const onClickPeriodSelectorHandler = (selectedPeriod: number) => {
    if (selectedPeriod === periodIndex) return;

    setPeriodIndex(selectedPeriod);

    const newAngle = 360 - selectedPeriod * angle;
    setRotationAngle(newAngle);
  };
  const onClickArrorHandler = (changeValue = 1) => {
    if (
      (periodIndex >= periodsBlocInitialData.indexPeriodLimit &&
        changeValue === 1) ||
      (periodIndex <= 0 && changeValue === -1)
    )
      return;

    setPeriodIndex((prev) => {
      return prev + changeValue;
    });
    const newAngle = 360 - (periodIndex + changeValue) * angle;
    setRotationAngle(newAngle);
  };
  return (
    <StyledPediodsBlock>
      <ScreenWidthComponentSelector
        currentWindowWidth={windowWidth}
        breakpoint={breakpoint}
      >
        <div className="periods-block__lines-container">
          {createRange(0, 2).map((item) => (
            <div key={item} className="periods-block__blue-line"></div>
          ))}
          <div className="periods-block__gradient-stripe"></div>
        </div>
        <></>
      </ScreenWidthComponentSelector>
      <div className="periods-block__title-container">
        <h2 className="periods-block__title">Исторические даты</h2>
      </div>
      <div className="periods-block__years">
        <PeriodBlockYear year={selectedPeriod.years.start} color="iris" />
        <PeriodBlockYear year={selectedPeriod.years.end} color="fuschia" />
      </div>
      <ScreenWidthComponentSelector
        currentWindowWidth={windowWidth}
        breakpoint={breakpoint}
      >
        <div className="periods-block__circle">
          <PeriodsBlockSelectionCircle
            periodsQuantity={periodsQuantity}
            currentPeriodIndex={periodIndex}
            radius={265}
            theta={periodsBlocInitialData.theta}
            rotationAngle={rotationAngle}
            onClickPeriodSelectorHandler={onClickPeriodSelectorHandler}
            periodList={props.periodsList}
          />
        </div>
        <></>
      </ScreenWidthComponentSelector>
      <ScreenWidthComponentSelector
        currentWindowWidth={windowWidth}
        breakpoint={breakpoint}
      >
        <div className="periods-block__arrors">
          <p className="periods-block__period-counter">
            0{periodIndex + 1}/0{periodsQuantity}
          </p>
          <PeriodBlockSelectPeriodArrorsContainer
            onClickArrorHandler={onClickArrorHandler}
            hasNextatRight={hasNextatRight}
            hasNextatLeft={hasNextatLeft}
          />
        </div>
        <div className="periods-block__slider">
          <PeriodBlockSlider
            currentWindowWidth={windowWidth}
            breakpoint={breakpoint}
            eventsList={props.periodsList[periodIndex].periodEvents}
            periodTitle={selectedPeriod.title}
          />
        </div>
      </ScreenWidthComponentSelector>
      <ScreenWidthComponentSelector
        currentWindowWidth={windowWidth}
        breakpoint={breakpoint}
      >
        <div className="periods-block__slider">
          <PeriodBlockSlider
            currentWindowWidth={windowWidth}
            breakpoint={breakpoint}
            eventsList={props.periodsList[periodIndex].periodEvents}
            periodTitle={selectedPeriod.title}
          />
        </div>
        <div className="periods-block__arror-pagination">
          <div className="periods-block__arrors">
            <p className="periods-block__period-counter">
              0{periodIndex + 1}/0{periodsQuantity}
            </p>
            <PeriodBlockSelectPeriodArrorsContainer
              onClickArrorHandler={onClickArrorHandler}
              hasNextatRight={hasNextatRight}
              hasNextatLeft={hasNextatLeft}
            />
          </div>
          <div className="periods-block__pagination">
            <PeriodsBlockPagination
              setPeriod={setPeriodIndex}
              indexPeriodLimit={periodsBlocInitialData.indexPeriodLimit}
              periodIndex={periodIndex}
            />
          </div>
        </div>
      </ScreenWidthComponentSelector>
    </StyledPediodsBlock>
  );
};

export default PeriodsBlock;
