import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 0),
    textAlign: 'right',
  },
  expandIcon: {
    userSelect: 'none',
    pointerEvents: 'none',
  },
  expandIconUp: {
    transform: 'rotate(180deg)',
  },
}));

export default useStyles;
