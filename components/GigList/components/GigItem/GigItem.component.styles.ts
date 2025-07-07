import Grid2 from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';

export const GridItemWrapper = styled(Grid2)(({ theme }) => ({
  border: `4px solid ${theme.palette.secondary.main}`,
  borderRadius: 8,
  padding: theme.spacing(3),
  marginBottom: theme.spacing(2),
}));

export const SpanPriceLabel = styled('span')(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

export const SpanPriceValue = styled('span')(() => ({
  whiteSpace: 'nowrap',
}));
