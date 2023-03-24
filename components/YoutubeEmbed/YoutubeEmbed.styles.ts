import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: theme.palette.background.paper,
    minHeight: 320,
    position: 'relative',
  },
}));

export default useStyles;
