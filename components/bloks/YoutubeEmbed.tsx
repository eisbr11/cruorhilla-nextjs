import { SbEditableContent } from 'storyblok-react';

import YoutubeEmbedComponent from '@components/YoutubeEmbed';

const YoutubeEmbed = ({
  blok,
}: {
  blok: SbEditableContent,
}) => (
  <YoutubeEmbedComponent ytId={blok.youtube_id} />
);

export default YoutubeEmbed;
