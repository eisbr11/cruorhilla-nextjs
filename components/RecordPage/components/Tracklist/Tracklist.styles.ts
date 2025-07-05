import { styled } from '@mui/material/styles';

export const UlList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: theme.spacing(0, 0, 2),
}));

export const LiListItem = styled('li')(({ theme }) => ({
  padding: theme.spacing(0, 0, 1),
  display: 'flex',
  fontSize: theme.typography.body1.fontSize,
}));

export const SpanNumber = styled('span')(({ theme }) => ({
  display: 'inline-block',
  color: theme.palette.secondary.main,
  marginRight: theme.spacing(2),
  width: 40,
  textAlign: 'right',
  fontWeight: theme.typography.fontWeightBold,
}));

export const SpanSong = styled('span')(() => ({
  display: 'inline-block',
}));
