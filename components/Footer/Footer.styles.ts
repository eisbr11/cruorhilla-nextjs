import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const FooterContainer = styled('footer')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  background: theme.palette.common.black,
  zIndex: 2,
  position: 'relative',
}));

export const UlList = styled('ul')(({ theme }) => ({
  flex: 1,
  listStyle: 'none',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: 0,
  padding: theme.spacing(2.5, 10),
}));

export const LiListItem = styled('li')(({ theme }) => ({
  padding: theme.spacing(1, 2),
}));

export const AnchorLink = styled(Link)(({ theme }) => ({
  fontSize: theme.typography.fontSize.toFixed(14),
  color: theme.palette.common.white,
}));
