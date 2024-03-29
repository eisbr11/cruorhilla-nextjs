import ContentLink from './ContentLink';
import Feature from './Feature';
import Friend from './Friend';
import Placeholder from './Placeholder';
import Teaser from './Teaser';
import Social from './Social';
import Richtext from './Richtext';
import Headline from './Headline';
// eslint-disable-next-line import/no-cycle
import Container from './Container';
// eslint-disable-next-line import/no-cycle
import VideoGrid from './VideoGrid';
import Video from './Video';
import DownloadLink from './DownloadLink';
import IFrameEmbed from './IFrameEmbed';
// eslint-disable-next-line import/no-cycle
import Article from './Article';
// eslint-disable-next-line import/no-cycle
import ArticleDoubleContent from './ArticleDoubleContent';
import YoutubeEmbed from './YoutubeEmbed';
import { IBlokComponentProps } from '@interfaces/blok.interface';
import SimpleImage from './SimpleImage';

const Components = {
  article: Article,
  article_double_content: ArticleDoubleContent,
  feature: Feature,
  friend: Friend,
  teaser: Teaser,
  download_link: DownloadLink,
  iframe_embed: IFrameEmbed,
  social_blok: Social,
  container: Container,
  richtext: Richtext,
  headline: Headline,
  content_link: ContentLink,
  video: Video,
  video_grid: VideoGrid,
  youtube_embed: YoutubeEmbed,
  simple_image: SimpleImage,
};

const Component = ({ blok }: IBlokComponentProps) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const BlokComponent = Components[blok.component];
    return <BlokComponent blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default Component;
