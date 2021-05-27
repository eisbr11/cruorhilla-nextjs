import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    transitionDuration: '600ms',
    transitionTimingFunction: 'cubic-bezier(0.24, 0, 0.64, 1)',
    transitionDelay: '0ms',
    willChange: 'transform, opacity',
    transform: 'translate3d(0px, 100px, 0px)',
    opacity: 0,

    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  imageRight: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  },
  containerVisible: {
    transform: 'translate3d(0px, 0px, 0px)',
    opacity: 1,
  },
  contentWrapper: {
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
    },
  },
  articleImageWrapper: {
    flex: 1,
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
    },
  },
  articleImageWrapperLeft: {
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(8),
    },
  },
  articleImageWrapperRight: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(8),
    },
  },
}));

export default useStyles;
