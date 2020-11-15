import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    position: 'absolute',
    left: 0,
    top: '100%',
    width: '100%',

  },
  list: {
    listStyle: 'none',
    overflow: 'hidden',
    background: '#000',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0,
  },
  opened: {
    background: '#F0F',
  },
}));

export default useStyles;
