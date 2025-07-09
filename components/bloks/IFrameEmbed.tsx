import { IBlokComponentProps } from 'interfaces/blok.interface';

const IFrameEmbed = ({ blok }: IBlokComponentProps) => (
  // eslint-disable-next-line @eslint-react/dom/no-dangerously-set-innerhtml
  <div dangerouslySetInnerHTML={{ __html: blok.code }} />
);

export default IFrameEmbed;
