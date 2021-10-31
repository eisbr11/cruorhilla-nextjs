import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    border: `5px solid ${theme.palette.primary.main}`,
    overflow: 'hidden',
    borderRadius: 5,
    transition: 'all 300ms ease',
  },
  infoContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  image: {
    filter: '',
  },
  link: {
    '&:hover $name': {
      color: theme.palette.text.secondary,
    },
    '&:hover $imageContainer': {
      borderColor: theme.palette.secondary.main,
      borderRadius: 30,
    },
    '&:hover $image': {
      transform: 'zoom(1)',
    },
  },
  name: {
    color: theme.palette.primary.contrastText,
    transition: 'color 300ms ease',
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default useStyles;
