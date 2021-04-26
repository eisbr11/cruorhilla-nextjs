import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 500,
    paddingTop: theme.spacing(2),

    transitionDuration: '600ms',
    transitionTimingFunction: 'cubic-bezier(0.24, 0, 0.64, 1)',
    transitionDelay: '0ms',
    willChange: 'transform, opacity',
    transform: 'translate3d(0px, 100px, 0px)',
    opacity: 0,

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      rowDirection: 'row',
    },
  },
  containerVisible: {

    transform: 'translate3d(0px, 0px, 0px)',
    opacity: 1,
  },
  image: {
    transform: 'rotate(20deg)',
  },
  imageWrapper: {
    height: '50vh',
    minHeight: 280,
    maxHeight: 360,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      marginRight: theme.spacing(3),
    },
  },
  contentWrapper: {
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
    },
  },
}));

export default useStyles;
