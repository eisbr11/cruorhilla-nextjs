import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    height: 120,
    width: 120,
  },
  videoWrapper: {
    '& iframe': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
}));

export default useStyles;
