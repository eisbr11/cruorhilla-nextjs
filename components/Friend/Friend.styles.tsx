import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2, 0),
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
    padding: theme.spacing(3),
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 300,
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
