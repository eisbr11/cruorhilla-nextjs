import SbEditable, { SbEditableContent } from 'storyblok-react';
import ImageTeaser from '@components/ImageTeaser';

const Teaser = ({ blok }: { blok: SbEditableContent }) => (
  <SbEditable content={blok}>
    <ImageTeaser headline={blok.headline} image={blok.image} />
  </SbEditable>
);

export default Teaser;
