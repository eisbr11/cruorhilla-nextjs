import SbEditable, { SbEditableContent } from 'storyblok-react';

import SocialMediaLinks from '@components/SocialMediaLinks';

const Social = ({ blok }: { blok: SbEditableContent }) => (
  <SbEditable content={blok}>
    <SocialMediaLinks />
  </SbEditable>
);

export default Social;
