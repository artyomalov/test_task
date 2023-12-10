import StyledArrorsContainer from './PeriodBlockArrorsContainer.style';

type Props = {
  onClickArrorHandler: (changeValue: number) => void;
  hasNextatLeft: boolean;
  hasNextatRight: boolean;
};

const PeriodBlockSelectPeriodArrorsContainer: React.FC<Props> = (props) => {
  return (
    <StyledArrorsContainer
      $opacityLeft={props.hasNextatLeft ? 1 : 0.5}
      $opacityRight={props.hasNextatRight ? 1 : 0.5}
    >
      <div
        className="arrors-container__arror-background"
        onClick={() => props.onClickArrorHandler(-1)}
      >
        <span className="arrors-container__arror arrors-container__arror-left"></span>
      </div>
      <div
        className="arrors-container__arror-background"
        onClick={() => props.onClickArrorHandler(1)}
      >
        <span className="arrors-container__arror arrors-container__arror-right"></span>
      </div>
    </StyledArrorsContainer>
  );
};

export default PeriodBlockSelectPeriodArrorsContainer;
