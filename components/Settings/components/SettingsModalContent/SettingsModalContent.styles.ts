import { Paper, styled, Typography } from '@mui/material';

export const ContentWrapStyled = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 2, 3),
  outline: 'none',
}));

export const DescriptionStyled = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));
