import { SbEditableContent } from 'storyblok-react';

const IFrameEmbed = ({ blok }: { blok: SbEditableContent }) => (
  // eslint-disable-next-line react/no-danger
  <div dangerouslySetInnerHTML={{ __html: blok.code }} />
);

export default IFrameEmbed;
