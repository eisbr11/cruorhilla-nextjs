import { styled } from '@mui/material/styles';

const GStyled = styled('g')(() => ({
  animation: 'rotate 7s infinite linear',
  transformOrigin: 'center',
  '@keyframes rotate': {
    '0%': {
      transform: 'scale(1.5) rotate(0deg) skew(5deg)',
    },
    '50%': {
      transform: 'scale(1.5) rotate(180deg) skew(5deg)',
    },
    '100%': {
      transform: 'scale(1.5) rotate(360deg) skew(5deg)',
    },
  },
}));

const SvgStyled = styled('svg')(() => ({
  flex: 1,
  verticalAlign: 'middle',
}));

export const BackgroundSvg = () => (
  <SvgStyled xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'>
    <GStyled>
      <circle fill='#331845' cx='400' cy='400' r='900' />
      <circle fill='#421d5b' cx='400' cy='400' r='800' />
      <circle fill='#331845' cx='400' cy='400' r='700' />
      <circle fill='#421d5b' cx='400' cy='400' r='600' />
      <circle fill='#331845' cx='400' cy='400' r='500' />
      <circle fill='#421d5b' cx='400' cy='400' r='400' />
      <circle fill='#331845' cx='400' cy='400' r='300' />
      <circle fill='#421d5b' cx='400' cy='400' r='200' />
      <circle fill='#331845' cx='400' cy='400' r='100' />
    </GStyled>
  </SvgStyled>
);

export const DivContainer = styled('div')(() => ({
  width: '100vw',
  display: 'flex',
  height: '100vh',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: 1,
  opacity: 0.8,
}));
