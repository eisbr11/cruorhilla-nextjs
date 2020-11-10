import { createUseStyles } from 'react-jss';
import ITheme from '@themes/theme.interface';

const useStyles = createUseStyles((theme: ITheme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: theme.colorPrimary,
  },
}));

export default useStyles;
