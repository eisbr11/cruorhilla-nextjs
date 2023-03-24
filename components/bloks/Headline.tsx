import { Typography } from '@mui/material';

import { IBlokComponentProps } from '@interfaces/blok.interface';
import { MarkdownViewer } from '@components/Markdown';

const Headline = ({
  blok,
}: IBlokComponentProps) => (
  <Typography variant={blok.variant} align={blok.textAlign}>
    <MarkdownViewer content={blok.title} />
  </Typography>
);

export default Headline;
