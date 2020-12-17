import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    position: 'sticky',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1, 0),
    zIndex: 1,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
  },
  logoLink: {
    width: 50,
  },
  list: {
    listStyle: 'none',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    marginLeft: 'auto',
    padding: 0,
  },
  listItem: {
    padding: 10,
  },
}));

export default useStyles;
