import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    position: 'absolute',
    left: 0,
    top: '100%',
    width: '100%',
    background: '#00F',
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
