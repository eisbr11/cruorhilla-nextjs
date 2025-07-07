import { FC } from 'react';

import type { IBlokComponentProps } from 'interfaces/blok.interface';
import ImageTeaser from 'components/ImageTeaser';

const Teaser: FC<IBlokComponentProps> = ({ blok }) => (
  <ImageTeaser headline={blok.headline} image={blok.image} />
);

export default Teaser;
