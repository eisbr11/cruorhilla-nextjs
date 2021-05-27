import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  contentWrap: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 3),
    outline: 'none',
  },
  description: {
    marginBottom: theme.spacing(4),
  },
}));

export default useStyles;
