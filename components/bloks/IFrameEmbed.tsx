import { IBlokComponentProps } from 'interfaces/blok.interface';

const IFrameEmbed = ({ blok }: IBlokComponentProps) => (
  // eslint-disable-next-line react/no-danger
  <div dangerouslySetInnerHTML={{ __html: blok.code }} />
);

export default IFrameEmbed;
