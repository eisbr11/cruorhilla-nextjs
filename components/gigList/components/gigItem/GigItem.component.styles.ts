import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  itemWrapper: {
    marginBottom: theme.spacing(3),
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
  },
}));

export default useStyles;
