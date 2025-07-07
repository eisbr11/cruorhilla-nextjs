import type { IBlokComponentProps } from 'interfaces/blok.interface';
import StyledVideoGrid from 'components/VideoGrid';
import Component from 'components/bloks/index';

const VideoGrid = ({ blok }: IBlokComponentProps) => (
  <>
    {}
    {blok.topContent.map((blokChild) => (
      <Component blok={blokChild} key={blokChild._uid} />
    ))}
    <StyledVideoGrid>
      {}
      {blok.videos.map((blokChild) => (
        <Component blok={blokChild} key={blokChild._uid} />
      ))}
    </StyledVideoGrid>
  </>
);

export default VideoGrid;
