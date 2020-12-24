import SbEditable, { SbEditableContent } from 'storyblok-react';

import { TypographyMarkdownViewer } from '@components/markdown';

const Richtext = ({
  blok,
}: {
  blok: SbEditableContent,
}) => (
  <SbEditable content={blok}>
    <TypographyMarkdownViewer typographyProps={{ align: blok.textAlign }} content={blok.content} />
  </SbEditable>
);

export default Richtext;
