import { styled, Typography } from '@mui/material';
import Image from 'next/image';

export const DivWrapper = styled('div')(({ theme }) => ({
  height: '50vh',
  minHeight: 280,
  maxHeight: 360,
  position: 'relative',
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
}));

export const StyledImage = styled(Image)(() => ({
  filter: 'grayscale(0.70)!important',
}));

export const TypographyHeadline = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  fontWeight: 700,
  left: theme.spacing(1),
  bottom: 0,
  textTransform: 'uppercase',
  transform: 'rotate(357deg)',
  wordBreak: 'break-word',
  textShadow: '4px 4px 1px black',
}));
