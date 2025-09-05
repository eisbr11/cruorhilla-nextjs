import { styled, Typography } from '@mui/material';

export const DivWrapper = styled('div')(({ theme }) => ({
  height: '50vh',
  minHeight: 280,
  maxHeight: 460,
  position: 'relative',
  overflow: 'hidden',
  marginBottom: theme.spacing(2),
  '& .image-teaser': {
    filter: 'grayscale(0.70)!important',
  },
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
