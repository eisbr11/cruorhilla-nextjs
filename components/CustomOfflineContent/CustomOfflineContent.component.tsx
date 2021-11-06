import useStyles from '@components/CustomOfflineContent/CustomOfflineContent.styles';
import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const CustomOfflineContentComponent = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography align="center" variant="h1" mb={3}>Ey, wo ist dein Internet??</Typography>
      <Typography align="center" variant="h2" mb={4}>Ohne Internet funktioniert das hier leider nicht</Typography>
      <Typography mb={3} align="center" variant="body1">
        {'Lad mal neu, sobald du wieder Internet hast. Dann funktioniert das hier auch wieder!'}
      </Typography>
      <Link href="/" passHref>
        <Button
          size="large"
          variant="contained"
          color="secondary"
        >Zur Startseite</Button>
      </Link>
    </Container>
  );
};

export default CustomOfflineContentComponent;
