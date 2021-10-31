import SbEditable from 'storyblok-react';

import { TypographyMarkdownViewer } from '@components/Markdown';
import { IBlokComponentProps } from '@interfaces/blok.interface';

const Richtext = ({ blok }: IBlokComponentProps) => (
  <SbEditable content={blok}>
    <TypographyMarkdownViewer typographyProps={{ align: blok.textAlign }} content={blok.content} />
  </SbEditable>
);

export default Richtext;
