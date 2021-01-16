import { Container } from '@material-ui/core';
import GigItem from './components/gigItem';

const GigList = ({
  gigs,
}: {
  gigs: any,
}) => (
  <Container maxWidth="lg">
    {gigs.map((gig) => (
      <GigItem gig={gig} key={gig.id} />
    ))}
  </Container>
);

export default GigList;
