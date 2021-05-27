import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    zIndex: 20,
    bottom: 18,
    right: theme.spacing(2.5),
  },
}));

export default useStyles;
