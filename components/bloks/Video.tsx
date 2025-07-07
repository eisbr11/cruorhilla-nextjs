import { Grid2 } from '@mui/material';

import type { IBlokComponentProps } from 'interfaces/blok.interface';
import VideoItem from 'components/VideoItem';

const VideoGrid = ({ blok }: IBlokComponentProps) => (
  <Grid2 size={{ md: blok.full_width ? 12 : 6, xs: 12 }}>
    <VideoItem title={blok.title} ytId={blok.youtube_id} />
  </Grid2>
);

export default VideoGrid;
