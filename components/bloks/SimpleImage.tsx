import SbEditable from 'storyblok-react';

import { IBlokComponentProps } from '@interfaces/blok.interface';
import Image from '@components/Image';

const SimpleImage = ({
  blok,
}: IBlokComponentProps) => (
  <SbEditable content={blok}>
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <Image image={blok.image} />
  </SbEditable>
);

export default SimpleImage;
