import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.common.black,
    zIndex: 2,
  },
  list: {
    flex: 1,
    listStyle: 'none',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 0,
    padding: theme.spacing(2, 10),
  },
  listItem: {
    padding: theme.spacing(1, 2),
  },
  link: {
    fontSize: theme.typography.fontSize.toFixed(14),
    color: theme.palette.common.white,
  },
}));

export default useStyles;
