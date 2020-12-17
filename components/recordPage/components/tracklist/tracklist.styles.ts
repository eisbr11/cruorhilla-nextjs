import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {

  },
  listItem: {
    padding: 10,
    ':hover': {
      color: theme.palette,
    },
  },
}));

export default useStyles;
