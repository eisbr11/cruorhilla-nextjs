import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const ContainerStyled = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2, 4),
}));
