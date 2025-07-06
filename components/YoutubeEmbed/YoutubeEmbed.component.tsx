import YouTube, { YouTubeProps } from 'react-youtube';

import { getYoutubeThumbnailUrl } from 'utils/youtubeThumbnail';
import VideoFacade from 'components/VideoFacade';
import { DivWrapper } from './YoutubeEmbed.styles';

interface IYoutubeEmbedProps {
  ytId: string,
}

const YoutubeEmbed = ({ ytId }: IYoutubeEmbedProps) => {
  const youtubeOptions: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      showinfo: 0,
      controls: 2,
    },
  };

  return (
    <DivWrapper>
      <VideoFacade
        thumbnailImageUrl={getYoutubeThumbnailUrl(ytId, 'sddefault')}
        imageAlt='Youtube-Video Thumbnail'
      >
        <YouTube
          videoId={ytId}
          opts={youtubeOptions}
        />
      </VideoFacade>
    </DivWrapper>
  );
};

export default YoutubeEmbed;
