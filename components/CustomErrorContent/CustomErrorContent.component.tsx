import Link from 'next/link';
import { Button, Typography } from '@mui/material';

import { StyledContainer } from './CustomErrorContent.styles';

interface ICustomErrorContentComponentProps {
  errorCode: string;
  errorMessage: string;
}

const CustomErrorContentComponent = ({
  errorCode,
  errorMessage,
}: ICustomErrorContentComponentProps) => (
  <StyledContainer maxWidth='lg'>
    <Typography align='center' variant='h1' mb={3}>
      {errorCode}
    </Typography>
    <Typography align='center' variant='h2' mb={4}>
      {errorMessage}
    </Typography>
    <Typography mb={3} align='center' variant='body1'>
      {'Aber die anderen Seiten funktionieren bestimmt noch alle!'}
    </Typography>
    <Link href='/' passHref>
      <Button size='large' variant='contained' color='secondary'>
        Zur Startseite
      </Button>
    </Link>
  </StyledContainer>
);

export default CustomErrorContentComponent;
