import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    display: 'flex',
    height: '100vh',
    position: 'fixed',
    overflow: 'hidden',
    zIndex: 1,
    opacity: 0.8,
  },
  image: {
    flex: 1,
    verticalAlign: 'middle',
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'scale(1.5) rotate(0deg) skew(5deg)',
    },
    '50%': {
      transform: 'scale(1.5) rotate(180deg) skew(5deg)',
    },
    '100%': {
      transform: 'scale(1.5) rotate(360deg) skew(5deg)',
    },
  },
  gClass: {
    animation: '$rotate 7s infinite linear',
    transformOrigin: 'center',
  },
}));

export default useStyles;
