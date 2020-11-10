import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    position: 'sticky',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    border: '1px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
  },
  logo: {
    fontSize: 30,
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
    ':hover': {
      color: theme.palette
    }
  },
  sublist: {
    listStyle: 'none',
    display: 'none',
  },
}));

export default useStyles;
