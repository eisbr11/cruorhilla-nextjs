import { Container, styled, Typography } from '@mui/material';

export const ContainerStyled = styled(Container)(() => ({
  overflow: 'hidden',
}));

export const TitleStyled = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  wordBreak: 'break-word',
  padding: theme.spacing(2, 0),
}));
