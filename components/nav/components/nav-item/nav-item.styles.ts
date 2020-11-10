import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  link: {
    color: 'white',
    padding: '5px',
  },
  onlyOpenLink: {
    color: '#fdfd03',
  },
}));

export default useStyles;
