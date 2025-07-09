import { styled } from '@mui/material/styles';
import { AppBar, Container } from '@mui/material';
import Link from 'next/link';

export const AppBarNav = styled(AppBar)(() => ({
  zIndex: 10,
}));

export const StyledContainer = styled(Container)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const AnchorLogoLink = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  width: 50,
  padding: theme.spacing(1, 0),
}));

export const UlList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  textAlign: 'center',
  margin: 0,
  marginLeft: 'auto',
  padding: 0,
  display: 'flex',
  flexDirection: 'row',

  [theme.breakpoints.down('sm')]: {
    marginLeft: 'auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    fontSize: 28,
  },
}));

export const LiListItem = styled('li')(({ theme }) => ({
  padding: theme.spacing(0, 1),
}));

interface INavMenuStyledProps {
  isActive: boolean;
}

export const NavMenuStyled = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<INavMenuStyledProps>(({ theme, isActive }) => ({
  [theme.breakpoints.down('sm')]: {
    position: 'fixed',
    width: '100%',
    transition: 'left 300ms ease',
    right: 0,
    left: '100%',
    top: 0,
    bottom: 0,
    padding: theme.spacing(12, 1, 0),
    backgroundColor: theme.palette.primary.main,
    ...(isActive && {
      left: 0,
    }),
  },
}));
