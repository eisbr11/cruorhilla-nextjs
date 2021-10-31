import SbEditable from 'storyblok-react';
import ImageTeaser from '@components/ImageTeaser';
import { IBlokComponentProps } from '@interfaces/blok.interface';

const Teaser = ({ blok }: IBlokComponentProps) => (
  <SbEditable content={blok}>
    <ImageTeaser headline={blok.headline} image={blok.image} />
  </SbEditable>
);

export default Teaser;
