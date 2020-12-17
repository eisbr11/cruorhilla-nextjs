import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
  },
  subNavLink: {
    color: theme.palette.secondary.contrastText,
  },
}));

export default useStyles;
