import Link from 'next/link';
import { Button, Container, Typography } from '@mui/material';
import useStyles from './CustomErrorContent.styles';

const CustomErrorContentComponent = ({
  errorCode,
  errorMessage,
}: {
  errorCode: string,
  errorMessage: string
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="lg">
      <Typography align="center" variant="h1" mb={3}>{errorCode}</Typography>
      <Typography align="center" variant="h2" mb={4}>{errorMessage}</Typography>
      <Typography mb={3} align="center" variant="body1">
        {'Hey, hast du dich verlaufen? Hier gibt es leider nichts zu sehen. Sorry!'}
      </Typography>
      <Link href="/">
        <Button
          size="large"
          variant="contained"
          color="secondary"
        >Zurück nach Hause</Button>
      </Link>
    </Container>
  );
};

export default CustomErrorContentComponent;
