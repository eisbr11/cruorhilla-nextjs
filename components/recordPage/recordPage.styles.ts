import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
  },
  container: {
    overflow: 'hidden',
  },
  imageReleaseWrap: {
    paddingRight: theme.spacing(4),
  },
}));

export default useStyles;
