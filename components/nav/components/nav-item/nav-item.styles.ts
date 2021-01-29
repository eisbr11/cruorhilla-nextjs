import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2, 1),
    fontWeight: theme.typography.fontWeightBold,
    display: 'inline-block',
    transition: 'color 300ms ease',

    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  linkName: {
    position: 'relative',
  },
  subNavLink: {
    position: 'relative',
    color: theme.palette.secondary.contrastText,
    fontWeight: theme.typography.fontWeightRegular,
    padding: theme.spacing(1, 2),
    display: 'inline-block',

    '& $linkName::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: 2,
      bottom: -3,
      left: 0,
      backgroundColor: theme.palette.secondary.contrastText,
      transition: 'all 300ms ease',
      transform: 'scaleX(0)',
    },

    '&:hover $linkName::before': {
      transform: 'scaleX(0.8)',
    },

    '&:hover': {
      color: theme.palette.secondary.contrastText,
    },
  },
}));

export default useStyles;
