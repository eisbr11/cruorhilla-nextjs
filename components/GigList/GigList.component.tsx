import { SbEditableContent } from 'storyblok-react';

import GigItem from './components/GigItem';
import NoConcertsInfo from './components/NoConcertsInfo';
import { StyledContainer } from './GigList.styles';

interface IGigListProps {
  gigs: SbEditableContent[];
}

const GigList = ({ gigs }: IGigListProps) => (
  <StyledContainer maxWidth='lg'>
    {gigs.length > 0 ? (
      gigs.map((gig) => <GigItem gig={gig} key={gig.id} />)
    ) : (
      <NoConcertsInfo />
    )}
  </StyledContainer>
);

export default GigList;
