import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalInner: {
    outline: 0,
  },
  backdrop: {
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
}));

export default useStyles;
