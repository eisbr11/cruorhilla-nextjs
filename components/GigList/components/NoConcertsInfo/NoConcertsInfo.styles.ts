import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
  },
}));

export default useStyles;
