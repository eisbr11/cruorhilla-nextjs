import { DivContainer, StyledButton, ThreeLinesStyled } from './ThreeLinesButton.styles';
import { FC } from 'react';

interface IThreeLinesButtonProps {
  active?: boolean,
  clickHandler?: () => void,
}

const ThreeLinesButton: FC<IThreeLinesButtonProps> = ({
  active = false,
  clickHandler = () => {},
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
