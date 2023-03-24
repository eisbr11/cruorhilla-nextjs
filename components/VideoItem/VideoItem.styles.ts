import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: `5px solid ${theme.palette.secondary.main}`,
    borderRadius: 5,
    background: theme.palette.background.paper,
  },
  embedWrapper: {
    position: 'relative',
    paddingBottom: '56.25%',
  },
}));

export default useStyles;
