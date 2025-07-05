import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));
