import { styled } from '@mui/material/styles';

export const DivWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  border: `4px solid ${theme.palette.secondary.main}`,
  borderRadius: 8,
}));
