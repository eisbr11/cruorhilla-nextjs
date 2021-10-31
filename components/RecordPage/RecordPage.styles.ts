import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    wordBreak: 'break-word',
    padding: theme.spacing(2, 0),
  },
  container: {
    overflow: 'hidden',
  },
}));

export default useStyles;
