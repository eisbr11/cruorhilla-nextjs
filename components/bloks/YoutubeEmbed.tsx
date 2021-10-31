import { IBlokComponentProps } from '@interfaces/blok.interface';
import YoutubeEmbedComponent from '@components/YoutubeEmbed';

const YoutubeEmbed = ({ blok }: IBlokComponentProps) => (
  <YoutubeEmbedComponent ytId={blok.youtube_id} />
);

export default YoutubeEmbed;
