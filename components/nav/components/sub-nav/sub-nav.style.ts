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
    padding: 0,
  },
}));

export default useStyles;
