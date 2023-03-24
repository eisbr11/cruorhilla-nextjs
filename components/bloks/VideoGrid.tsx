import { IBlokComponentProps } from '@interfaces/blok.interface';
import StyledVideoGrid from '@components/VideoGrid';
// eslint-disable-next-line import/no-cycle
import Component from '@components/bloks/index';

const VideoGrid = ({ blok }: IBlokComponentProps) => (
  <>
    {/* eslint-disable-next-line no-underscore-dangle */}
    {blok.topContent.map((blokChild) => <Component blok={blokChild} key={blokChild._uid} />)}
    <StyledVideoGrid>
      {/* eslint-disable-next-line no-underscore-dangle */}
      {blok.videos.map((blokChild) => <Component blok={blokChild} key={blokChild._uid} />)}
    </StyledVideoGrid>
  </>
);

export default VideoGrid;
