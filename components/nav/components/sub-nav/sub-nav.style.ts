import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    left: 0,
    top: '100%',
    width: '100%',
    background: theme.palette.secondary.main,
  },
  list: {
    listStyle: 'none',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 0,
  },
  backButton: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
  },
  [theme.breakpoints.down('xs')]: {
    container: {
      position: 'fixed',
      top: '0',
      width: '100%',
      height: '100%',
      background: theme.palette.secondary.main,
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    list: {
      flexDirection: 'column',
    },
    listItem: {
      padding: theme.spacing(1, 0),
    },
  },
  [theme.breakpoints.up('sm')]: {
    backButton: {
      display: 'none',
    },
  },
}));

export default useStyles;
