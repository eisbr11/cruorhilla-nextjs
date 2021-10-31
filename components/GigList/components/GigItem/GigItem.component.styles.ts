import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  itemWrapper: {
    border: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: 8,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  priceLabel: {
    fontWeight: theme.typography.fontWeightBold,
  },
  priceValue: {
    whiteSpace: 'nowrap',
  },
}));

export default useStyles;
