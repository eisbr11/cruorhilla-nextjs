import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  nav: {
    position: 'sticky',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: '#FF00FF',
  },
  container: {
    border: '1px solid red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: [0, 16],
  },
  logo: {
    fontSize: 30,
  },
  list: {
    listStyle: 'none',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    marginLeft: 'auto',
    padding: 0,
  },
  listItem: {
    padding: 10,
  },
  sublist: {
    listStyle: 'none',
    display: 'none',
  },
}));

export default useStyles;
