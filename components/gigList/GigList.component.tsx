import { Container } from '@material-ui/core';

const GigList = ({
  gigs,
}: {
  gigs: any,
}) => (
  <Container maxWidth="lg">
    {gigs.map((gig) => (
      <div key={gig.id}>
        {gig.content.name}
        {gig.content.datum}
      </div>
    ))}
  </Container>
);

export default GigList;
