import YouTube, { YouTubeProps } from 'react-youtube';
import { Typography } from '@mui/material';

import { getYoutubeThumbnailUrl } from '@utils/youtubeThumbnail';
import VideoFacade from '@components/VideoFacade';
import { DivEmbedWrapper, DivWrapper } from './VideoItem.styles';

interface IVideoItemProps {
  title: string;
  ytId: string;
}

const VideoItem = ({ title, ytId }: IVideoItemProps) => {
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
      <DivEmbedWrapper>
        <VideoFacade
          thumbnailImageUrl={getYoutubeThumbnailUrl(ytId, 'sddefault')}
          imageAlt={`${title} Youtube Thumbnail`}
        >
          <YouTube
            videoId={ytId}
            opts={youtubeOptions}
          />
        </VideoFacade>
      </DivEmbedWrapper>
      <Typography color="textPrimary" variant="h5" align="center">
        {title}
      </Typography>
    </DivWrapper>
  );
};

export default VideoItem;
