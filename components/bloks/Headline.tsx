import SbEditable, { SbEditableContent } from 'storyblok-react';
import { Typography } from '@mui/material';

import { MarkdownViewer } from '@components/Markdown';

const Headline = ({
  blok,
}: {
  blok: SbEditableContent,
}) => (
  <SbEditable content={blok}>
    <Typography variant={blok.variant} align={blok.textAlign}>
      <MarkdownViewer content={blok.title} />
    </Typography>
  </SbEditable>
);

export default Headline;
