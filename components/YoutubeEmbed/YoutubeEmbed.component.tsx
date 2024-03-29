import YouTube, { YouTubeProps } from 'react-youtube';

import { getYoutubeThumbnailUrl } from '@utils/youtubeThumbnail';
import VideoFacade from '@components/VideoFacade';
import useStyles from './YoutubeEmbed.styles';

interface IYoutubeEmbedProps {
  ytId: string,
}

const YoutubeEmbed = ({ ytId }: IYoutubeEmbedProps) => {
  const classes = useStyles();
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
    <div className={classes.wrapper}>
      <VideoFacade
        thumbnailImageUrl={getYoutubeThumbnailUrl(ytId, 'sddefault')}
        imageAlt='Youtube-Video Thumbnail'
      >
        <YouTube
          videoId={ytId}
          opts={youtubeOptions}
        />
      </VideoFacade>
    </div>
  );
};

export default YoutubeEmbed;
