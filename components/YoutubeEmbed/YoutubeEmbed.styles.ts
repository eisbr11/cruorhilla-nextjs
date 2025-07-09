import { styled } from '@mui/material/styles';

export const DivWrapper = styled('div')(({ theme }) => ({
  background: theme.palette.background.paper,
  minHeight: 320,
  position: 'relative',
}));
