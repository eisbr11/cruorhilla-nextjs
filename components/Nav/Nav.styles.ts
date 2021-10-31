import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  nav: {
    zIndex: 10,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoLink: {
    width: 50,
    padding: theme.spacing(1, 0),
  },
  list: {
    listStyle: 'none',
    textAlign: 'center',
    margin: 0,
    marginLeft: 'auto',
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
  },
  listItem: {
    padding: theme.spacing(0, 1),
  },
  [theme.breakpoints.down('sm')]: {
    navMenu: {
      position: 'fixed',
      width: '100%',
      transition: 'left 300ms ease',
      right: 0,
      left: '100%',
      top: 0,
      bottom: 0,
      padding: theme.spacing(12, 1, 0),
      backgroundColor: theme.palette.primary.main,
    },
    navMenuActive: {
      left: 0,
    },
    list: {
      marginLeft: 'auto',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      fontSize: 28,
    },
  },
}));

export default useStyles;
