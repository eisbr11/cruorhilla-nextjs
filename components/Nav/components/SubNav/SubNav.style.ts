import { styled } from '@mui/material/styles';
import { ButtonBase, Container } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  top: '100%',
  width: '100%',
  background: theme.palette.secondary.main,

  [theme.breakpoints.down('sm')]: {
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '100%',
    background: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    zIndex: 5,
  },
}));

export const UlList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'row',
  padding: theme.spacing(0),

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
}));

export const ButtonBaseBackButton = styled(ButtonBase)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  left: theme.spacing(1),

  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const LiListItem = styled('li')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1, 0),
  },
}));
