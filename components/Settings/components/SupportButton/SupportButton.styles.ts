import { Fab } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FabStyled = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  zIndex: 20,
  bottom: 82,
  right: theme.spacing(2.5),
}));
