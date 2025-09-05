import { styled } from '@mui/material/styles';

export const DivContainer = styled('div')(() => ({
  width: '100vw',
  display: 'flex',
  height: '100vh',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: 1,
  opacity: 0.8,
}));

const SvgStyled = styled('svg')(() => ({
  flex: 1,
  width: '100%',
  height: '100%',
  verticalAlign: 'middle',
}));

export const BackgroundSvg = () => (
  <SvgStyled
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 360 360'
    aria-label='Wand mit aufgetragener Farbe (SVG)'
    preserveAspectRatio='xMidYMid slice'
  >
    <defs>
      <filter id='plasterTex' x='0' y='0' width='100%' height='100%'>
        <animate
          href='#noise'
          attributeName='numOctaves'
          values='1;10;1'
          dur='21s'
          repeatCount='indefinite'
        />
        <animate
          href='#noise'
          attributeName='seed'
          values='0;100;0'
          dur='15s'
          repeatCount='indefinite'
        />
        <feTurbulence
          id='noise'
          type='fractalNoise'
          baseFrequency='0.3'
          numOctaves='10'
          seed='100'
        />
        <feColorMatrix in='n' type='saturate' values='0.5' result='mono' />
        <feBlend in='SourceGraphic' in2='mono' mode='multiply' />
      </filter>
    </defs>

    <rect width='100%' height='100%' fill='#c16b51' />
    <rect width='100%' height='100%' fill='#c16b51' filter='url(#plasterTex)' />
  </SvgStyled>
);
