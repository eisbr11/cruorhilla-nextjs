import { useState, FC } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Image from 'next/image';

import type { IVideoFacadeProps } from 'components/VideoFacade/VideoFacade.type';
import {
  DivVideoWrapper,
  DivWrapper,
  IconButtonPlayButton,
} from './VideoFacade.styles';

const VideoFacade: FC<IVideoFacadeProps> = ({
  children,
  thumbnailImageUrl,
  imageAlt,
}) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {showVideo ? (
        <DivVideoWrapper>{children}</DivVideoWrapper>
      ) : (
        <DivWrapper>
          <Image
            alt={imageAlt}
            src={thumbnailImageUrl}
            fill
            sizes='(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw'
            style={{
              objectFit: 'cover',
            }}
          />
          <IconButtonPlayButton
            size='large'
            color='default'
            onClick={() => setShowVideo(true)}
          >
            <PlayCircleOutlineIcon sx={{ fontSize: 98 }} />
          </IconButtonPlayButton>
        </DivWrapper>
      )}
    </>
  );
};

export default VideoFacade;
