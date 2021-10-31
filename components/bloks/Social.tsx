import SbEditable from 'storyblok-react';

import { IBlokComponentProps } from '@interfaces/blok.interface';
import SocialMediaLinks from '@components/SocialMediaLinks';

const Social = ({ blok }: IBlokComponentProps) => (
  <SbEditable content={blok}>
    <SocialMediaLinks />
  </SbEditable>
);

export default Social;
