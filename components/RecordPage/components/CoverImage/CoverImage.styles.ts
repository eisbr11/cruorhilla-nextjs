import { styled } from '@mui/material/styles';

export const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  maxWidth: '100%',
  border: `5px solid ${theme.palette.secondary.main}`,
  borderRadius: 5,
  marginBottom: theme.spacing(2),
}));
