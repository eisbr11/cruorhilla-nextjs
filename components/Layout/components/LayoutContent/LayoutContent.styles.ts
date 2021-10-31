import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    background: theme.palette.primary.dark,
  },
  content: {
    flex: 1,
    zIndex: 2,
  },
}));

export default useStyles;
