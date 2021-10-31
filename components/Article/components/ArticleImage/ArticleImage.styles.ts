import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    flex: 1,
    minHeight: 250,
    maxWidth: '100%',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      flexBasis: '50%',
      minHeight: 300,
    },
  },
}));

export default useStyles;
