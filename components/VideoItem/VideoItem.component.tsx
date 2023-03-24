import YouTube, { YouTubeProps } from 'react-youtube';
import { Typography } from '@mui/material';

import { getYoutubeThumbnailUrl } from '@utils/youtubeThumbnail';
import VideoFacade from '@components/VideoFacade';
import useStyles from './VideoItem.styles';

interface IVideoItemProps {
  title: string;
  ytId: string;
}

const VideoItem = ({ title, ytId }: IVideoItemProps) => {
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
      <div className={classes.embedWrapper}>
        <VideoFacade
          thumbnailImageUrl={getYoutubeThumbnailUrl(ytId, 'sddefault')}
          imageAlt={`${title} Youtube Thumbnail`}
        >
          <YouTube
            videoId={ytId}
            opts={youtubeOptions}
          />
        </VideoFacade>
      </div>
      <Typography color="textPrimary" variant="h5" align="center">
        {title}
      </Typography>
    </div>
  );
};

export default VideoItem;
