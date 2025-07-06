import React from 'react';

import { WrapperStyled } from 'components/VideoGrid/VideoGrid.styles';

interface IVideoGridProps {
  children: React.ReactNode;
}

const VideoGrid = ({ children }: IVideoGridProps) => {
  return (
    <WrapperStyled container spacing={4}>
      {children}
    </WrapperStyled>
  );
};

export default VideoGrid;
