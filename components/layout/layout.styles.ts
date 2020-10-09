import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  container: {
    flex: 1,
    width: '300px',
    margin: 'auto',
    background: theme.colorPrimary,
  },
}));

export default useStyles;
