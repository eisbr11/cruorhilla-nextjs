import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  button: {
    width: 40,
    height: 40,
    margin: 0,
    padding: 0,
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    verticalAlign: 'middle',
    cursor: 'pointer',
    zIndex: 50,
    position: 'relative',
  },
  lines: {
    position: 'absolute',
    width: '100%',
    height: 4,
    backgroundColor: theme.palette.primary.contrastText,
    marginTop: -2,
    left: 0,
    transition: 'all 300ms ease',
    borderRadius: 3,
    '&:after, &:before': {
      content: '""',
      backgroundColor: theme.palette.primary.contrastText,
      width: '87%',
      height: 4,
      top: 0,
      position: 'absolute',
      right: 0,
      borderRadius: 3,
      transition: 'all 300ms ease',
    },
    '&:after': {
      top: 10,
    },
    '&:before': {
      top: -10,
      left: 0,
    },
  },
  linesActive: {
    backgroundColor: 'transparent',
    '&:after, &:before': {
      width: '100%',
      position: 'absolute',
    },
    '&:after': {
      top: 0,
      transform: 'rotate(45deg)',
    },
    '&:before': {
      top: 0,
      left: 0,
      transform: 'rotate(-45deg)',
    },
  },
}));

export default useStyles;
