import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: theme.palette.background.paper,
    minHeight: 320,
    position: 'relative',
  },
  youtubeEmbed: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

export default useStyles;
