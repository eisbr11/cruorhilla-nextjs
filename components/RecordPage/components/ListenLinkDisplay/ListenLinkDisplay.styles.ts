import { makeStyles } from '@material-ui/core/styles';

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
