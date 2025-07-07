import { FC } from 'react';

import {
  DivContainer,
  StyledButton,
  ThreeLinesStyled,
} from './ThreeLinesButton.styles';

interface IThreeLinesButtonProps {
  active?: boolean;
  clickHandler?: () => void;
}

const noOp = () => {};

const ThreeLinesButton: FC<IThreeLinesButtonProps> = ({
  active = false,
  clickHandler = noOp,
}) => {
  return (
    <DivContainer>
      <StyledButton
        aria-label='Navigation öffnen'
        onClick={clickHandler}
        type='button'
      >
        <ThreeLinesStyled isActive={active} />
      </StyledButton>
    </DivContainer>
  );
};

export default ThreeLinesButton;
