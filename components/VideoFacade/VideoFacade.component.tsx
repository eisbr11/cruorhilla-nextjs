import React, { useState, FC } from 'react';
import { IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Image from 'next/image';

import useStyles from './VideoFacade.styles';
import { IVideoFacadeProps } from '@components/VideoFacade/VideoFacade.type';

const VideoFacade: FC<IVideoFacadeProps> = ({
  children,
  thumbnailImageUrl,
  imageAlt,
}): JSX.Element => {
  const [showVideo, setShowVideo] = useState(false);
  const classes = useStyles();

  return (
    <>
      {showVideo ? (
        <>{children}</>
      ) : (
        <div className={classes.wrapper}>
          <Image alt={imageAlt} objectFit="cover" layout="fill" src={thumbnailImageUrl} />
          <IconButton size="large" color="default" className={classes.playButton} onClick={() => setShowVideo(true)}>
            <PlayCircleOutlineIcon sx={{ fontSize: 98 }} />
          </IconButton>
        </div>
      )}
    </>
  );
};

export default VideoFacade;