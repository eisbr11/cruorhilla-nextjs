import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '50vh',
    minHeight: 280,
    maxHeight: 360,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
  },
  image: {
    filter: 'grayscale(0.70)!important',
  },
  headline: {
    position: 'absolute',
    fontWeight: 700,
    left: theme.spacing(1),
    bottom: 0,
    textTransform: 'uppercase',
    transform: 'rotate(357deg)',
    wordBreak: 'break-word',
    textShadow: '4px 4px 1px black',
  },
}));

export default useStyles;
