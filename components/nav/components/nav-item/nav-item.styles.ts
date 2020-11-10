import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'white',
    padding: theme.spacing(1),
  },
  onlyOpenLink: {
    color: '#fdfd03',
  },
}));

export default useStyles;
