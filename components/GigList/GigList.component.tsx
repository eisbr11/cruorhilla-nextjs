import { Container } from '@material-ui/core';

import GigItem from './components/gigItem';
import NoConcertsInfo from './components/noConcertsInfo';
import useStyles from './GigList.styles';

const GigList = ({
  gigs,
}: {
  gigs: any,
}) => {
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
