import { Grid, styled } from '@mui/material';

export const GridContainer = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  border: `4px solid ${theme.palette.secondary.main}`,
  borderRadius: 8,
  padding: theme.spacing(3),
}));

export const DivImageWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 300,
  marginBottom: theme.spacing(2),
}));
