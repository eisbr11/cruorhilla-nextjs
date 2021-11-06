import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    zIndex: 20,
    bottom: 82,
    right: theme.spacing(2.5),
  },
}));

export default useStyles;
