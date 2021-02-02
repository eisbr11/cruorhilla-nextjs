import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: theme.palette.primary.dark,
  },
  content: {
    flex: 1,
    zIndex: 2,
  },
}));

export default useStyles;
