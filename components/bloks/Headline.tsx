import SbEditable from 'storyblok-react';
import { Typography } from '@mui/material';

import { IBlokComponentProps } from '@interfaces/blok.interface';
import { MarkdownViewer } from '@components/Markdown';

const Headline = ({
  blok,
}: IBlokComponentProps) => (
  <SbEditable content={blok}>
    <Typography variant={blok.variant} align={blok.textAlign}>
      <MarkdownViewer content={blok.title} />
    </Typography>
  </SbEditable>
);

export default Headline;
