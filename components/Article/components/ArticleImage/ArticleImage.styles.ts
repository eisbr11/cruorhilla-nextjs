import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;
