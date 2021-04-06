import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
  image: {
    filter: 'blur(0.75)',
  },
  imageWrapper: {
    height: '50vh',
    minHeight: 280,
    maxHeight: 360,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
