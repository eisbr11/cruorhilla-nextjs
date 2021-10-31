import { Container } from '@mui/material';

import GigItem from './components/GigItem';
import NoConcertsInfo from './components/NoConcertsInfo';
import useStyles from './GigList.styles';

interface IGigListProps {
  gigs: any;
}

const GigList = ({ gigs }: IGigListProps) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      {(gigs.length > 0) ? (
        gigs.map((gig) => (
          <GigItem gig={gig} key={gig.id} />
        ))
      ) : (
        <NoConcertsInfo />
      )}
    </Container>
  );
};

export default GigList;
