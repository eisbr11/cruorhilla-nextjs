import { styled } from '@mui/material/styles';

export const DivImageWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  flex: 1,
  minHeight: 250,
  maxWidth: '100%',
  height: '100%',

  [theme.breakpoints.up('sm')]: {
    flexBasis: '50%',
    minHeight: 300,
  },
}));
