import { styled } from '@mui/material/styles';

export const DivWrapper = styled('div')(({ theme }) => ({
  border: `5px solid ${theme.palette.secondary.main}`,
  borderRadius: 5,
  background: theme.palette.background.paper,
}));

export const DivEmbedWrapper = styled('div')(() => ({
  position: 'relative',
  paddingBottom: '56.25%',
}));
