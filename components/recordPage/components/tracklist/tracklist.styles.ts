import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  list: {
    listStyle: 'none',
    padding: 0,
    margin: theme.spacing(0, 0, 2),
  },
  listItem: {
    padding: theme.spacing(0, 0, 1),
    display: 'flex',
    fontSize: theme.typography.body1.fontSize,
  },
  number: {
    display: 'inline-block',
    color: theme.palette.secondary.main,
    marginRight: theme.spacing(2),
    width: 40,
    textAlign: 'right',
    fontWeight: theme.typography.fontWeightBold,
  },
  song: {
    display: 'inline-block',
  },
}));

export default useStyles;
