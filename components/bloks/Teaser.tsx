import SbEditable, { SbEditableContent } from 'storyblok-react';

const Teaser = ({ blok }: { blok: SbEditableContent }) => (
  <SbEditable content={blok}>
    <div>
      <h2>{blok.headline}</h2>
    </div>
  </SbEditable>
);

export default Teaser;
