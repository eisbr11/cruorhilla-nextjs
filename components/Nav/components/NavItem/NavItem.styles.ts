import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'inherit',
    padding: theme.spacing(2, 1),
    fontWeight: theme.typography.fontWeightBold,
    display: 'inline-block',

    '& $linkName::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: 2,
      bottom: -3,
      borderRadius: 4,
      left: 0,
      backgroundColor: theme.palette.primary.contrastText,
      transition: 'all 400ms ease',
      transform: 'scaleX(0)',
    },

    '&:hover $linkName::before': {
      transform: 'scaleX(0.8)',
      transition: 'all 400ms cubic-bezier(0.38, 0.35, 0.21, 1.52)',
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
      backgroundColor: theme.palette.secondary.contrastText,
    },
  },
}));

export default useStyles;
