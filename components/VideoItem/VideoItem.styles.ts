import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}));

export default useStyles;
