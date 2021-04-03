import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    wordBreak: 'break-word',
  },
  container: {
    overflow: 'hidden',
  },
  imageReleaseWrap: {
    paddingRight: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
