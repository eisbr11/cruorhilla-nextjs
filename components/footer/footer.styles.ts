import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.common.black,
  },
  list: {
    flex: 1,
    listStyle: 'none',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 10,
  },
  listItem: {
    padding: 10,
  },
  link: {
    fontSize: theme.typography.fontSize.toFixed(14),
  },
}));

export default useStyles;
