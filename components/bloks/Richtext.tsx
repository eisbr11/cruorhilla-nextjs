import { TypographyMarkdownViewer } from '@components/Markdown';
import { IBlokComponentProps } from '@interfaces/blok.interface';

const Richtext = ({ blok }: IBlokComponentProps) => (
  <TypographyMarkdownViewer typographyProps={{ align: blok.textAlign }} content={blok.content} />
);

export default Richtext;
