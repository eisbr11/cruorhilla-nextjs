import { Fab, styled } from '@mui/material';

export const FabStyled = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  zIndex: 20,
  bottom: 18,
  right: theme.spacing(2.5),
}));
