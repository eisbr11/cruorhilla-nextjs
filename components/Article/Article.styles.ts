import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
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
  contentWrapper: {
    flex: 1,
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
    },
  },
}));

export default useStyles;
