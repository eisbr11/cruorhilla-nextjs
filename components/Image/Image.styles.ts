import { styled } from '@mui/material/styles';

export const DivContainer = styled('div')(({ theme }) => ({
  margin: theme.spacing(2, 0),
  border: `4px solid ${theme.palette.secondary.main}`,
  borderRadius: 8,
  padding: theme.spacing(2),
}));

export const DivImageWrapper = styled('div')(() => ({
  position: 'relative',
  width: '100%',
  height: 500,
}));
