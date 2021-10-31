import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    background: theme.palette.common.black,
    zIndex: 2,
    position: 'relative',
  },
  list: {
    flex: 1,
    listStyle: 'none',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 0,
    padding: theme.spacing(2.5, 10),
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
