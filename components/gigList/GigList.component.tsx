import { Container } from '@material-ui/core';

import GigItem from './components/gigItem';
import NoConcertsInfo from './components/noConcertsInfo';

const GigList = ({
  gigs,
}: {
  gigs: any,
}) => (
  <Container maxWidth="lg">
    {(gigs.length > 0) ? (
      gigs.map((gig) => (
        <GigItem gig={gig} key={gig.id} />
      ))
    ) : (
      <NoConcertsInfo />
    )}
  </Container>
);

export default GigList;
