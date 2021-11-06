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
}));

export default useStyles;
