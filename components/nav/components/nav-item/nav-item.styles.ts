import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2, 1),
    fontWeight: theme.typography.fontWeightBold,
    display: 'inline-block',
  },
  subNavLink: {
    color: theme.palette.secondary.contrastText,
    fontWeight: theme.typography.fontWeightRegular,
    padding: theme.spacing(1, 2),
    display: 'inline-block',
  },
}));

export default useStyles;
