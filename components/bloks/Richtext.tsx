import SbEditable, { SbEditableContent } from 'storyblok-react';
import { Typography } from '@material-ui/core';
import MarkedViewer from '@components/markdown';

const Richtext = ({
  blok,
}: {
  blok: SbEditableContent,
}) => (
  <SbEditable content={blok}>
    <Typography align={blok.textAlign}>
      <MarkedViewer content={blok.content} />
    </Typography>
  </SbEditable>
);

export default Richtext;
