import SbEditable, { SbEditableContent } from 'storyblok-react';

const Feature = ({ blok }: { blok: SbEditableContent }) => (
  <SbEditable content={blok}>
    <div>
      <h2>{blok.name}</h2>
    </div>
  </SbEditable>
);

export default Feature;
