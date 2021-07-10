import { SbEditableContent } from 'storyblok-react';

import ContentLink from './ContentLink';
import Feature from './Feature';
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

const Components = {
  article: Article,
  article_double_content: ArticleDoubleContent,
  feature: Feature,
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
};

const Component = ({ blok }: { blok: SbEditableContent }) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const BlokComponent = Components[blok.component];
    return <BlokComponent blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default Component;
