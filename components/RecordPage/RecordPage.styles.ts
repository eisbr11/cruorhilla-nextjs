import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    wordBreak: 'break-word',
    padding: theme.spacing(2, 0),
  },
  container: {
    overflow: 'hidden',
  },
}));

export default useStyles;
