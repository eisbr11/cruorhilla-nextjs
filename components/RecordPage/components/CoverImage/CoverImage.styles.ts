import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    maxWidth: '100%',
    border: `5px solid ${theme.palette.secondary.main}`,
    borderRadius: 5,
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
