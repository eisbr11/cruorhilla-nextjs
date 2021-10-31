import YouTube, { Options } from 'react-youtube';
import { Typography } from '@mui/material';

import useStyles from './VideoItem.styles';

const VideoItem = ({
  title,
  ytId,
}: {
  title: string,
  ytId: string,
}) => {
  const classes = useStyles();
  const youtubeOptions: Options = {
    height: '390',
    width: '640',
    playerVars: {
      showinfo: 0,
      controls: 2,
    },
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.embedWrapper}>
        <YouTube
          videoId={ytId}
          opts={youtubeOptions}
          className={classes.youtubeEmbed}
        />
      </div>
      <Typography color="textPrimary" variant="h5" align="center">
        {title}
      </Typography>
    </div>
  );
};

export default VideoItem;
