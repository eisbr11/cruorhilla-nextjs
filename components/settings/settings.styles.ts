import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrap: {
    backgroundColor: theme.palette.background.paper,
    border: `5px solid ${theme.palette.secondary.main}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 3),
    outline: 'none',
  },
}));

export default useStyles;
