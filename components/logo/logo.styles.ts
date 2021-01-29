import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: '100%',
    verticalAlign: 'middle',
    transition: 'color 300ms ease',

    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;
