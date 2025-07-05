import { DivContainer, StyledButton, ThreeLinesStyled } from './ThreeLinesButton.styles';

const ThreeLinesButton = ({
  active,
  clickHandler,
}: {
  active?: boolean,
  clickHandler?,
}) => {
  return (
    <DivContainer>
      <StyledButton aria-label="Navigation öffnen" onClick={clickHandler} type="button">
        <ThreeLinesStyled isActive={active} />
      </StyledButton>
    </DivContainer>
  );
};

export default ThreeLinesButton;

ThreeLinesButton.defaultProps = {
  active: false,
  clickHandler: () => {},
};
